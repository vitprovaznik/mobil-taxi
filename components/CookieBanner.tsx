"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import styles from "./CookieBanner.module.css";

type ConsentStatus = "denied" | "granted";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [settings, setSettings] = useState({
    ad_storage: "denied" as ConsentStatus,
    analytics_storage: "denied" as ConsentStatus,
    ad_user_data: "denied" as ConsentStatus,
    ad_personalization: "denied" as ConsentStatus,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      // Restore settings if needed, or just rely on GTM persistence if configured
      // For now, we assume if localStorage exists, we don't show the banner.
      // But we might want to re-push the consent signal on reload just in case
      try {
        const storedSettings = JSON.parse(consent);
        setSettings(storedSettings);
      } catch (e) {
        console.error("Error parsing cookie consent", e);
      }
    }
  }, []);

  const updateConsent = (newSettings: typeof settings) => {
    // Push to GTM
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", newSettings);
    }

    // Push custom event for GTM triggers
    // The user has triggers listening for 'cookie_consent_update'
    sendGTMEvent({ event: "cookie_consent_update", ...newSettings });

    // Save to local storage
    localStorage.setItem("cookie_consent", JSON.stringify(newSettings));

    setSettings(newSettings);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allGranted = {
      ad_storage: "granted" as ConsentStatus,
      analytics_storage: "granted" as ConsentStatus,
      ad_user_data: "granted" as ConsentStatus,
      ad_personalization: "granted" as ConsentStatus,
    };
    updateConsent(allGranted);
  };

  const handleRejectAll = () => {
    const allDenied = {
      ad_storage: "denied" as ConsentStatus,
      analytics_storage: "denied" as ConsentStatus,
      ad_user_data: "denied" as ConsentStatus,
      ad_personalization: "denied" as ConsentStatus,
    };
    updateConsent(allDenied);
  };

  const handleSaveSettings = () => {
    updateConsent(settings);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      {!showSettings ? (
        <div className={styles.container}>
          <div className={styles.text}>
            <p>
              Používáme cookies k personalizaci obsahu a reklam, poskytování funkcí sociálních médií a analýze naší návštěvnosti. Více informací naleznete v našich Zásadách ochrany osobních údajů .
            </p>
          </div>
          <div className={styles.actions}>
            <button onClick={() => setShowSettings(true)} className={styles.button}>
              Nastavení
            </button>
            <button onClick={handleRejectAll} className={styles.button}>
              Odmítnout
            </button>
            <button onClick={handleAcceptAll} className={`${styles.button} ${styles.buttonPrimary}`}>
              Přijmout vše
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.settingsContainer}>
          <h3 className={styles.settingsTitle}>Nastavení cookies</h3>
          <div className={styles.settingsBody}>
            <div className={styles.option}>
              <div>
                <span className={styles.optionLabel}>Nezbytné (vždy aktivní)</span>
                <span className={styles.optionDescription}>Technické cookies potřebné pro fungování webu.</span>
              </div>
              <input type="checkbox" checked disabled className={styles.checkbox} />
            </div>

            <div className={styles.option}>
              <div>
                <span className={styles.optionLabel}>Analytické</span>
                <span className={styles.optionDescription}>Pomáhají nám vylepšovat web měřením návštěvnosti.</span>
              </div>
              <input
                type="checkbox"
                checked={settings.analytics_storage === "granted"}
                onChange={(e) => setSettings({ ...settings, analytics_storage: e.target.checked ? "granted" : "denied" })}
                className={styles.checkbox}
              />
            </div>

            <div className={styles.option}>
              <div>
                <span className={styles.optionLabel}>Marketingové</span>
                <span className={styles.optionDescription}>Pro zobrazování relevantních reklam.</span>
              </div>
              <input
                type="checkbox"
                checked={settings.ad_storage === "granted"}
                onChange={(e) => {
                  const val = e.target.checked ? "granted" : "denied";
                  setSettings({
                    ...settings,
                    ad_storage: val,
                    ad_user_data: val,
                    ad_personalization: val,
                  });
                }}
                className={styles.checkbox}
              />
            </div>
          </div>
          <div className={styles.footer}>
            <button onClick={() => setShowSettings(false)} className={styles.button}>
              Zpět
            </button>
            <button onClick={handleSaveSettings} className={`${styles.button} ${styles.buttonPrimary}`}>
              Uložit nastavení
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

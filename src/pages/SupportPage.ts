import type { Page } from "../types";
import "../styles/SupportPage.css";

const CONFIG = {
  gcashQrPath:
    import.meta.env.VITE_GCASH_PATH ||
    "/assets/images/support/gcash-qr.jpg",
  gcashUrl: import.meta.env.VITE_GCASH_URL || "",

  qrphQrPath:
    import.meta.env.VITE_QRPH_PATH ||
    "/assets/images/support/qrph-qr.jpg",
  qrphUrl: import.meta.env.VITE_QRPH_URL || "",

  paypalQrPath:
    import.meta.env.VITE_PAYPAL_QR_PATH ||
    "/assets/images/support/paypal-qr.png",
  paypalUrl: import.meta.env.VITE_PAYPAL_URL || "",

  buyMeACoffeeQrPath:
    import.meta.env.VITE_BUY_ME_A_COFFEE_QR_PATH ||
    "/assets/images/support/buymeacoffee-qr.png",
  buyMeACoffeeUrl: import.meta.env.VITE_BUY_ME_A_COFFEE_URL || "",

  wiseQrPath:
    import.meta.env.VITE_WISE_QR_PATH ||
    "/assets/images/support/wise-qr.jpg",
  wiseUrl: import.meta.env.VITE_WISE_URL || "",
};

function isValidDonationUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && url.trim().length > 0;
  } catch {
    return false;
  }
}

function paymentLink(url: string, label: string): string {
  if (!isValidDonationUrl(url)) {
    return `<p class="text-muted text-small">Payment link coming soon.</p>`;
  }

  return `
    <a
      href="${url}"
      target="_blank"
      rel="noopener noreferrer"
      class="payment-direct-link"
    >
      ${label}
    </a>
  `;
}

function qrCode(path: string, alt: string): string {
  return `
    <div class="qr-container">
      <img
        src="${path}"
        alt="${alt}"
        class="qr-image"
        loading="lazy"
        onerror="this.hidden = true; this.nextElementSibling.hidden = false;"
      />
      <div class="qr-placeholder" hidden>
        <p class="text-small">QR code unavailable</p>
      </div>
    </div>
  `;
}

function paymentCard(options: {
  id: string;
  title: string;
  description: string;
  qrPath: string;
  qrAlt: string;
  url: string;
  linkLabel: string;
}): string {
  return `
    <div
      id="${options.id}"
      class="card payment-card text-center"
    >
      <h3>${options.title}</h3>
      <p class="text-muted text-small">
        ${options.description}
      </p>

      ${qrCode(options.qrPath, options.qrAlt)}

      <p class="text-small qr-instruction">
        Scan the QR code with your phone camera.
      </p>

      <div class="payment-link-wrapper">
        ${paymentLink(options.url, options.linkLabel)}
      </div>
    </div>
  `;
}

async function detectCountry(): Promise<string | null> {
  try {
    const response = await fetch("https://ipapi.co/json/", {
      signal: AbortSignal.timeout(4000),
    });

    if (!response.ok) return null;

    const data: { country_code?: string } = await response.json();
    return data.country_code?.toUpperCase() ?? null;
  } catch {
    return null;
  }
}

export class SupportPage implements Page {
  render() {
    return /* html */ `
      <div class="support-page container" data-country="unknown">

        <section class="hero-section">
          <h1>Support Shepherd Bible</h1>
         
          <p class="text-muted hero-subtitle">
             Support ongoing development, more Bible translations, new features, and bug fixes to make Shepherd Bible better for everyone.
          </p>
          
          <p class="reassurance-text">
            <span aria-hidden="true">♥</span>
            Every contribution is voluntary.
          </p>
        </section>

        <section class="section payments-section">
          <p
            id="support-payment-recommendation"
            class="text-muted text-center recommendation-text"
            aria-live="polite"
          >
            Choose the donation method that works best for you to support Shepherd Bible.
          </p>

          <div class="grid payments-grid">
            ${paymentCard({
      id: "ph-card",
      title: "GCash",
      description: "Support using GCash.",
      qrPath: CONFIG.gcashQrPath,
      qrAlt: "GCash payment QR code",
      url: CONFIG.gcashUrl,
      linkLabel: "Open GCash payment link",
    })}

     ${paymentCard({
      id: "phq-card",
      title: "PHQ",
      description: "Support using PHQ.",
      qrPath: CONFIG.qrphQrPath,
      qrAlt: "PHQ payment QR code",
      url: CONFIG.qrphUrl,
      linkLabel: "Open PHQ payment link",
    })}


            ${paymentCard({
      id: "paypal-card",
      title: "PayPal",
      description: "Support Shepherd Bible internationally.",
      qrPath: CONFIG.paypalQrPath,
      qrAlt: "PayPal QR code",
      url: CONFIG.paypalUrl,
      linkLabel: "Open PayPal",
    })}

            ${paymentCard({
      id: "bmc-card",
      title: "Buy Me a Coffee",
      description: "Contribute through our creator page.",
      qrPath: CONFIG.buyMeACoffeeQrPath,
      qrAlt: "Buy Me a Coffee QR code",
      url: CONFIG.buyMeACoffeeUrl,
      linkLabel: "Open Buy Me a Coffee",
    })}
     ${paymentCard({
      id: "wise-card",
      title: "Wise",
      description: "Support Shepherd Bible via Wise.",
      qrPath: CONFIG.wiseQrPath,
      qrAlt: "Wise QR code",
      url: CONFIG.wiseUrl,
      linkLabel: "Open Wise",
    })}
          </div>
        </section>

        <section class="section split-bottom-section">
          <div class="benefits-compact">
            <h2>How Contributions Help</h2>
            <ul class="benefits-list text-muted">
              <li><strong>Free Tools:</strong> Maintain and improve Bible-reading features.</li>
              <li><strong>Community:</strong> Support testimonies, feedback, and encouragement.</li>
              <li><strong>Updates:</strong> Fund ongoing development and maintenance.</li>
            </ul>
          </div>
        </section>

      </div>
    `;
  }


  mount() {
  const page = document.querySelector<HTMLElement>(".support-page");
  const recommendation = document.getElementById(
    "support-payment-recommendation",
  );

  if (!page) return;

  const gcashCard = document.getElementById("gcash-card");
  const qrphCard = document.getElementById("qrph-card");
  const paypalCard = document.getElementById("paypal-card");
  const bmcCard = document.getElementById("bmc-card");
  const wiseCard = document.getElementById("wise-card");

  const localCards = [gcashCard, qrphCard];
  const internationalCards = [paypalCard, bmcCard, wiseCard];

  // Hide Philippine payment methods immediately, before detection completes.
  localCards.forEach((card) => {
    if (card) card.hidden = true;
  });

  void detectCountry().then((country) => {
    page.dataset.country = country ?? "unknown";

    [...localCards, ...internationalCards].forEach((card) => {
      card?.classList.remove("payment-preferred");
    });

    if (country === "PH") {
      // Reveal Philippine methods only after PH is confirmed.
      localCards.forEach((card) => {
        if (card) card.hidden = false;
        card?.classList.add("payment-preferred");
      });
    } else {
      // Other countries or detection failure: keep local methods hidden.
      localCards.forEach((card) => {
        if (card) card.hidden = true;
      });

      // Keep international methods available.
      internationalCards.forEach((card) => {
        card?.classList.add("payment-preferred");
      });
    }

    if (recommendation) {
      recommendation.textContent =
        "Choose the donation method that works best for you to support Shepherd Bible.";
    }
  });
}

}

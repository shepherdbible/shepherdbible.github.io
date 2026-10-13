import QRCode from "qrcode";
import { platforms } from "../data/platforms";

const platformIcons: Record<string, string> = {
  windows: `
    <svg viewBox="0 0 24 24" fill="#0078D4" aria-hidden="true">
      <path d="M0 3.449L9.75 2.1v9.451H0m9.75 1.35V22.35L0 20.9v-8zm1.05-20.1L24 0v11.25H10.8m13.2 1.35V24l-13.2-1.8v-9.45"/>
    </svg>`,

  android: `
    <svg viewBox="0 0 24 24" fill="#3DDC84" aria-hidden="true">
      <path d="M17.523 15.341c-.551 0-.999-.448-.999-1s.448-.999.999-.999 1 .448 1 1-.448 1-1 1M6.477 15.341c-.551 0-1-.448-1-.999s.449-1 1-1 .999.449.999 1-.448.999-.999.999M17.881 9.321l1.997-3.459a.416.416 0 0 0-.72-.416l-2.022 3.503C15.59 8.197 13.853 7.72 12 7.72s-3.59.477-5.137 1.23L4.841 5.447a.416.416 0 0 0-.72.415l1.997 3.459C2.689 11.286.338 14.832.016 19h23.968c-.322-4.168-2.673-7.714-6.103-9.679"/>
    </svg>`,

  apple: `
    <svg viewBox="0 0 24 24" fill="#A3AAAE" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.68-.82 1.14-1.97 1.01-3.12-1 .04-2.21.67-2.92 1.5-.63.73-1.18 1.9-1.03 3.03 1.12.09 2.26-.59 2.94-1.41z"/>
    </svg>`,
};
function renderCard(platform: (typeof platforms)[number]): string {
  const action =
    platform.available && platform.storeUrl
      ? `
      <div class="platform-actions">
        <a
          href="${platform.storeUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="platform-link"
        >
          Download from Store &rarr;
        </a>
        <button
          type="button"
          class="platform-qr-button"
          data-qr-platform="${platform.id}"
          aria-label="View QR code for ${platform.name}"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM15 13h2v2h-2zM19 13h2v5h-2zM13 17h4v4h-4zM17 19h2v2h-2z"
              fill="none" stroke="currentColor"
              stroke-width="1.8" stroke-linejoin="round"/>
          </svg>
          View QR Code
        </button>
      </div>`
      : `<span class="platform-link-disabled">${platform.storeName} (Coming Soon)</span>`;

  return `
    <article class="card platform-card ${platform.id === "windows" ? "featured-platform" : ""}">
      <!-- Floating Top Icon -->
      <div class="card-top-icon platform-${platform.id}">
        ${platformIcons[platform.icon] ?? ""}
      </div>

      <div class="card-content">
        <h3>${platform.name}</h3>

        <span class="status-badge ${platform.statusClass}">
          ${platform.status}
        </span>

        <p>${platform.description}</p>

        ${action}
      </div>
    </article>`;
}
export function renderPlatformShowcase(): string {
  return `
    <section class="section platforms-section">
      <div class="container text-center">
        <h2>Available Everywhere You Are</h2>
        <p class="section-lead">
          Study Scripture seamlessly on desktop or mobile — online or offline.
        </p>

        <div class="grid grid-4 platform-grid">
          ${platforms.map(renderCard).join("")}
        </div>
      </div>
    </section>

    <div class="qr-modal" id="platform-qr-modal"
         aria-hidden="true" role="dialog"
         aria-modal="true" aria-labelledby="platform-qr-title">

      <div class="qr-modal-backdrop" data-qr-close></div>

      <div class="qr-modal-content">
        <button type="button" class="qr-modal-close"
                data-qr-close aria-label="Close QR code">
          &times;
        </button>

        <p class="qr-eyebrow">GET THE APP</p>
        <h2 id="platform-qr-title">Scan to download</h2>
        <p class="qr-modal-description" id="platform-qr-description">
          Scan this code with your phone's camera.
        </p>

        <div class="qr-code-frame" id="platform-qr-frame">
          <canvas id="platform-qr-canvas"
                  aria-label="QR code for the app store"></canvas>
          <div class="qr-center-icon" id="platform-qr-icon"
               aria-hidden="true"></div>
        </div>

        <p class="qr-store-label" id="platform-qr-store"></p>

        <a id="platform-qr-open" class="platform-link"
           href="#" target="_blank" rel="noopener noreferrer">
          Open Store &rarr;
        </a>
      </div>
    </div>`;
}

export function initPlatformShowcase(): void {
  const getElement = <T extends HTMLElement>(selector: string): T => {
    const element = document.querySelector<T>(selector);

    if (!element) {
      throw new Error(`Required element not found: ${selector}`);
    }

    return element;
  };

  let modal: HTMLDivElement;
  let canvas: HTMLCanvasElement;
  let title: HTMLElement;
  let description: HTMLElement;
  let storeLabel: HTMLElement;
  let centerIcon: HTMLElement;
  let openLink: HTMLAnchorElement;
  let closeButton: HTMLButtonElement | null;

  try {
    modal = getElement<HTMLDivElement>("#platform-qr-modal");
    canvas = getElement<HTMLCanvasElement>("#platform-qr-canvas");
    title = getElement<HTMLElement>("#platform-qr-title");
    description = getElement<HTMLElement>("#platform-qr-description");
    storeLabel = getElement<HTMLElement>("#platform-qr-store");
    centerIcon = getElement<HTMLElement>("#platform-qr-icon");
    openLink = getElement<HTMLAnchorElement>("#platform-qr-open");

    closeButton = modal.querySelector<HTMLButtonElement>(".qr-modal-close");
  } catch (error: unknown) {
    console.error("QR modal initialization failed:", error);
    return;
  }

  let previousFocus: HTMLElement | null = null;

  async function showQr(platformId: string): Promise<void> {
    const platform = platforms.find((item) => item.id === platformId);

    if (!platform?.available || !platform.storeUrl) {
      return;
    }

    previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    title.textContent = `${platform.name} QR Code`;
    description.textContent = "Scan with your phone to open the app listing.";
    storeLabel.textContent = platform.storeName;
    centerIcon.innerHTML = platformIcons[platform.icon] ?? "";
    openLink.href = platform.storeUrl;

    canvas.hidden = false;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("qr-modal-open");

    try {
      await QRCode.toCanvas(canvas, platform.storeUrl, {
        width: 260,
        margin: 2,
        errorCorrectionLevel: "H",
        color: {
          dark: "#211a1d",
          light: "#ffffff",
        },
      });
    } catch (error: unknown) {
      console.error("QR code generation failed:", error);
      canvas.hidden = true;
      description.textContent =
        "Unable to generate the QR code. Use the Open Store link instead.";
    }

    closeButton?.focus();
  }

  function closeModal(): void {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("qr-modal-open");
    previousFocus?.focus();
  }

  document.addEventListener("click", (event: MouseEvent) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const qrButton = target.closest<HTMLButtonElement>("[data-qr-platform]");

    if (qrButton) {
      void showQr(qrButton.dataset.qrPlatform ?? "");
      return;
    }

    if (target.closest("[data-qr-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const isValidGaId = (id: string | undefined): id is string =>
  typeof id === 'string' &&
  /^G-[A-Z0-9]{6,20}$/i.test(id.trim()) &&
  !/XXXX|YOUR|PLACEHOLDER/i.test(id);

export function initAnalytics() {
  if (!isValidGaId(GA_ID)) {
    if (GA_ID && import.meta.env.DEV) {
      console.warn('[Paqt] VITE_GA_MEASUREMENT_ID is set but looks invalid. Google Analytics not loaded.');
    }
    return;
  }

  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);
}

export function track(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}
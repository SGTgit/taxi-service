import { Component } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS, WA_LINK, TEL1 } from '../../config/business.js';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log error for debugging — keep simple for now
    // In production, send to monitoring endpoint (Sentry, LogRocket, etc.)
    // eslint-disable-next-line no-console
    console.error('Uncaught error in component tree:', error, info);
    // If Sentry was initialized, capture the exception with additional info
    // eslint-disable-next-line no-undef
    if (typeof window !== 'undefined' && window.SENTRY && window.SENTRY.captureException) {
      try {
        // Add component stack if available
        window.SENTRY.captureException(error, { extra: info });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('Sentry capture failed', e);
      }
    }
  }

  render() {
    if (this.state.hasError) {
      const errorText = String(this.state.error || '');
      const shortError = errorText.length > 300 ? `${errorText.slice(0, 300)}...` : errorText;

      const openWhatsAppReport = () => {
        const msg = `Hi ${BUSINESS.name} team,%0A%0AI encountered an error on the website at ${window.location.href}.%0A%0AError:%0A${encodeURIComponent(shortError)}%0A%0APlease investigate.`;
        const wa = `https://wa.me/${BUSINESS.whatsapp}?text=${msg}`;
        window.open(wa, '_blank');
      };

      const mailtoBody = encodeURIComponent(`I encountered an error on ${window.location.href}\n\nError:\n${shortError}`);

      return (
        <div className="min-h-screen flex items-center justify-center bg-[#fffaf3] dark:bg-[#060f1e] p-6">
          <div className="max-w-xl rounded-xl border border-[#eadbc7] bg-white p-6 text-center dark:border-[#c9964a]/20 dark:bg-[#0a1829]">
            <div className="flex items-center justify-center gap-3">
              <img src="/assets/icons/notextlogo.webp" alt="Gautam Taxi and Bus logo" className="h-12 w-12 rounded" />
              <div className="text-left">
                <div className="text-sm font-bold text-[#0d1b2a] dark:text-white">{BUSINESS.name}</div>
                <div className="text-xs text-[#6b7280] dark:text-white/60">{BUSINESS.tagline}</div>
              </div>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-[#0d1b2a] dark:text-white">Something went wrong</h2>
            <p className="mt-2 text-sm text-[#6b7280] dark:text-white/70">An unexpected error occurred while loading this page. You can reload the page, contact us directly, or send an automated report.</p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => window.location.reload()}
                className="rounded border border-[#c9964a] px-3 py-2 text-sm font-bold text-[#c9964a] hover:bg-[#c9964a] hover:text-white"
              >
                Reload
              </button>

              <a
                href={TEL1}
                className="inline-flex items-center justify-center rounded border border-[#c9964a] px-3 py-2 text-sm font-bold text-[#0d1b2a] hover:bg-[#f5eadb]"
              >
                Call Us
              </a>

              <button
                onClick={openWhatsAppReport}
                className="rounded bg-[#25D366] px-3 py-2 text-sm font-bold text-white"
              >
                Report via WhatsApp
              </button>
            </div>

            <div className="mt-4 flex justify-center gap-3">
              <a
                href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent('Website Error Report')}&body=${mailtoBody}`}
                className="text-xs text-[#6b7280] underline"
              >
                Send report via email
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#6b7280] underline"
              >
                Contact on WhatsApp
              </a>
            </div>

            <details className="mt-4 text-left text-xs text-[#9ca3af] dark:text-white/50">
              <summary className="cursor-pointer">Error details (expand)</summary>
              <pre className="whitespace-pre-wrap mt-2 text-[12px]">{errorText}</pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

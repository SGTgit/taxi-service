import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import { BUSINESS } from './config/business.js';

async function initMonitoring() {
  try {
    if (BUSINESS.MONITORING && BUSINESS.MONITORING.sentryEnabled && BUSINESS.MONITORING.sentryDsn) {
      // Dynamically import Sentry only when enabled to avoid bundle cost
      const Sentry = await import('@sentry/react');
      // Initialize with DSN
      Sentry.init({
        dsn: BUSINESS.MONITORING.sentryDsn,
        // Keep tracesSampleRate low by default; adjust as needed
        tracesSampleRate: 0.02,
      });
      // Expose for ErrorBoundary usage
      // eslint-disable-next-line no-undef
      window.SENTRY = Sentry;
      // eslint-disable-next-line no-console
      console.info('Sentry initialized');
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Failed to initialize monitoring', err);
  }
}

initMonitoring().finally(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});

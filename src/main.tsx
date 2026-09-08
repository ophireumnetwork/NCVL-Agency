import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * Ignore errors coming specifically from browser extensions.
 *
 * This is useful in environments where extensions such as MetaMask
 * inject scripts into the page and generate errors that are unrelated
 * to the application itself.
 *
 * Do not broadly suppress errors containing words such as "ethereum"
 * because doing so may hide legitimate application errors.
 */
if (typeof window !== 'undefined') {
  const isBrowserExtensionError = (
    message = '',
    source = ''
  ): boolean => {
    const normalizedMessage = message.toLowerCase();
    const normalizedSource = source.toLowerCase();

    return (
      normalizedSource.startsWith('chrome-extension://') ||
      normalizedSource.startsWith('moz-extension://') ||
      normalizedMessage.includes('chrome-extension://') ||
      normalizedMessage.includes('moz-extension://') ||
      normalizedMessage.includes('metamask') ||
      normalizedSource.includes('metamask')
    );
  };

  window.addEventListener(
    'unhandledrejection',
    (event: PromiseRejectionEvent) => {
      const reason = event.reason;

      const message =
        typeof reason === 'string'
          ? reason
          : reason instanceof Error
            ? reason.message
            : String(reason ?? '');

      const stack =
        reason instanceof Error ? reason.stack ?? '' : '';

      if (isBrowserExtensionError(message, stack)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true
  );

  window.addEventListener(
    'error',
    (event: ErrorEvent) => {
      const message =
        event.message ||
        (event.error instanceof Error ? event.error.message : '');

      const source =
        event.filename ||
        (event.error instanceof Error ? event.error.stack ?? '' : '');

      if (isBrowserExtensionError(message, source)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'React root element was not found. Make sure index.html contains <div id="root"></div>.'
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

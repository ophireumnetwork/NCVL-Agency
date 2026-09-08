import React, { ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error('Application Error Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#111116] border border-amber-500/40 rounded-xl p-8 text-center shadow-2xl">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 font-bold text-2xl">
              !
            </div>
            <h1 className="text-xl font-bold font-serif mb-2 text-white">NCVL Security Agency</h1>
            <p className="text-sm text-zinc-400 mb-6">
              The application encountered an unexpected issue while rendering. Please reload the page.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold rounded-lg text-sm transition-all cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

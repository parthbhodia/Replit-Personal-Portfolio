// Crypto polyfill for Vite compatibility
import { webcrypto } from 'crypto';

// Ensure crypto is available globally
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto as any;
}

// Also ensure getRandomValues is available
if (!globalThis.crypto.getRandomValues) {
  globalThis.crypto.getRandomValues = webcrypto.getRandomValues.bind(webcrypto) as any;
} 
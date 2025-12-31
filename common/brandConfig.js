// brandConfig.js - 4HISGLORY Brand Configuration
// Single source of truth for 4HISGLORY brand settings on Lainland

export const BRAND_REGISTRY = [
  "4hisglory",
  "lainland",
];

// Resolve brand safely
function resolveBrand() {
  const envBrand = process.env.NEXT_PUBLIC_BRAND_NAME?.toLowerCase();
  if (!envBrand || !BRAND_REGISTRY.includes(envBrand)) {
    console.warn(
      `\n⚠️ WARNING: Invalid or missing NEXT_PUBLIC_BRAND_NAME → Using fallback: 4hisglory`
    );
    return "4hisglory";
  }
  return envBrand;
}

// Default emails for 4HISGLORY
const DEFAULT_FROM_EMAIL = "noreply@lainland.com";
const DEFAULT_SUPPORT_EMAIL = "support@lainland.com";

// Generate domain map
export function getBrandDomains(brand) {
  return {
    marketingHost: `https://www.lainland.com`,
    marketingRoot: `https://lainland.com`,
    domain: "lainland.com",
  };
}

// Unified API endpoint resolver
function resolveApiEndpoints(brand) {
  // Use specific endpoint URLs from env vars, or construct from base URL
  const contactUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;
  const subscribeUrl = process.env.NEXT_PUBLIC_SUBSCRIBE_API_URL;
  const unsubscribeUrl = process.env.NEXT_PUBLIC_UNSUBSCRIBE_API_URL;

  // Fallback to constructing URLs if specific endpoints not provided
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://dpo90o3e8e.execute-api.us-east-1.amazonaws.com/prod';

  return {
    contact: contactUrl || `${apiBaseUrl}/public/contact`,
    subscribe: subscribeUrl || `${apiBaseUrl}/public/subscribe`,
    unsubscribe: unsubscribeUrl || `${apiBaseUrl}/public/unsubscribe`,
    collaboration: contactUrl || `${apiBaseUrl}/public/contact`, // Use same endpoint as contact
  };
}

// Turnstile/CAPTCHA key logic
function resolveTurnstileKeys(brand) {
  return {
    siteKey:
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
      "0x4AAAAAAB7f8DEFAULTKEY",
  };
}

// MAIN EXPORT — used by all forms, pages, and components
export function getBrandConfig() {
  const brand = resolveBrand();

  const supportEmail =
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL || DEFAULT_SUPPORT_EMAIL;

  const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  return {
    brand,
    supportEmail,
    fromEmail,

    domains: getBrandDomains(brand),

    api: resolveApiEndpoints(brand),

    turnstile: resolveTurnstileKeys(brand),

    // Features for 4HISGLORY
    features: {
      hasSubscribe: true,
      hasUnsubscribe: true,
      hasCollaboration: true,
    },
  };
}

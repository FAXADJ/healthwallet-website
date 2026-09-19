/** Public website details. Replace bracketed values before publishing. */
export const appConfig = {
  appName: 'HealthWallet',
  tagline: 'Your health information, close at hand.',
  description:
    'Keep your medical summary together, share it when you choose, and find nearby care in the Kurdistan Region of Iraq.',
  developerName: '[LEGAL DEVELOPER NAME]',
  websiteUrl: '', // e.g. https://your-owned-domain.example — never use an unowned domain
  supportEmail: '[SUPPORT EMAIL]',
  supportPhone: '+9647501704042', // shown in the mobile app's Settings screen; confirm before publication
  privacyEmail: '[PRIVACY CONTACT EMAIL]',
  postalAddress: '[LEGAL POSTAL ADDRESS]',
  country: '[COUNTRY OF LEGAL OPERATOR]',
  privacyEffectiveDate: '[EFFECTIVE DATE]',
  appStoreUrl: '',
  googlePlayUrl: '',
  socialUrls: {} as Record<string, string>,
} as const;

export const isConfiguredUrl = (value: string) => /^https:\/\/[^\s\[\]]+\.[^\s\[\]]+$/.test(value);
export const isConfiguredEmail = (value: string) => /^[^\s@\[\]]+@[^\s@\[\]]+\.[^\s@\[\]]+$/.test(value);

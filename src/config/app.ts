/** Public website details. Values in [BRACKETS] must be replaced before store submission. */
export const appConfig = {
  appName: 'HealthWallet',
  tagline: 'Your health information, close at hand.',
  description:
    'Keep your medical summary together, share it when you choose, and find nearby care in the Kurdistan Region of Iraq.',
  developerName: 'Rawaz Yassin',
  websiteUrl: 'https://healthwallet.health',
  supportEmail: 'rawazyas@gmail.com',
  supportPhone: '+9647501704042', // same number as the app's Settings screen (lib/screens/settings_screen.dart)
  privacyEmail: 'rawazyas@gmail.com',
  postalAddress: 'Sulaymaniyah, Kurdistan Region',
  country: 'Iraq',
  privacyEffectiveDate: '22 September 2026',
  /** Youngest age allowed to create an account. */
  minimumAge: 18 as number | null,
  appStoreUrl: '',
  googlePlayUrl: '',
  socialUrls: {} as Record<string, string>,
} as const;

export const isConfiguredUrl = (value: string) => /^https:\/\/[^\s\[\]]+\.[^\s\[\]]+$/.test(value);
export const isConfiguredEmail = (value: string) => /^[^\s@\[\]]+@[^\s@\[\]]+\.[^\s@\[\]]+$/.test(value);
/** False for empty values and unreplaced [PLACEHOLDERS]. */
export const isFilled = (value: string) => value.trim() !== '' && !/\[[^\]]+\]/.test(value);

/** Every legal detail the privacy policy needs is present. Hides the internal notices. */
export const publicationReady =
  isFilled(appConfig.developerName) &&
  isConfiguredEmail(appConfig.privacyEmail) &&
  isFilled(appConfig.postalAddress) &&
  isFilled(appConfig.country) &&
  isFilled(appConfig.privacyEffectiveDate) &&
  appConfig.minimumAge !== null;

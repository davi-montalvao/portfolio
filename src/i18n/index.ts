export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
};

export const localeFlags: Record<Locale, string> = {
  pt: '🇧🇷',
  en: '🇺🇸',
};

// Função para obter traduções
export async function getTranslations(locale: Locale) {
  try {
    const module = await import(`./locales/${locale}.json`);
    return module.default;
  } catch (error) {
    console.error('Error loading locale:', error);
    // Fallback para português
    const fallbackModule = await import('./locales/pt.json');
    return fallbackModule.default;
  }
}

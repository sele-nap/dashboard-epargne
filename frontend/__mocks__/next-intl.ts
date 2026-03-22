const useTranslations = () => (key: string) => {
  const map: Record<string, string> = {
    amount: 'Montant',
    funds: 'Fonds',
    allocation: 'Allocation',
    confirmation: 'Confirmation',
  };
  return map[key] ?? key;
};

const useLocale = () => 'fr';

module.exports = { useTranslations, useLocale };

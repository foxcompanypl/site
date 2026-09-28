export type Locale = 'en' | 'pl';

export const locales: Locale[] = ['en', 'pl'];

export const company = {
  name: 'Foxcompany',
  legalName: 'Foxcompany Łukasz Lis',
  nip: '8522652355',
  regon: '381948672',
  email: 'biuro@foxcompany.pl',
  domain: 'foxcompany.pl',
  url: 'https://foxcompany.pl',
  street: 'ul. Świętego Ducha 6-11',
  postalCode: '70-205',
  city: 'Szczecin',
  countryCode: 'PL',
};

export const languageNames: Record<Locale, string> = {
  en: 'English',
  pl: 'Polski',
};

type Copy = {
  title: string;
  description: string;
  languageNav: string;
  headline: string;
  intro: string;
  contact: string;
  registry: string;
  fields: { name: string; nip: string; regon: string; address: string; country: string };
  country: string;
  notFound: string;
  backHome: string;
};

export const copy: Record<Locale, Copy> = {
  en: {
    title: 'Foxcompany, mobile and web apps',
    description:
      'Foxcompany is a software house run by Łukasz Lis. We build iOS and Android apps and web applications in Poland.',
    languageNav: 'Language',
    headline: 'We design and build mobile and web apps.',
    intro:
      'Foxcompany is a software house run by Łukasz Lis. We build iOS and Android apps and the web applications that work with them.',
    contact: 'Contact',
    registry: 'Registered business',
    fields: { name: 'Name', nip: 'NIP', regon: 'REGON', address: 'Address', country: 'Country' },
    country: 'Poland',
    notFound: 'Page not found',
    backHome: 'Back to foxcompany.pl',
  },
  pl: {
    title: 'Foxcompany, aplikacje mobilne i webowe',
    description:
      'Foxcompany to software house prowadzony przez Łukasza Lisa. Tworzymy aplikacje na iOS i Androida oraz aplikacje webowe.',
    languageNav: 'Język',
    headline: 'Projektujemy i budujemy aplikacje mobilne i webowe.',
    intro:
      'Foxcompany to software house prowadzony przez Łukasza Lisa. Tworzymy aplikacje na iOS i Androida oraz aplikacje webowe, które z nimi współpracują.',
    contact: 'Kontakt',
    registry: 'Dane rejestrowe',
    fields: { name: 'Firma', nip: 'NIP', regon: 'REGON', address: 'Adres', country: 'Kraj' },
    country: 'Polska',
    notFound: 'Nie znaleziono strony',
    backHome: 'Wróć na foxcompany.pl',
  },
};

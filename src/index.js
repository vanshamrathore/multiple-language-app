import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import enTranslation from './utils/constant/en.json';
import hiTranslation from './utils/constant/hi.json';
import frTranslation from './utils/constant/fr.json';

import { BrowserRouter } from 'react-router-dom';

const userLanguage = navigator.language.split('-')[0]; // Get the user's preferred language

i18n
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      fr: { translation: frTranslation },
    },
    lng: userLanguage, // Set the user's preferred language as the default
    fallbackLng: 'en',
  });

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById('root')
);

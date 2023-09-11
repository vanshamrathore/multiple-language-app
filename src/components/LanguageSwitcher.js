import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="language-dropdown">
          {t('language')}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleLanguageChange('en')}>
            {t('language.english')}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleLanguageChange('hi')}>
            {t('language.hindi')}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleLanguageChange('fr')}>
            {t('language.french')}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;

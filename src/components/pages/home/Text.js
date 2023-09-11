import React from 'react'
import './Home.css';
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

function Text() {
  const { t } = useTranslation();
  return (
    <Typewriter
      options={{
        strings: [
          t('dev1'),
          t('dev2'),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text
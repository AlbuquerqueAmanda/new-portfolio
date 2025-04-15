import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// Hook para acessar o contexto mais facilmente
export const useLanguage = () => useContext(LanguageContext);

// Provider que vai envolver sua aplicação
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    // Carrega do localStorage ao iniciar
    const storedLang = localStorage.getItem('language');
    if (storedLang) setLanguage(storedLang);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Salva a escolha
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

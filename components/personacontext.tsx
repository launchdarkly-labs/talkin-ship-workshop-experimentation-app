// PersonaContext.js
import React, { createContext, useState, useEffect } from 'react';

export const PersonaContext = createContext(null);

export const PersonaProvider = ({ children }) => {
  const [personas, setPersonas] = useState([]);

  const getPersonas = () => {
    const starterPersonas = [
      {
        personaname: "Cody",
        personatype: "Standard User",
        personaimage: "standard.jpg",
        personaemail: "cody@launchmail.io",
      },
      {
        personaname: "Alysha",
        personatype: "Beta User",
        personaimage: "beta.png",
        personaemail: "alysha@launchmail.io",
      },
      {
        personaname: "Jenn",
        personatype: "Developer",
        personaimage: "woman.png",
        personaemail: "jenn@launchmail.io",
      },
    ];
    setPersonas(starterPersonas);
  };

  return (
    <PersonaContext.Provider value={{ personas, getPersonas }}>
      {children}
    </PersonaContext.Provider>
  );
};
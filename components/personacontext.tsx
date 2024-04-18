// PersonaContext.js
import React, { createContext, useState, useEffect } from 'react';

export const PersonaContext = createContext(null);

export const PersonaProvider = ({ children }) => {
  const [personas, setPersonas] = useState([]);
  const [error, setError] = useState(null);

  const getPersonas =  () => {

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
  }

  const addPersona = async (newPersona) => {
    fetch('/api/personas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPersona),
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.error) {
          setError(data.error);
        } else {
          setPersonas(prevPersonas => [...prevPersonas, data]);
        }
      })
      .catch(error => {
        setError('Failed to create new persona. Please try again.');
      });
  };

  const deleteAllPersonas = async () => {
    fetch('/api/personas', {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setPersonas([]);
        } else {
          throw new Error('Failed to delete all personas');
        }
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <PersonaContext.Provider value={{ personas, error, addPersona, deleteAllPersonas, getPersonas }}>
      {children}
    </PersonaContext.Provider>
  );
};
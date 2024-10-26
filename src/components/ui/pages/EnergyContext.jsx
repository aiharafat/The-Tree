// EnergyContext.js
import React, { createContext, useState, useEffect } from "react";

export const EnergyContext = createContext();

export const EnergyProvider = ({ children }) => {
  const maxEnergy = 1000;
  const refillRate = 1; // 1 energy per second
  const [energy, setEnergy] = useState(() => {
    const savedEnergy = parseInt(localStorage.getItem("energy")) || maxEnergy;
    const lastUpdated = parseInt(localStorage.getItem("lastUpdated")) || Date.now();
    const elapsedTime = Math.floor((Date.now() - lastUpdated) / 1000);
    const energyToAdd = Math.min(elapsedTime * refillRate, maxEnergy - savedEnergy);
    return Math.min(savedEnergy + energyToAdd, maxEnergy);
  });

  useEffect(() => {
    // Update energy every second
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => {
        const newEnergy = Math.min(prevEnergy + refillRate, maxEnergy);
        localStorage.setItem("energy", newEnergy);
        localStorage.setItem("lastUpdated", Date.now());
        return newEnergy;
      });
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <EnergyContext.Provider value={{ energy, setEnergy }}>
      {children}
    </EnergyContext.Provider>
  );
};

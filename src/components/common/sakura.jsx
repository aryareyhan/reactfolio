import React, { useEffect, useState } from 'react';
import './styles/sakura.css'; // Import CSS file with animation styles

const SakuraPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPetals = [...petals];
      const petal = {
        id: Date.now(),
        left: Math.random() * 100, // Randomize left position
        animationDuration: Math.random() * 5 + 5, // Randomize animation duration
        size: Math.random() * 15 + 5, // Randomize petal size
      };
      newPetals.push(petal);
      setPetals(newPetals);

      // Clean up after the petal has fallen off the screen
      setTimeout(() => {
        setPetals(prevPetals => prevPetals.filter(item => item.id !== petal.id));
      }, petal.animationDuration * 1000);
    }, 3000); // Add a new petal every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [petals]);

  return (
    <div className="sakura-container">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            width: `${petal.size}px`, // Set petal size
            height: `${petal.size}px`, // Set petal size
          }}
        />
      ))}
    </div>
  );
};

export default SakuraPetals;

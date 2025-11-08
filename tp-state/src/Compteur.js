import { useState, useEffect } from 'react';

function CompteurEffet() {
  const [clics, setClics] = useState(0);

  useEffect(() => {
    document.title = `Clics : ${clics}`;
  }, [clics]);

  const couleur = clics % 2 === 0 ? 'green' : 'red';

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2 style={{ color: couleur }}>Compteur : {clics}</h2>
      <button onClick={() => setClics(clics + 1)}>Cliquer</button>
      <button onClick={() => setClics(0)} style={{ marginLeft: '10px' }}>Réinitialiser</button>
    </div>
  );
}

export default CompteurEffet;

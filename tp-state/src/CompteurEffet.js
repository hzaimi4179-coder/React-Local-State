import { useState, useEffect } from 'react';

function CompteurEffet() {
  const [clics, setClics] = useState(0);

  useEffect(() => {
    document.title = `Clics : ${clics}`;
  }, [clics]);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Compteur : {clics}</h2>
      <button onClick={() => setClics(clics + 1)}>Incrémenter avec effet</button>
    </div>
  );
}

export default CompteurEffet;

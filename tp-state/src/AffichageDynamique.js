import { useState } from 'react';

function AffichageDynamique() {
  const [compteur, setCompteur] = useState(0);

  const textes = ["Premier clic", "Deuxième clic", "Troisième clic", "Encore un clic !"];
  const couleurs = ["red", "green", "blue", "purple"];

  const texteActuel = textes[compteur % textes.length];
  const couleurActuelle = couleurs[compteur % couleurs.length];

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2 style={{ color: couleurActuelle }}>{texteActuel}</h2>
      <button onClick={() => setCompteur(compteur + 1)}>Changer le texte</button>
      <button onClick={() => setCompteur(0)} style={{ marginLeft: '10px' }}>Réinitialiser</button>
    </div>
  );
}

export default AffichageDynamique;

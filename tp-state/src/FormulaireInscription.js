import { useState } from 'react';

function FormulaireInscription() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prenom || !email) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    alert(`Prénom : ${prenom}\nEmail : ${email}`);
    setSubmitted(true);
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2>Formulaire d'inscription</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Prénom : </label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Email : </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: '15px' }}>Valider</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Prénom saisi :</strong> {prenom}</p>
          <p><strong>Email saisi :</strong> {email}</p>
        </div>
      )}
    </div>
  );
}

export default FormulaireInscription;

// App.js
import AffichageDynamique from './AffichageDynamique';
import FormulaireInscription from './FormulaireInscription';
import CompteurEffet from './CompteurEffet';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>TP2 - React Interactif </h1>

      <AffichageDynamique />
      <hr />
      <FormulaireInscription />
      <hr />
      <CompteurEffet />
    </div>
  );
}

export default App;

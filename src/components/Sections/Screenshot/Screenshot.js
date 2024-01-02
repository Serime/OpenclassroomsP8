import './Screenshot.scss';
import { useRef, useEffect } from "react";

function SectionScreenshot() {
  const FirstInputRef = useRef(null);

  useEffect(() => {
    if (FirstInputRef !== undefined) {
      FirstInputRef.current.checked = true;
    }
  }, []);

  return (
    <section className='SectionScreenshot'>
      <div className="wrapper">
        <h3>Capture d'écran</h3>
        <div className="container">
          <input ref={FirstInputRef} type="radio" name="slide" id="c1"/>
          <label for="c1" className="card">
            <div className="row">
              <img src='Partie en cours.png' alt="Capture d'écran du jeu Doukro"></img>
              <div className="icon">1</div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2"/>
          <label for="c2" className="card">
            <div className="row">
              <img src='Partie en cours.png' alt="Capture d'écran du jeu Doukro"></img>
              <div className="icon">2</div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3"/>
          <label for="c3" className="card">
            <div className="row">
              <img src='Partie en cours.png' alt="Capture d'écran du jeu Doukro"></img>
              <div className="icon">3</div>
            </div>
          </label>            
          <input type="radio" name="slide" id="c4"/>
          <label for="c4" className="card">
            <div className="row">
              <img src='Partie en cours.png' alt="Capture d'écran du jeu Doukro"></img>
              <div className="icon">4</div>
            </div>
          </label>
        </div>
      </div>
      <div className='buttons'>
        <button>Voir le site</button>
        <button>
          <img id='GitHub_Name' src='github-mark.svg' alt="Capture d'écran du site Kasa"></img>
          <img id='GitHub_Logo' src='GitHub_Logo.png' alt="Capture d'écran du site Kasa"></img>
        </button>
      </div>
    </section>
  );
}

export default SectionScreenshot;
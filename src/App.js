import './App.css';
import './SectionTechDoukro.scss';
import './SectionIntroduceDoukro.scss';
import './SectionKasa.scss';
import './Header.scss';
import Footer from './components/Footer/Footer';
import SectionScreenshot from './components/Sections/Screenshot/Screenshot';

// <a href='https://serime.github.io/' target="_blank" rel="noreferrer">Lien du site</a>

function App() {
  return (
    <div className="App">
      <header>
        <div className='gradient-border'>
          <div>
            <h1>Nicolas Gaillard-Melac</h1>
            <span>Développeur Web</span>
          </div>
        </div>
      </header>
      <section className='SectionKasa'>
        <h2>Kasa</h2>
        <p>Intégration d'une maquette <strong>Figma</strong> avec une <strong>React</strong> tout en étant <strong>responsive</strong> et en faisant attention à l'<strong>accessiblilité</strong></p>
        <div className='ImageKasa'>
          <img id='ImageMobile' src='Kasa_Mobile.png' alt="Capture d'écran mobile du site Kasa"></img>
          <img id='ImageDesktop' src='Kasa_Desktop.png' alt="Capture d'écran du site Kasa"></img>
        </div>
        <div className='buttons'>
          <button>SITE</button>
          <button>
            <img id='GitHub_Name' src='github-mark.svg' alt="Capture d'écran du site Kasa"></img>
            <img id='GitHub_Logo' src='GitHub_Logo.png' alt="Capture d'écran du site Kasa"></img>
          </button>
        </div>
      </section>
      <section className='SectionIntroduceDoukro'>
        <h2>Mon projet du moment</h2>
        <span>Doukro</span>
        <p>Un jeu de carte en <strong>multijoueur temps réel</strong> dont les images des cartes sont généré par <strong>IA</strong></p>
        <div className='Card_Images'>
          <img src='Card_Images/Border crossing.png' alt="Carte Border crossing du jeu Doukro"></img>
          <img src='Card_Images/Former blacksmith.png' alt="Carte Former blacksmith du jeu Doukro"></img>
          <img src='Card_Images/Knight guarding the entrance to the city.png' alt="Carte Knight guarding the entrance to the city du jeu Doukro"></img>
          <img src='Card_Images/Luminous deity.png' alt="Carte Luminous deity du jeu Doukro"></img>
        </div>
      </section>
      <section className='SectionTechDoukro'>
        <h3>Architecture global du projet</h3>
        <p>Une application web <strong>React</strong> avec une <strong>API</strong> pour l'authentification des utilisateurs et les <strong>WebSocket</strong> pour le temps réel</p>
        <img className='LogoTech LogoReact' src='Tech_Logo/React.png' alt='Logo de React'/>
        <img className='LogoTech LogoMongoDB' src='Tech_Logo/MongoDB.png' alt='Logo de MongoDB'/>
        <div className='Docker'>
          <img className='LogoDocker' src='Tech_Logo/Docker.svg' alt='Logo de Docker'/>
          <div className='NodeJS'>
            <img className='LogoNodeJS' src='Tech_Logo/NodeJS.svg' alt='Logo de NodeJS'/>
            <div className='MongoConnection'></div>            
            <div className='ReactExpressConnectionRight'></div>
            <div className='ReactExpressMessageRight'>
              <span>Requête</span>
            </div>
            <div className='ReactExpressConnectionLeft'></div>
            <div className='ReactExpressMessageLeft'>
              <span>Réponse</span>
            </div>
            <div className="arrow ExpressRight"></div>
            <div className="arrow ExpressLeft"></div>
            <div className='ReactSocketIOConnection'></div>
            <div className='ReactSocketIOMessage'>
              <span>Nouveau Message</span>
            </div>
            <div className="arrow SocketIORight"></div>
            <div className="arrow SocketIOLeft"></div>
            <img className='LogoExpress' src='Tech_Logo/Express.png' alt='Logo de Express'/>
            <img className='LogoSocketIO' src='Tech_Logo/SocketIO.png' alt='Logo de SocketIO'/>
          </div>
        </div>        
      </section>
      <SectionScreenshot/>
      <Footer/>
    </div>
  );
}

export default App;

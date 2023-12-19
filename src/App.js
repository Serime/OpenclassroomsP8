import './App.css';
import './SectionTechDoukro.scss';

import styled from "styled-components";

const SectionTechDoukro = styled.section`
`;


function App() {
  return (
    <div className="App">
      <header></header>
      <SectionTechDoukro className='SectionTechDoukro'>
        <h3>Architecture global du projet</h3>
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
            <div class="arrow ExpressRight"></div>
            <div class="arrow ExpressLeft"></div>
            <div className='ReactSocketIOConnection'></div>
            <div className='ReactSocketIOMessage'>
              <span>Nouveau Message</span>
            </div>
            <div class="arrow SocketIORight"></div>
            <div class="arrow SocketIOLeft"></div>
            <img className='LogoExpress' src='Tech_Logo/Express.png' alt='Logo de Express'/>
            <img className='LogoSocketIO' src='Tech_Logo/SocketIO.png' alt='Logo de SocketIO'/>
          </div>
        </div>
      </SectionTechDoukro>
      <footer></footer>
    </div>
  );
}

export default App;

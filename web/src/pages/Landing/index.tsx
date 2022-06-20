
import ladingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.svg';

import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';

import './styles.css';

export function Landing() {
  return (
    <div id="page-lading">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={ladingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"
         />

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas 
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div> 
    </div>
  );
}

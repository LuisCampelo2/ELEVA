import logoProject from "../../assets/imgs/logo1.png";

export const HighLightProjectCard = () => {
  return (
    <>
      <div className="card-container">
        <img className="logo-project-home" src={logoProject} alt="" />
        <div className="info-project-home">
          <h1>Zap List</h1>
          <ul>
            <li>Luis Filipe Campelo</li>
            <li>Matheus</li>
            <li>Diego Sousa</li>
          </ul>
          <button className="btn-show-project">Ver projeto</button>
        </div>
      </div>
    </>
  );
};

import placeholder from "../../assets/imgs/placeholder.png";

export const StudentCard = () => {
  return (
    <>
      <div className="student-container">
        <div>
          <img src={placeholder} alt="Projeto" />
        </div>
        <div className="info-student">
          <h1 style={{ fontSize: 32 }} className="name-project">
            NOME DO ESTUDANTE
          </h1>
          <p>Descrição geral do estudante</p>
          <div></div>
        </div>
      </div>
    </>
  );
};

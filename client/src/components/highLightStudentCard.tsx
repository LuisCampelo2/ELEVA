import placeholder from "../../assets/imgs/placeholderBlack.png";

export const HighLightStudentCard = () => {
  return (
    <>
      <div className="card-container-student">
        <img className="img-student" src={placeholder} alt="" />
        <div className="info-student">
          <h1 className="name-student">NOME DO ESTUDANTE</h1>
        </div>
      </div>
    </>
  );
};

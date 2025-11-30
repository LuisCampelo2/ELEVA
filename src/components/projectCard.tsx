import placeholder from "../../assets/imgs/placeHolderProject.png";

export const ProjectCard = () => {
    return (
        <>
            <div className="project-container">
                <div>
                    <img src={placeholder} alt="Projeto" />
                </div>
                <div className="info-project">
                    <div>
                        <h1 style={{ fontSize: 32 }} className="name-project">NOME DO PROJETO</h1>
                        <div style={{ fontSize: 32 }} className="tags">tag / tag / tag / tag</div>
                    </div>
                    <div>
                        <h1 style={{ fontSize: 24 }} className="team-title">NOME DA EQUIPE</h1>

                        <ul className="team-list">
                            <li style={{ fontSize: 24 }}>Nome do participante</li>
                            <li style={{ fontSize: 24 }}>Nome do participante</li>
                            <li style={{ fontSize: 24 }} >Nome do participante</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>

    );
};

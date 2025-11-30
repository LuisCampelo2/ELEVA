import { ProjectCard } from "../components/projectCard"

export const Projects = () => {
    const count = 10;
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="container-input-search-projects">
                        <i className="bi bi-list" style={{ color: "black", display: "flex", alignItems: "center", fontSize: 22 }}></i>
                        <input className="input-search-projects" placeholder="Filtre por categoria ou nome" type="text" />
                        <i className="bi bi-search" style={{ color: "black", display: "flex", alignItems: "center", marginRight: 5 }}></i>
                    </div>
                </div>
                {Array.from({ length: count }).map((_, i) => (
                    <ProjectCard key={i} />
                ))}
            </div>
        </>
    )
}
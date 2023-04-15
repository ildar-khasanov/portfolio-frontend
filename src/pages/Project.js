import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";

const Project = () => {
    const { idPost } = useParams();
    const project = projects.filter((n) => idPost == n.id);

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project[0].title}</h1>

                    <img
                        src={project[0].imgBig}
                        alt=""
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        <p>
                            Skills:
                            <span> {project[0].techology.join(", ")}</span>{" "}
                        </p>
                        {project[0].link && (
                            <p>
                                Link:
                                <a href={project[0].link} target="_blank">
                                    {" "}
                                    {project[0].link}
                                </a>
                            </p>
                        )}
                    </div>

                    {project[0].gitHubLink && (
                        <BtnGitHub link={project[0].gitHubLink} />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Project;

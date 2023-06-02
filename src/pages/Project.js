import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";

const Project = () => {
    const { idPost } = useParams();
    const project = projects.filter((n) => n.id === Number(idPost));
    const { title, imgBig, techology, link, gitHubLink } = project[0];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{title}</h1>

                    <img
                        src={imgBig}
                        alt=""
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        <p>
                            Skills:
                            <span> {techology.join(", ")}</span>{" "}
                        </p>
                        {project.link && (
                            <p>
                                Link:
                                <a href={link} target="_blank">
                                    {" "}
                                    {link}
                                </a>
                            </p>
                        )}
                    </div>

                    {gitHubLink && <BtnGitHub link={gitHubLink} />}
                </div>
            </div>
        </main>
    );
};

export default Project;

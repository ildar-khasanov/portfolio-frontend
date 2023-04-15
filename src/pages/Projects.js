import { useState, useEffect } from "react";
import Pagination from "../components/pagination/Pagination";
import Project from "../components/project/Project";
import ProjectGroup from "../components/projectGroup/ProjectGroup";

import { projects } from "../helpers/projectList";
import { techology } from "../helpers/Technology";
import { PaginationCrop } from "../components/utils/PaginationCrop";

const Projects = () => {
    const [projectElem, setProjectsElem] = useState(projects);
    const [currentPage, setCurrentPage] = useState(1);

    const [sortProject, setSortProject] = useState();
    const handleSortProjects = (n) => {
        setSortProject(n);
    };

    const getFilterProject = (tech) => {
        return sortProject ? tech.some((item) => item === sortProject) : "";
    };

    const resetFilter = () => {
        setSortProject();
        setCurrentPage(1);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [sortProject]);

    const filterProjects = sortProject
        ? projectElem.filter((n) => getFilterProject(n.techology) === true)
        : projectElem;

    const count = filterProjects.length;
    const pageSize = 3;

    const handleChangePages = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const projectsCrop = PaginationCrop(filterProjects, currentPage, pageSize);

    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ProjectGroup
                        tech={techology}
                        handleSortProjects={handleSortProjects}
                        sortProject={sortProject}
                        resetFilter={resetFilter}
                    />

                    <ul className="projects">
                        {projectsCrop.map((project) => (
                            <Project
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                img={project.img}
                            />
                        ))}
                    </ul>
                    <Pagination
                        filterProjects={count}
                        pageSize={pageSize}
                        pageIndex={handleChangePages}
                        currentPage={currentPage}
                    />
                </div>
            </main>
        </>
    );
};

export default Projects;

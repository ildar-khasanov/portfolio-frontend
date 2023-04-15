import "./style.css";

const ProjectGroup = ({
    tech,
    handleSortProjects,
    sortProject,
    resetFilter,
}) => {
    return (
        <ul className="list__group">
            {tech.map((n, i) => (
                <li
                    key={i}
                    className={
                        "list__group-item" +
                        (n === sortProject ? " list__group-item--active" : "")
                    }
                    onClick={() => handleSortProjects(n)}
                >
                    {n}
                </li>
            ))}
            {
                <button className="reset__filter" onClick={() => resetFilter()}>
                    Сбросить фильтры
                </button>
            }
        </ul>
    );
};

export default ProjectGroup;

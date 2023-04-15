import _ from "lodash";
import "./style.css";
const Pagination = ({ filterProjects, pageSize, pageIndex, currentPage }) => {
    const pageCount = Math.ceil(filterProjects / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
        <ul className="pagination">
            {pages.map((page) => (
                <li
                    className={
                        +currentPage === page ? "pagination--active" : ""
                    }
                    key={page + 1}
                    onClick={() => pageIndex(page)}
                >
                    {page}
                </li>
            ))}
        </ul>
    );
};

export default Pagination;

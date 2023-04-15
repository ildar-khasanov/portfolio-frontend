import project1Small from "../img/projects/bouncing-balls-big.jpg";
import project2Small from "../img/projects/fast-company-big.jpg";
import project3Small from "../img/projects/politech-small.jpg";
import project4 from "../img/projects/04.jpg";
import project5 from "../img/projects/05.jpg";
import project6 from "../img/projects/06.jpg";

import project1Big from "../img/projects/01-big.jpg";
import project2Big from "../img/projects/02-big.jpg";
import project3Big from "../img/projects/politech-pro-big.jpg";
import project4Big from "../img/projects/04-big.jpg";
import project5Big from "../img/projects/05-big.jpg";
import project6Big from "../img/projects/06-big.jpg";

const projects = [
    {
        id: 1,
        title: "bouncing balls",
        img: project1Small,
        imgBig: project1Small,
        techology: ["Native JS"],
        gitHubLink: "https://github.com/ildar-khasanov/bouncing-balls",
    },
    {
        id: 2,
        title: "Fast company",
        img: project2Small,
        imgBig: project2Small,
        techology: ["React"],
    },
    {
        id: 3,
        title: "Сайт для колледжа",
        img: project3Small,
        imgBig: project3Big,
        techology: ["Php", "Wordpress", "HTML/CSS"],
        link: "https://politech.pro/",
    },
    {
        id: 4,
        title: "Проект в разработке",
        img: project1Small,
        imgBig: project4Big,
        techology: ["JavaScript", "React", "Wordpress"],
    },
];

export { projects };

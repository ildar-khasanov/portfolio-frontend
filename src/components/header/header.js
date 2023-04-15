import "./style.css";
import headerPhoto from "../../img/header/header-avatar.png";

const Header = () => {
    return (
        <div class="test">
            <div className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>
                            Меня зовут <em>Ильдар</em>
                        </strong>
                        <br />я разработчик сайтов
                    </h1>
                    {/* <div className="header__text">
                        <p>Технологии: JS, REACT</p>
                    </div> */}
                    <a href="/projects" className="btn__portfolio">
                        Посмотреть работы
                    </a>
                </div>
                <div className="home-img-main">
                    <div className="home-img">
                        <div className="glowing-circle">
                            <span></span>
                            <span></span>
                            <div className="image">
                                <img src={headerPhoto} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

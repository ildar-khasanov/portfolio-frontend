const Contacts = () => {
    // const test = document.querySelector(".section");
    // console.log(test);
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Ufa, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p>
                            <a href="tel:+79677347235">+7 (967) 734-72-35</a>
                        </p>
                    </li>
                    {/* <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="mailto:webdev@protonmail.com">
                                webdev@protonmail.com
                            </a>
                        </p>
                    </li> */}
                </ul>
            </div>
        </main>
    );
};

export default Contacts;

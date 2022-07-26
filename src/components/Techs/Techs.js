function Techs() {
    const TECHS_LIST_ITEMS = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']
    return (
        <section className="techs">
            <div className="main__section-container">
                <h2 className="techs__title">Технологии</h2>
                <div className="techs__content">
                    <h2 className="techs__subtitle">7 технологий</h2>
                    <p className="techs__text">
                        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                    </p>
                </div>
                {TECHS_LIST_ITEMS.map((item, index) => (
                    <li
                        className="techs__list-item" key={index}>{item}
                    </li>
                ))}
            </div>
        </section>
    );
}

export default Techs;

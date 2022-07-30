import './Techs.css';
import SectionTitle from "../SectionTitle/SectionTitle";

function Techs() {
    const TECHS_LIST_ITEMS = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']
    return (
        <section className="techs section">
            <div className="section__container section__container_size_medium">
                <SectionTitle
                    title="Технологии"
                />
                <div className="techs__content">
                    <h2 className="techs__subtitle">7 технологий</h2>
                    <p className="techs__text">
                        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                    </p>
                </div>
                <ul className="techs__list">
                    {TECHS_LIST_ITEMS.map((item, index) => (
                        <li className="techs__list-item" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Techs;

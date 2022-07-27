import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm() {
    return (
        <section className="search-form main__section">
            <form className="search-form__container">
                <input className="search-form__item"
                       type="text"
                       placeholder="Фильмы"
                />
                < button className="search-form__submit-btn"
                         type="submit"
                         aria-label="Найти фильмы"
                />
                <FilterCheckbox />
            </form>
        </section>
    );
}

export default  SearchForm;

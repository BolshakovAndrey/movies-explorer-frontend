import './FilterCheckbox.css'

function FilterCheckbox({ isShortfilmCheckboxOn, onChange }) {
    console.log(isShortfilmCheckboxOn)
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__label">
                Короткометражки
                <input
                    className="filter-checkbox__input"
                    type="checkbox"
                    name="shortfilm"
                    onChange={onChange}
                    checked={isShortfilmCheckboxOn ? true : false}
                />
                <span className="filter-checkbox__slider"/>
            </label>
        </div>

    )
}

export default FilterCheckbox;

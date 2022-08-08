import './SectionTitle.css'

function SectionTitle(props) {
    if (props.className === "section__title_techs") {
        return (
            <h2 className="section__title_techs">{props.title}</h2>
        )
    }
    else {
        return (
            <h2 className="section__title">{props.title}</h2>
        )
    }
}


export default SectionTitle;

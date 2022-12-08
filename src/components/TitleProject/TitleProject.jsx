import "./TitleProject.css"

export const Title = ({ first, last}) => {
    return (
        <div className="containerTitle">
            <p className="firstTitle">{first}</p>
            <p className="lastTitle">{last}</p>
        </div>
    )
}
import "./Contest.css"



const Contest = props => {
    // contest has the following attributes:
    // contest name
    // contest platform
    // contest start - end date
    // contest description

    return (
        <article className = "Contest">
            <img className="Logo" src={props.logo} />
            <h1 className="ContestName">{props.name}</h1>
            <div className="ContestDetails">
                <p>{props.date}</p>
                <p>{props.description}</p>
            </div>
        </article>

    )


}






export default Contest
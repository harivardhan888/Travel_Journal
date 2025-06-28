export default function Entry(props){
    console.log(props)
    return(
        <article className="j-entry">
            <div className="m-i-container">
                <img
                className="main-img"
                src={props.img.src}
                alt={props.img.alt}
                />
            </div>
            <div>
                <img  className="marker" src="marker.png" alt="marker"/>
                <span>{props.country}</span>
                <a
                href={props.googleMapsLink}
                style={{ marginLeft: '10px' }}
                >
                View on Google Maps
                </a>

                <h2>{props.title}</h2>
                <p>{props.datea}</p>
                <p>{props.text}</p>
                
            </div>
        </article>
    )
}
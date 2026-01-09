export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img} 
                    alt="mount fuji" 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../src/assets/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.map}>View on Google Maps</a>
                <h2 className="entry-title">{props.place}</h2>
                <p className="trip-dates">{props.date}</p>
                <p className="entry-text">{props.desc}</p>
            </div>
            
        </article>
    )
}
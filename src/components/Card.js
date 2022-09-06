import React from "react";
import "../css/card.css";

function Card({
  image,
  location,
  mapLink,
  place,
  fromDate,
  toDate,
  description,
}) {
  return (
    <div className='card'>
      <div className='image-container'>
        <img src={image} alt={place} />
      </div>
      <div className='details-container'>
        <div className='location-container'>
          <div className='location'>
            <i className='far fa-location-dot'></i>{" "}
            <span className='locationName'>{location}</span>
          </div>
          <div className='map-link-container'>
            <a target='_blank' href={mapLink} rel='noreferrer'>
              View on Google Maps
            </a>
          </div>
        </div>
        <div className='place-name-container'>
          <h1>{place}</h1>
        </div>
        <div className='date-container'>
          <span>{fromDate}</span> - <span>{toDate}</span>
        </div>
        <div className='description-container'>{description}</div>
      </div>
    </div>
  );
}

export default Card;

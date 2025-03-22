import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import CardDetail from "../pages/CardDetail";

function CardCarousel({imgUrl,id}) {
  return (
    <Carousel slide={false}>
      {imgUrl?.map((url, index) => (
        <Link to={`/card-detail/${id}`} className="h-full">
        <img
          key={index}
          className="h-full w-full object-cover object-center"
          src={url}
          alt="Carousel slide"
        />
        </Link>
        
      ))}
    </Carousel>
  );
}

export default CardCarousel;

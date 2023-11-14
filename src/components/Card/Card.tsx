import React from "react";
import "./Card.css";
import { Iships } from "../../types/types";
import {romanLevel} from "../../utils/Variables"
interface CardProps {
  ship: Iships;
}
function Card({ ship }: CardProps) {


  return (
		<>
    <article className="card">
      <img className="card__image" src={ship.icons.medium} alt={ship.title} />
      <h2 className="card__title">{ship.title}</h2>
			<img className="card__class-Image" src={ship.type.icons.default} alt={ship.type.title} />
			<img className="card__nation-image" src={ship.nation.icons.large} alt={ship.nation.title} />
			<p className="card__level">{romanLevel[ship.level-1]}</p>
			<div className="card__description"> {ship.description}</div>
    </article>
		
		</>
  );
}

export default Card;

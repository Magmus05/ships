import React from "react";
import "./Card.css";
import { Iships } from "../../types/types";
interface CardProps {
  ship: Iships;
}
function Card({ ship }: CardProps) {
  return (
		<>
    <article className="card">
      <img className="card__image" src={ship.icons.medium} alt={ship.title} />
      <h2 className="card__title">{ship.title}</h2>
			<p className="card__class">Класс: {ship.type.title} <img className="card__class-Image" src={ship.type.icons.default} alt={ship.type.title} /></p>
			<p className="card__nation">Страна: {ship.nation.title} <img className="card__nation-image" src={ship.nation.icons.small} alt={ship.nation.title} /> </p>
			<p className="card__level">Уровень: {ship.level}</p>
			<div className="card__description"> {ship.description}</div>
    </article>
		
		</>
  );
}

export default Card;

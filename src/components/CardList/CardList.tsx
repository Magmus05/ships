import React , {FC} from "react";
import { Iships } from "../../types/types";
import "./CardList.css";
import Card from "../Card/Card";
interface CardListProps {
  ships: Iships[];
	shipsLimit: number;
}
const CardList: FC<CardListProps> = ({ ships , shipsLimit } ) =>{

  return (
    <section className="cardList" aria-label="Карточки">
      {ships.map((ship, i) => (
				i < shipsLimit ?
        <Card key={i} ship={ship}></Card>
				:
				null
      ))}
    </section>
  );
}

export default CardList;

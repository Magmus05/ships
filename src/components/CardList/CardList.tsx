import React, { FC } from "react";
import { Iships } from "../../types/types";
import "./CardList.css";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
interface CardListProps {
  ships: Iships[];
  shipsLimit: number;
  isSubmited: boolean;
}
const CardList: FC<CardListProps> = ({ ships, shipsLimit, isSubmited }) => {
  return (
    <section className="cardList" aria-label="Карточки">
      {!isSubmited ? (
        <Preloader />
      ) : (
        ships.map((ship, i) =>
          i < shipsLimit ? <Card key={i} ship={ship}></Card> : null
        )
      )}
    </section>
  );
};

export default CardList;

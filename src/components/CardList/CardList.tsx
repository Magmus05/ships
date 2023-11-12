import React, { FC } from "react";
import { Iships } from "../../types/types";
import "./CardList.css";
import ButtonMore from "../ButtonMore/ButtonMore"
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
interface CardListProps {
  ships: Iships[];
  shipsLimit: number;
  isSubmited: boolean;
  addFilms : () => void;
}
const CardList: FC<CardListProps> = ({ ships, shipsLimit, isSubmited, addFilms }) => {
  return (
    <>
    <section className="cardList" aria-label="Карточки">
      {!isSubmited ? (
        <Preloader />
      ) : (
        ships.map((ship, i) =>
          i < shipsLimit ? <Card key={i} ship={ship}></Card> 
          : null
        )
      )}
    </section>
         {shipsLimit >= ships.length ? null : isSubmited ? <ButtonMore addFilms={addFilms} />: null}
         </>
  );
};

export default CardList;

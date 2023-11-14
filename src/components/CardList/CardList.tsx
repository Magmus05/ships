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
  selectedShips: Iships[];
}
const CardList: FC<CardListProps> = ({ ships, shipsLimit, isSubmited, addFilms ,selectedShips }) => {
  return (
    <>
    <section className="cardList" aria-label="Карточки">
      {!isSubmited ? (
        <Preloader />
      ) : (
        selectedShips.length === 0 ? <h1 className="not-found">Нет совпадений</h1> :selectedShips.map((ship, i) =>
          i < shipsLimit ? <Card key={i} ship={ship}></Card> 
          : null)
      )}
    </section>
         {shipsLimit >= ships.length || shipsLimit >= selectedShips.length? null : isSubmited ? <ButtonMore addFilms={addFilms} />: null}
         </>
  );
};

export default CardList;
// selectedShips.length === 0 ? ships.map((ship, i) =>
//           i < shipsLimit ? <Card key={i} ship={ship}></Card> 
//           : null) :
import React, {FC} from "react";
import "./ButtonMore.css";

interface ButtonMoreProps {
  addFilms: () => void;
}
const ButtonMore: FC<ButtonMoreProps> = ({addFilms}) => {
  return <button type="button" className="buttonMore" onClick={addFilms}>Показать ещё</button>;
}

export default ButtonMore;

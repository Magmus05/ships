import React from "react";
// import { getShips } from "../../utils/MainApi";
import "./App.css";
import CardList from "../CardList/CardList";
import Filters from "../Filters/Filters";
import footerLogo from "../../images/logoLesta.png";
import headerLogo from "../../images/headerLogoLesta.png";
import { Iships } from "../../types/types";
import { romanLevel, dataShip } from "../../utils/Variables";

function App() {
  const [ships, setShips] = React.useState<Iships[]>([]); //
  const [selectedShips, setSelectedShips] = React.useState<Iships[]>([]);
  const [shipsLimit, setShipsLimit] = React.useState<number>(12); //
  const [isSubmited, setIsSubmited] = React.useState<boolean>(false);
  const [shipClass] = React.useState<string[]>([]);
  const [shipNation] = React.useState<string[]>([]);
  const [shiplevel] = React.useState<number[]>([]);
  const [filtersClass, setFiltersClass] = React.useState<string[]>([]);
  const [filtersNation, setFiltersNation] = React.useState<string[]>([]);
  const [filtersLevel, setFiltersLevel] = React.useState<number[]>([]);

  React.useEffect(() => {
    //данные с сервера

    // getShips()
    //   .then((data: any) => {
    //     console.log(data.data.vehicles);

    //     setShips(data.data.vehicles);
    //     setSelectedShips(data.data.vehicles);
    //     data.data.vehicles.forEach((ship: Iships) => {
    //       if (!shiplevel.includes(ship.level)) shiplevel.push(ship.level);
    //       if (!shipClass.includes(ship.type.name))
    //         shipClass.push(ship.type.name);
    //       if (!shipNation.includes(ship.nation.name))
    //         shipNation.push(ship.nation.name);
    //     });
    //     shiplevel.sort((a, b) => (a < b ? -1 : 1));
    //     setIsSubmited(true);
    //   })
    //   .catch((error: any) => console.error(error));


    // локальные данные
    setShips(dataShip);
    setSelectedShips(dataShip);
    dataShip.forEach((ship: Iships) => {
      if (!shiplevel.includes(ship.level)) shiplevel.push(ship.level);
      if (!shipClass.includes(ship.type.title)) shipClass.push(ship.type.title);
      if (!shipNation.includes(ship.nation.title))
        shipNation.push(ship.nation.title);
    });
    shiplevel.sort((a, b) => (a < b ? -1 : 1));
    setIsSubmited(true);

    //eslint-disable-next-line
  }, []);

  function addFilms() {
    setShipsLimit(shipsLimit + 12);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setShipsLimit(12);

    if (e.target.checked) {
      if (e.target.name === "nation") filtersNation.push(e.target.value);

      if (e.target.name === "class") filtersClass.push(e.target.value);

      if (e.target.name === "level")
        filtersLevel.push(romanLevel.indexOf(e.target.value) + 1);
    }
    if (!e.target.checked) {
      if (e.target.name === "nation")
        filtersNation.splice(filtersNation.indexOf(e.target.value), 1);

      if (e.target.name === "class")
        filtersClass.splice(filtersClass.indexOf(e.target.value), 1);

      if (e.target.name === "level")
        filtersLevel.splice(
          filtersLevel.indexOf(romanLevel.indexOf(e.target.value) + 1),
          1
        );
    }
    if (
      filtersLevel.length === 0 &&
      filtersClass.length === 0 &&
      filtersNation.length === 0
    ) {
      setSelectedShips(ships);
      return;
    }

    let result: Iships[] = ships;
    if (filtersLevel.length !== 0)
      result = result.filter((ship) => filtersLevel.includes(ship.level));
    if (filtersClass.length !== 0)
      result = result.filter((ship) => filtersClass.includes(ship.type.title));
    if (filtersNation.length !== 0)
      result = result.filter((ship) =>
        filtersNation.includes(ship.nation.title)
      );


    setSelectedShips(result);
  }
  function handleReset(e: React.FormEvent<HTMLFormElement>): void {
    const form = e.target as HTMLFormElement
    e.preventDefault();
    form.reset();
    setSelectedShips(ships);
    setFiltersClass([]);
    setFiltersNation([]);
    setFiltersLevel([]);
    setShipsLimit(12);
  }

  return (
    <div className="App">
      <header className="header">
        <div className="header__container">
          <img src={headerLogo} alt="" />
        </div>
      </header>
      <Filters
        shipClass={shipClass}
        shipNation={shipNation}
        shiplevel={shiplevel}
        handleChange={handleChange}
        handleReset={handleReset}
        filtersClass={filtersClass}
        filtersNation={filtersNation}
        filtersLevel={filtersLevel}
      ></Filters>
      <CardList
        isSubmited={isSubmited}
        ships={ships}
        shipsLimit={shipsLimit}
        addFilms={addFilms}
        selectedShips={selectedShips}
      ></CardList>

      <footer className="footer">
        <div className="footer__container">
          <img className="footer__logo" src={footerLogo} alt="" />
          <ul className="footer__contacts">
            <a
              className="footer__contacts-item"
              href="https://vk.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="30" height="30">
                <path d="M22.316,1.684C20.632,0,17.921,0,12.5,0h-1C6.079,0,3.368,0,1.684,1.684C0,3.368,0,6.079,0,11.5v1   c0,5.421,0,8.131,1.684,9.816S6.079,24,11.5,24h1c5.421,0,8.131,0,9.816-1.684C24,20.632,24,17.921,24,12.5v-1   C24,6.079,24,3.368,22.316,1.684z M19.503,17h-1.75c-0.667,0-0.863-0.532-2.05-1.719c-1.039-1.001-1.484-1.131-1.743-1.131   c-0.353,0-0.458,0.1-0.458,0.6v1.569c0,0.43-0.137,0.681-1.25,0.681c-1.854,0-3.892-1.126-5.339-3.202   c-2.17-3.041-2.763-5.34-2.763-5.803c0-0.26,0.1-0.495,0.6-0.495h1.751c0.447,0,0.615,0.196,0.783,0.68   c0.856,2.493,2.3,4.672,2.893,4.672c0.222,0,0.324-0.103,0.324-0.667V9.608c-0.065-1.186-0.696-1.284-0.696-1.706   c0-0.195,0.167-0.402,0.445-0.402h2.751c0.371,0,0.5,0.198,0.5,0.643v3.467c0,0.37,0.161,0.5,0.272,0.5   c0.223,0,0.408-0.13,0.816-0.538c1.261-1.409,2.151-3.578,2.151-3.578c0.112-0.26,0.316-0.495,0.762-0.495h1.75   c0.529,0,0.641,0.272,0.529,0.643c-0.223,1.02-2.355,4.023-2.355,4.023c-0.186,0.297-0.26,0.445,0,0.779   c0.186,0.26,0.797,0.779,1.205,1.261c0.752,0.846,1.319,1.559,1.477,2.051C20.254,16.75,20.003,17,19.503,17z" />
              </svg>
            </a>
            <a
              className="footer__contacts-item"
              href="https://skype.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="30" height="30">
                <path
                  id="Shape_1_"
                  d="M13.049,19.223c-3.987,0-5.808-2.031-5.808-3.521c-0.001-0.355,0.145-0.695,0.403-0.94    c0.258-0.244,0.605-0.372,0.96-0.352c1.707,0,1.26,2.56,4.445,2.56c1.628,0,2.584-0.98,2.584-1.901    c0-0.553-0.316-1.185-1.391-1.438l-3.556-0.897c-2.857-0.727-3.355-2.315-3.355-3.789c0-3.058,2.797-4.165,5.461-4.165    c2.454,0,5.37,1.355,5.37,3.189c0,0.79-0.66,1.213-1.426,1.213c-1.458,0-1.213-2.047-4.145-2.047c-1.458,0-2.225,0.684-2.225,1.64    c0,0.956,1.134,1.28,2.13,1.498l2.624,0.593c2.877,0.648,3.643,2.335,3.643,3.951c0,2.485-1.924,4.406-5.717,4.406 M24.057,13.964    c0.114-0.652,0.171-1.313,0.17-1.976c0.014-3.327-1.448-6.488-3.991-8.632s-5.906-3.051-9.183-2.475    C10.046,0.301,8.904-0.003,7.742,0C5.357,0.015,3.158,1.293,1.966,3.359c-1.193,2.066-1.2,4.609-0.02,6.682    c-0.658,3.618,0.495,7.329,3.088,9.936c2.593,2.607,6.298,3.781,9.919,3.142C15.959,23.698,17.1,24.002,18.26,24    c2.384-0.015,4.581-1.293,5.773-3.358S25.235,16.036,24.057,13.964"
                />
              </svg>
            </a>
            <a
              className="footer__contacts-item"
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="30" height="30">
                <path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z    M17.562,8.161c-0.18,1.897-0.962,6.502-1.359,8.627c-0.168,0.9-0.5,1.201-0.82,1.23c-0.697,0.064-1.226-0.461-1.901-0.903   c-1.056-0.692-1.653-1.123-2.678-1.799c-1.185-0.781-0.417-1.21,0.258-1.911c0.177-0.184,3.247-2.977,3.307-3.23   c0.007-0.032,0.015-0.15-0.056-0.212s-0.174-0.041-0.248-0.024c-0.106,0.024-1.793,1.139-5.062,3.345   c-0.479,0.329-0.913,0.489-1.302,0.481c-0.428-0.009-1.252-0.242-1.865-0.442c-0.751-0.244-1.349-0.374-1.297-0.788   c0.027-0.216,0.324-0.437,0.892-0.663c3.498-1.524,5.831-2.529,6.998-3.015c3.333-1.386,4.025-1.627,4.477-1.635   C17.472,7.214,17.608,7.681,17.562,8.161z" />
              </svg>
            </a>
            <a
              className="footer__contacts-item"
              href="https://vk.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="30" height="30">
                <path d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z" />
              </svg>
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

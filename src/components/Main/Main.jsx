import Card from "./Card/Card";
import Button from "../Button/Button";
import mobileImg from "/images/mobile/image-interactive.jpg";
import tabletImg from "/images/tablet/image-interactive.jpg";
import desktopImg from "/images/desktop/image-interactive.jpg";
import "./Main.scss";
import {creations} from "../../creations";

export default function Main({screenSize}) {
  const creationCards = creations.map((creation) => {
    return (
      <Card
        key={creation.title}
        title={creation.title}
        img={creation.img}
        screenSize={screenSize}
      />
    );
  });

  const mainImg =
    screenSize < 750 ? mobileImg : screenSize < 1000 ? tabletImg : desktopImg;

  return (
    <main>
      <section className="studio-info">
      <div className="img-container">
        <img src={mainImg} alt="Man using VR headset" />

      </div>
        <div className="info-txt">
          <h2>the leader in interactive vr</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experience that bind to their brand.
          </p>
        </div>
      </section>
      <section className="creations">
        <h2>our creations</h2>
        {screenSize > 999 && <Button aria={"see all of our creations"}>see all</Button>}
        <div className="card-container">{creationCards}</div>
        {screenSize < 1000 && <Button aria={"see all of our creations"}>see all</Button>}
      </section>
    </main>
  );
}

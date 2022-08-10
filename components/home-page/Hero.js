import classes from "./Hero.module.css";
import Can from "../../public/images/site/pp.png";
// imports from next.js
import Image from "next/image";

function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={Can} alt="An image showing Can" width={300} height={300} />
      </div>
      <h1>Hi,im Can.</h1>
      <p>
        {
          "I blog about web development and gaming (especially frontend framework like react)."
        }
      </p>
    </section>
  );
}

export default Hero;

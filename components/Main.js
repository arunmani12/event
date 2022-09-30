import React from "react";
import styles from "../styles/Home.module.css";
import Card from "./UI/Card/Card";
import classes from "./UI/Card/Card.module.css";
const Main = (props) => {
  return (
    <div className={classes.wrapper}>
      <Card
        title="Card-Title"
        image="https://media.istockphoto.com/photos/website-design-word-abstract-in-wood-type-picture-id1327278358?b=1&k=20&m=1327278358&s=170667a&w=0&h=9gc99CCh9_cmbCNmEohoWlBdDmpRTfdOKD1hMoghZoQ="
        description="Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips."
      />
      <Card
        title="Card-Title"
        image="https://media.istockphoto.com/photos/website-design-word-abstract-in-wood-type-picture-id1327278358?b=1&k=20&m=1327278358&s=170667a&w=0&h=9gc99CCh9_cmbCNmEohoWlBdDmpRTfdOKD1hMoghZoQ="
        description="Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips."
      />
      <Card
        title="Card-Title"
        image="https://media.istockphoto.com/photos/website-design-word-abstract-in-wood-type-picture-id1327278358?b=1&k=20&m=1327278358&s=170667a&w=0&h=9gc99CCh9_cmbCNmEohoWlBdDmpRTfdOKD1hMoghZoQ="
        description="Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips."
      />
    </div>
  );
};

export default Main;

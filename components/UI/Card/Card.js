import React from "react";
import classes from "../Card/Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.body}>
        <img className={classes.image} src={props.image} />
        <h2 className={classes.title}>{props.title}</h2>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

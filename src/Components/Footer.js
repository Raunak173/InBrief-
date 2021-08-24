import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        backgroundColor: "#222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      },
      name: {
        fontSize: "20px",
        padding: "20px 30px 15px",
        color: "white",
      },
      anc: {
        color: "white",
      }
  });

const Footer = () => {

    const classes = useStyles();

  return (
    <div className={classes.footer}>
      <span className={classes.name}>
        Inshorts clone made by -{" "}
        <a className={classes.anc} href="edin.com/in/raunakagarwal173/" target="__blank">
          Raunak Agarwal
        </a>
      </span>
      <hr style={{ width: "90%" }} />
    </div>
  );
};

export default Footer;

import React from "react";
import { makeStyles } from "@material-ui/core";
import ReadMore from './ReadMore'

const useStyles = makeStyles(theme=>({
  container:{
    display: 'flex',
    flexDirection: 'column',
    padding: '3%',
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    [theme.breakpoints.up('sm')]: { //This means that if size is greater than small then do this.
      flexDirection: 'row',
    },
  },
  textContainer:{
    marginLeft: '2%',
    marginTop: '3%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '1%',
    },
  },
  des:{
    marginTop: '3%'
  },
  image:{
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
  }
}));

export const NewsCard = ({ nitem }) => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.image}
        src={
          nitem.urlToImage
            ? nitem.urlToImage
            : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fst4.depositphotos.com%2F14953852%2F22772%2Fv%2F600%2Fdepositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fno-image-available.html&tbnid=_3a8DGLxJcsFQM&vet=12ahUKEwinrfSp1cfyAhWEXisKHX9eDAsQMygBegQIARBo..i&docid=LDnLiJ-oRy4-NM&w=600&h=600&q=no%20image%20available&ved=2ahUKEwinrfSp1cfyAhWEXisKHX9eDAsQMygBegQIARBo"
        }  
      />
      <div className={classes.textContainer}>
        <h3>{nitem.title}</h3>
        <p className={classes.des}>{nitem.description}</p>
        <ReadMore nitem={nitem}/>
      </div>
    </div>
  );
};

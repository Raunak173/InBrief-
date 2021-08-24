import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
   btn:{
       marginTop: '8%'
   }
  });


export default function TextButtons({nitem}) {

    const classes = useStyles();

  return (
    <div className={classes.btn}>
      <Button href={nitem.url} target='_blank' color="secondary">
        read more ...
      </Button>
    </div>
  );
}
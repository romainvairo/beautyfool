import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const PageNotFound = ({ translations }) => {
  const classes = useStyles();

  return (
    <section className="PageNotFound">
      <div className="PageNotFound-Messsage">
        { translations.title }
        { translations.description }
      </div>
      <div className={classes.root}>
        <Button variant="contained" color="primary">
          { translations.button }
        </Button>
      </div>
    </section>

 )};

export default PageNotFound;



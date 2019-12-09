import React from 'react';
import Button from '@material-ui/core/Button';

import './PageNotFound.scss';

const PageNotFoundView = ({ translations }) => {

  return (
    <section className="PageNotFound">
      <h1 className="PageNotFound-Title">404</h1>
      <div className="PageNotFound-Messsage">
        { translations.title }
        <br />
        { translations.description }
      </div>
      <div className="PageNotFound-Button">
        <Button variant="contained" color="secondary" className="font-bold" href="/">
          { translations.button }
        </Button>
      </div>
    </section>

 )};

export default PageNotFoundView;

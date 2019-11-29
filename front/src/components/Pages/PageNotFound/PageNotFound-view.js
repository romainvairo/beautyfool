import React from 'react';
import Button from '@material-ui/core/Button';

const PageNotFoundView = ({ translations }) => {

  return (
    <section className="PageNotFound">
      <div className="PageNotFound-Messsage">
        { translations.title }
        { translations.description }
      </div>
      <div>
        <Button variant="contained" color="primary">
          { translations.button }
        </Button>
      </div>
    </section>

 )};

export default PageNotFoundView;

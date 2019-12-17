import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import DisplayHours from './DisplayHours';
import Table from './Table';
import './Calendar.scss';

/**
 * @typedef {import('moment').Moment} Moment
 */

/**
 * @param {Object} param0.translations
 */
const CalendarView = ({ translations }) => (
  <div className="flex flex-col calendar-container items-center">
    <h1 className="calendar-title">{translations.title}</h1>

    <div className="flex calendar-content justify-center">
      <div className="calendar-content-hours mt-16">
        <DisplayHours start={moment({ hour: 9 })} end={moment({ hour: 19 })} />
      </div>
      <Table />
    </div>

    <Button
      component={Link}
      variant="contained"
      color="secondary"
      className="font-bold calendar-button"
      to="/"
    >
      {translations.validButton}
    </Button>
  </div>
);

export default CalendarView;

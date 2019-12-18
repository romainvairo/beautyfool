import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import DisplayHours from './DisplayHours';
import Table from './Table';
import CalendarHead from './Head';
import './Calendar.scss';

/**
 * @typedef {import('moment').Moment} Moment
 */

/**
 * @param {Object} param0.translations
 */
const CalendarView = ({ translations, date, language, setDate }) => (
  <div className="flex flex-col calendar-container items-center">
    <h1 className="calendar-title">{translations.title}</h1>

    <div className="calendar-content flex justify-center my-4">
      <div className="calendar-content-hours mt-16">
        <DisplayHours start={moment({ hour: 9 })} end={moment({ hour: 19 })} />
      </div>
      <div className="calendar-content-table-wrapper flex flex-col items-center border-gray-500 border-l-2 border-r-2 border-t-2 w-full">
        <CalendarHead setDate={setDate} date={date} language={language} />
        <div className="calendar-content-table-container w-full pb-1">
          <Table date={date} />
        </div>
      </div>
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

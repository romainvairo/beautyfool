import React from 'react';

import './Table.scss';
import Grid from './Grid';
import Head from './Head';

const TableView = ({ language, date, getIsClosed, getIsAppointment, getAppointment, onCellClick }) => (
  <table className="border-collapse block">
    <Head date={date} language={language} />
    <Grid
      date={date}
      getIsClosed={getIsClosed}
      getIsAppointment={getIsAppointment}
      getAppointment={getAppointment}
      onCellClick={onCellClick}
    />
  </table>
);

export default TableView;

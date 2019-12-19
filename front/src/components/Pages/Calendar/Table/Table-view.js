import React from 'react';

import './Table.scss';
import Grid from './Grid';
import Head from './Head';

const TableView = ({ language, date, isCellSelected, isTimeOccupied, onCellClick }) => (
  <table className="border-collapse block">
    <Head date={date} language={language} />
    <Grid
      date={date}
      isCellSelected={isCellSelected}
      isTimeOccupied={isTimeOccupied}
      onCellClick={onCellClick}
    />
  </table>
);

export default TableView;

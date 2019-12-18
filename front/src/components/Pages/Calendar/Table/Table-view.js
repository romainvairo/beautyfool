import React from 'react';

import './Table.scss';
import Grid from './Grid';
import Head from './Head';

const TableView = ({ language, date }) => (
  <table className="border-collapse block">
    <Head date={date} language={language} />
    <Grid date={date} />
  </table>
);

export default TableView;

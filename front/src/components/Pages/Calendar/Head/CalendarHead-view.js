import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';

const CalendarHead = ({ date, language, onBackward, onForward }) => (
  <div className="flex justify-between px-4 w-full">
    <div className="mt-2">
      <span className="border-1 border-red-500 align-middle mr-2 bg-red-500 inline-block w-8 h-6">
      </span>
      <span className="align-middle">Créneaux horaires indisponibles</span>
    </div>
    <div className="font-bold">
      <IconButton onClick={onBackward}>
        <ArrowBackIosIcon />
      </IconButton>
      <span className="align-middle">
        {date.locale(language).format('MMMM YYYY')}
      </span>
      <IconButton onClick={onForward}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  </div>
);

export default CalendarHead;

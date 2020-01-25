import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { DayPilotCalendar } from 'daypilot-pro-react';
import { Grid, IconButton, Button } from '@material-ui/core';

import './Calendar.scss';

const CalendarView = ({ onButtonClick, error, price, duration, onTimeRangeSelected, state, setRef, date, language, onBackward, onForward, translations }) => (
  <Grid container justify="center" className="mt-5">
    <Grid xs={12} sm={11} md={10} item>
      <Grid container direction="column">
        <Grid xs={12} item>
          <div className="table-head border-b-0 h-12">
            <Grid container justify="space-around" className="px-4">
              <Grid xs={6} container item className="mt-3">
                <Grid xs={1}>
                  <span className="mr-2 bg-red-500 inline-block w-8 h-6"></span>
                </Grid>
                <Grid xs={11}>
                  <span className="inline-block">{translations.unavailableTimeSlots}</span>
                </Grid>
              </Grid>
              <Grid xs={6} container item justify="flex-end" className="font-bold">
                <Grid item>
                  <IconButton onClick={onBackward}>
                    <ArrowBackIosIcon />
                  </IconButton>
                  <span className="align-middle">
                    {date.locale(language).format('MMMM YYYY')}
                  </span>
                  <IconButton onClick={onForward}>
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item>
          <DayPilotCalendar
            {...state}
            onTimeRangeSelect={onTimeRangeSelected}
            locale="FR-fr"
            ref={setRef}
          />
        </Grid>
        <div className="calendar-total-error">
          {error}
        </div>
        <div className="calendar-total">
          {translations.totalPrice}{price} {price !== null && '€'}
          <br />
          {translations.totalDuration}{duration}
        </div>
        <Grid xs={12} className="text-center">
          <Button
            onClick={onButtonClick}
            variant="contained"
            color="secondary"
            className="font-bold calendar-button text-center"
          >
            {translations.validButton}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default CalendarView;

import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { DayPilotCalendar } from 'daypilot-pro-react';
import { Grid, IconButton, Button } from '@material-ui/core';

const CalendarView = ({ onButtonClick, error, onEventClick, state, setRef, date, language, onBackward, onForward, translations }) => (
  <Grid container justify="center" className="mt-20 mb-1">
    <Grid xs={12} sm={11} md={10} item>
      <Grid container direction="column">
        <Grid xs={12} item>
          <div className="table-head border-b-0 h-12">
            <Grid container justify="space-around" className="px-4">
              <Grid xs={6} container item className="mt-4">
                <Grid xs={1} item>
                  <span className="mr-2 bg-red-500 inline-block w-8 h-6"></span>
                </Grid>
                <Grid xs={11} item>
                  <span className="inline-block ml-6">{translations.unavailableSchedule}</span>
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
            onEventClick={onEventClick}
            locale="FR-fr"
            ref={setRef}
          />
        </Grid>
        <Grid item>
          {error}
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default CalendarView;

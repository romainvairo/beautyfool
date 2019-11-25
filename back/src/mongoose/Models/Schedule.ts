import { prop } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';
import { Appointment } from './Appointment';

export class Schedule extends WithDate {
  @prop({ required: true, })
  blockStart!: Date;

  @prop({ required: true, })
  blockEnd!: Date;

  @prop({ required: true, ref: 'Appointment' })
  appointment!: Appointment;
}

export const ScheduleModel = new Schedule().getModelForClass(Schedule);

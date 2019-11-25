import { prop, arrayProp } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';
import { Feedback } from './Feedback';
import { Appointment } from './Appointment';
import { User } from './User';


export class Service extends WithDate {

  @prop({
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
  })
  name!: string;

  @prop({ maxlength: 2000 })
  description!: string;

  @prop({ required: true })
  duration!: Date;

  @prop({ default: 0, min: 0 })
  price!: number;

  @prop()
  image!: string;

  @arrayProp({ default: [], itemsRef: 'Feedback' })
  feedbacks!: Feedback[];

  @arrayProp({ default: [], itemsRef: 'User'})
  users!: User[];

  @arrayProp({ default: [], itemsRef: 'Appointment'})
  apointments!: Appointment[];

}

export const ServiceModel = new Service().getModelForClass(Service);

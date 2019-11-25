import { prop, arrayProp } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';
import { Appointment } from './Appointment';
import { Role } from './Role';
import { Feedback } from './Feedback';
import { Comment } from './Comment';

// Mongoose automatically puts the informations into the database
// Typegosse adds typing to mongoose

export class User extends WithDate {

  // @prop({}) is a function to put the property into database
  @prop({
    trim: true,
    minlength: 3,
    maxlength: 40,
    required: true,
    unique: true,
  })
  username!: string;

  @prop({
    trim: true,
    minlength: 3,
    maxlength: 60,
    required: true,
  })
  firstname!: string;

  @prop({
    trim: true,
    minlength: 3,
    maxlength: 60,
    required: true,
  })
  lastname!: string;

  @prop({ required: true })
  password!: string;

  @prop({ required: true, trim: true, unique: true })
  email!: string;

  @prop()
  picture!: string;

  @prop()
  birthday!: Date;

  @prop({ min: 0, default: 0 })
  fidelity!: number;

  @prop()
  city!: string;

  @prop()
  zipcode!: string;

  @prop()
  address!: string;

  @prop({ unique: true })
  phone!: string;

  @prop({ default: false })
  isEmailValid!: boolean;

  @prop({ default: false })
  newsletterSubscribed!: boolean;

  @arrayProp({ default: [], itemsRef: 'Appointment' })
  appointments!: Appointment[];

  @arrayProp({ default: [], itemsRef: 'Role' })
  roles!: Role[];

  @arrayProp({ default: [], itemsRef: 'Feedback' })
  feedbacks!: Feedback[];

  @arrayProp({ default: [], itemsRef: 'Comment' })
  comments!: Comment[];
}

export const UserModel = new User().getModelForClass(User);

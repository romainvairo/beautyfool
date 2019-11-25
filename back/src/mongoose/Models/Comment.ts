import { prop } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';
import { User } from './User';
import { Feedback } from './Feedback';

export class Comment extends WithDate {
  @prop({
    required: true,
    maxlength: 5000,
  })
  text!: string;

  @prop({ ref: 'User', required: true })
  user!: User;

  @prop({ ref: 'Feedback', required: true })
  feedback!: Feedback;
}

export const FeedbackModel = new Feedback().getModelForClass(Feedback);

import { prop, arrayProp } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';
import { User } from './User';
import { Service } from './Service';
import { Comment } from './Comment';

export class Feedback extends WithDate {
  @prop({ required: true, maxlength: 5000 })
  text!: string;

  @prop({ min: 0, max: 5 })
  rate!: number;

  @prop({ required: true, ref: 'User' })
  user!: User;

  @prop({ required: true })
  service!: Service;

  @arrayProp({ default: [], itemsRef: 'Comment' })
  comments!: Comment[];
}

export const FeedbackModel = new Feedback().getModelForClass(Feedback);

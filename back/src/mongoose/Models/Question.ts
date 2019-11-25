import { prop } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';

export class Question extends WithDate {
  @prop({
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 1000,
  })
  question!: string;

  @prop({
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 1000,
  })
  answer!: string;
}

export const QuestionModel = new Question().getModelForClass(Question);

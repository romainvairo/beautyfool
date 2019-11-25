import { prop } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';

export class Actuality extends WithDate {
  @prop({
    required: true,
    minlength: 3,
    maxlength: 70,
    trim: true,
  })
  title!: string;

  @prop({ required: true })
  content!: string;
}

export const ActualityModel = new Actuality().getModelForClass(Actuality);

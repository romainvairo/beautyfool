import { prop } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';

export class BeautyTip extends WithDate {
  @prop({
    required: true,
    minlength: 3,
    maxlength: 70,
    trim: true,
  })
  title!: string;

  @prop()
  media!: string;

  @prop()
  mediaType!: string;

  @prop({
    required: true,
    maxlength: 10000,
  })
  content!: string;
}

export const BeautyTipModel = new BeautyTip().getModelForClass(BeautyTip);

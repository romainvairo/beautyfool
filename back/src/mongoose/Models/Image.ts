import { prop } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';

export class Image extends WithDate {
  @prop({
    trim: true,
    minlength: 3,
    maxlength: 70,
    required: true,
  })
  title!: string;

  @prop()
  link!: string;

  @prop()
  thumbnail!: string;
}

export const ImageModel = new Image().getModelForClass(Image);

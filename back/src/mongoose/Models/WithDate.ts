import { Typegoose, prop } from '@hasezoey/typegoose';

/**
 * for decorator @see https://www.typescriptlang.org/docs/handbook/decorators.html
 */

export class WithDate extends Typegoose {

  @prop({ required: true, default: () => new Date })
  createdAt!: Date;

  @prop({ required: true, default: () => new Date })
  updatedAt!: Date;

}

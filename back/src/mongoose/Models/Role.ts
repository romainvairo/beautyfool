import { prop, arrayProp } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';
import { User } from './User';

export class Role extends WithDate {
  @prop({
    unique: true,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  })
  name!: string;

  @prop({
    unique: true,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  })
  permission!: string;

  @arrayProp({ default: [], itemsRef: 'User' })
  users!: User[];
}

export const RoleModel = new Role().getModelForClass(Role);

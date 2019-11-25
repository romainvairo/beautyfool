import { prop, arrayProp } from '@hasezoey/typegoose';

import { WithDate } from './WithDate';
import { User } from './User';
import { Service } from './Service';

export class Appointment extends WithDate {

    @prop({ required: true, })
    date!: Date;

    @prop({ required: true, ref: 'User' })
    customer!: User;

    @arrayProp({ default: [], itemsRef: 'Service'})
    services!: Service[];

}

export const AppointmentModel = new Appointment().getModelForClass(Appointment);

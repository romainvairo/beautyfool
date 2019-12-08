import { baseGetItem } from '.';

export const getSafeInteger = baseGetItem(Number.isSafeInteger, 0);

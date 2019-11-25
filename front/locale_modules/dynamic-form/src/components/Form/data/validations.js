import { range } from 'lodash';

import { fieldsEqual } from '../../../utils';

export const validationsData = {
  required: {
    method: 'isEmpty',
    validWhen: false,
    message: {
      en: {
        default: '{{label}} is required'
      }
    }
  },
  length: {
    method: 'isLength',
    args: [{ min: '{{min}}', max: '{{max}}' }],
    validWhen: true,
    message: {
      en: {
        default: '{{label}} must be between {{min}} and {{max}} length',
        not: '{{label}} must not be between {{min}} and {{max}} length'
      }
    }
  },
  passwordMatch: {
    method: fieldsEqual,
    args: [{ field: 'password' }],
    validWhen: true,
    message: {
      en: {
        default: 'Both passwords must match',
        not: 'Both passwords must not match',
      }
    }
  },
  equals: {
    method: fieldsEqual,
    validWhen: true,
    args: [{ field: '{{match}}' }],
    message: {
      en: {
        default: '{{label}} and {{match}} must match',
        not: '{{label}} and {{match}} must not match'
      }
    }
  },
  email: {
    method: 'isEmail',
    validWhen: true,
    message: {
      en: {
        default: '{{label}} must be a valid email address'
      }
    }
  },
  range: {
    method: range,
    validWhen: true,
    args: [{ min: '{{min}}', max: '{{max}}' }],
    message: {
      en: {
        default: '{{label}} must be between {{min}} and {{max}}',
        not: '{{label}} must not be between {{min}} and {{max}}'
      }
    }
  }
}

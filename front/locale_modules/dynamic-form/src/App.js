import React from 'react';

import './index.css';
import Form from './components/Form';

const fields = [
  {
    name: 'input-1',
    label: 'input-1',
    //validations: ['required'],
    state: {
      show: [
        {
          target: 'input-2',
          value: 'something',
          className: 'stuff',
          isValid: true,
        },
      ]
    },
    preventGlobal: {
      onKeyDown: true
    },
  },
  {
    name: 'input-2',
    label: {
      en: 'input-2'
    },
    className: 'stuff',
    classes: {
      label: 'label-2'
    },
    //validations: ['required'],
    state: {
      disabled: {
        value:'correct value!'
      },
      className: [
        {
          value: 'test',
          elements: ['input', 'label', 'helper'],
          conditions: {
            className: {
              value: 'label-2',
              elements: ['input', 'label']
            },
          }
        },
      ],
      validations: {
        name: 'length:8-15',
        validation: 'length:8-15',
        conditions: {
          target: 'input-3',
          value: '',
          validWhen: false
        }
      }
    }
  },
  /*{
    type: 'group',
    name: 'simpleGroup',
    items: [*/
      {
        name: 'input-3',
        label: 'input-3',
        state: {
          validations: [
            {
              name: 'required',
              validation: 'required',
              conditions: {
                target: 'input-2',
                value: '',
                validWhen: false,
              }
            },
            {
              name: 'length',
              validation: {
                name: 'length',
                method: 'isLength',
                args: [{ min: 5, max: 10 }],
                validWhen: true,
                message: {
                  en: {
                    default: '{{label}} must be between 5 and 10 length'
                  }
                }
              },
              conditions: {
                target: 'input-2',
                value: 'something'
              }
            }
          ]
        }
      },
      {
        name: 'input-4',
        label: 'input-4',
        order: 0,
        state: {
          validations: {
            name: 'required',
            validation: 'required',
            conditions: {
              target: 'input-2',
              value: '',
              validWhen: false,
            }
          },
        }
      },
    /*]
  },*/
];

const onSubmit = formData => {
  console.log('formData', formData);
}

const App = () => (
  <Form
    fields={fields}
    onSubmit={onSubmit}
  />
);

export default App;

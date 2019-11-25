export * from './mapState';
export * from './mapDispatch';
export * from './createStore';
export * from './DynamicState';
export * from './CombineStates';
export * from './Middleware';
export * from './connect';


import { DynamicState } from './DynamicState';
import { CombineStates } from './CombineStates';
import { createStore } from './createStore';
import { mapDispatch } from './mapDispatch';
import { mapState } from './mapState';
import { Middleware } from './Middleware';

import './Query';

const lists = [
  {
    name: 'list 1',
    commissions: [
      { name: 'commission 1' },
      { name: 'commission 2' },
      { name: 'commission 3' },
      { name: 'commission 4' },
      { name: 'commission 5' }
    ]
  },
  {
    name: 'list 2',
    commissions: [
      { name: 'commission 1' },
      { name: 'commission 2' },
      { name: 'commission 3' },
      { name: 'commission 4' }
    ]
  },
  {
    name: 'list 3',
    commissions: [
      { name: 'commission 1' },
      { name: 'commission 2' }
    ]
  }
];

const state = new DynamicState('state', {
  lists: lists,
  array: [0, 1, 2, 3, 4, 5, 6],
  test: 50
}, { strictTyping: true });

state.createActions({
  lists: ['push', 'map', 'filter', 'query'],
  array: ['map', 'filter'],
  test: ['set', 'reset'],
  something: 'trigger',
  __STATE__: 'reset'
});

state.createMiddlewares([
  new Middleware('test', 'set').callback(store => next => action => {
    console.log('middleware');
    next();
  }),
  new Middleware('something', 'trigger').callback(store => next => action => {
    console.log(action);
  })
]);

state.createSelectors({
  array4AndMore: state => state.array.filter(n => n >= 4),
});

const combinedStates = new CombineStates([state]);

const store = createStore(combinedStates);

const actions = mapDispatch('state: pushLists queryLists')(store.dispatch);

const getter = () => mapState('state: lists')(store.getState());

//console.log('lists', JSON.stringify(getter().lists, null, 2))
actions.queryLists(q => q
  .find(l => l.name === 'list 1')
  .get('commissions')
  .push(c => ({ name: 'commission ' + (c.length + 1) })).repeat()
)
console.log('lists', JSON.stringify(getter().lists, null, 2))

/*console.log(getter());
actions.setTest(10);
const got = getter();
got.test = 100;
console.log(got);
console.log(getter());*/
//actions.resetTest();
//console.log(getter());

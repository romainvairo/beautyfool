import { isFunction, findIndex, get } from 'lodash';

import { separateLastAccessorFromPath } from './_utils';

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

const state = {
  lists,
};

export class Query {

  property;
  result;
  lastAction;
  path;
  callback;

  constructor(property, result, callback, path = '') {
    this.property = property;
    this.result = result || property;
    this.path = path;
    this.callback = callback;
  }

  getValue (value) {
    if (isFunction(value)) {
      return value(this.property);
    }
    return value;
  }

  newAction(action) {
    this.lastAction = action;

    // return a null `Query` if `this.property` is null which will cancel the other actions
    if (this.property == null) {
      return new Query();
    }

    return action();
  }

  exec = callback => {
    this.callback(property => {
      this.property = this.result = property;
      return callback(this).result;
    });
  }

  repeat = () => {
    this.lastAction();
    return this;
  }

  setter = v => {
    // need to separate the last accessor from the rest of the path
    // to be able to set the value from a mutation
    const { path, lastPath } = separateLastAccessorFromPath(this.path);

    // if the path is empty it means there is no path, so we set `result`
    if (!this.path) {
      this.result = v;
    } else {
      get(this.result, path)[lastPath] = v;
    }
  }

  group = callback => {
    this.newAction(() => callback(this));
    return this;
  }

  find = callback => {
    return this.newAction(() => {
      const found = this.property.find(callback);
      const index = findIndex(this.property, found);

      return new Query(found, this.result, this.callback, this.path + '[' + index + ']');
    });
  }

  get = str => {
    return this.newAction(() => new Query(get(this.property, str), this.result, this.callback, this.path + '.' + str));
  }

  push = v => {
    this.newAction(() => this.property.push(this.getValue(v)));
    return this;
  }

  pop = v => {
    this.newAction(() => this.property.pop(this.getValue(v)));
    return this;
  }

  shift = v => {
    this.newAction(() => this.property.shift(this.getValue(v)));
    return this;
  }

  unshift = v => {
    this.newAction(() => this.property.unshift(this.getValue(v)));
    return this;
  }

  concat = v => {
    this.newAction(() => this.property.concat(this.getValue(v)));
    return this;
  }

  map = callback => {
    this.newAction(() => this.setter(this.property.map(callback)));
    return this;
  }

  filter = callback => {
    this.newAction(() => this.setter(this.property.filter(callback)));
    return this;
  }

  set = v => {
    this.newAction(() => this.setter(this.getValue(v)));
    return this;
  }
}

const stringify = v => JSON.stringify(v, null, 2);

//console.log(stringify(state));
/*state.lists = (new Query(state.lists)
  .group(query => query
    .find(l => l.name === 'list 2')
    .get('commissions')
    .push(l => ({ name: 'commission ' + (l.length + 1) }))
  ).repeat()
  .find(l => l.name === 'list 2')
  .get('commissions')
  .map((c, i) => {
    c.index = (c.index || 0) + i;
    return c;
  }).repeat()
  /*.find(l => l.name === 'list 3')
  .get('commissions')
  .push(l => ({ name: 'commission ' + (l.length + 1) }))*/
//).result;
//console.log(stringify(state));

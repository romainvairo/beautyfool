import React from 'react';
// dynamic-redux also have a `connect` function
// that is a simple layer over the redux one
// that will use mapDynamicState and mapDynamicDispatch behind
// if you don't use them here
import { connect } from 'dynamic-redux';

// `numberOfPropertiesInMyObject` is a selector
const mapStateToProps = 'example: myProperty numberOfPropertiesInMyObject';
const mapDispatchToProps = {
  example: [
    // get the actions of `myProperty`
    'setMyProperty',
    // get the actions of `myArray` (note that they do not need to be in the same string)
    'pushMyArray popMyArray shiftMyArray unshiftMyArray concatMyArray filterMyArray mapMyArray',
    // get the actions of `myObject`
    'mergeMyObject queryMyObject',
    // get the actions of `myNumber`
    'incMyNumber decMyNumber resetMyNumber',
    // get the action of `myAction`
    'triggerMyAction',
    // it is unecessary to specify the name of the state that you want
    // to reset, it will automatically detect the right state
    // and add the state's name in the resulting function
    'resetState'
  ],
};

const MyComponent = ({
  myProperty,
  setMyProperty,
  pushMyArray,
  popMyArray,
  shiftMyArray,
  unshiftMyArray,
  concatMyArray,
  filterMyArray,
  mapMyArray,
  mergeMyObject,
  queryMyObject,
  incMyNumber,
  decMyNumber,
  resetMyNumber,
  triggerMyAction,
  // all selectors have the suffix 'Selector' added
  numberOfPropertiesInMyObjectSelector,
  // the name of the state to reset has been automatically added to the resulting function
  resetExampleState,
}) => {
  // set the value of `myProperty`
  setMyProperty('new value');

  // add a value at the end of the array
  pushMyArray('new entry');
  // remove the last entry of the array
  popMyArray();
  // add a value at the first index of the array
  unshiftMyArray('new entry');
  // remove the first entry of the array
  shiftMyArray();
  // concatenate the array with this one
  concatMyArray(['array', 'to', 'concat']);
  // does the same as the native `filter` function
  filterMyArray(value => typeof value === 'string');
  // does the same as the native `map` function
  mapMyArray(value => <p>{value}</p>);

  // merge the object in the state with this one
  mergeMyObject({ property: 'value' });
  // perform a complex action on `myObject`
  queryMyObject(q => q // get the query object
    .get('property.list') // get the value of `list` that is in the value of `property` inside `myObject`
    .find(item => item.id === 0) // perform a `find` on `myObject.property.list`
    .get('nestedList') // get the value of `nestedList` inside `myObject.property.list[indexFound]`
    .push(nestedList => ({ id: nestedList.length + 1 })) // push a new value into `myObject.property.list[indexFound].nestedList`
  );

  // increment the number in the state
  incMyNumber(1); // increment by 1
  // decrement the number in the state
  decMyNumber(5); // decrement by 5
  // reset the number to its default value
  resetMyNumber();

  // trigger an action that will not change the value of the state
  triggerMyAction('data');

  // will return the amount of properties in `myObject`
  // selectors are functions
  numberOfPropertiesInMyObjectSelector();

  // reset the whole state of `example` to its default value
  resetExampleState();

  return <p>myProperty: {myProperty}</p>;
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);

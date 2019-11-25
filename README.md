# Commentary of project

`Locale module` : is a module user that you've create yourself which not in npm documentation it's an personnal extension

`Middleware` : a program that will be executed between the starting point and the end point

`JS-doc` : anotations with:
```js
/**
* @type
*/
```

`<React.Fragment>` == <></> : groups muttiple elements into one

`globalComponents` are components that are used globally. example: (navbar, footer, header)
`sharedComponents` are components that are used in several components. example: (input, loader)
`pageComponents` are components that used for the pages of the website.

`Library tailwindcss`: https://tailwindcss.com/
css librairy which regroup several functionnalities in css

`mediaport` execut css code depending on the screen resolution

`production` when the app is online
`developement` when you work on it

`React.PureComponent` It's a component that will avoid the useless update

```jsx
import WithTrans from "../../Shared/WithTrans";

export const myComponentTitle = () => (
    // i18nKey is the path to the translation
  <WithTrans i18nKey="mycomponent:title">
    {/*Default translation*/ }
    My title
  </WithTrans>
);

// the component that uses this function needs to use withTranslation for react-i18next
export const imgAltTranslation = t => t('mycomponent:img.alt');
```
```jsx
import React from 'react';
import { withTranslation } from 'react-i18next';

import { imgAltTranslation } from './translations';

const MyComponent = ({ t }) => (
  <p>{imgAltTranslation(t)}</p>
);

export default withTranslation()(MyComponent);
```
`Material-UI` high-priority on tailWindCss (create own class)

`querybuilder`: something to build a query more easily
```js
User
  .find()
  .limit(5);
```
`queryString`:
```
'FIND `user` LIMIT 5';
```
`@prop({})`: is a function to put the property into database

`@arrayProp({})` : is a function to put the array property into database

`MongoDB`: is the database

`Mongoose`: adds schemas and other features with mongoDB

`Typegoose`: adds typescript's typing on mongoose

`ref`: reference in typegoose for an object

`itemsRef`: items reference in typegoose for the items in array

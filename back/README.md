```js
// Router Express
// get the id from URL parameter
app.get('/api/users/:id', (req, res) => {
  req.params.id;
});

// get the email from post request
app.post('/api/signup', (req, res) => {
  req.body.email
});

// get sort from query string
app.get('/api/users?sort=asc' /* <= this is a query string */), (req, res) => {
  req.query.sort
});
```
```js
// try to execute code that can throw an error
try {

// catch the thrown error
} catch {

}

throw // if you don't throw errors, the errors are not in the try/catch
```

`stack trace` the informations on the files that throws an error

`buffer (données en memoire tamppon)`

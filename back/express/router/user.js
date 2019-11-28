const UserController = require('../../mongoose/Controllers/User');
const { app } = require('../../config/server');
const { errorCodes } = require('../../Errors');
const { end } = require('../../utils');

app.post('/api/signup', async (req, res) => {
  try {
    await UserController.add(req.body);
  } catch (error) {
    end(res, { error: errorCodes.user.signup });
  }

  // end === end the request otherwise it never ends
  end(res, null, true);
});

// asynchronous function will be called if there's a POST request to the URL
app.post('/api/login', async (req, res) => {
  let user;

  // try to get the user from its email and password
  try {
    user = await UserController.login(req.body);
    // if there is an error we end the request and send an error
  } catch (error) {
    if (error.constructor.name !== 'BaseError') {
      error = errorCodes.user.login.other;
    }

    // return is to avoid from executing unecessary code
    // res is to call the end method
    return end(res, { error });
  }

  // send the user data and end the request
  end(res, { data: user }, true);
});

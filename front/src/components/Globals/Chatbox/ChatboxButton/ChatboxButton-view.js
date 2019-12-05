import React from 'react';
import { Grid } from '@material-ui/core';

import '../Chatbox.scss';

const ChatboxButtonView= ({ onClick}) => (


  <Grid item>
    <button onClick={onClick} className="round bg-gray-400 rounded-full h-16 w-16">
    </button>
  </Grid>

);

export default ChatboxButtonView;

import openSocket from 'socket.io-client';

// Link the client with the websocket in the server from localhost on port 8000
let url = 'https://beautyfool.herokuapp.com/';
let port = 8000;

export default openSocket(url);

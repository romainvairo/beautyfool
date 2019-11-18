/// <reference types="node" />
import http from 'http';
declare const port = 8000;
declare const app: import("express-serve-static-core").Express;
declare const server: http.Server;
export { server, app, port, };

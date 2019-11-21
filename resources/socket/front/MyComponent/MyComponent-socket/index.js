import { SocketBridge } from '/services';
import SendDataToTheServer from './SendDataToTheServer';

// if you have several events you can use this to centralize them all in one object
export default SocketBridge.Main.from([SendDataToTheServer]);

// otherwise you can just export it as it is
export default SendDataToTheServer;

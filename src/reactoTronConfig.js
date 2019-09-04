import { reactotronRedux } from 'reactotron-redux';
// import Config from './env-config.json';
import Reactotron from 'reactotron-react-js';

// if (Config.isDebug) {

Reactotron
  .configure({
    name: 'calendar',
  })
  .use(reactotronRedux())
  .connect();

// }

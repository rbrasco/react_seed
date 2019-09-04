import axios from 'axios';

const getDataFromServer = (endpoint) => {

  const req = axios.get(`https://jira.scytl.net/${endpoint}`);

  return req;

};

export {
  getDataFromServer,
};

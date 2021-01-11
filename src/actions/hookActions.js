import Axios from 'axios';

export const getSecretWord = async setSecretWord => {
  const response = await Axios.get('http://localhost:3030');
  setSecretWord(response.data);
};

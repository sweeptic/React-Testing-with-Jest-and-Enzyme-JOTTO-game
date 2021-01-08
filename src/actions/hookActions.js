import axios from 'axios';

export const getSecretWord = async setSecretWord => {
  const response = await axios.get('http:3030/server');
  setSecretWord(response.data);
};

export default { getSecretWord };

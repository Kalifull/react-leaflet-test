import axios from 'axios';

const requestApi = {
  async getData() {
    const { data } = await axios.get(`https://63beff6cf5cfc0949b670fd0.mockapi.io/items`);

    return data;
  },
};

export default requestApi;

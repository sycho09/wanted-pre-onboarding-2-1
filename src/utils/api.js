import client from './axios';

const getList = async (url, config) => {
  try {
    const response = await client.get(url, { ...config });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getList;

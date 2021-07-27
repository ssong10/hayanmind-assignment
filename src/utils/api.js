import axios from 'axios';

const BASE_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments';
const LIMIT = 10;
export const fetchComments = async (pages) => {
  try {
    const data = await axios.get(`${BASE_ENDPOINT}?_page=${pages}&_limit=${LIMIT}`);
    if (data.status === 200) {
      return data.data;
    }
    throw new Error('서버와 통신이 불안정합니다');
  } catch (e) {
    console.error(e);
  }
};

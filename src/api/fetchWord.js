import axios from "axios";
const fetchWord = async (word) => {
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  try {
    const response = await axios.get(`${url}${word}`);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
};
export default fetchWord;

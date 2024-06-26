const back_dev_url = "http://localhost:3001";
const axios = require("axios");

const login = async (data) => {
  return new Promise((res, rej) => {
    axios
      .post(
        `${back_dev_url}/api/auth/login`,
        data
      )
      .then(response => {
        res(response)
      })
      .catch(error => {
        rej(error)
      })
  })
};

export default {login}


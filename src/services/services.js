const axios = require("axios");

module.exports = {
  getDataFromApi: async function () {
    const result = await axios.get("https://reqres.in/api/users?per_page=20");

    return result;
  },
};

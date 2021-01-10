import axios from "axios";

const USER_URL = "https://randomuser.me/api/?results=";

// Export an object with a "search" method that gets the specified number of users
export default {
  
  search: function(searchNum) {
    return axios.get(USER_URL + searchNum);
  }
};

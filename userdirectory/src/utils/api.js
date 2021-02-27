import axios from "axios";

const URL = "https://randomuser.me/api/?results=100&nat=us,dk,fr,gb";
function randomUsers() {
  return axios.get(URL);
}
export default randomUsers;

//this is the api to get random users
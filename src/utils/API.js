import axios from "axios";

const numOfEmployees = "150"
//Here we are exporting our api call with a limit of 150 employees
export default {
  getRandomEmployee: function() {
    return axios.get(`https://randomuser.me/api/?nat=us&results=${numOfEmployees}`);
  }
};
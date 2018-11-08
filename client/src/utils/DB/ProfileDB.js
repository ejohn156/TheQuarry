import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/Profiles");
    },
    delete: function(id) {
      return axios.delete("/api/Profiles/" + id);
    },
    save: function(userData) {
      var usernameObj = {username: userData.username}
      return axios.post("https://localhost:3001/api/Profiles/add", usernameObj)
      .then(res => console.log(res.data));
    },
    update: function(userData) {
      return axios.post("/api/Profiles/"+userData.id,{
          id:userData.id,
          data: userData
    })
    },
    getById: function(id) {
      return axios.get("/api/Profiles/"+id)
    }
  };
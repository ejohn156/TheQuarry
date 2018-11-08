import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/users");
    },
    delete: function(id) {
      return axios.delete("/api/users/" + id);
    },
    save: function(userData) {
      return axios.post("/api/users/", userData)
      .then(res => console.log(res.data));
    },
    update: function(userData) {
      return axios.post("/api/users/"+userData.id,{
          id:userData.id,
          data: userData
    })
    },
    getById: function(id) {
      return axios.get("/api/users/"+id)
    }
  };
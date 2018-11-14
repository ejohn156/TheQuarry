import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/Profiles");
    },
    
    delete: function(id) {
      return axios.delete("/api/Profiles/" + id);
    },
    
    save: function(userData) {
      return axios.post("/api/profiles/add", userData)
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
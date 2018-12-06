import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/Requests");
    },
    delete: function(id) {
      return axios.delete("/api/Requests/" + id);
    },
    
    create: function(requestData) {
      return axios.post("/api/Requests/add", requestData)
    },
    
    update: function(requestData) {
      return axios.post("/api/Requests/edit/"+requestData._id,{
          data: requestData
    })
    },
    
    getById: function(id) {
      return axios.get("/api/Requests/"+id)
    }
  };
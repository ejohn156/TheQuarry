import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/Requests");
    },
    getUserRequests: function(id) {
      return axios.get("/api/Requests/" + id,{
    });
    },
    getReceivedRequests: function(id) {
      return axios.get("/api/Requests/recipient/" + id,{
    });
    },
    delete: function(id) {
      return axios.post("/api/Requests/delete/" + id);
    },
    accept: function(request) {
      return axios.post("/api/Requests/accept/" + request._id, request);
    },
    decline: function(request) {
      return axios.post("/api/Requests/decline/" + request._id, request);
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
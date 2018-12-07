import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/Applications");
    },
    getUserApplications: function(id) {
      return axios.get("/api/Applications/user/" + id,{
    });
  },
    getReceivedApplications: function(id) {
      return axios.get("/api/Applications/recipient/" + id,{
    });
    },
    delete: function(id) {
      return axios.post("/api/Applications/delete/" + id);
    },
    accept: function(application) {
      return axios.post("/api/Applications/accept/" + application._id, application);
    },
    decline: function(application) {
      return axios.post("/api/Applications/decline/" + application._id, application);
    },
    
    create: function(applicationData) {
      return axios.post("/api/Applications/add", applicationData)
    },
    
    update: function(applicationData) {
      return axios.post("/api/Applications/edit/"+applicationData._id,{
          data: applicationData
    })
    },
    
    getById: function(id) {
      return axios.get("/api/Applications/"+id)
    }
  };
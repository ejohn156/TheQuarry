import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/Applications");
    },
    getUserApplications: function(id) {
      return axios.get("/api/Applications/user/" + id,{
    });
    },
    delete: function(id) {
      return axios.delete("/api/Applications/" + id);
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
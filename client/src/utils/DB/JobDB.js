import axios from "axios"
export default {
    get: function() {
      return axios.get("/api/jobs",{
    });
    },
    getFiltered: function(filter) {
      return axios.get("/api/jobs/" + filter,{
    });
  },
    delete: function(jobId) {
      return axios.get("/api/jobs/" + jobId,
    {
    });
    },
    create: function(jobData) {
      return axios.post("/api/jobs/add", jobData
      );
    },
    
    update: function(jobData) {
      return axios.put("/api/jobs/"+jobData.id)
    },
    
    getById: function(id) {
      return axios.get("/api/jobs/"+id)
    }
  };
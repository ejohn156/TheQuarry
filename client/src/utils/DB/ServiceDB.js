import axios from "axios"
export default {
    get: function() {
      return axios.get("/api/services",{
    });
    },
    getUsersServices: function(id) {
      return axios.get("/api/services/" + id,{
    });
    },
    getFiltered: function(filter) {
      return axios.get("/api/services/filter/" + filter,{
    });
  },
    delete: function(ServiceId) {
      return axios.get("/api/services/" + ServiceId,
    {
    });
    },

    create: function(ServiceData) {
      return axios.post("/api/services/add", ServiceData);
    },
    
    update: function(ServiceData) {
      return axios.put("/api/services/"+ServiceData.id)
    },
    
    getById: function(id) {
      return axios.get("/api/services/"+id)
    }
  };
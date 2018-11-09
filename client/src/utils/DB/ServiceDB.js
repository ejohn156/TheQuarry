import axios from "axios"
export default {
    get: function() {
      return axios.get("/api/services",{
    });
    },
    delete: function(ServiceId) {
      return axios.get("/api/services/" + ServiceId,
    {
    });
    },
    create: function(ServiceData) {
      return axios.post("/api/services/add", {
        ServiceData: ServiceData,
      });
    },
    update: function(ServiceData) {
      return axios.put("/api/services/"+ServiceData.id)
    },
    getById: function(id) {
      return axios.get("/api/services/"+id)
    }
  };
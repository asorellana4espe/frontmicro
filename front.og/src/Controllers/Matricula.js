import axios from "axios";
export default {
  list(url, headers) {
    return axios.get(url + "/ApiMatriculas/matriculas/", {
      headers: headers,
      Accept: "*/*",
    });
  },
  create(url, body, headers) {
    return axios.post(url + "/ApiMatriculas/matriculas/", body, {
      headers: headers,
      Accept: "*/*",
    });
  },
  edit(url, body, headers, id) {
    return axios.put(url + "/ApiMatriculas/matriculas/" + id, body, {
      headers: headers,
      Accept: "*/*",
    });
  },
  delete(url, headers, id) {
    return axios.delete(url + "/ApiMatriculas/matriculas/" + id);
  },
};

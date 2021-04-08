import axios from "axios";
export default {
  list(url, headers) {
    return axios.get(url + "/ApiPersona/persona/", {
      headers: headers,
      Accept: "*/*",
    });
  },
  create(url, body, headers) {
    return axios.post(url + "/ApiPersona/persona/", body, {
      headers: headers,
      Accept: "*/*",
    });
  },
  edit(url, body, headers, id) {
    return axios.put(url + "/ApiPersona/persona/" + id, body, {
      headers: headers,
      Accept: "*/*",
    });
  },
  delete(url, headers, id) {
    return axios.delete(url + "/ApiPersona/persona/" + id);
  },
};

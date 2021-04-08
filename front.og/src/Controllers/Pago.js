import axios from "axios";
export default {
  list(url, headers) {
    return axios.get(url + "/ApiPago/pagos/", {
      headers: headers,
      Accept: "*/*",
    });
  },
  create(url, body, headers) {
    return axios.post(url + "/ApiPago/pagos/", body, {
      headers: headers,
      Accept: "*/*",
    });
  },
  edit(url, body, headers, id) {
    return axios.put(url + "/ApiPago/pagos/" + id, body, {
      headers: headers,
      Accept: "*/*",
    });
  },
  delete(url, headers, id) {
    return axios.delete(url + "/ApiPago/pagos/" + id);
  },
};

import axios from "axios";
export default {
  list(url, headers) {
    return axios.get(url + "/ApiCursos/cursos/", {
      headers: headers,
      Accept: "*/*",
    });
  },
  create(url, body, headers) {
    return axios.post(url + "/ApiCursos/cursos/", body, {
      headers: headers,
      Accept: "*/*",
    });
  },
  edit(url, body, headers, id) {
    return axios.put(url + "/ApiCursos/cursos/" + id, body, {
      headers: headers,
      Accept: "*/*",
    });
  },
  delete(url, headers, id) {
    return axios.delete(url + "/ApiCursos/cursos/" + id);
  },
};

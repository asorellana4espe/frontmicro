<template>
  <div>
    <h1>Personas</h1>
    <div class="formulario">
      <input type="hidden" v-model="id" />
      <input type="text" v-model="nombres" placeholder="nombres" />
      <input type="text" v-model="apellidos" placeholder="apellidos" />
      <input type="text" v-model="cedula" placeholder="cédula" />
      <input type="text" v-model="mail" placeholder="e-mail" />
      <input type="text" v-model="fechanac" placeholder="Fecha nacimiento" />
      <button type="button" v-if="estado" @click="submit(1)">Crear</button>
      <button type="button" v-if="!estado" @click="submit(2)">
        Actualizar
      </button>
      <i v-if="!estado" class="fa fa-close" @click="cancelEdit()"></i>
    </div>
    <table>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Cédula</th>
          <th>Email</th>
          <th>Fecha nacimiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in listPersonas" :key="person.personaId">
          <th>{{ person.personaNombres }}</th>
          <th>{{ person.personaApellidos }}</th>
          <th>{{ person.personaCedula }}</th>
          <th>{{ person.personaMail }}</th>
          <th>{{ person.personaFechanac }}</th>
          <th>
            <i class="fa fa-pen" @click="loadEdit(person)"></i>
            <i class="fa fa-trash" @click="borrar(person.personaId)"></i>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import personaController from "../Controllers/Persona.js";
import Globals from "../Controllers/Globals.js";
import Auth from "../Controllers/Auth.js";

export default {
  data() {
    return {
      listPersonas: [],
      nombres: "",
      apellidos: "",
      cedula: "",
      mail: "",
      fechanac: "",
      id: null,
      estado: true,
      head: null,
    };
  },
  methods: {
    cargar: function () {
      let loged = Auth.getAuth();
      let Headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + loged.access_token,
      };
      this.head = Headers;
      this.list(this.head);
    },
    list: async function (head) {
      let response = await personaController.list(Globals._URL, head);
      this.listPersonas = response.data;
      console.log(this.listPersonas);
    },
    crear: async function (body, head) {
      let response = await personaController.create(Globals._URL, body, head);
      console.log(response);
    },
    editar: async function (body, head) {
      let response = await personaController.edit(
        Globals._URL,
        body,
        head,
        this.id
      );
      console.log(response);
    },
    submit: function (caso) {
      let form = null;
      switch (caso) {
        case 1:
          //crear
          form = {
            personaCedula: this.cedula,
            personaNombres: this.nombres,
            personaApellidos: this.apellidos,
            personaFechanac: this.fechanac,
            personaMail: this.mail,
          };
          this.crear(form, this.head);
          break;
        case 2:
          //actualizar
          form = {
            personaId: this.id,
            personaCedula: this.cedula,
            personaNombres: this.nombres,
            personaApellidos: this.apellidos,
            personaFechanac: this.fechanac,
            personaMail: this.mail,
          };
          this.editar(form, this.head);
          break;
      }
    },
    loadEdit: function (persona) {
      this.nombres = persona.personaNombres;
      this.apellidos = persona.personaApellidos;
      this.cedula = persona.personaCedula;
      this.mail = persona.personaMail;
      this.fechanac = persona.personaFechanac;
      this.id = persona.personaId;
      this.estado = false;
    },
    cancelEdit: function () {
      this.nombres = "";
      this.apellidos = "";
      this.cedula = "";
      this.mail = "";
      this.fechanac = "";
      this.id = null;
      this.estado = true;
    },
  },
  created() {
    this.cargar();
  },
};
</script>

<style></style>

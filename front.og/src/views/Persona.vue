<template>
  <div>
    <div class="header">
      <h1>
        <i class="fa fa-angle-right"></i>
        Personas
        <i class="fa fa-angle-left"></i>
      </h1>
    </div>
    <div class="contenido centered">
      <input type="hidden" v-model="id" />
      <h3 class="campo-1 subtitulo">
        <i class="fa fa-angle-right"></i> Datos:
      </h3>
      <div class="campo-1-3 centered">
        <v-text-field
          class="campo-1"
          v-model="nombres"
          label="Nombres"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="apellidos"
          label="Apellidos"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="cedula"
          label="Cédula"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="mail"
          label="Email"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="fechanac"
          label="Fecha de nacimiento"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <button
          class="next-btn campo-1-2"
          type="button"
          v-if="estado"
          @click="submit(1)"
        >
          Crear
        </button>
        <button
          class="next-btn campo-1-2"
          type="button"
          v-if="!estado"
          @click="submit(2)"
        >
          Actualizar
        </button>
        <i
          v-if="!estado"
          class="fa fa-close main-btn"
          @click="cancelEdit()"
        ></i>
      </div>
      <h3 class="campo-1 subtitulo">
        <i class="fa fa-angle-right"></i> Lista de Personas:
      </h3>
      <div class="centered campo-1" v-if="loaded">
        <div
          v-for="person in listPersonas"
          :key="person.personaId"
          class="modelPersona campo-1-3"
        >
          <h3 class="titulo">Persona</h3>
          <strong>Nombres: </strong>{{ person.personaNombres }} <br />
          <strong>Apellidos: </strong>{{ person.personaApellidos }} <br />
          <strong>Cédula: </strong>{{ person.personaCedula }} <br />
          <strong>Email: </strong>{{ person.personaMail }} <br />
          <strong>Fecha Nacimiento: </strong>{{ person.personaFechanac }} <br />
          <div class="controls">
            <i class="fa fa-pen edit" @click="loadEdit(person)"></i>
            <i class="fa fa-trash delete" @click="borrar(person.personaId)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import personaController from "../Controllers/Persona.js";
import Globals from "../Controllers/Globals.js";

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
      loaded: false,
    };
  },
  methods: {
    cargar: function () {
      let Headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      this.head = Headers;
      this.list(this.head);
    },
    list: async function (head) {
      this.loaded = false;
      let response = await personaController.list(Globals._URL, head);
      this.listPersonas = response.data;
      this.loaded = true;
    },
    crear: async function (body, head) {
      let response = await personaController.create(
        Globals._URL,
        JSON.stringify(body),
        head
      );
      console.log(response);
    },
    editar: async function (body, head) {
      let response = await personaController.edit(
        Globals._URL,
        JSON.stringify(body),
        head,
        this.id
      );
      console.log(response);
    },
    borrar: async function (encid) {
      try {
        let response = await personaController.delete(
          Globals._URL,
          this.head,
          encid
        );
        console.log(response);
      } catch (error) {
        location.reload();
      }
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
          console.log(form);
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
      location.reload();
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
<style scoped>
.modelPersona {
  overflow: hidden;
  border-radius: 10px;
  padding: 0px 6px 6px 6px;
  background: white;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
}
.modelPersona .titulo {
  background: #172b4d;
  color: white;
  margin: 0px;
  margin-left: 50%;
  margin-bottom: 10px;
  padding: 5px 6px;
  width: 150%;
  transform: translateX(-50%);
}
.modelPersona .controls {
  margin: 10px;
}
.modelPersona .controls .edit {
  display: inline-flex;
  color: white;
  background: rgb(32, 117, 32);
  border-radius: 50%;
  padding: 5px;
  margin: 6px;
  cursor: pointer;
  transition: all 0.4s ease;
}
.modelPersona .controls .delete {
  display: inline-flex;
  color: white;
  background: rgb(117, 32, 32);
  border-radius: 50%;
  padding: 5px;
  margin: 6px;
  cursor: pointer;
  transition: all 0.4s ease;
}
.delete:hover,
.edit:hover {
  transform: scale(1.3);
}
</style>

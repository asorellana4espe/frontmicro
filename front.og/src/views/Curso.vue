<template>
  <div>
    <div class="header">
      <h1>
        <i class="fa fa-angle-right"></i>
        Cursos
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
          v-model="nombre"
          label="Nombre"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="descripcion"
          label="Descripción"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="nrc"
          label="NRC"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="cupo"
          label="Nro Cupos"
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
        <i class="fa fa-angle-right"></i> Lista de cursos:
      </h3>
      <div class="centered campo-1">
        <div
          v-for="curso in listCursos"
          v-bind:key="curso.cursoId"
          class="modelCurso campo-1-3"
        >
          <h3 class="titulo">Curso</h3>
          <strong>Nombre: </strong>{{ curso.cursoNombre }} <br />
          <strong>NRC: </strong>{{ curso.cursoNrc }} <br />
          <strong>Descripción: </strong>{{ curso.cursoDescripcion }} <br />
          <strong>Cupo: </strong>{{ curso.cursoCupo }} <br />
          <div class="controls">
            <i class="fa fa-pen edit" @click="loadEdit(curso)"></i>
            <i class="fa fa-trash delete" @click="borrar(curso.cursoId)"></i>
          </div>
          <strong>Lista matriculados:</strong><br>
          <p>{{ curso.cursoPersonas }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cursoController from "../Controllers/Curso.js";
import Globals from "../Controllers/Globals.js";
import axios from "axios";

export default {
  data() {
    return {
      listCursos: [],
      nombre: "",
      descripcion: "",
      nrc: "",
      cupo: "",
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
      let response = await cursoController.list(Globals._URL, head);
      let datos = response.data;
      
      datos.forEach((element) => {
        axios.get(Globals._URL + "/ApiMatriculas/matriculas/lista/" + element.cursoId).then(function (response) {
          // handle success
          element.cursoPersonas = response.data;
        });
      });
      this.listCursos = datos;
      console.log(this.listCursos);
      this.loaded = true;
    },
    crear: async function (body, head) {
      let response = await cursoController.create(
        Globals._URL,
        JSON.stringify(body),
        head
      );
      console.log(response);
    },
    editar: async function (body, head) {
      let response = await cursoController.edit(
        Globals._URL,
        JSON.stringify(body),
        head,
        this.id
      );
      console.log(response);
    },
    borrar: async function (encid) {
      try {
        let response = await cursoController.delete(
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
            cursoNrc: this.nrc,
            cursoNombre: this.nombre,
            cursoCupo: this.cupo,
            cursoDescripcion: this.descripcion,
          };
          console.log(form);
          this.crear(form, this.head);
          break;
        case 2:
          //actualizar
          form = {
            cursoId: this.id,
            cursoNrc: this.nrc,
            cursoNombre: this.nombre,
            cursoCupo: this.cupo,
            cursoDescripcion: this.descripcion,
          };
          this.editar(form, this.head);
          break;
      }
      location.reload();
    },
    loadEdit: function (curso) {
      this.id = curso.cursoId;
      this.nrc = curso.cursoNrc;
      this.nombre = curso.cursoNombre;
      this.cupo = curso.cursoCupo;
      this.descripcion = curso.cursoDescripcion;
      this.estado = false;
    },
    cancelEdit: function () {
      this.id = null;
      this.nrc = "";
      this.nombre = "";
      this.cupo = "";
      this.descripcion = "";
      this.estado = true;
    },
  },
  created() {
    this.cargar();
  },
};
</script>
<style scoped>
.modelCurso {
  overflow: hidden;
  border-radius: 10px;
  padding: 0px 6px 6px 6px;
  background: white;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
}
.modelCurso .titulo {
  background: #172b4d;
  color: white;
  margin: 0px;
  margin-left: 50%;
  margin-bottom: 10px;
  padding: 5px 6px;
  width: 150%;
  transform: translateX(-50%);
}
.modelCurso .controls {
  margin: 10px;
}
.modelCurso .controls .edit {
  display: inline-flex;
  color: white;
  background: rgb(32, 117, 32);
  border-radius: 50%;
  padding: 5px;
  margin: 6px;
  cursor: pointer;
  transition: all 0.4s ease;
}
.modelCurso .controls .delete {
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

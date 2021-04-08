<template>
  <div>
    <div class="header">
      <h1>
        <i class="fa fa-angle-right"></i>
        Matriculas
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
          v-model="personaId"
          label="Estudiante"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="pagoId"
          label="Pago"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="cursoId"
          label="Curso"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="periodo"
          label="Periodo"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="persona"
          label="Encargado"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="numero"
          label="N° matrícula"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="fecha"
          label="Fecha"
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
          v-for="matri in listMatriculas"
          :key="matri.matricula.matriculaId"
          class="modelMatricula campo-1-2"
        >
          <h3 class="titulo">Matrícula</h3>
          <strong>Encargado: </strong>{{ matri.matricula.matriculaPersona }}
          <br />
          <strong>Periodo: </strong>{{ matri.matricula.matriculaPeriodo }}
          <br />
          <strong>Curso: </strong>{{ matri.curso.cursoNombre }} -
          {{ matri.curso.cursoNrc }} <br />
          <strong>N° matrícula: </strong>{{ matri.matricula.matriculaNumero }}
          <br />
          <strong>Estudiante: </strong>{{ matri.persona.personaNombres }}
          {{ matri.persona.personaApellidos }}<br />
          <strong>Pago: </strong>{{ matri.pago.pagoMetodo }} de ${{
            matri.pago.pagoValor
          }}
          por {{ matri.pago.pagoMotivo }}<br />
          <strong>Fecha: </strong>{{ matri.matricula.matriculaFecha }} <br />
          <div class="controls">
            <i class="fa fa-pen edit" @click="loadEdit(matri)"></i>
            <i
              class="fa fa-trash delete"
              @click="borrar(matri.matricula.matriculaId)"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import matriculaController from "../Controllers/Matricula.js";
import Globals from "../Controllers/Globals.js";

export default {
  data() {
    return {
      listMatriculas: [],
      personaId: "",
      pagoId: "",
      cursoId: "",
      periodo: "",
      persona: "",
      numero: "",
      fecha: "",
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
      let response = await matriculaController.list(Globals._URL, head);
      this.listMatriculas = response.data;
      this.loaded = true;
    },
    crear: async function (body, head) {
      let response = await matriculaController.create(
        Globals._URL,
        JSON.stringify(body),
        head
      );
      console.log(response);
    },
    editar: async function (body, head) {
      let response = await matriculaController.edit(
        Globals._URL,
        JSON.stringify(body),
        head,
        this.id
      );
      console.log(response);
    },
    borrar: async function (encid) {
      try {
        let response = await matriculaController.delete(
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
            personaId: this.personaId,
            pagoId: this.pagoId,
            cursoId: this.cursoId,
            matriculaPeriodo: this.periodo,
            matriculaPersona: this.persona,
            matriculaNumero: this.numero,
            matriculaFecha: this.fecha,
          };
          console.log(form);
          this.crear(form, this.head);
          break;
        case 2:
          //actualizar
          form = {
            matriculaId: this.id,
            personaId: this.personaId,
            pagoId: this.pagoId,
            cursoId: this.cursoId,
            matriculaPeriodo: this.periodo,
            matriculaPersona: this.persona,
            matriculaNumero: this.numero,
            matriculaFecha: this.fecha,
          };
          this.editar(form, this.head);
          break;
      }
      location.reload();
    },
    loadEdit: function (matricula) {
      this.personaId = matricula.matricula.personaId;
      this.pagoId = matricula.matricula.pagoId;
      this.cursoId = matricula.matricula.cursoId;
      this.periodo = matricula.matricula.matriculaPeriodo;
      this.persona = matricula.matricula.matriculaPersona;
      this.numero = matricula.matricula.matriculaNumero;
      this.fecha = matricula.matricula.matriculaFecha;
      this.id = matricula.matricula.matriculaId;
      this.estado = false;
    },
    cancelEdit: function () {
      this.personaId = "";
      this.pagoId = "";
      this.cursoId = "";
      this.periodo = "";
      this.persona = "";
      this.numero = "";
      this.fecha = "";
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
.modelMatricula {
  overflow: hidden;
  border-radius: 10px;
  padding: 0px 6px 6px 6px;
  background: white;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
}
.modelMatricula .titulo {
  background: #172b4d;
  color: white;
  margin: 0px;
  margin-left: 50%;
  margin-bottom: 10px;
  padding: 5px 6px;
  width: 150%;
  transform: translateX(-50%);
}
.modelMatricula .controls {
  margin: 10px;
}
.modelMatricula .controls .edit {
  display: inline-flex;
  color: white;
  background: rgb(32, 117, 32);
  border-radius: 50%;
  padding: 5px;
  margin: 6px;
  cursor: pointer;
  transition: all 0.4s ease;
}
.modelMatricula .controls .delete {
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

<template>
  <div>
    <div class="header">
      <h1>
        <i class="fa fa-angle-right"></i>
        Pagos
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
          v-model="codigo"
          label="Código"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="motivo"
          label="Motivo"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="valor"
          label="Valor"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="fecha"
          label="Fecha pago"
          color="#2c3e50"
          outlined
        ></v-text-field>

        <v-text-field
          class="campo-1"
          v-model="metodo"
          label="Método pago"
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
        <i class="fa fa-angle-right"></i> Lista de pagos:
      </h3>
      <div class="centered campo-1">
        <div
          v-for="pago in listPagos"
          v-bind:key="pago.pagoId"
          class="modelPago campo-1-3"
        >
          <h3 class="titulo">Pago</h3>
          <strong>Metodo: </strong>{{ pago.pagoMetodo }} <br />
          <strong>Valor: </strong>{{ pago.pagoValor }} <br />
          <strong>Código: </strong>{{ pago.pagoCodigo }} <br />
          <strong>Motivo: </strong>{{ pago.pagoMotivo }} <br />
          <strong>Fecha: </strong>{{ pago.pagoFecha }} <br />
          <div class="controls">
            <i class="fa fa-pen edit" @click="loadEdit(pago)"></i>
            <i class="fa fa-trash delete" @click="borrar(pago.pagoId)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagoController from "../Controllers/Pago.js";
import Globals from "../Controllers/Globals.js";

export default {
  data() {
    return {
      listPagos: [],
      codigo: "",
      motivo: "",
      valor: "",
      fecha: "",
      metodo: "",
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
      let response = await pagoController.list(Globals._URL, head);
      this.listPagos = response.data;
      this.loaded = true;
    },
    crear: async function (body, head) {
      let response = await pagoController.create(
        Globals._URL,
        JSON.stringify(body),
        head
      );
      console.log(response);
    },
    editar: async function (body, head) {
      let response = await pagoController.edit(
        Globals._URL,
        JSON.stringify(body),
        head,
        this.id
      );
      console.log(response);
    },
    borrar: async function (encid) {
      try {
        let response = await pagoController.delete(
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
            pagoValor: this.valor,
            pagoMetodo: this.metodo,
            pagoMotivo: this.motivo,
            pagoCodigo: this.codigo,
            pagoFecha: this.fecha,
          };
          console.log(form);
          this.crear(form, this.head);
          break;
        case 2:
          //actualizar
          form = {
            pagoId: this.id,
            pagoValor: this.valor,
            pagoMetodo: this.metodo,
            pagoMotivo: this.motivo,
            pagoCodigo: this.codigo,
            pagoFecha: this.fecha,
          };
          this.editar(form, this.head);
          break;
      }
      location.reload();
    },
    loadEdit: function (pago) {
      this.id = pago.pagoId;
      this.valor = pago.pagoValor;
      this.codigo = pago.pagoCodigo;
      this.fecha = pago.pagoFecha;
      this.motivo = pago.pagoMotivo;
      this.metodo = pago.pagoMetodo;
      this.estado = false;
    },
    cancelEdit: function () {
      this.id = null;
      this.valor = "";
      this.codigo = "";
      this.fecha = "";
      this.motivo = "";
      this.metodo = "";
      this.estado = true;
    },
  },
  created() {
    this.cargar();
  },
};
</script>
<style scoped>
.modelPago {
  overflow: hidden;
  border-radius: 10px;
  padding: 0px 6px 6px 6px;
  background: white;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.57);
}
.modelPago .titulo {
  background: #172b4d;
  color: white;
  margin: 0px;
  margin-left: 50%;
  margin-bottom: 10px;
  padding: 5px 6px;
  width: 150%;
  transform: translateX(-50%);
}
.modelPago .controls {
  margin: 10px;
}
.modelPago .controls .edit {
  display: inline-flex;
  color: white;
  background: rgb(32, 117, 32);
  border-radius: 50%;
  padding: 5px;
  margin: 6px;
  cursor: pointer;
  transition: all 0.4s ease;
}
.modelPago .controls .delete {
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

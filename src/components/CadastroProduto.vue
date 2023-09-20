<template>
<form>
  <div class="mb-3">
    <label for="titulo" class="form-label">titulo</label>
    <input type="text" class="form-control" id="titulo" v-model="produto.titulo">
  </div>
  <div class="mb-3">
    <label for="descricao" class="form-label">descricao</label>
    <input type="textarea" class="form-control" id="descricao" v-model="produto.descricao">
  </div>
  <div class="mb-3 ">
    <label for="preco" class="form-label">preco</label>
    <input type="number" class="form-control" id="preco" v-model="produto.preco">
  </div>
  <div class="mb-3 ">
    <label for="prazo" class="form-label">prazo entrega</label>
    <input type="date" class="form-control" id="prazo">
  </div>
  <button type="submit" class="btn btn-primary">Cadastrar</button>
</form>

</template>

<script lang="ts">

import {defineComponent} from "vue"
import type Produto from "@/interfaces/Produto"
import http from "@/http"

export default defineComponent ({
    name: "CadastrarProduto",
    data(){
        return {
        produto: {} as Produto 
        }

    },
    methods: {
        salvarProduto() {
            http.post("/produto", this.produto);
        }
    }


})


</script>

<style>


</style>
<template>

     <ListaCliente @ao-deletar-cliente="deletarCliente" :clientes="clientes" class="mx-5"/>
     <CadastroCliente @ao-salvar-cliente="ListaCliente"/>
     
    </template>
    
    <script lang="ts">
    
    
    import http from '@/http';
    import type Cliente from '@/interfaces/Cliente';
    import { defineComponent } from 'vue';
    import CadastroCliente from './CadastroCliente.vue';
    import ListaCliente from './ListaCliente.vue';
    
    
    export default defineComponent ({
    name: 'PageCliente',
   components: {

     }, data() {
    return {

     clientes: [] as Cliente[]

 }
}, async mounted() {
    
    this.ListaCliente();
    
    }, methods: {

    async ListaCliente() {
    
    const response = await http.get("/cliente");
     this.clientes = response.data;
    
    },
    
     async deletarCliente(id: number) {
    
    await http.delete("/cliente/" + id)
 this.ListaCliente();

  }

 }
    })
    
    
    </script>
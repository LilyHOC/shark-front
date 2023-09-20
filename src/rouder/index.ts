import PageProdutoVue from "@/components/PageProduto.vue";
import PageClienteVue from "@/components/PageCliente.vue";
import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
{

    path: "/",
    component: PageClienteVue
},
{
path: "/produto",
component: PageProdutoVue


}


];

const router = createRouter({

    history: createWebHashHistory(),
    routes
})

export default router;
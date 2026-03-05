<template>
  <q-layout view="lHh Lpr lff" class="bg-gray-50 font-sans text-gray-800">
    
    <q-header class="bg-white text-gray-800 border-b border-gray-200">
      <q-toolbar class="q-py-sm q-px-md flex justify-between items-center" style="height: 80px; max-width: 1200px; margin: 0 auto;">
        
        <div class="flex items-center gap-2 cursor-pointer no-wrap" @click="$router.push('/')">
          <q-avatar size="50px">
            <img src="~assets/logo.png"> 
          </q-avatar>
          <div class="flex flex-col">
            <span class="text-weight-bold text-h6 q-line-height-1 uppercase text-black">
              CEEMS <span class="text-primary">PHOENİX</span>
            </span>
          </div>
        </div>

        <div class="flex items-center no-wrap">
          <nav class="flex items-center q-gutter-x-md q-mr-lg">
            <router-link to="/corporate" class="my-nav-link">Kurumsal</router-link>
            <router-link to="/about" class="my-nav-link">Hakkında</router-link>
            <router-link to="/products" class="my-nav-link">Ürünler</router-link>
            <router-link to="/contact" class="my-nav-link">İletişim</router-link>
          </nav>

          <q-btn 
            unelevated 
            rounded 
            color="primary" 
            label="SEPETE GİT" 
            icon="shopping_cart"
            class="text-weight-bold q-px-md"
            to="/cart"
          >
            <q-badge v-if="cartStore.totalItems > 0" color="red" floating>
              {{ cartStore.totalItems }}
            </q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-pt-md">
      <router-view />
    </q-page-container>

    <footer class="bg-grey-10 text-grey-5 q-pa-xl mt-auto">
      <div class="row q-col-gutter-lg justify-center" style="max-width: 1200px; margin: 0 auto;">
        <div class="col-12 col-md-4"><div class="text-white text-weight-bold q-mb-md uppercase">CEEMS PHOENİX</div><div class="text-caption">Konuksever Mah. Gazi Bulvarı No:220 Muratpaşa/Antalya</div></div>
        <div class="col-12 col-md-4"><div class="text-white text-weight-bold q-mb-md uppercase">Hızlı Erişim</div><div class="column q-gutter-y-xs"><router-link to="/products" class="text-grey-5 text-decoration-none">Ürünler</router-link><router-link to="/contact" class="text-grey-5 text-decoration-none">İletişim</router-link></div></div>
        <div class="col-12 col-md-4"><div class="text-white text-weight-bold q-mb-md uppercase">Bize Ulaşın</div><div class="text-caption">Tel: 0542 439 52 79</div><div class="text-caption uppercase">E-posta: info@ceemsphoenix.com</div></div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useCartStore } from 'src/stores/cart';
const cartStore = useCartStore();
</script>

<style scoped>
.my-nav-link { font-weight: 700; color: #4b5563; text-decoration: none; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; transition: color 0.3s; white-space: nowrap; }
.my-nav-link:hover { color: #10b981; }
.router-link-active { color: #059669 !important; border-bottom: 2px solid #059669; }
.text-decoration-none { text-decoration: none; }
</style>
<template>
  <q-page class="bg-gray-50 py-16">
    <div class="layout-container">
      <div class="text-center mb-20">
        <span class="text-brand-600 font-bold tracking-[0.2em] uppercase text-sm">Ürün Portföyü</span>
        <h1 class="text-4xl font-bold text-gray-900 uppercase mt-4">MİTO SERİSİ KATALOGU</h1>
        <q-separator color="brand-500" class="q-mt-md mx-auto" style="width: 60px; height: 3px;" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="product in products" :key="product.id" class="bg-white rounded-3xl p-5 shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100">
          
          <div class="aspect-square bg-gray-50 rounded-2xl mb-6 overflow-hidden border border-gray-50">
            <q-img :src="product.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div class="space-y-4">
            <div>
              <div class="text-[10px] text-brand-600 font-bold tracking-widest uppercase mb-1">CEEMS PHOENİX</div>
              <h3 class="text-lg font-bold text-gray-900 leading-tight uppercase h-14 overflow-hidden">{{ product.name }}</h3>
            </div>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-50">
              <div class="flex flex-col">
                <span class="text-sm font-bold text-primary">{{ product.price.toLocaleString('tr-TR') }} TL</span>
                <span class="text-[10px] text-gray-400 uppercase">30 SAŞE</span>
              </div>
              <q-btn 
                unelevated 
                color="primary" 
                icon="shopping_cart" 
                label="EKLE" 
                class="rounded-xl px-4 text-xs font-bold" 
                @click="addToCart(product)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useCartStore, type Product } from 'src/stores/cart';
import vioraImg from 'assets/mitoviora.jpg';
import regenixImg from 'assets/mitoregenix.jpg';
import androImg from 'assets/mitoandro.jpg';
import ovaImg from 'assets/mitoova.jpg';

const cartStore = useCartStore();

// Ürün listesini Product tipine uygun hale getirdik
const products: Product[] = [
  { id: 1, name: 'MitoViora X-Y', price: 1250, description: 'Gelişmiş hücresel destek.', image: vioraImg },
  { id: 2, name: 'MitoRegenix X-Y', price: 1350, description: 'Hücre yenilenmesi.', image: regenixImg },
  { id: 3, name: 'MitoAndro Y', price: 1150, description: 'Erkek sağlığına özel.', image: androImg },
  { id: 4, name: 'MitoOva X', price: 1150, description: 'Kadın sağlığına özel.', image: ovaImg }
];

// any yerine Product tipini kullandık
function addToCart(product: Product) {
  cartStore.addToCart(product);
}
</script>
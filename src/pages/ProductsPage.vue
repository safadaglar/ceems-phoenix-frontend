<template>
  <q-page class="bg-gray-50 py-16">
    <div class="layout-container">
      <div class="text-center mb-20">
        <span class="text-brand-600 font-bold tracking-[0.2em] uppercase text-sm">Ürün Portföyü</span>
        <h1 class="text-4xl font-bold text-gray-900 uppercase mt-4">MİTO SERİSİ KATALOGU</h1>
        <q-separator color="brand-500" class="q-mt-md mx-auto" style="width: 60px; height: 3px;" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(product, index) in products" :key="index" class="bg-white rounded-3xl p-5 shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100">
          
          <div class="aspect-square bg-gray-50 rounded-2xl mb-6 overflow-hidden border border-gray-50">
            <q-img :src="product.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div class="space-y-4">
            <div>
              <div class="text-[10px] text-brand-600 font-bold tracking-widest uppercase mb-1">CEEMS PHOENİX</div>
              <h3 class="text-lg font-bold text-gray-900 leading-tight uppercase h-14 overflow-hidden">{{ product.name }}</h3>
            </div>
            
            <p class="text-gray-500 text-xs leading-relaxed line-clamp-2 h-8">
              {{ product.description }}
            </p>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-50">
              <div class="flex flex-col">
                <span class="text-[10px] text-gray-400 uppercase">İçerik</span>
                <span class="text-sm font-bold text-gray-900">30 SAŞE</span>
              </div>
              <q-btn unelevated color="primary" icon="shopping_cart" label="EKLE" class="rounded-xl px-4 text-xs font-bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import vioraImg from 'assets/mitoviora.jpg';
import regenixImg from 'assets/mitoregenix.jpg';
import androImg from 'assets/mitoandro.jpg';
import ovaImg from 'assets/mitoova.jpg';

const products = [
  { name: 'MitoViora X-Y', description: 'Gelişmiş hücresel destek ve bağışıklık kompleksi.', image: vioraImg },
  { name: 'MitoRegenix X-Y', description: 'Hücre yenilenmesi ve doku onarımı desteği.', image: regenixImg },
  { name: 'MitoAndro Y', description: 'Erkek sağlığına özel hormonal ve enerjik destek.', image: androImg },
  { name: 'MitoOva X', description: 'Kadın sağlığına özel dengeleyici formül.', image: ovaImg }
];
</script>
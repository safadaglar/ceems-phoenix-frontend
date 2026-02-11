<template>
  <q-page class="bg-gray-50 py-12">
    <div class="layout-container">
      <!-- Üst Başlık ve Filtreler -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Ürün Katalogu</h1>
          <p class="text-gray-500 mt-2">CEEMS Phoenix yüksek teknolojili saşe çözümleri.</p>
        </div>
        <div class="flex gap-3 w-full md:w-auto">
          <q-input dense outlined v-model="search" placeholder="Ürün ara..." class="bg-white flex-1 md:w-64">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn icon="filter_list" flat bg-white border border-gray-200 class="bg-white" />
        </div>
      </div>

      <!-- Ürün Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(product, index) in products" :key="index" 
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
          
          <div class="relative aspect-square overflow-hidden bg-gray-100">
            <q-img :src="product.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-white/90 backdrop-blur text-brand-700 text-xs font-bold rounded-full shadow-sm">
                {{ product.category }}
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{{ product.name }}</h3>
            <p class="text-gray-500 text-sm line-clamp-2 mb-4">{{ product.description }}</p>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-50">
              <div class="flex flex-col">
                <span class="text-xs text-gray-400 font-medium">Paket İçeriği</span>
                <span class="font-bold text-brand-600">{{ product.sachetCount }} Saşe</span>
              </div>
              <q-btn round color="primary" icon="add" unelevated size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const search = ref('');

const products = [
  {
    name: 'Immune Support Phoenix',
    category: 'BAĞIŞIKLIK',
    sachetCount: 30,
    description: 'Yüksek doz C vitamini ve çinko içeren bağışıklık sistemi destekleyici.',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Phoenix Collagen Gold',
    category: 'GÜZELLİK',
    sachetCount: 14,
    description: 'Hidrolize kolajen peptitleri ve hyaluronik asit formülasyonu.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Energy Sachet Plus',
    category: 'ENERJİ',
    sachetCount: 20,
    description: 'B12 vitamini ve kafein içeren, anlık enerji sağlayan saşe formül.',
    image: 'https://images.unsplash.com/photo-1550573104-4f3697611aa2?auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Magnesium Phoenix',
    category: 'SAĞLIK',
    sachetCount: 30,
    description: 'Kas ve sinir sistemi fonksiyonlarını destekleyen magnezyum kompleksi.',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=500&q=80'
  }
];
</script>
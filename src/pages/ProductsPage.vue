<template>
  <q-page class="bg-gray-50 py-12">
    <div class="layout-container">
      <div class="mb-12">
        <h1 class="text-3xl font-bold text-gray-900">Mito Serisi Katalogu</h1>
        <p class="text-gray-500 mt-2">Yüksek teknolojili saşe çözümlerimiz.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(product, index) in products" :key="index" class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-lg transition-all">
          <div class="relative aspect-square bg-gray-100">
            <q-img :src="product.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ product.name }}</h3>
            <p class="text-gray-500 text-sm line-clamp-2 mb-4">{{ product.description }}</p>
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <span class="font-bold text-primary">30 Saşe</span>
              <q-btn round color="primary" icon="add_shopping_cart" unelevated size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const products = [
  { name: 'MitoViora X-Y', description: 'Gelişmiş hücresel destek ve bağışıklık kompleksi.', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=500&q=80' },
  { name: 'MitoRegenix X-Y', description: 'Hücre yenilenmesi ve doku onarımı desteği.', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80' },
  { name: 'MitoAndro Y', description: 'Erkek sağlığına özel hormonel ve enerjik destek.', image: 'https://images.unsplash.com/photo-1550573104-4f3697611aa2?auto=format&fit=crop&w=500&q=80' },
  { name: 'MitoOva X', description: 'Kadın sağlığına özel dengelleyici formül.', image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=500&q=80' }
];
</script>
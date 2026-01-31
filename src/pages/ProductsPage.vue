<template>
  <q-page class="bg-gray-50 py-12">
    <div class="layout-container">
      
      <div class="mb-8">
        <h1 class="font-display font-bold text-3xl text-gray-900">Tüm Ürünler</h1>
        <p class="text-gray-500 mt-2">Sağlığınız için özenle seçilmiş {{ products.length }} ürün listeleniyor.</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        
        <aside class="w-full lg:w-64 space-y-8 flex-shrink-0">
          <div class="bg-white p-6 rounded-2xl shadow-sm">
            <h3 class="font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">Kategoriler</h3>
            <div class="space-y-3">
              <label v-for="cat in categories" :key="cat" class="flex items-center gap-3 cursor-pointer group">
                <q-checkbox v-model="selectedCategories" :val="cat" color="teal" size="xs" />
                <span class="text-gray-600 group-hover:text-brand-600 transition-colors text-sm">{{ cat }}</span>
              </label>
            </div>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm">
             <h3 class="font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">Fiyat Aralığı</h3>
             <div class="px-2">
               <q-range
                v-model="priceRange"
                :min="0"
                :max="2000"
                color="teal"
                label-always
                class="mt-8"
              />
             </div>
          </div>
        </aside>

        <main class="flex-1">
          
          <div class="bg-white p-4 rounded-xl shadow-sm mb-6 flex justify-between items-center">
            <div class="text-sm text-gray-500">Sıralama:</div>
            <select class="bg-gray-50 border-none rounded-lg text-sm text-gray-700 py-2 px-4 focus:ring-1 focus:ring-brand-500 cursor-pointer">
              <option>Önerilen</option>
              <option>Fiyat: Artan</option>
              <option>Fiyat: Azalan</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="product in products" :key="product.id" class="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              
              <div class="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden relative cursor-pointer">
                <q-img :src="product.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div v-if="product.discount" class="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                  -{{ product.discount }}%
                </div>
              </div>

              <div class="flex-1 flex flex-col">
                <div class="text-xs text-brand-600 font-medium mb-1 uppercase tracking-wide">{{ product.category }}</div>
                <h3 class="text-gray-900 font-bold mb-1 leading-snug group-hover:text-brand-600 transition-colors cursor-pointer">{{ product.name }}</h3>
                <p class="text-xs text-gray-500 line-clamp-2 mb-4">{{ product.desc }}</p>
                
                <div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <div class="flex flex-col">
                    <span v-if="product.oldPrice" class="text-xs text-gray-400 line-through">{{ product.oldPrice }} ₺</span>
                    <span class="text-lg font-bold text-gray-900">{{ product.price }} ₺</span>
                  </div>
                  <button class="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all shadow-sm">
                    <div class="i-mdi-cart-plus text-xl"></div>
                  </button>
                </div>
              </div>

            </div>
          </div>

          <div class="flex justify-center mt-12">
            <q-pagination
              v-model="current"
              :max="5"
              direction-links
              flat
              color="teal"
              active-color="teal"
              active-text-color="white"
            />
          </div>

        </main>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const current = ref(1)
const selectedCategories = ref(['Vitaminler'])
const priceRange = ref({ min: 100, max: 1500 })

const categories = ['Vitaminler', 'Mineraller', 'Protein Tozları', 'Bitkisel Yağlar', 'Kolajen']

// Mock Data
const products = ref([
  { id: 1, name: 'Omega 3 Balık Yağı', category: 'Vitaminler', price: 450, oldPrice: 550, discount: 18, desc: 'Yüksek EPA ve DHA içeren saf balık yağı kapsülleri.', image: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Whey Protein İzole', category: 'Protein Tozları', price: 1200, desc: 'Çikolata aromalı, hızlı emilen izole protein tozu.', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Hidrolize Kolajen', category: 'Kolajen', price: 850, oldPrice: 900, discount: 5, desc: 'Cilt ve eklem sağlığı için Tip 1 ve Tip 3 kolajen.', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Multivitamin Complex', category: 'Vitaminler', price: 320, desc: 'Günlük vitamin ve mineral ihtiyacınızı karşılar.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Magnezyum Sitrat', category: 'Mineraller', price: 280, desc: 'Kas krampları ve yorgunluk için yüksek emilimli magnezyum.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'D3K2 Vitamini', category: 'Vitaminler', price: 190, desc: 'Kemik sağlığı ve bağışıklık sistemi desteği.', image: 'https://images.unsplash.com/photo-1616671276445-169d9e3b748a?auto=format&fit=crop&w=400&q=80' },
])
</script>
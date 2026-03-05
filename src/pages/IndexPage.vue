<template>
  <q-page class="bg-gray-50">
    
    <section class="relative bg-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-50 to-white z-0"></div>
      
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-3xl z-0"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl z-0"></div>

      <div class="layout-container relative z-10 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold border border-brand-200">
            <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
            Yeni Nesil Sağlık Teknolojisi
          </div>
          
          <h1 class="font-display font-bold text-5xl lg:text-7xl text-gray-900 leading-tight">
            Geleceği <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-600">Phoenix</span> ile Yönetin
          </h1>
          
          <p class="text-lg text-gray-600 leading-relaxed max-w-lg">
            CEEMS Phoenix ile yüksek biyoyararlanıma sahip formülleri modern yönetim sistemimizle birleştiriyoruz. Verimlilik ve sağlığı tek noktada buluşturun.
          </p>

          <div class="flex flex-wrap gap-4">
            <q-btn to="/products" no-caps class="btn-primary text-lg px-8 py-3">
              Ürünleri Keşfet
              <div class="i-mdi-arrow-right ml-2"></div>
            </q-btn>
            <!-- Dokümantasyon Butonu Kaldırıldı -->
          </div>

          <div class="pt-8 flex items-center gap-6 text-gray-400 grayscale opacity-70">
            <div class="flex flex-col items-center gap-1">
              <div class="i-mdi-shield-lock text-3xl"></div>
              <span class="text-xs font-medium">GMP Sertifikalı</span>
            </div>
             <div class="flex flex-col items-center gap-1">
              <div class="i-mdi-flask text-3xl"></div>
              <span class="text-xs font-medium">Saşe Formül</span>
            </div>
             <div class="flex flex-col items-center gap-1">
              <div class="i-mdi-chart-arc text-3xl"></div>
              <span class="text-xs font-medium">Yüksek Emilim</span>
            </div>
          </div>
        </div>

        <div class="relative lg:h-[600px] flex items-center justify-center">
          <div class="relative z-10 bg-white p-4 rounded-3xl shadow-2xl shadow-brand-500/20 rotate-3 hover:rotate-0 transition-transform duration-500">
            <q-img 
              src="~assets/sachet.jpg" 
              class="rounded-2xl"
              style="width: 400px; height: 400px; object-fit: contain;"
            />
            
            <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <div class="i-mdi-check-decagram text-2xl"></div>
              </div>
              <div>
                <div class="font-bold text-gray-900">Onaylı Formül</div>
                <div class="text-xs text-gray-500">Uluslararası Standartlar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Özellikler ve Modüller Bölümü -->
    <section class="py-20 bg-gray-50">
      <div class="layout-container">
        <div class="flex justify-between items-end mb-12">
          <div>
            <span class="section-subtitle">MİTO SERİSİ</span>
            <h2 class="section-title">Öne Çıkan Ürünler</h2>
          </div>
          <q-btn flat no-caps color="primary" label="Tümünü İncele" to="/products" icon-right="arrow_forward" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(module, index) in modules" :key="index" class="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative">
            <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
              <q-img :src="module.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <div class="text-xs text-gray-400 font-medium mb-1 uppercase">{{ module.category }}</div>
              <h3 class="text-gray-900 font-bold mb-2 group-hover:text-brand-600 transition-colors">{{ module.title }}</h3>
              <div class="flex items-center justify-between text-green-500 text-xs">
                 <span class="text-grey-7">{{ module.statusLabel }}</span>
                 <div class="i-mdi-checkbox-marked-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'IndexPage' });

const modules = [
  {
    title: 'MitoViora X-Y',
    category: 'PHARMA',
    statusLabel: '30 Saşe',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'MitoRegenix X-Y',
    category: 'PHARMA',
    statusLabel: '30 Saşe',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'MitoAndro Y',
    category: 'PHARMA',
    statusLabel: '30 Saşe',
    image: 'https://images.unsplash.com/photo-1550573104-4f3697611aa2?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'MitoOva X',
    category: 'PHARMA',
    statusLabel: '30 Saşe',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=500&q=80'
  }
];
</script>

<style scoped>
.animate-bounce-slow { animation: bounce 3s infinite; }
@keyframes bounce {
  0%, 100% { transform: translateY(-5%); }
  50% { transform: none; }
}
</style>
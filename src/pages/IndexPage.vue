<template>
  <q-page class="bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-white overflow-hidden border-b border-gray-100">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-50 to-white z-0"></div>
      <div class="layout-container relative z-10 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold border border-brand-200">
            <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
            YENİ NESİL SAĞLIK TEKNOLOJİSİ
          </div>
          <h1 class="font-display font-bold text-5xl lg:text-7xl text-gray-900 leading-tight uppercase">
            GELECEĞİ <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-600">PHOENİX</span> İLE YÖNETİN
          </h1>
          <p class="text-lg text-gray-600 leading-relaxed max-w-lg">
            CEEMS PHOENİX, yüksek biyoyararlanıma sahip Mito serisi formülleriyle sağlığınızı ve yaşam kalitenizi en üst seviyeye taşır.
          </p>
          <div class="flex flex-wrap gap-4">
            <q-btn to="/products" unelevated color="primary" class="text-lg px-8 py-3 rounded-xl font-bold">
              ÜRÜNLERİ KEŞFET
              <q-icon name="arrow_forward" class="q-ml-sm" />
            </q-btn>
          </div>
        </div>
        <div class="relative lg:h-[600px] flex items-center justify-center">
          <div class="relative z-10 bg-white p-4 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
            <q-img src="~assets/sachet.jpg" class="rounded-2xl" style="width: 400px; height: 400px; object-fit: contain;" />
          </div>
        </div>
      </div>
    </section>

    <!-- Öne Çıkan Ürünler Bölümü (DÜZELTİLMİŞ ALAN) -->
    <section class="py-24 bg-gray-50">
      <div class="layout-container">
        <div class="flex justify-between items-end mb-16">
          <div>
            <span class="text-brand-600 font-bold tracking-widest uppercase text-sm">MİTO SERİSİ</span>
            <h2 class="text-3xl font-bold text-gray-900 uppercase mt-2">ÖNE ÇIKAN ÜRÜNLERİMİZ</h2>
          </div>
          <q-btn flat no-caps color="primary" label="Tüm Katalogu Gör" to="/products" icon-right="arrow_forward" class="text-weight-bold" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(module, index) in featuredProducts" :key="index" class="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer border border-gray-100 relative">
            
            <!-- Görsel Alanı: Kare format sabitlendi -->
            <div class="aspect-square bg-gray-50 rounded-2xl mb-6 overflow-hidden relative border border-gray-50">
              <q-img :src="module.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <!-- Bilgi Alanı -->
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-[10px] text-brand-600 font-bold tracking-widest uppercase">PHARMA</span>
                <div class="flex items-center gap-1 text-[10px] text-green-600 font-bold">
                  <q-icon name="check_circle" size="14px" />
                  <span>STOKTA</span>
                </div>
              </div>
              
              <!-- Ürün İsmi: Font boyutu küçültüldü ve denge sağlandı -->
              <h3 class="text-lg font-bold text-gray-900 leading-tight group-hover:text-brand-600 transition-colors uppercase h-14 overflow-hidden">
                {{ module.title }}
              </h3>

              <div class="flex items-center justify-between pt-4 border-t border-gray-50">
                 <span class="text-xs text-gray-500 font-medium tracking-wide">{{ module.statusLabel }}</span>
                 <q-btn round color="primary" icon="add" unelevated size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import vioraImg from 'assets/mitoviora.jpg';
import regenixImg from 'assets/mitoregenix.jpg';
import androImg from 'assets/mitoandro.jpg';
import ovaImg from 'assets/mitoova.jpg';

defineOptions({ name: 'IndexPage' });

const featuredProducts = [
  { title: 'MitoViora X-Y', statusLabel: '30 SAŞE', image: vioraImg },
  { title: 'MitoRegenix X-Y', statusLabel: '30 SAŞE', image: regenixImg },
  { title: 'MitoAndro Y', statusLabel: '30 SAŞE', image: androImg },
  { title: 'MitoOva X', statusLabel: '30 SAŞE', image: ovaImg }
];
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
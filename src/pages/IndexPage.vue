<template>
  <q-page class="bg-gray-50">
    <section class="relative bg-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-50 to-white z-0"></div>
      <div class="layout-container relative z-10 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold border border-brand-200">
            <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
            YENİ NESİL SAĞLIK TEKNOLOJİSİ
          </div>
          <h1 class="font-display font-bold text-5xl lg:text-7xl text-gray-900 leading-tight">
            GELECEĞİ <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-600">PHOENİX</span> İLE YÖNETİN
          </h1>
          <p class="text-lg text-gray-600 leading-relaxed max-w-lg">
            CEEMS PHOENİX yüksek biyoyararlanıma sahip Mito serisi formülleriyle sağlığınızı en üst seviyeye taşır.
          </p>
          <div class="flex flex-wrap gap-4">
            <q-btn to="/products" no-caps class="btn-primary text-lg px-8 py-3">
              ÜRÜNLERİ KEŞFET
              <div class="i-mdi-arrow-right ml-2"></div>
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
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'IndexPage' });
</script>
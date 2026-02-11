<template>
  <q-page class="bg-gray-50">
    
    <!-- Hero Section (Giriş Bölümü) -->
    <section class="relative bg-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-50 to-white z-0"></div>
      
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-3xl z-0"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl z-0"></div>

      <div class="layout-container relative z-10 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold border border-brand-200">
            <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
            Yeni Nesil Yönetim Sistemi
          </div>
          
          <h1 class="font-display font-bold text-5xl lg:text-7xl text-gray-900 leading-tight">
            Geleceği <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-600">Phoenix</span> ile Yönetin
          </h1>
          
          <p class="text-lg text-gray-600 leading-relaxed max-w-lg">
            CEEMS Phoenix ile cihazlarınızı uzaktan izleyin, verilerinizi analiz edin ve sistem performansınızı en üst seviyeye çıkarın.
          </p>

          <div class="flex flex-wrap gap-4">
            <q-btn to="/devices" no-caps class="btn-primary text-lg px-8 py-3">
              Sisteme Giriş
              <div class="i-mdi-arrow-right ml-2"></div>
            </q-btn>
            <q-btn to="/docs" no-caps flat class="text-gray-600 hover:text-brand-600 font-medium text-lg px-6 py-3 bg-white/50 hover:bg-white border border-gray-200">
              Dokümantasyon
            </q-btn>
          </div>

          <div class="pt-8 flex items-center gap-6 text-gray-400 grayscale opacity-70">
            <div class="flex flex-col items-center gap-1">
              <div class="i-mdi-shield-lock text-3xl"></div>
              <span class="text-xs font-medium">Uçtan Uca Şifreleme</span>
            </div>
             <div class="flex flex-col items-center gap-1">
              <div class="i-mdi-cloud-sync text-3xl"></div>
              <span class="text-xs font-medium">Anlık Senkronizasyon</span>
            </div>
             <div class="flex flex-col items-center gap-1">
              <div class="i-mdi-chart-arc text-3xl"></div>
              <span class="text-xs font-medium">Gelişmiş Analitik</span>
            </div>
          </div>
        </div>

        <!-- Görsel Alanı (Dashboard Önizleme Görseli) -->
        <div class="relative lg:h-[600px] flex items-center justify-center">
          <div class="relative z-10 bg-white p-4 rounded-3xl shadow-2xl shadow-brand-500/20 rotate-3 hover:rotate-0 transition-transform duration-500">
            <q-img 
              src="https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              class="rounded-2xl w-[350px] h-[450px] object-cover"
            />
            <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <div class="i-mdi-cpu-64-bit text-2xl"></div>
              </div>
              <div>
                <div class="font-bold text-gray-900">Yüksek Performans</div>
                <div class="text-xs text-gray-500">Optimize Edilmiş Altyapı</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Özellikler Bölümü -->
    <section class="py-20 bg-white border-y border-gray-100">
      <div class="layout-container">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="section-subtitle">NEDEN CEEMS PHOENIX?</span>
          <h2 class="section-title">Sisteminiz İçin En Güçlü Çözüm</h2>
          <p class="text-gray-500 mt-4">Güvenilir, ölçeklenebilir ve kullanıcı dostu arayüzümüzle kontrolü elinize alın.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 rounded-2xl bg-gray-50 hover:bg-brand-50 transition-colors duration-300 group">
            <div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <div class="i-mdi-monitor-dashboard text-3xl text-brand-500"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Merkezi İzleme</h3>
            <p class="text-gray-500 leading-relaxed">Tüm bağlı cihazları tek bir ekrandan anlık olarak takip edin ve yönetin.</p>
          </div>

          <div class="p-8 rounded-2xl bg-gray-50 hover:bg-brand-50 transition-colors duration-300 group">
            <div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <div class="i-mdi-chart-line-variant text-3xl text-brand-500"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Akıllı Raporlama</h3>
            <p class="text-gray-500 leading-relaxed">Verilerinizi görselleştirin ve stratejik kararlar almak için otomatik raporlar oluşturun.</p>
          </div>

          <div class="p-8 rounded-2xl bg-gray-50 hover:bg-brand-50 transition-colors duration-300 group">
            <div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <div class="i-mdi-security text-3xl text-brand-500"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Üst Düzey Güvenlik</h3>
            <p class="text-gray-500 leading-relaxed">Kurumsal seviyede güvenlik protokolleri ile verileriniz her zaman güvende kalsın.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modüller Bölümü -->
    <section class="py-20 bg-gray-50">
      <div class="layout-container">
        <div class="flex justify-between items-end mb-12">
          <div>
            <span class="section-subtitle">SİSTEM BİRİMLERİ</span>
            <h2 class="section-title">Aktif Modüller</h2>
          </div>
          <q-btn flat no-caps color="primary" label="Tümünü İncele" to="/modules" icon-right="arrow_forward" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Modüller Döngüsü -->
          <div v-for="(module, index) in modules" :key="index" class="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative">
            
            <div v-if="module.isNew" class="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10 uppercase">
              YENİ
            </div>

            <div class="aspect-[4/5] bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
              <q-img :src="module.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <button class="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-500 hover:text-white">
                <div class="i-mdi-eye text-xl"></div>
              </button>
            </div>

            <div>
              <div class="text-xs text-gray-400 font-medium mb-1 uppercase">{{ module.category }}</div>
              <h3 class="text-gray-900 font-bold mb-2 group-hover:text-brand-600 transition-colors">{{ module.title }}</h3>
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-brand-600">{{ module.statusLabel }}</span>
                <div class="flex text-green-500 text-xs">
                  <div class="i-mdi-checkbox-marked-circle"></div>
                  <span class="ml-1">Aktif</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Bülten Bölümü -->
    <section class="py-20">
      <div class="layout-container">
        <div class="bg-brand-900 rounded-3xl p-12 relative overflow-hidden text-center text-white">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div class="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 class="font-display text-3xl font-bold">Sistem Güncellemelerinden Haberdar Olun</h2>
            <p class="text-brand-100">Yeni özellikler, güvenlik yamaları ve teknik duyurular için listemize katılın.</p>
            
            <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Kurumsal e-posta adresiniz" class="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-400" />
              <button class="bg-brand-500 hover:bg-brand-400 text-white font-medium px-8 py-3 rounded-xl transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage'
});

const modules = [
  {
    title: 'Cihaz Kontrol Paneli',
    category: 'YÖNETİM',
    statusLabel: 'Versiyon 2.1',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Veri Analiz Motoru',
    category: 'ANALİTİK',
    statusLabel: 'Versiyon 1.4',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Kullanıcı Yetkilendirme',
    category: 'GÜVENLİK',
    statusLabel: 'Versiyon 3.0',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Hata İzleme Servisi',
    category: 'LOGLAMA',
    statusLabel: 'Versiyon 1.0',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=500&q=80'
  }
];
</script>

<style scoped>
/* UnoCSS animate sınıfları için gerekirse manuel tanımlamalar */
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
}
</style>
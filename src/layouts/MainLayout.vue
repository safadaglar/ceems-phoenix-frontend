<template>
  <q-layout view="lHh Lpr lff" class="bg-gray-50 font-sans text-gray-800">
    
    <!-- ÜST BAR (HEADER) -->
    <q-header class="bg-white text-gray-800 border-b border-gray-200">
      <q-toolbar class="q-py-sm q-px-md flex justify-between items-center" style="height: 80px; max-width: 1200px; margin: 0 auto;">
        
        <!-- SOL: LOGO -->
        <div class="flex items-center gap-2 cursor-pointer" @click="$router.push('/')">
          <q-avatar size="50px">
            <img src="~assets/logo.png"> 
          </q-avatar>
          <div class="flex flex-col">
            <span class="text-weight-bold text-h6 q-line-height-1 uppercase text-black">
              CEEMS <span class="text-primary">PHOENIX</span>
            </span>
            <span class="text-caption text-grey-6 text-weight-bold uppercase" style="font-size: 10px; letter-spacing: 1px;">Management System</span>
          </div>
        </div>

        <!-- SAĞ: NAVİGASYON LİNKLERİ -->
        <div class="flex items-center no-wrap">
          <nav class="flex items-center q-gutter-x-lg q-mr-md">
            <router-link to="/corporate" class="my-nav-link">Kurumsal</router-link>
            <router-link to="/about" class="my-nav-link">Hakkında</router-link>
            <router-link to="/products" class="my-nav-link">Ürünler</router-link>
            <router-link to="/contact" class="my-nav-link">İletişim</router-link>
          </nav>

          <!-- İkonlar -->
          <div class="flex items-center q-gutter-x-sm border-left q-pl-md">
            <q-btn flat round dense icon="language" color="grey-7" />
            <q-btn flat round dense icon="notifications" color="grey-7">
              <q-badge color="red" floating>0</q-badge>
            </q-btn>
          </div>
        </div>

      </q-toolbar>
    </q-header>

    <!-- SAYFA İÇERİĞİ -->
    <q-page-container class="q-pt-md">
      <router-view />
    </q-page-container>

    <!-- FOOTER -->
    <footer class="bg-grey-10 text-grey-5 q-pa-xl mt-auto">
      <div class="row q-col-gutter-lg justify-center" style="max-width: 1200px; margin: 0 auto;">
        <div class="col-12 col-md-4">
          <div class="text-white text-weight-bold q-mb-md uppercase">CEEMS Phoenix</div>
          <div class="text-caption">Konuksever Mah. Gazi Bulvarı No:220 Muratpaşa/Antalya</div>
        </div>
        <div class="col-12 col-md-4">
          <div class="text-white text-weight-bold q-mb-md">HIZLI ERİŞİM</div>
          <div class="column q-gutter-y-xs">
            <router-link to="/products" class="text-grey-5 text-decoration-none">Ürünler</router-link>
            <router-link to="/contact" class="text-grey-5 text-decoration-none">İletişim</router-link>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="text-white text-weight-bold q-mb-md uppercase">BİZE ULAŞIN</div>
          <div class="text-caption">Tel: 0542 439 52 79</div>
          <div class="text-caption uppercase">E-posta: info@ceemsphoenix.com</div>
        </div>
      </div>
    </footer>

  </q-layout>
</template>

<script setup lang="ts">
// Hatalı değişken silindi, script bloğu temizlendi.
</script>

<style scoped>
.my-nav-link {
  font-weight: 700;
  color: #4b5563;
  text-decoration: none;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s;
}
.my-nav-link:hover {
  color: #10b981;
}
.router-link-active {
  color: #059669 !important;
  border-bottom: 2px solid #059669;
}
.border-left {
  border-left: 1px solid #e5e7eb;
}
.text-decoration-none {
  text-decoration: none;
}
</style>
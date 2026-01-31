<template>
  <q-layout view="lHh Lpr lff" class="bg-gray-50 font-sans text-gray-800">
    
    <q-header class="bg-white/90 backdrop-blur-md border-b border-gray-100 h-[80px] flex items-center fixed w-full z-50 text-gray-800">
      <q-toolbar class="layout-container w-full flex items-center justify-between">
        
        <div class="flex items-center gap-2 cursor-pointer group" @click="$router.push('/')">
          <q-avatar size="64px">
            <img src="~assets/favico.jpg"> 
          </q-avatar>
          <div class="flex flex-col">
            <span class="font-display font-bold text-xl leading-none text-gray-900 tracking-tight">VITA<span class="text-brand-500">CORE</span></span>
            <span class="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-1">Natural Health</span>
          </div>
        </div>

        <nav class="hidden md:flex items-center gap-8">
          <router-link to="/" class="nav-link" active-class="text-brand-600 font-bold">Anasayfa</router-link>
          <router-link to="/products" class="nav-link" active-class="text-brand-600 font-bold">Ürünlerimiz</router-link>
          <router-link to="/corporate" class="nav-link" active-class="text-brand-600 font-bold">Kurumsal</router-link>
          <router-link to="/contact" class="nav-link" active-class="text-brand-600 font-bold">İletişim</router-link>
        </nav>

        <div class="flex items-center gap-2">
          <button class="p-2 text-gray-400 hover:text-brand-600 transition-colors rounded-full hover:bg-gray-100">
            <div class="i-mdi-web text-xl"></div>
          </button>

          <button class="p-2 text-gray-600 hover:text-brand-600 transition-colors rounded-full hover:bg-gray-100 relative group mr-2">
            <div class="i-mdi-cart-outline text-2xl"></div>
            <span class="absolute top-1 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">0</span>
          </button>
          
          <button class="hidden md:flex btn-primary text-sm py-2 px-5 rounded-lg shadow-none">
            <span>Giriş Yap</span>
            <div class="i-mdi-login text-lg"></div>
          </button>

          <button class="md:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg" @click="toggleLeftDrawer">
            <div class="i-mdi-menu text-2xl"></div>
          </button>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      bordered
      overlay
      class="bg-white/95 backdrop-blur-xl"
      :width="300"
    >
      <div class="flex flex-col h-full p-6">
        <div class="flex justify-between items-center mb-10">
          <span class="font-display font-bold text-xl text-gray-900">Menü</span>
          <button @click="toggleLeftDrawer" class="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
            <div class="i-mdi-close text-xl"></div>
          </button>
        </div>

        <div class="space-y-2 flex flex-col">
           <router-link to="/" class="text-lg font-medium text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-brand-600 transition-all" active-class="bg-brand-50 text-brand-700">Anasayfa</router-link>
           <router-link to="/products" class="text-lg font-medium text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-brand-600 transition-all" active-class="bg-brand-50 text-brand-700">Ürünlerimiz</router-link>
           <router-link to="/corporate" class="text-lg font-medium text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-brand-600 transition-all" active-class="bg-brand-50 text-brand-700">Kurumsal</router-link>
           <router-link to="/contact" class="text-lg font-medium text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-brand-600 transition-all" active-class="bg-brand-50 text-brand-700">İletişim</router-link>
        </div>

        <div class="mt-auto pt-8 border-t border-gray-100">
          <button class="w-full btn-primary justify-center mb-4">
            Giriş Yap / Üye Ol
          </button>
          <p class="text-center text-xs text-gray-400">© 2024 VitaCore App</p>
        </div>
      </div>
    </q-drawer>

    <q-page-container class="pt-[80px]">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform opacity-0 translate-y-4"
          enter-to-class="transform opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform opacity-100"
          leave-to-class="transform opacity-0"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <footer class="bg-gray-900 text-gray-400 py-20 mt-auto border-t border-gray-800">
      <div class="layout-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div class="space-y-6">
          <div class="flex items-center gap-2">
            <div class="i-mdi-leaf text-brand-500 text-2xl"></div>
            <span class="font-display font-bold text-xl text-white">VITA<span class="text-brand-500">CORE</span></span>
          </div>
          <p class="text-sm leading-relaxed text-gray-500">
            Doğadan ilham alan, bilimle güçlenen formüller. Sağlıklı yaşam yolculuğunuzda güvenilir partneriniz.
          </p>
          <div class="flex gap-4">
             <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all transform hover:-translate-y-1"><div class="i-mdi-instagram text-xl"></div></a>
             <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all transform hover:-translate-y-1"><div class="i-mdi-facebook text-xl"></div></a>
             <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all transform hover:-translate-y-1"><div class="i-mdi-twitter text-xl"></div></a>
          </div>
        </div>

        <div>
          <h4 class="text-white font-display font-bold mb-6 text-lg">Hızlı Erişim</h4>
          <ul class="space-y-3 text-sm">
            <li><router-link to="/products" class="hover:text-brand-500 transition-colors flex items-center gap-2"><div class="i-mdi-chevron-right text-xs"></div>Tüm Ürünler</router-link></li>
            <li><router-link to="/about" class="hover:text-brand-500 transition-colors flex items-center gap-2"><div class="i-mdi-chevron-right text-xs"></div>Hakkımızda</router-link></li>
            <li><router-link to="/blog" class="hover:text-brand-500 transition-colors flex items-center gap-2"><div class="i-mdi-chevron-right text-xs"></div>Blog</router-link></li>
            <li><router-link to="/careers" class="hover:text-brand-500 transition-colors flex items-center gap-2"><div class="i-mdi-chevron-right text-xs"></div>Kariyer</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-display font-bold mb-6 text-lg">Müşteri İlişkileri</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-brand-500 transition-colors">Sıkça Sorulan Sorular</a></li>
            <li><a href="#" class="hover:text-brand-500 transition-colors">Kargo ve İade Politikası</a></li>
            <li><a href="#" class="hover:text-brand-500 transition-colors">Gizlilik ve Güvenlik</a></li>
            <li><a href="#" class="hover:text-brand-500 transition-colors">Mesafeli Satış Sözleşmesi</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-display font-bold mb-6 text-lg">Bize Ulaşın</h4>
          <ul class="space-y-5 text-sm">
            <li class="flex items-start gap-3 group cursor-pointer">
              <div class="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <div class="i-mdi-map-marker"></div>
              </div>
              <span class="mt-1 group-hover:text-gray-300 transition-colors">Maslak, Büyükdere Cd. No:123<br>Sarıyer/İstanbul</span>
            </li>
            <li class="flex items-center gap-3 group cursor-pointer">
              <div class="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <div class="i-mdi-phone"></div>
              </div>
              <span class="mt-1 group-hover:text-gray-300 transition-colors">+90 (212) 555 00 00</span>
            </li>
            <li class="flex items-center gap-3 group cursor-pointer">
              <div class="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <div class="i-mdi-email"></div>
              </div>
              <span class="mt-1 group-hover:text-gray-300 transition-colors">info@vitacore.com</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div class="layout-container mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2024 VitaCore Sağlık Ürünleri A.Ş. Tüm hakları saklıdır.</p>
        <div class="flex gap-4 mt-4 md:mt-0 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <div class="flex items-center gap-1"><div class="i-mdi-credit-card text-2xl"></div></div>
           <div class="flex items-center gap-1"><div class="i-mdi-bitcoin text-2xl"></div></div>
           <div class="flex items-center gap-1"><div class="i-mdi-bank text-2xl"></div></div>
        </div>
      </div>
    </footer>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
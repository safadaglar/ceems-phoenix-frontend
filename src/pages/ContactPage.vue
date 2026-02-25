<template>
  <q-page class="bg-gray-50 py-20">
    <div class="layout-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <!-- İletişim Bilgileri -->
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-6">İletişim</h1>
          <p class="text-gray-600 text-lg mb-12">Her türlü soru ve görüşünüz için Antalya ofisimize bekleriz veya telefonla ulaşabilirsiniz.</p>

          <div class="space-y-8">
            <div class="flex gap-6">
              <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600">
                <div class="i-mdi-map-marker text-2xl"></div>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">Adres</h4>
                <p class="text-gray-500 text-sm">Konuksever Mah. Gazi Bulvarı No:220 Muratpaşa/Antalya</p>
              </div>
            </div>

            <div class="flex gap-6">
              <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600">
                <div class="i-mdi-phone text-2xl"></div>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">Telefon</h4>
                <p class="text-gray-500 text-sm">0542 439 52 79</p>
              </div>
            </div>

            <div class="flex gap-6">
              <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600">
                <div class="i-mdi-email text-2xl"></div>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">E-Posta</h4>
                <p class="text-gray-500 text-sm">info@ceemsphoenix.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- İletişim Formu -->
        <div class="bg-white rounded-3xl p-10 shadow-xl">
          <div class="space-y-6">
            <q-input outlined v-model="form.name" label="Adınız Soyadınız" dense />
            <q-input outlined v-model="form.email" label="E-Posta Adresiniz" dense />
            <q-input outlined v-model="form.message" type="textarea" label="Mesajınız" dense />
            <q-btn unelevated color="primary" label="Mesajı Gönder" class="full-width py-3 font-bold" />
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const form = reactive({ name: '', email: '', message: '' });
</script>
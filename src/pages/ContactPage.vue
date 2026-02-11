<template>
  <q-page class="bg-gray-50 py-20">
    <div class="layout-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <!-- Sol: İletişim Bilgileri -->
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-6">Bizimle İletişime Geçin</h1>
          <p class="text-gray-600 text-lg mb-12">
            Sorularınız, teknik destek talepleriniz veya iş ortaklığı teklifleriniz için uzman ekibimiz size yardımcı olmaya hazır.
          </p>

          <div class="space-y-8">
            <div class="flex gap-6 group">
              <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                <div class="i-mdi-map-marker text-2xl"></div>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1 text-lg">Merkez Ofis</h4>
                <p class="text-gray-500">Maslak, Büyükdere Cd. No:123 Sarıyer/İstanbul</p>
              </div>
            </div>

            <div class="flex gap-6 group">
              <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                <div class="i-mdi-phone text-2xl"></div>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1 text-lg">Telefon</h4>
                <p class="text-gray-500">+90 (212) 000 00 00</p>
              </div>
            </div>

            <div class="flex gap-6 group">
              <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                <div class="i-mdi-email text-2xl"></div>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1 text-lg">E-Posta</h4>
                <p class="text-gray-500">info@ceemsphoenix.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sağ: İletişim Formu -->
        <div class="bg-white rounded-3xl p-10 shadow-xl shadow-gray-200/50">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <q-input outlined v-model="form.name" label="Adınız" class="bg-gray-50 rounded-lg" />
              <q-input outlined v-model="form.email" label="E-Posta Adresiniz" class="bg-gray-50 rounded-lg" />
            </div>
            <q-input outlined v-model="form.subject" label="Konu" class="bg-gray-50 rounded-lg" />
            <q-input outlined v-model="form.message" type="textarea" label="Mesajınız" class="bg-gray-50 rounded-lg" rows="5" />
            
            <q-btn unelevated color="primary" label="Gönder" class="w-full py-4 text-lg font-bold rounded-xl" />
          </form>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});
</script>
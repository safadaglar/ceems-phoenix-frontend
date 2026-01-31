<template>
  <q-page class="bg-gray-50 py-16">
    <div class="layout-container">
      
      <div class="text-center mb-16">
        <h1 class="font-display font-bold text-3xl text-gray-900">Bize Ulaşın</h1>
        <p class="text-gray-500 mt-2">Sorularınız veya iş birlikleri için yanınızdayız.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <div class="i-mdi-map-marker text-2xl"></div>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Merkez Ofis</h3>
              <p class="text-sm text-gray-500 leading-relaxed">Levent Mah. Teknoloji Cad. No: 42, 34330 Beşiktaş/İstanbul</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <div class="i-mdi-phone text-2xl"></div>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Telefon</h3>
              <p class="text-sm text-gray-500">0850 123 45 67</p>
              <p class="text-xs text-gray-400">Hafta içi: 09:00 - 18:00</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <div class="i-mdi-email text-2xl"></div>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">E-Posta</h3>
              <p class="text-sm text-gray-500">info@vitacore.com</p>
              <p class="text-sm text-gray-500">satis@vitacore.com</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700">Adınız Soyadınız</label>
                <input type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none transition-all" placeholder="John Doe" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700">E-Posta Adresiniz</label>
                <input type="email" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Konu</label>
              <select class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none transition-all bg-white">
                <option>Sipariş Durumu</option>
                <option>Ürün Bilgisi</option>
                <option>İade ve Değişim</option>
                <option>Diğer</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Mesajınız</label>
              <textarea rows="5" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none transition-all resize-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
            </div>

            <div class="pt-4">
              <button type="button" class="w-full md:w-auto bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2">
                <span>Mesajı Gönder</span>
                <div class="i-mdi-send"></div>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ContactPage'
})
</script>
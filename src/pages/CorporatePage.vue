<template>
  <q-page class="bg-white">
    
    <div class="h-[300px] relative flex items-center justify-center bg-gray-900">
      <q-img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" class="absolute inset-0 w-full h-full opacity-40 object-cover" />
      <h1 class="relative z-10 font-display font-bold text-4xl text-white tracking-wide">Hikayemiz</h1>
    </div>

    <div class="layout-container py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div class="space-y-6">
          <span class="text-brand-600 font-bold tracking-widest text-sm uppercase">2010'dan Beri</span>
          <h2 class="font-display font-bold text-3xl text-gray-900">Doğallık ve Bilimin Kesişimi</h2>
          <p class="text-gray-600 leading-relaxed text-lg">
            VitaCore olarak misyonumuz, modern yaşamın getirdiği beslenme eksikliklerini, doğanın en saf halleriyle kapatmaktır.
          </p>
          <p class="text-gray-500 leading-relaxed">
            Kurulduğumuz günden bu yana, sadece sertifikalı, izlenebilir ve etik kaynaklardan elde edilen ham maddeleri kullanıyoruz. Laboratuvarlarımızda her bir seri üretim titizlikle test edilir ve sadece onaylanan ürünler raflardaki yerini alır.
          </p>
          
          <div class="grid grid-cols-2 gap-6 pt-6">
            <div class="p-4 bg-gray-50 rounded-xl">
              <div class="font-bold text-3xl text-brand-600 mb-1">50+</div>
              <div class="text-sm text-gray-500">Özel Formül</div>
            </div>
             <div class="p-4 bg-gray-50 rounded-xl">
              <div class="font-bold text-3xl text-brand-600 mb-1">1M+</div>
              <div class="text-sm text-gray-500">Mutlu Müşteri</div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-4 bg-brand-100 rounded-2xl transform rotate-3 z-0"></div>
          <q-img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="relative z-10 rounded-2xl shadow-xl w-full h-[500px] object-cover" />
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CorporatePage'
})
</script>
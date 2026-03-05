<template>
  <q-page class="bg-gray-50 py-12">
    <div class="layout-container">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Alışveriş Sepetiniz</h1>

      <div class="row q-col-gutter-lg">
        <!-- Sepet İçeriği -->
        <div class="col-12 col-md-8">
          <q-card flat bordered class="bg-white rounded-2xl q-pa-md">
            <div class="row items-center q-mb-md border-b border-gray-100 q-pb-md">
              <div class="col-2"><q-img src="~assets/sachet.jpg" class="rounded-lg" /></div>
              <div class="col-6 q-pl-md">
                <div class="text-weight-bold text-subtitle1 text-gray-900">MitoViora X-Y</div>
                <div class="text-caption text-grey-6">30 Saşe Paket</div>
              </div>
              <div class="col-2 text-center text-weight-bold">1 Adet</div>
              <div class="col-2 text-right text-weight-bold text-primary">1.250 TL</div>
            </div>

            <!-- İndirim Kodu Alanı -->
            <div class="row items-center q-mt-lg q-gutter-x-sm no-wrap">
              <q-input 
                outlined 
                dense 
                v-model="couponCode" 
                placeholder="İndirim Kodu" 
                class="col-grow bg-white"
              />
              <q-btn unelevated color="black" label="Uygula" class="q-px-lg rounded-lg" />
            </div>
          </q-card>
        </div>

        <!-- Özet Paneli -->
        <div class="col-12 col-md-4">
          <q-card flat bordered class="bg-white rounded-2xl q-pa-lg">
            <div class="text-h6 q-mb-md text-gray-900">Sipariş Özeti</div>
            <div class="row justify-between q-mb-sm text-gray-600">
              <span>Ara Toplam</span><span>1.250 TL</span>
            </div>
            <div class="row justify-between q-mb-sm text-green font-bold">
              <span>İndirim</span><span>0 TL</span>
            </div>
            <q-separator class="q-my-md" />
            <div class="row justify-between text-h6 text-primary q-mb-lg">
              <span>Toplam</span><span>1.250 TL</span>
            </div>
            <q-btn 
              unelevated 
              color="primary" 
              label="Ödemeye Geç" 
              class="full-width py-3 text-weight-bold rounded-xl" 
            />
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const couponCode = ref('');
</script>
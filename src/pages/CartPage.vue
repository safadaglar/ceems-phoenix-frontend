<template>
  <q-page class="bg-gray-50 py-12">
    <div class="layout-container">
      <h1 class="text-3xl font-bold text-gray-900 mb-8 uppercase">ALİŞVERİŞ SEPETİNİZ</h1>

      <div v-if="cartStore.items.length > 0" class="row q-col-gutter-lg">
        <div class="col-12 col-md-8">
          <q-card flat bordered class="bg-white rounded-2xl q-pa-md">
            <div v-for="item in cartStore.items" :key="item.id" class="row items-center q-mb-md border-b border-gray-100 q-pb-md">
              <div class="col-2"><q-img :src="item.image" class="rounded-lg" /></div>
              <div class="col-5 q-pl-md">
                <div class="text-weight-bold text-subtitle1 text-gray-900 uppercase">{{ item.name }}</div>
                <div class="text-caption text-grey-6">30 SAŞE PAKET</div>
              </div>
              <div class="col-3 text-center">
                <div class="flex items-center justify-center gap-2">
                  <q-btn round flat dense icon="remove" size="sm" @click="cartStore.updateQuantity(item.id, -1)" />
                  <span class="text-weight-bold">{{ item.quantity }}</span>
                  <q-btn round flat dense icon="add" size="sm" @click="cartStore.updateQuantity(item.id, 1)" />
                </div>
              </div>
              <div class="col-2 text-right">
                <div class="text-weight-bold text-primary">{{ (item.price * item.quantity).toLocaleString('tr-TR') }} TL</div>
                <q-btn flat round color="red" icon="delete" size="sm" @click="cartStore.removeFromCart(item.id)" />
              </div>
            </div>

            <div class="row items-center q-mt-lg q-gutter-x-sm no-wrap">
              <q-input outlined dense v-model="couponCode" placeholder="İNDİRİM KODU" class="col-grow bg-white" />
              <q-btn unelevated color="black" label="UYGULA" class="q-px-lg rounded-lg" />
            </div>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="bg-white rounded-2xl q-pa-lg">
            <div class="text-h6 q-mb-md text-gray-900">SİPARİŞ ÖZETİ</div>
            <div class="row justify-between q-mb-sm text-gray-600">
              <span>Ara Toplam</span><span>{{ cartStore.totalPrice.toLocaleString('tr-TR') }} TL</span>
            </div>
            <div class="row justify-between q-mb-sm text-green font-bold">
              <span>İndirim</span><span>0 TL</span>
            </div>
            <q-separator class="q-my-md" />
            <div class="row justify-between text-h6 text-primary q-mb-lg">
              <span>Toplam</span><span>{{ cartStore.totalPrice.toLocaleString('tr-TR') }} TL</span>
            </div>
            <q-btn unelevated color="primary" label="ÖDEMEYE GEÇ" class="full-width py-3 text-weight-bold rounded-xl" />
          </q-card>
        </div>
      </div>

      <div v-else class="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
        <q-icon name="shopping_cart" size="64px" color="grey-4" />
        <h2 class="text-h5 text-grey-6 q-mt-md">Sepetiniz şu an boş.</h2>
        <q-btn to="/products" color="primary" label="ÜRÜNLERİ İNCELE" class="q-mt-lg rounded-xl px-xl" unelevated />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from 'src/stores/cart';
const cartStore = useCartStore();
const couponCode = ref('');
</script>
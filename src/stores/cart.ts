import { defineStore } from 'pinia';

// Ürün yapısını tanımlıyoruz
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

// Sepetteki ürün yapısı (ürün + miktar)
export interface CartItem extends Product {
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },
  actions: {
    // any yerine Product tipini kullandık
    addToCart(product: Product) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    updateQuantity(productId: number, delta: number) {
      const item = this.items.find((i) => i.id === productId);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) this.removeFromCart(productId);
      }
    }
  },
});
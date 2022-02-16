import { makeAutoObservable } from "mobx";
import api from "./api";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [];
  loading = true;

  fetchShops = async () => {
    try {
      const res = await api.get("/items");
      this.items = res.data;
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 15 ~ ShopStore ~ fetchShops= ~ error",
        error
      );
    }
  };
}

const cartStore = new CartStore();
cartStore.fetchShops();

export default cartStore;
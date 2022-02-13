import { makeAutoObservable } from "mobx";
import api from "./api";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
  }
  shops = [];

  fetchShops = async () => {
    try {
      const res = await api.get("/shops");
      this.shops = res.data;
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 15 ~ ShopStore ~ fetchShops= ~ error",
        error
      );
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
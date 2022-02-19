import { makeAutoObservable } from "mobx";

class CartStore {
  constructor() {
    makeAutoObservable(this)
  }
  items = [
    {
      product: {
        _id: '6182a8b31bd7fa38942fdf23',
        name: 'Cookie',
        price: 5,
        image:
          'https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg',
      },
      quantity: 5,
    },
    {
      product: {
        _id: '6182a8b31bd7fa46652fdf88',
        name: 'Another cookie',
        price: 15,
        image:
          'https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg',
      },
      quantity: 3,
    },
  ];
}

const cartStore = new CartStore()
export default cartStore










// import { makeAutoObservable } from "mobx";
// import api from "./api";

// class CartStore {
//   constructor() {
//     makeAutoObservable(this);
//   }
//   items = [];
//   loading = true;

//   fetchShops = async () => {
//     try {
//       const res = await api.get("/items");
//       this.items = res.data;
//       this.loading = false;
//     } catch (error) {
//       console.log(
//         "🚀 ~ file: shopStore.js ~ line 15 ~ ShopStore ~ fetchShops= ~ error",
//         error
//       );
//     }
//   };
// }

// const cartStore = new CartStore();
// cartStore.fetchShops();

// export default cartStore;
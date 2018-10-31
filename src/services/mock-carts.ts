export let CARTS = {
  subtotal: 80,
  shipping: 20,
  total: 100,
  sellers: [
    {
      id: 1,
      name: "Ilms",
      subtotal: 60,
      shipping: 10,
      total: 70,
      items: [
        {
          id: 1,
          name: "Marine Hull",
          price: 30,
          quantity: 1,
          thumb: "assets/img/items/MarineHull.jpg",
          options: [
            "Bundle 2",
            "White"
          ]
        },
        {
          id: 1,
          name: "How I Did It",
          price: 30,
          quantity: 1,
          thumb: "assets/img/items/howididit.jpg",
          options: [
            "Bundle 2",
            "White"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Ilms",
      subtotal: 20,
      shipping: 10,
      total: 30,
      items: [
        {
          id: 1,
          name: "Administration Life Policy Lifecycle",
          price: 20,
          quantity: 1,
          thumb: "assets/img/items/AdministrationLifePolicyLifecycle.jpg",
          options: [
            "XL",
            "Pink"
          ]
        }
      ]
    }
  ]
}

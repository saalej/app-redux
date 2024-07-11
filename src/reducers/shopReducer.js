const initialState = {
  Products: [
    {
      id: 1,
      name: "Terranaitor",
    },
    {
      id: 2,
      name: "Dell G15 Ryzen Edition",
    },
    {
      id: 3,
      name: "Motorola Edge 40",
    },
    {
      id: 4,
      name: "Samsung Galaxy Tab S6 Lite",
    },
    {
      id: 5,
      name: "Nintendo 3DS XL",
    },
  ],

  shoppingCar: [1, 2, 3],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;

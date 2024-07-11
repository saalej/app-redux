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
    {
      id: 6,
      name: "iPhone 15 ",
    },
  ],

  shoppingCar: [],
};

// Reducer es una función que se va a encargar de
// administrar el estado de nuestra app.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHOPPING_CAR":
      const { id, name } = action;

      const newShoppingCar = [...state.shoppingCar];
      const productIndex = newShoppingCar.findIndex(
        (product) => product.id === id
      );

      if (productIndex !== -1) {
        newShoppingCar[productIndex].amount += 1;
      } else {
        newShoppingCar.push({ id, name, amount: 1 });
      }

      return { ...state, shoppingCar: newShoppingCar };

    case "ERASE_SHOPPING_CAR":
      return { ...state, shoppingCar: [] };

    default:
      return state;
  }
};

export default reducer;

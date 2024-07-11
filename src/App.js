import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Initial from "./component/Initial";
import Error404 from "./component/Error404";
import Blog from "./component/Blog";
import Store from "./component/Store";
import ShoppingCar from "./component/ShoppingCar";
import { useState } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/shopReducer";

function App() {
  const products = [
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
  ];

  const [shoppingCar, setShoppingCar] = useState([]);

  const addProduct = (id, name) => {
    // Si el carrito no tiene elementos, entonces agregamos directamente
    if (shoppingCar.length === 0) {
      setShoppingCar([
        {
          id,
          name,
          amount: 1,
        },
      ]);
    } else {
      // En caso de tener más productos, hay que revisar que el carrito no
      // tenga ya el producto agregado.
      // Si ya lo tiene, se debe actualizar el valor.
      // Sino se agrega.

      const newShoppingCar = [...shoppingCar];

      // Comprobar si ya existe el ID a agregar en el carrito
      const existProduct =
        newShoppingCar.filter((product) => {
          return product.id === id;
        }).length > 0;

      if (existProduct) {
        // Si existe el producto, se debo localizar el producto y actualizarlo
        newShoppingCar.forEach((product, index) => {
          if (id === product.id) {
            const amount = newShoppingCar[index].amount;
            newShoppingCar[index] = {
              id,
              name,
              amount: amount + 1,
            };
          }
        });

        // De otra forma, entonces agregamos el producto al arreglo
      } else {
        newShoppingCar.push({
          id,
          name,
          amount: 1,
        });
      }

      setShoppingCar(newShoppingCar);
    }
  };

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Container>
        <Menu>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
        </Menu>
        <main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Initial />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/tienda"
              element={<Store products={products} addProduct={addProduct} />}
            />
          </Routes>
        </main>
        <aside>
          <ShoppingCar
            shoppingCar={shoppingCar}
            setShoppingCar={setShoppingCar}
          />
        </aside>
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;

export default App;

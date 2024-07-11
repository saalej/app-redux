import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ShoppingCar = ({ shoppingCar, eraseShoppingCar }) => {
  console.log(shoppingCar);

  return (
    <div>
      <TitleContainer>
        Carrito de compras
        <Button type="reset" onClick={() => eraseShoppingCar()}>
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </TitleContainer>

      {shoppingCar && shoppingCar.length > 0 ? (
        shoppingCar.map((product, index) => {
          return (
            <Product key={index}>
              <NameProduct>{product.name}</NameProduct>
              Cantidad: {product.amount}
            </Product>
          );
        })
      ) : (
        <p>Carrito vacío</p>
      )}
    </div>
  );
};

const TitleContainer = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  font-size: 16px;
  color: #fff;
  border: none;
  cursor: pointer;
  background: #004c92;
  padding: 5px 10px;
  border-radius: 3px;
`;

const Product = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`;

const NameProduct = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: black;
`;

const mapStateToProps = (state) => {
  return {
    shoppingCar: state.shoppingCar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    eraseShoppingCar: () => {
      dispatch({
        type: "ERASE_SHOPPING_CAR",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCar);

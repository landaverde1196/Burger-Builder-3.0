import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler";

import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import ModalComponent from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from "../../components/UI/Spinner";
import {
  addIngredient,
  removeIngredient,
  initIngredients,
  purchaseInit,
  setAuthRedirectPath,
} from "../../store/actions";

export const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const ings = useSelector((state) => state.burgerBuilder.ingredients);
  const price = useSelector((state) => state.burgerBuilder.totalPrice);
  const error = useSelector((state) => state.burgerBuilder.error);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const onIngredientAdded = (ingName) => dispatch(addIngredient(ingName));
  const onIngredientRemoved = (ingName) => dispatch(removeIngredient(ingName));
  const onInitIngredients = useCallback(() => dispatch(initIngredients()), [
    dispatch,
  ]);
  const onInitPurchase = () => dispatch(purchaseInit());
  const onSetAuthRedirectPath = (path) => dispatch(setAuthRedirectPath(path));

  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...ings,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = null;
  let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner />;

  if (ings) {
    burger = (
      <>
        <Burger ingredients={ings} />
        <BuildControls
          ingredientAdded={onIngredientAdded}
          ingredientRemoved={onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(ings)}
          ordered={purchaseHandler}
          isAuth={isAuthenticated}
          price={price}
        />
      </>
    );
    orderSummary = <OrderSummary ingredients={ings} price={price} />;
  }

  return (
    <>
      <ModalComponent
        show={purchasing}
        modalClosed={purchaseCancelHandler}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      >
        {orderSummary}
      </ModalComponent>
      {burger}
    </>
  );
};

export default withErrorHandler(BurgerBuilder, axios);

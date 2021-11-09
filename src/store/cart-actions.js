import { uiActions } from "./ui";

export const sendOrder = (userData, items, didSubmit) => {
  return async (dispatch) => {
    dispatch(uiActions.submitOrder());
    dispatch(uiActions.checkOut());

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-33fc9-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderedItems: items,
          }),
        }
      );
      if (!response) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(uiActions.submitOrder());
      dispatch(uiActions.orderSubmitted());
    } catch (error) {
      dispatch(uiActions.showError(error));
    }
  };
};

import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const isShown = useSelector((state) => state.cart.isShown);

  return (
    <Fragment>
      {isShown && <Cart />}

      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

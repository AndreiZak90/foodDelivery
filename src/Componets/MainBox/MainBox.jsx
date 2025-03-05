import "./_mainBox.scss";

import Bascet from "./Bascet/Bascet";
import Categories from "./Categories/Categories";
import GoodsField from "./GoodsField/GoodsField";

export default function MainBox() {
  return (
    <>
      <main className="main">
        <div className="container">
          <Categories />
          <div className="order_field">
            <Bascet />
            <GoodsField />
          </div>
        </div>
      </main>
    </>
  );
}

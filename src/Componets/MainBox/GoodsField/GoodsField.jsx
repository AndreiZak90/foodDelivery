import ProductCardMini from "../../Card/CardProduct/ProductCardMini";
import "./_goodsField.scss";

import { useSelector } from "react-redux";

export default function GoodsField() {
  const { products, nameProduct } = useSelector((state) => state.product);

  if (products.length > 0) {
    return (
      <>
        <div className="goodsField">
          <h2 className="goodsField_main_title">{nameProduct}</h2>
          <div className="field_box">
            {products.map((item, idx) => (
              <ProductCardMini key={idx} state={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
  if (products.length === 0) {
    return (
      <>
        <div className="goodsField">
          <h2 className="goodsField_main_title">{nameProduct}</h2>
          <div className="field_box">
            <p className="field_box_net">Тут пока, ничего не добавили :(</p>
          </div>
        </div>
      </>
    );
  }
}

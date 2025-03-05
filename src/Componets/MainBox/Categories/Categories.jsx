import "./_categories.scss";

import { useState, useEffect } from "react";

import burger from "../../../images/icons/cheeseburger.png";
import wok from "../../../images/icons/Вок.png";
import snacks from "../../../images/icons/Закуски.png";
import combo from "../../../images/icons/Комбо.png";
import hot_dogs from "../../../images/icons/HotDog.png";
import shawarma from "../../../images/icons/Шаурма.png";
import desserts from "../../../images/icons/Десерты.png";
import pizza from "../../../images/icons/Пицца.png";
import sauces from "../../../images/icons/Соусы.png";

import { fetchProduct } from "../../../Redux/slices/productSlice";

import { useDispatch } from "react-redux";
import { addName } from "../../../Redux/slices/productSlice";

export default function Categories() {
  const [nameProd, setNameProd] = useState("Бургеры");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(nameProd));
  }, [nameProd]);

  const onChanche = (e, name) => {
    const item = e.parentElement;
    setNameProd(name);
    dispatch(addName(nameProd));
    dispatch(fetchProduct(nameProd));

    if (item.className === "categories_box") return;
    const buttons = document.querySelectorAll(".categories_list_item");
    const buck = document.querySelector(".categories_box");
    buck.classList.remove("list_item_active");

    buttons.forEach((btn) => {
      btn.classList.remove("list_item_active");
    });
    item.classList.add("list_item_active");
  };
  return (
    <div className="categories">
      <div className="container">
        <div className="categories_box">
          <button
            onClick={(e) => onChanche(e.target, "Бургеры")}
            className="categories_list_item list_item_active"
          >
            <img src={burger} className="categories_list_item_logo " />
            <h3 className="categories_list_item_title">Бургеры</h3>
          </button>
          <button
            onClick={(e) => onChanche(e.target, "Закуски")}
            className="categories_list_item"
          >
            <img src={snacks} className="categories_list_item_logo" />
            <h3 className="categories_list_item_title">Закуски</h3>
          </button>
          <button
            onClick={(e) => onChanche(e.target, "Хот-доги")}
            className="categories_list_item"
          >
            <img src={hot_dogs} className="categories_list_item_logo" />
            <h3 className="categories_list_item_title">Хот-доги</h3>
          </button>
          <button
            onClick={(e) => onChanche(e.target, "Комбо")}
            className="categories_list_item"
          >
            <img src={combo} className="categories_list_item_logo" />
            <h3 className="categories_list_item_title">Комбо</h3>
          </button>
          <button
            onClick={(e) => onChanche(e.target, "Шаурма")}
            className="categories_list_item"
          >
            <img src={shawarma} className="categories_list_item_logo" />
            <h3 className="categories_list_item_title">Шаурма</h3>
          </button>
          <button
            onClick={(e) => onChanche(e.target, "Пицца")}
            className="categories_list_item"
          >
            <img src={pizza} className="categories_list_item_logo" />
            <h3 className="categories_list_item_title">Пицца</h3>
          </button>
          <button
            onClick={(e) => onChanche(e.target, "Вок")}
            className="categories_list_item"
          >
            <img src={wok} className="categories_list_item_logo" />
            <h3 className="categories_list_item_title">Вок</h3>
          </button>
          <button
            onClick={(e) => onChanche(e.target, "Десерты")}
            className="categories_list_item"
          >
            <img src={desserts} className="categories_list_item_logo" />
            <h3 className="categories_list_item_title">Десерты</h3>
          </button>
          <button
            onClick={(e) => onChanche(e.target, "Соусы")}
            className="categories_list_item"
          >
            <img src={sauces} className="categories_list_item_logo" />
            <h3 className="categories_list_item_title">Соусы</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

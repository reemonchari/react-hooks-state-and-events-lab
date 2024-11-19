import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)
  const itemClass = isInCart ? "in-cart" : ""
  const add = isInCart ? "remove" : "add"

  const handleCart = () => {
    setIsInCart (prevState => !prevState)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={add} onClick={handleCart}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

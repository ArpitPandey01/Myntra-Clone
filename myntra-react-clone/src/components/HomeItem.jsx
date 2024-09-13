import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/BagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

function HomeItem({ item }) {
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const dispatch = useDispatch();
  const handleOnAdd = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleOnRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag fixButton"
          onClick={handleOnRemove}
        >
          <span>
            <MdDeleteOutline />
          </span>
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag fixButton"
          onClick={handleOnAdd}
        >
          <span>
            <IoMdAddCircle />
          </span>
          Add To Bag
        </button>
      )}
    </div>
  );
}

export default HomeItem;

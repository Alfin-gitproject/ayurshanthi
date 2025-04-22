import React, { useState } from "react";

const QuantitySelector = ({ product, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1); // Initial value set to 1

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  const increaseQty = () => {
    if (quantity < product.stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleInputChange = (e) => {
    let newValue = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-numeric characters
    newValue = parseInt(newValue, 10);

    if (isNaN(newValue) || newValue < 1) {
      newValue = 1; // Set minimum value to 1
    } else if (newValue > product?.stock) {
      newValue = product?.stock; // Ensure it doesn't exceed stock
    }

    setQuantity(newValue);
    onQuantityChange(newValue);
  };

  return (
    <div className="flex justify-start gap-3">
      <span
        className="btn border-gray-200 bg-white text-xl text-gray-800 hover:bg-gray-100 hover:border-gray-300"
        onClick={decreaseQty}
      >
        -
      </span>
      <input
        type="text"
        className="form-control bg-transparent border-2 text-center rounded w-[3rem]"
        value={quantity}
        onChange={handleInputChange}
      />
      <span
        className="btn border-gray-200 bg-white text-gray-800 hover:bg-gray-100 hover:border-gray-300 text-xl"
        onClick={increaseQty}
      >
        +
      </span>
    </div>
  );
};

export default QuantitySelector;
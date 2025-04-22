export const getPriceQueryParams = (searchParams, key, value) => {
  const hasValueInParams = searchParams.has(key);

  if (value && hasValueInParams) {
    searchParams.set(key, value);
  } else if (value) {
    searchParams.append(key, value);
  } else if (hasValueInParams) {
    searchParams.delete(key);
  }

  return searchParams;
};

export const caluclateOrderCost = (cartItems) => {
  const itemsPriceWithouttaxReduced = cartItems?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const itemsPrice =
    itemsPriceWithouttaxReduced - itemsPriceWithouttaxReduced * 0.18;
  const shippingPrice = itemsPrice > 200 ? 0 : 40;
  const taxPrice = Number((0.18 * itemsPriceWithouttaxReduced).toFixed(2));
  const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);

  return {
    itemsPrice: Number(itemsPrice).toFixed(2),
    shippingPrice,
    taxPrice,
    totalPrice,
  };
};

export const calculateOrderCostWithOffer = (cartItems, couponValue) => {
  let itemsPriceWithoutTaxReduced = 0;
  let totalQuantity = 0;

  cartItems.forEach((item) => {
    const fullPrice = item.price;
    const quantity = item.quantity;
    const itemId = item.product;

    totalQuantity += quantity;

    if (itemId === "6632450450b3e83d0b476637") {
      const firstItemPrice = fullPrice;
      const secondItemPrice = fullPrice * 0.90;
      const thirdItemPrice = fullPrice * 0.70;

      let totalItemPrice;
      if (quantity === 1) {
        totalItemPrice = firstItemPrice;
      } else if (quantity === 2) {
        totalItemPrice = firstItemPrice + secondItemPrice;
      } else if (quantity === 3) {
        totalItemPrice = firstItemPrice + secondItemPrice + thirdItemPrice;
      } else {
        const additionalItemsPrice = (quantity - 3) * fullPrice * 0.70;
        totalItemPrice = firstItemPrice + secondItemPrice + thirdItemPrice + additionalItemsPrice;
      }

      itemsPriceWithoutTaxReduced += totalItemPrice;
    } else {
      if (quantity > 1) {
        const discountedItemPrice = fullPrice * (1 - item?.offer / 100);
        const totalItemPrice =
          fullPrice + (quantity - 1) * discountedItemPrice;
        itemsPriceWithoutTaxReduced += totalItemPrice;
      } else {
        itemsPriceWithoutTaxReduced += fullPrice;
      }
    }
  });

  const itemsPrice = itemsPriceWithoutTaxReduced - itemsPriceWithoutTaxReduced * 0.18;
  const shippingPrice = itemsPrice > 200 ? 0 : 40;
  const taxPrice = Number((0.18 * itemsPriceWithoutTaxReduced).toFixed(2));
  let totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);
  
  if (couponValue) {
    totalPrice = (Number(totalPrice) - couponValue).toFixed(2);
  }

  return {
    itemsPrice: Number(itemsPrice).toFixed(2),
    shippingPrice,
    taxPrice,
    totalPrice,
  };
};


export const calculateAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

export const checkDiscount = (productId) => {
  if (
    productId === "6632450450b3e83d0b476637" ||
    productId === "663245e150b3e83d0b476640"
  ) {
    return 0.3;
  } else if (productId === "6642247f2caa481cc3839db8") {
    return 0.2;
  }
};

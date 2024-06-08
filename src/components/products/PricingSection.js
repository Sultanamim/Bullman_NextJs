import React, { useEffect, useState } from "react";
import WeightProgress from "./WeightProgress";
import { useCart } from "@/context/CartContext";

export default function PricingSection({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [typeQuantities, setTypeQuantities] = useState({});
  const [totalWeight, setTotalWeight] = useState(0);
  const { addToCart } = useCart();

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(",", "."));
  };

  const formatPrice = (priceNumber) => {
    return priceNumber.toFixed(2).replace(".", ",");
  };

  const basePrice = parsePrice(product.price);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const totalPrice = formatPrice(basePrice * quantity);

  useEffect(() => {
    if (product.types) {
      // Initialize type quantities to 0 for each type
      const initialTypeQuantities = product.types.reduce((acc, type) => {
        acc[type.type] = 0;
        return acc;
      }, {});
      setTypeQuantities(initialTypeQuantities);
    }
  }, [product.types]);

  const increaseTypeQuantity = (type) => {
    setTypeQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [type]: prevQuantities[type] + 1,
      };
      calculateTotalWeight(newQuantities);
      return newQuantities;
    });
  };

  const decreaseTypeQuantity = (type) => {
    setTypeQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [type]: prevQuantities[type] > 0 ? prevQuantities[type] - 1 : 0,
      };
      calculateTotalWeight(newQuantities);
      return newQuantities;
    });
  };

  const calculateTotalWeight = (quantities) => {
    const total = product.types.reduce((acc, type) => {
      const typeWeight = parseFloat(type.type.split(" ")[2]); // Assuming weight is in the type string
      return acc + quantities[type.type] * typeWeight;
    }, 0);
    setTotalWeight(total);
  };

  const totalTypesPrice = product.types
    ? product.types.reduce((acc, type) => {
        const typeQuantity = typeQuantities[type.type];
        const typePrice = parsePrice(type.price);
        return acc + typeQuantity * typePrice;
      }, 0)
    : "0,00";

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      name: product.name ? product.name : product.title,
      image: product.primaryImg1 ? product.primaryImg1 : product.image,
      price: product.price,
      quantity: product.types ? typeQuantities : quantity,
      types: product.types
        ? product.types.map((type) => ({
            type: type.type,
            quantity: typeQuantities[type.type],
            price: type.price,
          }))
        : null,
      totalPrice: product.types ? totalTypesPrice : totalPrice,
      product: product,
    };
    addToCart(productToAdd);
  };

  return (
    <div>
      {/* --- buttons ---- */}
      {product.types ? (
        <div className="flex flex-col border-b border-[#a7a5a5] mb-2 pb-2">
          {product.types?.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center"
            >
              <p className="text-[14px]">{item.type}</p>
              <div className="flex flex-row items-center my-2">
                <p className="text-[16px] font-bold mr-6">{item.price}€</p>
                {/* minus */}
                <button
                  onClick={() => decreaseTypeQuantity(item.type)}
                  className="px-1 py-1 border border-[#a2a2a2] flex items-center justify-center w-[44px] h-[36px] font-bold text-[20px] mx-1"
                >
                  -
                </button>
                {/* quantity */}
                <p className="px-1 py-1 border border-[#a2a2a2] flex items-center justify-center w-[44px] h-[36px] text-[18px] mx-1 ">
                  {typeQuantities[item.type]}
                </p>
                {/* plus */}
                <button
                  onClick={() => increaseTypeQuantity(item.type)}
                  className="px-1 py-1 border border-[#a2a2a2] flex items-center justify-center w-[44px] h-[36px] font-bold text-[20px] mx-1"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row items-center my-3">
          {/* minus */}
          <button
            onClick={decreaseQuantity}
            className="px-1 py-2 border border-[#a2a2a2] flex items-center justify-center w-[44px] h-[44px] font-bold text-[20px] mx-1"
          >
            -
          </button>
          {/* quantity */}
          <p className="px-1 py-2 border border-[#a2a2a2] flex items-center justify-center w-[44px] h-[44px] text-[18px] mx-1 ">
            {quantity}
          </p>
          {/* plus */}
          <button
            onClick={increaseQuantity}
            className="px-1 py-2 border border-[#a2a2a2] flex items-center justify-center w-[44px] h-[44px] font-bold text-[20px] mx-1"
          >
            +
          </button>
          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            className="hover:bg-[#313537] text-white border-2 border-black bg-[#315593] text-[12px] mx-1 py-[1em] px-[2em] uppercase "
          >
            Ajouter au panier
          </button>
        </div>
      )}
      {/* Progress Bar */}
      {product.types && <WeightProgress currentWeight={totalWeight} />}

      {/* ---Total price--- */}
      <p className="text-[16px] font-[800] leading-[23px] mb-2">Total:</p>
      <div className="flex flex-row items-center">
        <p className="text-[#0f0f0f] text-[20px] font-[800]">
          € {product.types ? totalTypesPrice : totalPrice}
          <span className="text-[#7a7a7a] text-[15px] font-normal ml-1 ">
            ttc.
          </span>
        </p>
        <p className="text-[#0f0f0f] text-[17px] font-[500] ml-3">
          €{product.types ? totalTypesPrice : totalPrice}
          <span className="text-[#7a7a7a] text-[15px] font-normal ml-1 ">
            ht.
          </span>
        </p>
      </div>
      {/* long add to cart button  */}
      {product.types && (
        <button
          onClick={handleAddToCart}
          className="bg-gradient-to-b from-[#255CA6] from-10% to-[#052753] to-90% h-[46px] w-full py-4 px-5 text-white border border-[#a2a2a2] mt-[11px] text-[16px] font-medium uppercase flex justify-center items-center"
        >
          Ajouter au panier
        </button>
      )}
    </div>
  );
}

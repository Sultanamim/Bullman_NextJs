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
    if (product.priceTypes.length > 0) {
      // Initialize type quantities to 0 for each type
      const initialTypeQuantities = product.priceTypes.reduce((acc, type) => {
        acc[type.priceType] = 0;
        return acc;
      }, {});
      setTypeQuantities(initialTypeQuantities);
    }
  }, [product.priceTypes]);
  console.log(typeQuantities);

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
    const total = product.priceTypes.reduce((acc, type) => {
      const typeWeight = parseFloat(type.weight); // Using the correct weight key
      return acc + quantities[type.priceType] * typeWeight;
    }, 0);
    setTotalWeight(total);
  };

  const totalTypesPrice =
    product.priceTypes.length > 0
      ? product.priceTypes.reduce((acc, type) => {
          const typeQuantity = typeQuantities[type.priceType];
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
      quantity: product.priceTypes ? typeQuantities : quantity,
      types:
        product.priceTypes.length > 0
          ? product.priceTypes.map((type) => ({
              type: type.priceType,
              quantity: typeQuantities[type.priceType],
              price: type.price,
            }))
          : null,
      totalPrice: product.priceTypes ? totalTypesPrice : totalPrice,
      product: product,
    };
    addToCart(productToAdd);
  };
  return (
    <div>
      {/* --- buttons ---- */}
      {product.priceTypes.length > 0 ? (
        <div className="flex flex-col border-b border-[#a7a5a5] mb-2 pb-2">
          {product.priceTypes?.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center"
            >
              <p className="text-[14px]">{item.priceType}</p>
              <div className="flex flex-row items-center my-2">
                <p className="text-[16px] font-bold mr-6">{item.price}€</p>
                {/* minus */}
                <button
                  onClick={() => decreaseTypeQuantity(item.priceType)}
                  className="px-1 py-1 border border-[#a2a2a2] flex items-center justify-center w-[44px] h-[36px] font-bold text-[20px] mx-1"
                >
                  -
                </button>
                {/* quantity */}
                <p className="px-1 py-1 border border-[#a2a2a2] flex items-center justify-center w-[44px] h-[36px] text-[18px] mx-1 ">
                  {typeQuantities[item.priceType]}
                </p>
                {/* plus */}
                <button
                  onClick={() => increaseTypeQuantity(item.priceType)}
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
      {product.priceTypes.length > 0 && (
        <WeightProgress currentWeight={totalWeight} />
      )}

      {/* ---Total price--- */}
      <p className="text-[16px] font-[800] leading-[23px] mb-2">Total:</p>
      <div className="flex flex-row items-center">
        <p className="text-[#0f0f0f] text-[20px] font-[800]">
          € {product.priceTypes.length > 0 ? totalTypesPrice : totalPrice}
          <span className="text-[#7a7a7a] text-[15px] font-normal ml-1 ">
            ttc.
          </span>
        </p>
        <p className="text-[#0f0f0f] text-[17px] font-[500] ml-3">
          €{product.priceTypes.length > 0 ? totalTypesPrice : totalPrice}
          <span className="text-[#7a7a7a] text-[15px] font-normal ml-1 ">
            ht.
          </span>
        </p>
      </div>
      {/* long add to cart button  */}
      {product.priceTypes.length > 0 && (
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

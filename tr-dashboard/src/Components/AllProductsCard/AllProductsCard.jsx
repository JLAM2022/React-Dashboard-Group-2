import React, { useState, useEffect } from "react";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import OneCard from "../../utils/OneCard/OneCard";
import Request from "../../utils/Request";


export const AllProductsCard = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`${Request}/api/product`)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products.products);
      });
  }, []);

  return (
    <>
      {products ? (
        <OneCard
          title={"Productos"}
          quantity={products.length}
          icon={faWineBottle}
        />
      ) : (
        "Cargando"
      )}
    </>
  );
};

export default AllProductsCard;

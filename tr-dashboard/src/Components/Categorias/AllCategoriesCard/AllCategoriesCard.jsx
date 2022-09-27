import React, { useState, useEffect } from "react";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import OneCard from "../../../utils/OneCard/OneCard";
import Request from "../../../utils/Request";


export const AllCategoriesCard = () => {

  const [categories, setCategories] = useState([]);

  const getCategories = async()=>{
    try {
        const result = await fetch(`${Request}/api/product-category`)
        const categoriesJson = await result.json();
        setCategories(categoriesJson);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return <OneCard title={'Categorías'} quantity={categories? categories.categorías : ''} icon={faBoxesStacked}/>
      
};

export default AllCategoriesCard ;




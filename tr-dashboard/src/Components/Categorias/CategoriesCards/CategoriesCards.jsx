import React, { useEffect, useState } from 'react'; 
import "./CategoriesCards.css";
import Request from '../../../utils/Request';

const CategoriesCards=()=>{
    const [categories, setCategories] = useState([]);

    const getCategories = async()=>{
        try {
            const result = await fetch(`${Request}/api/product`)
            const categoriesJson = await result.json();
            setCategories(categoriesJson.countByCategory);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCategories();
    }, []);
    
    return <div className="categories-cards">
            {/* tarjetas categorias con total productos */}
            {categories.map((category, i) => (
                    <div className="card" key={i}>
                        <div className='line'></div>
                        <div className='categoy-content'>
                            <p className='category-name'>{category.productCategoryName}</p>
                            <p className='category-amount'><span>{category.quantity}</span></p>
                        </div>
                    </div>  
                ))
                }
    </div>
        
}

export default CategoriesCards; 

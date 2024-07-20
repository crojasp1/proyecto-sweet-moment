import React, { useContext } from 'react';
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/item';
import all_products from "../Components/Assests/all_products";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={ props.banner } alt="Banner image" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Ordenar por <span><FontAwesomeIcon icon={faArrowDown}/></span>
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_products.map((item, i) => {
          if(props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory

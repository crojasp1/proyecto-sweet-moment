import React from 'react';
import "./Addproduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Addproduct = () => {

  const [image, setImage] =useState(false);
  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"lenceria",
    new_price:"",
    old_price:""
  })

  const imageHandler = (event) =>{
    setImage(event.target.files[0]);
  
  }
  const changeHandler = (event) => {
    setProductDetails({...productDetails, [event.target.name]:event.target.value});
    console.log(event);
  }

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data) => {responseData=data});
    
    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-type':'application/json'
        },
        body:JSON.stringify(product),
      }).then((response) => response.json()).then((data)=>{
        data.success?alert('Product Added'):alert('Added Failed');
      })
    }
  }

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Nombre del producto</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Escriba aqui' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Precio</p>
          <input value={productDetails.old_product} onChange={changeHandler} type="text" name="old_price" placeholder='Escriba aqui' />
        </div>
        <div className="addproduct-itemfield">
          <p>Establezca nuevo precio</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Escriba aqui' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Categoria del producto</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
          <option value="lenceria">Lenceria</option>
          <option value="juguetes">Juguetes</option>
          <option value="lubricantes">Lubricantes</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          {image? <img src={URL.createObjectURL(image)} className='addproduct-thumnail-img' alt="Uploaded image" /> :<FontAwesomeIcon icon={faCloudArrowUp} className='addproduct-thumnail-img'/>}
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />

      </div>
      <button onClick={()=>{Add_Product()}} className='addproduct-btn'>Agregar producto</button>
    </div>
  )
}

export default Addproduct

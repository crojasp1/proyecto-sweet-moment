import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


//vamos a hacer referencia al END-Point que creamos en App.js del backend
const URI = 'http://localhost:3001/productos/';

//creamos la funcion para los componentes que vamos a implementar, tener en cuenta que:
//TODO EL CODIGO QUEDA DENTRO DE LA FUNCION

const CompShowProducts = ()=>{
  //usamos los hooks
  const [products, setProducts] = useState([]);
  useEffect( ()=>{
    getProducts();
  },[]); // [] es para traer todo lo que se encuentre en productos

  //creamos la funcion getProducts para que vaya al backend
  const getProducts = async()=>{
    // El res es la respuesta que espera el front del back
    const res =await axios.get(URI);
    // vamos a mostrar los datos que trae dicha respuesta
    setProducts(res.data);
  };

  // Aqui haremos tambien el DELETE

  const deleteProduct = async(id)=>{
    axios.delete(`${URI}${id}`);
    // una vez borre el registro, que me vuelva a mostrar lo que quedo:
    getProducts();
  }

  //retornemos la respuesta al HTML utilizando JSX
  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <table className='table'>
            <thead>
              <tr>
                <th scoope='col'>Producto</th>
                <th scoope='col'>Descripcion</th>
                <th scoope='col'>Precio</th>
                <th scoope='col'>Stock</th>
                <th scoope='col'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product)=>(
                <tr key={product.id}>
                  <td>{product.nombre}</td>
                  <td>{product.descripcion}</td>
                  <td>{product.precio}</td>
                  <td>{product.stock}</td>
                  <td>
                    <Link to={`/edit/${product.id}`} className='btn btn-info'>Editar</Link>
                    <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger'>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </div>

  );

};

export default CompShowProducts;
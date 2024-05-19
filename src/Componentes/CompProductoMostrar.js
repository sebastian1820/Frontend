import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect,  } from "react";


const URL = 'https://sernube-w0ha.onrender.com/api/productos/';


const CompProductosMostrar = () =>{

    const [productos,setProducto] = useState ([]) 
    useEffect(()=>{
                getProductos();
    },[]);

    // funcion mostar clientes
        const getProductos = async ()=>{
        const datos = await axios.get(URL)
        setProducto(datos.data);
        }
    

    // funcion elminar clientes
    const eliminarProducto =  async (id) => {
        await axios.delete(`${URL}${id}`);
        getProductos();
            // eslint-disable-next-line
    }

    return (
        <div className="container">
            <div>

            </div>
            <br></br>
            <div className="row">
                <div className="col">
                    <Link to ='/productos/agregar'> <button type="button" className="btn btn-warning"><i className="fa-solid fa-user-plus"></i>Crear</button> </Link>

                </div >
                <br></br>
                <table className="table table-striped table-hover"  >
                    <thead  >
                        <tr >
                            <th className="h4">Marca </th>
                            <th  className="text-black dark__text-white align-middle" >Modelo </th>
                            <th >Año</th>
                            <th >Color</th>
                            <th >S.O.</th>
                            <th >         </th>
                            
                        </tr>
                        </thead>
                        <tbody  className="table-striped">
                        {productos.map((productos,index) =>(
                            <tr key ={index}>
                                    <td>{productos.marca}</td>
                                    <td>{productos.modelo}</td>
                                    <td>{productos.fecha}</td>
                                    <td>{productos.color}</td>
                                    <td>{productos.sistema}</td>
                                    <td> 
                                    <Link to={`/productos/editar/${productos._id}`} className='btn btn Success mt-2 mb-2'><i className="fa-solid fa-file-pen"></i> <i className="color:74c0fc"></i></Link>
                                    <button onClick={() => eliminarProducto(productos._id)} className='btn btn-danger mt-2 mb-2'> <i className="fa-solid fa-trash-can"></i> </button>
                                    </td>
                                    </tr>
                        ))}

                        </tbody>


                </table>


            </div>

        </div>



    )
}

export default CompProductosMostrar;
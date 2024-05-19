import axios from "axios";
 import { Link } from "react-router-dom";
 import { useEffect, useState, } from "react";


 const URL = "https://sernube-w0ha.onrender.com/api/proveedor/";


 const CompProveedorMostrar =() =>{

const [proveedor,setProveedor] = useState ([])
useEffect ( ()=> {
        getProveedor();
},[])


const getProveedor = async ()=>{
    const datos = await axios.get(URL)
    setProveedor(datos.data);
}

const  eliminarProveedor = async (id) => {
    await axios.delete(`${URL}${id}`);
    getProveedor();
      // eslint-disable-next-line
}

return (
    <div className="container">
        <div>

        </div>
        <div className="row">
            <div className="col">
                <Link to ='/proveedor/agregar'> <button type="button" className="btn btn-warning"><i className="fa-solid fa-user-plus"></i>Crear</button> </Link>

            </div >
            <table className="table table-striped table-hover"  >
                <thead  >
                    <tr >
                        <th scope="col">Nombre </th>
                        <th scope="col">Apellidos </th>
                        <th scope="col">Documento</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">         </th>
                        
                    </tr>
                    </thead>
                    <tbody  className="table-striped">
                    {proveedor.map((proveedor,index) =>(
                        <tr key ={index}>
                                <td>{proveedor.nombre}</td>
                                <td>{proveedor.apellido}</td>
                                <td>{proveedor.documento}</td>
                                <td>{proveedor.correo}</td>
                                <td>{proveedor.telefono}</td>
                                <td>{proveedor.ciudad}</td>
                                <td> 
                                <Link to={`/proveedor/editar/${proveedor._id}`} className='btn btn Success mt-2 mb-2'><i className="fa-solid fa-file-pen"></i> <i className="color:74c0fc"></i></Link>
                                <button onClick={() => eliminarProveedor(proveedor._id)} className='btn btn-danger mt-2 mb-2'> <i className="fa-solid fa-trash-can"></i> </button>
                                </td>
                                </tr>
                    ))}

                    </tbody>


            </table>


        </div>

    </div>



)

 }
 export default CompProveedorMostrar
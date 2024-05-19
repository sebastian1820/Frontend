import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect,  } from "react";


const URL = 'https://sernube-w0ha.onrender.com/api/clientes/';


const CompClienteMostrar = () =>{

    const [clientes,setCliente] = useState ([]) 
    useEffect(()=>{
                getClientes();
    },[]);

    // funcion mostar clientes
        const getClientes = async ()=>{
        const datos = await axios.get(URL)
        setCliente(datos.data);
        }
    

    // funcion elminar clientes
    const eliminarCliente =  async (id) => {
        await axios.delete(`${URL}${id}`);
        getClientes();
            // eslint-disable-next-line
    }

    return (
        <div className="container">
            <div>

            </div>
            <br></br>
            <div className="row">
                <div className="col">
                    <Link to ='/clientes/agregar'> <button type="button" className="btn btn-warning"><i className="fa-solid fa-user-plus"></i>Crear</button> </Link>

                </div >
                <br></br>
                <table className="table table-striped table-hover"  >
                    <thead  >
                        <tr >
                            <th className="text-black dark__text-white align-middle" >Nombre </th>
                            <th  className="text-black dark__text-white align-middle" >Apellidos </th>
                            <th >Documento</th>
                            <th >Correo</th>
                            <th >Telefono</th>
                            <th >Direccion</th>
                            <th >         </th>
                            
                        </tr>
                        </thead>
                        <tbody  className="table-striped">
                        {clientes.map((cliente,index) =>(
                            <tr key ={index}>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.apellido}</td>
                                    <td>{cliente.documento}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.direccion}</td>
                                    <td> 
                                    <Link to={`/clientes/editar/${cliente._id}`} className='btn btn Success mt-2 mb-2'><i className="fa-solid fa-file-pen"></i> <i className="color:74c0fc"></i></Link>
                                    <button onClick={() => eliminarCliente(cliente._id)} className='btn btn-danger mt-2 mb-2'> <i className="fa-solid fa-trash-can"></i> </button>
                                    </td>
                                    </tr>
                        ))}

                        </tbody>


                </table>


            </div>

        </div>



    )
}

export default CompClienteMostrar;
import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

const URL = 'https://sernube-w0ha.onrender.com/api/clientes/';

const CompModClientes = () => {

        const [nombre,SetNombre] = useState ('')
        const [apellido,SetApellido] = useState ('')
        const [documento,SetDocumento] = useState ('')
        const [correo,SetCorreo] = useState ('')
        const [direccion,SetDireccion] = useState ('')
        const [telefono,SetTelefono] = useState ('')
        const navigate = useNavigate ();
        const {id} = useParams ();
    
    
        // funcion modificar
        const modificarCliente = async (e) => {
            e.preventDefault()
            await axios.put(`${URL}${id}`,{ 
                nombre:nombre ,apellido:apellido,documento:documento,
                correo:correo ,direccion:direccion ,telefono:telefono
            })
            navigate ('/clientes')
        }

        useEffect (() => {
            getClientesByID();
            // eslint-disable-next-line
        },[]);

        const getClientesByID = async ()=> {
                const res =  await axios.get(`${URL}${id}`)
                SetNombre(res.data.nombre)
                SetApellido(res.data.apellido)
                SetDocumento(res.data.documento)
                SetCorreo(res.data.correo)
                SetDireccion(res.data.direccion)
                SetTelefono(res.data.telefono)
        }

    
    return (
<div>
<form onSubmit={modificarCliente}>
            <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input value={nombre} onChange= {(e) => SetNombre (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>

            <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input value={apellido} onChange= {(e) => SetApellido (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <div className="mb-3">
            <label className="form-label">Documento</label>
            <input value={documento} onChange= {(e) => SetDocumento (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <div className="mb-3">
            <label className="form-label">Correo</label>
            <input value={correo} onChange= {(e) => SetCorreo (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <div className="mb-3">
            <label className="form-label">Direccion</label>
            <input value={direccion} onChange= {(e) => SetDireccion (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input value={telefono} onChange= {(e) => SetTelefono (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <button type="submit"className="btn btn-primary">Guardar</button>
        </form>
    
</div>

    )
}

export default CompModClientes
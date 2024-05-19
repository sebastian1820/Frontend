import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

const URL = 'https://sernube-w0ha.onrender.com/api/proveedor/';

const CompModProveedor = () => {

        const [nombre,SetNombre] = useState ('')
        const [apellido,SetApellido] = useState ('')
        const [documento,SetDocumento] = useState ('')
        const [correo,SetCorreo] = useState ('')
        const [telefono,SetTelefono] = useState ('')
        const [ciudad,SetCiudad] = useState ('')
        const navigate = useNavigate ();
        const {id} = useParams ();
    
    
        // funcion modificar
        const modificarProveedor = async (e) => {
            e.preventDefault()
            await axios.put(`${URL}${id}`,{ 
                nombre:nombre ,apellido:apellido,documento:documento,
                correo:correo  ,telefono:telefono,ciudad:ciudad
            })
            navigate ('/proveedor')
        }

        useEffect (() => {
            getProveedorByID();
            // eslint-disable-next-line
        },[]);

        const getProveedorByID = async ()=> {
                const res =  await axios.get(`${URL}${id}`)
                SetNombre(res.data.nombre)
                SetApellido(res.data.apellido)
                SetDocumento(res.data.documento)
                SetCorreo(res.data.correo)
                SetTelefono(res.data.telefono)
                SetCiudad(res.data.ciudad)
        }

    
    return (
<div>
<form onSubmit={modificarProveedor}>
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
            <label className="form-label">Telefono</label>
            <input value={telefono} onChange= {(e) => SetTelefono (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <div className="mb-3">
            <label className="form-label">Ciudad</label>
            <input value={ciudad} onChange= {(e) => SetCiudad (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <button type="submit"className="btn btn-primary">Guardar</button>
        </form>
    
</div>

    )
}

export default CompModProveedor
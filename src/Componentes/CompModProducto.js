import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

const URL = 'https://sernube-w0ha.onrender.com/api/productos/';

const CompModProducto = () => {

        const [marca,SetMarca] = useState ('')
        const [modelo,SetModelo] = useState ('')
        const [fecha,SetFecha ] = useState ('')
        const [color,SetColor] = useState ('')
        const [sistema,SetSistema] = useState ('')
        const navigate = useNavigate ();
        const {id} = useParams ();
    
    
        // funcion modificar
        const modificarProducto = async (e) => {
            e.preventDefault()
            await axios.put(`${URL}${id}`,{ 
                marca:marca ,modelo:modelo,fecha:fecha,
                color:color , sistema:sistema
            })
            navigate ('/productos')
        }

        useEffect (() => {
            getProductosByID();
            // eslint-disable-next-line
        },[]);

        const getProductosByID = async ()=> {
                const res =  await axios.get(`${URL}${id}`)
                SetMarca(res.data.marca)
                SetModelo(res.data.modelo)
                SetFecha(res.data.fecha)
                SetColor(res.data.color)
                SetSistema(res.data.sistema)
        }

    
    return (
<div>
<form onSubmit={modificarProducto}>
            <div className="mb-3">
            <label className="form-label">Marca</label>
            <input value={marca} onChange= {(e) => SetMarca (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>

            <div className="mb-3">
            <label className="form-label">Modelo</label>
            <input value={modelo} onChange= {(e) => SetModelo (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <div className="mb-3">
            <label className="form-label">Año</label>
            <input value={fecha} onChange= {(e) => SetFecha (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <div className="mb-3">
            <label className="form-label">Color</label>
            <input value={color} onChange= {(e) => SetColor (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <div className="mb-3">
            <label className="form-label">Sistema</label>
            <input value={sistema} onChange= {(e) => SetSistema (e.target.value)}
            type = 'text' className ='form-control'/>
            </div>
            <button type="submit"className="btn btn-primary">Guardar</button>
        </form>
    
</div>

    )
}

export default CompModProducto
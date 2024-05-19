import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";



const URL = 'https://sernube-w0ha.onrender.com/api/productos/';

const CompAgregarProductos = () =>{
    const [marca,SetMarca] = useState ('')
    const [modelo,SetModelo] = useState ('')
    const [fecha,SetFecha] = useState ('')
    const [color,SetColor] = useState ('')
    const [sistema,SetSistema] = useState ('')
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const navigate = useNavigate ();
    // funcion guardar
    const guardarProducto = async (e) => {
        await axios.post (URL,{ marca:marca ,modelo:modelo,fecha:fecha,
            color:color ,sistema:sistema 
        })
        navigate ('/productos')
    }

    return (
<div>
<h3>Formulario Guardar clientes</h3>
        <form onSubmit={handleSubmit(guardarProducto)}>
        
            <div className="mb-2">
            <label  for="nombre" className="form-label">Marca</label>
            <input 
            {...register("marca",
            {
                required: {
                    value: true,
                    message: "Marca  es  obligatario",
                },
                maxLength: {
                    value: 10,
                    message: "Maximo 10 caracteres",
                },
                minLength: {
                    value: 2,
                    message: "Minimo 2 caracteres",
                },
            }
        )}
            
            value={marca} onChange= {(e) => SetMarca (e.target.value)}
            type = "text" className ="form-control" id="nombre" aria-describedby="nombre"/>
              {errors.marca && <span className="text-danger">{errors.marca.message}</span>}

            </div>

            <div className="mb-3">
            <label className="form-label">Modelo</label>
            <input {...register("modelo",
                                {
                                    required: {
                                        value: true,
                                        message: "Modelo es  obligatario",
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "Maximo 15 caracteres",
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "Minimo 2 caracteres",
                                    },
                                }
                            )}
             value={modelo} onChange= {(e) => SetModelo (e.target.value)}
            type = "text" className ="form-control"/>
              {errors.modelo && <span className="text-danger">{errors.modelo.message}</span>}

            </div>
            <div className="mb-3">
            <label className="form-label">Año</label>
            <input {...register("fecha",
                                {
                                    required: {
                                        value: true,
                                        message: "Año es  obligatario",
                                    },
                                    maxLength: {
                                        value: 4,
                                        message: "Maximo 4 caracteres",
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "Minimo 4 caracteres",
                                    },
                                }
                            )}
            
            value={fecha} onChange= {(e) => SetFecha (e.target.value)}
            type = "text" className ="form-control"/>
              {errors.fecha && <span className="text-danger">{errors.fecha.message}</span>}

            </div>
            <div className="mb-3">
            <label className="form-label">Color</label>
            <input  {...register("color",
                                {
                                    required: {
                                        value: true,
                                        message: "Color es  obligatario",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximo 20 caracteres",
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "Minimo 4 caracteres",
                                    },
                                }
                            )}
            
            value={color} onChange= {(e) => SetColor (e.target.value)}
            type = 'text' className ='form-control'/>
              {errors.color && <span className="text-danger">{errors.color.message}</span>}

            </div>
            <div className="mb-3">
            <label className="form-label">Sistema </label>
            <input  {...register("sistema",
                                {
                                    required: {
                                        value: true,
                                        message: "Sistema es  obligatario",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximo 20 caracteres",
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "Minimo 4 caracteres",
                                    },
                                }
                            )}
            
            value={sistema} onChange= {(e) => SetSistema (e.target.value)}
            type = 'text' className ='form-control'/>
              {errors.sistema && <span className="text-danger">{errors.sistema.message}</span>}

            </div>
        
            <button type="submit"className='btn btn-primary'>Guardar</button>
            
        </form>
    
</div>

    )
}

export default CompAgregarProductos
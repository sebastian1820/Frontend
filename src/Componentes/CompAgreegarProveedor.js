import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";


const URL = 'https://sernube-w0ha.onrender.com/api/proveedor/';

const CompAgregarProveedor = () =>{
    const [nombre,SetNombre] = useState ('')
    const [apellido,SetApellido] = useState ('')
    const [documento,SetDocumento] = useState ('')
    const [correo,SetCorreo] = useState ('')
    const [telefono,SetTelefono] = useState ('')
    const [ciudad,SetCiudad] = useState ('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate ();
    // funcion guardar
    const guardarProveedor = async (e) => {
        
        await axios.post (URL,{ nombre:nombre ,apellido:apellido,documento:documento,
            correo:correo  ,telefono:telefono ,ciudad:ciudad
        })
        navigate ('/proveedor/')
    }

    return (
<div>
<h3>Proveedor</h3>
        <form onSubmit={handleSubmit(guardarProveedor)}>
        
            <div className="mb-2">
            <label  for="nombre" className="form-label">Nombre</label>
            <input {...register("nombre",
                                {
                                    required: {
                                        value: true,
                                        message: "Nombre es  obligatario",
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

             value={nombre} onChange= {(e) => SetNombre (e.target.value)}
            type = "text" className ="form-control " id="nombre" aria-describedby="nombre"/>
            {errors.nombre && <span className="text-danger">{errors.nombre.message}</span>}

            </div>

            <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input {...register("apellido",
                                {
                                    required: {
                                        value: true,
                                        message: "Apellido es  obligatario",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximo 20 caracteres",
                                    },
                                    minLength: {
                                        value: 5,
                                        message: "Minimo 5 caracteres",
                                    },
                                }
                            )}

            value={apellido} onChange= {(e) => SetApellido (e.target.value)}
            type = "text" className ="form-control"/>
            {errors.apellido && <span className="text-danger">{errors.apellido.message}</span>}

            </div>
            <div className="mb-3">
            <label className="form-label">Documento</label>
            <input {...register("documento",
                                {
                                    required: {
                                        value: true,
                                        message: "Documento es  obligatario",
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: "Maximo 12 caracteres",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Minimo 8 caracteres",
                                    },
                                }
                            )}
            
            value={documento} onChange= {(e) => SetDocumento (e.target.value)}
            type = "text" className ="form-control"/>
            {errors.documento && <span className="text-danger">{errors.documento.message}</span>}

            </div>
            <div className="mb-3">
            <label className="form-label">Correo</label>
            <input  {...register('correo',
                                {
                                    required: {
                                        value: true,
                                        message: "Correo obligatario",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Minimo 8 caracteres",
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Digite un correo electonico valido  "
                                    },
                                }
                            )}
            
            value={correo} onChange= {(e) => SetCorreo (e.target.value)}
            type = 'text' className ='form-control'/>
            {errors.correo && <span className="text-danger">{errors.correo.message}</span>}

            </div>
            <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input {...register("telefono",
                                {
                                    required: {
                                        value: true,
                                        message: "Nombre es  obligatario",
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
             
            value={telefono} onChange= {(e) => SetTelefono (e.target.value)}
            type = 'text' className ='form-control'/>
                     {errors.telefono && <span className="text-danger">{errors.telefono.message}</span>}


            </div>
            <div className="mb-3">
            <label className="form-label">Ciudad</label>
            <input {...register("ciudad",
                                {
                                    required: {
                                        value: true,
                                        message: "Ciudad es  obligatario",
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
            
            value={ciudad} onChange= {(e) => SetCiudad (e.target.value)}
            
            type = 'text' className ='form-control'/>
        {errors.ciudad && <span className="text-danger">{errors.ciudad.message}</span>}


            </div>
            <button type="submit"className='btn btn-primary'>Guardar</button>
            
        </form>
    
</div>

    )
}

export default CompAgregarProveedor
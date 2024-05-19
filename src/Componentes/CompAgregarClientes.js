import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";


const URL = 'https://sernube-w0ha.onrender.com/api/clientes/';

const CompAgregarClientes = () => {
    const [nombre, SetNombre] = useState('')
    const [apellido, SetApellido] = useState('')
    const [documento, SetDocumento] = useState('')
    const [correo, SetCorreo] = useState('')
    const [direccion, SetDireccion] = useState('')
    const [telefono, SetTelefono] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const navigate = useNavigate();
    // funcion guardar
    const guardarCliente = async (e) => {
        await axios.post(URL, {
            nombre: nombre, apellido: apellido, documento: documento,
            correo: correo, direccion: direccion, telefono: telefono
        })
        navigate('/clientes')
        
    }

    return (
        <div >
            <h3>Formulario Guardar clientes</h3>
            <form onSubmit={handleSubmit(guardarCliente)}>
                <div > 
                    <div className="mb-3 row">
                        <label for="nombre" className="col-sm-1 col-form-label">Nombre</label>
                        <div className="col-sm-10">
                            <input  {...register("nombre",
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
                            )} value={nombre} onChange={(e) => SetNombre(e.target.value)}
                                type="text" className="form-control" id="nombre" aria-describedby="nombre" />
                            {errors.nombre && <span className="text-danger">{errors.nombre.message}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Apellido</label>
                        <div className="col-sm-10">
                            <input {...register("apellido",
                                {
                                    required: {
                                        value: true,
                                        message: "Apellido  es  obligatario",
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

                                value={apellido} onChange={(e) => SetApellido(e.target.value)}
                                type="text" className="form-control"  />
                            {errors.apellido && <span className="text-danger">{errors.apellido.message}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Documento</label>
                        <div className="col-sm-10">
                            <input {...register("documento",
                                {
                                    required: {
                                        value: true,
                                        message: "Documento  es  obligatario",
                                    },
                                    maxLength: {
                                        value: 11,
                                        message: "Maximo 20 caracteres",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Minimo 8 caracteres",
                                    },
                                }
                            )}


                                value={documento} onChange={(e) => SetDocumento(e.target.value)}
                                type="text" className="form-control"  />
                            {errors.documento && <span className="text-danger">{errors.documento.message}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-1 col-form-label">Correo</label>
                        <div className="col-sm-10">
                            <input {...register('correo',
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

                                value={correo} onChange={(e) => SetCorreo(e.target.value)}
                                type="text" className="form-control"  />
                            {errors.correo && <span className="text-danger">{errors.correo.message}</span>}

                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-1 col-form-label">Telefono</label>
                        <div className="col-sm-10">
                            <input {...register('telefono',
                                {
                                    required: {
                                        value: true,
                                        message: "Telefono obligatario",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Maximo 10 caracteres",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Minimo 10 caracteres",
                                    },
                                }
                            )}

                                value={telefono} onChange={(e) => SetTelefono(e.target.value)}
                                type="text" className="form-control"  />
                            {errors.telefono && <span className="text-danger">{errors.telefono.message}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Direccion</label>
                        <div className="col-sm-10">
                            <input {...register('direccion',
                                {
                                    required: {
                                        value: true,
                                        message: "Direccion es  obligatario",
                                    },
                                    maxLength: {
                                        value: 60,
                                        message: "Maximo  60 aracteres",
                                    },
                                    minLength: {
                                        value: 15,
                                        message: "Minimo  15  caracteres",
                                    },
                                }
                            )}

                                value={direccion} onChange={(e) => SetDireccion(e.target.value)}
                                type="text" className="form-control" />
                            {errors.direccion && <span className="text-danger">{errors.direccion.message}</span>}
                        </div>
                    </div>

                    <button type="submit" className='btn btn-primary'>Guardar</button>
                </div>
            </form>
        </div>

    )
}
export default CompAgregarClientes
import React, {useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../utils/APIInvoke";
import Swal from 'sweetalert';

const EditarPaciente = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    let arreglo = id.split("@");
    const nombrePaciente = arreglo[1];
    const apellidoPaciente = arreglo[2];
    const correoPaciente = arreglo[3];
    const telefonoPaciente = arreglo[5];
    const passwordPaciente = arreglo[6];

    const [paciente, setPaciente] = useState({
        nombre: nombrePaciente,
        apellido: apellidoPaciente,
        correo: correoPaciente,
        telefono: telefonoPaciente,
        password: passwordPaciente
    });

    const { nombre, apellido, correo, telefono, password } = paciente;
    
    useEffect(() => {
        document.getElementById('nombre').focus();
    }, []);
    
    const onChange = (e) =>{
        setPaciente({
            ...paciente,
            [e.target.name]: e.target.value
        })
    }

    const editarPaciente = async () => {
        let arreglo = id.split("@");
        const id = arreglo[0];

        const data = {
            nombre: paciente.nombre,
            apellido: paciente.apellido,
            correo: paciente.correo,
            telefono: paciente.telefono,
            password: paciente.password
        }

        const response = await APIInvoke.invokePUT(`/paciente/${id}`, data);
        const idPacienteEditado = response.paciente.id;

        if (idPacienteEditado !== id) {
            const msg = "El paciente no fue editado correctamente.";
            Swal({
                title: "Error",
                text: msg,
                icon: "error",
                button: {
                confirm: {
                    text: "Ok",
                    value: true,
                    visible: true,
                    className: "btn btn-danger",
                    closeModel: true,
                },
                },
            });
        } else {
            navigate(window.location.href = "/paciente");
            const msg = "El paciente fue editado correctamente.";
            Swal({
                title: "Información",
                text: msg,
                icon: "success",
                button: {
                confirm: {
                    text: "Ok",
                    value: true,
                    visible: true,
                    className: "btn btn-primary",
                    closeModel: true,
                },
                },
            });
        }
    };

    return (
        <div class="hold-transition sidebar-mini">
            <div className="wrapper">
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="/paciente" className="nav-link">Atrás</a>
                        </li>
                    </ul>
                </nav>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="../../index3.html" className="brand-link">
                        <img src="" alt="" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">TuDoctorOnline</span>
                    </a>
                    <div className="sidebar">
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item">
                                    <Link to={"/dashboard"} className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>
                                            Dashboard
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/cita"} className="nav-link">
                                        <i className="nav-icon fas fa-columns" />
                                        <p>
                                            Citas
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/doctor"} className="nav-link">
                                        <i className="nav-icon far fa-circle text-info" />
                                        <p>Doctores</p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="content-wrapper">
                    <section className="content-header" >
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Editar Paciente</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/agregarpaciente"}>Agregar</Link></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <form onSubmit={editarPaciente}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                        </div>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label>Nombre</label>
                                                    <input type="text" id="nombre" name="nombre" className="form-control" value={nombre} onChange={onChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Apellido</label>
                                                    <input type="text" id="apellido" name="apellido" className="form-control" value={apellido} onChange={onChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Número De Celular</label>
                                                    <input type="int" id="telefono" name="telefono" className="form-control" value={telefono} onChange={onChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Correo electrónico</label>
                                                    <input type="email" id="correo" name="correo" className="form-control" value={correo} onChange={onChange} required/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Contraseña</label>
                                                    <input type="text" id="password" name="password" className="form-control" value={password} onChange={onChange} required/>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button href="/paciente" type="submit" className="btn btn-primary">Cancelar</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="submit" className="btn btn-primary">Editar</button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default EditarPaciente;
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import APIInvoke from "../utils/APIInvoke";
import Swal from 'sweetalert';

const Paciente = () => {
    const url = 'http://localhost:5000/paciente';
    const [paciente,setPaciente] = useState([]);
    const [id,setId] = useState('');
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [correo,setCorreo] = useState('');
    const [telefono,setTelefono] = useState('');
    const [password,setPassword] = useState('');

    const getPaciente = async () => {
        const respuesta = await axios.get(url);
        setPaciente(respuesta.data);
    }

    useEffect( ()=>{
        getPaciente();
    }, []);

    const eliminarPaciente = async (e, id) =>{
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/paciente/${id}`);
        if(response.msg === 'Paciente eliminado'){
            const msg = "El paciente NO fue eliminado correctamente.";
            Swal({
                title: 'Información',
                text: msg,
                icon: 'error',
                button: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModel: true
                    }
                }
            });
        }else{
            const msg = "El paciente fue eliminado correctamente.";
            Swal({
                title: 'Información',
                text: msg,
                icon: 'success',
                button: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModel: true
                    }
                }
            });
            getPaciente();
        }
    }

    return (
        <div class="hold-transition sidebar-mini">
            <div className="wrapper">
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="/dashboard" className="nav-link">Atrás</a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="/agregarpaciente" className="nav-link">Agregar Paciente</a>
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
                                    <Link to={"/agenda"} className="nav-link">
                                        <i className="nav-icon far fa-calendar-alt" />
                                        <p>
                                            Agenda
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
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Pacientes</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"#"}>Consultar</Link></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Pacientes</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped projects">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '15%' }}>
                                                Nombre
                                            </th>
                                            <th style={{ width: '15%' }}>
                                                Apellido
                                            </th>
                                            <th style={{ width: '15%' }}>
                                                Correo
                                            </th>
                                            <th style={{ width: '15%' }}>
                                                Telefono
                                            </th>
                                            <th style={{ width: '12%' }}>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {paciente.map( (paciente, i)=>(
                                    <tr key={paciente.id}>
                                        <td>{paciente.nombre}</td>
                                        <td>{paciente.apellido}</td>
                                        <td>{paciente.correo}</td>
                                        <td>{paciente.telefono}</td>
                                        <td className="project-actions text-right">
                                            <Link to={`/editarpaciente/${paciente.id}@${paciente.nombre}@${paciente.apellido}@${paciente.correo}@${paciente.telefono}@${paciente.password}`}
                                            className="btn btn-info btn-sm">
                                                Editar
                                            </Link>
                                            <Link to={"#"}  onClick={(e) => eliminarPaciente(e, paciente.id)} className="btn btn-danger btn-sm">
                                                Eliminar
                                            </Link>
                                        </td>
                                    </tr>
                                    ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    </div>
    );
}

export default Paciente;
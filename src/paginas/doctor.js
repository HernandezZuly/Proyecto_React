import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import APIInvoke from "../utils/APIInvoke";
import Swal from 'sweetalert';

const Doctor = () => {
    const url = 'http://localhost:5000/doctor';
    const [doctor,setDoctor] = useState([]);
    const [id,setId] = useState('');
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [documento,setDocumento] = useState('');
    const [direccion,setDireccion] = useState('');
    const [correo,setCorreo] = useState('');
    const [telefono,setTelefono] = useState('');
    const [fechaNacimiento,setFechaNacimiento] = useState('');
    const [password,setPassword] = useState('');

    const getDoctor = async () => {
        const respuesta = await axios.get(url);
        setDoctor(respuesta.data);
    }

    useEffect( ()=>{
        getDoctor();
    }, []);

    const eliminarDoctor = async (e, id) =>{
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/doctor/${id}`);
        if(response.msg === 'Doctor eliminado'){
            const msg = "El doctor NO fue eliminado correctamente.";
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
            const msg = "El doctor fue eliminado correctamente.";
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
            getDoctor();
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
                            <a href="/agregardoctor" className="nav-link">Agregar Doctor</a>
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
                                    <Link to={"/paciente"} className="nav-link">
                                        <i className="nav-icon far fa-circle text-warning" />
                                        <p>Pacientes</p>
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
                                    <h1>Doctores</h1>
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
                                <h3 className="card-title">Doctores</h3>
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
                                                Fecha De Nacimiento
                                            </th>
                                            <th>
                                                Número De Documento
                                            </th>
                                            <th style={{ width: '15%' }}>
                                                Correo
                                            </th>
                                            <th style={{ width: '15%' }}>
                                                Telefono
                                            </th>
                                            <th style={{ width: '15%' }}>
                                                Correo
                                            </th>
                                            <th style={{ width: '12%' }}>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {doctor.map( (doctor, i)=>(
                                    <tr key={doctor.id}>
                                        <td>{doctor.nombre}</td>
                                        <td>{doctor.apellido}</td>
                                        <td>{doctor.fechaNacimiento}</td>
                                        <td>{doctor.documento}</td>
                                        <td>{doctor.correo}</td>
                                        <td>{doctor.telefono}</td>
                                        <td>{doctor.direccion}</td>
                                        <td className="project-actions text-right">
                                            <Link to={`/editardoctor/${doctor.id}@${doctor.nombre}@${doctor.apellido}@${doctor.fechaNacimiento}@${doctor.documento}
                                            @${doctor.direccion}@${doctor.correo}@${doctor.password}@${doctor.telefono}`} className="btn btn-info btn-sm">
                                                Editar
                                            </Link>&nbsp;
                                            <Link to={"#"} onClick={(e) => eliminarDoctor(e, doctor.id)} className="btn btn-danger btn-sm">
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

export default Doctor;
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../utils/APIInvoke";
import Swal from 'sweetalert';

const AgregarCita = () => {
    const url = 'http://localhost:5000/cita';

    const navigate = useNavigate();

    const [cita,setCita] = useState({
        pacienteId: '',
        doctorId: '',
        fecha_cita: '',
        hora_cita: '',
        tipo_cita: '',
        valor_cita: ''
    });

    const { pacienteId, doctorId, fecha_cita, hora_cita, tipo_cita, valor_cita } = cita;

    useEffect(() => {
        document.getElementById('pacienteId').focus();
    }, []);
    
    const onChange = (e) =>{
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const crearCita = async () => {
        const data = {
            pacienteId: cita.pacienteId,
            doctorId: cita.doctorId,
            fecha_cita: cita.fecha_cita,
            hora_cita: cita.hora_cita,
            tipo_cita: cita.tipo_cita,
            valor_cita: cita.valor_cita
        }
    
        const response = await APIInvoke.invokePOST(`/cita`, data);
        const idCita = response.id;
    
        if(idCita === ''){
            const msg = "La cita no fue creada correctamente.";
            Swal({
                title: 'Error',
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
            navigate(window.location.href = "/cita");
            const msg = "La cita fue creada correctamente.";
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
                            <a href="/cita" className="nav-link">Atrás</a>
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
                                        <p>Dashboard</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                <Link to={"/paciente"} className="nav-link">
                                    <i className="nav-icon far fa-circle text-warning" />
                                    <p>Pacientes</p>
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
                                    <h1>Agregar Cita</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to={"/agregarcita"}>Agregar</Link></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <form onSubmit={crearCita}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">

                                    </div>
                                    <div className="card-body">
                                        <div class="form-group">
                                            <label>Id Paciente</label>
                                            <input type="int" id="pacienteId" name="pacienteId" className="form-control" value={pacienteId} onChange={onChange} required/>
                                        </div>
                                        <div class="form-group">
                                            <label>Id Doctor</label>
                                            <input type="int" id="doctorId" name="doctorId" className="form-control" value={doctorId} onChange={onChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Fecha De La Cita</label>
                                            <input type="date" id="fecha_cita" name="fecha_cita" className="form-control" value={fecha_cita} onChange={onChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Hora De La Cita</label>
                                            <input type="date" id="hora_cita" name="hora_cita" className="form-control" value={hora_cita} onChange={onChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Tipo De Cita</label>
                                            <input type="text" id="tipo_cita" name="tipo_cita" className="form-control" value={tipo_cita} onChange={onChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Valor De La Cita</label>
                                            <input type="int" id="valor_cita" name="valor_cita" className="form-control" value={valor_cita} onChange={onChange} required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button href="/cita" type="submit" className="btn btn-primary">Cancelar</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="submit" className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </form>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AgregarCita;
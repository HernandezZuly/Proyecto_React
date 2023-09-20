import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const AgendaDisponible = () => {
    const url = 'http://localhost:5000/cita';
    const [cita,setCita] = useState([]);
    const [id,setId] = useState('');
    const [pacienteId,setPacienteId] = useState('');
    const [doctorId,setDoctorId] = useState('');
    const [fecha_cita,setFecha_cita] = useState('');
    const [hora_cita,setHora_cita] = useState('');
    const [tipo_cita,setTipo_cita] = useState('');
    const [valor_cita,setValor_cita] = useState('');

    useEffect( ()=>{
        getCita();
    }, []);

    const getCita = async () => {
        const respuesta = await axios.get(url);
        setCita(respuesta.data);
    }

    return (
    <div class="App">
        <div className="container-fluid">
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></Link>
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
                                <Link to={"/"} className="nav-link">
                                    <i className="nav-icon fas fa-th" />
                                    <p>Cerrar sesion</p>
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
                                <h1>Agenda</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="card card-solid">
                        <div className="card-body pb-0">
                            <div className="row">
                            {cita.map( (cita, i)=>(
                                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column" key={cita.id}>
                                    <div className="card bg-light d-flex flex-fill">
                                        <div className="card-header text-muted border-bottom-0">
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="row">
                                                    <div className="col-7">
                                                        <p className="text-muted text-sm">
                                                            <b>Fecha: </b> {cita.fecha_cita}
                                                        </p>
                                                        <p className="text-muted text-sm">
                                                            <b>Hora: </b> {cita.hora_cita}
                                                        </p>
                                                        <p className="text-muted text-sm">
                                                            <b>Id del doctor: </b> {cita.doctorId}
                                                        </p>
                                                        <p className="text-muted text-sm">
                                                            <b>Tipo de cita: </b> {cita.tipo_cita}
                                                        </p>
                                                        <p className="text-muted text-sm">
                                                            <b>Valor de cita: </b> {cita.valor_cita}
                                                        </p>
                                                    </div>
                                                    <div className="col-5 text-center">
                                                    <img
                                                        src="https://municipiosanjuan.gob.ar/media/k2/items/cache/f5a85333d553b860310d6f60f5af8288_XL.jpg?t=20211128_045150"
                                                        alt="user-avatar"
                                                        className="img-circle img-fluid"
                                                    />
                                                    </div>
                                                    <div class="col-5 text-center" center>
                                                        <Link to={`/editarcita/${cita.id}@${cita.pacienteId}@${cita.doctorId}@${cita.fecha_cita}@${cita.hora_cita}@${cita.tipo_cita}
                                                        @${cita.valor_cita}`} className="btn btn-primary">Agendar</Link>&nbsp;
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    );
}

export default AgendaDisponible;
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import APIInvoke from "../utils/APIInvoke";
import Swal from 'sweetalert';

const Cita = () => {
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

  const eliminarCita = async (e, id) =>{
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/cita/${id}`);
    if(response.msg === 'Cita eliminada'){
        const msg = "La cita NO fue eliminada correctamente.";
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
        const msg = "La cita fue eliminada correctamente.";
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
        getCita();
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
                            <a href="/agregarcita" className="nav-link">Agregar Cita</a>
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
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Citas</h1>
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
                  <h3 className="card-title">Citas</h3>
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
                        <th style={{ width: '1%' }}>
                          Número De Autorización
                        </th>
                        <th style={{ width: '20%' }}>
                          Id Paciente
                        </th>
                        <th style={{ width: '15%' }}>
                          Id Doctor
                        </th>
                        <th>
                          Fecha Cita
                        </th>
                        <th style={{ width: '20%' }}>
                          Tipo Cita
                        </th>
                        <th style={{ width: '8%' }}>
                          Valor De La Cita
                        </th>
                        <th style={{ width: '12%' }}>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cita.map( (cita, i)=>(
                          <tr key={cita.id}>
                              <td>{i+1}</td>
                              <td>{cita.pacienteId}</td>
                              <td>{cita.doctorId}</td>
                              <td>{cita.fecha_cita}</td>
                              <td>{cita.hora_cita}</td>
                              <td>{cita.tipo_cita}</td>
                              <td>{cita.valor_cita}</td>
                              <td className="project-actions text-right">
                                  <Link to={"#"} onClick={(e) => eliminarCita(e, cita.id)} className="btn btn-danger btn-sm">
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

export default Cita;
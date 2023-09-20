import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../utils/APIInvoke";
import Swal from 'sweetalert';

const AgregarDoctor = () => {
  const url = 'http://localhost:5000/doctor';

  const navigate = useNavigate();

  const [doctor,setDoctor] = useState({
    nombre: '',
    apellido: '',
    documento: '',
    direccion: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    password: ''
  });

  const { nombre, apellido, documento, direccion, correo, telefono, fechaNacimiento, password } = doctor;
  
  useEffect(() => {
    document.getElementById('nombre').focus();
  }, []);
  
  const onChange = (e) =>{
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value
    })
  }

  const crearDoctor = async () => {
    const data = {
      nombre: doctor.nombre,
      apellido: doctor.apellido,
      documento: doctor.documento,
      direccion: doctor.direccion,
      correo: doctor.correo,
      telefono: doctor.telefono,
      fechaNacimiento: doctor.fechaNacimiento,
      password: doctor.password
    }

    const response = await APIInvoke.invokePOST(`/doctor`, data);
    const idDoctor = response.id;

    if(idDoctor === ''){
      const msg = "El doctor no fue creado correctamente.";
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
      navigate(window.location.href = "/doctor");
      const msg = "El doctor fue creado correctamente.";
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
                  <Link to={"/doctor"} className="nav-link">Atrás</Link>
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
              <section className="content-header" >
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1>Agregar</h1>
                    </div>
                  </div>
                </div>
              </section>
              <section className="content">
                <form onSubmit={crearDoctor}>
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
                            <input type="text" id="apellido" name="apellido" className="form-control"  value={apellido} onChange={onChange} required/>
                          </div>
                          <div className="form-group">
                            <label>Fecha De Nacimiento</label>
                            <input type="date" id="fechaNacimiento" name="fechaNacimiento" className="form-control" value={fechaNacimiento} onChange={onChange} required/>
                          </div>
                          <div className="form-group">
                            <label>Número De Documento</label>
                            <input type="int" id="documento" name="documento" className="form-control" value={documento} onChange={onChange} required/>
                          </div>
                          <div className="form-group">
                            <label>Dirección</label>
                            <input type="text" id="direccion" name="direccion" className="form-control" value={direccion} onChange={onChange} required/>
                          </div>
                          <div className="form-group">
                            <label>Número De Celular</label>
                            <input type="int" id="telefono" name="telefono" className="form-control" value={telefono} onChange={onChange} required/>
                          </div>
                          <div className="form-group">
                            <label>Correo electrónico</label>
                            <input type="text" id="correo" name="correo" className="form-control" value={correo} onChange={onChange} required/>
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
                      <button href="/doctor" type="submit" className="btn btn-primary">Cancelar</button>&nbsp;&nbsp;&nbsp;&nbsp;
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

export default AgregarDoctor;
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../utils/APIInvoke";
import Swal from 'sweetalert';

const CrearCuenta = () => {

  const navigate = useNavigate();

  const [paciente, setPaciente] = useState({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      password: ''
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

  const crearPaciente = async () => {
      const data = {
          nombre: paciente.nombre,
          apellido: paciente.apellido,
          correo: paciente.correo,
          telefono: paciente.telefono,
          password: paciente.password
      }

      const response = await APIInvoke.invokePOST(`/paciente`, data);
      const idPaciente = response.id;
      
      if(idPaciente === ''){
          const msg = "El paciente no fue creado correctamente.";
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
          navigate(window.location.href = "/");
      }
  }

    return (
      <div className="hold-transition register-page">
        <div className="register-box">
          <div className="register-logo">
            <Link to={"#"}>
              <b>Crear Cuenta</b>
            </Link>
          </div>
          <div className="card">
            <form onSubmit={crearPaciente}>
              <div className="card-body register-card-body">
                <p className="login-box-msg">Información para una nueva cuenta</p>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      id="nombre"
                      name="nombre"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                      id="apellido"
                      name="apellido"
                      value={apellido}
                      onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="int"
                      className="form-control"
                      placeholder="Numero Celular"
                      id="telefono"
                      name="telefono"
                      value={telefono}
                      onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-phone" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="correo"
                      name="correo"
                      value={correo}
                      onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      id="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                <div className="social-auth-links text-center">
                  <button type='submit' className="btn btn-block btn-primary">
                      Registrar
                  </button>
                  <Link to={"/"} className="btn btn-block btn-danger">
                      Cancelar
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default CrearCuenta;
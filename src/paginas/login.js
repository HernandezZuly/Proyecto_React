import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import APIInvoke from "../utils/APIInvoke";

const Login = () => {

  const navigate = useNavigate();

  const [paciente, setPaciente] = useState({
    correo: '',
    password: ''
  });

  const { correo, password } = paciente;

  const onChange = (e) => {
    setPaciente ({
      ...paciente,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    document.getElementById("correo").focus();
  }, [])

  const iniciarSesion = async () => {
    const data = {
      correo: paciente.correo,
      password: paciente.password
    }
    const response = await APIInvoke.invokePOST(`/paciente`,data);
    const mensaje = response.msg;
    
    if(mensaje === 'El usuario no existe' || mensaje === 'Contraseña incorrecta'){
      const msg = "no fue posible inciar sesion,verifique los datos ingresados";
      swal({
        title: 'Error',
        text: msg,
        icon: 'error',
        buttons: {
          confirm: {
            text: 'Ok',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    } else {
      //obtener el token de acceso
      const jwt = response.token;

      //guarda el token en el localstorage
      localStorage.setItem('token', jwt);

      //redireccionamos al dashboard de la pagina principal
      navigate(window.location.href = "/agendadisponible");
    }


  }

  return (
    <div class="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>Inicio de sesión</b>
          </Link>
        </div>
        <div className="card">
          <form onSubmit={iniciarSesion}>
          <div className="card-body login-card-body">
            <p className="login-box-msg">Bienvenido, ingrese su información necesaria</p>
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
              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">Ingresar</button>
                <Link to={"/crearcuenta"} className="btn btn-block btn-danger">Crear Cuenta</Link>
              </div>
          </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

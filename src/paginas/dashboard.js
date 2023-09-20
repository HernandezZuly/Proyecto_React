import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
    return (
        <div class="hold-transition sidebar-mini layout-fixed">
          <div className="wrapper">
            <div className="preloader flex-column justify-content-center align-items-center">
              <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
            </div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={"#"} className="nav-link" data-widget="pushmenu"><i className="fas fa-bars" /></Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <Link to={"/"} className="nav-link">Atrás</Link>
                </li>
              </ul>
            </nav>
            <div className="content-wrapper">
              <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1 className="m-0">Dashboard</h1>
                    </div>
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to={"#"}>Home</Link></li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <section className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3 col-6">
                      <div className="small-box bg-info">
                        <div className="inner">
                          <h3>Doctores</h3>
                          <p>Vea los doctores registrados</p>
                        </div>
                        <div className="icon">
                          <i className="ion ion-bag" />
                        </div>
                        <Link to={"/doctor"} className="small-box-footer">Más info <i className="fas fa-arrow-circle-right" /></Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="small-box bg-success">
                        <div className="inner">
                          <h3>Pacientes</h3>
                          <p>Vea los pacientes registrados</p>
                        </div>
                        <div className="icon">
                          <i className="ion ion-stats-bars" />
                        </div>
                        <Link to={"/paciente"} className="small-box-footer">Más info <i className="fas fa-arrow-circle-right" /></Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="small-box bg-warning">
                        <div className="inner">
                          <h3>Citas</h3>
                          <p>Vea las citas registradas</p>
                        </div>
                        <div className="icon">
                          <i className="ion ion-person-add" />
                        </div>
                        <Link to={"/cita"} className="small-box-footer">Más info <i className="fas fa-arrow-circle-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    );
}

export default Dashboard;
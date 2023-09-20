import React, { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AgendaDisponible from "./paginas/agendaDisponible";
import AgregarCita from "./paginas/agregarCita";
import AgregarDoctor from "./paginas/agregarDoctor";
import AgregarPaciente from "./paginas/agregarPaciente";
import Paciente from "./paginas/paciente";
import Cita from "./paginas/cita";
import CrearCuenta from "./paginas/crearCuenta";
import Dashboard from "./paginas/dashboard";
import Doctor from "./paginas/doctor";
import EditarDoctor from "./paginas/editarDoctor";
import EditarPaciente from "./paginas/editarPaciente";
import EditarCita from "./paginas/editarCita";
import Login from "./paginas/login";

function App() {
  return (
    <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element = {<Login/>}/>
            <Route path="/crearcuenta" exact element = {<CrearCuenta/>}/>
            <Route path="/dashboard" exact element = {<Dashboard/>}/>
            <Route path="/cita" exact element = {<Cita/>}/>
            <Route path="/paciente" exact element = {<Paciente/>}/>
            <Route path="/doctor" exact element = {<Doctor/>}/>
            <Route path="/agregardoctor" exact element = {<AgregarDoctor/>}/>
            <Route path="/agregarcita" exact element = {<AgregarCita/>}/>
            <Route path="/agregarpaciente" exact element = {<AgregarPaciente/>}/>
            <Route path="/agendadisponible" exact element = {<AgendaDisponible/>}/>
            <Route path="/editardoctor/:id" exact element = {<EditarDoctor/>}/>
            <Route path="/editarpaciente/:id" exact element = {<EditarPaciente/>}/>
            <Route path="/editarcita/:idCita" exact element = {<EditarCita/>}/>
          </Routes>
        </Router>
    </Fragment>
  );
}

export default App;

import React from 'react';
import Reflux from 'reflux';
import ReservaStore from '../stores/ReservaStore.js';
import ReservaAction from '../actions/ReservaAction.js';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import Datetime from 'react-datetime';
//import Checkbox from "react-checkbox-list"


var Form = React.createClass({

   mixins: [Reflux.connect(ReservaStore, 'Reservastore')],


  //#region Definicion de propiedades
  getInitialState: function () {
    return {
      name: '',
      price: '',
      description: '',
      date: moment(),
    };
  },
  //#endregion

  //#region Metodos
  nameChange: function (e){  
    this.setState({
      name: e.target.value 
    })
  },

  priceChange: function(e){    
    this.setState({
      price: e.target.value 
    })
  },


  changeHandler: function(e) {
    this.setState({
      selected : e.target.value
    })
  },
   changeHandler2: function(e) {
    this.setState({
      selected2 : e.target.value
    })
  },
  
    
    dataHandler:function(e){
    this.setState({
      date:e.target.value});
  },

  




  guardarClic: function() {
    if(this.state.name !== '' && this.state.date !== '' && this.state.selected!== undefined && this.state.selected2 !==undefined){
      alert(this.state.date) 
      ReservaAction.crearReserva(this.state.name, this.state.date, this.state.lista, this.state.description, this.state.selected); // React Component instance
    }
    else
    {
      alert('Falta por ingresar valores a los campos')
    } 
  },
  //#endregion 

   
  render: function() {
    return (
      React.createElement('form', {className: 'form-group'},
        React.createElement("label", {className: "label"}, 'Codigo de la reserva'),
        React.createElement('input', {
          type: 'number',
          className: 'form-control',         
          onChange: this.nameChange,
        }),
        React.createElement("label", {className: "label"}, 'Fecha de reserva'),
        React.createElement(Datetime,{
          className:'form-control', 
          onChange:this.dataHandler.bind(this),
        }),

   React.createElement("label", {className: "label"}, 'Dia de Reserva'),
        
        React.createElement("select", {
          value:this.state.selected,
          className: 'form-control',
          onChange:this.changeHandler
        },
          React.createElement("option", { value: 9 }, ""),
          React.createElement("option", { value: 1 }, "Lunes"),
          React.createElement("option", { value: 2 }, "Martes"),
          React.createElement("option", { value: 3 }, "Miercoles"),
          React.createElement("option", { value: 4 }, "Jueves"),
          React.createElement("option", { value: 5 }, "Viernes"),
          React.createElement("option", { value: 6 }, "Sabado"),
          React.createElement("option", { value: 7 }, "Domingo"),
        ),

        React.createElement("label", {className: "label"}, 'lista'),
        
        React.createElement("select", {
          value:this.state.selected2,
          className: 'form-control',
          onChange:this.changeHandler2
       },
        React.createElement("option", { value: 0 }, ""),
          React.createElement("option", { value: 1 }, "Diaria"),
          React.createElement("option", { value: 2 }, "Semanal"),
          React.createElement("option", { value: 3 }, "Mensual"),
          React.createElement("option", { value: 4 }, "Trimestral"),
          React.createElement("option", { value: 5 }, "Semestral"),
          React.createElement("option", { value: 6 }, "Anual"),
        ),
        React.createElement('input', {
          type: 'submit',
          onClick: this.guardarClic,
          className: 'btn-primary',
        }) ,
      )
    )
  },
});

export default Form;
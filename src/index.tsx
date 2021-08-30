import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs';
import React from 'react';


createServer({

  models:{
   transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'Frelance Desenvolvimento Web',
          value:600,
          category:'Dev',
          type: 'deposit',
          createdAt: new Date('2021-08-24 11:15:21'),
        },
        {
          id:2,
          title:'Lanche',
          value:60,
          category:'Comida',
          type: 'withdraw',
          createdAt: new Date('2021-08-23 11:15:31'),
        },
      ]
    })
  },

  routes(){
    this.namespace= 'api';
    
   this.get('/transactions', ()=>{
     return this.schema.all('transaction')

   }) 
  
   this.post('/transactions', (schema, request)=>{
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)

    })
  }
})


ReactDOM.render( 
  <React.StrictMode> 
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);

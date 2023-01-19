/*eslint no-console: 0*/
"use strict";
const config = require('./config/entorno.js'); 
const express   			= require('express'); 
const bodyParser			= require('body-parser');    
const tokenjwt  			= require('./utils/tokenjwt');
const routes   				= require('./routes/index'); 
const log4js = require("log4js"); 
var cors					= require('cors');
var http 					= require('http'); 
//crear el servidor
const app = express(); 
log4js.configure({
    appenders: {
        siges_api_gateway_multicanal: {
        type: "dateFile",
        filename: "../log/siges-api-gateway-multicanal.log",
        pattern: "yyyy-MM-dd",
        compress: true,
      },
    },
    categories: {
      default: { appenders: ["siges_api_gateway_multicanal"], level: "debug" },
    },
  });
app.set('host', config.HOST);
app.set('port', config.PORT); 
app.use(cors());
///// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));  
// Authentication
app.use((req, res, next) => { 
    try {
      var token = req.headers['stoken']; 
	    if(!token){
		 
	        res.status(401).send({
	          error: "Es necesario el token de autenticación"
	        });
	        return;
	    }   
	   token = token.replace('Bearer ', '') ;  
       var oValidaToken = tokenjwt.validarToken(token); 
       if(oValidaToken.oAuditResponse.iCode !== 1){  
       		 res.status(401).send({
	          error: "No tiene permisos para utilizar este recurso"
	        });
       }else{  
        // Validamos que no este ingresando una emprsa que no tiene acceso 
       	 next();
       }   
    } catch (error) {
      console.log(error);
      res.status(501).send({
        error: "Error al cargar el api gateway "
      });
    } 
	    
});

//Rutas del app de auditoria
app.use('/api-gateway-multicanal', routes());
const logger = log4js.getLogger("siges_api_gateway_multicanal"); 
http.createServer(app).listen(app.get('port'), () => {
    console.log('Servidor funcionando correctamente en el puerto: ' + app.get('port'));
	logger.debug('Servidor funcionando correctamente en el puerto: ' + app.get('port')); 
});


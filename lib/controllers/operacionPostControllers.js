const request		= require('request-promise-native');
const utilshttp 	= require('../utils/utilshttp');
const serviciosurl  = require('../urlservicio/index');
const registrarAuditoriaClient  = require('../serviceclient/siges/registroAuditoriaHana');

//Servicios para metodos post
exports.operacionPost = async (req, res) => { 
	
	 var oResponse			  = {};
	 oResponse.oAuditResponse = {};
	 oResponse.oData		  = [];   
	 var tiempoProceso		  = 0;
     try {   
     	var start			  = Date.now();
     	var path = req.path.split("/"); 
     	var start			  = Date.now(); 
     	var oUrls			  = serviciosurl.servicios(); 
		 var sUrlDestino	  = oUrls[path[1]][0] + req.originalUrl.replace("/api-gateway-multicanal","");
     	 var options = {
			    method: 'POST'
			    ,uri: sUrlDestino 
			    ,headers : utilshttp.generaHeaders(req.headers)
				,body : req.body
			    ,json: true 
			  } 
	 
     	 oResponse =	await	utilshttp.httpMetodo(options, sUrlDestino, req.url);
         var end = Date.now();
    	 tiempoProceso = end - start; 
     } catch (e) {
         	oResponse.oAuditResponse.iCode = -3;
			oResponse.oAuditResponse.sMessage = 'Ocurrio un error en el api gateway, ' + e.toString();
			oResponse.oAuditResponse.sIdTransaccion	=  req.headers.sidtransaccion;
     }finally{
		 /*var oEmpresa = JSON.parse(req.headers.oEmpresa);
		 var oParamAuditoria = {};
		oParamAuditoria.oData						= {};
		oParamAuditoria.oData.sCodEmpresa			= oEmpresa.CodEmpresa;
		oParamAuditoria.oData.sEmpresa				= oEmpresa.RazonSocial;
		oParamAuditoria.oData.sTransaccionId		= req.headers.sidtransaccion;
		oParamAuditoria.oData.sTerminal				= (req.headers.sterminal) ? req.headers.sterminal : req.headers['x-forwarded-for'];
		oParamAuditoria.oData.sUsuario				= req.headers.sUsuario;
		oParamAuditoria.oData.sSistema				= "PORTAL-SIGES";
		oParamAuditoria.oData.sAplicacion			= req.headers.saplicacion;
		oParamAuditoria.oData.sNombreProceso		= sNombreProceso;
		oParamAuditoria.oData.sUrl					= req.protocol + "://"+ req.headers.host + req.url;
		oParamAuditoria.oData.dFechaTransaccion  	= new Date();
		 oParamAuditoria.oData.iTiempoProceso		= tiempoProceso;
		 oParamAuditoria.oData.sEntradaProceso		= JSON.stringify(req.body);
		oParamAuditoria.oData.sRespuestaProceso 	= JSON.stringify(oResponse);
		if(oResponse.oAuditResponse.iCode === 1){
		   oParamAuditoria.oData.sEstado				= "OK";
		}else if(oResponse.oAuditResponse.iCode	< 1 ){
		   oParamAuditoria.oData.sEstado				= "ERROR";
		}else{
		   oParamAuditoria.oData.sEstado				= "ALERTA";
		}
		
		 registrarAuditoriaClient.registrarAuditoriaHana(oParamAuditoria);
 		*/
     	res.json(oResponse) 
     } 
}

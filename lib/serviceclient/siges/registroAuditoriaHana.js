const request			= require('request-promise-native');
const utilshttp 		= require('../../utils/utilshttp'); 
const serviciosurl		= require('../../urlservicio/index');
var oClientResponse 	= {}; 
/**
 * @description servicio para registrar en las tablas de auditoria
 * @creation David Villanueva 08/12/2020
 * @update 
 */
exports.registrarAuditoriaHana = async function (oParam) { 
	 var oResponse			  = {};
	 oResponse.oData		  = {};
     try {  
     	var oUrls			  = serviciosurl.servicios(); 
     	var sUrlDestino		  = oUrls["P-/auditoria"];
     		var options = {
			    method: 'POST'
				,uri: sUrlDestino[0]
				,headers: {}
			    ,body:oParam.oData 
			    ,json: true 
			  } 
     	  request(options) ; 
     } catch (e) { 
		 	console.log(e)
         	oResponse.iCode		=  -3;
			oResponse.sMessage	=  'Ocurrio un error en el servicio cliente, Url: ' +sUrlDestino[0] + ', Error: ' + e.toString();
	 
     }finally{
     	if(oResponse.iCode < 1){
     		console.log(JSON.stringify(oResponse));
     	}
     } 
     return oResponse;
};

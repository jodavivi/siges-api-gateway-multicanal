const express			         = require('express'); 
const router		                  = express.Router();  
const operacionGetControllers		  = require('../controllers/operacionGetControllers'); 
const operacionPostControllers		  = require('../controllers/operacionPostControllers'); 
const operacionPutControllers		  = require('../controllers/operacionPutControllers'); 
const operacionDeleteControllers	  = require('../controllers/operacionDeleteControllers'); 

module.exports = function() {  
    
    //Routes para operaciones GET
     router.get('/*', 
            operacionGetControllers.operacionGet); 
     
    router.post('/*',  
            operacionPostControllers.operacionPost); 
            
    router.put('/*',  
            operacionPutControllers.operacionPut); 
    
    router.delete('/*',  
            operacionDeleteControllers.operacionDelete); 
    
   
    return router;  

};
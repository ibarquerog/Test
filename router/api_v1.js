const express = require('express');
const bodyParser = require('body-parser');
var app = express();
const router = express.Router();
//const mysql = require('mysql');
var Connection = require('tedious').Connection
var Request = require('tedious').Request
var TYPES = require('tedious').TYPES
var multer = require('multer');
fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);

app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//SERVIDOR DE PRUEBAS
/*var connection = mysql.createConnection({
    host: 'localhost',
    user: 'calendario',
    password: 'calendario',
    database: 'calendario',
    port: 3306,
    multipleStatements: true
});*/
//SERVIDOR DE AWS
/*var connection = mysql.createConnection({
    host: 'calendario.chrl7epuhomu.us-east-1.rds.amazonaws.com',
    user: 'calendario',
    password: 'calendario',
    database: 'CALENDARIO',
    port: 3306,
    multipleStatements: true
});
connection.connect();*/
var config = {
    server: 'localhost',
    authentication: {
      type: 'default',
      options: {
        userName: 'sa',
        password: 'Tecaccr20#'
        }
    },
    options: {
        database: 'CALENDARIO',
        trustServerCertificate: true
    }
}

var connection = new Connection(config)
connection.connect();
connection.on('connect', function(err) {
    console.log(err);
    // If no error, then good to proceed.
    console.log("Connected");
});


/*router.use(function(req, res, next) {
//set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: storage
})
router.post("/upload", upload.single("image"), function (req, res, next) {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
});

router.get("/images/:nombre", function(req, res, next) {
    nombreImagen = req.params.nombre
     fs.readFile(appDir + '/images/' + nombreImagen, function (err, content) {
        if (err) {
            res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.end("No such image");    
        } else {
            res.writeHead(200,{'Content-type':'image/png'});
            res.end(content);
        }
    });
})
/*
  router.get('/regions', (req, res) => {
    
    let sql = "SELECT * FROM  region";
 
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de obtener datos de la bd"); 
            throw err;
        }
        var r = JSON.stringify(result); 
        res.write(r);
        res.end();
    });
})
 
router.post('/regions', (req, res) => {
    
    let sql = "CALL CREATE_REGION(" +
               "'" + req.body.NAME_REGION + "'" +
                ");";
 
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de insertar los datos en la bd"); 
            throw err;
        }
    });
 
    res.send('200');
})
 
router.put('/regions', (req, res) => {
    
    let sql = "CALL UPDATE_REGION(" +
                req.body.ID_REGION + 
                ",'" + req.body.NAME_REGION + "'" +
                ");";
 
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de actualizar los datos en la bd"); 
            throw err;
        }
    });
 
    res.send('200');
})
 
router.delete('/regions/:ID_REGION', (req, res) => {
    
    let sql = "CALL DELETE_REGION(" +
                req.params.ID_REGION + 
                ");";
 
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de eliminar los datos en la bd"); 
            throw err;
        }
    });
 
    res.send('200');
})
*/

// router get obra con id
router.get('/obras/:id', (req, res) => {

    request = new Request('SELECT_OBRA_BY_ID', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
        //connection.close();
    });
 
    request.addParameter('PIDOBRA', TYPES.VarChar, req.params.id);

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object = {};
        object['TIPO_DE_TECNICA'] = result[0].value.toString();
        object['TIPO_COLECCION'] = result[1].value.toString();
        object['NOMBRE_DE_OBRA'] = result[2].value.toString();
        object['NOMBRE_ARTISTA'] = result[3].value.toString();
        object['IMG_SOURCE'] = result[4].value.toString();
        object['LARGO'] = result[5].value.toString();
        object['ANCHO'] = result[6].value.toString();
        object['YEAR'] = result[7].value.toString();
        object['FECHA_INICIO'] = result[8].value.toString();
        object['FECHA_FIN'] = result[9].value.toString();
        object['ID_OBRA_DE_ARTE'] = result[10].value.toString();
        jsonArray.push(object); 
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
    });

    connection.callProcedure(request);

});


//Configuracion usuario Administrador
//router delete CLIENTE
router.delete('/clients', (req, res) => {
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de eliminar los datos en la bd");
            throw err;
        }
    });
    res.send('200');
})

//router delete CLIENTEs por correo
router.delete('/clients/:correo', (req, res) => {
    request = new Request('DELETE_CLIENTE', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
        //connection.close();
    });

    request.addParameter('CORREO', TYPES.VarChar, req.params.correo);
    connection.callProcedure(request);
    
    
});

router.post('/obras', (req, res) => {
    request=new Request('CREATE_OBRA_ARTE',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
    });

    request.addParameter("NOMBRE_OBRA", TYPES.VarChar, req.body.NOMBRE_DE_OBRA);
    request.addParameter("IMG_SOURCE", TYPES.Text, req.body.IMG_SOURCE);
    request.addParameter("NOMBRE_ARTISTA", TYPES.VarChar, req.body.NOMBRE_ARTISTA);
    request.addParameter("LARGO", TYPES.Int, req.body.LARGO);
    request.addParameter("ANCHO", TYPES.Int, req.body.ANCHO);
    request.addParameter("YEAR", TYPES.Int, req.body.YEAR);
    request.addParameter("FECHA_INICIO", TYPES.DateTime, req.body.FECHA_INICIO);
    request.addParameter("FECHA_FIN", TYPES.DateTime, req.body.FECHA_FIN);
    request.addParameter("TIPO_TECNICA", TYPES.VarChar, req.body.TIPO_DE_TECNICA);
    request.addParameter("TIPO_COLECCION", TYPES.VarChar, req.body.TIPO_COLECCION);
    connection.callProcedure(request);
});

router.put('/obras', (req, res) => {
    request=new Request('UPDATE_OBRA_ARTE',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }

    });
    request.addParameter("ID_OBRA",TYPES.BigInt, req.body.ID_OBRA_DE_ARTE)
    request.addParameter("NOMBRE_OBRA", TYPES.VarChar, req.body.NOMBRE_DE_OBRA);
    request.addParameter("IMG_SOURCE", TYPES.Text, req.body.IMG_SOURCE);
    request.addParameter("NOMBRE_ARTISTA", TYPES.VarChar, req.body.NOMBRE_ARTISTA);
    request.addParameter("LARGO", TYPES.Int, req.body.LARGO);
    request.addParameter("ANCHO", TYPES.Int, req.body.ANCHO);
    request.addParameter("YEAR", TYPES.Int, req.body.YEAR);
    request.addParameter("FECHA_INICIO", TYPES.DateTime, req.body.FECHA_INICIO);
    request.addParameter("FECHA_FIN", TYPES.DateTime, req.body.FECHA_FIN);
    request.addParameter("TIPO_TECNICA", TYPES.VarChar, req.body.TIPO_DE_TECNICA);
    request.addParameter("TIPO_COLECCION", TYPES.VarChar, req.body.TIPO_COLECCION);

    connection.callProcedure(request);
});


//router update cliente
router.put('/updateClients', (req, res) => {
    request=new Request('UPDATE_CLIENTE',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }

    });

    request.addParameter("PNOMBRE", TYPES.VarChar, req.body.NOMBRE);
    request.addParameter("PCORREO", TYPES.VarChar, req.body.CORREO);
    request.addParameter("PPASSWORD", TYPES.VarChar, req.body.PASSWORD);
    request.addParameter("PID_TIPO_CLIENTE", TYPES.Int, req.body.ID_TIPO_CLIENTE);

    connection.callProcedure(request);
});

router.delete('/obras/:id', (req, res) => {
    
    request = new Request('DELETE_OBRA_DE_ARTE', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
        //connection.close();
    });

    console.log(req.params.idProblema);
    request.addParameter('PID_OBRAS_DE_ARTE', TYPES.Int, req.params.id);
    connection.callProcedure(request);
    
})

// router obras
// get todas las obras del year actual

//Modificar obras cuando se puedan agregar y esten funcionando.
router.get('/obrasYear', (req, res) => {
    request = new Request('SP_SELECT_OBRASYEAR', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
    });

    request.on('rows', (paramName, value, metadata) => {
        var r = JSON.stringify(value);
        console.log("Stringify: " + r);
        res.write(r);
        res.end();
    });

    connection.callProcedure(request);
});

// router obras
// get todas las obras del year actual 
router.get('/obraActual', (req, res) => {
    request = new Request('SP_SELECT_OBRA_ACTUAL', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
    });

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object = {};
        object['TIPO_TECNICA'] = result[0].value.toString();
        object['TIPO_COLECCION'] = result[1].value.toString();
        object['NOMBRE_DE_OBRA'] = result[2].value.toString();
        object['NOMBRE_ARTISTA'] = result[3].value.toString();
        object['IMG_SOURCE'] = result[4].value.toString();
        object['LARGO'] = result[5].value.toString();
        object['ANCHO'] = result[6].value.toString();
        object['YEAR'] = result[7].value.toString();
        object['FECHA_INICIO'] = result[8].value.toString();
        object['FECHA_FIN'] = result[9].value.toString();
        object['ID_OBRA_DE_ARTE'] = result[10].value.toString();
        jsonArray.push(object); 
    });

    request.on("requestCompleted", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        //console.log(jsonArray);
        res.end();
    });

    connection.callProcedure(request);
});
/*
********************************************************************************************************
*  Region of: Client
*  Versión 0.1
*  Autor: Steven Pacheco Portuguez
************************************************
********************************************************
*/

router.get('/clients', (req, res) => {

    request=new Request('SELECT_ADMIN',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        } 
    });

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['NOMBRE']=result[0].value.toString();
        object['CORREO']=result[1].value.toString();
        object['PASSWORD']=result[3].value.toString();
        object['ID_TIPO_CLIENTE']=result[2].value.toString();
        jsonArray.push(object); 
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
      });
    connection.callProcedure(request);
})

router.get('/logIn/:username/:password', (req, res) => {
    request = new Request('SP_LogIn', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
        //connection.close();
    });

    request.addParameter('correo', TYPES.VarChar, req.params.username);
    request.addParameter('password', TYPES.VarChar, req.params.password);
    request.addOutputParameter('resultado', TYPES.Int);

    request.on('returnValue', (paramName, value, metadata) => {
        console.log("@resultado: " + value);
        console.log("@resultado: " + value.toString());

        var r = JSON.stringify(value);
        console.log("Stringify: " + r);
        res.write(r);
        res.end();
    });

    connection.callProcedure(request);
});
module.exports = router

// get CLIENTE por id

router.get('/client/:correo', (req, res) => {
    request = new Request('SELECT_CLIENTE_ID', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
        //connection.close();
    });

    request.addParameter('CORREO', TYPES.VarChar, req.params.correo);

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['NOMBRE']=result[0].value.toString();
        object['CORREO']=result[1].value.toString();
        object['PASSWORD']=result[2].value.toString();
        object['ID_TIPO_CLIENTE']=result[3].value.toString();
        jsonArray.push(object);    
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
      });

    connection.callProcedure(request);
});



router.post('/clients', (req, res) => {
    request=new Request('CREATE_CLIENTE',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }

    });
    request.addParameter("PNOMBRE", TYPES.VarChar, req.body.NOMBRE);
    request.addParameter("PCORREO", TYPES.VarChar, req.body.CORREO);
    request.addParameter("PPASSWORD", TYPES.VarChar, req.body.PASSWORD);
    request.addParameter("PID_TIPO_CLIENTE", TYPES.Int, req.body.ID_TIPO_CLIENTE);

    connection.callProcedure(request);
});

// router obras
// get todas las obras

router.get('/obras', (req, res) => {
    request = new Request('SELECT_OBRAS', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
    });

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object = {};
        object['TIPO_TECNICA'] = result[0].value.toString();
        object['TIPO_COLECCION'] = result[1].value.toString();
        object['NOMBRE_DE_OBRA'] = result[2].value.toString();
        object['NOMBRE_ARTISTA'] = result[3].value.toString();
        object['IMG_SOURCE'] = result[4].value.toString();
        object['LARGO'] = result[5].value.toString();
        object['ANCHO'] = result[6].value.toString();
        object['YEAR'] = result[7].value.toString();
        object['FECHA_INICIO'] = result[8].value.toString();
        object['FECHA_FIN'] = result[9].value.toString();
        object['ID_OBRA_DE_ARTE'] = result[10].value.toString();
        jsonArray.push(object); 
    });

    request.on("requestCompleted", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        //console.log(jsonArray);
        res.end();
    });

    connection.callProcedure(request);
});

// router get obra con id
router.get('/obras/:id', (req, res) => {

    let sql = "SELECT * FROM  OBRA_DE_ARTE WHERE ID_OBRA_DE_ARTE = " + req.params.id;
    console.log(sql)
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de obtener datos de la bd");
            throw err;
        }
        var r = JSON.stringify(result);
        res.write(r);
        res.end();
    });
})

/*
********************************************************************************************************
*  Region of: Problema
*  Versión 0.1
*  Autor: Steven Pacheco Portuguez
********************************************************************************************************
*/

router.get('/problemas', (req, res) => {

    let sql = "CALL SELECT_PROBLEM_DATE();";

    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de obtener datos de la bd");
            throw err;
        }
        var r = JSON.stringify(result[0]);
        res.write(r);
        res.end();
    });
})

router.post('/problem', (req, res) => {


    request=new Request('CREATE_PROBLEMA',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }

    });
    request.addParameter("PNOMBRE", TYPES.VarChar, req.body.NOMBRE);
    request.addParameter("PLATEX_SOURCE_PROBLEMA", TYPES.Text, req.body.LATEX_SOURCE_PROBLEMA);
    request.addParameter("PID_TIPO_PROBLEMA", TYPES.Int, 1);
    request.addParameter("PLATEX_SOURCE_SOLUCION", TYPES.Text, req.body.LATEX_SOURCE_SOLUCION);
    request.addParameter("PFECHA_LIBERACION_PROBLEMA",TYPES.DateTime,req.body.FECHA_LIBERACION_PROBLEMA);
    request.addParameter("PFECHA_LIBERACION_SOLUCION",TYPES.DateTime,req.body.FECHA_LIBERACION_SOLUCION);

    connection.callProcedure(request);
});



router.get('/singleProblem', (req, res) => {

    request=new Request('SELECT_PROBLEM',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
        console.log(rowCount);
        rc=rowCount;
        
    });

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['ID_PROBLEMA']=result[0].value.toString();
        object['NOMBRE']=result[1].value.toString();
        object['LATEX_SOURCE_PROBLEMA']=result[2].value.toString();
        object['TIPO_PROBLEMA']=result[3].value.toString();
        object['LATEX_SOURCE_SOLUCION']=result[4].value.toString();
        object['FECHA_LIBERACION_PROBLEMA']=result[5].value
        object['FECHA_LIBERACION_SOLUCION']=result[6].value
        jsonArray.push(object);    
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
      });
    connection.callProcedure(request);

});

router.get('/getProblema/:id', (req, res) => {

    request=new Request('SELECT_PROBLEM_BY_ID',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
        console.log(rowCount);
        rc=rowCount;
        
    });
    request.addParameter("PID", TYPES.BigInt, req.params.id);

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['ID_PROBLEMA']=result[0].value.toString();
        object['NOMBRE']=result[1].value.toString();
        object['LATEX_SOURCE_PROBLEMA']=result[2].value.toString();
        object['TIPO_PROBLEMA']=result[3].value.toString();
        object['LATEX_SOURCE_SOLUCION']=result[4].value.toString();
        object['FECHA_LIBERACION_PROBLEMA']=result[5].value
        object['FECHA_LIBERACION_SOLUCION']=result[6].value
        jsonArray.push(object);    
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
      });
    connection.callProcedure(request);

});

router.get('/problemaActual', (req, res) => {

    request=new Request('SELECT_PROBLEMA_ACTUAL',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
        console.log(rowCount);
        rc=rowCount;
        
    });

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['ID_PROBLEMA']=result[0].value.toString();
        object['NOMBRE']=result[1].value.toString();
        object['LATEX_SOURCE_PROBLEMA']=result[2].value.toString();
        object['TIPO_PROBLEMA']=result[3].value.toString();
        object['LATEX_SOURCE_SOLUCION']=result[4].value.toString();
        object['FECHA_LIBERACION_PROBLEMA']=result[5].value
        object['FECHA_LIBERACION_SOLUCION']=result[6].value
        jsonArray.push(object);    
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
      });
    connection.callProcedure(request);
});


router.delete('/problemas/:idProblema', (req, res) => {
    
    request = new Request('DELETE_PROBLEMA', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
        //connection.close();
    });

    console.log(req.params.idProblema);
    request.addParameter('PID_PROBLEMA', TYPES.Int, req.params.idProblema);
    connection.callProcedure(request);
    
})

router.put('/singleProblem', (req, res) => {
    request=new Request('UPDATE_PROBLEMA',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
    });
    console.log(req.body.FECHA_LIBERACION_PROBLEMA);
    console.log(req.body.FECHA_LIBERACION_SOLUCION);
    request.addParameter("PID_PROBLEMA", TYPES.Int, req.body.ID_PROBLEMA);
    request.addParameter("PNOMBRE", TYPES.VarChar, req.body.NOMBRE);
    request.addParameter("PLATEX_SOURCE_PROBLEMA ", TYPES.Text, req.body.LATEX_SOURCE_PROBLEMA);
    request.addParameter("PFECHA_LIBERACION_PROBLEMA", TYPES.DateTime, req.body.FECHA_LIBERACION_PROBLEMA);
    request.addParameter("PFECHA_LIBERACION_SOLUCION", TYPES.DateTime, req.body.FECHA_LIBERACION_SOLUCION);
    request.addParameter("TIPO_PROBLEMA", TYPES.VarChar, req.body.TIPO_PROBLEMA);
    request.addParameter("PLATEX_SOURCE_SOLUCION", TYPES.Text, req.body.LATEX_SOURCE_SOLUCION);
    connection.callProcedure(request);
    res.send('200');
})

router.get('/singleProblem/:NOMBRE', (req, res) => {
    request = new Request('SELECT_PROBLEM_NOMBRE', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
        //connection.close();
    });

    request.addParameter('PNOMBRE', TYPES.VarChar, req.params.NOMBRE);

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['ID_PROBLEMA']=result[0].value.toString();
        object['NOMBRE']=result[1].value.toString();
        object['LATEX_SOURCE_PROBLEMA']=result[2].value.toString();
        object['TIPO_PROBLEMA']=result[3].value.toString();
        object['LATEX_SOURCE_SOLUCION']=result[4].value.toString();
        object['FECHA_LIBERACION_PROBLEMA']=result[5].value
        object['FECHA_LIBERACION_SOLUCION']=result[6].value
        jsonArray.push(object);    
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
      });
    connection.callProcedure(request);
});

/*router.get('/singleProblem/:NOMBRE', (req, res) => {
    
    let sql = "CALL SELECT_PROBLEM_NOMBRE('"+req.params.NOMBRE+"');";
    console.log(sql);
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de obtener datos de la bd"); 
            throw err;
        }
        var r = JSON.stringify(result[0]); 
        res.write(r);
    });
            res.end();
})*/

router.post('/problemDate', (req, res) => {

    let sql = "CALL CREATE_PROBLEM_DATE(" +
               "'" + req.body.NOMBRE + "' ," +
               "'" + req.body.FECHA_LIBERACION_PROBLEMA + "' ," +
               "'" + req.body.FECHA_LIBERACION_SOLUCION + "'"+
                ");";
    console.log(sql);
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de insertar los datos en la bd");
            throw err;
        }
    });

    res.send('200');
})

router.put('/problemDate', (req, res) => {
    
    let sql = "CALL UPDATE_PROBLEMA_DATE(" +
                req.body.ID_PROBLEMA_FECHA_LIBERACION + 
                ",'" + req.body.FECHA_LIBERACION_PROBLEMA + "'" +
                ",'" + req.body.FECHA_LIBERACION_SOLUCION + "'" +
                ");";

    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de actualizar los datos en la bd"); 
            throw err;
        }
    });

    res.send('200');
})

router.get('/problemDate/:NOMBRE', (req, res) => {
    
    let sql = "CALL SELECT_PROBLEM_DATE_BY_NAME('"+req.params.NOMBRE+"');";
    console.log(sql);
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de obtener datos de la bd"); 
            throw err;
        }
        var r = JSON.stringify(result[0]);  
        res.write(r);
        res.end();
    });
})

router.get('/problemDateByDate', (req, res) => {
    request=new Request('SELECT_PROBLEM_DATE_BY_DATE',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
        console.log(rowCount);
        rc=rowCount;
        
    });

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['ID_PROBLEMA']=result[0].value.toString();
        object['NOMBRE']=result[1].value.toString();
        object['LATEX_SOURCE_PROBLEMA']=result[2].value.toString();
        object['TIPO_PROBLEMA']=result[3].value.toString();
        object['LATEX_SOURCE_SOLUCION']=result[4].value.toString();
        object['FECHA_LIBERACION_PROBLEMA']=result[5].value
        object['FECHA_LIBERACION_SOLUCION']=result[6].value
        jsonArray.push(object);    
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
      });
    connection.callProcedure(request);
    
})



router.get('/problemaConFechas/:NOMBRE', (req, res) => {
    
    let sql = "CALL SELECT_PROBLEM_DATE_ALL_BY_NAME('"+req.params.NOMBRE+"');";
    console.log(sql);
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de obtener datos de la bd"); 
            throw err;
        }
        var r = JSON.stringify(result[0]); 
        res.write(r);
        res.end();
    });
})

router.get('/obrasDatee/:id', (req, res) => {
    
    let sql = "CALL SELECT_OBRA_BY_DATE('"+req.params.id+"');";
    console.log(sql)
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de obtener datos de la bd"); 
            throw err;
        }
        var r = JSON.stringify(result[0]); 
        res.write(r);
        res.end();
    });
})
/*
********************************************************************************************************
*  Region of: Tipo problema
*  Versión 0.1
*  Autor: Steven Pacheco Portuguez
********************************************************************************************************
*/
router.get('/getAnotaciones', (req, res) => {

    request=new Request('SELECT_ANOTACIONES',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
    });

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['ANOTACION']=result[0].value.toString();
        object['NOMBRE']=result[1].value.toString();
        object['FECHA_ANOTACION']=result[2].value.toString();
        object['NOMBREPROBLEMA']=result[3].value.toString();
        object['ID_ANOTACION']=result[4].value.toString();
        jsonArray.push(object);
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
      });
    connection.callProcedure(request);
});


router.get('/getComentariosProblema/:id', (req, res) => {

    request=new Request('SELECT_COMENTARIOS',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
    });
    request.addParameter("PID_PROBLEMA",TYPES.BigInt,req.params.id)
    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['COMENTARIO']=result[0].value.toString();
        object['CLIENTE']=result[1].value.toString();
        jsonArray.push(object);
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        console.log(req.param.id);
        console.log('************');
        console.log(jsonArray);
        res.end();
      });
    connection.callProcedure(request);
});

router.put('/updateAnotacionLeida', (req, res) => {
    request = new Request('UPDATE_ANOTACION_LEIDA',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
    });

    request.addParameter("idAnotacion", TYPES.Int, req.body.ID_ANOTACION);

    connection.callProcedure(request);
});

router.put('/updateSugerenciaLeida', (req, res) => {
    request = new Request('UPDATE_SUGERENCIA_LEIDA',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
    });

    request.addParameter("idSugerencia", TYPES.Int, req.body.ID_SUGERENCIA);

    connection.callProcedure(request);
});

router.get('/anotaciones/:idClient', (req, res) => {
    
    let sql = "CALL SELECT_ANOTACION_BY_USER("+req.params.idClient+");";
    console.log(sql);
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de obtener datos de la bd"); 
            throw err;
        }
        var r = JSON.stringify(result[0]); 
        res.write(r);
        res.end();
    });
})

router.post('/anotaciones', (req, res) => {

    let sql = "CALL CREATE_ANOTACION(" +
               "'" + req.body.ANOTACION + "' ," +
               req.body.ID_CLIENTE+
               ");";
    console.log(sql);
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de insertar los datos en la bd");
            throw err;
        }
    });

    res.send('200');
})

router.delete('/anotaciones/:id', (req, res) => {

    let sql = "CALL DELETE_ANOTACION(" +
        req.params.id +
        ");";
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de actualizar los datos en la bd");
            throw err;
        }
    });
    res.send('200');
})

router.get('/tipoProblema', (req, res) => {

    request=new Request('SELECT_TIPO_PROBLEMA',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        } 
    });

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['ID_TIPO_PROBLEMA']=result[0].value.toString();
        object['TIPO_PROBLEMA']=result[1].value.toString();
        object['DESCRIPCION']=result[2].value.toString();
        jsonArray.push(object);    
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
      });
    connection.callProcedure(request);

});

/*
********************************************************************************************************
*  Region of: Tipo coleccion
*  Versión 0.1
*  Autor: Fabri
********************************************************************************************************
*/

router.get('/opcionesObras', (req, res) => {

    var jsonArray = [];
    request = new Request('SELECT_TIPO_COLECCION', (err, rowCount) => {
        if(err){
            console.log(err);
        }else{
            console.log(rowCount + " row count");
        }
    });

    var colecciones = [];
    request.on('row', (result,rowCount)=>{
        var object = {};
        object['DESCRIPCION'] = result[0].value.toString();
        colecciones.push(object); 
    });

    request.on("requestCompleted", () => {
        request = new Request('SELECT_TIPO_TECNICA', (err, rowCount) => {
            if(err){
                console.log(err);
            }else{
                console.log(rowCount + " row count");
            }
        });
    
        var tecnicas = [];
        request.on('row', (result,rowCount)=>{
            var object = {};
            object['DESCRIPCION'] = result[0].value.toString();
            tecnicas.push(object);
        });

        jsonArray.push(colecciones);
        jsonArray.push(tecnicas);
      
        request.on("doneInProc", (rowCount, more, rows) => {
            res.write(JSON.stringify(jsonArray));
            console.log(jsonArray);
            res.end();
        });

        connection.callProcedure(request);
    });
    
    connection.callProcedure(request);
});

router.get('/tipoColeccion/:id', (req, res) => {

    let sql = "select * from calendario.tipo_coleccion where ID_TIPO_COLECCION =" + req.params.id;

    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de obtener datos de la bd");
            throw err;
        }
        var r = JSON.stringify(result);
        res.write(r);
        res.end();
    });
})

router.post('/tipoColeccion', (req, res) => {

    let sql = "INSERT INTO calendario.tipo_coleccion VALUES (default," +
               "'" + req.body.COLECCION + "'" +
                ");";
    console.log(sql)
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de insertar los datos en la bd");
            throw err;
        }
    });

    res.send('200');
})

/*
********************************************************************************************************
*  Region of: Tipo tecnica
*  Versión 0.1
*  Autor: Fabri
********************************************************************************************************
*/

router.get('/tipoTecnica/:id', (req, res) => {

    let sql = "select * from calendario.tipo_de_tecnica where ID_TIPO_DE_TECNICA =" + req.params.id;

    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de obtener datos de la bd");
            throw err;
        }
        var r = JSON.stringify(result);
        res.write(r);
        res.end();
    });
})

router.post('/tipoTecnica', (req, res) => {

    let sql = "INSERT INTO calendario.tipo_de_tecnica VALUES(default," +
               "'" + req.body.TIPO_TECNICA + "'" +
                ");";

    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log("ERROR al momento de insertar los datos en la bd");
            throw err;
        }
    });

    res.send('200');
})

router.get('/getSugerencias', (req, res) => {

    request=new Request('SELECT_SUGERENCIAS',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }
        console.log(rowCount);
        rc=rowCount;
        
    });

    var jsonArray=[];
    request.on('row', (result,rowCount)=>{
        var object={}
        object['ID_SUGERENCIA']=result[0].value.toString();
        object['PROBLEMA_SUGERIDO']=result[1].value.toString();
        object['CORREO']=result[2].value.toString();
        object['FECHA']=result[3].value.toString();
        jsonArray.push(object);    
    });

    request.on("doneInProc", (rowCount, more, rows) => {
        res.write(JSON.stringify(jsonArray));
        res.end();
      });
    connection.callProcedure(request);

});

router.post('/createSugerencia', (req, res) => {


    request=new Request('CREATE_SUGERENCIA',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }

    });
    console.log(req.body.PROBLEMA_SUGERIDO)
    console.log(req.body.CORREO)
    request.addParameter("PPROBLEMA", TYPES.Text, req.body.PROBLEMA_SUGERIDO);
    request.addParameter("PCLIENTE", TYPES.VarChar, req.body.CORREO);
    connection.callProcedure(request);
});

router.post('/crearComentario', (req, res) => {


    request=new Request('CREATE_COMENTARIO',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }

    });
    console.log(req.body.COMENTARIO);
    console.log(req.body.CLIENTE);
    console.log(req.body.ID_PROBLEMA);
    request.addParameter("PCOMENTARIO", TYPES.VarChar, req.body.COMENTARIO);
    request.addParameter("PCLIENTE", TYPES.VarChar, req.body.CLIENTE);
    request.addParameter("PID_PROBLEMA", TYPES.VarChar, req.body.ID_PROBLEMA);
    connection.callProcedure(request);
});

router.post('/createAnotacion', (req, res) => {

    request=new Request('CREATE_ANOTACION',(err, rowCount, rows)=>{
        if(err){
            console.log(err);
        }

    });
    request.addParameter("PANOTACION", TYPES.VarChar, req.body.ANOTACION);
    request.addParameter("PCLIENTE", TYPES.VarChar, req.body.ID_CLIENTE);
    request.addParameter("PID_PROBLEMA", TYPES.VarChar, req.body.ID_PROBLEMA);
    
    connection.callProcedure(request);
});


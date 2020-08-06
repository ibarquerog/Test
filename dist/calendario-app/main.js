(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/LoginCredentials.ts":
/*!*************************************!*\
  !*** ./src/app/LoginCredentials.ts ***!
  \*************************************/
/*! exports provided: LoginCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCredentials", function() { return LoginCredentials; });
var LoginCredentials = /** @class */ (function () {
    function LoginCredentials() {
    }
    LoginCredentials.logOut = function () {
        this.usuario = "";
        this.tipoUsuario = "";
    };
    LoginCredentials.usuario = "";
    LoginCredentials.tipoUsuario = "";
    return LoginCredentials;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"container\" style=\"margin-top:11px; min-height: 78vh;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 text-center\">\r\n                <h2 class=\"section-heading\">Línea de tiempo</h2>\r\n                <h3 class=\"section-subheading text-muted\">Visualización de obras por mes</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <ul class=\"list-group timeline\" *ngFor=\"let obra of obras; let i = index; let even = even;\">\r\n                    <li class=\"list-group-item\" *ngIf=\"even\">\r\n                        <div class=\"timeline-image\">\r\n                            <img class=\"rounded-circle img-fluid\" src=\"{{obras[i].IMG_SOURCE}}\" style=\"width: 100%; height: 100%;\">\r\n                        </div> \r\n                        <div class=\"timeline-panel\"> \r\n                            <div class=\"timeline-heading\">\r\n                                <h4>{{obras[i].NOMBRE_DE_OBRA}}</h4>\r\n                                <h5>{{obras[i].NOMBRE_ARTISTA}}</h5>\r\n                                <p>Desde: {{obras[i].FECHA_INICIO.substr(0,10)}}</p>\r\n                                <p>Hasta: {{obras[i].FECHA_FIN.substr(0,10)}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item timeline-inverted\" *ngIf=\"even && obras[i+1]\">\r\n                        <div class=\"timeline-image\">\r\n                            <img class=\"rounded-circle img-fluid\"\r\n                                src=\"{{obras[i+1].IMG_SOURCE}}\" style=\"width: 100%; height: 100%;\">\r\n                        </div>\r\n                        <div class=\"timeline-panel\">\r\n                            <div class=\"timeline-heading\">\r\n                                <h4>{{obras[i+1].NOMBRE_DE_OBRA}}</h4>\r\n                                <h5>{{obras[i+1].NOMBRE_ARTISTA}}</h5>\r\n                                <p>Desde: {{obras[i+1].FECHA_INICIO.substr(0,10)}}</p>\r\n                                <p>Hasta: {{obras[i+1].FECHA_FIN.substr(0,10)}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _obras_obras_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../obras/obras.service */ "./src/app/obras/obras.service.ts");






var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, appComponenet, obraService) {
        this.router = router;
        this.appComponenet = appComponenet;
        this.obraService = obraService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        console.log("init");
        this.cargarObras();
        this.appComponenet.setLogIn(1);
    };
    AdminComponent.prototype.onPopState = function (event) {
        this.appComponenet.setLogIn(3);
    };
    AdminComponent.prototype.cargarObras = function () {
        var _this = this;
        console.log("cargarObras");
        this.obraService.getObrasYear().then(function (obras) { _this.obras = obras, console.log(obras); });
        console.log(this.obras);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AdminComponent.prototype, "onPopState", null);
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _obras_obras_service__WEBPACK_IMPORTED_MODULE_4__["ObraService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/anotaciones/anotaciones.component.css":
/*!*******************************************************!*\
  !*** ./src/app/anotaciones/anotaciones.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Style the list (remove margins and bullets, etc) */\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n/* Style the list items */\r\n\r\nul li {\r\n  border: 1px solid #ddd;\r\n  margin-top: -1px; /* Prevent double borders */\r\n  background-color: #f6f6f6;\r\n  padding: 12px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: black;\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n/* Add a light grey background color on hover */\r\n\r\nul li:hover {\r\n  background-color: #eee;\r\n}\r\n\r\ns\r\n/* Style the close button (span) */\r\n.close {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0%;\r\n  padding: 12px 16px;\r\n  -webkit-transform: translate(0%, -50%);\r\n          transform: translate(0%, -50%);\r\n}\r\n\r\n.close:hover {background: #bbb;}\r\n\r\n.popup {\r\n  margin: 70px auto;\r\n  padding: 20px;\r\n  background: #f2f2f2;\r\n  border-radius: 5px;\r\n  width: 30%;\r\n  position: relative;\r\n  transition: all 5s ease-in-out;\r\n}\r\n\r\n.popup p {\r\n  margin-top: 0;\r\n  color: #333;\r\n  font-family: Tahoma, Arial, sans-serif;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5vdGFjaW9uZXMvYW5vdGFjaW9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxxREFBcUQ7O0FBQ3JEO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUEseUJBQXlCOztBQUN6QjtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBRSwyQkFBMkI7RUFDN0MseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBLCtDQUErQzs7QUFDL0M7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7OztFQUdFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsc0NBQThCO1VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQSxjQUFjLGdCQUFnQixDQUFDOztBQUUvQjtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvYW5vdGFjaW9uZXMvYW5vdGFjaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBsaXN0IChyZW1vdmUgbWFyZ2lucyBhbmQgYnVsbGV0cywgZXRjKSAqL1xyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgbGlzdCBpdGVtcyAqL1xyXG51bCBsaSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBtYXJnaW4tdG9wOiAtMXB4OyAvKiBQcmV2ZW50IGRvdWJsZSBib3JkZXJzICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyogQWRkIGEgbGlnaHQgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXHJcbnVsIGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcbnNcclxuLyogU3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAoc3BhbikgKi9cclxuLmNsb3NlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIge2JhY2tncm91bmQ6ICNiYmI7fVxyXG5cclxuLnBvcHVwIHtcclxuICBtYXJnaW46IDcwcHggYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnBvcHVwIHAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/anotaciones/anotaciones.component.html":
/*!********************************************************!*\
  !*** ./src/app/anotaciones/anotaciones.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Anotaciones</title>\r\n</head>\r\n\r\n<body>\r\n  <main class=\"page shopping-cart-page\">\r\n    <section class=\"clean-block clean-cart dark\" style=\" min-height: 78vh;\">\r\n      <div class=\"container\" style=\"margin-top:8px;\">\r\n            <h2 class=\"text-info\">Anotaciones</h2>\r\n            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n              <thead>\r\n                  <tr>\r\n                      <th>Usuario</th>\r\n                      <th>Problema</th>\r\n                      <th>Anotación</th>\r\n                      <th>Leer</th>\r\n                  </tr>\r\n              </thead>\r\n              <tbody *ngIf=\"anotaciones?.length != 0\">\r\n                  <tr *ngFor= \"let a of anotaciones\">  \r\n                      <td>{{a.NOMBRE}}</td>\r\n                      <td>{{a.NOMBREPROBLEMA}}</td>\r\n                      <td>{{a.ANOTACION}}</td>\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"openModalDialog(a)\">Leído</button>\r\n                          <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\r\n                              <div class=\"popup\" [ngStyle]=\"{'display':display}\">\r\n                                  <p>¿Está seguro de que desea marcar como leído la anotación?</p>\r\n                                  <button type=\"button\" class=\"btn_si\" (click)=\"marcarLeida(a)\">Si</button>\r\n                                  <button type=\"button\" class=\"btn_no\" (click)=\"closeModalDialog()\">No</button>\r\n                              </div>\r\n                          </div>\r\n                      </td>\r\n                  </tr>\r\n              </tbody>\r\n              <tbody *ngIf=\"anotaciones?.length == 0\">\r\n                  <tr>\r\n                      <td>No hay anotaciones</td>\r\n                  </tr>\r\n              </tbody>\r\n            </table>\r\n      </div>\r\n    </section>\r\n  </main>\r\n</body>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/anotaciones/anotaciones.component.ts":
/*!******************************************************!*\
  !*** ./src/app/anotaciones/anotaciones.component.ts ***!
  \******************************************************/
/*! exports provided: AnotacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnotacionesComponent", function() { return AnotacionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _anotaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anotaciones.service */ "./src/app/anotaciones/anotaciones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _anotaciones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anotaciones */ "./src/app/anotaciones/anotaciones.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");







var AnotacionesComponent = /** @class */ (function () {
    function AnotacionesComponent(route, router, anotacionesService) {
        this.route = route;
        this.router = router;
        this.anotacionesService = anotacionesService;
        this.anotaciones = [];
        this.valid = false;
        this.display = 'none';
        this.eliminarComentario = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    AnotacionesComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            language: {
                "processing": "Procesando...",
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "emptyTable": "Ningún dato disponible en esta tabla",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "infoPostFix": "",
                "search": "Buscar:",
                "url": "",
                "loadingRecords": "Cargando...",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "aria": {
                    "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        };
        this.getAnotaciones();
    };
    AnotacionesComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    AnotacionesComponent.prototype.marcarLeida = function () {
        var _this = this;
        for (var i = 0; i < this.anotaciones.length; i++) {
            if (this.anotaciones[i].ID_ANOTACION == this.anotacionLeer.ID_ANOTACION) {
                this.anotaciones.splice(i, 1);
                break;
            }
        }
        this.anotacionesService.updateAnotacionLeer(this.anotacionLeer)
            .then(function () {
            _this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }).catch(function (err) { return console.log('Err Anotaciones: ' + err); });
        this.closeModalDialog();
    };
    AnotacionesComponent.prototype.add = function (e) {
        e.preventDefault();
        var comentario = e.target.elements[0].value;
        if (comentario != "") {
            this.valid = true;
        }
        if (this.valid) {
            var anotacion = new _anotaciones__WEBPACK_IMPORTED_MODULE_4__["Anotaciones"]();
            anotacion.ANOTACION = comentario;
            var id = +this.idClient;
            //anotacion.ID_CLIENTE = id
            this.createAnotacion(anotacion);
            this.getAnotaciones();
            e.target.elements[0].value = "";
        }
    };
    AnotacionesComponent.prototype.getAnotaciones = function () {
        var _this = this;
        this.anotacionesService.getAnotaciones().subscribe(function (anotaciones) {
            _this.anotaciones = anotaciones,
                _this.dtTrigger.next();
        });
    };
    AnotacionesComponent.prototype.createAnotacion = function (anotracion) {
        this.anotacionesService.createAnotacion(anotracion);
    };
    //Model implementation
    AnotacionesComponent.prototype.openModalDialog = function (item) {
        this.anotacionLeer = item;
        this.display = 'block';
    };
    AnotacionesComponent.prototype.closeModalDialog = function () {
        this.display = 'none';
    };
    AnotacionesComponent.prototype.deleteComentario = function () {
        //this.anotacionesService.deleteAnotacion(this.anotacionEliminar.ID_ANOTACION);
        this.getAnotaciones();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], AnotacionesComponent.prototype, "datatableElement", void 0);
    AnotacionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anotaciones',
            template: __webpack_require__(/*! ./anotaciones.component.html */ "./src/app/anotaciones/anotaciones.component.html"),
            styles: [__webpack_require__(/*! ./anotaciones.component.css */ "./src/app/anotaciones/anotaciones.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _anotaciones_service__WEBPACK_IMPORTED_MODULE_2__["AnotacionesService"]])
    ], AnotacionesComponent);
    return AnotacionesComponent;
}());



/***/ }),

/***/ "./src/app/anotaciones/anotaciones.service.ts":
/*!****************************************************!*\
  !*** ./src/app/anotaciones/anotaciones.service.ts ***!
  \****************************************************/
/*! exports provided: AnotacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnotacionesService", function() { return AnotacionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var AnotacionesService = /** @class */ (function () {
    function AnotacionesService(_http) {
        this._http = _http;
    }
    AnotacionesService.prototype.getAnotaciones = function () {
        return this._http.get('/getAnotaciones')
            .map(function (anotaciones) { return anotaciones.json(); });
    };
    AnotacionesService.prototype.updateAnotacionLeer = function (anotacion) {
        console.log('Anotacion: ' + anotacion.ID_ANOTACION);
        return this._http.put('/updateAnotacionLeida', anotacion)
            .map(function (data) { return data.json(); }).toPromise();
    };
    AnotacionesService.prototype.getAnotacionByUser = function (idClient) {
        return this._http.get('/anotaciones/' + idClient)
            .map(function (data) { return data.json(); });
    };
    AnotacionesService.prototype.createAnotacion = function (anotacion) {
        return this._http.post('/createAnotacion', anotacion)
            .map(function (data) { return data.json(); }).toPromise();
    };
    AnotacionesService.prototype.deleteAnotacion = function (id) {
        return this._http.delete('/anotaciones/' + id)
            .map(function (data) { return data.json(); }).toPromise();
    };
    AnotacionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AnotacionesService);
    return AnotacionesService;
}());



/***/ }),

/***/ "./src/app/anotaciones/anotaciones.ts":
/*!********************************************!*\
  !*** ./src/app/anotaciones/anotaciones.ts ***!
  \********************************************/
/*! exports provided: Anotaciones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anotaciones", function() { return Anotaciones; });
var Anotaciones = /** @class */ (function () {
    function Anotaciones(ID_ANOTACION, ANOTACION, ID_PROBLEMA, ID_CLIENTE, NOMBREPROBLEMA, NOMBRE) {
        if (ID_ANOTACION === void 0) { ID_ANOTACION = ""; }
        if (ANOTACION === void 0) { ANOTACION = ""; }
        if (ID_PROBLEMA === void 0) { ID_PROBLEMA = ""; }
        if (ID_CLIENTE === void 0) { ID_CLIENTE = ""; }
        if (NOMBREPROBLEMA === void 0) { NOMBREPROBLEMA = ""; }
        if (NOMBRE === void 0) { NOMBRE = ""; }
        this.ID_ANOTACION = ID_ANOTACION;
        this.ANOTACION = ANOTACION;
        this.ID_PROBLEMA = ID_PROBLEMA;
        this.ID_CLIENTE = ID_CLIENTE;
        this.NOMBREPROBLEMA = NOMBREPROBLEMA;
        this.NOMBRE = NOMBRE;
    }
    return Anotaciones;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sesion_sesion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sesion/sesion.component */ "./src/app/sesion/sesion.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _configuracion_usuario_configuracion_usuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracion-usuario/configuracion-usuario.component */ "./src/app/configuracion-usuario/configuracion-usuario.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/registrar/registrar.component.ts");
/* harmony import */ var _obras_obras_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./obras/obras.component */ "./src/app/obras/obras.component.ts");
/* harmony import */ var _obras_obras_new_obras_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./obras/obras-new/obras-new.component */ "./src/app/obras/obras-new/obras-new.component.ts");
/* harmony import */ var _problema_problema_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./problema/problema.component */ "./src/app/problema/problema.component.ts");
/* harmony import */ var _problema_ver_problema_ver_problema_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./problema/ver-problema/ver-problema.component */ "./src/app/problema/ver-problema/ver-problema.component.ts");
/* harmony import */ var _problema_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./problema/new-problem/new-problem.component */ "./src/app/problema/new-problem/new-problem.component.ts");
/* harmony import */ var _obras_obras_edit_obras_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./obras/obras-edit/obras-edit.component */ "./src/app/obras/obras-edit/obras-edit.component.ts");
/* harmony import */ var _configuracion_usuario_new_administrador_new_administrador_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./configuracion-usuario/new-administrador/new-administrador.component */ "./src/app/configuracion-usuario/new-administrador/new-administrador.component.ts");
/* harmony import */ var _configuracion_usuario_edit_administrador_edit_administrador_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./configuracion-usuario/edit-administrador/edit-administrador.component */ "./src/app/configuracion-usuario/edit-administrador/edit-administrador.component.ts");
/* harmony import */ var _problema_tabla_problema_tabla_problema_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./problema/tabla-problema/tabla-problema.component */ "./src/app/problema/tabla-problema/tabla-problema.component.ts");
/* harmony import */ var _user_ver_problema_user_ver_problema_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/ver-problema-user/ver-problema-user.component */ "./src/app/user/ver-problema-user/ver-problema-user.component.ts");
/* harmony import */ var _user_soluciones_soluciones_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/soluciones/soluciones.component */ "./src/app/user/soluciones/soluciones.component.ts");
/* harmony import */ var _user_filtro_filtro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/filtro/filtro.component */ "./src/app/user/filtro/filtro.component.ts");
/* harmony import */ var _user_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/calendario/calendario.component */ "./src/app/user/calendario/calendario.component.ts");
/* harmony import */ var _anotaciones_anotaciones_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./anotaciones/anotaciones.component */ "./src/app/anotaciones/anotaciones.component.ts");
/* harmony import */ var _sugerencias_sugerencias_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sugerencias/sugerencias.component */ "./src/app/sugerencias/sugerencias.component.ts");
/* harmony import */ var _user_enviar_sugerencia_enviar_sugerencia_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/enviar-sugerencia/enviar-sugerencia.component */ "./src/app/user/enviar-sugerencia/enviar-sugerencia.component.ts");

























var routes = [
    { path: '', component: _sesion_sesion_component__WEBPACK_IMPORTED_MODULE_3__["SesionComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'login', component: _sesion_sesion_component__WEBPACK_IMPORTED_MODULE_3__["SesionComponent"] },
    { path: 'obrasArt', component: _obras_obras_component__WEBPACK_IMPORTED_MODULE_9__["ObrasComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: 'obras-new', component: _obras_obras_new_obras_new_component__WEBPACK_IMPORTED_MODULE_10__["ObrasNewComponent"] },
    { path: 'obras-edit/:id', component: _obras_obras_edit_obras_edit_component__WEBPACK_IMPORTED_MODULE_14__["ObrasEditComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: 'config', component: _configuracion_usuario_configuracion_usuario_component__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionUsuarioComponent"] },
    { path: 'problem', component: _problema_problema_component__WEBPACK_IMPORTED_MODULE_11__["ProblemaComponent"] },
    { path: 'registro', component: _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_8__["RegistrarComponent"] },
    { path: 'verProblema/:nombre', component: _problema_ver_problema_ver_problema_component__WEBPACK_IMPORTED_MODULE_12__["VerProblemaComponent"] },
    { path: 'newProblem', component: _problema_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_13__["NewProblemComponent"] },
    { path: 'newAdministrador', component: _configuracion_usuario_new_administrador_new_administrador_component__WEBPACK_IMPORTED_MODULE_15__["NewAdministradorComponent"] },
    { path: 'editAdministrador/:id', component: _configuracion_usuario_edit_administrador_edit_administrador_component__WEBPACK_IMPORTED_MODULE_16__["EditAdministradorComponent"] },
    { path: 'tabla', component: _problema_tabla_problema_tabla_problema_component__WEBPACK_IMPORTED_MODULE_17__["TablaProblemaComponent"] },
    { path: 'verProblemaUser', component: _user_ver_problema_user_ver_problema_user_component__WEBPACK_IMPORTED_MODULE_18__["VerProblemaUserComponent"] },
    { path: 'soluciones', component: _user_soluciones_soluciones_component__WEBPACK_IMPORTED_MODULE_19__["SolucionesComponent"] },
    { path: 'filtro', component: _user_filtro_filtro_component__WEBPACK_IMPORTED_MODULE_20__["FiltroComponent"] },
    { path: 'calendario', component: _user_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_21__["CalendarioComponent"] },
    { path: 'anotaciones', component: _anotaciones_anotaciones_component__WEBPACK_IMPORTED_MODULE_22__["AnotacionesComponent"] },
    { path: 'sugerencias', component: _sugerencias_sugerencias_component__WEBPACK_IMPORTED_MODULE_23__["SugerenciasComponent"] },
    { path: 'enviarSugerencia', component: _user_enviar_sugerencia_enviar_sugerencia_component__WEBPACK_IMPORTED_MODULE_24__["EnviarSugerenciaComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_problema_ver_problema_ver_problema_component__WEBPACK_IMPORTED_MODULE_12__["VerProblemaComponent"],
    _sesion_sesion_component__WEBPACK_IMPORTED_MODULE_3__["SesionComponent"],
    _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
    _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
    _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_8__["RegistrarComponent"],
    _problema_problema_component__WEBPACK_IMPORTED_MODULE_11__["ProblemaComponent"],
    _configuracion_usuario_configuracion_usuario_component__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionUsuarioComponent"],
    _problema_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_13__["NewProblemComponent"],
    _configuracion_usuario_new_administrador_new_administrador_component__WEBPACK_IMPORTED_MODULE_15__["NewAdministradorComponent"],
    _configuracion_usuario_edit_administrador_edit_administrador_component__WEBPACK_IMPORTED_MODULE_16__["EditAdministradorComponent"],
    _problema_tabla_problema_tabla_problema_component__WEBPACK_IMPORTED_MODULE_17__["TablaProblemaComponent"],
    _user_ver_problema_user_ver_problema_user_component__WEBPACK_IMPORTED_MODULE_18__["VerProblemaUserComponent"],
    _user_soluciones_soluciones_component__WEBPACK_IMPORTED_MODULE_19__["SolucionesComponent"],
    _user_filtro_filtro_component__WEBPACK_IMPORTED_MODULE_20__["FiltroComponent"],
    _user_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_21__["CalendarioComponent"],
    _anotaciones_anotaciones_component__WEBPACK_IMPORTED_MODULE_22__["AnotacionesComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<body>\r\n    <app-navbar-inicio *ngIf=\"inicio\"></app-navbar-inicio>\r\n    <app-navbar-admin *ngIf=\"adminLogged\"></app-navbar-admin>\r\n    <app-navbar-user *ngIf=\"userLogged\"></app-navbar-user>\r\n    <router-outlet></router-outlet>\r\n    <footer class=\"page-footer dark\" style=\"height:120px;margin:0px;margin-bottom:4px;\">\r\n        <div class=\"footer-copyright\">\r\n            <p>© 2020 TEC</p>\r\n        </div>\r\n    </footer>\r\n</body>\r\n\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'calendario-app';
        this.adminLogged = false;
        this.userLogged = false;
        this.inicio = true;
        this.inicio = true;
    }
    ;
    AppComponent.prototype.setLogIn = function (numeroNavBar) {
        if (numeroNavBar == 1) {
            this.adminLogged = true;
            this.userLogged = false;
            this.inicio = false;
        }
        else if (numeroNavBar == 2) {
            this.userLogged = true;
            this.adminLogged = false;
            this.inicio = false;
        }
        else {
            this.userLogged = false;
            this.adminLogged = false;
            this.inicio = true;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _sesion_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sesion/client.service */ "./src/app/sesion/client.service.ts");
/* harmony import */ var _problema_problema_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./problema/problema.service */ "./src/app/problema/problema.service.ts");
/* harmony import */ var _obras_obras_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./obras/obras.service */ "./src/app/obras/obras.service.ts");
/* harmony import */ var _problema_new_problem_new_problem_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./problema/new-problem/new-problem.service */ "./src/app/problema/new-problem/new-problem.service.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-katex */ "./node_modules/ng-katex/ng-katex.esm.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/registrar/registrar.component.ts");
/* harmony import */ var _sesion_sesion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sesion/sesion.component */ "./src/app/sesion/sesion.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _configuracion_usuario_configuracion_usuario_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./configuracion-usuario/configuracion-usuario.component */ "./src/app/configuracion-usuario/configuracion-usuario.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_inicio_navbar_inicio_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./navbar-inicio/navbar-inicio.component */ "./src/app/navbar-inicio/navbar-inicio.component.ts");
/* harmony import */ var _obras_obras_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./obras/obras.component */ "./src/app/obras/obras.component.ts");
/* harmony import */ var _configuracion_usuario_configuracion_usuario_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./configuracion-usuario/configuracion-usuario.service */ "./src/app/configuracion-usuario/configuracion-usuario.service.ts");
/* harmony import */ var _navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./navbar-admin/navbar-admin.component */ "./src/app/navbar-admin/navbar-admin.component.ts");
/* harmony import */ var _navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./navbar-user/navbar-user.component */ "./src/app/navbar-user/navbar-user.component.ts");
/* harmony import */ var _obras_obras_new_obras_new_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./obras/obras-new/obras-new.component */ "./src/app/obras/obras-new/obras-new.component.ts");
/* harmony import */ var _problema_problema_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./problema/problema.component */ "./src/app/problema/problema.component.ts");
/* harmony import */ var _problema_tabla_problema_tabla_problema_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./problema/tabla-problema/tabla-problema.component */ "./src/app/problema/tabla-problema/tabla-problema.component.ts");
/* harmony import */ var _problema_ver_problema_ver_problema_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./problema/ver-problema/ver-problema.component */ "./src/app/problema/ver-problema/ver-problema.component.ts");
/* harmony import */ var _problema_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./problema/new-problem/new-problem.component */ "./src/app/problema/new-problem/new-problem.component.ts");
/* harmony import */ var _tipo_problema_tipo_problema_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./tipo-problema/tipo-problema.component */ "./src/app/tipo-problema/tipo-problema.component.ts");
/* harmony import */ var _obras_obras_new_tipo_coleccion_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./obras/obras-new/tipo-coleccion.service */ "./src/app/obras/obras-new/tipo-coleccion.service.ts");
/* harmony import */ var _obras_obras_edit_obras_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./obras/obras-edit/obras-edit.component */ "./src/app/obras/obras-edit/obras-edit.component.ts");
/* harmony import */ var _configuracion_usuario_new_administrador_new_administrador_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./configuracion-usuario/new-administrador/new-administrador.component */ "./src/app/configuracion-usuario/new-administrador/new-administrador.component.ts");
/* harmony import */ var _configuracion_usuario_edit_administrador_edit_administrador_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./configuracion-usuario/edit-administrador/edit-administrador.component */ "./src/app/configuracion-usuario/edit-administrador/edit-administrador.component.ts");
/* harmony import */ var _problema_editar_problema_editar_problema_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./problema/editar-problema/editar-problema.component */ "./src/app/problema/editar-problema/editar-problema.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_ver_problema_user_ver_problema_user_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./user/ver-problema-user/ver-problema-user.component */ "./src/app/user/ver-problema-user/ver-problema-user.component.ts");
/* harmony import */ var _user_soluciones_soluciones_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./user/soluciones/soluciones.component */ "./src/app/user/soluciones/soluciones.component.ts");
/* harmony import */ var _user_filtro_filtro_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./user/filtro/filtro.component */ "./src/app/user/filtro/filtro.component.ts");
/* harmony import */ var _user_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./user/calendario/calendario.component */ "./src/app/user/calendario/calendario.component.ts");
/* harmony import */ var _anotaciones_anotaciones_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./anotaciones/anotaciones.component */ "./src/app/anotaciones/anotaciones.component.ts");
/* harmony import */ var _sugerencias_sugerencias_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./sugerencias/sugerencias.component */ "./src/app/sugerencias/sugerencias.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _user_enviar_sugerencia_enviar_sugerencia_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./user/enviar-sugerencia/enviar-sugerencia.component */ "./src/app/user/enviar-sugerencia/enviar-sugerencia.component.ts");










Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default.a);
//LATEX













//import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
























//DataTables


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["routingComponents"],
                _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_17__["RegistrarComponent"],
                _sesion_sesion_component__WEBPACK_IMPORTED_MODULE_18__["SesionComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _navbar_inicio_navbar_inicio_component__WEBPACK_IMPORTED_MODULE_23__["NavbarInicioComponent"],
                _obras_obras_component__WEBPACK_IMPORTED_MODULE_24__["ObrasComponent"],
                _navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_26__["NavbarAdminComponent"],
                _navbar_user_navbar_user_component__WEBPACK_IMPORTED_MODULE_27__["NavbarUserComponent"],
                _obras_obras_new_obras_new_component__WEBPACK_IMPORTED_MODULE_28__["ObrasNewComponent"],
                _problema_problema_component__WEBPACK_IMPORTED_MODULE_29__["ProblemaComponent"],
                _problema_tabla_problema_tabla_problema_component__WEBPACK_IMPORTED_MODULE_30__["TablaProblemaComponent"],
                _problema_ver_problema_ver_problema_component__WEBPACK_IMPORTED_MODULE_31__["VerProblemaComponent"],
                _problema_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_32__["NewProblemComponent"],
                _tipo_problema_tipo_problema_component__WEBPACK_IMPORTED_MODULE_33__["TipoProblemaComponent"],
                _obras_obras_edit_obras_edit_component__WEBPACK_IMPORTED_MODULE_35__["ObrasEditComponent"],
                _configuracion_usuario_new_administrador_new_administrador_component__WEBPACK_IMPORTED_MODULE_36__["NewAdministradorComponent"],
                _configuracion_usuario_edit_administrador_edit_administrador_component__WEBPACK_IMPORTED_MODULE_37__["EditAdministradorComponent"],
                _problema_editar_problema_editar_problema_component__WEBPACK_IMPORTED_MODULE_38__["EditarProblemaComponent"],
                _user_ver_problema_user_ver_problema_user_component__WEBPACK_IMPORTED_MODULE_40__["VerProblemaUserComponent"],
                _user_soluciones_soluciones_component__WEBPACK_IMPORTED_MODULE_41__["SolucionesComponent"],
                _user_filtro_filtro_component__WEBPACK_IMPORTED_MODULE_42__["FiltroComponent"],
                _user_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_43__["CalendarioComponent"],
                _anotaciones_anotaciones_component__WEBPACK_IMPORTED_MODULE_44__["AnotacionesComponent"],
                _sugerencias_sugerencias_component__WEBPACK_IMPORTED_MODULE_45__["SugerenciasComponent"],
                _user_enviar_sugerencia_enviar_sugerencia_component__WEBPACK_IMPORTED_MODULE_47__["EnviarSugerenciaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ng_katex__WEBPACK_IMPORTED_MODULE_10__["KatexModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_13__["NgDatepickerModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterModule"].forRoot([
                    {
                        path: 'config', component: _configuracion_usuario_configuracion_usuario_component__WEBPACK_IMPORTED_MODULE_21__["ConfiguracionUsuarioComponent"]
                    },
                    {
                        path: 'obras', component: _obras_obras_component__WEBPACK_IMPORTED_MODULE_24__["ObrasComponent"]
                    },
                    {
                        path: 'newAdministrador', component: _configuracion_usuario_new_administrador_new_administrador_component__WEBPACK_IMPORTED_MODULE_36__["NewAdministradorComponent"]
                    },
                    {
                        path: 'tabla', component: _problema_tabla_problema_tabla_problema_component__WEBPACK_IMPORTED_MODULE_30__["TablaProblemaComponent"]
                    }
                ]),
                angular_datatables__WEBPACK_IMPORTED_MODULE_46__["DataTablesModule"]
            ],
            providers: [
                _sesion_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"],
                _configuracion_usuario_configuracion_usuario_service__WEBPACK_IMPORTED_MODULE_25__["ConfiguracionUsuarioService"],
                _obras_obras_service__WEBPACK_IMPORTED_MODULE_6__["ObraService"],
                _problema_problema_service__WEBPACK_IMPORTED_MODULE_5__["ProblemaService"],
                _problema_new_problem_new_problem_service__WEBPACK_IMPORTED_MODULE_7__["NewProblemService"],
                _obras_obras_new_tipo_coleccion_service__WEBPACK_IMPORTED_MODULE_34__["TipoColeccionService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configuracion-usuario/configuracion-usuario.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/configuracion-usuario/configuracion-usuario.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.popup {\r\n    margin: 70px auto;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    width: 30%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n  }\r\n  \r\n  .popup p {\r\n    margin-top: 0;\r\n    color: #333;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n  }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhY2lvbi11c3VhcmlvL2NvbmZpZ3VyYWNpb24tdXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0NBQXNDO0VBQ3hDIiwiZmlsZSI6InNyYy9hcHAvY29uZmlndXJhY2lvbi11c3VhcmlvL2NvbmZpZ3VyYWNpb24tdXN1YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wb3B1cCB7XHJcbiAgICBtYXJnaW46IDcwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLnBvcHVwIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/configuracion-usuario/configuracion-usuario.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/configuracion-usuario/configuracion-usuario.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n</head>\r\n\r\n<body> \r\n    <main class=\"page shopping-cart-page\">\r\n        <section class=\"clean-block clean-cart dark\" style=\"margin-top:8px;margin-bottom:31px; min-height: 78vh;\">\r\n            <div class=\"container\">\r\n                <h2 class=\"text-info\">Lista de administradores</h2>\r\n                <a routerLink=\"/newAdministrador\" class=\"btn BlueButton\" style=\"margin-top:8px;\">Agregar nuevo administrador</a>\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Nombre</th>\r\n                            <th>Correo</th>\r\n                            <th>Opciones</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"administradores?.length != 0\">\r\n                        <tr *ngFor= \"let administrador of administradores\">\r\n                            <td>{{administrador.NOMBRE}}</td>\r\n                            <td>{{administrador.CORREO}}</td>\r\n                            <td>\r\n                                <button class=\"btn btn-outline-primary btn-sm\" type=\"button\" (click)=\"editAdmin(administrador)\">Editar</button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"openModalDialog(administrador.CORREO)\">Eliminar</button>\r\n                                        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\r\n                                            <div class=\"popup\" [ngStyle]=\"{'display':display}\">\r\n                                                <p>¿Está seguro de que desea eliminar el usuario sleccionado?</p>\r\n                                                <button type=\"button\" class=\"close\" (click)=\"onClosehandled\"><span aria-hidden=\"true\"></span></button>\r\n                                                <button type=\"button\" class=\"btn_si\" (click) =\"eliminarAdmin()\" (click)=\"closeModalDialog()\">Si</button>\r\n                                                <button type=\"button\" class=\"btn_no\" (click)=\"closeModalDialog()\">No</button>\r\n                                            </div>\r\n                                        </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tbody *ngIf=\"administradores?.length == 0\">\r\n                        <tr>\r\n                            <td>No data!</td>\r\n                            <td>No data!</td>\r\n                            <td>No data!</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </section>\r\n    </main>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/configuracion-usuario/configuracion-usuario.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/configuracion-usuario/configuracion-usuario.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConfiguracionUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionUsuarioComponent", function() { return ConfiguracionUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sesion_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sesion/client.service */ "./src/app/sesion/client.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






var ConfiguracionUsuarioComponent = /** @class */ (function () {
    function ConfiguracionUsuarioComponent(configuracion_clientService, router, appComponenet) {
        this.configuracion_clientService = configuracion_clientService;
        this.router = router;
        this.appComponenet = appComponenet;
        this.display = 'none';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //inicialize clients list
        /*this.configuracion_clientService.getClients()
        .subscribe(clientes=>{
          this.administradores = clientes;
        })*/
    }
    ConfiguracionUsuarioComponent.prototype.ngOnInit = function () {
        this.appComponenet.setLogIn(1);
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            language: {
                "processing": "Procesando...",
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "emptyTable": "Ningún dato disponible en esta tabla",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "infoPostFix": "",
                "search": "Buscar:",
                "url": "",
                "loadingRecords": "Cargando...",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "aria": {
                    "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        };
        this.getClients();
    };
    ConfiguracionUsuarioComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ConfiguracionUsuarioComponent.prototype.getClients = function () {
        var _this = this;
        this.configuracion_clientService.getClients()
            .subscribe(function (clientes) {
            _this.administradores = clientes;
            _this.dtTrigger.next();
        });
    };
    ConfiguracionUsuarioComponent.prototype.getUsuarios = function () {
        var _this = this;
        this.configuracion_clientService.getClients()
            .subscribe(function (clientes) { return _this.clientes = clientes; });
    };
    ConfiguracionUsuarioComponent.prototype.editAdmin = function (cliente) {
        this.cliente = cliente;
        this.router.navigate(['/editAdministrador', this.cliente.CORREO]);
    };
    ConfiguracionUsuarioComponent.prototype.eliminarAdmin = function () {
        var _this = this;
        this.configuracion_clientService.delete(this.correoAdmin);
        this.administradores = this.administradores.filter(function (o) { return o.CORREO !== _this.correoAdmin; });
    };
    //Model implementation
    ConfiguracionUsuarioComponent.prototype.openModalDialog = function (id) {
        this.correoAdmin = id;
        this.display = 'block';
    };
    ConfiguracionUsuarioComponent.prototype.closeModalDialog = function () {
        this.display = 'none';
    };
    ConfiguracionUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracion-usuario',
            template: __webpack_require__(/*! ./configuracion-usuario.component.html */ "./src/app/configuracion-usuario/configuracion-usuario.component.html"),
            styles: [__webpack_require__(/*! ./configuracion-usuario.component.css */ "./src/app/configuracion-usuario/configuracion-usuario.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sesion_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], ConfiguracionUsuarioComponent);
    return ConfiguracionUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/configuracion-usuario/configuracion-usuario.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/configuracion-usuario/configuracion-usuario.service.ts ***!
  \************************************************************************/
/*! exports provided: ConfiguracionUsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionUsuarioService", function() { return ConfiguracionUsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var ConfiguracionUsuarioService = /** @class */ (function () {
    /*Para crear datos se utiliza la peticion de http.POST
     *Para eliminar datos http.delete
     *Para actualizar datos http.put
     *Para solicitar http.get
     */
    function ConfiguracionUsuarioService(_http) {
        this._http = _http;
    }
    ConfiguracionUsuarioService.prototype.destroy = function (id) {
        return this._http.delete('/clients/' + id)
            .map(function (data) { return data.json(); }).toPromise;
    };
    /*
    update(id : number){
      return this._http.put('/clients/' + id)
      .map(data => data.json()).toPromise
    }
    */
    ConfiguracionUsuarioService.prototype.getUser = function (client) {
        return this._http.get('/clients/' + client.CORREO)
            .map(function (data) { return data.json(); }).toPromise;
    };
    ConfiguracionUsuarioService.prototype.getUsers = function () {
        return this._http.get('/clients')
            .map(function (data) { return data.json(); }).toPromise();
    };
    ConfiguracionUsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ConfiguracionUsuarioService);
    return ConfiguracionUsuarioService;
}());



/***/ }),

/***/ "./src/app/configuracion-usuario/edit-administrador/edit-administrador.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/configuracion-usuario/edit-administrador/edit-administrador.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNpb24tdXN1YXJpby9lZGl0LWFkbWluaXN0cmFkb3IvZWRpdC1hZG1pbmlzdHJhZG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/configuracion-usuario/edit-administrador/edit-administrador.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/configuracion-usuario/edit-administrador/edit-administrador.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<body>\r\n  <main class=\"page contact-us-page\">\r\n    <section class=\"clean-block clean-form dark\" style=\" min-height: 78vh;\">\r\n      <div class=\"container\">\r\n        <div class=\"block-heading\">\r\n          <h2 class=\"text-info\">Editar Administrador</h2>\r\n          <p></p>\r\n        </div>\r\n        <form *ngIf=\"cliente\" (submit)=\"editarAdministrador($event)\">\r\n          <div class=\"form-group\"><label>Nombre:</label>\r\n            <input [(ngModel)]=\"cliente.NOMBRE\" name=\"NOMBRE\" class=\"form-control\" type=\"text\" required></div>\r\n          <div class=\"form-group\"><label>Email:</label>\r\n            <input [(ngModel)]=\"cliente.CORREO\" name=\"CORREO\" class=\"form-control\" type=\"email\" required></div>\r\n          <div class=\"form-group\"><label>Contraseña:</label>\r\n            <input [(ngModel)]=\"cliente.PASSWORD\" name=\"PASSWORD\" class=\"form-control\" type=\"password\" required></div>\r\n          <div class=\"form-group\"><label>Repita su contraseña:</label>\r\n            <input [(ngModel)]=\"repitedPassword\" name=\"repitedPassword\" class=\"form-control\" type=\"password\" required>\r\n          </div>\r\n          <div *ngIf=\"!samePassword\" class=\"alert alert-danger\" role=\"alert\">\r\n            Las contraseñas no son iguales.\r\n          </div>\r\n          <div class=\"form-group\"><button class=\"btn RedButton\" (click)=\"showSuccess()\" type=\"submit\">Guardar cambios</button></div>\r\n          <div *ngIf=\"!agregado\" class=\"alert alert-danger\" role=\"alert\">\r\n            Debe ingresar datos válidos.\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </section>\r\n  </main>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/js/bootstrap.bundle.min.js\"></script>\r\n  <script src=\"https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js\"></script>\r\n  <script src=\"https://cdn.datatables.net/1.10.15/js/dataTables.bootstrap.min.js\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js\"></script>\r\n  <script src=\"../../../assets/js/script.min.js\"></script>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/configuracion-usuario/edit-administrador/edit-administrador.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/configuracion-usuario/edit-administrador/edit-administrador.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EditAdministradorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAdministradorComponent", function() { return EditAdministradorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sesion_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sesion/client */ "./src/app/sesion/client.ts");
/* harmony import */ var _sesion_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sesion/client.service */ "./src/app/sesion/client.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");







var EditAdministradorComponent = /** @class */ (function () {
    function EditAdministradorComponent(editar_admin_clientService, route, router, appComponenet) {
        this.editar_admin_clientService = editar_admin_clientService;
        this.route = route;
        this.router = router;
        this.appComponenet = appComponenet;
        this.cliente = new _sesion_client__WEBPACK_IMPORTED_MODULE_3__["Client"];
        this.repitedPassword = "";
        this.samePassword = true;
        this.agregado = true;
        //obtener el usuario actual
        this.correo = this.route.snapshot.paramMap.get('id');
    }
    EditAdministradorComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.editar_admin_clientService.getClient(_this.correo)
                .subscribe(function (cliente) {
                _this.cliente = cliente[0];
                console.log(_this.cliente);
                _this.repitedPassword = _this.cliente.PASSWORD;
            });
        });
        this.appComponenet.setLogIn(1);
    };
    EditAdministradorComponent.prototype.editarAdministrador = function (e) {
        var _this = this;
        this.cliente.CORREO = this.correo;
        e.preventDefault();
        if (this.cliente.PASSWORD !== this.repitedPassword) {
            this.samePassword = false;
            return;
        }
        else {
            this.samePassword = true;
        }
        if (this.validarAdmin()) {
            console.log("edit");
            this.editar_admin_clientService.edit(this.cliente);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(500).subscribe(function (x) {
                _this.router.navigate(['config']);
            });
        }
        else {
            this.agregado = false;
            return;
        }
    };
    EditAdministradorComponent.prototype.validarAdmin = function () {
        if (this.cliente.NOMBRE === "" ||
            this.cliente.CORREO === "" ||
            this.cliente.PASSWORD === "")
            return false;
        return true;
    };
    EditAdministradorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-administrador',
            template: __webpack_require__(/*! ./edit-administrador.component.html */ "./src/app/configuracion-usuario/edit-administrador/edit-administrador.component.html"),
            styles: [__webpack_require__(/*! ./edit-administrador.component.css */ "./src/app/configuracion-usuario/edit-administrador/edit-administrador.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sesion_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
    ], EditAdministradorComponent);
    return EditAdministradorComponent;
}());



/***/ }),

/***/ "./src/app/configuracion-usuario/new-administrador/new-administrador.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/configuracion-usuario/new-administrador/new-administrador.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup {\r\n    margin: 70px auto;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    width: 30%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n  }\r\n  \r\n  .popup p {\r\n    margin-top: 0;\r\n    color: #333;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n  }\r\n\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhY2lvbi11c3VhcmlvL25ldy1hZG1pbmlzdHJhZG9yL25ldy1hZG1pbmlzdHJhZG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNDQUFzQztFQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNpb24tdXN1YXJpby9uZXctYWRtaW5pc3RyYWRvci9uZXctYWRtaW5pc3RyYWRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwIHtcclxuICAgIG1hcmdpbjogNzBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAucG9wdXAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LWZhbWlseTogVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/configuracion-usuario/new-administrador/new-administrador.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/configuracion-usuario/new-administrador/new-administrador.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Contact Us - Brand</title>\r\n    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css\">\r\n    <link rel=\"stylesheet\" href=\"https://cdn.datatables.net/1.10.15/css/dataTables.bootstrap.min.css\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css\">\r\n</head>\r\n\r\n<body>\r\n\r\n    <main class=\"page contact-us-page\">\r\n        <section class=\"clean-block clean-form dark\"  style=\" min-height: 78vh;\">\r\n            <div class=\"container\">\r\n                <div class=\"block-heading\">\r\n                    <h2 class=\"text-info\">Registro Administrador</h2>\r\n                    <p></p>\r\n                </div>\r\n                <form (submit) = \"agregarAdmin($event)\">\r\n                    <div class=\"form-group\"><label>Nombre:</label>\r\n                        <input [(ngModel)]= \"cliente.NOMBRE\" name=\"NOMBRE\" class=\"form-control\"\r\n                        type=\"text\" required></div>\r\n                    <div class=\"form-group\"><label>Email:</label>\r\n                        <input [(ngModel)]=\"cliente.CORREO\" name=\"CORREO\" class=\"form-control\"\r\n                        type=\"email\" required></div>\r\n                    <div *ngIf=\"!agregado\" class=\"alert alert-danger\" role=\"alert\">\r\n                            Este usuario ya ha sido registrado. \r\n                    </div>\r\n                    <div class=\"form-group\"><label>Contraseña:</label>\r\n                        <input [(ngModel)]=\"cliente.PASSWORD\" name=\"PASSWORD\" class=\"form-control\"\r\n                        type=\"password\" required></div>\r\n                    <div class=\"form-group\"><label>Repita su contraseña:</label>\r\n                        <input [(ngModel)]=\"repitedPassword\" name=\"repitedPassword\" class=\"form-control\" type=\"password\" required>\r\n                    </div>\r\n                    <div *ngIf=\"!samePassword\" class=\"alert alert-danger\" role=\"alert\">\r\n                        Las contraseñas no son iguales.\r\n                    </div>\r\n                    <div class=\"form-group\"><button class=\"btn RedButton\" type=\"submit\">Agregar</button></div>\r\n                    <div *ngIf=\"!agregado\" class=\"alert alert-danger\" role=\"alert\">\r\n                        Debe ingresar datos válidos.\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </section>\r\n    </main>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/js/bootstrap.bundle.min.js\"></script>\r\n    <script src=\"https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js\"></script>\r\n    <script src=\"https://cdn.datatables.net/1.10.15/js/dataTables.bootstrap.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js\"></script>\r\n    <script src=\"../../../assets/js/script.min.js\"></script>\r\n</body>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/configuracion-usuario/new-administrador/new-administrador.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/configuracion-usuario/new-administrador/new-administrador.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NewAdministradorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAdministradorComponent", function() { return NewAdministradorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sesion_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sesion/client */ "./src/app/sesion/client.ts");
/* harmony import */ var _sesion_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sesion/client.service */ "./src/app/sesion/client.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");






var NewAdministradorComponent = /** @class */ (function () {
    function NewAdministradorComponent(agregar_admin_clientService, router, appComponenet) {
        this.agregar_admin_clientService = agregar_admin_clientService;
        this.router = router;
        this.appComponenet = appComponenet;
        this.cliente = new _sesion_client__WEBPACK_IMPORTED_MODULE_3__["Client"];
        this.agregado = true;
        this.samePassword = true;
        this.repitedPassword = "";
        this.display = "none";
    }
    NewAdministradorComponent.prototype.ngOnInit = function () {
        this.getClients();
        this.appComponenet.setLogIn(1);
    };
    NewAdministradorComponent.prototype.getClients = function () {
        var _this = this;
        this.agregar_admin_clientService.getClients().
            subscribe(function (clients) { return _this.clients = clients; });
    };
    NewAdministradorComponent.prototype.agregarAdmin = function (e) {
        e.preventDefault();
        if (this.cliente.PASSWORD !== this.repitedPassword) {
            this.samePassword = false;
            return;
        }
        else {
            this.samePassword = true;
        }
        if (this.validarAdmin()) {
            this.cliente.ID_TIPO_CLIENTE = 1;
            this.agregar_admin_clientService.create(this.cliente);
            this.router.navigate(['config']);
        }
        else {
            this.agregado = false;
            return;
        }
    };
    NewAdministradorComponent.prototype.validarAdmin = function () {
        if (this.cliente.NOMBRE === "" ||
            this.cliente.CORREO === "" ||
            this.cliente.PASSWORD === "")
            return false;
        return true;
    };
    NewAdministradorComponent.prototype.validarUnico = function () {
        for (var i = 0; i < this.clients.length; i++) {
            var element = this.clients[i];
            if (this.cliente.CORREO == element.CORREO) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    //Model implementation
    NewAdministradorComponent.prototype.openModalDialog = function () {
        this.display = 'block';
    };
    NewAdministradorComponent.prototype.closeModalDialog = function () {
        this.display = 'none';
    };
    NewAdministradorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-administrador',
            template: __webpack_require__(/*! ./new-administrador.component.html */ "./src/app/configuracion-usuario/new-administrador/new-administrador.component.html"),
            styles: [__webpack_require__(/*! ./new-administrador.component.css */ "./src/app/configuracion-usuario/new-administrador/new-administrador.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sesion_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], NewAdministradorComponent);
    return NewAdministradorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width:576px) {\r\n    .clean-block.clean-hero .text {\r\n      padding:0;\r\n    }\r\n  }\r\n  \r\n  .clean-block.clean-hero .text {\r\n    max-width:640px;\r\n    color:#fff;\r\n    z-index:2;\r\n    padding:40px 15px;\r\n    text-shadow:1px 1px 1px rgba(0,0,0,.15);\r\n  }\r\n  \r\n  .clean-block.clean-hero {\r\n    position:relative;\r\n    text-align:center;\r\n    background-size:cover;\r\n    background-repeat:no-repeat;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:center;\r\n    padding-bottom:0;\r\n  }\r\n  \r\n  body {\r\n    margin:0;\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:1rem;\r\n    font-weight:400;\r\n    line-height:1.5;\r\n    color:#212529;\r\n    text-align:left;\r\n    background-color:#fff;\r\n  }\r\n  \r\n  @media (min-width:576px) {\r\n    .clean-block.clean-hero {\r\n      min-height:680px;\r\n    }\r\n  }\r\n  \r\n  .clean-block.clean-hero {\r\n    position:relative;\r\n    text-align:center;\r\n    background-size:cover;\r\n    background-repeat:no-repeat;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:center;\r\n    padding-bottom:0;\r\n  }\r\n  \r\n  @media (min-width:576px) {\r\n    .clean-block {\r\n      padding-bottom:100px;\r\n    }\r\n  }\r\n  \r\n  .clean-block {\r\n    padding-bottom:50px;\r\n  }\r\n  \r\n  article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\r\n    display:block;\r\n  }\r\n  \r\n    \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtNQUNFLFNBQVM7SUFDWDtFQUNGOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUUzQixZQUFZO0lBRVosa0JBQWtCO0lBRWxCLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUUzQixZQUFZO0lBRVosa0JBQWtCO0lBRWxCLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRTtNQUNFLG9CQUFvQjtJQUN0QjtFQUNGOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDo1NzZweCkge1xyXG4gICAgLmNsZWFuLWJsb2NrLmNsZWFuLWhlcm8gLnRleHQge1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jbGVhbi1ibG9jay5jbGVhbi1oZXJvIC50ZXh0IHtcclxuICAgIG1heC13aWR0aDo2NDBweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICB6LWluZGV4OjI7XHJcbiAgICBwYWRkaW5nOjQwcHggMTVweDtcclxuICAgIHRleHQtc2hhZG93OjFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjE1KTtcclxuICB9XHJcbiAgXHJcbiAgLmNsZWFuLWJsb2NrLmNsZWFuLWhlcm8ge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6LW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAtbXMtZmxleC1hbGlnbjpjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZm9udC1mYW1pbHk6TW9udHNlcnJhdCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjFyZW07XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBsaW5lLWhlaWdodDoxLjU7XHJcbiAgICBjb2xvcjojMjEyNTI5O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDo1NzZweCkge1xyXG4gICAgLmNsZWFuLWJsb2NrLmNsZWFuLWhlcm8ge1xyXG4gICAgICBtaW4taGVpZ2h0OjY4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2xlYW4tYmxvY2suY2xlYW4taGVybyB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTotbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIC1tcy1mbGV4LWFsaWduOmNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6Y2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOjA7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOjU3NnB4KSB7XHJcbiAgICAuY2xlYW4tYmxvY2sge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbToxMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNsZWFuLWJsb2NrIHtcclxuICAgIHBhZGRpbmctYm90dG9tOjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGFydGljbGUsIGFzaWRlLCBkaWFsb2csIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbmF2LCBzZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gICAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page landing-page\">\r\n  <section *ngIf=\"obra\" class=\"clean-block clean-hero\" style=\"text-align: center; height: 100vh;background-repeat: no-repeat;\r\n  background-position: center; background-size: cover;\"\r\n  [ngStyle]=\"{'background-image':getUrl() }\">\r\n    <div class=\"text\" style=\"color: white;\r\n    position: absolute;\r\n    top: 60%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 40%;\r\n    height: 50%;\">\r\n    </div>\r\n  </section>\r\n</main>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _obras_obras_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../obras/obras.service */ "./src/app/obras/obras.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(obraService) {
        var _this = this;
        this.obraService = obraService;
        this.obraService.getObraActual()
            .subscribe(function (obra) {
            _this.obra = obra[0];
            _this.obra.FECHA_INICIO = _this.obra.FECHA_INICIO.substring(0, 10);
            _this.obra.FECHA_FIN = _this.obra.FECHA_FIN.substring(0, 10);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getUrl = function () {
        return "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url('" + this.obra.IMG_SOURCE + "')";
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_obras_obras_service__WEBPACK_IMPORTED_MODULE_2__["ObraService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar-admin/navbar-admin.component.css":
/*!*********************************************************!*\
  !*** ./src/app/navbar-admin/navbar-admin.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".usuario_actual  {\r\n    display: flex;\r\n    width: 16%;\r\n}\r\n.redButton {\r\n    background-color: #c1272d; \r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n  }\r\n.navbar-light .navbar-nav .nav-link {\r\n    color:white;\r\n  }\r\n.navbar-light:hover .navbar-nav:hover .nav-link:hover {\r\n    color:#c1272d;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyLWFkbWluL25hdmJhci1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7QUFJQTtJQUNFLFdBQVc7RUFDYjtBQUNBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyLWFkbWluL25hdmJhci1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzdWFyaW9fYWN0dWFsICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDE2JTtcclxufVxyXG4ucmVkQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMTI3MmQ7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgLm5hdmJhci1saWdodDpob3ZlciAubmF2YmFyLW5hdjpob3ZlciAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6I2MxMjcyZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/navbar-admin/navbar-admin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/navbar-admin/navbar-admin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav style=\"background: #140e39;color: white;\" class=\"navbar navbar-light navbar-expand-md navigation-clean-search\">\r\n  <div class=\"container\"> \r\n        <a class=\"navbar-brand logo\" routerLink='/admin' routerLinkActive=\"active\"><img src=\"../../assets/img/logoTECBLANCO.png\" alt=\"TEC\" style=\"height: 50px;\"></a>\r\n    <button (click)=\"collapse()\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navcol-1\"><i\r\n        class=\"fas fa-bars fa-1x\"></i></button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\r\n          <ul class=\"nav navbar-nav\" style=\"color: white;\">\r\n              <li  role=\"presentation\"><a (click)=\"decollapse()\" class=\"nav-link\" routerLink=\"/problem\"><i class=\"fas fa-book\"></i> Problemas</a></li>\r\n              <li class=\"nav-item\" role=\"presentation\"><a (click)=\"decollapse()\" class=\"nav-link\" routerLink=\"/obrasArt\"><i class=\"fas fa-palette\"></i> Obras de arte</a></li>\r\n              <li class=\"nav-item\" role=\"presentation\"><a (click)=\"decollapse()\" class=\"nav-link\" routerLink=\"/config\"><i class=\"fas fa-address-book\"></i> Administrador</a></li>\r\n              <li class=\"nav-item\" role=\"presentation\"><a (click)=\"decollapse()\" class=\"nav-link\" routerLink=\"/sugerencias\"><i class=\"fas fa-bullhorn\"></i> Sugerencias</a></li>\r\n              <li class=\"nav-item\" role=\"presentation\"><a (click)=\"decollapse()\" class=\"nav-link\" routerLink=\"/anotaciones\"><i class=\"fas fa-bullhorn\"></i> Recomendaciones</a></li>\r\n              <li class=\"nav-item\" role=\"presentation\"><a style=\"cursor: pointer;\" class=\"nav-link\" (click)=\"logOut()\"><i class=\"fas fa-sign-out-alt\"></i> Salir</a></li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar-admin/navbar-admin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/navbar-admin/navbar-admin.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarAdminComponent", function() { return NavbarAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sesion_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sesion/client.service */ "./src/app/sesion/client.service.ts");
/* harmony import */ var _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoginCredentials */ "./src/app/LoginCredentials.ts");






var NavbarAdminComponent = /** @class */ (function () {
    function NavbarAdminComponent(appComponent, usuario_actual_clientService, router) {
        this.appComponent = appComponent;
        this.usuario_actual_clientService = usuario_actual_clientService;
        this.router = router;
        this.display = 'none';
        this.usuario = "";
        this.navbar = true;
    }
    NavbarAdminComponent.prototype.ngOnInit = function () {
    };
    NavbarAdminComponent.prototype.logOut = function () {
        this.appComponent.setLogIn(0);
        this.router.navigate(["/login"]);
        _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__["LoginCredentials"].logOut();
    };
    NavbarAdminComponent.prototype.decollapse = function () {
        this.navbar = false;
    };
    NavbarAdminComponent.prototype.collapse = function () {
        this.navbar = true;
    };
    NavbarAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-admin',
            template: __webpack_require__(/*! ./navbar-admin.component.html */ "./src/app/navbar-admin/navbar-admin.component.html"),
            styles: [__webpack_require__(/*! ./navbar-admin.component.css */ "./src/app/navbar-admin/navbar-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _sesion_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarAdminComponent);
    return NavbarAdminComponent;
}());



/***/ }),

/***/ "./src/app/navbar-inicio/navbar-inicio.component.css":
/*!***********************************************************!*\
  !*** ./src/app/navbar-inicio/navbar-inicio.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clean-navbar.fixed-bottom, .clean-navbar.fixed-top {\r\n    box-shadow:0 0 15px rgba(0,0,0,.1);\r\n  }\r\n  \r\n  @media (min-width:576px) {\r\n    .navbar {\r\n      padding-top:1.2rem;\r\n      padding-bottom:1.2rem;\r\n    }\r\n  }\r\n  \r\n  .fixed-bottom, .fixed-top {\r\n    position:fixed;\r\n    right:0;\r\n    left:0;\r\n    z-index:1030;\r\n  }\r\n  \r\n  .fixed-top {\r\n    top:0;\r\n  }\r\n  \r\n  .bg-white {\r\n    background-color:#FFF!important;\r\n  }\r\n  \r\n  @media (min-width:992px) {\r\n    .navbar-expand-lg {\r\n      flex-flow:row nowrap;\r\n      justify-content:flex-start;\r\n    }\r\n  }\r\n  \r\n  .navbar, .navbar > .container, .navbar > .container-fluid {\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    align-items:center;\r\n    justify-content:space-between;\r\n    \r\n  }\r\n  \r\n  /*Fondo del navbar*/\r\n  \r\n  .navbar {\r\n    position:relative;\r\n    padding:.5rem 1rem;\r\n    background-color:#140e39;\r\n    color: #FFF;\r\n  }\r\n  \r\n  article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\r\n    display:block;\r\n  }\r\n  \r\n  body {\r\n    margin:0;\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:1rem;\r\n    font-weight:400;\r\n    line-height:1.5;\r\n    color:#212529;\r\n    text-align:left;\r\n  }\r\n  \r\n  .navbar-light .navbar-brand, .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\r\n    color:rgba(0,0,0,.9);\r\n    \r\n  }\r\n  \r\n  .clean-navbar .logo {\r\n    font-size:1.5rem;\r\n  }\r\n  \r\n  .navbar-brand:focus, .navbar-brand:hover {\r\n    text-decoration:none;\r\n  }\r\n  \r\n  a:hover {\r\n    color:#0056b3;\r\n    text-decoration:underline;\r\n  }\r\n  \r\n  .navbar-brand {\r\n    display:inline-block;\r\n    padding-top:.3125rem;\r\n    padding-bottom:.3125rem;\r\n    margin-right:1rem;\r\n    font-size:1.25rem;\r\n    line-height:inherit;\r\n    white-space:nowrap;\r\n  }\r\n  \r\n  /*Color donde esta el logo*/\r\n  \r\n  a {\r\n    color:#007bff;\r\n    text-decoration:none;\r\n    background-color:#140e39;\r\n    -webkit-text-decoration-skip:objects;\r\n  }\r\n  \r\n  .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show > .nav-link {\r\n    color:#FFF;\r\n    \r\n  }\r\n  \r\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\r\n    color:#FFF;\r\n    \r\n  }\r\n  \r\n  .clean-navbar .navbar-nav .nav-link {\r\n    font-weight:600;\r\n    font-size:.8rem;\r\n    text-transform:uppercase;\r\n  }\r\n  \r\n  .navbar-light .navbar-nav .nav-link {\r\n      color:rgba(0,0,0,.5);\r\n    }\r\n  \r\n  @media (min-width:992px) {\r\n    .navbar-expand-lg .navbar-nav .nav-link {\r\n      padding-right:.5rem;\r\n      padding-left:.5rem;\r\n    }\r\n  }\r\n  \r\n  .navbar-nav .nav-link {\r\n    padding-right:0;\r\n    padding-left:0;\r\n  }\r\n  \r\n  .nav-link:focus, .nav-link:hover {\r\n    text-decoration:none;\r\n  }\r\n  \r\n  a:hover {\r\n    color:#0056b3;\r\n    text-decoration:underline;\r\n  }\r\n  \r\n  .nav-link {\r\n    display:block;\r\n    padding:.5rem 1rem;\r\n  }\r\n  \r\n  a {\r\n    color:#007bff;\r\n    text-decoration:none;\r\n    -webkit-text-decoration-skip:objects;\r\n  }\r\n  \r\n  .navbar-nav {\r\n    display:flex;\r\n    flex-direction:column;\r\n    padding-left:0;\r\n    background-color:#140e39;\r\n    margin-bottom:0;\r\n    list-style:none;\r\n  }\r\n  \r\n  .nav {\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    padding-left:0;\r\n    margin-bottom:0;\r\n    background-color:#140e39;\r\n    list-style:none;\r\n  }\r\n  \r\n  .box{\r\n    width: 500px;\r\n    height: 600px;\r\n    padding: 40px;\r\n    border-top: 20px;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-filter: drop-shadow(0 0 8px #2c3e50);\r\n            filter: drop-shadow(0 0 8px #2c3e50);/*Sombra*/\r\n    background: url('calendarBackground.png');\r\n    background-size: 100% 100%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }\r\n  \r\n  .box h1{\r\n    color: black;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .box p{\r\n    color: black;\r\n    font-weight: 200;\r\n  }\r\n  \r\n  .box input[type = \"text\"], .box input[type = \"password\"]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #e74c3c;\r\n    padding: 14px 10px;\r\n    width: 250px;\r\n    outline: none;\r\n    color: #2c3e50;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n  }\r\n  \r\n  .box input[type = \"text\"]:focus,.box input[type = \"password\"]:focus{\r\n    width: 280px;\r\n    border-color: #c1272d;\r\n  }\r\n  \r\n  .box input[type = \"submit\"]{\r\n    border:0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #273c75;\r\n    padding: 14px 40px;\r\n    outline: none;\r\n    color: #2c3e50;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .box input[type = \"submit\"]:hover{\r\n    background: #30336b;\r\n    color: white;\r\n  }\r\n  \r\n  .a{\r\n    color: black\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyLWluaWNpby9uYXZiYXItaW5pY2lvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUI7SUFDdkI7RUFDRjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7RUFDZDs7RUFFQTtJQUNFLEtBQUs7RUFDUDs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFO01BRUUsb0JBQW9CO01BRXBCLDBCQUEwQjtJQUM1QjtFQUNGOztFQUVBO0lBRUUsWUFBWTtJQUVaLGNBQWM7SUFFZCxrQkFBa0I7SUFFbEIsNkJBQTZCOztFQUUvQjs7RUFDQSxtQkFBbUI7O0VBQ25CO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG9CQUFvQjs7RUFFdEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBLDJCQUEyQjs7RUFDM0I7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxVQUFVOztFQUVaOztFQUVBO0lBQ0UsVUFBVTs7RUFFWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2Ysd0JBQXdCO0VBQzFCOztFQUVFO01BQ0Usb0JBQW9CO0lBQ3RCOztFQUVGO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCO0VBQ0Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFFRSxZQUFZO0lBRVoscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFFRSxZQUFZO0lBRVosY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7O0VBSUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiw0Q0FBb0M7WUFBcEMsb0NBQW9DLENBQUMsU0FBUztJQUM5Qyx5Q0FBMEQ7SUFDMUQsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBQ0E7SUFDRTtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyLWluaWNpby9uYXZiYXItaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYW4tbmF2YmFyLmZpeGVkLWJvdHRvbSwgLmNsZWFuLW5hdmJhci5maXhlZC10b3Age1xyXG4gICAgYm94LXNoYWRvdzowIDAgMTVweCByZ2JhKDAsMCwwLC4xKTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6NTc2cHgpIHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICBwYWRkaW5nLXRvcDoxLjJyZW07XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjEuMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZpeGVkLWJvdHRvbSwgLmZpeGVkLXRvcCB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB6LWluZGV4OjEwMzA7XHJcbiAgfVxyXG4gIFxyXG4gIC5maXhlZC10b3Age1xyXG4gICAgdG9wOjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkYhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICAgLm5hdmJhci1leHBhbmQtbGcge1xyXG4gICAgICAtbXMtZmxleC1mbG93OnJvdyBub3dyYXA7XHJcbiAgICAgIGZsZXgtZmxvdzpyb3cgbm93cmFwO1xyXG4gICAgICAtbXMtZmxleC1wYWNrOnN0YXJ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhciwgLm5hdmJhciA+IC5jb250YWluZXIsIC5uYXZiYXIgPiAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIGRpc3BsYXk6LW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOndyYXA7XHJcbiAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgIC1tcy1mbGV4LWFsaWduOmNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6anVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgfVxyXG4gIC8qRm9uZG8gZGVsIG5hdmJhciovXHJcbiAgLm5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6LjVyZW0gMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzE0MGUzOTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICBcclxuICBhcnRpY2xlLCBhc2lkZSwgZGlhbG9nLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG5hdiwgc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6MS41O1xyXG4gICAgY29sb3I6IzIxMjUyOTtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQ6Zm9jdXMsIC5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZDpob3ZlciB7XHJcbiAgICBjb2xvcjpyZ2JhKDAsMCwwLC45KTtcclxuICAgIFxyXG4gIH1cclxuICAgXHJcbiAgLmNsZWFuLW5hdmJhciAubG9nbyB7XHJcbiAgICBmb250LXNpemU6MS41cmVtO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLWJyYW5kOmZvY3VzLCAubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gIH1cclxuICBcclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiMwMDU2YjM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6LjMxMjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTouMzEyNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDoxcmVtO1xyXG4gICAgZm9udC1zaXplOjEuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDppbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gIH1cclxuICBcclxuICAvKkNvbG9yIGRvbmRlIGVzdGEgZWwgbG9nbyovXHJcbiAgYSB7XHJcbiAgICBjb2xvcjojMDA3YmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNDBlMzk7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOm9iamVjdHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLmFjdGl2ZSA+IC5uYXYtbGluaywgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluay5zaG93LCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5zaG93ID4gLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiNGRkY7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiNGRkY7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmNsZWFuLW5hdmJhciAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgZm9udC1zaXplOi44cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAgIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgICAgY29sb3I6cmdiYSgwLDAsMCwuNSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpIHtcclxuICAgIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6LjVyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDouNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6MDtcclxuICAgIHBhZGRpbmctbGVmdDowO1xyXG4gIH1cclxuICBcclxuICAubmF2LWxpbms6Zm9jdXMsIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjojMDA1NmIzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBwYWRkaW5nOi41cmVtIDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6IzAwN2JmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDpvYmplY3RzO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBkaXNwbGF5Oi1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTQwZTM5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gIH1cclxuICBcclxuICAubmF2IHtcclxuICAgIGRpc3BsYXk6LW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOndyYXA7XHJcbiAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTQwZTM5O1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gIH1cclxuICBcclxuICAgIFxyXG4gIFxyXG4gIC5ib3h7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci10b3A6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDhweCAjMmMzZTUwKTsvKlNvbWJyYSovXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2NhbGVuZGFyQmFja2dyb3VuZC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJveCBoMXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmJveCBwe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB9XHJcblxyXG4gIC5ib3ggaW5wdXRbdHlwZSA9IFwidGV4dFwiXSwgLmJveCBpbnB1dFt0eXBlID0gXCJwYXNzd29yZFwiXXtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICAgIHBhZGRpbmc6IDE0cHggMTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICB9XHJcblxyXG4gIC5ib3ggaW5wdXRbdHlwZSA9IFwidGV4dFwiXTpmb2N1cywuYm94IGlucHV0W3R5cGUgPSBcInBhc3N3b3JkXCJdOmZvY3Vze1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYzEyNzJkO1xyXG4gIH1cclxuXHJcbiAgLmJveCBpbnB1dFt0eXBlID0gXCJzdWJtaXRcIl17XHJcbiAgICBib3JkZXI6MDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI3M2M3NTtcclxuICAgIHBhZGRpbmc6IDE0cHggNDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmJveCBpbnB1dFt0eXBlID0gXCJzdWJtaXRcIl06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMzZiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuYXtcclxuICAgIGNvbG9yOiBibGFja1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/navbar-inicio/navbar-inicio.component.html":
/*!************************************************************!*\
  !*** ./src/app/navbar-inicio/navbar-inicio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light light-blue lighten-4\">\r\n    <a class=\"navbar-brand logo\" style=\"margin-left: 10px;\"><img src=\"../../assets/img/logoTECBLANCO.png\" alt=\"TEC\" style=\"height: 40px;\"></a>\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\" role=\"presentation\"><a (click)=\"login()\" class=\"nav-link active\"><i class=\"fas fa-user-shield\"></i> Iniciar sesión</a></li>\r\n        </ul>\r\n        <ul class=\"navbar-nav mr-auto\">\r\n        </ul>\r\n    <div *ngIf=\"navbar\">\r\n        <a class=\"navbar-brand logo\" style=\"float: right;\"><img src=\"../../assets/img/logo-ande.png\" alt=\"ANDE\" style=\"height: 70px;\"></a>\r\n      </div>\r\n</nav>\r\n<section style=\"margin-bottom:0px; min-height: 78vh;\" [ngStyle]=\"{'display':display}\">\r\n    <form class=\"box\" name=\"formInicio\" (submit)=\"loginUser($event)\">\r\n        <h2 class=\"text-info\" style=\"padding-top: 15%;\">Iniciar sesión</h2>\r\n        <input type=\"text\" [(ngModel)] =\"username\" name=\"\" placeholder=\"Correo electrónico\" required>\r\n        <input type=\"password\" [(ngModel)]=\"pass\" name=\"\" placeholder=\"Contraseña\" required>\r\n        <input type=\"submit\" name=\"\" value=\"Login\">\r\n        <div *ngIf=\"invalid\" class=\"alert alert-danger\" role=\"alert\">\r\n            Correo o contraseña incorrectos.\r\n        </div>\r\n        <label><a href=\"/registro\" style=\"background-color:transparent;\">Crear nueva cuenta</a></label>\r\n        \r\n    </form>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar-inicio/navbar-inicio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/navbar-inicio/navbar-inicio.component.ts ***!
  \**********************************************************/
/*! exports provided: NavbarInicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarInicioComponent", function() { return NavbarInicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sesion_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sesion/client.service */ "./src/app/sesion/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoginCredentials */ "./src/app/LoginCredentials.ts");






var NavbarInicioComponent = /** @class */ (function () {
    function NavbarInicioComponent(_clientService, appComponent, router) {
        this._clientService = _clientService;
        this.appComponent = appComponent;
        this.router = router;
        this.navbar = true;
        this.display = "none";
        this.logInResult = 0;
        this.invalid = false;
    }
    NavbarInicioComponent.prototype.ngOnInit = function () {
    };
    NavbarInicioComponent.prototype.decollapse = function () {
        this.navbar = false;
    };
    NavbarInicioComponent.prototype.collapse = function () {
        this.navbar = true;
    };
    NavbarInicioComponent.prototype.login = function () {
        this.display = "block";
    };
    NavbarInicioComponent.prototype.loginUser = function (e) {
        var _this = this;
        e.preventDefault();
        var username = e.target.elements[0].value;
        var pass = e.target.elements[1].value;
        console.log(username);
        console.log(pass);
        if (username === "" || pass === "") {
            this.invalid = true;
            return;
        }
        this._clientService.logIn(username, pass).subscribe(function (resultado) {
            _this.logInResult = resultado;
            console.log("LogInResult in logIn: " + _this.logInResult);
            if (_this.logInResult > 0) {
                if (_this.logInResult == 1) {
                    _this.router.navigate(['admin']);
                    _this.appComponent.setLogIn(1);
                    localStorage.setItem('UsuarioActivo', username);
                    localStorage.setItem('TipoUsuario', 'admin');
                    _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__["LoginCredentials"].usuario = username;
                    _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__["LoginCredentials"].tipoUsuario = "admin";
                }
                else {
                    _this.router.navigate(['user']);
                    _this.appComponent.setLogIn(2);
                    localStorage.setItem('UsuarioActivo', username);
                    localStorage.setItem('TipoUsuario', 'user');
                    _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__["LoginCredentials"].usuario = username;
                    _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__["LoginCredentials"].tipoUsuario = "admin";
                }
            }
            _this.invalid = true;
        });
        console.log("LogInResult: " + this.logInResult);
        return;
    };
    NavbarInicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-inicio',
            template: __webpack_require__(/*! ./navbar-inicio.component.html */ "./src/app/navbar-inicio/navbar-inicio.component.html"),
            styles: [__webpack_require__(/*! ./navbar-inicio.component.css */ "./src/app/navbar-inicio/navbar-inicio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sesion_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarInicioComponent);
    return NavbarInicioComponent;
}());



/***/ }),

/***/ "./src/app/navbar-user/navbar-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/navbar-user/navbar-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-light .navbar-nav .nav-link {\r\n    color:white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyLXVzZXIvbmF2YmFyLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci11c2VyL25hdmJhci11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/navbar-user/navbar-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/navbar-user/navbar-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav style=\"background: #140e39;color: white;\" class=\"navbar navbar-light navbar-expand-md navigation-clean-search\">\r\n    <div class=\"container\"> \r\n          <a class=\"navbar-brand logo\" routerLink='/user' routerLinkActive=\"active\"><img src=\"../../assets/img/logoTECBLANCO.png\" alt=\"TEC\" style=\"height: 50px;\"></a>\r\n      <button (click)=\"collapse()\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navcol-1\"><i\r\n          class=\"fas fa-bars fa-1x\"></i></button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\r\n            <ul class=\"nav navbar-nav\" style=\"color: white;\">\r\n                <li class=\"nav-item\" role=\"presentation\"><a (click)=\"decollapse()\" class=\"nav-link\" routerLink=\"/filtro\" routerLinkActive=\"active\"><i class=\"fas fa-search\"></i> Problemas</a></li>\r\n                <li class=\"nav-item\" role=\"presentation\"><a (click)=\"decollapse()\" class=\"nav-link\" routerLink=\"/calendario\" routerLinkActive=\"active\"><i class=\"fab fa-searchengin\"></i> Filtro por fecha</a></li>\r\n                <li class=\"nav-item\" role=\"presentation\"><a (click)=\"decollapse()\" class=\"nav-link\" routerLink=\"/enviarSugerencia\" routerLinkActive=\"active\"><i class=\"fa fa-pencil-square\"></i> Sugerencias</a></li>\r\n                <li class=\"nav-item\" role=\"presentation\"><a (click)=\"decollapse()\" class=\"nav-link\" (click)=\"logOut()\" style=\"cursor: pointer;\"><i class=\"fas fa-sign-out-alt\"></i> Salir</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n  </nav> \r\n\r\n             "

/***/ }),

/***/ "./src/app/navbar-user/navbar-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/navbar-user/navbar-user.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarUserComponent", function() { return NavbarUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarUserComponent = /** @class */ (function () {
    function NavbarUserComponent(appComponent, router, route) {
        this.appComponent = appComponent;
        this.router = router;
        this.route = route;
        this.navbar = true;
    }
    NavbarUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.user = params['idCliente'];
        });
    };
    NavbarUserComponent.prototype.logOut = function () {
        this.appComponent.setLogIn(0);
        localStorage.clear();
        this.router.navigate(["/login"]);
    };
    NavbarUserComponent.prototype.decollapse = function () {
        this.navbar = false;
    };
    NavbarUserComponent.prototype.collapse = function () {
        this.navbar = true;
    };
    NavbarUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-user',
            template: __webpack_require__(/*! ./navbar-user.component.html */ "./src/app/navbar-user/navbar-user.component.html"),
            styles: [__webpack_require__(/*! ./navbar-user.component.css */ "./src/app/navbar-user/navbar-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NavbarUserComponent);
    return NavbarUserComponent;
}());



/***/ }),

/***/ "./src/app/obras/obra.ts":
/*!*******************************!*\
  !*** ./src/app/obras/obra.ts ***!
  \*******************************/
/*! exports provided: Obra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obra", function() { return Obra; });
var Obra = /** @class */ (function () {
    function Obra(ID_OBRA_DE_ARTE, TIPO_COLECCION, TIPO_DE_TECNICA, NOMBRE_DE_OBRA, NOMBRE_ARTISTA, IMG_SOURCE, LARGO, ANCHO, YEAR, FECHA_INICIO, FECHA_FIN) {
        if (ID_OBRA_DE_ARTE === void 0) { ID_OBRA_DE_ARTE = 0; }
        if (TIPO_COLECCION === void 0) { TIPO_COLECCION = ""; }
        if (TIPO_DE_TECNICA === void 0) { TIPO_DE_TECNICA = ""; }
        if (NOMBRE_DE_OBRA === void 0) { NOMBRE_DE_OBRA = ""; }
        if (NOMBRE_ARTISTA === void 0) { NOMBRE_ARTISTA = ""; }
        if (IMG_SOURCE === void 0) { IMG_SOURCE = ""; }
        if (LARGO === void 0) { LARGO = 0; }
        if (ANCHO === void 0) { ANCHO = 0; }
        if (YEAR === void 0) { YEAR = 0; }
        if (FECHA_INICIO === void 0) { FECHA_INICIO = new Date().toLocaleDateString(); }
        if (FECHA_FIN === void 0) { FECHA_FIN = new Date().toLocaleDateString(); }
        this.ID_OBRA_DE_ARTE = ID_OBRA_DE_ARTE;
        this.TIPO_COLECCION = TIPO_COLECCION;
        this.TIPO_DE_TECNICA = TIPO_DE_TECNICA;
        this.NOMBRE_DE_OBRA = NOMBRE_DE_OBRA;
        this.NOMBRE_ARTISTA = NOMBRE_ARTISTA;
        this.IMG_SOURCE = IMG_SOURCE;
        this.LARGO = LARGO;
        this.ANCHO = ANCHO;
        this.YEAR = YEAR;
        this.FECHA_INICIO = FECHA_INICIO;
        this.FECHA_FIN = FECHA_FIN;
    }
    return Obra;
}());



/***/ }),

/***/ "./src/app/obras/obras-edit/obras-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/obras/obras-edit/obras-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    width: 90%;\r\n  }\r\n.form-control-select{\r\n  width: 90%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JyYXMvb2JyYXMtZWRpdC9vYnJhcy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0VBQ1o7QUFDRjtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL29icmFzL29icmFzLWVkaXQvb2JyYXMtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4uZm9ybS1jb250cm9sLXNlbGVjdHtcclxuICB3aWR0aDogOTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/obras/obras-edit/obras-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/obras/obras-edit/obras-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<body>\r\n    <main class=\"page contact-us-page\">\r\n        <section class=\"clean-block clean-form dark\" style=\" min-height: 78vh;\">\r\n            <div class=\"container\">\r\n                <div class=\"block-heading\">\r\n                    <h2 class=\"text-info\">Editar obra</h2>\r\n                </div>\r\n                <form *ngIf=\"obra\" (submit)=\"editar($event)\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\"><label>Nombre artista:</label>\r\n                                <input [(ngModel)]=\"obra.NOMBRE_ARTISTA\" name=\"NOMBRE_ARTISTA\" \r\n                                class=\"form-control\" type=\"text\" placeholder=\"{{obra.NOMBRE_ARTISTA}}\">\r\n                            </div>\r\n                            <div class=\"form-group\"><label>Nombre de obra:</label>\r\n                                <input [(ngModel)]=\"obra.NOMBRE_DE_OBRA\" name=\"NOMBRE_DE_OBRA\" \r\n                                class=\"form-control\" type=\"text\" placeholder=\"{{obra.NOMBRE_DE_OBRA}}\">\r\n                            </div>\r\n                            <div class=\"form-group\"><label>Largo:</label>\r\n                                <input [(ngModel)]=\"obra.LARGO\" name=\"LARGO\" \r\n                                class=\"form-control\" type=\"number\" placeholder=\"{{obra.LARGO}}\" inputmode=\"numeric\">\r\n                            </div>\r\n                            <div class=\"form-group\"><label>Ancho:</label>\r\n                                <input [(ngModel)]=\"obra.ANCHO\" name=\"ANCHO\" \r\n                                class=\"form-control\" type=\"number\" placeholder=\"{{obra.ANCHO}}\" inputmode=\"numeric\">\r\n                            </div>\r\n                            <div class=\"form-group\"><label>Año:</label>\r\n                                <input [(ngModel)]=\"obra.YEAR\" name=\"YEAR\" \r\n                                class=\"form-control\" type=\"number\" placeholder=\"{{obra.YEAR}}\" inputmode=\"numeric\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\"><label>Fecha Inicio:</label>\r\n                                <input [(ngModel)]=\"obra.FECHA_INICIO\" name=\"FECHA_INICIO.substring(0,10)\" \r\n                                class=\"form-control\" type=\"date\">\r\n                            </div> \r\n                            <div class=\"form-group\"><label>Fecha Fin:</label>\r\n                                <input [(ngModel)]=\"obra.FECHA_FIN\" name=\"FECHA_FIN\" \r\n                                class=\"form-control\" type=\"date\">\r\n                            </div>\r\n                            <div class=\"form-group\"><label>Tipo de colección:</label>\r\n                                <select class=\"form-control-select\" [(ngModel)]=\"obra.TIPO_COLECCION\"\r\n                                [ngModelOptions]=\"{standalone: true}\" name=\"TIPO_COLECCION\">\r\n                                    <option *ngFor=\"let coleccion of tiposColecciones\" [value]=\"coleccion.DESCRIPCION\">\r\n                                        {{coleccion.DESCRIPCION}}</option>\r\n                                </select>\r\n                            </div>  \r\n                            <div class=\"form-group\"><label>Tipo técnica:</label>\r\n                                <select class=\"form-control-select\" [(ngModel)]=\"obra.TIPO_DE_TECNICA\" \r\n                                [ngModelOptions]=\"{standalone: true}\" name=\"TIPO_DE_TECNICA\">\r\n                                    <option *ngFor=\"let tecnica of tiposTecnicas\" [value]=\"tecnica.DESCRIPCION\">\r\n                                        {{tecnica.DESCRIPCION}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col ml-auto\">\r\n                            <input class=\"form-control\" type=\"file\" accept=\"image/*\"\r\n                                (change)='changeImage($event)' />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"><button class=\"btn RedButton\" type=\"submit\">Guardar cambios</button>\r\n                    </div>\r\n                    <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\r\n                        Obra no editada.\r\n                    </div>\r\n                    <div *ngIf=\"editada\" class=\"alert alert-success\" role=\"alert\">\r\n                        Obra editada exitosamente.\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </section>\r\n    </main>"

/***/ }),

/***/ "./src/app/obras/obras-edit/obras-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/obras/obras-edit/obras-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: ObrasEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrasEditComponent", function() { return ObrasEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _obras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../obras.service */ "./src/app/obras/obras.service.ts");
/* harmony import */ var _obras_new_tipo_coleccion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../obras-new/tipo-coleccion.service */ "./src/app/obras/obras-new/tipo-coleccion.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/LoginCredentials */ "./src/app/LoginCredentials.ts");








var ObrasEditComponent = /** @class */ (function () {
    function ObrasEditComponent(appComponent, route, obraService, tipoColeccionService, router, appComponenet) {
        this.appComponent = appComponent;
        this.route = route;
        this.obraService = obraService;
        this.tipoColeccionService = tipoColeccionService;
        this.router = router;
        this.appComponenet = appComponenet;
        this.editada = false;
        this.error = false;
        this.idObra = this.route.snapshot.paramMap.get('id');
        this.getObra();
    }
    ObrasEditComponent.prototype.ngOnInit = function () {
        if (src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_7__["LoginCredentials"].tipoUsuario != "admin") {
            this.appComponent.setLogIn(0);
            this.router.navigate([""]);
        }
        this.appComponenet.setLogIn(1);
    };
    ObrasEditComponent.prototype.getObra = function () {
        var _this = this;
        this.obraService.getObra(this.idObra)
            .subscribe(function (obra) {
            _this.obra = obra[0];
            console.log(obra[0]);
            _this.cargarTipos();
        });
    };
    ObrasEditComponent.prototype.cargarTipos = function () {
        var _this = this;
        this.tipoColeccionService.getTipos().then(function (tipos) {
            _this.tiposColecciones = tipos[0];
            _this.tiposTecnicas = tipos[1];
            console.log(_this.tiposColecciones);
            console.log(_this.tiposTecnicas);
        });
    };
    ObrasEditComponent.prototype.changeImage = function (event) {
        this.imageFile = event.target.files[0];
    };
    ObrasEditComponent.prototype.editar = function (e) {
        var _this = this;
        console.log(this.obra);
        if (this.validarObra()) {
            this.obraService.edit(this.obra);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(500).subscribe(function (x) {
                _this.router.navigate(['obras']);
            });
        }
        else {
            this.error = true;
            this.editada = false;
            return;
        }
    };
    ObrasEditComponent.prototype.validarObra = function () {
        if (this.obra.NOMBRE_ARTISTA === "" || this.obra.NOMBRE_DE_OBRA === "" ||
            this.obra.LARGO === null || this.obra.ANCHO === null || this.obra.YEAR === null ||
            this.obra.TIPO_COLECCION === "" || this.obra.TIPO_DE_TECNICA === "")
            return false;
        return true;
    };
    ObrasEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-obras-edit',
            template: __webpack_require__(/*! ./obras-edit.component.html */ "./src/app/obras/obras-edit/obras-edit.component.html"),
            styles: [__webpack_require__(/*! ./obras-edit.component.css */ "./src/app/obras/obras-edit/obras-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _obras_service__WEBPACK_IMPORTED_MODULE_3__["ObraService"],
            _obras_new_tipo_coleccion_service__WEBPACK_IMPORTED_MODULE_4__["TipoColeccionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], ObrasEditComponent);
    return ObrasEditComponent;
}());



/***/ }),

/***/ "./src/app/obras/obras-new/obras-new.component.css":
/*!*********************************************************!*\
  !*** ./src/app/obras/obras-new/obras-new.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    width: 90%;\r\n  }\r\n.form-control-select{\r\n  width: 90%;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JyYXMvb2JyYXMtbmV3L29icmFzLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtFQUNaO0FBQ0Y7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9vYnJhcy9vYnJhcy1uZXcvb2JyYXMtbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbi5mb3JtLWNvbnRyb2wtc2VsZWN0e1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/obras/obras-new/obras-new.component.html":
/*!**********************************************************!*\
  !*** ./src/app/obras/obras-new/obras-new.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n</head>\r\n\r\n<body>\r\n    <main class=\"page contact-us-page\">\r\n        <section class=\"clean-block clean-form dark\" style=\" min-height: 78vh;\">\r\n            <div class=\"container\">\r\n                <div class=\"block-heading\">\r\n                    <h2 class=\"text-info\">Registro obra</h2>\r\n                    <p></p>\r\n                </div> \r\n                <form (submit)=\"agregar($event)\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\"><label>Nombre del artista:</label>\r\n                                <input [(ngModel)]=\"obra.NOMBRE_ARTISTA\" name=\"NOMBRE_ARTISTA\" \r\n                                class=\"form-control\" type=\"text\" required>\r\n                            </div>\r\n                            <div class=\"form-group\"><label>Nombre de la obra:</label>\r\n                                <input [(ngModel)]=\"obra.NOMBRE_DE_OBRA\" name=\"NOMBRE_DE_OBRA\" \r\n                                class=\"form-control\" type=\"text\" required></div>\r\n                            <div class=\"form-group\"><label>Largo:</label>\r\n                                <input [(ngModel)]=\"obra.LARGO\" name=\"LARGO\" type=\"number\" \r\n                                class=\"form-control\" inputmode=\"numeric\" required>\r\n                            </div>\r\n                            <div class=\"form-group\"><label>Ancho:</label>\r\n                                <input [(ngModel)]=\"obra.ANCHO\" name=\"ANCHO\" type=\"number\"\r\n                                class=\"form-control\" inputmode=\"numeric\" required>\r\n                            </div>\r\n                            <div class=\"form-group\"><label>Año:</label>\r\n                                <input [(ngModel)]=\"obra.YEAR\" name=\"YEAR\" type=\"number\"\r\n                                class=\"form-control\" inputmode=\"numeric\" required></div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <label>Fecha Inicio:</label>\r\n                            <div class=\"form-group\">\r\n                                <input [(ngModel)]=\"obra.FECHA_INICIO\" style=\"font-size: 10;\" name=\"FECHA_INICIO\" type=\"date\"\r\n                                class=\"form-control-select\" required>\r\n                            </div>\r\n                            <label>Fecha Fin:</label>\r\n                            <div class=\"form-group\">\r\n                                <input [(ngModel)]=\"obra.FECHA_FIN\" name=\"FECHA_FIN\" type=\"date\"\r\n                                class=\"form-control-select\" required>\r\n                            </div>\r\n                            <label>Tipo de colección:</label> \r\n                            <div class=\"form-group\">\r\n                                <select class=\"form-control-select\" type=\"number\" [(ngModel)]=\"obra.TIPO_COLECCION\"\r\n                                    name=\"tipoColeccion\">\r\n                                    <option value=\"\" disabled selected hidden></option>\r\n                                    <option *ngFor=\"let coleccion of tipoColeccion\" [ngValue]=\"coleccion.DESCRIPCION\">\r\n                                        {{coleccion.DESCRIPCION}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <label>Tipo técnica:</label>\r\n                            <div class=\"form-group\">\r\n                                <select class=\"form-control-select\" type=\"number\" [(ngModel)]=\"obra.TIPO_DE_TECNICA\" name=\"tipoTecnica\">\r\n                                    <option value=\"\" disabled selected hidden></option>\r\n                                    <option *ngFor=\"let tecnica of tipoTecnica\" [ngValue]=\"tecnica.DESCRIPCION\">\r\n                                        {{tecnica.DESCRIPCION}}</option>\r\n                                    \r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col ml-auto\">\r\n                            <input class=\"form-control\" type=\"file\" name=\"image\" accept=\"image/*\"\r\n                                (change)='changeImage($event)' />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn RedButton\" type=\"submit\">Agregar</button>\r\n                    </div>\r\n                    <!--- <div *ngIf=\"!agregado\" class=\"alert alert-danger\" role=\"alert\">\r\n                        Obra no agregada.\r\n                    </div>\r\n                    <div *ngIf=\"agregado\" class=\"alert alert-success\" role=\"alert\">\r\n                        Problema ingresado exitosamente.\r\n                    </div>-->\r\n                    <!---<div class=\"row\">\r\n                        <div class=\"col form-group\"><label>Nueva colección:</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"coleccion.DESCRIPCION\" name=\"COLECCION\"\r\n                                inputmode=\"text\" (keydown.enter)=\"agregarColeccion($event)\">\r\n                        </div>\r\n                        <div class=\"col form-group\"><label>Nueva técnica:</label>\r\n                            <input class=\"form-control\" [(ngModel)]=\"tecnica.DESCRIPCION\" name=\"TIPO_TECNICA\" \r\n                                type=\"text\" (keydown.enter)=\"agregarTecnica($event)\">\r\n                        </div>\r\n                    </div>-->\r\n                </form>\r\n            </div>            \r\n        </section>\r\n    </main>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/obras/obras-new/obras-new.component.ts":
/*!********************************************************!*\
  !*** ./src/app/obras/obras-new/obras-new.component.ts ***!
  \********************************************************/
/*! exports provided: ObrasNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrasNewComponent", function() { return ObrasNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _opcionesObras__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opcionesObras */ "./src/app/obras/obras-new/opcionesObras.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tipo_coleccion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tipo-coleccion.service */ "./src/app/obras/obras-new/tipo-coleccion.service.ts");
/* harmony import */ var _tipo_coleccion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tipo-coleccion */ "./src/app/obras/tipo-coleccion.ts");
/* harmony import */ var _tipo_tecnica__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tipo-tecnica */ "./src/app/obras/tipo-tecnica.ts");
/* harmony import */ var _obra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../obra */ "./src/app/obras/obra.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _obras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../obras.service */ "./src/app/obras/obras.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/LoginCredentials */ "./src/app/LoginCredentials.ts");













var ObrasNewComponent = /** @class */ (function () {
    function ObrasNewComponent(appComponent, tipoColeccionService, sanitizer, obraService, router, appComponenet) {
        this.appComponent = appComponent;
        this.tipoColeccionService = tipoColeccionService;
        this.sanitizer = sanitizer;
        this.obraService = obraService;
        this.router = router;
        this.appComponenet = appComponenet;
        this.obra = new _obra__WEBPACK_IMPORTED_MODULE_6__["Obra"];
        this.opcionesObras = new _opcionesObras__WEBPACK_IMPORTED_MODULE_1__["OpcionesObras"];
        this.imageFile = null;
        this.coleccion = new _tipo_coleccion__WEBPACK_IMPORTED_MODULE_4__["TipoColeccion"];
        this.tecnica = new _tipo_tecnica__WEBPACK_IMPORTED_MODULE_5__["TipoTecnica"];
        this.cargarTipos();
    }
    ObrasNewComponent.prototype.ngOnInit = function () {
        if (src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_12__["LoginCredentials"].tipoUsuario != "admin") {
            this.appComponent.setLogIn(0);
            this.router.navigate([""]);
            return;
        }
        this.cargarTipos();
        this.appComponenet.setLogIn(1);
    };
    ObrasNewComponent.prototype.cargarTipos = function () {
        var _this = this;
        this.tipoColeccionService.getTipos().then(function (tipos) {
            _this.tipoColeccion = tipos[0];
            _this.tipoTecnica = tipos[1];
            console.log(tipos);
            console.log(_this.tipoColeccion);
            console.log(_this.tipoTecnica);
        });
    };
    ObrasNewComponent.prototype.cambioTipoColeccion = function (nuevoTipo) {
        this.tipoColeccion = nuevoTipo;
    };
    ObrasNewComponent.prototype.changeImage = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.imagepath = reader.result;
        };
        reader.onerror = function (error) {
            console.log("Error: " + error);
        };
    };
    ObrasNewComponent.prototype.agregar = function (e) {
        var _this = this;
        console.log(this.obra);
        this.obra.IMG_SOURCE = this.imagepath;
        e.preventDefault();
        this.obraService.create(this.obra);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(500).subscribe(function (x) {
            _this.router.navigate(['obras']);
        });
    };
    ObrasNewComponent.prototype.agregarColeccion = function (e) {
        if (this.coleccion.DESCRIPCION === "") {
            return;
        }
        this.tipoColeccionService.addTipoColeccion(this.coleccion);
        this.cargarTipos();
        this.coleccion.DESCRIPCION = "";
    };
    ObrasNewComponent.prototype.agregarTecnica = function (e) {
        if (this.tecnica.DESCRIPCION === "") {
            return;
        }
        this.tipoColeccionService.addTipoTecnica(this.tecnica);
        this.cargarTipos();
        this.tecnica.DESCRIPCION = "";
    };
    ObrasNewComponent.prototype.validarObra = function () {
        if (this.obra.NOMBRE_ARTISTA === "" || this.obra.NOMBRE_DE_OBRA === "" ||
            this.obra.IMG_SOURCE === "" || this.obra.LARGO === 0 || this.obra.ANCHO === 0 ||
            this.obra.YEAR === 0 || this.obra.TIPO_COLECCION === "" || this.obra.TIPO_DE_TECNICA === "" ||
            this.obra.TIPO_COLECCION === "" || this.obra.TIPO_DE_TECNICA === "")
            return false;
        if (new Date(this.obra.FECHA_INICIO) > new Date(this.obra.FECHA_FIN))
            return false;
        return true;
    };
    ObrasNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-obras-new',
            template: __webpack_require__(/*! ./obras-new.component.html */ "./src/app/obras/obras-new/obras-new.component.html"),
            styles: [__webpack_require__(/*! ./obras-new.component.css */ "./src/app/obras/obras-new/obras-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _tipo_coleccion_service__WEBPACK_IMPORTED_MODULE_3__["TipoColeccionService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"],
            _obras_service__WEBPACK_IMPORTED_MODULE_8__["ObraService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]])
    ], ObrasNewComponent);
    return ObrasNewComponent;
}());



/***/ }),

/***/ "./src/app/obras/obras-new/opcionesObras.ts":
/*!**************************************************!*\
  !*** ./src/app/obras/obras-new/opcionesObras.ts ***!
  \**************************************************/
/*! exports provided: OpcionesObras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcionesObras", function() { return OpcionesObras; });
var OpcionesObras = /** @class */ (function () {
    function OpcionesObras(tiposColecciones, tiposTecnicas) {
        if (tiposColecciones === void 0) { tiposColecciones = []; }
        if (tiposTecnicas === void 0) { tiposTecnicas = []; }
        this.tiposColecciones = tiposColecciones;
        this.tiposTecnicas = tiposTecnicas;
    }
    return OpcionesObras;
}());



/***/ }),

/***/ "./src/app/obras/obras-new/tipo-coleccion.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/obras/obras-new/tipo-coleccion.service.ts ***!
  \***********************************************************/
/*! exports provided: TipoColeccionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoColeccionService", function() { return TipoColeccionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var TipoColeccionService = /** @class */ (function () {
    function TipoColeccionService(_http) {
        this._http = _http;
    }
    TipoColeccionService.prototype.getTipos = function () {
        return this._http.get('/opcionesObras')
            .map(function (data) { return data.json(); }).toPromise();
    };
    TipoColeccionService.prototype.getTiposColeccion = function () {
        return this._http.get('/tipoColeccion')
            .map(function (data) { return data.json(); }).toPromise();
    };
    TipoColeccionService.prototype.addTipoColeccion = function (coleccion) {
        return this._http.post('/tipoColeccion', coleccion)
            .map(function (data) { return data.json(); }).toPromise();
    };
    TipoColeccionService.prototype.getTiposTecnicas = function () {
        return this._http.get('/tipoTecnica')
            .map(function (data) { return data.json(); }).toPromise();
    };
    TipoColeccionService.prototype.addTipoTecnica = function (tecnica) {
        return this._http.post('/tipoTecnica', tecnica)
            .map(function (data) { return data.json(); }).toPromise();
    };
    TipoColeccionService.prototype.getTipoColeccion = function (id) {
        return this._http.get('/tipoColeccion/' + id)
            .map(function (res) { return res.json(); });
    };
    TipoColeccionService.prototype.getTipoTecnica = function (id) {
        return this._http.get('/tipoTecnica/' + id)
            .map(function (res) { return res.json(); });
    };
    TipoColeccionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], TipoColeccionService);
    return TipoColeccionService;
}());



/***/ }),

/***/ "./src/app/obras/obras.component.css":
/*!*******************************************!*\
  !*** ./src/app/obras/obras.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.popup {\r\n    margin: 70px auto;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    width: 30%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n}\r\n  \r\n.popup p {\r\n  margin-top: 0;\r\n  color: #333;\r\n  font-family: Tahoma, Arial, sans-serif;\r\n}\r\n  \r\n.card-image{\r\n  height: 300px; \r\n  width: 290px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JyYXMvb2JyYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9vYnJhcy9vYnJhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wb3B1cCB7XHJcbiAgICBtYXJnaW46IDcwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcclxufVxyXG4gIFxyXG4ucG9wdXAgcCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2V7XHJcbiAgaGVpZ2h0OiAzMDBweDsgXHJcbiAgd2lkdGg6IDI5MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/obras/obras.component.html":
/*!********************************************!*\
  !*** ./src/app/obras/obras.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<body>\r\n    <main class=\"page service-page\">\r\n        <section class=\"clean-block clean-services dark\" style=\" min-height: 78vh;\">\r\n            <div class=\"container\">\r\n                <div class=\"block-heading\">\r\n                    <h2 class=\"text-info\">Administrador de obras de arte</h2>\r\n                </div>\r\n                <button type=\"button\" class=\"BlueButton\" (click)=\"newObra()\">Agregar nueva obra</button>\r\n\r\n                <div *ngIf=!obras style=\"display: block;margin-left: auto;margin-right: auto;\" class=\"loader\"></div>\r\n                \r\n                <div class=\"row\">\r\n                    <div style=\"padding-bottom: 5px;\" class=\"col-md-6 col-lg-4\" *ngFor=\"let obra of obras\">\r\n                        <div class=\"card\">\r\n                            <img class=\"card-img-top w-100 d-block card-image\" src=\"{{obra.IMG_SOURCE}}\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">{{obra.NOMBRE_DE_OBRA}}</h4>\r\n                                <p class=\"card-text\">{{obra.NOMBRE_ARTISTA}} &nbsp;* \r\n                                    {{obra.LARGO}} cm x {{obra.ANCHO}} cm * {{obra.YEAR}} *<br>\r\n                                </p> \r\n                            </div>\r\n                            <div>\r\n                                <button class=\"btn btn-outline-primary btn-sm\" type=\"button\" (click)=\"editObra(obra)\">Editar</button>\r\n                                <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"openModalDialog(obra.ID_OBRA_DE_ARTE)\">Eliminar</button>\r\n                                <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\r\n                                    <div class=\"popup\" [ngStyle]=\"{'display':display}\">\r\n                                        <p>¿Está seguro de que desea eliminar la obra seleccionada?</p>\r\n                                        <button type=\"button\" class=\"close\" (click)=\"closeModalDialog()\"><span aria-hidden=\"true\"></span></button>\r\n                                        <button type=\"button\" class=\"btn_si\" (click) =\"eliminarObra()\" (click)=\"closeModalDialog()\">Si</button>\r\n                                        <button type=\"button\" class=\"btn_no\" (click)=\"closeModalDialog()\">No</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </main>\r\n</body>"

/***/ }),

/***/ "./src/app/obras/obras.component.ts":
/*!******************************************!*\
  !*** ./src/app/obras/obras.component.ts ***!
  \******************************************/
/*! exports provided: ObrasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrasComponent", function() { return ObrasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _obras_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obras.service */ "./src/app/obras/obras.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");





var ObrasComponent = /** @class */ (function () {
    function ObrasComponent(obraService, router, appComponenet) {
        this.obraService = obraService;
        this.router = router;
        this.appComponenet = appComponenet;
        this.display = 'none';
    }
    ObrasComponent.prototype.ngOnInit = function () {
        this.cargarObras();
        this.appComponenet.setLogIn(1);
    };
    ObrasComponent.prototype.cargarObras = function () {
        var _this = this;
        this.obraService.getObras().then(function (obras) {
            _this.obras = obras;
            console.log(_this.obras);
        });
    };
    ObrasComponent.prototype.newObra = function () {
        this.router.navigate(['obras-new']);
    };
    ObrasComponent.prototype.editObra = function (obra) {
        this.obra = obra;
        this.router.navigate(['/obras-edit', this.obra.ID_OBRA_DE_ARTE]);
    };
    ObrasComponent.prototype.eliminarObra = function () {
        console.log("ID " + this.obrasEliminar);
        this.obraService.delete(this.obrasEliminar);
        location.reload();
    };
    //Model implementation
    //Model implementation
    ObrasComponent.prototype.openModalDialog = function (id) {
        this.obrasEliminar = id;
        this.display = 'block';
    };
    ObrasComponent.prototype.closeModalDialog = function () {
        this.display = 'none';
    };
    ObrasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-obras',
            template: __webpack_require__(/*! ./obras.component.html */ "./src/app/obras/obras.component.html"),
            styles: [__webpack_require__(/*! ./obras.component.css */ "./src/app/obras/obras.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_obras_service__WEBPACK_IMPORTED_MODULE_2__["ObraService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
    ], ObrasComponent);
    return ObrasComponent;
}());



/***/ }),

/***/ "./src/app/obras/obras.service.ts":
/*!****************************************!*\
  !*** ./src/app/obras/obras.service.ts ***!
  \****************************************/
/*! exports provided: ObraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObraService", function() { return ObraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var ObraService = /** @class */ (function () {
    /*Para crear datos se utiliza la peticion de http.POST
     *Para eliminar datos http.delete
     *Para actualizar datos http.put
     *Para solicitar http.get
     */
    function ObraService(_http) {
        this._http = _http;
    }
    ObraService.prototype.getObras = function () {
        return this._http.get('/obras')
            .map(function (data) { return data.json(); }).toPromise();
    };
    ObraService.prototype.getObra = function (id) {
        return this._http.get('/obras/' + id)
            .map(function (res) { return res.json(); });
    };
    ObraService.prototype.getObrasDate = function (id) {
        return this._http.get('/obrasDatee/' + id)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ObraService.prototype.create = function (obra) {
        return this._http.post('/obras', obra)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ObraService.prototype.edit = function (obra) {
        return this._http.put('/obras', obra)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ObraService.prototype.delete = function (id) {
        return this._http.delete('/obras/' + id)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ObraService.prototype.uploadImage = function (image) {
        var formData = new FormData();
        formData.append("image", image, image.name);
        return this._http.post('/upload', formData);
    };
    ObraService.prototype.getObrasYear = function () {
        return this._http.get('/obras')
            .map(function (data) { return data.json(); }).toPromise();
    };
    ObraService.prototype.getObraActual = function () {
        return this._http.get('/obraActual')
            .map(function (res) { return res.json(); });
    };
    ObraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ObraService);
    return ObraService;
}());



/***/ }),

/***/ "./src/app/obras/tipo-coleccion.ts":
/*!*****************************************!*\
  !*** ./src/app/obras/tipo-coleccion.ts ***!
  \*****************************************/
/*! exports provided: TipoColeccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoColeccion", function() { return TipoColeccion; });
var TipoColeccion = /** @class */ (function () {
    function TipoColeccion(DESCRIPCION) {
        if (DESCRIPCION === void 0) { DESCRIPCION = ""; }
        this.DESCRIPCION = DESCRIPCION;
    }
    return TipoColeccion;
}());



/***/ }),

/***/ "./src/app/obras/tipo-tecnica.ts":
/*!***************************************!*\
  !*** ./src/app/obras/tipo-tecnica.ts ***!
  \***************************************/
/*! exports provided: TipoTecnica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoTecnica", function() { return TipoTecnica; });
var TipoTecnica = /** @class */ (function () {
    function TipoTecnica(DESCRIPCION) {
        if (DESCRIPCION === void 0) { DESCRIPCION = ""; }
        this.DESCRIPCION = DESCRIPCION;
    }
    return TipoTecnica;
}());



/***/ }),

/***/ "./src/app/problema/editar-problema/editar-problema.component.css":
/*!************************************************************************!*\
  !*** ./src/app/problema/editar-problema/editar-problema.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2JsZW1hL2VkaXRhci1wcm9ibGVtYS9lZGl0YXItcHJvYmxlbWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/problema/editar-problema/editar-problema.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/problema/editar-problema/editar-problema.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n\r\n<body style=\" min-height: 78vh;\">\r\n        <form [formGroup]=\"form\" (ngSubmit) = \"form.valid && update()\">\r\n                <label>Nombre del problema</label>\r\n                    <input class=\"form-control rounded\" type=\"text\" name=\"nombre\" \r\n                    formControlName=\"nombre\" [ngClass]=\"{'is-invalid':\r\n                    form.get('nombre').touched && form.get('nombre').invalid}\">\r\n                    <div *ngIf=\"form.get('nombre').touched && form.get('nombre').invalid\" class = \"invalid-feedback\">\r\n                        <div>Nombre del problema es un campo requerido</div>\r\n                    </div>\r\n\r\n                <label>Categoría</label>\r\n                <div>\r\n                <select class=\"form-control-select rounded\" name=\"ID_REGION\" formControlName=\"categoria\" [ngClass]=\"{'is-invalid':\r\n                form.get('categoria').touched && form.get('categoria').invalid}\">\r\n                        <option *ngFor=\"let option of tipos\" [value]=\"option.ID_TIPO_PROBLEMA\">{{option.TIPO_PROBLEMA}}\r\n                        </option>     \r\n                        <option selected disabled hidden>{{editProblema.TIPO_PROBLEMA}}</option>\r\n                </select>\r\n            </div>\r\n                <div *ngIf=\"form.get('categoria').touched && form.get('categoria').invalid\" class = \"invalid-feedback\">\r\n                    <div>Categoría es un campo requerido</div>\r\n                </div>\r\n\r\n                <label>Enunciado del problema</label>\r\n                <p><textarea class=\"form-control rounded\" name=\"problema\" required type=\"text\"\r\n                    formControlName=\"problema\" [ngClass]=\"{'is-invalid':\r\n                    form.get('problema').touched && form.get('problema').invalid}\"></textarea>\r\n                </p>\r\n                <div *ngIf=\"form.get('problema').touched && form.get('problema').invalid\" class = \"invalid-feedback\">\r\n                        <div>El enunciado del problema es un campo requerido</div>\r\n                    </div>\r\n                <!--<button type=\"button\" class=\"btn BlueButton\" (click) =\"visualizarProblema()\">Visualizar problema</button>\r\n                <p *ngIf=\"verProblema\">\r\n                    <ng-katex-paragraph [paragraph]=\"problemaLatex\"></ng-katex-paragraph>\r\n                </p>-->\r\n                <div>\r\n                <label>Fecha de liberación del problema</label>\r\n            </div>\r\n                <input (change)=\"setMinDate()\" class=\"form-control rounded\" type=\"date\" formControlName=\"liberacion_problema\"  \r\n                    [ngClass]=\"{'is-invalid': form.get('liberacion_problema').touched && form.get('liberacion_problema').invalid}\">\r\n                \r\n                <div *ngIf=\"form.get('liberacion_problema').touched && form.get('liberacion_problema').invalid\" class = \"invalid-feedback\">\r\n                    <div>Fecha de liberación del problema es un campo requerido</div>\r\n                </div>\r\n                \r\n                \r\n                <label>Solución del problema</label>\r\n                <p><textarea class=\"form-control rounded\" name=\"solucion\" \r\n                    required type=\"text\" formControlName=\"solucion\" [ngClass]=\"{'is-invalid':\r\n                    form.get('solucion').touched && form.get('solucion').invalid}\">\r\n                    </textarea>\r\n                </p>    \r\n                    <div *ngIf=\"form.get('solucion').touched && form.get('solucion').invalid\" class = \"invalid-feedback\">\r\n                            <div>El enunciado de la solución es un campo requerido</div>\r\n                    </div>\r\n                    <!---\r\n                  <button type=\"button\" class=\"btn BlueButton\" (click) =\"visualizarSolucion()\">Visualizar solución</button>       \r\n                    <p *ngIf=\"verSolucion\">\r\n                      <ng-katex-paragraph [paragraph]=\"solucionLatex\"></ng-katex-paragraph>\r\n\r\n                    </p>-->\r\n                <div>\r\n                <label>Fecha de liberación de la solución</label>\r\n            </div>\r\n                    <input min=\"{{minDate}}\"class=\"form-control rounded\" formControlName=\"liberacion_solucion\" [ngClass]=\"{'is-invalid':\r\n                    form.get('liberacion_solucion').touched && form.get('liberacion_solucion').invalid}\" type=\"date\">\r\n                <div *ngIf=\"form.get('liberacion_solucion').touched && form.get('liberacion_solucion').invalid\" class = \"invalid-feedback\">\r\n                        <div *ngIf=\"form.get('liberacion_solucion').errors.required\">Fecha de liberación es un campo requerido</div>\r\n                </div>\r\n                <button [disabled]=\"!form.valid\" class=\"btn RedButton\" type=\"submit\">\r\n                    Guardar cambios\r\n                </button>\r\n                <div *ngIf=\"!agregado\" class=\"alert alert-danger\" role=\"alert\">\r\n                    Error al agregar problema.\r\n                </div>\r\n                <div *ngIf=\"exito\" class=\"alert alert-success\" role=\"alert\">\r\n                    Problema ingresado exitosamente.\r\n                </div>\r\n            </form>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/problema/editar-problema/editar-problema.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/problema/editar-problema/editar-problema.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditarProblemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarProblemaComponent", function() { return EditarProblemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _new_problem_new_problem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-problem/new-problem.service */ "./src/app/problema/new-problem/new-problem.service.ts");
/* harmony import */ var _tipo_problema_tipo_problema_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tipo-problema/tipo-problema.service */ "./src/app/tipo-problema/tipo-problema.service.ts");
/* harmony import */ var _problema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../problema */ "./src/app/problema/problema.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/LoginCredentials */ "./src/app/LoginCredentials.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");










var EditarProblemaComponent = /** @class */ (function () {
    function EditarProblemaComponent(router, appComponent, _newProblemService, _tipoProblemaService, appComponenet) {
        this.router = router;
        this.appComponent = appComponent;
        this._newProblemService = _newProblemService;
        this._tipoProblemaService = _tipoProblemaService;
        this.appComponenet = appComponenet;
        this.editProblema = new _problema__WEBPACK_IMPORTED_MODULE_4__["Problema"]();
        this.tipos = [];
        this.agregado = true;
        this.minDate = "";
    }
    EditarProblemaComponent.prototype.formInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            categoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            problema: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            liberacion_problema: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            solucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            liberacion_solucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
    };
    EditarProblemaComponent.prototype.setMinDate = function () {
        var date = this.form.value.liberacion_problema;
        var finalDate = this.form.value.liberacion_solucion;
        var dateI = new Date(date);
        var dateF = new Date(finalDate);
        if (dateI >= dateF || finalDate == "") {
            this.form.controls.liberacion_solucion.setValue(date);
        }
        this.minDate = date;
    };
    EditarProblemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_8__["LoginCredentials"].tipoUsuario != "admin") {
            this.appComponent.setLogIn(0);
            this.router.navigate([""]);
        }
        this.formInit();
        setTimeout(function () {
            _this.clone();
            _this.getTiposProblema();
        });
        this.appComponenet.setLogIn(1);
    };
    EditarProblemaComponent.prototype.clone = function () {
        Object.assign(this.editProblema, this.problema);
        this.form.controls.nombre.setValue(this.editProblema.NOMBRE);
        this.form.controls.categoria.setValue(this.editProblema.TIPO_PROBLEMA);
        this.form.controls.problema.setValue(this.editProblema.LATEX_SOURCE_PROBLEMA);
        this.form.controls.solucion.setValue(this.editProblema.LATEX_SOURCE_SOLUCION);
        this.form.controls.liberacion_problema.setValue(this.editProblema.FECHA_LIBERACION_PROBLEMA);
        this.form.controls.liberacion_solucion.setValue(this.editProblema.FECHA_LIBERACION_SOLUCION);
    };
    EditarProblemaComponent.prototype.update = function () {
        var _this = this;
        this.editProblema.NOMBRE = this.form.value.nombre;
        this.editProblema.LATEX_SOURCE_PROBLEMA = this.form.value.problema;
        this.editProblema.LATEX_SOURCE_SOLUCION = this.form.value.solucion;
        this.editProblema.TIPO_PROBLEMA = this.form.value.categoria;
        console.log(this.editProblema);
        this.agregado = true;
        if (this.editProblema.NOMBRE == "" ||
            this.editProblema.TIPO_PROBLEMA == "" ||
            this.editProblema.LATEX_SOURCE_PROBLEMA == "" ||
            this.editProblema.LATEX_SOURCE_SOLUCION == "") {
            this.agregado = false;
        }
        if (this.agregado) {
            //var re = /\\/gi;
            //this.editProblema.LATEX_SOURCE_PROBLEMA = this.editProblema.LATEX_SOURCE_PROBLEMA.toString().replace(re,"\\\\")
            //this.editProblema.LATEX_SOURCE_SOLUCION = this.editProblema.LATEX_SOURCE_SOLUCION.toString().replace(re,"\\\\")
            this.editProblema.FECHA_LIBERACION_PROBLEMA = this.form.controls.liberacion_problema.value;
            this.editProblema.FECHA_LIBERACION_SOLUCION = this.form.controls.liberacion_solucion.value;
            console.log(this.editProblema);
            this._newProblemService.updateProblem(this.editProblema).
                then()
                .catch(function (err) { return console.log(err); });
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(500).subscribe(function (x) {
            _this.router.navigate(["problem"]);
        });
    };
    EditarProblemaComponent.prototype.getTiposProblema = function () {
        var _this = this;
        this._tipoProblemaService.getTipoProblema()
            .subscribe(function (x) { return _this.tipos = x; });
        console;
    };
    EditarProblemaComponent.prototype.visualizarProblema = function () {
        this.editProblema.LATEX_SOURCE_PROBLEMA = this.form.value.problema;
        this.problemaLatex = this.editProblema.LATEX_SOURCE_PROBLEMA;
    };
    EditarProblemaComponent.prototype.visualizarSolucion = function () {
        this.editProblema.LATEX_SOURCE_SOLUCION = this.form.value.solucion;
        this.solucionLatex = this.editProblema.LATEX_SOURCE_SOLUCION;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _problema__WEBPACK_IMPORTED_MODULE_4__["Problema"])
    ], EditarProblemaComponent.prototype, "problema", void 0);
    EditarProblemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-problema',
            template: __webpack_require__(/*! ./editar-problema.component.html */ "./src/app/problema/editar-problema/editar-problema.component.html"),
            styles: [__webpack_require__(/*! ./editar-problema.component.css */ "./src/app/problema/editar-problema/editar-problema.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _new_problem_new_problem_service__WEBPACK_IMPORTED_MODULE_2__["NewProblemService"],
            _tipo_problema_tipo_problema_service__WEBPACK_IMPORTED_MODULE_3__["TipoProblemaService"],
            src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
    ], EditarProblemaComponent);
    return EditarProblemaComponent;
}());



/***/ }),

/***/ "./src/app/problema/new-problem/new-problem.component.css":
/*!****************************************************************!*\
  !*** ./src/app/problema/new-problem/new-problem.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2JsZW1hL25ldy1wcm9ibGVtL25ldy1wcm9ibGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/problema/new-problem/new-problem.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/problema/new-problem/new-problem.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<body>\r\n    <main class=\"page contact-us-page\">\r\n        <section class=\"clean-block clean-form dark\" style=\" min-height: 78vh;\">\r\n            <div class=\"container\">\r\n                 <div class=\"block-heading\">\r\n                    <h2 class=\"text-info\">Nuevo problema</h2>\r\n                    <p></p>\r\n                </div>\r\n                <form [formGroup]=\"form\" (ngSubmit) = \"form.valid && add($event)\">\r\n                    <label>Nombre del problema</label>\r\n                        <input class=\"form-control rounded\" type=\"text\" name=\"nombre\" \r\n                        formControlName=\"nombre\" [ngClass]=\"{'is-invalid':\r\n                        form.get('nombre').touched && form.get('nombre').invalid}\">\r\n                        <div *ngIf=\"form.get('nombre').touched && form.get('nombre').invalid\" class = \"invalid-feedback\">\r\n                            <div>Nombre del problema es un campo requerido</div>\r\n                        </div>\r\n\r\n                    <label>Categoría</label>\r\n                    <select class=\"form-control rounded\" name=\"ID_REGION\" formControlName=\"categoria\" [ngClass]=\"{'is-invalid':\r\n                    form.get('categoria').touched && form.get('categoria').invalid}\">\r\n                            <option *ngFor=\"let option of tipos\" [value]=\"option.ID_TIPO_PROBLEMA\">{{option.TIPO_PROBLEMA}}\r\n                            </option>     \r\n                    </select>\r\n                    <div *ngIf=\"form.get('categoria').touched && form.get('categoria').invalid\" class = \"invalid-feedback\">\r\n                        <div>Categoría es un campo requerido</div>\r\n                    </div>\r\n\r\n                    <label>Enunciado del problema</label>\r\n                    <p><textarea class=\"form-control rounded\" name=\"problema\" required type=\"text\"\r\n                        formControlName=\"problema\" [ngClass]=\"{'is-invalid':\r\n                        form.get('problema').touched && form.get('problema').invalid}\"></textarea>\r\n                    </p>\r\n                    <div *ngIf=\"form.get('problema').touched && form.get('problema').invalid\" class = \"invalid-feedback\">\r\n                            <div>El enunciado del problema es un campo requerido</div>\r\n                        </div>\r\n                    <button type=\"button\" class=\"btn BlueButton\" (click) =\"visualizarProblema()\">Visualizar problema</button>\r\n                    <p *ngIf=\"verProblema\">\r\n                        <ng-katex-paragraph [paragraph]=\"problemaLatex\"></ng-katex-paragraph>\r\n                    </p>\r\n                \r\n                    <div>\r\n                    <label>Fecha de liberación del problema</label>\r\n                    </div>\r\n                    <input (change)=\"setMinDate()\" class=\"form-control rounded\" type=\"date\" formControlName=\"liberacion_problema\" \r\n                        [ngClass]=\"{'is-invalid': form.get('liberacion_problema').touched && form.get('liberacion_problema').invalid}\">\r\n                    \r\n                    <div *ngIf=\"form.get('liberacion_problema').touched && form.get('liberacion_problema').invalid\" class = \"invalid-feedback\">\r\n                        <div>Fecha de liberación del problema es un campo requerido</div>\r\n                    </div>\r\n                    \r\n                    \r\n                    <label>Solución del problema</label>\r\n                    <p><textarea class=\"form-control rounded\" name=\"solucion\" \r\n                        required type=\"text\" formControlName=\"solucion\" [ngClass]=\"{'is-invalid':\r\n                        form.get('solucion').touched && form.get('solucion').invalid}\">\r\n                        </textarea>\r\n                    </p>    \r\n                        <div *ngIf=\"form.get('solucion').touched && form.get('solucion').invalid\" class = \"invalid-feedback\">\r\n                                <div>El enunciado de la solución es un campo requerido</div>\r\n                        </div>\r\n                      <button type=\"button\" class=\"btn BlueButton\" (click) =\"visualizarSolucion()\">Visualizar solución</button>       \r\n                        <p *ngIf=\"verSolucion\">\r\n                          <ng-katex-paragraph [paragraph]=\"solucionLatex\"></ng-katex-paragraph>\r\n\r\n                        </p>\r\n                            <div>\r\n                    <label>Fecha de liberación de la solución</label>\r\n                            </div>\r\n                        <input min=\"{{minDate}}\"class=\"form-control rounded\" formControlName=\"liberacion_solucion\" [ngClass]=\"{'is-invalid':\r\n                        form.get('liberacion_solucion').touched && form.get('liberacion_solucion').invalid}\" type=\"date\">\r\n                    <div *ngIf=\"form.get('liberacion_solucion').touched && form.get('liberacion_solucion').invalid\" class = \"invalid-feedback\">\r\n                            <div *ngIf=\"form.get('liberacion_solucion').errors.required\">Fecha de liberación es un campo requerido</div>\r\n                    </div>\r\n                    <button [disabled]=\"!form.valid\" class=\"btn RedButton\" type=\"submit\">\r\n                        Agregar nuevo\r\n                    </button>\r\n                    <div *ngIf=\"!agregado\" class=\"alert alert-danger\" role=\"alert\">\r\n                        Error al agregar problema.\r\n                    </div>\r\n                    <div *ngIf=\"exito\" class=\"alert alert-success\" role=\"alert\">\r\n                        Problema ingresado exitosamente.\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </section>\r\n    </main>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/js/bootstrap.bundle.min.js\"></script>\r\n    <script src=\"https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js\"></script>\r\n    <script src=\"https://cdn.datatables.net/1.10.15/js/dataTables.bootstrap.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js\"></script>\r\n    <script src=\"../../../assets/js/script.min.js\"></script>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/problema/new-problem/new-problem.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/problema/new-problem/new-problem.component.ts ***!
  \***************************************************************/
/*! exports provided: NewProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProblemComponent", function() { return NewProblemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tipo_problema_tipo_problema_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tipo-problema/tipo-problema.service */ "./src/app/tipo-problema/tipo-problema.service.ts");
/* harmony import */ var _problema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../problema */ "./src/app/problema/problema.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_problem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-problem.service */ "./src/app/problema/new-problem/new-problem.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/LoginCredentials */ "./src/app/LoginCredentials.ts");









var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(router, appComponent, _tipoProblemaService, _newProblemService, appComponenet) {
        this.router = router;
        this.appComponent = appComponent;
        this._tipoProblemaService = _tipoProblemaService;
        this._newProblemService = _newProblemService;
        this.appComponenet = appComponenet;
        this.tipos = [];
        this.problemas = [];
        this.singleProblem = new _problema__WEBPACK_IMPORTED_MODULE_3__["Problema"]();
        this.problema = [];
        this.verProblema = false;
        this.verSolucion = false;
        this.agregado = true;
        this.exito = false;
        this.minDate = "";
    }
    NewProblemComponent.prototype.formInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            //FORM CLIENTE
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            categoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            problema: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            liberacion_problema: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            solucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            liberacion_solucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    };
    NewProblemComponent.prototype.ngOnInit = function () {
        if (src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_8__["LoginCredentials"].tipoUsuario != "admin") {
            this.appComponent.setLogIn(0);
            this.router.navigate([""]);
        }
        this.formInit();
        this.getTiposProblema();
        this.singleProblem.LATEX_SOURCE_PROBLEMA = 'Problema: $\\sum_{i=1}^{3}x_{i}=x_{1}+x_{2}$';
        this.singleProblem.LATEX_SOURCE_SOLUCION = 'Solucion:  $\\sum_{i=1}^{3}x_{i}=x_{1}+x_{2}$';
        this.appComponenet.setLogIn(1);
    };
    NewProblemComponent.prototype.getTiposProblema = function () {
        var _this = this;
        this._tipoProblemaService.getTipoProblema()
            .subscribe(function (x) { return _this.tipos = x; });
    };
    NewProblemComponent.prototype.visualizarProblema = function () {
        this.verProblema = true;
        this.singleProblem.LATEX_SOURCE_PROBLEMA = this.form.value.problema;
        this.problemaLatex = this.singleProblem.LATEX_SOURCE_PROBLEMA;
    };
    NewProblemComponent.prototype.visualizarSolucion = function () {
        this.verSolucion = true;
        this.singleProblem.LATEX_SOURCE_SOLUCION = this.form.value.solucion;
        console.log(this.singleProblem.LATEX_SOURCE_SOLUCION);
        this.solucionLatex = this.singleProblem.LATEX_SOURCE_SOLUCION;
    };
    NewProblemComponent.prototype.setMinDate = function () {
        var date = this.form.value.liberacion_problema;
        var finalDate = this.form.value.liberacion_solucion;
        var dateI = new Date(date);
        var dateF = new Date(finalDate);
        if (dateI >= dateF || finalDate == "") {
            this.form.controls.liberacion_solucion.setValue(date);
        }
        this.minDate = date;
    };
    NewProblemComponent.prototype.add = function (e) {
        e.preventDefault();
        var nombre = e.target.elements[0].value;
        var fechaLiberacionProblema = e.target.elements[4].value;
        var fechaLiberacionSolucion = e.target.elements[7].value;
        var valido = true;
        this.singleProblem.NOMBRE = nombre;
        this.singleProblem.LATEX_SOURCE_PROBLEMA = this.form.value.problema;
        this.singleProblem.LATEX_SOURCE_SOLUCION = this.form.value.solucion;
        this.singleProblem.TIPO_PROBLEMA = this.form.value.categoria;
        this.singleProblem.FECHA_LIBERACION_SOLUCION = fechaLiberacionSolucion;
        this.singleProblem.FECHA_LIBERACION_PROBLEMA = fechaLiberacionProblema;
        if (this.singleProblem.LATEX_SOURCE_PROBLEMA == "" ||
            this.singleProblem.LATEX_SOURCE_SOLUCION == "" ||
            this.singleProblem.TIPO_PROBLEMA == "" ||
            fechaLiberacionProblema == "" ||
            fechaLiberacionSolucion == "") {
            this.agregado = false;
            return;
        }
        if (new Date(fechaLiberacionProblema) > new Date(fechaLiberacionSolucion)) {
            this.agregado = false;
            return;
        }
        for (var i = 0; i < this.problemas.length; i++) {
            var element = this.problemas[i];
            if (element.NOMBRE == nombre) {
                valido = false;
            }
        }
        if (valido) {
            var re = /\\/gi;
            this.singleProblem.LATEX_SOURCE_PROBLEMA = this.singleProblem.LATEX_SOURCE_PROBLEMA.toString().replace(re, "\\\\");
            this.singleProblem.LATEX_SOURCE_SOLUCION = this.singleProblem.LATEX_SOURCE_SOLUCION.toString().replace(re, "\\\\");
            this._newProblemService.createProblema(this.singleProblem);
            this.singleProblem = new _problema__WEBPACK_IMPORTED_MODULE_3__["Problema"]();
            this.exito = true;
            this.agregado = true;
            return;
        }
        else {
            console.log("Validacion 3");
            this.agregado = false;
            return;
        }
    };
    NewProblemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-problem',
            template: __webpack_require__(/*! ./new-problem.component.html */ "./src/app/problema/new-problem/new-problem.component.html"),
            styles: [__webpack_require__(/*! ./new-problem.component.css */ "./src/app/problema/new-problem/new-problem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _tipo_problema_tipo_problema_service__WEBPACK_IMPORTED_MODULE_2__["TipoProblemaService"],
            _new_problem_service__WEBPACK_IMPORTED_MODULE_6__["NewProblemService"],
            src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]])
    ], NewProblemComponent);
    return NewProblemComponent;
}());



/***/ }),

/***/ "./src/app/problema/new-problem/new-problem.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/problema/new-problem/new-problem.service.ts ***!
  \*************************************************************/
/*! exports provided: NewProblemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProblemService", function() { return NewProblemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var NewProblemService = /** @class */ (function () {
    function NewProblemService(_http) {
        this._http = _http;
    }
    NewProblemService.prototype.createProblema = function (singleProblem) {
        return this._http.post('/problem', singleProblem)
            .map(function (data) { return data.json(); }).toPromise();
    };
    NewProblemService.prototype.getSingleProblems = function () {
        return this._http.get('/singleProblem')
            .map(function (data) { return data.json(); }).toPromise();
    };
    NewProblemService.prototype.getProblem = function (idProblema) {
        return this._http.get('/getProblema/' + idProblema)
            .map(function (data) { return data.json(); }).toPromise();
    };
    NewProblemService.prototype.updateProblem = function (singleProblem) {
        return this._http.put('/singleProblem/', singleProblem)
            .map(function (data) { return data.json(); }).toPromise();
    };
    NewProblemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], NewProblemService);
    return NewProblemService;
}());



/***/ }),

/***/ "./src/app/problema/problema.component.css":
/*!*************************************************!*\
  !*** ./src/app/problema/problema.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2JsZW1hL3Byb2JsZW1hLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/problema/problema.component.html":
/*!**************************************************!*\
  !*** ./src/app/problema/problema.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n</head>\r\n<body>\r\n    <main class=\"page shopping-cart-page\">\r\n        <section class=\"clean-block clean-cart dark\" style=\" min-height: 78vh;\">\r\n            <div class=\"container\" style=\"margin-top:8px;\">\r\n                <h2 class=\"text-info\">Problemas y soluciones</h2>\r\n                \r\n                <!--<app-tabla-problema [problems] = \"problemas\">-->\r\n                <app-tabla-problema>\r\n                </app-tabla-problema>\r\n                \r\n                </div>\r\n        </section>\r\n    </main>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/problema/problema.component.ts":
/*!************************************************!*\
  !*** ./src/app/problema/problema.component.ts ***!
  \************************************************/
/*! exports provided: ProblemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemaComponent", function() { return ProblemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _problema_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./problema.service */ "./src/app/problema/problema.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");




var ProblemaComponent = /** @class */ (function () {
    function ProblemaComponent(_problemaService, appComponenet) {
        this._problemaService = _problemaService;
        this.appComponenet = appComponenet;
        this.title = 'ng-katex';
        this.url = 'https://github.com/garciparedes/ng-katex';
        this.equation = 'Some plain text: $//sum_{i=1}^nx_i$';
        this.options = {
            displayMode: false
        };
        this.problemas = [];
    }
    ProblemaComponent.prototype.ngOnInit = function () {
        //this.getProblemas();
        this.appComponenet.setLogIn(1);
    };
    ProblemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-problema',
            template: __webpack_require__(/*! ./problema.component.html */ "./src/app/problema/problema.component.html"),
            styles: [__webpack_require__(/*! ./problema.component.css */ "./src/app/problema/problema.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_problema_service__WEBPACK_IMPORTED_MODULE_2__["ProblemaService"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], ProblemaComponent);
    return ProblemaComponent;
}());



/***/ }),

/***/ "./src/app/problema/problema.service.ts":
/*!**********************************************!*\
  !*** ./src/app/problema/problema.service.ts ***!
  \**********************************************/
/*! exports provided: ProblemaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemaService", function() { return ProblemaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var ProblemaService = /** @class */ (function () {
    function ProblemaService(_http) {
        this._http = _http;
    }
    ProblemaService.prototype.getProblemas = function () {
        console.log("llamada al api");
        return this._http.get('/singleProblem')
            .map(function (data) { return data.json(); });
    };
    ProblemaService.prototype.getProblemaActual = function () {
        return this._http.get('/problemaActual')
            .map(function (data) { return data.json(); });
    };
    ProblemaService.prototype.eliminarProblema = function (nombre) {
        return this._http.delete('/problemas/' + nombre)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ProblemaService.prototype.getProblema = function (nombre) {
        return this._http.get('/problemaConFechas/' + nombre)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ProblemaService.prototype.getProblemaById = function (idProblema) {
        return this._http.get('/getProblema/' + idProblema)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ProblemaService.prototype.createComentarioProblema = function (comentario) {
        return this._http.post('/crearComentario', comentario)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ProblemaService.prototype.getComentariosProblema = function (idProblema) {
        return this._http.get('/getComentariosProblema/' + idProblema)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ProblemaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ProblemaService);
    return ProblemaService;
}());



/***/ }),

/***/ "./src/app/problema/problema.ts":
/*!**************************************!*\
  !*** ./src/app/problema/problema.ts ***!
  \**************************************/
/*! exports provided: Problema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Problema", function() { return Problema; });
var Problema = /** @class */ (function () {
    //ESTA CLASE CONTIENE EL SELECT CON ALS FECHAS Y TIPOS DE PROBLEMA
    function Problema(ID_PROBLEMA, NOMBRE, LATEX_SOURCE_PROBLEMA, TIPO_PROBLEMA, LATEX_SOURCE_SOLUCION, FECHA_LIBERACION_PROBLEMA, FECHA_LIBERACION_SOLUCION) {
        if (ID_PROBLEMA === void 0) { ID_PROBLEMA = ""; }
        if (NOMBRE === void 0) { NOMBRE = ""; }
        if (LATEX_SOURCE_PROBLEMA === void 0) { LATEX_SOURCE_PROBLEMA = ""; }
        if (TIPO_PROBLEMA === void 0) { TIPO_PROBLEMA = ""; }
        if (LATEX_SOURCE_SOLUCION === void 0) { LATEX_SOURCE_SOLUCION = ""; }
        if (FECHA_LIBERACION_PROBLEMA === void 0) { FECHA_LIBERACION_PROBLEMA = ""; }
        if (FECHA_LIBERACION_SOLUCION === void 0) { FECHA_LIBERACION_SOLUCION = ""; }
        this.ID_PROBLEMA = ID_PROBLEMA;
        this.NOMBRE = NOMBRE;
        this.LATEX_SOURCE_PROBLEMA = LATEX_SOURCE_PROBLEMA;
        this.TIPO_PROBLEMA = TIPO_PROBLEMA;
        this.LATEX_SOURCE_SOLUCION = LATEX_SOURCE_SOLUCION;
        this.FECHA_LIBERACION_PROBLEMA = FECHA_LIBERACION_PROBLEMA;
        this.FECHA_LIBERACION_SOLUCION = FECHA_LIBERACION_SOLUCION;
    }
    return Problema;
}());



/***/ }),

/***/ "./src/app/problema/tabla-problema/tabla-problema.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/problema/tabla-problema/tabla-problema.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup {\r\n    margin: 70px auto; \r\n    padding: 20px;\r\n    background: #f2f2f2;\r\n    border-radius: 5px;\r\n    width: 30%;\r\n    position: relative;\r\n    margin: 0 auto;\r\n    top: 25%;\r\n    transition: all 5s ease-in-out;\r\n  }\r\n  \r\n  .popup p {\r\n    margin-top: 0;\r\n    color: #333;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n  }\r\n  \r\n  .popupAnotacion {\r\n    margin: 70px auto;\r\n    padding: 20px;\r\n    background: #f2f2f2;\r\n    border-radius: 5px;\r\n    border-width: 2px;\r\n    border-color: black;\r\n    width: 40%; \r\n    position: relative;\r\n    margin: 0 auto;\r\n    top: 25%;\r\n    transition: all 5s ease-in-out;\r\n  }\r\n  \r\n  .popupAnotacion p {\r\n    border-width: 2px;\r\n    margin-top: 0;\r\n    color: #333;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n  }\r\n  \r\n  textarea {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100%;\r\n}\r\n  \r\n  .buttonIcon{\r\n  border:0px;\r\n  background-color:transparent;\r\n  font-size:16px;\r\n  cursor:pointer;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvYmxlbWEvdGFibGEtcHJvYmxlbWEvdGFibGEtcHJvYmxlbWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxRQUFRO0lBQ1IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxRQUFRO0lBQ1IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0NBQXNDO0VBQ3hDOztFQUNBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztFQUVBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2JsZW1hL3RhYmxhLXByb2JsZW1hL3RhYmxhLXByb2JsZW1hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXAge1xyXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87IFxyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLnBvcHVwIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAucG9wdXBBbm90YWNpb24ge1xyXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiA0MCU7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLnBvcHVwQW5vdGFjaW9uIHAge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LWZhbWlseTogVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgdGV4dGFyZWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uSWNvbntcclxuICBib3JkZXI6MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/problema/tabla-problema/tabla-problema.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/problema/tabla-problema/tabla-problema.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n</head>\r\n<a  routerLink=\"/newProblem\" class=\"btn BlueButton\" style=\"margin-top:10px;margin-bottom:15px;\">Agregar nuevo problema</a>\r\n\r\n<p *ngIf=\"!problems\"><em>Cargando problemas...</em></p>\r\n\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n    <thead>\r\n        <tr>\r\n            <th>Nombre</th>\r\n            <th>Visualizar</th>\r\n            <th>Última vez utilizado</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody *ngIf=\"problems?.length != 0\">\r\n        <tr *ngFor= \"let p of problems\">  \r\n            <td>{{p.NOMBRE}}</td>\r\n            <td><button (click)=\"verProblema(p)\" class='btn btn-outline-primary btn-sm'>Editar</button>\r\n                <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"openModalDialog(p.ID_PROBLEMA)\">Eliminar</button>\r\n                    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\r\n                        <div class=\"popup\" [ngStyle]=\"{'display':display}\">\r\n                            <p>¿Está seguro de que desea eliminar el problema?</p>\r\n                            <button type=\"button\" class=\"close\" (click)=\"onClosehandled\"><span aria-hidden=\"true\"></span></button>\r\n                            <button type=\"button\" class=\"btn_si\" (click) =\"eliminarProblema()\" (click)=\"closeModalDialog()\">Si</button>\r\n                            <button type=\"button\" class=\"btn_no\" (click)=\"closeModalDialog()\">No</button>\r\n                        </div>\r\n                    </div>\r\n            </td> \r\n            <td>{{p.FECHA_LIBERACION_PROBLEMA}}</td>\r\n        </tr>\r\n    </tbody>\r\n    <tbody *ngIf=\"problems?.length == 0\">\r\n        <tr>\r\n            <td>No data!</td>\r\n            <td>No data!</td>\r\n            <td>No data!</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/problema/tabla-problema/tabla-problema.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/problema/tabla-problema/tabla-problema.component.ts ***!
  \*********************************************************************/
/*! exports provided: TablaProblemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaProblemaComponent", function() { return TablaProblemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _problema_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../problema.service */ "./src/app/problema/problema.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/LoginCredentials */ "./src/app/LoginCredentials.ts");







var TablaProblemaComponent = /** @class */ (function () {
    function TablaProblemaComponent(router, appComponent, problemaService) {
        this.router = router;
        this.appComponent = appComponent;
        this.problemaService = problemaService;
        this.display = 'none';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    TablaProblemaComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            language: {
                "processing": "Procesando...",
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "emptyTable": "Ningún dato disponible en esta tabla",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "infoPostFix": "",
                "search": "Buscar:",
                "url": "",
                "loadingRecords": "Cargando...",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "aria": {
                    "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        };
        if (src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_6__["LoginCredentials"].tipoUsuario != "admin") {
            this.appComponent.setLogIn(0);
            this.router.navigate([""]);
        }
        this.getProblemas();
    };
    TablaProblemaComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TablaProblemaComponent.prototype.verProblema = function (problema) {
        this.problemaSeleccionado = problema;
        localStorage.setItem("IDProblema", this.problemaSeleccionado.ID_PROBLEMA);
        this.router.navigate(['/verProblema', this.problemaSeleccionado.NOMBRE]);
    };
    TablaProblemaComponent.prototype.eliminarProblema = function () {
        var _this = this;
        for (var i = 0; i < this.problems.length; i++) {
            if (this.problems[i].ID_PROBLEMA == this.IDproblemaEliminar) {
                this.problems.splice(i, 1);
                break;
            }
        }
        this.problemaService.eliminarProblema(this.IDproblemaEliminar)
            .then(function () {
            _this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }).catch(function (err) { return console.log('Err Anotaciones: ' + err); });
        this.closeModalDialog();
    };
    TablaProblemaComponent.prototype.getProblemas = function () {
        var _this = this;
        this.problemaService.getProblemas().subscribe(function (resultProblems) {
            _this.problems = resultProblems;
            _this.dtTrigger.next();
        });
    };
    TablaProblemaComponent.prototype.openModalDialog = function (problemID) {
        this.IDproblemaEliminar = problemID;
        this.display = 'block';
    };
    TablaProblemaComponent.prototype.closeModalDialog = function () {
        this.display = 'none';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TablaProblemaComponent.prototype, "problems", void 0);
    TablaProblemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla-problema',
            template: __webpack_require__(/*! ./tabla-problema.component.html */ "./src/app/problema/tabla-problema/tabla-problema.component.html"),
            styles: [__webpack_require__(/*! ./tabla-problema.component.css */ "./src/app/problema/tabla-problema/tabla-problema.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _problema_service__WEBPACK_IMPORTED_MODULE_2__["ProblemaService"]])
    ], TablaProblemaComponent);
    return TablaProblemaComponent;
}());



/***/ }),

/***/ "./src/app/problema/ver-problema/ver-problema.component.css":
/*!******************************************************************!*\
  !*** ./src/app/problema/ver-problema/ver-problema.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    display: block;\r\n    -webkit-margin-before: 1em;\r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n}\r\n.col-lg-7{\r\n    width: 90%;\r\n}\r\n.ng-katex-paragraph{\r\n    width: 90%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvYmxlbWEvdmVyLXByb2JsZW1hL3Zlci1wcm9ibGVtYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLDBCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix5QkFBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLHVCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcHJvYmxlbWEvdmVyLXByb2JsZW1hL3Zlci1wcm9ibGVtYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4uY29sLWxnLTd7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbi5uZy1rYXRleC1wYXJhZ3JhcGh7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/problema/ver-problema/ver-problema.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/problema/ver-problema/ver-problema.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\r\n</head>\r\n<body>\r\n  <main class=\"page blog-post-list\">\r\n    <section class=\"clean-block clean-blog-list dark\" style=\" min-height: 78vh;\">\r\n        \r\n        <div class=\"container\">\r\n         \r\n           <div class=\"block-heading\">\r\n                <h2 class=\"text-info\">{{problema?.NOMBRE}}</h2>\r\n            </div>\r\n            <div class=\"block-content\">\r\n                <div class=\"clean-blog-post\">\r\n                            <h3>Enunciado del problema:</h3>\r\n                            <div class=\"col-lg-7\">\r\n                                <ng-katex-paragraph [paragraph]=\"problema.LATEX_SOURCE_PROBLEMA\"></ng-katex-paragraph>\r\n                            </div>\r\n                            \r\n\r\n                            <h3>Solución del problema</h3>\r\n                            <div class=\"col-lg-7\">\r\n                                <ng-katex-paragraph [paragraph]=\"problema.LATEX_SOURCE_SOLUCION \"></ng-katex-paragraph>\r\n                            </div>\r\n                                                \r\n                        </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h5 class=\"mb-0\">Opciones de edición&nbsp;</h5>\r\n                        <div *ngIf = \"isLoaded\">\r\n                            <app-editar-problema\r\n                              [problema] = \"problema\">\r\n                            </app-editar-problema>\r\n                        </div>    \r\n                           \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n  </main>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/problema/ver-problema/ver-problema.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/problema/ver-problema/ver-problema.component.ts ***!
  \*****************************************************************/
/*! exports provided: VerProblemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerProblemaComponent", function() { return VerProblemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_problem_new_problem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-problem/new-problem.service */ "./src/app/problema/new-problem/new-problem.service.ts");
/* harmony import */ var _tipo_problema_tipo_problema_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ..//../tipo-problema/tipo-problema.service */ "./src/app/tipo-problema/tipo-problema.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");







var VerProblemaComponent = /** @class */ (function () {
    function VerProblemaComponent(route, router, newProblemService, _tipoProblemaService, appComponenet) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.newProblemService = newProblemService;
        this._tipoProblemaService = _tipoProblemaService;
        this.appComponenet = appComponenet;
        this.mathContent = "  Usando la f\'ormula de Her\'on se tiene que el semiper\'imetro es $s=27/2$, as\'i que el \'area del tri\'angulo original es de $\\sqrt{(27/2)(15/2)(7/2)(5/2)}=45\\sqrt{7}/4$. El tr\'iangulo equil\'atero tiene per\'imetro 27, por lo que cada lado mide $9$, la altura mide $9\\sqrt{3}/2$, y el \'area es de $81\\sqrt{3}/4$. La raz\'on de las \'areas es de $\\dfrac{45\\sqrt{7}}{4} \\div \\dfrac{81\\sqrt{3}}{4} = \\dfrac{5\\sqrt{21}}{27}$ ";
        this.tipoProblemaString = "";
        this.problemLatex = "";
        this.solutionLatex = "";
        this.equation3 = "La respuesta es negativa. Supongamos que fuera cierto por un momento, podemos formar entonces los subconjuntos $\\{a\\}$, $\\{a,b\\}$, $\\{a,b,c\\}$, $\\{a,b,c,d\\}$ y $\\{a,b,c,d,e\\}$, y la suma de ninguno de tales subconjuntos ser\'ia m\'ultiplo de 5. Tomemos 4 recipientes numerados del 1 al 4, y guardamos el subconjunto que al didivirlo por 5 tiene residuo 1, 2, 3 o 4 en el recipiente respectivo. Como son 5 subconjuntos y 4 recipientes, por el principio del palomar habr\'a dos subconjuntos en el mismo recipiente, tales que el mayor sume $5p+r$ y el menor sume $5q+r$, y como el subconjunto menor est\'a contenido dentro del subconjunto mayor por la forma en que los construimos, al restarlos, nos vamos a quedar con un subconjunto que es divisible por 5.";
        this.problemLatexVer = "";
        this.solutionLatexVer = "";
        this.tiposProblema = [];
        this.isLoaded = false;
        setTimeout(function () {
            _this.nombre = _this.route.snapshot.paramMap.get('nombre');
            _this.newProblemService.getProblem(localStorage.getItem("IDProblema"))
                .then(function (p) {
                _this.problema = p[0];
                console.log("Problema-------   " + _this.problema.LATEX_SOURCE_PROBLEMA);
                _this.problemLatex = _this.problema.LATEX_SOURCE_PROBLEMA;
                _this.solutionLatex = _this.problema.LATEX_SOURCE_SOLUCION;
                _this.problemLatexVer = _this.problema.LATEX_SOURCE_PROBLEMA;
                _this.solutionLatexVer = _this.problema.LATEX_SOURCE_SOLUCION;
                _this.tipoProblemaString = _this.problema.TIPO_PROBLEMA;
                _this.isLoaded = true;
            });
        });
    }
    VerProblemaComponent.prototype.ngOnInit = function () {
        this.appComponenet.setLogIn(1);
    };
    VerProblemaComponent.prototype.convertLatex = function () {
        console.log("problema a-------    " + this.problema.LATEX_SOURCE_PROBLEMA);
        this.problema.LATEX_SOURCE_PROBLEMA = this.problema.LATEX_SOURCE_PROBLEMA.replace('\\', "\\\\");
        console.log("problema d-------    " + this.problema.LATEX_SOURCE_PROBLEMA);
    };
    VerProblemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver-problema',
            template: __webpack_require__(/*! ./ver-problema.component.html */ "./src/app/problema/ver-problema/ver-problema.component.html"),
            styles: [__webpack_require__(/*! ./ver-problema.component.css */ "./src/app/problema/ver-problema/ver-problema.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _new_problem_new_problem_service__WEBPACK_IMPORTED_MODULE_3__["NewProblemService"],
            _tipo_problema_tipo_problema_service__WEBPACK_IMPORTED_MODULE_4__["TipoProblemaService"],
            src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
    ], VerProblemaComponent);
    return VerProblemaComponent;
}());



/***/ }),

/***/ "./src/app/registrar/registrar.component.css":
/*!***************************************************!*\
  !*** ./src/app/registrar/registrar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding-top:5px;\r\n  }\r\n  \r\n  @media (min-width:1200px) {\r\n    .container {\r\n      max-width:1140px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width:992px) {\r\n    .container {\r\n      max-width:960px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width:768px) {\r\n    .container {\r\n      max-width:720px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width:576px) {\r\n    .container {\r\n      max-width:540px;\r\n    }\r\n  }\r\n  \r\n  .container {\r\n    width:100%;\r\n    padding-right:15px;\r\n    padding-left:15px;\r\n    margin-right:auto;\r\n    margin-left:auto;\r\n  }\r\n  \r\n  body {\r\n    margin:0;\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:1rem;\r\n    font-weight:400;\r\n    line-height:1.5;\r\n    color:#212529;\r\n    text-align:left;\r\n    background-color:#fff;\r\n  }\r\n  \r\n  .clean-block .block-heading h1, .clean-block .block-heading h2, .clean-block .block-heading h3 {\r\n    margin-bottom:1.2rem;\r\n  }\r\n  \r\n  .text-info {\r\n    margin-top: 100px;\r\n    color:black!important;\r\n  }\r\n  \r\n  .h2, h2 {\r\n    font-size:2rem;\r\n  }\r\n  \r\n  .box{\r\n    width: 500px;\r\n    height: 600px;\r\n    padding: 40px;\r\n    border-top: 20px;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-filter: drop-shadow(0 0 8px #2c3e50);\r\n            filter: drop-shadow(0 0 8px #2c3e50);/*Sombra*/\r\n    background: url('calendarBackground.png');\r\n    background-size: 100% 100%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }\r\n  \r\n  .box h1{\r\n    color: black;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .box p{\r\n    color: black;\r\n    font-weight: 200;\r\n  }\r\n  \r\n  .box input[type = \"text\"], .box input[type = \"password\"]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 18px auto;\r\n    text-align: center;\r\n    border: 2px solid #e74c3c;\r\n    padding: 14px 10px;\r\n    width: 250px;\r\n    outline: none;\r\n    color: #2c3e50;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n  }\r\n  \r\n  .box input[type = \"text\"]:focus,.box input[type = \"password\"]:focus{\r\n    width: 280px;\r\n    border-color: #c1272d;\r\n  }\r\n  \r\n  .box input[type = \"submit\"]{\r\n    border:0;\r\n    background: none;\r\n    display: block;\r\n    margin: 18px auto;\r\n    text-align: center;\r\n    border: 2px solid #273c75;\r\n    padding: 14px 40px;\r\n    outline: none;\r\n    color: #2c3e50;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .box input[type = \"submit\"]:hover{\r\n    background: #30336b;\r\n    color: white;\r\n  }\r\n  \r\n  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\r\n    margin-bottom:.5rem;\r\n    font-family:inherit;\r\n    font-weight:500;\r\n    line-height:1.2;\r\n    color:inherit;\r\n  }\r\n  \r\n  h1, h2, h3, h4, h5, h6 {\r\n    margin-top:0;\r\n    margin-bottom:.5rem;\r\n  }\r\n  \r\n  .clean-block .block-heading {\r\n    padding-top:50px;\r\n    margin-bottom:40px;\r\n    text-align:center;\r\n  }\r\n  \r\n  .redButton {\r\n    background-color: #c1272d; /* Green */\r\n    border: none;\r\n    color: white;\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding: 10px 27px;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n  }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmFyL3JlZ2lzdHJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsNENBQW9DO1lBQXBDLG9DQUFvQyxDQUFDLFNBQVM7SUFDOUMseUNBQTBEO0lBQzFELDBCQUEwQjtJQUMxQixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHlCQUF5QixFQUFFLFVBQVU7SUFDckMsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhci9yZWdpc3RyYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6MTE0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDo5NjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6NzIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOjU3NnB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgbWF4LXdpZHRoOjU0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6MS41O1xyXG4gICAgY29sb3I6IzIxMjUyOTtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNsZWFuLWJsb2NrIC5ibG9jay1oZWFkaW5nIGgxLCAuY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcgaDIsIC5jbGVhbi1ibG9jayAuYmxvY2staGVhZGluZyBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEuMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGNvbG9yOmJsYWNrIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmgyLCBoMiB7XHJcbiAgICBmb250LXNpemU6MnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmJveHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgOHB4ICMyYzNlNTApOy8qU29tYnJhKi9cclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvY2FsZW5kYXJCYWNrZ3JvdW5kLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYm94IGgxe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAuYm94IHB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gIH1cclxuXHJcbiAgLmJveCBpbnB1dFt0eXBlID0gXCJ0ZXh0XCJdLCAuYm94IGlucHV0W3R5cGUgPSBcInBhc3N3b3JkXCJde1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxOHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xyXG4gICAgcGFkZGluZzogMTRweCAxMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gIH1cclxuXHJcbiAgLmJveCBpbnB1dFt0eXBlID0gXCJ0ZXh0XCJdOmZvY3VzLC5ib3ggaW5wdXRbdHlwZSA9IFwicGFzc3dvcmRcIl06Zm9jdXN7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNjMTI3MmQ7XHJcbiAgfVxyXG5cclxuICAuYm94IGlucHV0W3R5cGUgPSBcInN1Ym1pdFwiXXtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxOHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjczYzc1O1xyXG4gICAgcGFkZGluZzogMTRweCA0MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuYm94IGlucHV0W3R5cGUgPSBcInN1Ym1pdFwiXTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICMzMDMzNmI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIG1hcmdpbi1ib3R0b206LjVyZW07XHJcbiAgICBmb250LWZhbWlseTppbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6MS4yO1xyXG4gICAgY29sb3I6aW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBtYXJnaW4tYm90dG9tOi41cmVtO1xyXG4gIH1cclxuICBcclxuICAuY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucmVkQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMTI3MmQ7IC8qIEdyZWVuICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAyN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/registrar/registrar.component.html":
/*!****************************************************!*\
  !*** ./src/app/registrar/registrar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<body>\r\n    <main class=\"page pricing-table-page\">\r\n        <section class=\"clean-block clean-pricing dark\" style=\"min-height: 78vh;\">\r\n            <section class=\"clean-block clean-form dark\">\r\n                <div class=\"container\">\r\n                    <div class=\"block-heading\" >\r\n                    </div>\r\n                    <form class=box (submit) = \"registrar($event)\">\r\n                            <h2 class=\"text-info\">Registro</h2>\r\n                            <input placeholder=\"Nombre\"  [(ngModel)]=\"client.NOMBRE\" name=\"NOMBRE\" class=\"form-control\" type=\"text\">\r\n\r\n                            <input placeholder=\"Correo electrónico\"  [(ngModel)]=\"client.CORREO\" name=\"CORREO\" class=\"form-control\" type=\"text\">\r\n\r\n                        <div *ngIf=\"!correoValid\" class=\"alert alert-danger\" role=\"alert\">\r\n                            La dirección de correo no es válida.\r\n                        </div>\r\n  \r\n                            <input placeholder=\"Contraseña\" [(ngModel)]=\"client.PASSWORD\" name=\"PASSWORD\" class=\"form-control\" type=\"password\">\r\n       \r\n                        \r\n                            <input placeholder=\"Confirmar contraseña\" [(ngModel)]=\"repeatedPassword\" name=\"repeatedPassword\" class=\"form-control\" type=\"password\">\r\n                       \r\n                        <div *ngIf=\"!iguales\" class=\"alert alert-danger\" role=\"alert\">\r\n                                Las contraseñas son distintas. \r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"submit\" name=\"\" value=\"Registrar\">\r\n                        </div>\r\n                        <div *ngIf=\"!valid\" class=\"alert alert-danger\" role=\"alert\">\r\n                               Los datos ingresados son incorrectos.\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </section>\r\n        </section>\r\n    </main>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/registrar/registrar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/registrar/registrar.component.ts ***!
  \**************************************************/
/*! exports provided: RegistrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarComponent", function() { return RegistrarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sesion_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sesion/client */ "./src/app/sesion/client.ts");
/* harmony import */ var _sesion_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sesion/client.service */ "./src/app/sesion/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(_clientService, router) {
        this._clientService = _clientService;
        this.router = router;
        this.client = new _sesion_client__WEBPACK_IMPORTED_MODULE_2__["Client"];
        this.repeatedPassword = "";
        this.valid = true;
        this.iguales = true;
        this.correoValid = true;
    }
    RegistrarComponent.prototype.ngOnInit = function () {
        this.getClients();
        appComponent: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"];
    };
    RegistrarComponent.prototype.getClients = function () {
        var _this = this;
        this._clientService.getClients().
            subscribe(function (clients) { return _this.clients = clients; });
    };
    RegistrarComponent.prototype.registrar = function (e) {
        e.preventDefault();
        if (this.validarClient()) {
            this.correoValid = eval("/^[a-zA-Z0-9.!#$%&amp;&#39;*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/").test(this.client.CORREO);
            if (!this.correoValid) {
                return;
            }
            if (this.client.PASSWORD !== this.repeatedPassword) {
                this.iguales = false;
                return;
            }
            else {
                this.iguales = true;
                var correoValido = true;
                for (var i = 0; i < this.clients.length; i++) {
                    var element = this.clients[i];
                    if (this.client.CORREO == element.CORREO) {
                        correoValido = false;
                        this.valid = false;
                        break;
                    }
                }
                if (correoValido) {
                    this.client.ID_TIPO_CLIENTE = 2;
                    this._clientService.create(this.client);
                    this.router.navigate(['login']);
                }
            }
        }
        else {
            this.valid = false;
        }
    };
    RegistrarComponent.prototype.validarClient = function () {
        if (this.client.NOMBRE === "" || this.client.PASSWORD === "" ||
            this.client.CORREO === "") {
            return false;
        }
        return true;
    };
    RegistrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registrar',
            template: __webpack_require__(/*! ./registrar.component.html */ "./src/app/registrar/registrar.component.html"),
            styles: [__webpack_require__(/*! ./registrar.component.css */ "./src/app/registrar/registrar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sesion_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistrarComponent);
    return RegistrarComponent;
}());



/***/ }),

/***/ "./src/app/sesion/client.service.ts":
/*!******************************************!*\
  !*** ./src/app/sesion/client.service.ts ***!
  \******************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var ClientService = /** @class */ (function () {
    function ClientService(_http) {
        this._http = _http;
    }
    ClientService.prototype.logIn = function (username, password) {
        return this._http.get('/logIn/' + username + '/' + password)
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.getClients = function () {
        return this._http.get('/clients').map(function (res) { return res.json(); });
    };
    ClientService.prototype.getClient = function (correo) {
        return this._http.get('/client/' + correo)
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.create = function (client) {
        return this._http.post('/clients', client)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ClientService.prototype.edit = function (client) {
        return this._http.put('/updateClients', client)
            .map(function (data) { return data.json(); }).toPromise();
    };
    ClientService.prototype.delete = function (correo) {
        console.log(correo);
        return this._http.delete('/clients/' + correo)
            .map(function (data) { return data.json(); }).toPromise();
    };
    Object.defineProperty(ClientService.prototype, "loggedInUser", {
        //guardar Cuenta Actual
        get: function () {
            return this._loggedInUser;
        },
        set: function (user) {
            this._loggedInUser = user;
        },
        enumerable: true,
        configurable: true
    });
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/sesion/client.ts":
/*!**********************************!*\
  !*** ./src/app/sesion/client.ts ***!
  \**********************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client(NOMBRE, CORREO, PASSWORD, ID_TIPO_CLIENTE) {
        if (NOMBRE === void 0) { NOMBRE = ""; }
        if (CORREO === void 0) { CORREO = ""; }
        if (PASSWORD === void 0) { PASSWORD = ""; }
        if (ID_TIPO_CLIENTE === void 0) { ID_TIPO_CLIENTE = 0; }
        this.NOMBRE = NOMBRE;
        this.CORREO = CORREO;
        this.PASSWORD = PASSWORD;
        this.ID_TIPO_CLIENTE = ID_TIPO_CLIENTE;
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/sesion/sesion.component.css":
/*!*********************************************!*\
  !*** ./src/app/sesion/sesion.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width:576px) {\r\n    .clean-block .block-heading {\r\n      padding-top:80px;\r\n    }\r\n  }\r\n  \r\n  .clean-block .block-heading {\r\n    padding-top:50px;\r\n    margin-bottom:40px;\r\n    text-align:center;\r\n  }\r\n  \r\n  .text-info {\r\n    margin-top: 130px;\r\n    color:black!important;\r\n  }\r\n  \r\n  .paragraph{\r\n    margin-top: 40px;\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n    line-height: 2;\r\n    background:  #fff;;\r\n    margin-bottom: 30px;\r\n    text-align: justify;\r\n    font-size: 20px;\r\n    color: black!important;\r\n  }\r\n  \r\n  body {\r\n    margin:0;\r\n    font-family:Montserrat,sans-serif;\r\n    font-size:1rem;\r\n    font-weight:400;\r\n    line-height:1.5;\r\n    color:#212529;\r\n    text-align:left;\r\n    background-color:#fff;\r\n  }\r\n  \r\n  .container {\r\n    padding-top:5px;\r\n  }\r\n  \r\n  @media (min-width:1200px) {\r\n    .container {\r\n      max-width:1140px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width:992px) {\r\n    .container {\r\n      max-width:960px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width:768px) {\r\n    .container {\r\n      max-width:720px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width:576px) {\r\n    .container {\r\n      max-width:540px;\r\n    }\r\n  }\r\n  \r\n  .container {\r\n    width:100%;\r\n    padding-right:15px;\r\n    padding-left:15px;\r\n    margin-right:auto;\r\n    margin-left:auto;\r\n  }\r\n  \r\n  .redButton {\r\n    background-color: #c1272d; \r\n    border: none;\r\n    color: white;\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 10px 27px;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .box{\r\n    width: 500px;\r\n    height: 600px;\r\n    padding: 40px;\r\n    border-top: 20px;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-filter: drop-shadow(0 0 8px #2c3e50);\r\n            filter: drop-shadow(0 0 8px #2c3e50);/*Sombra*/\r\n    background: url('calendarBackground.png');\r\n    background-size: 100% 100%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }\r\n  \r\n  .box h1{\r\n    color: black;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .box p{\r\n    color: black;\r\n    font-weight: 200;\r\n  }\r\n  \r\n  .box input[type = \"text\"], .box input[type = \"password\"]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #e74c3c;\r\n    padding: 14px 10px;\r\n    width: 250px;\r\n    outline: none;\r\n    color: #2c3e50;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n  }\r\n  \r\n  .box input[type = \"text\"]:focus,.box input[type = \"password\"]:focus{\r\n    width: 280px;\r\n    border-color: #c1272d;\r\n  }\r\n  \r\n  .box input[type = \"submit\"]{\r\n    border:0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #273c75;\r\n    padding: 14px 40px;\r\n    outline: none;\r\n    color: #2c3e50;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .box input[type = \"submit\"]:hover{\r\n    background: #30336b;\r\n    color: white;\r\n  }\r\n  \r\n  .a{\r\n    color: black\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VzaW9uL3Nlc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2Qjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLHFCQUFxQjtFQUN2Qjs7RUFHQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsNENBQW9DO1lBQXBDLG9DQUFvQyxDQUFDLFNBQVM7SUFDOUMseUNBQTBEO0lBQzFELDBCQUEwQjtJQUMxQixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUNBO0lBQ0U7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3Nlc2lvbi9zZXNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOjU3NnB4KSB7XHJcbiAgICAuY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcge1xyXG4gICAgICBwYWRkaW5nLXRvcDo4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2xlYW4tYmxvY2sgLmJsb2NrLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMzBweDtcclxuICAgIGNvbG9yOmJsYWNrIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBhcmFncmFwaHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgYmFja2dyb3VuZDogICNmZmY7O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZm9udC1mYW1pbHk6TW9udHNlcnJhdCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjFyZW07XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBsaW5lLWhlaWdodDoxLjU7XHJcbiAgICBjb2xvcjojMjEyNTI5O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDoxMTQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgbWF4LXdpZHRoOjk2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDo3MjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6NTc2cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6NTQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gIH1cclxuXHJcbiAgLnJlZEJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzEyNzJkOyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3h7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci10b3A6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDhweCAjMmMzZTUwKTsvKlNvbWJyYSovXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2NhbGVuZGFyQmFja2dyb3VuZC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJveCBoMXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmJveCBwe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB9XHJcblxyXG4gIC5ib3ggaW5wdXRbdHlwZSA9IFwidGV4dFwiXSwgLmJveCBpbnB1dFt0eXBlID0gXCJwYXNzd29yZFwiXXtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICAgIHBhZGRpbmc6IDE0cHggMTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICB9XHJcblxyXG4gIC5ib3ggaW5wdXRbdHlwZSA9IFwidGV4dFwiXTpmb2N1cywuYm94IGlucHV0W3R5cGUgPSBcInBhc3N3b3JkXCJdOmZvY3Vze1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYzEyNzJkO1xyXG4gIH1cclxuXHJcbiAgLmJveCBpbnB1dFt0eXBlID0gXCJzdWJtaXRcIl17XHJcbiAgICBib3JkZXI6MDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI3M2M3NTtcclxuICAgIHBhZGRpbmc6IDE0cHggNDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmJveCBpbnB1dFt0eXBlID0gXCJzdWJtaXRcIl06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMzZiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuYXtcclxuICAgIGNvbG9yOiBibGFja1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/sesion/sesion.component.html":
/*!**********************************************!*\
  !*** ./src/app/sesion/sesion.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<body background=\"transparent\">\r\n    <!--<section style=\"margin-bottom:0px; min-height: 78vh;\">\r\n        <form class=\"box\" name=\"formInicio\" (submit)=\"loginUser($event)\">\r\n            <h2 class=\"text-info\">Iniciar sesión</h2>\r\n            <input type=\"text\" name=\"\" placeholder=\"Correo electrónico\" required>\r\n            <input type=\"password\" name=\"\" placeholder=\"Contraseña\" required>\r\n            <input type=\"submit\" name=\"\" value=\"Login\">\r\n            <div *ngIf=\"invalid\" class=\"alert alert-danger\" role=\"alert\">\r\n                Correo o contraseña incorrectos.\r\n            </div>\r\n            <label><a href=\"/registro\">Crear nueva cuenta</a></label>\r\n            \r\n        </form>\r\n    </section>-->\r\n    <section>\r\n            <p class=\"paragraph\">La resolución de problemas en general y la resolución de problemas en matemática son habilidades \r\n                siempre centrales, tanto para profesionales como para aquellas personas que sin ser profesionales deben adaptarse \r\n                a un mundo de trabajo muy dinámico y cambiante.<br><br>\r\n                Lo que se ha llamado cuarta revolución industrial plantea retos para los trabajadores del futuro que apenas \r\n                empezamos a comprender pero que anticipan como valores, entre otros, la capacidad de resolver problemas y la \r\n                predisposición de las personas para reinventarse en un mundo que lejos de buscar una habilidad específica exigirá \r\n                de ellos la capacidad de adaptarse a demandas que pueden variar o cambiar radicalmente.<br><br>\r\n                El razonamiento matemático se presenta como una de estas habilidades centrales. En el razonamiento matemático se \r\n                conjugan varios componentes, todos ellos importantes. Usamos en mayor o menor medida, capacidades cognitivas entre \r\n                las que se pueden destacar al menos las siguientes:<br><br>\r\n    \r\n                •\tLa Memoria de Trabajo, un recurso ilimitado que, en función de una meta, nos permite mantener activa información \r\n                o asociándola con otra información en nuestro cúmulo de conocimientos.<br>\r\n                •\tEl razonamiento deductivo como forma directa de generar conclusiones verdaderas a partir de hipótesis conocidas. <br>\r\n                •\tLas capacidades espaciales como un complemento que nos permita la representación o la manipulación directa de objetos \r\n                geométricos.<br>\r\n                •\tY finalmente, las capacidades inductivas como aquellas que nos permiten generar conjeturas y conocimiento sobre un \r\n                problema a resolver. <br><br>\r\n    \r\n    \r\n                Con esta agenda CIEMAC la Escuela de Matemática busca seguir aportando un elemento clave en el desarrollo de nuestros \r\n                estudiantes y de nuestro país como lo es el pensamiento matemático. Esta capacidad se cultiva en los estudiantes \r\n                a través de diversas situaciones y los docentes de matemática estamos llamados a contribuir significativamente en \r\n                su desarrollo. Los problemas de esta agenda ofrecen contextos de álgebra, geometría, probabilidades, teoría de \r\n                números y pensamiento lógico simple en cada una de las líneas citadas en el párrafo anterior y con grados de dificultad \r\n                que permiten atender distintos niveles en los estudiantes.<br><br>\r\n                Para nosotros es un placer presentarles una nueva edición de esta agenda y nos llenaría de orgullo que cada uno de los \r\n                docentes que tengan a mano esta herramienta la usen con sus estudiantes, siempre podemos encontrar una buena razón para \r\n                enfrentar retos difíciles e importantes, en este caso nuestros estudiantes y nuestro país.<br><br>\r\n                De la misma manera que esta cuarta revolución industrial llama a nuevas maneras de formar a los ciudadanos, con \r\n                capacidades de pensamiento crítico, con habilidades para resolver problemas y trabajar en equipo y para reinventarse, \r\n                dando énfasis a la resolución de problemas reales, los docentes debemos buscar formas de reinventarnos nosotros mismos \r\n                y ser parte activa en estas transformaciones que sin duda llegarán a nuestras aulas.<br><br>\r\n                Agradecemos a Canguro Matemático que nos facilita muchos de nuestros problemas que cada año usamos en esta agenda.\r\n                </p>      \r\n        \r\n    </section>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/sesion/sesion.component.ts":
/*!********************************************!*\
  !*** ./src/app/sesion/sesion.component.ts ***!
  \********************************************/
/*! exports provided: SesionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionComponent", function() { return SesionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.service */ "./src/app/sesion/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoginCredentials */ "./src/app/LoginCredentials.ts");






var SesionComponent = /** @class */ (function () {
    function SesionComponent(_clientService, appComponent, router) {
        this._clientService = _clientService;
        this.appComponent = appComponent;
        this.router = router;
        this.logInResult = 0;
        this.correoString = new String;
        this.passString = new String;
        this.invalid = false;
        this.appComponent.setLogIn(0);
    }
    SesionComponent.prototype.ngOnInit = function () {
        this.appComponent.setLogIn(0);
        _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__["LoginCredentials"].logOut();
    };
    SesionComponent.prototype.loginUser = function (e) {
        var _this = this;
        e.preventDefault();
        var username = e.target.elements[0].value;
        var pass = e.target.elements[1].value;
        if (username === "" || pass === "") {
            this.invalid = true;
            return;
        }
        this._clientService.logIn(username, pass).subscribe(function (resultado) {
            _this.logInResult = resultado;
            console.log("LogInResult in logIn: " + _this.logInResult);
            if (_this.logInResult > 0) {
                if (_this.logInResult == 1) {
                    _this.router.navigate(['admin']);
                    _this.appComponent.setLogIn(1);
                    localStorage.setItem('UsuarioActivo', username);
                    localStorage.setItem('TipoUsuario', 'admin');
                    _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__["LoginCredentials"].usuario = username;
                    _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__["LoginCredentials"].tipoUsuario = "admin";
                }
                else {
                    _this.router.navigate(['user']);
                    _this.appComponent.setLogIn(2);
                    localStorage.setItem('UsuarioActivo', username);
                    localStorage.setItem('TipoUsuario', 'user');
                    _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__["LoginCredentials"].usuario = username;
                    _LoginCredentials__WEBPACK_IMPORTED_MODULE_5__["LoginCredentials"].tipoUsuario = "admin";
                }
            }
            _this.invalid = true;
        });
        console.log("LogInResult: " + this.logInResult);
        return;
    };
    SesionComponent.prototype.login = function () {
        this._clientService.loggedInUser = this.user;
    };
    SesionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sesion',
            template: __webpack_require__(/*! ./sesion.component.html */ "./src/app/sesion/sesion.component.html"),
            styles: [__webpack_require__(/*! ./sesion.component.css */ "./src/app/sesion/sesion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SesionComponent);
    return SesionComponent;
}());



/***/ }),

/***/ "./src/app/sugerencias/sugerencia.ts":
/*!*******************************************!*\
  !*** ./src/app/sugerencias/sugerencia.ts ***!
  \*******************************************/
/*! exports provided: Sugerencia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sugerencia", function() { return Sugerencia; });
var Sugerencia = /** @class */ (function () {
    function Sugerencia(ID_SUGERENCIA, PROBLEMA_SUGERIDO, CORREO, FECHA) {
        if (ID_SUGERENCIA === void 0) { ID_SUGERENCIA = ""; }
        if (PROBLEMA_SUGERIDO === void 0) { PROBLEMA_SUGERIDO = ""; }
        if (CORREO === void 0) { CORREO = ""; }
        if (FECHA === void 0) { FECHA = ""; }
        this.ID_SUGERENCIA = ID_SUGERENCIA;
        this.PROBLEMA_SUGERIDO = PROBLEMA_SUGERIDO;
        this.CORREO = CORREO;
        this.FECHA = FECHA;
    }
    return Sugerencia;
}());



/***/ }),

/***/ "./src/app/sugerencias/sugerencias.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sugerencias/sugerencias.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-info {\r\n    margin-top: 50px;\r\n    color:black!important;\r\n  }\r\n  .popup {\r\n    margin: 70px auto;\r\n    padding: 20px;\r\n    background: #f2f2f2;\r\n    border-radius: 5px;\r\n    width: 30%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n  }\r\n  .popup p {\r\n    margin-top: 0;\r\n    color: #333;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VnZXJlbmNpYXMvc3VnZXJlbmNpYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtFQUNoQztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxzQ0FBc0M7RUFDeEMiLCJmaWxlIjoic3JjL2FwcC9zdWdlcmVuY2lhcy9zdWdlcmVuY2lhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgY29sb3I6YmxhY2shaW1wb3J0YW50O1xyXG4gIH1cclxuICAucG9wdXAge1xyXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3B1cCBwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/sugerencias/sugerencias.component.html":
/*!********************************************************!*\
  !*** ./src/app/sugerencias/sugerencias.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n</head>\r\n<body>\r\n    <main>\r\n        <section class=\"clean-block clean-cart dark\" style=\" min-height: 78vh;\">\r\n            <div class=\"container\" style=\"margin-top:8px;\">\r\n                <h2 class=\"text-info\">Sugerencias</h2>\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Correo</th>\r\n                            <th>Problema Sugerido</th>\r\n                            <th>Fecha</th>\r\n                            <th>Leer</th>\r\n                        </tr> \r\n                    </thead>\r\n                    <tbody *ngIf=\"sugerencias?.length != 0\">\r\n                        <tr *ngFor= \"let sugerencia of sugerencias\">     \r\n                        <td>{{sugerencia.CORREO}}</td>\r\n                        <td>{{sugerencia.PROBLEMA_SUGERIDO}}</td>\r\n                        <td>{{sugerencia.FECHA}}</td>\r\n                        <td>\r\n                            <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"openModalDialog(a)\">Leído</button>\r\n                              <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\r\n                                  <div class=\"popup\" [ngStyle]=\"{'display':display}\">\r\n                                      <p>¿Está seguro de que desea marcar como leído la anotación?</p>\r\n                                      <button type=\"button\" class=\"btn_si\" (click)=\"marcarLeida(sugerencia)\">Si</button>\r\n                                      <button type=\"button\" class=\"btn_no\" (click)=\"closeModalDialog()\">No</button>\r\n                                  </div>\r\n                              </div>\r\n                          </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tbody *ngIf=\"sugerencias?.length == 0\">\r\n                        <tr>\r\n                            <td>No data!</td>\r\n                            <td>No data!</td>\r\n                            <td>No data!</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                \r\n                </div>\r\n        </section>\r\n    </main>\r\n</body>\r\n\r\n</html>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/sugerencias/sugerencias.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sugerencias/sugerencias.component.ts ***!
  \******************************************************/
/*! exports provided: SugerenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugerenciasComponent", function() { return SugerenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sugerencias_sugerencias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sugerencias/sugerencias.service */ "./src/app/sugerencias/sugerencias.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SugerenciasComponent = /** @class */ (function () {
    function SugerenciasComponent(sugerenciasService) {
        this.sugerenciasService = sugerenciasService;
        this.sugerencias = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.display = 'none';
    }
    SugerenciasComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            language: {
                "processing": "Procesando...",
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "emptyTable": "Ningún dato disponible en esta tabla",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "infoPostFix": "",
                "search": "Buscar:",
                "url": "",
                "loadingRecords": "Cargando...",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "aria": {
                    "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        };
        this.getSugerencias();
    };
    SugerenciasComponent.prototype.getSugerencias = function () {
        var _this = this;
        console.log(this.sugerencias);
        this.sugerenciasService.getSugerencias().then(function (sugerencias) {
            _this.sugerencias = sugerencias;
            _this.dtTrigger.next();
            console.log(sugerencias);
        });
    };
    SugerenciasComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    SugerenciasComponent.prototype.marcarLeida = function (sugerencia) {
        var _this = this;
        for (var i = 0; i < this.sugerencias.length; i++) {
            if (this.sugerencias[i].ID_SUGERENCIA == sugerencia.ID_SUGERENCIA) {
                this.sugerencias.splice(i, 1);
                break;
            }
        }
        this.sugerenciasService.updateSugerenciaLeida(sugerencia)
            .then(function () {
            _this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }).catch(function (err) { return console.log('Err Anotaciones: ' + err); });
        this.closeModalDialog();
    };
    SugerenciasComponent.prototype.openModalDialog = function () {
        this.display = 'block';
    };
    SugerenciasComponent.prototype.closeModalDialog = function () {
        this.display = 'none';
    };
    SugerenciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sugerencias',
            template: __webpack_require__(/*! ./sugerencias.component.html */ "./src/app/sugerencias/sugerencias.component.html"),
            styles: [__webpack_require__(/*! ./sugerencias.component.css */ "./src/app/sugerencias/sugerencias.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sugerencias_sugerencias_service__WEBPACK_IMPORTED_MODULE_2__["SugerenciasService"]])
    ], SugerenciasComponent);
    return SugerenciasComponent;
}());



/***/ }),

/***/ "./src/app/sugerencias/sugerencias.service.ts":
/*!****************************************************!*\
  !*** ./src/app/sugerencias/sugerencias.service.ts ***!
  \****************************************************/
/*! exports provided: SugerenciasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugerenciasService", function() { return SugerenciasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var SugerenciasService = /** @class */ (function () {
    function SugerenciasService(_http) {
        this._http = _http;
    }
    SugerenciasService.prototype.getSugerencias = function () {
        return this._http.get('/getSugerencias')
            .map(function (data) { return data.json(); }).toPromise();
    };
    SugerenciasService.prototype.createSugerencia = function (sugerencia) {
        return this._http.post('/createSugerencia', sugerencia)
            .map(function (data) { return data.json(); }).toPromise();
    };
    SugerenciasService.prototype.updateSugerenciaLeida = function (sugerencia) {
        console.log(sugerencia);
        return this._http.put('/updateSugerenciaLeida', sugerencia)
            .map(function (data) { return data.json(); }).toPromise();
    };
    SugerenciasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SugerenciasService);
    return SugerenciasService;
}());



/***/ }),

/***/ "./src/app/tipo-problema/tipo-problema.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tipo-problema/tipo-problema.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpcG8tcHJvYmxlbWEvdGlwby1wcm9ibGVtYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tipo-problema/tipo-problema.component.html":
/*!************************************************************!*\
  !*** ./src/app/tipo-problema/tipo-problema.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tipo-problema works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/tipo-problema/tipo-problema.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tipo-problema/tipo-problema.component.ts ***!
  \**********************************************************/
/*! exports provided: TipoProblemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoProblemaComponent", function() { return TipoProblemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TipoProblemaComponent = /** @class */ (function () {
    function TipoProblemaComponent() {
    }
    TipoProblemaComponent.prototype.ngOnInit = function () {
    };
    TipoProblemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tipo-problema',
            template: __webpack_require__(/*! ./tipo-problema.component.html */ "./src/app/tipo-problema/tipo-problema.component.html"),
            styles: [__webpack_require__(/*! ./tipo-problema.component.css */ "./src/app/tipo-problema/tipo-problema.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TipoProblemaComponent);
    return TipoProblemaComponent;
}());



/***/ }),

/***/ "./src/app/tipo-problema/tipo-problema.service.ts":
/*!********************************************************!*\
  !*** ./src/app/tipo-problema/tipo-problema.service.ts ***!
  \********************************************************/
/*! exports provided: TipoProblemaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoProblemaService", function() { return TipoProblemaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var TipoProblemaService = /** @class */ (function () {
    function TipoProblemaService(_http) {
        this._http = _http;
    }
    TipoProblemaService.prototype.getTipoProblema = function () {
        return this._http.get('/tipoProblema')
            .map(function (data) { return data.json(); });
    };
    TipoProblemaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], TipoProblemaService);
    return TipoProblemaService;
}());



/***/ }),

/***/ "./src/app/user/calendario/calendario.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/calendario/calendario.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    min-height: 78vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jYWxlbmRhcmlvL2NhbGVuZGFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2FsZW5kYXJpby9jYWxlbmRhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDc4dmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/calendario/calendario.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/calendario/calendario.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Búsqueda por fechas</h2>\r\n  <p>En esta sección puede buscar problemas anteriormente liberados en un rango de fechas válido</p>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\" form.valid && filtrarProblemas()\">\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 col-sm-12 col-lg-6 shadow p-3 mb-5 bg-white rounded\">\r\n            <label for=\"initialDate\">Fecha inicial:</label>\r\n            <input name=\"initialDate\" type=\"date\" class=\"form-control rounded\" formControlName=\"initialDateValue\"\r\n              [ngClass]=\"{'is-invalid':\r\n        form.get('initialDateValue').touched && form.get('initialDateValue').invalid}\"\r\n              (change)=\"setMinDate()\" />\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-12 col-lg-6 shadow p-3 mb-5 bg-white rounded\">\r\n            <label for=\"finalDate\">Fecha final:</label>\r\n            <input name=\"finalDate\" type=\"date\" min=\"{{minDate}}\" class=\"form-control rounded\"\r\n              formControlName=\"finalDateValue\" [ngClass]=\"{'is-invalid':\r\n        form.get('finalDateValue').touched && form.get('finalDateValue').invalid}\" />\r\n          </div>\r\n        </div>\r\n      </div> \r\n      <button class=\"BlueButton\" [disabled]=\"!form.valid\" type=\"submit\">\r\n        Buscar\r\n      </button>\r\n    </form>\r\n\r\n  <h4 style=\"margin-top: 10px;\" *ngIf=\"problemasFiltered\">Resultados obtenidos:</h4>\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n      <thead>\r\n          <tr>\r\n              <th>Nombre</th>\r\n              <th>Categoría</th>\r\n              <th>Fecha</th>\r\n          </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"problemasFiltered?.length != 0\">\r\n          <tr *ngFor= \"let p of problemasFiltered\"> \r\n              <td>{{p.NOMBRE}}</td>\r\n              <td>{{p.TIPO_PROBLEMA}}</td>\r\n              <td>{{p.FECHA_LIBERACION_PROBLEMA}}</td>\r\n          </tr>\r\n      </tbody>\r\n      <tbody *ngIf=\"problemasFiltered?.length == 0\">\r\n          <tr>\r\n              <td>No se encontraron resultados</td>\r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/user/calendario/calendario.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/calendario/calendario.component.ts ***!
  \*********************************************************/
/*! exports provided: CalendarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioComponent", function() { return CalendarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");







var CalendarioComponent = /** @class */ (function () {
    function CalendarioComponent(_usersService, datepipe) {
        this._usersService = _usersService;
        this.datepipe = datepipe;
        this.isDtInitialized = false;
        this.problemas = [];
        this.problemasFiltered = [];
        this.filtro = { NOMBRE: null };
        this.minDate = "";
        this.initialDateValue = '';
        this.finalDateValue = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    CalendarioComponent.prototype.ngOnInit = function () {
        this.formInit();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 20,
            language: {
                "processing": "Procesando...",
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "emptyTable": "Ningún dato disponible en esta tabla",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "infoPostFix": "",
                "search": "Buscar:",
                "url": "",
                "loadingRecords": "Cargando...",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "aria": {
                    "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        };
        this.getProblemsByDate();
    };
    CalendarioComponent.prototype.formInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            initialDateValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            finalDateValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    CalendarioComponent.prototype.getProblemsByDate = function () {
        var _this = this;
        this._usersService.getProblemsByDate()
            .subscribe(function (x) {
            _this.problemas = x;
        });
    };
    CalendarioComponent.prototype.filtrarProblemas = function () {
        var _this = this;
        this.problemasFiltered = [];
        var startDateFilter = new Date(this.form.value.initialDateValue);
        var endDateFilter = new Date(this.form.value.finalDateValue);
        for (var _i = 0, _a = this.problemas; _i < _a.length; _i++) {
            var problema = _a[_i];
            console.log(problema.FECHA_LIBERACION_PROBLEMA);
            var problemDate = new Date(problema.FECHA_LIBERACION_PROBLEMA);
            if (problemDate >= startDateFilter && problemDate <= endDateFilter) {
                this.problemasFiltered.push(problema);
            }
        }
        if (this.isDtInitialized) {
            this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }
        else {
            this.isDtInitialized = true;
            this.dtTrigger.next();
        }
    };
    CalendarioComponent.prototype.setMinDate = function () {
        var date = this.form.value.initialDateValue;
        var finalDate = this.form.value.finalDateValue;
        var dateI = new Date(date);
        var dateF = new Date(finalDate);
        if (dateI >= dateF || finalDate == "") {
            this.form.controls.finalDateValue.setValue(date);
        }
        this.minDate = date;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], CalendarioComponent.prototype, "dtElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CalendarioComponent.prototype, "problemasFiltered", void 0);
    CalendarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendario',
            template: __webpack_require__(/*! ./calendario.component.html */ "./src/app/user/calendario/calendario.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./calendario.component.css */ "./src/app/user/calendario/calendario.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], CalendarioComponent);
    return CalendarioComponent;
}());



/***/ }),

/***/ "./src/app/user/enviar-sugerencia/enviar-sugerencia.component.css":
/*!************************************************************************!*\
  !*** ./src/app/user/enviar-sugerencia/enviar-sugerencia.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    width: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lbnZpYXItc3VnZXJlbmNpYS9lbnZpYXItc3VnZXJlbmNpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lbnZpYXItc3VnZXJlbmNpYS9lbnZpYXItc3VnZXJlbmNpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/enviar-sugerencia/enviar-sugerencia.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/enviar-sugerencia/enviar-sugerencia.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<body>\r\n    <main class=\"page contact-us-page\">\r\n        <section class=\"clean-block clean-form dark\" style=\" min-height: 78vh;\">\r\n            <div class=\"container\">\r\n                 <div class=\"block-heading\">\r\n                    <h2 class=\"text-info\">Sugerir problema</h2>\r\n                    <p></p>\r\n                </div>\r\n                <form (submit) = \"enviarSugerencia($event)\">\r\n                    <label>Enunciado del problema</label>\r\n                    <p><textarea class=\"form-control rounded\" name=\"problema\" required type=\"text\"\r\n                         [(ngModel)]=\"sugerencia.PROBLEMA_SUGERIDO\"></textarea>\r\n                    </p>\r\n                    <div class=\"form-group\">\r\n                      <button class=\"btn RedButton\" type=\"submit\">Enviar</button>\r\n                  </div>\r\n\r\n                </form>\r\n            </div>\r\n        </section>\r\n    </main>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/user/enviar-sugerencia/enviar-sugerencia.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/enviar-sugerencia/enviar-sugerencia.component.ts ***!
  \***********************************************************************/
/*! exports provided: EnviarSugerenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviarSugerenciaComponent", function() { return EnviarSugerenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sugerencias_sugerencia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sugerencias/sugerencia */ "./src/app/sugerencias/sugerencia.ts");
/* harmony import */ var _sugerencias_sugerencias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sugerencias/sugerencias.service */ "./src/app/sugerencias/sugerencias.service.ts");




var EnviarSugerenciaComponent = /** @class */ (function () {
    function EnviarSugerenciaComponent(sugerenciaService) {
        this.sugerenciaService = sugerenciaService;
    }
    EnviarSugerenciaComponent.prototype.ngOnInit = function () {
        this.sugerencia = new src_app_sugerencias_sugerencia__WEBPACK_IMPORTED_MODULE_2__["Sugerencia"];
    };
    EnviarSugerenciaComponent.prototype.enviarSugerencia = function (e) {
        this.sugerencia.CORREO = localStorage.getItem("UsuarioActivo");
        console.log(this.sugerencia);
        this.sugerenciaService.createSugerencia(this.sugerencia);
    };
    EnviarSugerenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enviar-sugerencia',
            template: __webpack_require__(/*! ./enviar-sugerencia.component.html */ "./src/app/user/enviar-sugerencia/enviar-sugerencia.component.html"),
            styles: [__webpack_require__(/*! ./enviar-sugerencia.component.css */ "./src/app/user/enviar-sugerencia/enviar-sugerencia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sugerencias_sugerencias_service__WEBPACK_IMPORTED_MODULE_3__["SugerenciasService"]])
    ], EnviarSugerenciaComponent);
    return EnviarSugerenciaComponent;
}());



/***/ }),

/***/ "./src/app/user/filtro/filtro.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/filtro/filtro.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    min-height: 78vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9maWx0cm8vZmlsdHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2ZpbHRyby9maWx0cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogNzh2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/filtro/filtro.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/filtro/filtro.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>Filtrar problemas</h2>\r\n    <p>En esta sección puede buscar problemas anteriormente liberados</p>\r\n\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n        <thead>\r\n            <tr>\r\n                <th>Nombre</th>\r\n                <th>Categoría</th>\r\n                <th>Fecha</th>\r\n                <th>Ver problema</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"problemas?.length != 0\">\r\n            <tr *ngFor= \"let p of problemas\"> \r\n                <td style=\"cursor: pointer;\">{{p.NOMBRE}}</td>\r\n                <td>{{p.TIPO_PROBLEMA}}</td>\r\n                <td>{{p.FECHA_LIBERACION_PROBLEMA}}</td>\r\n                <td><button (click)=\"verProblema(p)\" class='btn btn-outline-primary btn-sm'>Ver</button></td>\r\n            </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"problemas?.length == 0\">\r\n            <tr>\r\n                <td>No hay datos que mostrar</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/user/filtro/filtro.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/filtro/filtro.component.ts ***!
  \*************************************************/
/*! exports provided: FiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroComponent", function() { return FiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FiltroComponent = /** @class */ (function () {
    function FiltroComponent(_usersService, router) {
        this._usersService = _usersService;
        this.router = router;
        this.problemas = [];
        this.filtro = { NOMBRE: null };
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    FiltroComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            language: {
                "processing": "Procesando...",
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "emptyTable": "Ningún dato disponible en esta tabla",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "infoPostFix": "",
                "search": "Buscar:",
                "url": "",
                "loadingRecords": "Cargando...",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                },
                "aria": {
                    "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        };
        this.getProblemsByDate();
    };
    FiltroComponent.prototype.getProblemsByDate = function () {
        var _this = this;
        this._usersService.getProblemsByDate()
            .subscribe(function (x) {
            _this.problemas = x;
            _this.dtTrigger.next();
            console.log(_this.problemas);
        });
    };
    FiltroComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    FiltroComponent.prototype.verProblema = function (problema) {
        this.router.navigate(['/verProblemaUser']);
        localStorage.setItem('verProblema', problema.ID_PROBLEMA);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FiltroComponent.prototype, "problemas", void 0);
    FiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filtro',
            template: __webpack_require__(/*! ./filtro.component.html */ "./src/app/user/filtro/filtro.component.html"),
            styles: [__webpack_require__(/*! ./filtro.component.css */ "./src/app/user/filtro/filtro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FiltroComponent);
    return FiltroComponent;
}());



/***/ }),

/***/ "./src/app/user/soluciones/soluciones.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/soluciones/soluciones.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    vertical-align:middle;\r\n  }\r\n  \r\n  .img-responsive {\r\n    display:block;\r\n    height:auto;\r\n    max-width:100%;\r\n  }\r\n  \r\n  .img-rounded {\r\n    border-radius:3px;\r\n  }\r\n  \r\n  .img-thumbnail {\r\n    background-color:#fff;\r\n    border:1px solid #ededf0;\r\n    border-radius:3px;\r\n    display:inline-block;\r\n    height:auto;\r\n    line-height:1.428571429;\r\n    max-width:100%;\r\n    moz-transition:all .2s ease-in-out;\r\n    o-transition:all .2s ease-in-out;\r\n    padding:2px;\r\n    transition:all .2s ease-in-out;\r\n    webkit-transition:all .2s ease-in-out;\r\n  }\r\n  \r\n  .img-circle {\r\n    border-radius:50%;\r\n  }\r\n  \r\n  .timeline-centered {\r\n    position:relative;\r\n    margin-bottom:60px;\r\n  }\r\n  \r\n  .timeline-centered:before, .timeline-centered:after {\r\n    content:\" \";\r\n    display:table;\r\n  }\r\n  \r\n  .timeline-centered:after {\r\n    clear:both;\r\n  }\r\n  \r\n  .timeline-centered:before, .timeline-centered:after {\r\n    content:\" \";\r\n    display:table;\r\n  }\r\n  \r\n  .timeline-centered:after {\r\n    clear:both;\r\n  }\r\n  \r\n  .timeline-centered:before {\r\n    content:'';\r\n    position:absolute;\r\n    display:block;\r\n    width:4px;\r\n    background:#f5f5f6;\r\n    left:50%;\r\n    top:20px;\r\n    bottom:20px;\r\n    margin-left:-4px;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry {\r\n    position:relative;\r\n    width:50%;\r\n    float:right;\r\n    margin-bottom:70px;\r\n    clear:both;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry:before, .timeline-centered .timeline-entry:after {\r\n    content:\" \";\r\n    display:table;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry:after {\r\n    clear:both;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry:before, .timeline-centered .timeline-entry:after {\r\n    content:\" \";\r\n    display:table;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry:after {\r\n    clear:both;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry.begin {\r\n    margin-bottom:0;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry.left-aligned {\r\n    float:left;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner {\r\n    margin-left:0;\r\n    margin-right:-18px;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-time {\r\n    left:auto;\r\n    right:-100px;\r\n    text-align:left;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-icon {\r\n    float:right;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label {\r\n    margin-left:0;\r\n    margin-right:70px;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label:after {\r\n    left:auto;\r\n    right:0;\r\n    margin-left:0;\r\n    margin-right:-9px;\r\n    -webkit-transform:rotate(180deg);\r\n    transform:rotate(180deg);\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner {\r\n    position:relative;\r\n    margin-left:-22px;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner:before, .timeline-centered .timeline-entry .timeline-entry-inner:after {\r\n    content:\" \";\r\n    display:table;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner:after {\r\n    clear:both;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner:before, .timeline-centered .timeline-entry .timeline-entry-inner:after {\r\n    content:\" \";\r\n    display:table;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner:after {\r\n    clear:both;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time {\r\n    position:absolute;\r\n    left:-100px;\r\n    text-align:right;\r\n    padding:10px;\r\n    box-sizing:border-box;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span {\r\n    display:block;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:first-child {\r\n    font-size:15px;\r\n    font-weight:bold;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:last-child {\r\n    font-size:12px;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\r\n    background:#fff;\r\n    color:#737881;\r\n    display:block;\r\n    width:40px;\r\n    height:40px;\r\n    -webkit-background-clip:padding-box;\r\n    -moz-background-clip:padding;\r\n    background-clip:padding-box;\r\n    border-radius:20px;\r\n    text-align:center;\r\n    box-shadow:0 0 0 5px #f5f5f6;\r\n    line-height:40px;\r\n    font-size:15px;\r\n    float:left;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-primary {\r\n    background-color:#303641;\r\n    color:#fff;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-secondary {\r\n    background-color:#ee4749;\r\n    color:#fff;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-success {\r\n    background-color:#002855;\r\n    color:#fff;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-info {\r\n    background-color:#21a9e1;\r\n    color:#fff;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-warning {\r\n    background-color:#fad839;\r\n    color:#fff;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-danger {\r\n    background-color:#cc2424;\r\n    color:#fff;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\r\n    position:relative;\r\n    background:#f5f5f6;\r\n    padding:1.7em;\r\n    margin-left:70px;\r\n    -webkit-background-clip:padding-box;\r\n    -moz-background-clip:padding;\r\n    background-clip:padding-box;\r\n    border-radius:3px;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\r\n    content:'';\r\n    display:block;\r\n    position:absolute;\r\n    width:0;\r\n    height:0;\r\n    border-style:solid;\r\n    border-width:12px 12px 12px 0;\r\n    border-color:transparent #f5f5f6 transparent transparent;\r\n    left:0;\r\n    top:10px;\r\n    margin-left:0px;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2, .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p {\r\n    color:#737881;\r\n    font-family:\"Noto Sans\",sans-serif;\r\n    font-size:14px;\r\n    margin:0;\r\n    line-height:1.428571429;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2, .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\r\n    color:#737881;\r\n    font-family:\"Noto Sans\",sans-serif;\r\n    font-size:14px;\r\n    margin:0;\r\n    line-height:1.428571429;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\r\n    margin-top:15px;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\r\n    font-size:16px;\r\n    margin-bottom:0px;\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\r\n    color:#656669;\r\n    margin-bottom:0px;\r\n\r\n  }\r\n  \r\n  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\r\n    -webkit-opacity:.6;\r\n    -moz-opacity:.6;\r\n    opacity:.6;\r\n    -ms-filter:alpha(opacity=60);\r\n    filter:alpha(opacity=60);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zb2x1Y2lvbmVzL3NvbHVjaW9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYixpQkFBaUI7SUFHakIsZ0NBQWdDO0lBRWhDLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFHWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFHM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUdqQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFHM0IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLHdEQUF3RDtJQUN4RCxNQUFNO0lBQ04sUUFBUTtJQUNSLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxRQUFRO0lBQ1IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsUUFBUTtJQUNSLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjs7RUFFbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsd0JBQXdCO0VBQzFCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zb2x1Y2lvbmVzL3NvbHVjaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWctcmVzcG9uc2l2ZSB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltZy1yb3VuZGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIH1cclxuICBcclxuICAuaW1nLXRodW1ibmFpbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNlZGVkZjA7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBsaW5lLWhlaWdodDoxLjQyODU3MTQyOTtcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgbW96LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgIG8tdHJhbnNpdGlvbjphbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgcGFkZGluZzoycHg7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB3ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuaW1nLWNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDpcIiBcIjtcclxuICAgIGRpc3BsYXk6dGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XHJcbiAgICBjbGVhcjpib3RoO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLCAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDpcIiBcIjtcclxuICAgIGRpc3BsYXk6dGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XHJcbiAgICBjbGVhcjpib3RoO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDo0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiNmNWY1ZjY7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRvcDoyMHB4O1xyXG4gICAgYm90dG9tOjIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDotNHB4O1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjcwcHg7XHJcbiAgICBjbGVhcjpib3RoO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5OmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeTphZnRlciB7XHJcbiAgICBjb250ZW50OlwiIFwiO1xyXG4gICAgZGlzcGxheTp0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeTphZnRlciB7XHJcbiAgICBjbGVhcjpib3RoO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5OmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeTphZnRlciB7XHJcbiAgICBjb250ZW50OlwiIFwiO1xyXG4gICAgZGlzcGxheTp0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeTphZnRlciB7XHJcbiAgICBjbGVhcjpib3RoO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5LmJlZ2luIHtcclxuICAgIG1hcmdpbi1ib3R0b206MDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeS5sZWZ0LWFsaWduZWQge1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeS5sZWZ0LWFsaWduZWQgLnRpbWVsaW5lLWVudHJ5LWlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkubGVmdC1hbGlnbmVkIC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtdGltZSB7XHJcbiAgICBsZWZ0OmF1dG87XHJcbiAgICByaWdodDotMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkubGVmdC1hbGlnbmVkIC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeS5sZWZ0LWFsaWduZWQgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDowO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkubGVmdC1hbGlnbmVkIC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWw6YWZ0ZXIge1xyXG4gICAgbGVmdDphdXRvO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTlweDtcclxuICAgIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0Oi0yMnB4O1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lcjpiZWZvcmUsIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6XCIgXCI7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lcjphZnRlciB7XHJcbiAgICBjbGVhcjpib3RoO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lcjpiZWZvcmUsIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6XCIgXCI7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lcjphZnRlciB7XHJcbiAgICBjbGVhcjpib3RoO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtdGltZSB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6LTEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS10aW1lID4gc3BhbiB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtdGltZSA+IHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtdGltZSA+IHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24ge1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgY29sb3I6IzczNzg4MTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOnBhZGRpbmc7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6MCAwIDAgNXB4ICNmNWY1ZjY7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgNXB4ICNmNWY1ZjY7XHJcbiAgICBib3gtc2hhZG93OjAgMCAwIDVweCAjZjVmNWY2O1xyXG4gICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMDM2NDE7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5iZy1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWU0NzQ5O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uYmctc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDI4NTU7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5iZy1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzIxYTllMTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmJnLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmFkODM5O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uYmctZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2NjMjQyNDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6I2Y1ZjVmNjtcclxuICAgIHBhZGRpbmc6MS43ZW07XHJcbiAgICBtYXJnaW4tbGVmdDo3MHB4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDpwYWRkaW5nO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjNweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDowO1xyXG4gICAgaGVpZ2h0OjA7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6MTJweCAxMnB4IDEycHggMDtcclxuICAgIGJvcmRlci1jb2xvcjp0cmFuc3BhcmVudCAjZjVmNWY2IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgbGVmdDowO1xyXG4gICAgdG9wOjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiwgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHAge1xyXG4gICAgY29sb3I6IzczNzg4MTtcclxuICAgIGZvbnQtZmFtaWx5OlwiTm90byBTYW5zXCIsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBsaW5lLWhlaWdodDoxLjQyODU3MTQyOTtcclxuICB9XHJcblxyXG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiwgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIGEge1xyXG4gICAgY29sb3I6IzczNzg4MTtcclxuICAgIGZvbnQtZmFtaWx5OlwiTm90byBTYW5zXCIsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBsaW5lLWhlaWdodDoxLjQyODU3MTQyOTtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHAgKyBwIHtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiBhIHtcclxuICAgIGNvbG9yOiM2NTY2Njk7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiBzcGFuIHtcclxuICAgIC13ZWJraXQtb3BhY2l0eTouNjtcclxuICAgIC1tb3otb3BhY2l0eTouNjtcclxuICAgIG9wYWNpdHk6LjY7XHJcbiAgICAtbXMtZmlsdGVyOmFscGhhKG9wYWNpdHk9NjApO1xyXG4gICAgZmlsdGVyOmFscGhhKG9wYWNpdHk9NjApO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/user/soluciones/soluciones.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/soluciones/soluciones.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<title>Timeline</title>\r\n</head>\r\n\r\n<body>\r\n\t<div class=\"container\"  style=\" min-height: 78vh;\">\r\n\t\t<h2>Búsqueda de soluciones</h2>\r\n\t\t<p>En esta sección puede buscar las soluciones de problemas anteriormente liberados</p>\r\n\t\t<div class=\"row\" style=\"justify-content: center;\">\r\n\t\t\t<div class=\"timeline-centered\">\r\n\r\n\t\t\t\t<article class=\"timeline-entry\" *ngFor=\"let p of problemas\">\r\n\r\n\t\t\t\t\t<div class=\"timeline-entry-inner\">\r\n\t\t\t\t\t\t<time class=\"timeline-time\"\r\n\t\t\t\t\t\t\tdatetime=\"2014-01-10T03:45\"><span>{{p.FECHA_LIBERACION_PROBLEMA}}</span>\r\n\t\t\t\t\t\t\t<span>{{p.FECHA_LIBERACION_SOLUCION}}</span></time>\r\n\r\n\t\t\t\t\t\t<div class=\"timeline-icon bg-success\">\r\n\t\t\t\t\t\t\t<i class=\"entypo-feather\"></i>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"timeline-label\" style=\"width: 100%; border-radius: 15px;\r\n\t\t\tbackground-color: darkgray;\"+>\r\n\t\t\t\t\t\t\t<h2><a [routerLink]=\"['/verProblemaUser/',p.NOMBRE]\"> {{p.NOMBRE}} </a></h2>\r\n\t\t\t\t\t\t\t<h2><span>{{p.TIPO_PROBLEMA}}</span></h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t</article>\r\n\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<script src=\"../../../assets/js/jquery.min.js\"></script>\r\n\t<script src=\"../../../assets/bootstrap/js/bootstrap.min.js\"></script>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/user/soluciones/soluciones.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/soluciones/soluciones.component.ts ***!
  \*********************************************************/
/*! exports provided: SolucionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolucionesComponent", function() { return SolucionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");



var SolucionesComponent = /** @class */ (function () {
    function SolucionesComponent(_usersService) {
        this._usersService = _usersService;
        this.problemas = [];
    }
    SolucionesComponent.prototype.ngOnInit = function () {
        this.getProblemsByDate();
    };
    SolucionesComponent.prototype.getProblemsByDate = function () {
        var _this = this;
        this._usersService.getProblemsByDate()
            .subscribe(function (x) { return _this.problemas = x; });
    };
    SolucionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soluciones',
            template: __webpack_require__(/*! ./soluciones.component.html */ "./src/app/user/soluciones/soluciones.component.html"),
            styles: [__webpack_require__(/*! ./soluciones.component.css */ "./src/app/user/soluciones/soluciones.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SolucionesComponent);
    return SolucionesComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<body>\r\n    <section class=\"clean-block clean-form dark\" style=\" min-height: 78vh;\">\r\n        <h2 class=\"text-info\" style=\"margin-left: 8%;\">Problema del día</h2>\r\n            <div class=\"column\" style=\"width: 40%; margin-left: 8%; bottom: 3%;\">  \r\n                <img *ngIf=\"obra\" src=\"{{obra.IMG_SOURCE}}\" style=\"max-width: 500px; max-height: 500px;width: auto; height: auto; margin-top: 5%; display: block;\">\r\n                <p style=\"padding-top:2px;\"><b>Nombre:</b> {{obra.NOMBRE_DE_OBRA}}<br><b>Artista:</b> {{obra.NOMBRE_ARTISTA}}<br><b>Año:</b> {{obra.YEAR}}</p>\r\n            </div>\r\n            <div class=\"column\" style=\"margin-top: 7%; width: 50%;\">\r\n                <div class=\"clean-blog-post\">\r\n                    <h3>Enunciado del problema</h3>\r\n                    <div>\r\n                        <ng-katex-paragraph [paragraph]=\"problemaLatex\"></ng-katex-paragraph>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clean-blog-post\">\r\n                    <h3>Solución del problema</h3>\r\n                        <div>\r\n                            <ng-katex-paragraph [paragraph]=\"solucionLatex\"></ng-katex-paragraph>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n    </section>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _problema_problema_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../problema/problema.service */ "./src/app/problema/problema.service.ts");
/* harmony import */ var _obras_obras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../obras/obras.service */ "./src/app/obras/obras.service.ts");



//Calendariomatematico123

var UserComponent = /** @class */ (function () {
    function UserComponent(obraService, problemaService) {
        this.obraService = obraService;
        this.problemaService = problemaService;
        this.verProblema = false;
        this.verAnotaciones = true;
        this.problemaLatex = "Enunciado del problema";
        this.solucionLatex = "Solucion del problema";
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getProblem();
        }, 500);
        this.getObra();
    };
    UserComponent.prototype.getObra = function () {
        var _this = this;
        this.obraService.getObraActual()
            .subscribe(function (obra) {
            _this.obra = obra[0];
        });
    };
    UserComponent.prototype.getProblem = function () {
        var _this = this;
        this.problemaService.getProblemaActual().
            subscribe(function (x) {
            _this.problemaActual = x[0];
            _this.solucionLatex = _this.problemaActual.LATEX_SOURCE_SOLUCION;
            _this.problemaLatex = _this.problemaActual.LATEX_SOURCE_PROBLEMA;
            console.log(x);
        });
    };
    UserComponent.prototype.getUrl = function () {
        return "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url('" + this.obra.IMG_SOURCE + "')";
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_obras_obras_service__WEBPACK_IMPORTED_MODULE_3__["ObraService"],
            _problema_problema_service__WEBPACK_IMPORTED_MODULE_2__["ProblemaService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getProblemsByDate = function () {
        return this._http.get('/problemDateByDate')
            .map(function (data) { return data.json(); });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/ver-problema-user/comentario.ts":
/*!******************************************************!*\
  !*** ./src/app/user/ver-problema-user/comentario.ts ***!
  \******************************************************/
/*! exports provided: Comentario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comentario", function() { return Comentario; });
var Comentario = /** @class */ (function () {
    function Comentario(ID_COMENTARIO, COMENTARIO, CLIENTE, ID_PROBLEMA) {
        if (ID_COMENTARIO === void 0) { ID_COMENTARIO = ""; }
        if (COMENTARIO === void 0) { COMENTARIO = ""; }
        if (CLIENTE === void 0) { CLIENTE = ""; }
        if (ID_PROBLEMA === void 0) { ID_PROBLEMA = ""; }
        this.ID_COMENTARIO = ID_COMENTARIO;
        this.COMENTARIO = COMENTARIO;
        this.CLIENTE = CLIENTE;
        this.ID_PROBLEMA = ID_PROBLEMA;
    }
    return Comentario;
}());



/***/ }),

/***/ "./src/app/user/ver-problema-user/ver-problema-user.component.css":
/*!************************************************************************!*\
  !*** ./src/app/user/ver-problema-user/ver-problema-user.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popupAnotacion {\r\n    margin: 70px auto;\r\n    padding: 20px;\r\n    background: #f2f2f2;\r\n    border-radius: 5px;\r\n    border-width: 2px;\r\n    border-color: black;\r\n    width: 40%; \r\n    position: relative;\r\n    margin: 0 auto;\r\n    top: 25%;\r\n    transition: all 5s ease-in-out;\r\n  }\r\n  \r\n  .popupAnotacion p {\r\n    border-width: 2px;\r\n    margin-top: 0;\r\n    color: #333;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n  }\r\n  \r\n  textarea {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci92ZXItcHJvYmxlbWEtdXNlci92ZXItcHJvYmxlbWEtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsUUFBUTtJQUNSLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztJQUNYLHNDQUFzQztFQUN4Qzs7RUFDQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdmVyLXByb2JsZW1hLXVzZXIvdmVyLXByb2JsZW1hLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cEFub3RhY2lvbiB7XHJcbiAgICBtYXJnaW46IDcwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwJTsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRvcDogMjUlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAucG9wdXBBbm90YWNpb24gcCB7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICB0ZXh0YXJlYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/ver-problema-user/ver-problema-user.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/ver-problema-user/ver-problema-user.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<body>\r\n    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayAnotacion}\"> \r\n        <div class=\"popupAnotacion\" [ngStyle]=\"{'display': displayAnotacion}\">\r\n            <textarea class=\"form-control rounded\" name=\"problema\" required type=\"text\" [(ngModel)]=\"anotacion.ANOTACION\" ></textarea>\r\n            <button type=\"button\" class=\"btn_si\" (click) =\"guardarAnotacion(problema.ID_PROBLEMA)\" (click)=\"closeModalDialogAnotacion()\">Enviar</button>\r\n            <button type=\"button\" class=\"btn_no\" (click)=\"closeModalDialogAnotacion()\">Cancelar</button>\r\n        </div> \r\n    </div>\r\n    <section class=\"clean-block clean-form dark\" style=\" min-height: 78vh;\">\r\n            <div class=\"column\" style=\"width: 40%; margin-left: 8%;margin-top: 5%; bottom: 3%;\">  \r\n                <button (click)=\"openModalDialogAnotacion()\" type=\"submit\" class='btn btn-outline-primary btn-sm'>Recomendación</button>\r\n                <img *ngIf=\"obra\" src=\"{{obra.IMG_SOURCE}}\" style=\"max-width: 500px; max-height: 500px;width: auto; height: auto; margin-top: 5%; display: block;\">\r\n                <p *ngIf=\"obra\" style=\"padding-top:2px;\"><b>Nombre:</b> {{obra.NOMBRE_DE_OBRA}}<br><b>Artista:</b> {{obra.NOMBRE_ARTISTA}}<br><b>Año:</b> {{obra.YEAR}}</p>\r\n            </div>\r\n            <div class=\"column\" style=\"margin-top: 7%; width: 50%;\">\r\n                <div class=\"clean-blog-post\">\r\n                    <h3>Enunciado del problema</h3>\r\n                    <div>\r\n                        <ng-katex-paragraph [paragraph]=\"problemLatexVer\"></ng-katex-paragraph>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clean-blog-post\">\r\n                    <h3>Solución del problema</h3>\r\n                        <div>\r\n                            <ng-katex-paragraph [paragraph]=\"solutionLatexVer\"></ng-katex-paragraph>\r\n                        </div>\r\n                </div> \r\n            </div>\r\n            <textarea class=\"form-control rounded\" name=\"problema\" placeholder=\"Dejar un comentario...\" required type=\"text\" [(ngModel)]=\"comentario.COMENTARIO\" style=\"margin-left: 8%; width: 70%;\" ></textarea>\r\n            <button (click)=\"enviarComentario()\" type=\"submit\" class='btn btn-outline-primary btn-sm'>Enviar</button>\r\n            <table class='table' *ngIf=\"comentarios\"  style=\"margin-left: 8%; width: 70%;\">\r\n                <thead>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let comentario of comentarios\">\r\n                    <td><p><b>{{comentario.CLIENTE}}</b><br>{{ comentario.COMENTARIO }}</p></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n    </section>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/user/ver-problema-user/ver-problema-user.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/ver-problema-user/ver-problema-user.component.ts ***!
  \***********************************************************************/
/*! exports provided: VerProblemaUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerProblemaUserComponent", function() { return VerProblemaUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _problema_problema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../problema/problema */ "./src/app/problema/problema.ts");
/* harmony import */ var _obras_obras_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../obras/obras.service */ "./src/app/obras/obras.service.ts");
/* harmony import */ var _problema_problema_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../problema/problema.service */ "./src/app/problema/problema.service.ts");
/* harmony import */ var _anotaciones_anotaciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../anotaciones/anotaciones.service */ "./src/app/anotaciones/anotaciones.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var src_app_anotaciones_anotaciones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/anotaciones/anotaciones */ "./src/app/anotaciones/anotaciones.ts");
/* harmony import */ var src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/LoginCredentials */ "./src/app/LoginCredentials.ts");
/* harmony import */ var _comentario__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comentario */ "./src/app/user/ver-problema-user/comentario.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");












var VerProblemaUserComponent = /** @class */ (function () {
    function VerProblemaUserComponent(route, router, problemaService, anotacionService, obraService) {
        this.route = route;
        this.router = router;
        this.problemaService = problemaService;
        this.anotacionService = anotacionService;
        this.obraService = obraService;
        this.nombreProblema = "";
        this.comentario = new _comentario__WEBPACK_IMPORTED_MODULE_10__["Comentario"];
        this.anotacion = new src_app_anotaciones_anotaciones__WEBPACK_IMPORTED_MODULE_8__["Anotaciones"];
        this.displayAnotacion = 'none';
        this.tipoProblemaString = "";
        this.problemLatex = "";
        this.solutionLatex = "\\text{Solución no disponible aún}";
        this.problemLatexVer = "";
        this.solutionLatexVer = "Solución no disponible aún";
        this.ver = false;
        this.problema = new _problema_problema__WEBPACK_IMPORTED_MODULE_3__["Problema"]();
    }
    VerProblemaUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getProblem();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(1000).subscribe(function (x) {
            _this.getComentariosProblema();
        });
    };
    VerProblemaUserComponent.prototype.getProblem = function () {
        var _this = this;
        this.problemaService.getProblemaById(localStorage.getItem("verProblema")).
            then(function (x) {
            _this.problema = x[0];
            _this.problemLatexVer = _this.problema.LATEX_SOURCE_PROBLEMA;
            _this.solutionLatexVer = _this.problema.LATEX_SOURCE_SOLUCION;
            _this.getObra();
            var date = new Date();
            console.log(date.getDate());
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            if (new Date(_this.problema.FECHA_LIBERACION_SOLUCION) > new Date(yyyy + "-" + mm + "-" + dd)) {
                _this.solutionLatexVer = "No se ha liberado la solución de este problema";
                console.log(_this.solutionLatexVer);
            }
        });
    };
    VerProblemaUserComponent.prototype.getComentariosProblema = function () {
        var _this = this;
        this.problemaService.getComentariosProblema(localStorage.getItem("verProblema")).
            then(function (x) {
            _this.comentarios = x;
            console.log(_this.comentarios);
        });
    };
    VerProblemaUserComponent.prototype.getObra = function () {
        var _this = this;
        this.obraService.getObraActual()
            .subscribe(function (obra) {
            _this.obra = obra[0];
            console.log(_this.obra);
        });
    };
    VerProblemaUserComponent.prototype.enviarComentario = function () {
        this.comentario.CLIENTE = src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_9__["LoginCredentials"].usuario;
        this.comentario.ID_PROBLEMA = this.problema.ID_PROBLEMA;
        this.problemaService.createComentarioProblema(this.comentario);
        this.comentarios.push(new _comentario__WEBPACK_IMPORTED_MODULE_10__["Comentario"]("", this.comentario.COMENTARIO, this.comentario.CLIENTE));
    };
    VerProblemaUserComponent.prototype.openModalDialogAnotacion = function () {
        this.displayAnotacion = 'block';
    };
    VerProblemaUserComponent.prototype.closeModalDialogAnotacion = function () {
        this.displayAnotacion = 'none';
    };
    VerProblemaUserComponent.prototype.guardarAnotacion = function (idproblema) {
        this.anotacion.ID_CLIENTE = src_app_LoginCredentials__WEBPACK_IMPORTED_MODULE_9__["LoginCredentials"].usuario;
        this.anotacion.ID_PROBLEMA = idproblema;
        this.displayAnotacion = 'none';
        console.log(this.anotacion);
        this.anotacionService.createAnotacion(this.anotacion);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], VerProblemaUserComponent.prototype, "nombreProblema", void 0);
    VerProblemaUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver-problema-user',
            template: __webpack_require__(/*! ./ver-problema-user.component.html */ "./src/app/user/ver-problema-user/ver-problema-user.component.html"),
            styles: [__webpack_require__(/*! ./ver-problema-user.component.css */ "./src/app/user/ver-problema-user/ver-problema-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _problema_problema_service__WEBPACK_IMPORTED_MODULE_5__["ProblemaService"],
            _anotaciones_anotaciones_service__WEBPACK_IMPORTED_MODULE_6__["AnotacionesService"],
            _obras_obras_service__WEBPACK_IMPORTED_MODULE_4__["ObraService"]])
    ], VerProblemaUserComponent);
    return VerProblemaUserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nacho\Documents\GitHub\CalendarioHeroku\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

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
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pokemon-list/pokemon-list.component */ "./src/app/components/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _components_pokemon_insert_pokemon_insert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pokemon-insert/pokemon-insert.component */ "./src/app/components/pokemon-insert/pokemon-insert.component.ts");
/* harmony import */ var _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pokemon-detail/pokemon-detail.component */ "./src/app/components/pokemon-detail/pokemon-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_5__["PokemonListComponent"],
                _components_pokemon_insert_pokemon_insert_component__WEBPACK_IMPORTED_MODULE_7__["PokemonInsertComponent"],
                _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_8__["PokemonDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pokemon-list/pokemon-list.component */ "./src/app/components/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var _components_pokemon_insert_pokemon_insert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pokemon-insert/pokemon-insert.component */ "./src/app/components/pokemon-insert/pokemon-insert.component.ts");
/* harmony import */ var _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pokemon-detail/pokemon-detail.component */ "./src/app/components/pokemon-detail/pokemon-detail.component.ts");






var routes = [
    { path: 'pokemon-insert', component: _components_pokemon_insert_pokemon_insert_component__WEBPACK_IMPORTED_MODULE_4__["PokemonInsertComponent"] },
    { path: 'pokemon-detail/:id', component: _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_5__["PokemonDetailComponent"] },
    { path: '**', redirectTo: '/' },
    { path: '', component: _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__["PokemonListComponent"] },
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



/***/ }),

/***/ "./src/app/components/pokemon-detail/pokemon-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/pokemon-detail/pokemon-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    padding: 0 3%;\r\n}\r\n.title h1{\r\n    margin-top: 20px;\r\n    text-align: center;\r\n}\r\n.pokemon-detail{\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n}\r\n.pokemon-detail a{\r\n    font-size: 1.3em;\r\n}\r\n.main{\r\n    text-align: center;\r\n    background: #f9f9f9;\r\n}\r\n.name{\r\n    padding-top: 20px;\r\n}\r\n.type span{\r\n    margin-right: 5px;\r\n    padding: 7px 12px;\r\n}\r\n.hability p{\r\n    font-size: 1.3em;\r\n}\r\n/* en */\r\n.color-fire{background: red;}\r\n.color-dark{background: #333;}\r\n.color-electr{background: yellow;}\r\n.color-fairy{background: rgba(255, 85, 255, 0.568);}\r\n.color-fight{background: rgba(88, 35, 46, 0.774);}\r\n.color-flying{background: rgb(179, 179, 216);}\r\n.color-ghost{background: rgb(80, 80, 110);}\r\n.color-grass{background: rgb(9, 110, 34);}\r\n.color-ground{background: rgba(104, 73, 79, 0.774);}\r\n.color-ice{background: rgb(207, 207, 226);}\r\n.color-normal{background: rgb(147, 147, 151);}\r\n.color-psychc{background: rgb(248, 218, 241);}\r\n.color-rock{background: rgb(82, 82, 94);}\r\n.color-steel{background: rgb(198, 198, 201);}\r\n.color-water{background: blue;}\r\n.color-poison{background: rgb(178, 135, 206);}\r\n/* pt */\r\n.color-fogo{background: red;}\r\n.color-dark{background: #333;}\r\n.color-elétrico{background: yellow;}\r\n.color-fada{background: rgba(255, 85, 255, 0.568);}\r\n.color-lutador{background: rgba(88, 35, 46, 0.774);}\r\n.color-voador{background: rgb(179, 179, 216);}\r\n.color-fantasma{background: rgb(80, 80, 110);}\r\n.color-grama{background: rgb(9, 110, 34);}\r\n.color-terra{background: rgba(104, 73, 79, 0.774);}\r\n.color-gelo{background: rgb(207, 207, 226);}\r\n.color-normal{background: rgb(147, 147, 151);}\r\n.color-psycho{background: rgb(248, 218, 241);}\r\n.color-pedra{background: rgb(82, 82, 94);}\r\n.color-metal{background: rgb(198, 198, 201);}\r\n.color-água{background: blue;}\r\n.color-venenoso{background: rgb(178, 135, 206);}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uLWRldGFpbC9wb2tlbW9uLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBLE9BQU87QUFDUCxZQUFZLGVBQWUsQ0FBQztBQUM1QixZQUFZLGdCQUFnQixDQUFDO0FBQzdCLGNBQWMsa0JBQWtCLENBQUM7QUFDakMsYUFBYSxxQ0FBcUMsQ0FBQztBQUNuRCxhQUFhLG1DQUFtQyxDQUFDO0FBQ2pELGNBQWMsOEJBQThCLENBQUM7QUFDN0MsYUFBYSw0QkFBNEIsQ0FBQztBQUMxQyxhQUFhLDJCQUEyQixDQUFDO0FBQ3pDLGNBQWMsb0NBQW9DLENBQUM7QUFDbkQsV0FBVyw4QkFBOEIsQ0FBQztBQUMxQyxjQUFjLDhCQUE4QixDQUFDO0FBQzdDLGNBQWMsOEJBQThCLENBQUM7QUFDN0MsWUFBWSwyQkFBMkIsQ0FBQztBQUN4QyxhQUFhLDhCQUE4QixDQUFDO0FBQzVDLGFBQWEsZ0JBQWdCLENBQUM7QUFDOUIsY0FBYyw4QkFBOEIsQ0FBQztBQUU3QyxPQUFPO0FBQ1AsWUFBWSxlQUFlLENBQUM7QUFDNUIsWUFBWSxnQkFBZ0IsQ0FBQztBQUM3QixnQkFBZ0Isa0JBQWtCLENBQUM7QUFDbkMsWUFBWSxxQ0FBcUMsQ0FBQztBQUNsRCxlQUFlLG1DQUFtQyxDQUFDO0FBQ25ELGNBQWMsOEJBQThCLENBQUM7QUFDN0MsZ0JBQWdCLDRCQUE0QixDQUFDO0FBQzdDLGFBQWEsMkJBQTJCLENBQUM7QUFDekMsYUFBYSxvQ0FBb0MsQ0FBQztBQUNsRCxZQUFZLDhCQUE4QixDQUFDO0FBQzNDLGNBQWMsOEJBQThCLENBQUM7QUFDN0MsY0FBYyw4QkFBOEIsQ0FBQztBQUM3QyxhQUFhLDJCQUEyQixDQUFDO0FBQ3pDLGFBQWEsOEJBQThCLENBQUM7QUFDNUMsWUFBWSxnQkFBZ0IsQ0FBQztBQUM3QixnQkFBZ0IsOEJBQThCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bva2Vtb24tZGV0YWlsL3Bva2Vtb24tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgcGFkZGluZzogMCAzJTtcclxufVxyXG4udGl0bGUgaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wb2tlbW9uLWRldGFpbHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ucG9rZW1vbi1kZXRhaWwgYXtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxuLm1haW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcbi5uYW1le1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLnR5cGUgc3BhbntcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZzogN3B4IDEycHg7XHJcbn1cclxuLmhhYmlsaXR5IHB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG59XHJcbi8qIGVuICovXHJcbi5jb2xvci1maXJle2JhY2tncm91bmQ6IHJlZDt9XHJcbi5jb2xvci1kYXJre2JhY2tncm91bmQ6ICMzMzM7fVxyXG4uY29sb3ItZWxlY3Rye2JhY2tncm91bmQ6IHllbGxvdzt9XHJcbi5jb2xvci1mYWlyeXtiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgODUsIDI1NSwgMC41NjgpO31cclxuLmNvbG9yLWZpZ2h0e2JhY2tncm91bmQ6IHJnYmEoODgsIDM1LCA0NiwgMC43NzQpO31cclxuLmNvbG9yLWZseWluZ3tiYWNrZ3JvdW5kOiByZ2IoMTc5LCAxNzksIDIxNik7fVxyXG4uY29sb3ItZ2hvc3R7YmFja2dyb3VuZDogcmdiKDgwLCA4MCwgMTEwKTt9XHJcbi5jb2xvci1ncmFzc3tiYWNrZ3JvdW5kOiByZ2IoOSwgMTEwLCAzNCk7fVxyXG4uY29sb3ItZ3JvdW5ke2JhY2tncm91bmQ6IHJnYmEoMTA0LCA3MywgNzksIDAuNzc0KTt9XHJcbi5jb2xvci1pY2V7YmFja2dyb3VuZDogcmdiKDIwNywgMjA3LCAyMjYpO31cclxuLmNvbG9yLW5vcm1hbHtiYWNrZ3JvdW5kOiByZ2IoMTQ3LCAxNDcsIDE1MSk7fVxyXG4uY29sb3ItcHN5Y2hje2JhY2tncm91bmQ6IHJnYigyNDgsIDIxOCwgMjQxKTt9XHJcbi5jb2xvci1yb2Nre2JhY2tncm91bmQ6IHJnYig4MiwgODIsIDk0KTt9XHJcbi5jb2xvci1zdGVlbHtiYWNrZ3JvdW5kOiByZ2IoMTk4LCAxOTgsIDIwMSk7fVxyXG4uY29sb3Itd2F0ZXJ7YmFja2dyb3VuZDogYmx1ZTt9XHJcbi5jb2xvci1wb2lzb257YmFja2dyb3VuZDogcmdiKDE3OCwgMTM1LCAyMDYpO31cclxuXHJcbi8qIHB0ICovXHJcbi5jb2xvci1mb2dve2JhY2tncm91bmQ6IHJlZDt9XHJcbi5jb2xvci1kYXJre2JhY2tncm91bmQ6ICMzMzM7fVxyXG4uY29sb3ItZWzDqXRyaWNve2JhY2tncm91bmQ6IHllbGxvdzt9XHJcbi5jb2xvci1mYWRhe2JhY2tncm91bmQ6IHJnYmEoMjU1LCA4NSwgMjU1LCAwLjU2OCk7fVxyXG4uY29sb3ItbHV0YWRvcntiYWNrZ3JvdW5kOiByZ2JhKDg4LCAzNSwgNDYsIDAuNzc0KTt9XHJcbi5jb2xvci12b2Fkb3J7YmFja2dyb3VuZDogcmdiKDE3OSwgMTc5LCAyMTYpO31cclxuLmNvbG9yLWZhbnRhc21he2JhY2tncm91bmQ6IHJnYig4MCwgODAsIDExMCk7fVxyXG4uY29sb3ItZ3JhbWF7YmFja2dyb3VuZDogcmdiKDksIDExMCwgMzQpO31cclxuLmNvbG9yLXRlcnJhe2JhY2tncm91bmQ6IHJnYmEoMTA0LCA3MywgNzksIDAuNzc0KTt9XHJcbi5jb2xvci1nZWxve2JhY2tncm91bmQ6IHJnYigyMDcsIDIwNywgMjI2KTt9XHJcbi5jb2xvci1ub3JtYWx7YmFja2dyb3VuZDogcmdiKDE0NywgMTQ3LCAxNTEpO31cclxuLmNvbG9yLXBzeWNob3tiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyMTgsIDI0MSk7fVxyXG4uY29sb3ItcGVkcmF7YmFja2dyb3VuZDogcmdiKDgyLCA4MiwgOTQpO31cclxuLmNvbG9yLW1ldGFse2JhY2tncm91bmQ6IHJnYigxOTgsIDE5OCwgMjAxKTt9XHJcbi5jb2xvci3DoWd1YXtiYWNrZ3JvdW5kOiBibHVlO31cclxuLmNvbG9yLXZlbmVub3Nve2JhY2tncm91bmQ6IHJnYigxNzgsIDEzNSwgMjA2KTt9Il19 */"

/***/ }),

/***/ "./src/app/components/pokemon-detail/pokemon-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/pokemon-detail/pokemon-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col title\">\n      <h1>Pokémon Detalhe</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-7 pokemon-detail\">\n      <a routerLink=\"/\">Voltar</a>\n      <div class=\"main\" *ngIf=\"pokemon\">\n        <div class=\"name\">\n          <h2>#1 {{ pokemon.name }}</h2>\n        </div>\n        <div class=\"type\">\n          <h3>Tipo: </h3>\n          <h5>\n            <span class=\"badge badge-secondary color-{{type}}\" *ngFor=\"let type of pokemon.types\">{{ type }}</span>\n          </h5>\n        </div>\n        <div class=\"hability\">\n          <h3>Habilidades: </h3>\n          <p *ngFor=\"let ability of pokemon.abilities\">{{ ability }}</p>\n        </div>\n        <button class=\"btn btn-primary btn-block\" routerLink=\"/pokemon-insert\" [queryParams]=\"{id: pokemonId}\" fragment=\"edit\" >Editar</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pokemon-detail/pokemon-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pokemon-detail/pokemon-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: PokemonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailComponent", function() { return PokemonDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pokemon.service */ "./src/app/services/pokemon.service.ts");




var PokemonDetailComponent = /** @class */ (function () {
    function PokemonDetailComponent(route, pokemonService) {
        this.route = route;
        this.pokemonService = pokemonService;
    }
    PokemonDetailComponent.prototype.ngOnInit = function () {
        this.pokemonId = this.route.snapshot.params.id;
        this.getPokemon();
    };
    PokemonDetailComponent.prototype.getPokemon = function () {
        var _this = this;
        this.pokemonService.getOneById(this.pokemonId)
            .subscribe(function (res) {
            _this.pokemon = res;
        });
    };
    PokemonDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pokemon-detail',
            template: __webpack_require__(/*! ./pokemon-detail.component.html */ "./src/app/components/pokemon-detail/pokemon-detail.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-detail.component.css */ "./src/app/components/pokemon-detail/pokemon-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__["PokemonService"]])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/pokemon-insert/pokemon-insert.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/pokemon-insert/pokemon-insert.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    padding: 0 3%;\r\n}\r\n.title h2{\r\n    margin-top: 20px;\r\n    text-align: center;\r\n}\r\n.form-insert{\r\n    margin: 0 auto;\r\n}\r\n.form-insert a{\r\n    font-size: 1.2em;\r\n}\r\n.row form{\r\n    background: #f9f9f9;\r\n    padding: 3% 4%;\r\n    margin-bottom: 20px;\r\n}\r\n.order-input{\r\n    width: 150px;\r\n}\r\n.col{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.help-block{\r\n    color: #f53d3d;\r\n    font-size: .9em;\r\n}\r\n.red-border-class{\r\n    border-color: #f53d3d;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uLWluc2VydC9wb2tlbW9uLWluc2VydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZW1vbi1pbnNlcnQvcG9rZW1vbi1pbnNlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBwYWRkaW5nOiAwIDMlO1xyXG59XHJcbi50aXRsZSBoMntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0taW5zZXJ0e1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmZvcm0taW5zZXJ0IGF7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcbi5yb3cgZm9ybXtcclxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICBwYWRkaW5nOiAzJSA0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLm9yZGVyLWlucHV0e1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5jb2x7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5oZWxwLWJsb2Nre1xyXG4gICAgY29sb3I6ICNmNTNkM2Q7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbn1cclxuLnJlZC1ib3JkZXItY2xhc3N7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNTNkM2Q7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/pokemon-insert/pokemon-insert.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/pokemon-insert/pokemon-insert.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"edit; then editPokemon else newPokemon\"></div>\n    <ng-template #editPokemon>\n      <div class=\"col title\">\n        <h2>Editar Pokémon</h2>\n      </div>\n    </ng-template>\n    <ng-template #newPokemon>\n      <div class=\"col title\">\n        <h2>Adicionar Pokémon</h2>\n      </div>\n    </ng-template>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8 form-insert\">\n      <a routerLink=\"/\">Voltar</a>\n      <form [formGroup]=\"new_pokemon\" (ngSubmit)=\"save()\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"name\">Nome do Pokémon</label>\n              <input type=\"text\" formControlName=\"name\" [ngClass]=\"{'red-border-class': name.touched && name.errors}\" class=\"form-control\" id=\"name\" aria-describedby=\"name\" placeholder=\"Name\">\n              <div *ngIf=\"name.touched && name.errors\" class=\"help-block\">*O campo nome é obrigatório</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\" style=\"padding-right: 2px;\">\n            <div class=\"form-group\">\n              <label for=\"type1\">Tipo 1</label>\n              <input type=\"text\" formControlName=\"type1\" [ngClass]=\"{'red-border-class': type1.touched && type1.errors}\" class=\"form-control\" id=\"type\" aria-describedby=\"type\" placeholder=\"Tipo\">\n              <div *ngIf=\"type1.touched && type1.errors\" class=\"help-block\">*O campo Tipo 1 é obrigatório</div>\n            </div>\n          </div>\n          <div class=\"col\" style=\"padding-left: 2px;\">\n            <div class=\"form-group\">\n              <label for=\"type\">Tipo 2*</label>\n              <input type=\"text\" formControlName=\"type2\" class=\"form-control\" id=\"type\" aria-describedby=\"type\" placeholder=\"opcional\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"ability\">Abilidade 1</label>\n              <input type=\"text\" formControlName=\"ability1\" [ngClass]=\"{'red-border-class': ability1.touched && ability1.errors}\" class=\"form-control\" id=\"ability\" aria-describedby=\"ability\" placeholder=\"habilidade\">\n              <div *ngIf=\"ability1.touched && ability1.errors\" class=\"help-block\">*O campo Abilidade 1 é obrigatório</div>              \n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"ability\">Abilidade 2*</label>\n              <input type=\"text\" formControlName=\"ability2\" class=\"form-control\" id=\"ability\" aria-describedby=\"ability\" placeholder=\"opcional\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"ability\">Abilidade 3*</label>\n              <input type=\"text\" formControlName=\"ability3\" class=\"form-control\" id=\"ability\" aria-describedby=\"ability\" placeholder=\"opcional\">\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"edit; then btnSaveChanges else btnSave\"></div>\n        <ng-template #btnSaveChanges>\n          <button [disabled]=\"!new_pokemon.valid\" type=\"submit\" class=\"btn btn-primary btn-block\">Salvar Alterações</button>\n        </ng-template>\n        <ng-template #btnSave>\n          <button [disabled]=\"!new_pokemon.valid\" type=\"submit\" class=\"btn btn-primary btn-block\">Adicionar</button>\n        </ng-template>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pokemon-insert/pokemon-insert.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pokemon-insert/pokemon-insert.component.ts ***!
  \***********************************************************************/
/*! exports provided: PokemonInsertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonInsertComponent", function() { return PokemonInsertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PokemonInsertComponent = /** @class */ (function () {
    function PokemonInsertComponent(formBuilder, pokemonService, router, route) {
        this.formBuilder = formBuilder;
        this.pokemonService = pokemonService;
        this.router = router;
        this.route = route;
        this.edit = false;
        this.new_pokemon = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type2: [''],
            ability1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ability2: [''],
            ability3: [''],
        });
        this.name = this.new_pokemon.controls['name'];
        this.type1 = this.new_pokemon.controls['type1'];
        this.type2 = this.new_pokemon.controls['type2'];
        this.ability1 = this.new_pokemon.controls['ability1'];
        this.ability2 = this.new_pokemon.controls['ability2'];
        this.ability3 = this.new_pokemon.controls['ability3'];
    }
    PokemonInsertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.fragment) {
            this.edit = true;
            this.pokemonService.getOneById(this.route.snapshot.queryParams.id)
                .subscribe(function (res) {
                _this.pokemon = res;
                _this.pokemonId = _this.pokemon._id;
                _this.name.setValue(_this.pokemon.name);
                _this.type1.setValue(_this.pokemon.types[0]);
                if (_this.pokemon.types.length > 0) {
                    _this.type2.setValue(_this.pokemon.types[1]);
                }
                _this.ability1.setValue(_this.pokemon.abilities[0]);
                if (_this.pokemon.abilities.length > 0) {
                    _this.ability2.setValue(_this.pokemon.abilities[1]);
                }
                if (_this.pokemon.abilities.length > 1) {
                    _this.ability3.setValue(_this.pokemon.abilities[2]);
                }
            });
        }
    };
    PokemonInsertComponent.prototype.save = function () {
        var _this = this;
        var types = [];
        var abilities = [];
        if (this.type1) {
            types.push(this.type1.value);
        }
        if (this.type2) {
            types.push(this.type2.value);
        }
        if (this.ability1) {
            abilities.push(this.ability1.value);
        }
        if (this.ability2) {
            abilities.push(this.ability2.value);
        }
        if (this.ability3) {
            abilities.push(this.ability3.value);
        }
        this.pokemon = {
            name: this.name.value,
            types: types,
            abilities: abilities,
        };
        if (this.edit == true) {
            this.pokemonService.updatePokemon(this.pokemonId, this.pokemon)
                .subscribe(function (res) {
                _this.router.navigateByUrl('/');
            });
        }
        else {
            this.pokemonService.createNewPokemon(this.pokemon)
                .subscribe(function () {
                _this.router.navigateByUrl('/');
            });
        }
    };
    PokemonInsertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pokemon-insert',
            template: __webpack_require__(/*! ./pokemon-insert.component.html */ "./src/app/components/pokemon-insert/pokemon-insert.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-insert.component.css */ "./src/app/components/pokemon-insert/pokemon-insert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__["PokemonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PokemonInsertComponent);
    return PokemonInsertComponent;
}());



/***/ }),

/***/ "./src/app/components/pokemon-list/pokemon-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pokemon-list/pokemon-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    padding: 0 4%;\r\n}\r\n.search{\r\n    margin-top: 20px;\r\n}\r\n.input-group{\r\n    margin: 0 auto;\r\n}\r\n.link-insert{\r\n    text-align: right;\r\n}\r\n.link-insert i{\r\n    font-size: .9em;\r\n    color: #007bff\r\n}\r\n.fa-trash-alt{\r\n    color: #f53d3d;\r\n}\r\n.fa-trash-alt:hover{\r\n    color: rgb(189, 60, 48);\r\n}\r\n.btn-remove{\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uLWxpc3QvcG9rZW1vbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZW1vbi1saXN0L3Bva2Vtb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIHBhZGRpbmc6IDAgNCU7XHJcbn1cclxuLnNlYXJjaHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmlucHV0LWdyb3Vwe1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmxpbmstaW5zZXJ0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmxpbmstaW5zZXJ0IGl7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICBjb2xvcjogIzAwN2JmZlxyXG59XHJcbi5mYS10cmFzaC1hbHR7XHJcbiAgICBjb2xvcjogI2Y1M2QzZDtcclxufVxyXG4uZmEtdHJhc2gtYWx0OmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigxODksIDYwLCA0OCk7XHJcbn1cclxuLmJ0bi1yZW1vdmV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/pokemon-list/pokemon-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pokemon-list/pokemon-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to Pokedex!\n  </h1>\n  <img src=\"assets/imgs/pokemon.png\" alt=\"logo-pokemon\" width=\"300\">\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 link-insert\">\n        <i class=\"fas fa-plus\"></i>&nbsp;<a routerLink=\"/pokemon-insert\">Inserir Pokémon</a>\n    </div>\n  </div>\n  <div class=\"row search\">\n    <div class=\"input-group mb-3 col-sm-8 col-md-5\">\n      <!-- (input)=\"search(searchInput.value)\" -->\n      <input type=\"text\" class=\"form-control\" #searchInput id=\"search-input\" aria-label=\"search\" placeholder=\"Buscar pokémon\">\n      <div class=\"input-group-append\">\n        <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row list\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Nome</th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let pokemon of pokemons$ | async\">\n          <th scope=\"row\">{{ pokemon.order }}</th>\n          <td>{{ pokemon.name }}</td>\n          <td><a [routerLink]=\"['/pokemon-detail', pokemon._id]\">ver mais</a></td>\n          <td><span class=\"btn-remove\" (click)=\"remove(pokemon._id)\"><i class=\"far fa-trash-alt\"></i></span></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pokemon-list/pokemon-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pokemon-list/pokemon-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: PokemonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function() { return PokemonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var PokemonListComponent = /** @class */ (function () {
    function PokemonListComponent(pokemonService) {
        this.pokemonService = pokemonService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    PokemonListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    PokemonListComponent.prototype.getAll = function () {
        this.pokemons$ = this.pokemonService.getAllPokemon()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    PokemonListComponent.prototype.remove = function (id) {
        var _this = this;
        this.pokemonService.deletePokemon(id)
            .subscribe(function () {
            _this.getAll();
        });
    };
    PokemonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pokemon-list',
            template: __webpack_require__(/*! ./pokemon-list.component.html */ "./src/app/components/pokemon-list/pokemon-list.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-list.component.css */ "./src/app/components/pokemon-list/pokemon-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"]])
    ], PokemonListComponent);
    return PokemonListComponent;
}());



/***/ }),

/***/ "./src/app/services/pokemon.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pokemon.service.ts ***!
  \*********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
        this.urlEncoded = "" + encodeURI(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL);
    }
    PokemonService.prototype.getAllPokemon = function () {
        return this.http.get(this.urlEncoded + "/pokemons", httpOptions);
    };
    PokemonService.prototype.getOneById = function (id) {
        return this.http.get(this.urlEncoded + "/pokemons/" + id, httpOptions);
    };
    PokemonService.prototype.createNewPokemon = function (body) {
        return this.http.post(this.urlEncoded + "/pokemons", body, httpOptions);
    };
    PokemonService.prototype.deletePokemon = function (id) {
        return this.http.delete(this.urlEncoded + "/pokemons/" + id, httpOptions);
    };
    PokemonService.prototype.updatePokemon = function (id, body) {
        return this.http.put(this.urlEncoded + "/pokemons/" + id, body, httpOptions);
    };
    PokemonService.prototype.searchPokemon = function (term) {
        console.log(term);
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        }
        return this.http.get(this.urlEncoded + "/pokemons", httpOptions);
    };
    PokemonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PokemonService);
    return PokemonService;
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
    production: false,
    API_URL: 'http://localhost:3456/api'
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

module.exports = __webpack_require__(/*! C:\Users\7Digital\Desktop\vaga-fullstack\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
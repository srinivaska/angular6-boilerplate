"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var tooltip_1 = require("ngx-bootstrap/tooltip");
var heroes_component_1 = require("./components/heroes.component");
var heroes_routing_module_1 = require("./heroes-routing.module");
var HeroesModule = /** @class */ (function () {
    function HeroesModule() {
    }
    HeroesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                heroes_routing_module_1.HeroRoutingModule,
                forms_1.ReactiveFormsModule,
                tooltip_1.TooltipModule.forRoot()
            ],
            declarations: [
                heroes_component_1.HeroesComponent
            ],
        })
    ], HeroesModule);
    return HeroesModule;
}());
exports.HeroesModule = HeroesModule;
//# sourceMappingURL=heroes.module.js.map
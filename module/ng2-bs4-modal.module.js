"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var autofocus_1 = require('../directives/autofocus');
var modal_footer_1 = require('../components/modal-footer');
var modal_body_1 = require('../components/modal-body');
var modal_header_1 = require('../components/modal-header');
var modal_1 = require('../components/modal');
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                modal_1.ModalComponent,
                modal_header_1.ModalHeaderComponent,
                modal_body_1.ModalBodyComponent,
                modal_footer_1.ModalFooterComponent,
                autofocus_1.AutofocusDirective
            ],
            exports: [
                modal_1.ModalComponent,
                modal_header_1.ModalHeaderComponent,
                modal_body_1.ModalBodyComponent,
                modal_footer_1.ModalFooterComponent,
                autofocus_1.AutofocusDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJzNC1tb2RhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbmcyLWJzNC1tb2RhbC9tb2R1bGUvbmcyLWJzNC1tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2QywwQkFBaUMseUJBQXlCLENBQUMsQ0FBQTtBQUMzRCw2QkFBbUMsNEJBQTRCLENBQUMsQ0FBQTtBQUNoRSwyQkFBaUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM1RCw2QkFBbUMsNEJBQTRCLENBQUMsQ0FBQTtBQUNoRSxzQkFBNkIscUJBQXFCLENBQUMsQ0FBQTtBQXFCbkQ7SUFBQTtJQUNBLENBQUM7SUFwQkQ7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixzQkFBYztnQkFDZCxtQ0FBb0I7Z0JBQ3BCLCtCQUFrQjtnQkFDbEIsbUNBQW9CO2dCQUNwQiw4QkFBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsc0JBQWM7Z0JBQ2QsbUNBQW9CO2dCQUNwQiwrQkFBa0I7Z0JBQ2xCLG1DQUFvQjtnQkFDcEIsOEJBQWtCO2FBQ3JCO1NBQ0osQ0FBQzs7bUJBQUE7SUFFRixrQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksbUJBQVcsY0FDdkIsQ0FBQSJ9
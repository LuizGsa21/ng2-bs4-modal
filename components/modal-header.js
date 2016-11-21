var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { ModalComponent } from './modal';
export var ModalHeaderComponent = (function () {
    function ModalHeaderComponent(modal) {
        this.modal = modal;
        this.showClose = false;
        this.headerClasses = {};
    }
    __decorate([
        Input('show-close'), 
        __metadata('design:type', Boolean)
    ], ModalHeaderComponent.prototype, "showClose", void 0);
    __decorate([
        Input('header-classes'), 
        __metadata('design:type', Object)
    ], ModalHeaderComponent.prototype, "headerClasses", void 0);
    ModalHeaderComponent = __decorate([
        Component({
            selector: 'modal-header',
            template: "\n        <div class=\"modal-header\" [ngClass]=\"headerClasses\">\n            <button *ngIf=\"showClose\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <ng-content></ng-content>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [ModalComponent])
    ], ModalHeaderComponent);
    return ModalHeaderComponent;
}());
//# sourceMappingURL=modal-header.js.map
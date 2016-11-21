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
var core_1 = require('@angular/core');
var modal_1 = require('./modal');
var ModalHeaderComponent = (function () {
    function ModalHeaderComponent(modal) {
        this.modal = modal;
        this.showClose = false;
        this.headerClasses = {};
    }
    __decorate([
        core_1.Input('show-close'), 
        __metadata('design:type', Boolean)
    ], ModalHeaderComponent.prototype, "showClose", void 0);
    __decorate([
        core_1.Input('header-classes'), 
        __metadata('design:type', Object)
    ], ModalHeaderComponent.prototype, "headerClasses", void 0);
    ModalHeaderComponent = __decorate([
        core_1.Component({
            selector: 'modal-header',
            template: "\n        <div class=\"modal-header\" [ngClass]=\"headerClasses\">\n            <button *ngIf=\"showClose\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <ng-content></ng-content>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [modal_1.ModalComponent])
    ], ModalHeaderComponent);
    return ModalHeaderComponent;
}());
exports.ModalHeaderComponent = ModalHeaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL25nMi1iczQtbW9kYWwvY29tcG9uZW50cy9tb2RhbC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxzQkFBK0IsU0FBUyxDQUFDLENBQUE7QUFhekM7SUFHSSw4QkFBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFGcEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUN2QixrQkFBYSxHQUE0QixFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUY5QztRQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7OzJEQUFBO0lBQ3BCO1FBQUMsWUFBSyxDQUFDLGdCQUFnQixDQUFDOzsrREFBQTtJQWI1QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUscVdBT1Q7U0FDSixDQUFDOzs0QkFBQTtJQUtGLDJCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSw0QkFBb0IsdUJBSWhDLENBQUEifQ==
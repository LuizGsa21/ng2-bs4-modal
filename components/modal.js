var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ElementRef, HostBinding } from '@angular/core';
import { ModalInstance, ModalResult } from './modal-instance';
export var ModalComponent = (function () {
    function ModalComponent(element) {
        var _this = this;
        this.element = element;
        this.overrideSize = null;
        this.visible = false;
        this.animation = true;
        this.backdrop = true;
        this.keyboard = true;
        this.onClose = new EventEmitter(false);
        this.onDismiss = new EventEmitter(false);
        this.onOpen = new EventEmitter(false);
        this.instance = new ModalInstance(this.element);
        this.instance.hidden.subscribe(function (result) {
            _this.visible = _this.instance.visible;
            if (result === ModalResult.Dismiss)
                _this.onDismiss.emit(undefined);
        });
        this.instance.shown.subscribe(function () {
            _this.onOpen.emit(undefined);
        });
    }
    Object.defineProperty(ModalComponent.prototype, "fadeClass", {
        get: function () { return this.animation; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "dataKeyboardAttr", {
        get: function () { return this.keyboard; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "dataBackdropAttr", {
        get: function () { return this.backdrop; },
        enumerable: true,
        configurable: true
    });
    ModalComponent.prototype.ngOnDestroy = function () {
        return this.instance && this.instance.destroy();
    };
    ModalComponent.prototype.open = function (size) {
        var _this = this;
        if (ModalSize.validSize(size))
            this.overrideSize = size;
        return this.instance.open().then(function () {
            _this.visible = _this.instance.visible;
        });
    };
    ModalComponent.prototype.close = function () {
        var _this = this;
        return this.instance.close().then(function () {
            _this.onClose.emit(undefined);
        });
    };
    ModalComponent.prototype.dismiss = function () {
        return this.instance.dismiss();
    };
    ModalComponent.prototype.isSmall = function () {
        return this.overrideSize !== ModalSize.Large
            && this.size === ModalSize.Small
            || this.overrideSize === ModalSize.Small;
    };
    ModalComponent.prototype.isLarge = function () {
        return this.overrideSize !== ModalSize.Small
            && this.size === ModalSize.Large
            || this.overrideSize === ModalSize.Large;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], ModalComponent.prototype, "animation", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], ModalComponent.prototype, "backdrop", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], ModalComponent.prototype, "keyboard", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ModalComponent.prototype, "size", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], ModalComponent.prototype, "onClose", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], ModalComponent.prototype, "onDismiss", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], ModalComponent.prototype, "onOpen", void 0);
    __decorate([
        HostBinding('class.fade'), 
        __metadata('design:type', Boolean)
    ], ModalComponent.prototype, "fadeClass", null);
    __decorate([
        HostBinding('attr.data-keyboard'), 
        __metadata('design:type', Boolean)
    ], ModalComponent.prototype, "dataKeyboardAttr", null);
    __decorate([
        HostBinding('attr.data-backdrop'), 
        __metadata('design:type', Object)
    ], ModalComponent.prototype, "dataBackdropAttr", null);
    ModalComponent = __decorate([
        Component({
            selector: 'modal',
            host: {
                'class': 'modal',
                'role': 'dialog',
                'tabindex': '-1'
            },
            template: "\n        <div class=\"modal-dialog\" [ngClass]=\"{ 'modal-sm': isSmall(), 'modal-lg': isLarge() }\">\n            <div class=\"modal-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], ModalComponent);
    return ModalComponent;
}());
export var ModalSize = (function () {
    function ModalSize() {
    }
    ModalSize.validSize = function (size) {
        return size && (size === ModalSize.Small || size === ModalSize.Large);
    };
    ModalSize.Small = 'sm';
    ModalSize.Large = 'lg';
    return ModalSize;
}());
//# sourceMappingURL=modal.js.map
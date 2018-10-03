(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/aeaeke7j.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/aeaeke7j.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInput", function() { return Input; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-e7816c0b.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e7816c0b.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */



var Input = /** @class */ (function () {
    function Input() {
        this.inputId = "ion-input-" + inputIds++;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        this.autocapitalize = 'none';
        this.autocomplete = 'off';
        this.autocorrect = 'off';
        this.autofocus = false;
        this.clearInput = false;
        this.debounce = 0;
        this.disabled = false;
        this.name = this.inputId;
        this.readonly = false;
        this.required = false;
        this.spellcheck = false;
        this.type = 'text';
        this.value = '';
    }
    Input.prototype.debounceChanged = function () {
        this.ionChange = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.ionChange, this.debounce);
    };
    Input.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    Input.prototype.valueChanged = function () {
        var inputEl = this.nativeInput;
        var value = this.getValue();
        if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
        }
        this.emitStyle();
        this.ionChange.emit({ value: value });
    };
    Input.prototype.componentWillLoad = function () {
        if (this.clearOnEdit === undefined && this.type === 'password') {
            this.clearOnEdit = true;
        }
    };
    Input.prototype.componentDidLoad = function () {
        this.ionStyle = Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.ionStyle);
        this.debounceChanged();
        this.emitStyle();
        this.ionInputDidLoad.emit();
    };
    Input.prototype.componentDidUnload = function () {
        this.nativeInput = undefined;
        this.ionInputDidUnload.emit();
    };
    Input.prototype.focus = function () {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    };
    Input.prototype.getValue = function () {
        return this.value || '';
    };
    Input.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'input': true,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus,
            'interactive-disabled': this.disabled,
        });
    };
    Input.prototype.onInput = function (ev) {
        var input = ev.target;
        if (input) {
            this.value = input.value || '';
        }
        this.ionInput.emit(ev);
    };
    Input.prototype.onBlur = function () {
        this.hasFocus = false;
        this.focusChanged();
        this.emitStyle();
        this.ionBlur.emit();
    };
    Input.prototype.onFocus = function () {
        this.hasFocus = true;
        this.focusChanged();
        this.emitStyle();
        this.ionFocus.emit();
    };
    Input.prototype.focusChanged = function () {
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
    };
    Input.prototype.onKeydown = function () {
        if (this.clearOnEdit) {
            if (this.didBlurAfterEdit && this.hasValue()) {
                this.clearTextInput();
            }
            this.didBlurAfterEdit = false;
        }
    };
    Input.prototype.clearTextInput = function () {
        this.value = '';
    };
    Input.prototype.hasValue = function () {
        return this.getValue().length > 0;
    };
    Input.prototype.hostData = function () {
        return {
            class: Object.assign({}, Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.color), { 'in-item': Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_2__["j"])('ion-item', this.el), 'has-value': this.hasValue(), 'has-focus': this.hasFocus })
        };
    };
    Input.prototype.render = function () {
        var _this = this;
        Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.el, this.name, this.getValue(), this.disabled);
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { ref: function (input) { return _this.nativeInput = input; }, "aria-disabled": this.disabled ? 'true' : null, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, class: "native-input", disabled: this.disabled, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder, results: this.results, readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: this.getValue(), onInput: this.onInput.bind(this), onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), onKeyDown: this.onKeydown.bind(this) }),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null),
            (this.clearInput && !this.readonly && !this.disabled) && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput.bind(this), onMouseDown: this.clearTextInput.bind(this) })
        ];
    };
    Object.defineProperty(Input, "is", {
        get: function () { return "ion-input"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input, "properties", {
        get: function () {
            return {
                "accept": {
                    "type": String,
                    "attr": "accept"
                },
                "autocapitalize": {
                    "type": String,
                    "attr": "autocapitalize"
                },
                "autocomplete": {
                    "type": String,
                    "attr": "autocomplete"
                },
                "autocorrect": {
                    "type": String,
                    "attr": "autocorrect"
                },
                "autofocus": {
                    "type": Boolean,
                    "attr": "autofocus"
                },
                "clearInput": {
                    "type": Boolean,
                    "attr": "clear-input"
                },
                "clearOnEdit": {
                    "type": Boolean,
                    "attr": "clear-on-edit",
                    "mutable": true
                },
                "color": {
                    "type": String,
                    "attr": "color"
                },
                "debounce": {
                    "type": Number,
                    "attr": "debounce",
                    "watchCallbacks": ["debounceChanged"]
                },
                "disabled": {
                    "type": Boolean,
                    "attr": "disabled",
                    "watchCallbacks": ["disabledChanged"]
                },
                "el": {
                    "elementRef": true
                },
                "focus": {
                    "method": true
                },
                "hasFocus": {
                    "state": true
                },
                "inputmode": {
                    "type": String,
                    "attr": "inputmode"
                },
                "max": {
                    "type": String,
                    "attr": "max"
                },
                "maxlength": {
                    "type": Number,
                    "attr": "maxlength"
                },
                "min": {
                    "type": String,
                    "attr": "min"
                },
                "minlength": {
                    "type": Number,
                    "attr": "minlength"
                },
                "mode": {
                    "type": String,
                    "attr": "mode"
                },
                "multiple": {
                    "type": Boolean,
                    "attr": "multiple"
                },
                "name": {
                    "type": String,
                    "attr": "name"
                },
                "pattern": {
                    "type": String,
                    "attr": "pattern"
                },
                "placeholder": {
                    "type": String,
                    "attr": "placeholder"
                },
                "readonly": {
                    "type": Boolean,
                    "attr": "readonly"
                },
                "required": {
                    "type": Boolean,
                    "attr": "required"
                },
                "results": {
                    "type": Number,
                    "attr": "results"
                },
                "size": {
                    "type": Number,
                    "attr": "size"
                },
                "spellcheck": {
                    "type": Boolean,
                    "attr": "spellcheck"
                },
                "step": {
                    "type": String,
                    "attr": "step"
                },
                "type": {
                    "type": String,
                    "attr": "type"
                },
                "value": {
                    "type": String,
                    "attr": "value",
                    "mutable": true,
                    "watchCallbacks": ["valueChanged"]
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input, "events", {
        get: function () {
            return [{
                    "name": "ionInput",
                    "method": "ionInput",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionChange",
                    "method": "ionChange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionStyle",
                    "method": "ionStyle",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionBlur",
                    "method": "ionBlur",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionFocus",
                    "method": "ionFocus",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionInputDidLoad",
                    "method": "ionInputDidLoad",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }, {
                    "name": "ionInputDidUnload",
                    "method": "ionInputDidUnload",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input, "style", {
        get: function () { return ".sc-ion-input-ios-h{--placeholder-color:currentColor;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;font-family:var(--ion-font-family,inherit);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;border:0;outline:0;background:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input[disabled].sc-ion-input-ios{opacity:.4}.input-cover.sc-ion-input-ios{left:0;top:0;position:absolute;width:100%;height:100%}[disabled].sc-ion-input-ios-h   .input-cover.sc-ion-input-ios{pointer-events:none}.input-clear-icon.sc-ion-input-ios{margin:0;padding:0;background-position:center;border:0;outline:0;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-text-color-step-400,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");width:30px;height:30px;background-size:18px}.has-focus.has-value.sc-ion-input-ios-h   .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h   .input-cover.sc-ion-input-ios{display:none}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h   a.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h   button.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h   input.sc-ion-input-ios{pointer-events:auto}"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input, "styleMode", {
        get: function () { return "ios"; },
        enumerable: true,
        configurable: true
    });
    return Input;
}());
var inputIds = 0;



/***/ })

}]);
//# sourceMappingURL=38.js.map
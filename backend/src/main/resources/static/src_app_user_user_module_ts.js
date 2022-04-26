(self["webpackChunklemon_mart"] = self["webpackChunklemon_mart"] || []).push([["src_app_user_user_module_ts"],{

/***/ 1394:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkStep": () => (/* binding */ CdkStep),
/* harmony export */   "CdkStepHeader": () => (/* binding */ CdkStepHeader),
/* harmony export */   "CdkStepLabel": () => (/* binding */ CdkStepLabel),
/* harmony export */   "CdkStepper": () => (/* binding */ CdkStepper),
/* harmony export */   "CdkStepperModule": () => (/* binding */ CdkStepperModule),
/* harmony export */   "CdkStepperNext": () => (/* binding */ CdkStepperNext),
/* harmony export */   "CdkStepperPrevious": () => (/* binding */ CdkStepperPrevious),
/* harmony export */   "STEPPER_GLOBAL_OPTIONS": () => (/* binding */ STEPPER_GLOBAL_OPTIONS),
/* harmony export */   "STEP_STATE": () => (/* binding */ STEP_STATE),
/* harmony export */   "StepperSelectionEvent": () => (/* binding */ StepperSelectionEvent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 946);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6461);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ 521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



function CdkStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
class CdkStepHeader {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    /** Focuses the step header. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
}
CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) { return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
CdkStepHeader.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepHeader, selectors: [["", "cdkStepHeader", ""]], hostAttrs: ["role", "tab"] });
CdkStepHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[cdkStepHeader]',
                host: {
                    'role': 'tab'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkStepLabel {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) { return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
CdkStepLabel.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepLabel, selectors: [["", "cdkStepLabel", ""]] });
CdkStepLabel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[cdkStepLabel]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID for each stepper component. */
let nextId = 0;
/** Change event emitted on selection changes. */
class StepperSelectionEvent {
}
/** Enum to represent the different states of the steps. */
const STEP_STATE = {
    NUMBER: 'number',
    EDIT: 'edit',
    DONE: 'done',
    ERROR: 'error'
};
/** InjectionToken that can be used to specify the global stepper options. */
const STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('STEPPER_GLOBAL_OPTIONS');
class CdkStep {
    constructor(_stepper, stepperOptions) {
        this._stepper = _stepper;
        /** Whether user has attempted to move away from the step. */
        this.interacted = false;
        /** Emits when the user has attempted to move away from the step. */
        this.interactedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._editable = true;
        this._optional = false;
        this._completedOverride = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
    }
    /** Whether the user can return to this step once it has been marked as completed. */
    get editable() {
        return this._editable;
    }
    set editable(value) {
        this._editable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    /** Whether the completion of step is optional. */
    get optional() {
        return this._optional;
    }
    set optional(value) {
        this._optional = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    /** Whether step is marked as completed. */
    get completed() {
        return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
    }
    set completed(value) {
        this._completedOverride = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    _getDefaultCompleted() {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    }
    /** Whether step has an error. */
    get hasError() {
        return this._customError == null ? this._getDefaultError() : this._customError;
    }
    set hasError(value) {
        this._customError = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    _getDefaultError() {
        return this.stepControl && this.stepControl.invalid && this.interacted;
    }
    /** Selects this step component. */
    select() {
        this._stepper.selected = this;
    }
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    reset() {
        this.interacted = false;
        if (this._completedOverride != null) {
            this._completedOverride = false;
        }
        if (this._customError != null) {
            this._customError = false;
        }
        if (this.stepControl) {
            this.stepControl.reset();
        }
    }
    ngOnChanges() {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
    }
    _markAsInteracted() {
        if (!this.interacted) {
            this.interacted = true;
            this.interactedStream.emit(this);
        }
    }
    /** Determines whether the error state can be shown. */
    _showError() {
        var _a;
        // We want to show the error state either if the user opted into/out of it using the
        // global options, or if they've explicitly set it through the `hasError` input.
        return (_a = this._stepperOptions.showError) !== null && _a !== void 0 ? _a : this._customError != null;
    }
}
CdkStep.ɵfac = function CdkStep_Factory(t) { return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8)); };
CdkStep.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CdkStep, selectors: [["cdk-step"]], contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
    } }, viewQuery: function CdkStep_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { editable: "editable", optional: "optional", completed: "completed", hasError: "hasError", stepControl: "stepControl", label: "label", errorMessage: "errorMessage", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], state: "state" }, outputs: { interactedStream: "interacted" }, exportAs: ["cdkStep"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CdkStep_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
CdkStep.ctorParameters = () => [
    { type: CdkStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper),] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [STEPPER_GLOBAL_OPTIONS,] }] }
];
CdkStep.propDecorators = {
    stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [CdkStepLabel,] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true },] }],
    stepControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    interactedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['interacted',] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    completed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hasError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'cdk-step',
                exportAs: 'cdkStep',
                template: '<ng-template><ng-content></ng-content></ng-template>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: CdkStepper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper)]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [STEPPER_GLOBAL_OPTIONS]
            }] }]; }, { interactedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['interacted']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], completed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hasError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [CdkStepLabel]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true }]
        }], stepControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
class CdkStepper {
    constructor(_dir, _changeDetectorRef, _elementRef, 
    /**
     * @deprecated No longer in use, to be removed.
     * @breaking-change 13.0.0
     */
    _document) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /** Emits when the component is destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Steps that belong to the current stepper, excluding ones from nested steppers. */
        this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
        this._linear = false;
        this._selectedIndex = 0;
        /** Event emitted when the selected step has changed. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * @deprecated To be turned into a private property. Use `orientation` instead.
         * @breaking-change 13.0.0
         */
        this._orientation = 'horizontal';
        this._groupId = nextId++;
    }
    /** Whether the validity of previous steps should be checked or not. */
    get linear() {
        return this._linear;
    }
    set linear(value) {
        this._linear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    /** The index of the selected step. */
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(index) {
        var _a;
        const newIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(index);
        if (this.steps && this._steps) {
            // Ensure that the index can't be out of bounds.
            if (!this._isValidIndex(index) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
            }
            (_a = this.selected) === null || _a === void 0 ? void 0 : _a._markAsInteracted();
            if (this._selectedIndex !== newIndex && !this._anyControlsInvalidOrPending(newIndex) &&
                (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                this._updateSelectedItemIndex(index);
            }
        }
        else {
            this._selectedIndex = newIndex;
        }
    }
    /** The step that is selected. */
    get selected() {
        return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
    }
    set selected(step) {
        this.selectedIndex = (step && this.steps) ? this.steps.toArray().indexOf(step) : -1;
    }
    /** Orientation of the stepper. */
    get orientation() { return this._orientation; }
    set orientation(value) {
        // This is a protected method so that `MatSteppter` can hook into it.
        this._orientation = value;
        if (this._keyManager) {
            this._keyManager.withVerticalOrientation(value === 'vertical');
        }
    }
    ngAfterContentInit() {
        this._steps.changes
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(this._steps), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed))
            .subscribe((steps) => {
            this.steps.reset(steps.filter(step => step._stepper === this));
            this.steps.notifyOnChanges();
        });
    }
    ngAfterViewInit() {
        // Note that while the step headers are content children by default, any components that
        // extend this one might have them as view children. We initialize the keyboard handling in
        // AfterViewInit so we're guaranteed for both view and content children to be defined.
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusKeyManager(this._stepHeader)
            .withWrap()
            .withHomeAndEnd()
            .withVerticalOrientation(this._orientation === 'vertical');
        (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(this._layoutDirection()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed))
            .subscribe(direction => this._keyManager.withHorizontalOrientation(direction));
        this._keyManager.updateActiveItem(this._selectedIndex);
        // No need to `takeUntil` here, because we're the ones destroying `steps`.
        this.steps.changes.subscribe(() => {
            if (!this.selected) {
                this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
            }
        });
        // The logic which asserts that the selected index is within bounds doesn't run before the
        // steps are initialized, because we don't how many steps there are yet so we may have an
        // invalid index on init. If that's the case, auto-correct to the default so we don't throw.
        if (!this._isValidIndex(this._selectedIndex)) {
            this._selectedIndex = 0;
        }
    }
    ngOnDestroy() {
        this.steps.destroy();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Selects and focuses the next step in list. */
    next() {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
    }
    /** Selects and focuses the previous step in list. */
    previous() {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    }
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    reset() {
        this._updateSelectedItemIndex(0);
        this.steps.forEach(step => step.reset());
        this._stateChanged();
    }
    /** Returns a unique id for each step label element. */
    _getStepLabelId(i) {
        return `cdk-step-label-${this._groupId}-${i}`;
    }
    /** Returns unique id for each step content element. */
    _getStepContentId(i) {
        return `cdk-step-content-${this._groupId}-${i}`;
    }
    /** Marks the component to be change detected. */
    _stateChanged() {
        this._changeDetectorRef.markForCheck();
    }
    /** Returns position state of the step with the given index. */
    _getAnimationDirection(index) {
        const position = index - this._selectedIndex;
        if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        }
        else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }
        return 'current';
    }
    /** Returns the type of icon to be displayed. */
    _getIndicatorType(index, state = STEP_STATE.NUMBER) {
        const step = this.steps.toArray()[index];
        const isCurrentStep = this._isCurrentStep(index);
        return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) :
            this._getGuidelineLogic(step, isCurrentStep, state);
    }
    _getDefaultIndicatorLogic(step, isCurrentStep) {
        if (step._showError() && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
        }
        else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        }
    }
    _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
        if (step._showError() && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
        }
        else if (step.completed && isCurrentStep) {
            return state;
        }
        else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
        }
        else {
            return state;
        }
    }
    _isCurrentStep(index) {
        return this._selectedIndex === index;
    }
    /** Returns the index of the currently-focused step header. */
    _getFocusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    }
    _updateSelectedItemIndex(newIndex) {
        const stepsArray = this.steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
        });
        // If focus is inside the stepper, move it to the next header, otherwise it may become
        // lost when the active step content is hidden. We can't be more granular with the check
        // (e.g. checking whether focus is inside the active step), because we don't have a
        // reference to the elements that are rendering out the content.
        this._containsFocus() ? this._keyManager.setActiveItem(newIndex) :
            this._keyManager.updateActiveItem(newIndex);
        this._selectedIndex = newIndex;
        this._stateChanged();
    }
    _onKeydown(event) {
        const hasModifier = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event);
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        if (manager.activeItemIndex != null && !hasModifier &&
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER)) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
        }
        else {
            manager.onKeydown(event);
        }
    }
    _anyControlsInvalidOrPending(index) {
        if (this._linear && index >= 0) {
            return this.steps.toArray().slice(0, index).some(step => {
                const control = step.stepControl;
                const isIncomplete = control ? (control.invalid || control.pending || !step.interacted) : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride;
            });
        }
        return false;
    }
    _layoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Checks whether the stepper contains the focused element. */
    _containsFocus() {
        const stepperElement = this._elementRef.nativeElement;
        const focusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__._getFocusedElementPierceShadowDom)();
        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    }
    /** Checks whether the passed-in index is a valid step index. */
    _isValidIndex(index) {
        return index > -1 && (!this.steps || index < this.steps.length);
    }
}
CdkStepper.ɵfac = function CdkStepper_Factory(t) { return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT)); };
CdkStepper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepper, selectors: [["", "cdkStepper", ""]], contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
    } }, inputs: { linear: "linear", selectedIndex: "selectedIndex", selected: "selected", orientation: "orientation" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["cdkStepper"] });
CdkStepper.ctorParameters = () => [
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT,] }] }
];
CdkStepper.propDecorators = {
    _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [CdkStep, { descendants: true },] }],
    _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [CdkStepHeader, { descendants: true },] }],
    linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[cdkStepper]',
                exportAs: 'cdkStepper'
            }]
    }], function () { return [{ type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
            }] }]; }, { selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], linear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [CdkStep, { descendants: true }]
        }], _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [CdkStepHeader, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that moves to the next step in a stepper workflow. */
class CdkStepperNext {
    constructor(_stepper) {
        this._stepper = _stepper;
        /** Type of the next button. Defaults to "submit" if not specified. */
        this.type = 'submit';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick() {
        this._stepper.next();
    }
}
CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) { return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkStepper)); };
CdkStepperNext.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepperNext, selectors: [["button", "cdkStepperNext", ""]], hostVars: 1, hostBindings: function CdkStepperNext_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" } });
CdkStepperNext.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperNext.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'button[cdkStepperNext]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();
/** Button that moves to the previous step in a stepper workflow. */
class CdkStepperPrevious {
    constructor(_stepper) {
        this._stepper = _stepper;
        /** Type of the previous button. Defaults to "button" if not specified. */
        this.type = 'button';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick() {
        this._stepper.previous();
    }
}
CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) { return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkStepper)); };
CdkStepperPrevious.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepperPrevious, selectors: [["button", "cdkStepperPrevious", ""]], hostVars: 1, hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" } });
CdkStepperPrevious.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperPrevious.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'button[cdkStepperPrevious]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkStepperModule {
}
CdkStepperModule.ɵfac = function CdkStepperModule_Factory(t) { return new (t || CdkStepperModule)(); };
CdkStepperModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CdkStepperModule });
CdkStepperModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule],
                exports: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ],
                declarations: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkStepperModule, { declarations: function () { return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule]; }, exports: function () { return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=stepper.js.map

/***/ }),

/***/ 1554:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS": () => (/* binding */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MAT_AUTOCOMPLETE_VALUE_ACCESSOR": () => (/* binding */ MAT_AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   "MatAutocomplete": () => (/* binding */ MatAutocomplete),
/* harmony export */   "MatAutocompleteModule": () => (/* binding */ MatAutocompleteModule),
/* harmony export */   "MatAutocompleteOrigin": () => (/* binding */ MatAutocompleteOrigin),
/* harmony export */   "MatAutocompleteSelectedEvent": () => (/* binding */ MatAutocompleteSelectedEvent),
/* harmony export */   "MatAutocompleteTrigger": () => (/* binding */ MatAutocompleteTrigger),
/* harmony export */   "_MatAutocompleteBase": () => (/* binding */ _MatAutocompleteBase),
/* harmony export */   "_MatAutocompleteOriginBase": () => (/* binding */ _MatAutocompleteOriginBase),
/* harmony export */   "_MatAutocompleteTriggerBase": () => (/* binding */ _MatAutocompleteTriggerBase),
/* harmony export */   "getMatAutocompleteMissingPanelError": () => (/* binding */ getMatAutocompleteMissingPanelError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 2759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ 1386);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/bidi */ 946);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6461);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 5792);
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */








const _c0 = ["panel"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0._getPanelAriaLabelledby(formFieldId_r1));
} }
const _c1 = ["*"];
let _uniqueAutocompleteIdCounter = 0;
/** Event object that is emitted when an autocomplete option is selected. */
class MatAutocompleteSelectedEvent {
    constructor(
    /** Reference to the autocomplete panel that emitted the event. */
    source, 
    /** Option that was selected. */
    option) {
        this.source = source;
        this.option = option;
    }
}
// Boilerplate for applying mixins to MatAutocomplete.
/** @docs-private */
const _MatAutocompleteMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(class {
});
/** Injection token to be used to override the default options for `mat-autocomplete`. */
const MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-default-options', {
    providedIn: 'root',
    factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,
});
/** @docs-private */
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
    return { autoActiveFirstOption: false };
}
/** Base class with all of the `MatAutocomplete` functionality. */
class _MatAutocompleteBase extends _MatAutocompleteMixinBase {
    constructor(_changeDetectorRef, _elementRef, defaults, platform) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
        /** Whether the autocomplete panel should be visible, depending on option length. */
        this.showPanel = false;
        this._isOpen = false;
        /** Function that maps an option's control value to its display value in the trigger. */
        this.displayWith = null;
        /** Event that is emitted whenever an option from the list is selected. */
        this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event that is emitted when the autocomplete panel is opened. */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Event that is emitted when the autocomplete panel is closed. */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits whenever an option is activated using the keyboard. */
        this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._classList = {};
        /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
        this.id = `mat-autocomplete-${_uniqueAutocompleteIdCounter++}`;
        // TODO(crisbeto): the problem that the `inertGroups` option resolves is only present on
        // Safari using VoiceOver. We should occasionally check back to see whether the bug
        // wasn't resolved in VoiceOver, and if it has, we can remove this and the `inertGroups`
        // option altogether.
        this.inertGroups = (platform === null || platform === void 0 ? void 0 : platform.SAFARI) || false;
        this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
    }
    /** Whether the autocomplete panel is open. */
    get isOpen() { return this._isOpen && this.showPanel; }
    /**
     * Whether the first option should be highlighted when the autocomplete panel is opened.
     * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
     */
    get autoActiveFirstOption() { return this._autoActiveFirstOption; }
    set autoActiveFirstOption(value) {
        this._autoActiveFirstOption = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /**
     * Takes classes set on the host mat-autocomplete element and applies them to the panel
     * inside the overlay container to allow for easy styling.
     */
    set classList(value) {
        if (value && value.length) {
            this._classList = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceStringArray)(value).reduce((classList, className) => {
                classList[className] = true;
                return classList;
            }, {});
        }
        else {
            this._classList = {};
        }
        this._setVisibilityClasses(this._classList);
        this._elementRef.nativeElement.className = '';
    }
    ngAfterContentInit() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.ActiveDescendantKeyManager(this.options).withWrap();
        this._activeOptionChanges = this._keyManager.change.subscribe(index => {
            this.optionActivated.emit({ source: this, option: this.options.toArray()[index] || null });
        });
        // Set the initial visibility state.
        this._setVisibility();
    }
    ngOnDestroy() {
        this._activeOptionChanges.unsubscribe();
    }
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     */
    _setScrollTop(scrollTop) {
        if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
        }
    }
    /** Returns the panel's scrollTop. */
    _getScrollTop() {
        return this.panel ? this.panel.nativeElement.scrollTop : 0;
    }
    /** Panel should hide itself when the option list is empty. */
    _setVisibility() {
        this.showPanel = !!this.options.length;
        this._setVisibilityClasses(this._classList);
        this._changeDetectorRef.markForCheck();
    }
    /** Emits the `select` event. */
    _emitSelectEvent(option) {
        const event = new MatAutocompleteSelectedEvent(this, option);
        this.optionSelected.emit(event);
    }
    /** Gets the aria-labelledby for the autocomplete panel. */
    _getPanelAriaLabelledby(labelId) {
        if (this.ariaLabel) {
            return null;
        }
        const labelExpression = labelId ? labelId + ' ' : '';
        return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
    }
    /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */
    _setVisibilityClasses(classList) {
        classList[this._visibleClass] = this.showPanel;
        classList[this._hiddenClass] = !this.showPanel;
    }
}
_MatAutocompleteBase.ɵfac = function _MatAutocompleteBase_Factory(t) { return new (t || _MatAutocompleteBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform)); };
_MatAutocompleteBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatAutocompleteBase, viewQuery: function _MatAutocompleteBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
    } }, inputs: { displayWith: "displayWith", autoActiveFirstOption: "autoActiveFirstOption", classList: ["class", "classList"], ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], panelWidth: "panelWidth" }, outputs: { optionSelected: "optionSelected", opened: "opened", closed: "closed", optionActivated: "optionActivated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatAutocompleteBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
_MatAutocompleteBase.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true },] }],
    panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['panel',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    displayWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    autoActiveFirstOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    panelWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    optionSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    optionActivated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['class',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform }]; }, { displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], optionSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], optionActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], autoActiveFirstOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['class']
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true }]
        }], panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['panel']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], panelWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
class MatAutocomplete extends _MatAutocompleteBase {
    constructor() {
        super(...arguments);
        this._visibleClass = 'mat-autocomplete-visible';
        this._hiddenClass = 'mat-autocomplete-hidden';
    }
}
MatAutocomplete.ɵfac = /*@__PURE__*/ function () { let ɵMatAutocomplete_BaseFactory; return function MatAutocomplete_Factory(t) { return (ɵMatAutocomplete_BaseFactory || (ɵMatAutocomplete_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocomplete)))(t || MatAutocomplete); }; }();
MatAutocomplete.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatAutocomplete, selectors: [["mat-autocomplete"]], contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
    } }, hostAttrs: [1, "mat-autocomplete"], inputs: { disableRipple: "disableRipple" }, exportAs: ["matAutocomplete"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 1, vars: 0, consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]], template: function MatAutocomplete_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 4, "ng-template");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"], encapsulation: 2, changeDetection: 0 });
MatAutocomplete.propDecorators = {
    optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, { descendants: true },] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocomplete, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-autocomplete',
                template: "<ng-template let-formFieldId=\"id\">\n  <div class=\"mat-autocomplete-panel\"\n       role=\"listbox\"\n       [id]=\"id\"\n       [attr.aria-label]=\"ariaLabel || null\"\n       [attr.aria-labelledby]=\"_getPanelAriaLabelledby(formFieldId)\"\n       [ngClass]=\"_classList\"\n       #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                exportAs: 'matAutocomplete',
                inputs: ['disableRipple'],
                host: {
                    'class': 'mat-autocomplete'
                },
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }
                ],
                styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"]
            }]
    }], null, { optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, { descendants: true }]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Base class containing all of the functionality for `MatAutocompleteOrigin`. */
class _MatAutocompleteOriginBase {
    constructor(
    /** Reference to the element on which the directive is applied. */
    elementRef) {
        this.elementRef = elementRef;
    }
}
_MatAutocompleteOriginBase.ɵfac = function _MatAutocompleteOriginBase_Factory(t) { return new (t || _MatAutocompleteOriginBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
_MatAutocompleteOriginBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatAutocompleteOriginBase });
_MatAutocompleteOriginBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteOriginBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */
class MatAutocompleteOrigin extends _MatAutocompleteOriginBase {
}
MatAutocompleteOrigin.ɵfac = /*@__PURE__*/ function () { let ɵMatAutocompleteOrigin_BaseFactory; return function MatAutocompleteOrigin_Factory(t) { return (ɵMatAutocompleteOrigin_BaseFactory || (ɵMatAutocompleteOrigin_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocompleteOrigin)))(t || MatAutocompleteOrigin); }; }();
MatAutocompleteOrigin.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatAutocompleteOrigin, selectors: [["", "matAutocompleteOrigin", ""]], exportAs: ["matAutocompleteOrigin"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matAutocompleteOrigin]',
                exportAs: 'matAutocompleteOrigin'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that determines the scroll handling while the autocomplete panel is open. */
const MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-scroll-strategy');
/** @docs-private */
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay],
    useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY,
};
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 */
const MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatAutocompleteTrigger),
    multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * @docs-private
 */
function getMatAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' +
        'Make sure that the id passed to the `matAutocomplete` is correct and that ' +
        'you\'re attempting to open it after the ngAfterContentInit hook.');
}
/** Base class with all of the `MatAutocompleteTrigger` functionality. */
class _MatAutocompleteTriggerBase {
    constructor(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler, _defaults) {
        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        this._defaults = _defaults;
        this._componentDestroyed = false;
        this._autocompleteDisabled = false;
        /** Whether or not the label state is being overridden. */
        this._manuallyFloatingLabel = false;
        /** Subscription to viewport size changes. */
        this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
        /**
         * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
         * closed autocomplete from being reopened if the user switches to another browser tab and then
         * comes back.
         */
        this._canOpenOnNextFocus = true;
        /** Stream of keyboard events that can close the panel. */
        this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        /**
         * Event handler for when the window is blurred. Needs to be an
         * arrow function in order to preserve the context.
         */
        this._windowBlurHandler = () => {
            // If the user blurred the window while the autocomplete is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            this._canOpenOnNextFocus =
                this._document.activeElement !== this._element.nativeElement || this.panelOpen;
        };
        /** `View -> model callback called when value changes` */
        this._onChange = () => { };
        /** `View -> model callback called when autocomplete has been touched` */
        this._onTouched = () => { };
        /**
         * Position of the autocomplete panel relative to the trigger element. A position of `auto`
         * will render the panel underneath the trigger if there is enough space for it to fit in
         * the viewport, otherwise the panel will be shown above it. If the position is set to
         * `above` or `below`, the panel will always be shown above or below the trigger. no matter
         * whether it fits completely in the viewport.
         */
        this.position = 'auto';
        /**
         * `autocomplete` attribute to be set on the input element.
         * @docs-private
         */
        this.autocompleteAttribute = 'off';
        this._overlayAttached = false;
        /** Stream of autocomplete option selections. */
        this.optionSelections = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.defer)(() => {
            if (this.autocomplete && this.autocomplete.options) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...this.autocomplete.options.map(option => option.onSelectionChange));
            }
            // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.
            return this._zone.onStable
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => this.optionSelections));
        });
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * Whether the autocomplete is disabled. When disabled, the element will
     * act as a regular input and the user won't be able to open the panel.
     */
    get autocompleteDisabled() { return this._autocompleteDisabled; }
    set autocompleteDisabled(value) {
        this._autocompleteDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    ngAfterViewInit() {
        const window = this._getWindow();
        if (typeof window !== 'undefined') {
            this._zone.runOutsideAngular(() => window.addEventListener('blur', this._windowBlurHandler));
        }
    }
    ngOnChanges(changes) {
        if (changes['position'] && this._positionStrategy) {
            this._setStrategyPositions(this._positionStrategy);
            if (this.panelOpen) {
                this._overlayRef.updatePosition();
            }
        }
    }
    ngOnDestroy() {
        const window = this._getWindow();
        if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this._windowBlurHandler);
        }
        this._viewportSubscription.unsubscribe();
        this._componentDestroyed = true;
        this._destroyPanel();
        this._closeKeyEventStream.complete();
    }
    /** Whether or not the autocomplete panel is open. */
    get panelOpen() {
        return this._overlayAttached && this.autocomplete.showPanel;
    }
    /** Opens the autocomplete suggestion panel. */
    openPanel() {
        this._attachOverlay();
        this._floatLabel();
    }
    /** Closes the autocomplete suggestion panel. */
    closePanel() {
        this._resetLabel();
        if (!this._overlayAttached) {
            return;
        }
        if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocomplete.closed.emit();
        }
        this.autocomplete._isOpen = this._overlayAttached = false;
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
            this._closingActionsSubscription.unsubscribe();
        }
        // Note that in some cases this can end up being called after the component is destroyed.
        // Add a check to ensure that we don't try to run change detection on a destroyed view.
        if (!this._componentDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            // This ensures that the label is reset when the
            // user clicks outside.
            this._changeDetectorRef.detectChanges();
        }
    }
    /**
     * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
     * within the viewport.
     */
    updatePosition() {
        if (this._overlayAttached) {
            this._overlayRef.updatePosition();
        }
    }
    /**
     * A stream of actions that should close the autocomplete panel, including
     * when an option is selected, on blur, and when TAB is pressed.
     */
    get panelClosingActions() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ?
            this._overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(() => this._overlayAttached)) :
            (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)()).pipe(
        // Normalize the output so we return a consistent type.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(event => event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionSelectionChange ? event : null));
    }
    /** The currently active option, coerced to MatOption type. */
    get activeOption() {
        if (this.autocomplete && this.autocomplete._keyManager) {
            return this.autocomplete._keyManager.activeItem;
        }
        return null;
    }
    /** Stream of clicks outside of the autocomplete panel. */
    _getOutsideClickStream() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this._document, 'click'), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this._document, 'auxclick'), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this._document, 'touchend'))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(event => {
            // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
            // fall back to check the first element in the path of the click event.
            const clickTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__._getEventTarget)(event);
            const formField = this._formField ? this._formField._elementRef.nativeElement : null;
            const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
            return this._overlayAttached && clickTarget !== this._element.nativeElement &&
                (!formField || !formField.contains(clickTarget)) &&
                (!customOrigin || !customOrigin.contains(clickTarget)) &&
                (!!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget));
        }));
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        Promise.resolve(null).then(() => this._setTriggerValue(value));
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this._element.nativeElement.disabled = isDisabled;
    }
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        // Prevent the default action on all escape key presses. This is here primarily to bring IE
        // in line with other browsers. By default, pressing escape on IE will cause it to revert
        // the input value to the one that it had on focus, however it won't dispatch any events
        // which means that the model value will be out of sync with the view.
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event)) {
            event.preventDefault();
        }
        if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ENTER && this.panelOpen) {
            this.activeOption._selectViaInteraction();
            this._resetActiveItem();
            event.preventDefault();
        }
        else if (this.autocomplete) {
            const prevActiveItem = this.autocomplete._keyManager.activeItem;
            const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.DOWN_ARROW;
            if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.TAB) {
                this.autocomplete._keyManager.onKeydown(event);
            }
            else if (isArrowKey && this._canOpen()) {
                this.openPanel();
            }
            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
            }
        }
    }
    _handleInput(event) {
        let target = event.target;
        let value = target.value;
        // Based on `NumberValueAccessor` from forms.
        if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
        }
        // If the input has a placeholder, IE will fire the `input` event on page load,
        // focus and blur, in addition to when the user actually changed the value. To
        // filter out all of the extra events, we save the value on focus and between
        // `input` events, and we check whether it changed.
        // See: https://connect.microsoft.com/IE/feedback/details/885747/
        if (this._previousValue !== value) {
            this._previousValue = value;
            this._onChange(value);
            if (this._canOpen() && this._document.activeElement === event.target) {
                this.openPanel();
            }
        }
    }
    _handleFocus() {
        if (!this._canOpenOnNextFocus) {
            this._canOpenOnNextFocus = true;
        }
        else if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;
            this._attachOverlay();
            this._floatLabel(true);
        }
    }
    /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @param shouldAnimate Whether the label should be animated when it is floated.
     */
    _floatLabel(shouldAnimate = false) {
        if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
                this._formField._animateAndLockLabel();
            }
            else {
                this._formField.floatLabel = 'always';
            }
            this._manuallyFloatingLabel = true;
        }
    }
    /** If the label has been manually elevated, return it to its normal state. */
    _resetLabel() {
        if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
        }
    }
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     */
    _subscribeToClosingActions() {
        const firstStable = this._zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1));
        const optionChanges = this.autocomplete.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(() => this._positionStrategy.reapplyLastPosition()), 
        // Defer emitting to the stream until the next tick, because changing
        // bindings in here will cause "changed after checked" errors.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.delay)(0));
        // When the zone is stable initially, and when the option list changes...
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(firstStable, optionChanges)
            .pipe(
        // create a new stream of panelClosingActions, replacing any previous streams
        // that were created, and flatten it so our stream only emits closing events...
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => {
            const wasOpen = this.panelOpen;
            this._resetActiveItem();
            this.autocomplete._setVisibility();
            if (this.panelOpen) {
                this._overlayRef.updatePosition();
                // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                // event, because we may not have emitted it when the panel was attached. This
                // can happen if the users opens the panel and there are no options, but the
                // options come in slightly later or as a result of the value changing.
                if (wasOpen !== this.panelOpen) {
                    this.autocomplete.opened.emit();
                }
            }
            return this.panelClosingActions;
        }), 
        // when the first closing event occurs...
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1))
            // set the value, close the panel, and complete.
            .subscribe(event => this._setValueAndClose(event));
    }
    /** Destroys the autocomplete suggestion panel. */
    _destroyPanel() {
        if (this._overlayRef) {
            this.closePanel();
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    }
    _setTriggerValue(value) {
        const toDisplay = this.autocomplete && this.autocomplete.displayWith ?
            this.autocomplete.displayWith(value) :
            value;
        // Simply falling back to an empty string if the display value is falsy does not work properly.
        // The display value can also be the number zero and shouldn't fall back to an empty string.
        const inputValue = toDisplay != null ? toDisplay : '';
        // If it's used within a `MatFormField`, we should set it through the property so it can go
        // through change detection.
        if (this._formField) {
            this._formField._control.value = inputValue;
        }
        else {
            this._element.nativeElement.value = inputValue;
        }
        this._previousValue = inputValue;
    }
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    _setValueAndClose(event) {
        if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);
            this._setTriggerValue(event.source.value);
            this._onChange(event.source.value);
            this._element.nativeElement.focus();
            this.autocomplete._emitSelectEvent(event.source);
        }
        this.closePanel();
    }
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    _clearPreviousSelectedOption(skip) {
        this.autocomplete.options.forEach(option => {
            if (option !== skip && option.selected) {
                option.deselect();
            }
        });
    }
    _attachOverlay() {
        var _a;
        if (!this.autocomplete && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatAutocompleteMissingPanelError();
        }
        let overlayRef = this._overlayRef;
        if (!overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__.TemplatePortal(this.autocomplete.template, this._viewContainerRef, { id: (_a = this._formField) === null || _a === void 0 ? void 0 : _a.getLabelId() });
            overlayRef = this._overlay.create(this._getOverlayConfig());
            this._overlayRef = overlayRef;
            // Use the `keydownEvents` in order to take advantage of
            // the overlay event targeting provided by the CDK overlay.
            overlayRef.keydownEvents().subscribe(event => {
                // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event)) ||
                    (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.UP_ARROW && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event, 'altKey'))) {
                    this._resetActiveItem();
                    this._closeKeyEventStream.next();
                    // We need to stop propagation, otherwise the event will eventually
                    // reach the input itself and cause the overlay to be reopened.
                    event.stopPropagation();
                    event.preventDefault();
                }
            });
            this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
                if (this.panelOpen && overlayRef) {
                    overlayRef.updateSize({ width: this._getPanelWidth() });
                }
            });
        }
        else {
            // Update the trigger, panel width and direction, in case anything has changed.
            this._positionStrategy.setOrigin(this._getConnectedElement());
            overlayRef.updateSize({ width: this._getPanelWidth() });
        }
        if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
        }
        const wasOpen = this.panelOpen;
        this.autocomplete._setVisibility();
        this.autocomplete._isOpen = this._overlayAttached = true;
        // We need to do an extra `panelOpen` check in here, because the
        // autocomplete won't be shown if there are no options.
        if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
        }
    }
    _getOverlayConfig() {
        var _a;
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayConfig({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getPanelWidth(),
            direction: this._dir,
            panelClass: (_a = this._defaults) === null || _a === void 0 ? void 0 : _a.overlayPanelClass,
        });
    }
    _getOverlayPosition() {
        const strategy = this._overlay.position()
            .flexibleConnectedTo(this._getConnectedElement())
            .withFlexibleDimensions(false)
            .withPush(false);
        this._setStrategyPositions(strategy);
        this._positionStrategy = strategy;
        return strategy;
    }
    /** Sets the positions on a position strategy based on the directive's input state. */
    _setStrategyPositions(positionStrategy) {
        // Note that we provide horizontal fallback positions, even though by default the dropdown
        // width matches the input, because consumers can override the width. See #18854.
        const belowPositions = [
            { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
            { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }
        ];
        // The overlay edge connected to the trigger should have squared corners, while
        // the opposite end has rounded corners. We apply a CSS class to swap the
        // border-radius based on the overlay position.
        const panelClass = this._aboveClass;
        const abovePositions = [
            { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', panelClass },
            { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', panelClass }
        ];
        let positions;
        if (this.position === 'above') {
            positions = abovePositions;
        }
        else if (this.position === 'below') {
            positions = belowPositions;
        }
        else {
            positions = [...belowPositions, ...abovePositions];
        }
        positionStrategy.withPositions(positions);
    }
    _getConnectedElement() {
        if (this.connectedTo) {
            return this.connectedTo.elementRef;
        }
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
    }
    _getPanelWidth() {
        return this.autocomplete.panelWidth || this._getHostWidth();
    }
    /** Returns the width of the input element, so the panel width can match it. */
    _getHostWidth() {
        return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
    /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     */
    _resetActiveItem() {
        const autocomplete = this.autocomplete;
        if (autocomplete.autoActiveFirstOption) {
            // Note that we go through `setFirstItemActive`, rather than `setActiveItem(0)`, because
            // the former will find the next enabled option, if the first one is disabled.
            autocomplete._keyManager.setFirstItemActive();
        }
        else {
            autocomplete._keyManager.setActiveItem(-1);
        }
    }
    /** Determines whether the panel can be opened. */
    _canOpen() {
        const element = this._element.nativeElement;
        return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        var _a;
        return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
    }
    /** Scrolls to a particular option in the list. */
    _scrollToOption(index) {
        // Given that we are not actually focusing active options, we must manually adjust scroll
        // to reveal options below the fold. First, we find the offset of the option from the top
        // of the panel. If that offset is below the fold, the new scrollTop will be the offset -
        // the panel height + the option height, so the active option will be just visible at the
        // bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
        // will become the offset. If that offset is visible within the panel already, the scrollTop is
        // not adjusted.
        const autocomplete = this.autocomplete;
        const labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__._countGroupLabelsBeforeOption)(index, autocomplete.options, autocomplete.optionGroups);
        if (index === 0 && labelCount === 1) {
            // If we've got one group label before the option and we're at the top option,
            // scroll the list to the top. This is better UX than scrolling the list to the
            // top of the option, because it allows the user to read the top group's label.
            autocomplete._setScrollTop(0);
        }
        else if (autocomplete.panel) {
            const option = autocomplete.options.toArray()[index];
            if (option) {
                const element = option._getHostElement();
                const newScrollPosition = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__._getOptionScrollPosition)(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
                autocomplete._setScrollTop(newScrollPosition);
            }
        }
    }
}
_MatAutocompleteTriggerBase.ɵfac = function _MatAutocompleteTriggerBase_Factory(t) { return new (t || _MatAutocompleteTriggerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, 8)); };
_MatAutocompleteTriggerBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatAutocompleteTriggerBase, inputs: { position: ["matAutocompletePosition", "position"], autocompleteAttribute: ["autocomplete", "autocompleteAttribute"], autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"], autocomplete: ["matAutocomplete", "autocomplete"], connectedTo: ["matAutocompleteConnectedTo", "connectedTo"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
_MatAutocompleteTriggerBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT,] }] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] }
];
_MatAutocompleteTriggerBase.propDecorators = {
    autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocomplete',] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocompletePosition',] }],
    connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocompleteConnectedTo',] }],
    autocompleteAttribute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['autocomplete',] }],
    autocompleteDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matAutocompleteDisabled',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteTriggerBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
            }] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }] }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompletePosition']
        }], autocompleteAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['autocomplete']
        }], autocompleteDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompleteDisabled']
        }], autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocomplete']
        }], connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompleteConnectedTo']
        }] }); })();
class MatAutocompleteTrigger extends _MatAutocompleteTriggerBase {
    constructor() {
        super(...arguments);
        this._aboveClass = 'mat-autocomplete-panel-above';
    }
}
MatAutocompleteTrigger.ɵfac = /*@__PURE__*/ function () { let ɵMatAutocompleteTrigger_BaseFactory; return function MatAutocompleteTrigger_Factory(t) { return (ɵMatAutocompleteTrigger_BaseFactory || (ɵMatAutocompleteTrigger_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocompleteTrigger)))(t || MatAutocompleteTrigger); }; }();
MatAutocompleteTrigger.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatAutocompleteTrigger, selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]], hostAttrs: [1, "mat-autocomplete-trigger"], hostVars: 7, hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() { return ctx._handleFocus(); })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() { return ctx._onTouched(); })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) { return ctx._handleInput($event); })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
    } }, exportAs: ["matAutocompleteTrigger"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: `input[matAutocomplete], textarea[matAutocomplete]`,
                host: {
                    'class': 'mat-autocomplete-trigger',
                    '[attr.autocomplete]': 'autocompleteAttribute',
                    '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
                    '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
                    '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
                    '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
                    '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
                    '[attr.aria-haspopup]': '!autocompleteDisabled',
                    // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
                    // a little earlier. This avoids issues where IE delays the focusing of the input.
                    '(focusin)': '_handleFocus()',
                    '(blur)': '_onTouched()',
                    '(input)': '_handleInput($event)',
                    '(keydown)': '_handleKeydown($event)'
                },
                exportAs: 'matAutocompleteTrigger',
                providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatAutocompleteModule {
}
MatAutocompleteModule.ɵfac = function MatAutocompleteModule_Factory(t) { return new (t || MatAutocompleteModule)(); };
MatAutocompleteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatAutocompleteModule });
MatAutocompleteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule
                ],
                exports: [
                    MatAutocomplete,
                    MatAutocompleteTrigger,
                    MatAutocompleteOrigin,
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
                ],
                declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
                providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatAutocompleteModule, { declarations: function () { return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]; }, exports: function () { return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 3220:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateRange": () => (/* binding */ DateRange),
/* harmony export */   "DefaultMatCalendarRangeStrategy": () => (/* binding */ DefaultMatCalendarRangeStrategy),
/* harmony export */   "MAT_DATEPICKER_SCROLL_STRATEGY": () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY),
/* harmony export */   "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MAT_DATEPICKER_VALIDATORS": () => (/* binding */ MAT_DATEPICKER_VALIDATORS),
/* harmony export */   "MAT_DATEPICKER_VALUE_ACCESSOR": () => (/* binding */ MAT_DATEPICKER_VALUE_ACCESSOR),
/* harmony export */   "MAT_DATE_RANGE_SELECTION_STRATEGY": () => (/* binding */ MAT_DATE_RANGE_SELECTION_STRATEGY),
/* harmony export */   "MAT_RANGE_DATE_SELECTION_MODEL_FACTORY": () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   "MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER": () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   "MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY": () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   "MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER": () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   "MatCalendar": () => (/* binding */ MatCalendar),
/* harmony export */   "MatCalendarBody": () => (/* binding */ MatCalendarBody),
/* harmony export */   "MatCalendarCell": () => (/* binding */ MatCalendarCell),
/* harmony export */   "MatCalendarHeader": () => (/* binding */ MatCalendarHeader),
/* harmony export */   "MatDateRangeInput": () => (/* binding */ MatDateRangeInput),
/* harmony export */   "MatDateRangePicker": () => (/* binding */ MatDateRangePicker),
/* harmony export */   "MatDateSelectionModel": () => (/* binding */ MatDateSelectionModel),
/* harmony export */   "MatDatepicker": () => (/* binding */ MatDatepicker),
/* harmony export */   "MatDatepickerActions": () => (/* binding */ MatDatepickerActions),
/* harmony export */   "MatDatepickerApply": () => (/* binding */ MatDatepickerApply),
/* harmony export */   "MatDatepickerCancel": () => (/* binding */ MatDatepickerCancel),
/* harmony export */   "MatDatepickerContent": () => (/* binding */ MatDatepickerContent),
/* harmony export */   "MatDatepickerInput": () => (/* binding */ MatDatepickerInput),
/* harmony export */   "MatDatepickerInputEvent": () => (/* binding */ MatDatepickerInputEvent),
/* harmony export */   "MatDatepickerIntl": () => (/* binding */ MatDatepickerIntl),
/* harmony export */   "MatDatepickerModule": () => (/* binding */ MatDatepickerModule),
/* harmony export */   "MatDatepickerToggle": () => (/* binding */ MatDatepickerToggle),
/* harmony export */   "MatDatepickerToggleIcon": () => (/* binding */ MatDatepickerToggleIcon),
/* harmony export */   "MatEndDate": () => (/* binding */ MatEndDate),
/* harmony export */   "MatMonthView": () => (/* binding */ MatMonthView),
/* harmony export */   "MatMultiYearView": () => (/* binding */ MatMultiYearView),
/* harmony export */   "MatRangeDateSelectionModel": () => (/* binding */ MatRangeDateSelectionModel),
/* harmony export */   "MatSingleDateSelectionModel": () => (/* binding */ MatSingleDateSelectionModel),
/* harmony export */   "MatStartDate": () => (/* binding */ MatStartDate),
/* harmony export */   "MatYearView": () => (/* binding */ MatYearView),
/* harmony export */   "matDatepickerAnimations": () => (/* binding */ matDatepickerAnimations),
/* harmony export */   "yearsPerPage": () => (/* binding */ yearsPerPage),
/* harmony export */   "yearsPerRow": () => (/* binding */ yearsPerRow),
/* harmony export */   "ɵangular_material_src_material_datepicker_datepicker_a": () => (/* binding */ MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   "ɵangular_material_src_material_datepicker_datepicker_b": () => (/* binding */ MAT_CALENDAR_RANGE_STRATEGY_PROVIDER),
/* harmony export */   "ɵangular_material_src_material_datepicker_datepicker_c": () => (/* binding */ MatDatepickerBase),
/* harmony export */   "ɵangular_material_src_material_datepicker_datepicker_d": () => (/* binding */ MatDatepickerInputBase),
/* harmony export */   "ɵangular_material_src_material_datepicker_datepicker_e": () => (/* binding */ MAT_DATE_RANGE_INPUT_PARENT)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 1386);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 6682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6461);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 946);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ 521);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 3166);




















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */











const _c0 = ["mat-calendar-body", ""];
function MatCalendarBody_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0.numCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
} }
function MatCalendarBody_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r4._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
} }
function MatCalendarBody_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarBody_tr_1_td_2_Template_td_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8._cellClicked(item_r6, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const colIndex_r7 = ctx.index;
    const rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r5._cellWidth)("padding-top", ctx_r5._cellPadding)("padding-bottom", ctx_r5._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r6.enabled)("mat-calendar-body-active", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7))("mat-calendar-body-range-start", ctx_r5._isRangeStart(item_r6.compareValue))("mat-calendar-body-range-end", ctx_r5._isRangeEnd(item_r6.compareValue))("mat-calendar-body-in-range", ctx_r5._isInRange(item_r6.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r5._isComparisonBridgeStart(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-bridge-end", ctx_r5._isComparisonBridgeEnd(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-start", ctx_r5._isComparisonStart(item_r6.compareValue))("mat-calendar-body-comparison-end", ctx_r5._isComparisonEnd(item_r6.compareValue))("mat-calendar-body-in-comparison-range", ctx_r5._isInComparisonRange(item_r6.compareValue))("mat-calendar-body-preview-start", ctx_r5._isPreviewStart(item_r6.compareValue))("mat-calendar-body-preview-end", ctx_r5._isPreviewEnd(item_r6.compareValue))("mat-calendar-body-in-preview", ctx_r5._isInPreview(item_r6.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r6.cssClasses)("tabindex", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r7)("aria-label", item_r6.ariaLabel)("aria-disabled", !item_r6.enabled || null)("aria-selected", ctx_r5._isSelected(item_r6.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r5._isSelected(item_r6.compareValue))("mat-calendar-body-comparison-identical", ctx_r5._isComparisonIdentical(item_r6.compareValue))("mat-calendar-body-today", ctx_r5.todayValue === item_r6.compareValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.displayValue, " ");
} }
function MatCalendarBody_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCalendarBody_tr_1_td_2_Template, 4, 46, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
} }
function MatMonthView_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "abbr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", day_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", day_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1.narrow);
} }
const _c1 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) { }
function MatCalendar_mat_month_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-month-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_month_view_2_Template_mat_month_view_activeDateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.activeDate = $event; })("_userSelection", function MatCalendar_mat_month_view_2_Template_mat_month_view__userSelection_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6._dateSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd);
} }
function MatCalendar_mat_year_view_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-year-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_activeDateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.activeDate = $event; })("monthSelected", function MatCalendar_mat_year_view_3_Template_mat_year_view_monthSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9._monthSelectedInYearView($event); })("selectedChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10._goToDateInView($event, "month"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate)("dateClass", ctx_r2.dateClass);
} }
function MatCalendar_mat_multi_year_view_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-multi-year-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.activeDate = $event; })("yearSelected", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_yearSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13._yearSelectedInMultiYearView($event); })("selectedChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14._goToDateInView($event, "year"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate)("dateClass", ctx_r3.dateClass);
} }
function MatDatepickerContent_ng_template_2_Template(rf, ctx) { }
const _c2 = ["button"];
function MatDatepickerToggle__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = [[["", "matDatepickerToggleIcon", ""]]];
const _c4 = ["[matDatepickerToggleIcon]"];
const _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
const _c6 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function createMissingDateImplError(provider) {
    return Error(`MatDatepicker: No provider found for ${provider}. You must import one of the following ` +
        `modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a ` +
        `custom implementation.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Datepicker data that requires internationalization. */
class MatDatepickerIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /** A label for the calendar popup (used by screen readers). */
        this.calendarLabel = 'Calendar';
        /** A label for the button used to open the calendar popup (used by screen readers). */
        this.openCalendarLabel = 'Open calendar';
        /** Label for the button used to close the calendar popup. */
        this.closeCalendarLabel = 'Close calendar';
        /** A label for the previous month button (used by screen readers). */
        this.prevMonthLabel = 'Previous month';
        /** A label for the next month button (used by screen readers). */
        this.nextMonthLabel = 'Next month';
        /** A label for the previous year button (used by screen readers). */
        this.prevYearLabel = 'Previous year';
        /** A label for the next year button (used by screen readers). */
        this.nextYearLabel = 'Next year';
        /** A label for the previous multi-year button (used by screen readers). */
        this.prevMultiYearLabel = 'Previous 24 years';
        /** A label for the next multi-year button (used by screen readers). */
        this.nextMultiYearLabel = 'Next 24 years';
        /** A label for the 'switch to month view' button (used by screen readers). */
        this.switchToMonthViewLabel = 'Choose date';
        /** A label for the 'switch to year view' button (used by screen readers). */
        this.switchToMultiYearViewLabel = 'Choose month and year';
    }
    /** Formats a range of years. */
    formatYearRange(start, end) {
        return `${start} \u2013 ${end}`;
    }
}
MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) { return new (t || MatDatepickerIntl)(); };
MatDatepickerIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MatDatepickerIntl_Factory() { return new MatDatepickerIntl(); }, token: MatDatepickerIntl, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
class MatCalendarCell {
    constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
        this.compareValue = compareValue;
        this.rawValue = rawValue;
    }
}
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
class MatCalendarBody {
    constructor(_elementRef, _ngZone) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /** The number of columns in the table. */
        this.numCols = 7;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /** Whether a range is being selected. */
        this.isRange = false;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */
        this.cellAspectRatio = 1;
        /** Start of the preview range. */
        this.previewStart = null;
        /** End of the preview range. */
        this.previewEnd = null;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when the preview has changed as a result of a user action. */
        this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Event handler for when the user enters an element
         * inside the calendar body (e.g. by hovering in or focus).
         */
        this._enterHandler = (event) => {
            if (this._skipNextFocus && event.type === 'focus') {
                this._skipNextFocus = false;
                return;
            }
            // We only need to hit the zone when we're selecting a range.
            if (event.target && this.isRange) {
                const cell = this._getCellFromElement(event.target);
                if (cell) {
                    this._ngZone.run(() => this.previewChange.emit({ value: cell.enabled ? cell : null, event }));
                }
            }
        };
        /**
         * Event handler for when the user's pointer leaves an element
         * inside the calendar body (e.g. by hovering out or blurring).
         */
        this._leaveHandler = (event) => {
            // We only need to hit the zone when we're selecting a range.
            if (this.previewEnd !== null && this.isRange) {
                // Only reset the preview end value when leaving cells. This looks better, because
                // we have a gap between the cells and the rows and we don't want to remove the
                // range just for it to show up again when the user moves a few pixels to the side.
                if (event.target && isTableCell(event.target)) {
                    this._ngZone.run(() => this.previewChange.emit({ value: null, event }));
                }
            }
        };
        _ngZone.runOutsideAngular(() => {
            const element = _elementRef.nativeElement;
            element.addEventListener('mouseenter', this._enterHandler, true);
            element.addEventListener('focus', this._enterHandler, true);
            element.addEventListener('mouseleave', this._leaveHandler, true);
            element.addEventListener('blur', this._leaveHandler, true);
        });
    }
    /** Called when a cell is clicked. */
    _cellClicked(cell, event) {
        if (cell.enabled) {
            this.selectedValueChange.emit({ value: cell.value, event });
        }
    }
    /** Returns whether a cell should be marked as selected. */
    _isSelected(value) {
        return this.startValue === value || this.endValue === value;
    }
    ngOnChanges(changes) {
        const columnChanges = changes['numCols'];
        const { rows, numCols } = this;
        if (changes['rows'] || columnChanges) {
            this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
        }
        if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
            this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
        }
        if (columnChanges || !this._cellWidth) {
            this._cellWidth = `${100 / numCols}%`;
        }
    }
    ngOnDestroy() {
        const element = this._elementRef.nativeElement;
        element.removeEventListener('mouseenter', this._enterHandler, true);
        element.removeEventListener('focus', this._enterHandler, true);
        element.removeEventListener('mouseleave', this._leaveHandler, true);
        element.removeEventListener('blur', this._leaveHandler, true);
    }
    /** Returns whether a cell is active. */
    _isActiveCell(rowIndex, colIndex) {
        let cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(movePreview = true) {
        this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => {
                const activeCell = this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
                if (activeCell) {
                    if (!movePreview) {
                        this._skipNextFocus = true;
                    }
                    activeCell.focus();
                }
            });
        });
    }
    /** Gets whether a value is the start of the main range. */
    _isRangeStart(value) {
        return isStart(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is the end of the main range. */
    _isRangeEnd(value) {
        return isEnd(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is within the currently-selected range. */
    _isInRange(value) {
        return isInRange(value, this.startValue, this.endValue, this.isRange);
    }
    /** Gets whether a value is the start of the comparison range. */
    _isComparisonStart(value) {
        return isStart(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Whether the cell is a start bridge cell between the main and comparison ranges. */
    _isComparisonBridgeStart(value, rowIndex, colIndex) {
        if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
            return false;
        }
        let previousCell = this.rows[rowIndex][colIndex - 1];
        if (!previousCell) {
            const previousRow = this.rows[rowIndex - 1];
            previousCell = previousRow && previousRow[previousRow.length - 1];
        }
        return previousCell && !this._isRangeEnd(previousCell.compareValue);
    }
    /** Whether the cell is an end bridge cell between the main and comparison ranges. */
    _isComparisonBridgeEnd(value, rowIndex, colIndex) {
        if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
            return false;
        }
        let nextCell = this.rows[rowIndex][colIndex + 1];
        if (!nextCell) {
            const nextRow = this.rows[rowIndex + 1];
            nextCell = nextRow && nextRow[0];
        }
        return nextCell && !this._isRangeStart(nextCell.compareValue);
    }
    /** Gets whether a value is the end of the comparison range. */
    _isComparisonEnd(value) {
        return isEnd(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Gets whether a value is within the current comparison range. */
    _isInComparisonRange(value) {
        return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
    }
    /**
     * Gets whether a value is the same as the start and end of the comparison range.
     * For context, the functions that we use to determine whether something is the start/end of
     * a range don't allow for the start and end to be on the same day, because we'd have to use
     * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
     * the regular range, because when it happens, the selected styles take over and still show where
     * the range would've been, however we don't have these selected styles for a comparison range.
     * This function is used to apply a class that serves the same purpose as the one for selected
     * dates, but it only applies in the context of a comparison range.
     */
    _isComparisonIdentical(value) {
        // Note that we don't need to null check the start/end
        // here, because the `value` will always be defined.
        return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
    }
    /** Gets whether a value is the start of the preview range. */
    _isPreviewStart(value) {
        return isStart(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is the end of the preview range. */
    _isPreviewEnd(value) {
        return isEnd(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is inside the preview range. */
    _isInPreview(value) {
        return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
    }
    /** Finds the MatCalendarCell that corresponds to a DOM node. */
    _getCellFromElement(element) {
        let cell;
        if (isTableCell(element)) {
            cell = element;
        }
        else if (isTableCell(element.parentNode)) {
            cell = element.parentNode;
        }
        if (cell) {
            const row = cell.getAttribute('data-mat-row');
            const col = cell.getAttribute('data-mat-col');
            if (row && col) {
                return this.rows[parseInt(row)][parseInt(col)];
            }
        }
        return null;
    }
}
MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) { return new (t || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
MatCalendarBody.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCalendarBody, selectors: [["", "mat-calendar-body", ""]], hostAttrs: [1, "mat-calendar-body"], inputs: { numCols: "numCols", activeCell: "activeCell", isRange: "isRange", cellAspectRatio: "cellAspectRatio", previewStart: "previewStart", previewEnd: "previewEnd", label: "label", rows: "rows", todayValue: "todayValue", startValue: "startValue", endValue: "endValue", labelMinRequiredCells: "labelMinRequiredCells", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedValueChange: "selectedValueChange", previewChange: "previewChange" }, exportAs: ["matCalendarBody"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c0, decls: 2, vars: 2, consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["aria-hidden", "true", "class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "mat-calendar-body-range-start", "mat-calendar-body-range-end", "mat-calendar-body-in-range", "mat-calendar-body-comparison-bridge-start", "mat-calendar-body-comparison-bridge-end", "mat-calendar-body-comparison-start", "mat-calendar-body-comparison-end", "mat-calendar-body-in-comparison-range", "mat-calendar-body-preview-start", "mat-calendar-body-preview-end", "mat-calendar-body-in-preview", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "mat-calendar-body-label"], ["role", "gridcell", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], [1, "mat-calendar-body-cell-preview"]], template: function MatCalendarBody_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"], encapsulation: 2, changeDetection: 0 });
MatCalendarBody.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
MatCalendarBody.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    todayValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    startValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    endValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelMinRequiredCells: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    numCols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    activeCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cellAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    previewStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    previewEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    previewChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendarBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[mat-calendar-body]',
                template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n    percentage of the width (a variant of the trick described here:\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-calendar-body-cell\"\n      [ngClass]=\"item.cssClasses\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [attr.data-mat-row]=\"rowIndex\"\n      [attr.data-mat-col]=\"colIndex\"\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\n      [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\n      [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\n      [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\n      [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\n      [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      [attr.aria-selected]=\"_isSelected(item.compareValue)\"\n      (click)=\"_cellClicked(item, $event)\"\n      [style.width]=\"_cellWidth\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n      <div class=\"mat-calendar-body-cell-content mat-focus-indicator\"\n        [class.mat-calendar-body-selected]=\"_isSelected(item.compareValue)\"\n        [class.mat-calendar-body-comparison-identical]=\"_isComparisonIdentical(item.compareValue)\"\n        [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\n        {{item.displayValue}}\n      </div>\n      <div class=\"mat-calendar-body-cell-preview\"></div>\n  </td>\n</tr>\n",
                host: {
                    'class': 'mat-calendar-body'
                },
                exportAs: 'matCalendarBody',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, { numCols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], activeCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cellAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], previewStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], previewEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], previewChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], todayValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], startValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], endValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], labelMinRequiredCells: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/** Checks whether a node is a table cell element. */
function isTableCell(node) {
    return node.nodeName === 'TD';
}
/** Checks whether a value is the start of a range. */
function isStart(value, start, end) {
    return end !== null && start !== end && value < end && value === start;
}
/** Checks whether a value is the end of a range. */
function isEnd(value, start, end) {
    return start !== null && start !== end && value >= start && value === end;
}
/** Checks whether a value is inside of a range. */
function isInRange(value, start, end, rangeEnabled) {
    return rangeEnabled && start !== null && end !== null && start !== end &&
        value >= start && value <= end;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** A class representing a range of dates. */
class DateRange {
    constructor(
    /** The start date of the range. */
    start, 
    /** The end date of the range. */
    end) {
        this.start = start;
        this.end = end;
    }
}
/**
 * A selection model containing a date selection.
 * @docs-private
 */
class MatDateSelectionModel {
    constructor(
    /** The current selection. */
    selection, _adapter) {
        this.selection = selection;
        this._adapter = _adapter;
        this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /** Emits when the selection has changed. */
        this.selectionChanged = this._selectionChanged;
        this.selection = selection;
    }
    /**
     * Updates the current selection in the model.
     * @param value New selection that should be assigned.
     * @param source Object that triggered the selection change.
     */
    updateSelection(value, source) {
        const oldValue = this.selection;
        this.selection = value;
        this._selectionChanged.next({ selection: value, source, oldValue });
    }
    ngOnDestroy() {
        this._selectionChanged.complete();
    }
    _isValidDateInstance(date) {
        return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
    }
}
MatDateSelectionModel.ɵfac = function MatDateSelectionModel_Factory(t) { return new (t || MatDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter)); };
MatDateSelectionModel.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatDateSelectionModel, factory: MatDateSelectionModel.ɵfac });
MatDateSelectionModel.ctorParameters = () => [
    { type: undefined },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateSelectionModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }]; }, null); })();
/**
 * A selection model that contains a single date.
 * @docs-private
 */
class MatSingleDateSelectionModel extends MatDateSelectionModel {
    constructor(adapter) {
        super(null, adapter);
    }
    /**
     * Adds a date to the current selection. In the case of a single date selection, the added date
     * simply overwrites the previous selection
     */
    add(date) {
        super.updateSelection(date, this);
    }
    /** Checks whether the current selection is valid. */
    isValid() {
        return this.selection != null && this._isValidDateInstance(this.selection);
    }
    /**
     * Checks whether the current selection is complete. In the case of a single date selection, this
     * is true if the current selection is not null.
     */
    isComplete() {
        return this.selection != null;
    }
    /** Clones the selection model. */
    clone() {
        const clone = new MatSingleDateSelectionModel(this._adapter);
        clone.updateSelection(this.selection, this);
        return clone;
    }
}
MatSingleDateSelectionModel.ɵfac = function MatSingleDateSelectionModel_Factory(t) { return new (t || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter)); };
MatSingleDateSelectionModel.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatSingleDateSelectionModel, factory: MatSingleDateSelectionModel.ɵfac });
MatSingleDateSelectionModel.ctorParameters = () => [
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSingleDateSelectionModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }]; }, null); })();
/**
 * A selection model that contains a date range.
 * @docs-private
 */
class MatRangeDateSelectionModel extends MatDateSelectionModel {
    constructor(adapter) {
        super(new DateRange(null, null), adapter);
    }
    /**
     * Adds a date to the current selection. In the case of a date range selection, the added date
     * fills in the next `null` value in the range. If both the start and the end already have a date,
     * the selection is reset so that the given date is the new `start` and the `end` is null.
     */
    add(date) {
        let { start, end } = this.selection;
        if (start == null) {
            start = date;
        }
        else if (end == null) {
            end = date;
        }
        else {
            start = date;
            end = null;
        }
        super.updateSelection(new DateRange(start, end), this);
    }
    /** Checks whether the current selection is valid. */
    isValid() {
        const { start, end } = this.selection;
        // Empty ranges are valid.
        if (start == null && end == null) {
            return true;
        }
        // Complete ranges are only valid if both dates are valid and the start is before the end.
        if (start != null && end != null) {
            return this._isValidDateInstance(start) && this._isValidDateInstance(end) &&
                this._adapter.compareDate(start, end) <= 0;
        }
        // Partial ranges are valid if the start/end is valid.
        return (start == null || this._isValidDateInstance(start)) &&
            (end == null || this._isValidDateInstance(end));
    }
    /**
     * Checks whether the current selection is complete. In the case of a date range selection, this
     * is true if the current selection has a non-null `start` and `end`.
     */
    isComplete() {
        return this.selection.start != null && this.selection.end != null;
    }
    /** Clones the selection model. */
    clone() {
        const clone = new MatRangeDateSelectionModel(this._adapter);
        clone.updateSelection(this.selection, this);
        return clone;
    }
}
MatRangeDateSelectionModel.ɵfac = function MatRangeDateSelectionModel_Factory(t) { return new (t || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter)); };
MatRangeDateSelectionModel.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatRangeDateSelectionModel, factory: MatRangeDateSelectionModel.ɵfac });
MatRangeDateSelectionModel.ctorParameters = () => [
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRangeDateSelectionModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }]; }, null); })();
/** @docs-private */
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
    return parent || new MatSingleDateSelectionModel(adapter);
}
/**
 * Used to provide a single selection model to a component.
 * @docs-private
 */
const MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
    provide: MatDateSelectionModel,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
    useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY,
};
/** @docs-private */
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
    return parent || new MatRangeDateSelectionModel(adapter);
}
/**
 * Used to provide a range selection model to a component.
 * @docs-private
 */
const MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
    provide: MatDateSelectionModel,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
    useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY,
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token used to customize the date range selection behavior. */
const MAT_DATE_RANGE_SELECTION_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_SELECTION_STRATEGY');
/** Provides the default date range selection behavior. */
class DefaultMatCalendarRangeStrategy {
    constructor(_dateAdapter) {
        this._dateAdapter = _dateAdapter;
    }
    selectionFinished(date, currentRange) {
        let { start, end } = currentRange;
        if (start == null) {
            start = date;
        }
        else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
            end = date;
        }
        else {
            start = date;
            end = null;
        }
        return new DateRange(start, end);
    }
    createPreview(activeDate, currentRange) {
        let start = null;
        let end = null;
        if (currentRange.start && !currentRange.end && activeDate) {
            start = currentRange.start;
            end = activeDate;
        }
        return new DateRange(start, end);
    }
}
DefaultMatCalendarRangeStrategy.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(t) { return new (t || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter)); };
DefaultMatCalendarRangeStrategy.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefaultMatCalendarRangeStrategy, factory: DefaultMatCalendarRangeStrategy.ɵfac });
DefaultMatCalendarRangeStrategy.ctorParameters = () => [
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultMatCalendarRangeStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }]; }, null); })();
/** @docs-private */
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
    return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
/** @docs-private */
const MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MAT_DATE_RANGE_SELECTION_STRATEGY], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
    useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
class MatMonthView {
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rangeStrategy = _rangeStrategy;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** Emits when a new date is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when any date is selected. */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        this._activeDate = this._dateAdapter.today();
    }
    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     */
    get activeDate() { return this._activeDate; }
    set activeDate(value) {
        const oldActiveDate = this._activeDate;
        const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
            this._init();
        }
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setRanges(this._selected);
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null))
            .subscribe(() => this._init());
    }
    ngOnChanges(changes) {
        const comparisonChange = changes['comparisonStart'] || changes['comparisonEnd'];
        if (comparisonChange && !comparisonChange.firstChange) {
            this._setRanges(this.selected);
        }
    }
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new date is selected. */
    _dateSelected(event) {
        const date = event.value;
        const selectedYear = this._dateAdapter.getYear(this.activeDate);
        const selectedMonth = this._dateAdapter.getMonth(this.activeDate);
        const selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
        let rangeStartDate;
        let rangeEndDate;
        if (this._selected instanceof DateRange) {
            rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
            rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
        }
        else {
            rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
        }
        if (rangeStartDate !== date || rangeEndDate !== date) {
            this.selectedChange.emit(selectedDate);
        }
        this._userSelection.emit({ value: selectedDate, event: event.event });
        this._previewStart = this._previewEnd = null;
        this._changeDetectorRef.markForCheck();
    }
    /** Handles keydown events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        const oldActiveDate = this._activeDate;
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate)));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                    this._dateSelected({ value: this._dateAdapter.getDate(this._activeDate), event });
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE:
                // Abort the current range selection if the user presses escape mid-selection.
                if (this._previewEnd != null && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) {
                    this._previewStart = this._previewEnd = null;
                    this.selectedChange.emit(null);
                    this._userSelection.emit({ value: null, event });
                    event.preventDefault();
                    event.stopPropagation(); // Prevents the overlay from closing.
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Initializes this month view. */
    _init() {
        this._setRanges(this.selected);
        this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
        this._monthLabel = this._dateFormats.display.monthLabel
            ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel)
            : this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                .toLocaleUpperCase();
        let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._initWeekdays();
        this._createWeekCells();
        this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(movePreview) {
        this._matCalendarBody._focusActiveCell(movePreview);
    }
    /** Called when the user has activated a new cell and the preview needs to be updated. */
    _previewChanged({ event, value: cell }) {
        if (this._rangeStrategy) {
            // We can assume that this will be a range, because preview
            // events aren't fired for single date selections.
            const value = cell ? cell.rawValue : null;
            const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
            this._previewStart = this._getCellCompareValue(previewRange.start);
            this._previewEnd = this._getCellCompareValue(previewRange.end);
            // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
            // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
            // when navigating one month back using the keyboard which will cause this handler
            // to throw a "changed after checked" error when updating the preview state.
            this._changeDetectorRef.detectChanges();
        }
    }
    /** Initializes the weekdays. */
    _initWeekdays() {
        const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
        const narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
        const longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        let weekdays = longWeekdays.map((long, i) => {
            return { long, narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    }
    /** Creates MatCalendarCells for the dates in this month. */
    _createWeekCells() {
        const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
        const dateNames = this._dateAdapter.getDateNames();
        this._weeks = [[]];
        for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            const enabled = this._shouldEnableDate(date);
            const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            const cellClasses = this.dateClass ? this.dateClass(date, 'month') : undefined;
            this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
        }
    }
    /** Date filter for the month */
    _shouldEnableDate(date) {
        return !!date &&
            (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
            (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) &&
            (!this.dateFilter || this.dateFilter(date));
    }
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    _getDateInCurrentMonth(date) {
        return date && this._hasSameMonthAndYear(date, this.activeDate) ?
            this._dateAdapter.getDate(date) : null;
    }
    /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
    _hasSameMonthAndYear(d1, d2) {
        return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
            this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    }
    /** Gets the value that will be used to one cell to another. */
    _getCellCompareValue(date) {
        if (date) {
            // We use the time since the Unix epoch to compare dates in this view, rather than the
            // cell values, because we need to support ranges that span across multiple months/years.
            const year = this._dateAdapter.getYear(date);
            const month = this._dateAdapter.getMonth(date);
            const day = this._dateAdapter.getDate(date);
            return new Date(year, month, day).getTime();
        }
        return null;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the current range based on a model value. */
    _setRanges(selectedValue) {
        if (selectedValue instanceof DateRange) {
            this._rangeStart = this._getCellCompareValue(selectedValue.start);
            this._rangeEnd = this._getCellCompareValue(selectedValue.end);
            this._isRange = true;
        }
        else {
            this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
            this._isRange = false;
        }
        this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
        this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
    }
}
MatMonthView.ɵfac = function MatMonthView_Factory(t) { return new (t || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8)); };
MatMonthView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatMonthView, selectors: [["mat-month-view"]], viewQuery: function MatMonthView_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection", activeDateChange: "activeDateChange" }, exportAs: ["matMonthView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 13, consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", "colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "selectedValueChange", "previewChange", "keydown"], ["scope", "col"], [1, "mat-calendar-abbr"]], template: function MatMonthView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatMonthView_th_3_Template, 3, 3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_6_listener($event) { return ctx._dateSelected($event); })("previewChange", function MatMonthView_Template_tbody_previewChange_6_listener($event) { return ctx._previewChanged($event); })("keydown", function MatMonthView_Template_tbody_keydown_6_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._weekdays);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, MatCalendarBody], encapsulation: 2, changeDetection: 0 });
MatMonthView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_RANGE_SELECTION_STRATEGY,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
MatMonthView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatCalendarBody,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMonthView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-month-view',
                template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <!-- For the day-of-the-week column header, we use an `<abbr>` element because VoiceOver\n           ignores the `aria-label`. ChromeVox, however, does not read the full name\n           for the `<abbr>`, so we still set `aria-label` on the header element. -->\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">\n        <abbr class=\"mat-calendar-abbr\" [attr.title]=\"day.long\">{{day.narrow}}</abbr>\n      </th>\n    </tr>\n    <tr><th aria-hidden=\"true\" class=\"mat-calendar-table-header-divider\" colspan=\"7\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [startValue]=\"_rangeStart!\"\n         [endValue]=\"_rangeEnd!\"\n         [comparisonStart]=\"_comparisonRangeStart\"\n         [comparisonEnd]=\"_comparisonRangeEnd\"\n         [previewStart]=\"_previewStart\"\n         [previewEnd]=\"_previewEnd\"\n         [isRange]=\"_isRange\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (previewChange)=\"_previewChanged($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                exportAs: 'matMonthView',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatCalendarBody]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const yearsPerPage = 24;
const yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * @docs-private
 */
class MatMultiYearView {
    constructor(_changeDetectorRef, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** Emits when a new year is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits the selected year. This doesn't imply a change on the selected date */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._activeDate = this._dateAdapter.today();
    }
    /** The date to display in this multi-year view (everything other than the year is ignored). */
    get activeDate() { return this._activeDate; }
    set activeDate(value) {
        let oldActiveDate = this._activeDate;
        const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
            this._init();
        }
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setSelectedYear(value);
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null))
            .subscribe(() => this._init());
    }
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /** Initializes this multi-year view. */
    _init() {
        this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
        // We want a range years such that we maximize the number of
        // enabled dates visible at once. This prevents issues where the minimum year
        // is the last item of a page OR the maximum year is the first item of a page.
        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view.
        const activeYear = this._dateAdapter.getYear(this._activeDate);
        const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
        this._years = [];
        for (let i = 0, row = []; i < yearsPerPage; i++) {
            row.push(minYearOfPage + i);
            if (row.length == yearsPerRow) {
                this._years.push(row.map(year => this._createCellForYear(year)));
                row = [];
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /** Handles when a new year is selected. */
    _yearSelected(event) {
        const year = event.value;
        this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
        let month = this._dateAdapter.getMonth(this.activeDate);
        let daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));
        this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /** Handles keydown events on the calendar body when calendar is in multi-year view. */
    _handleCalendarBodyKeydown(event) {
        const oldActiveDate = this._activeDate;
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
                this._yearSelected({ value: this._dateAdapter.getYear(this._activeDate), event });
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    _getActiveCell() {
        return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
    }
    /** Creates an MatCalendarCell for the given year. */
    _createCellForYear(year) {
        const date = this._dateAdapter.createDate(year, 0, 1);
        const yearName = this._dateAdapter.getYearName(date);
        const cellClasses = this.dateClass ? this.dateClass(date, 'multi-year') : undefined;
        return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
    }
    /** Whether the given year is enabled. */
    _shouldEnableYear(year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this._dateAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this._dateAdapter.getYear(this.minDate))) {
            return false;
        }
        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }
        const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
        // If any date in the year is enabled count the year as enabled.
        for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-highlighted year based on a model value. */
    _setSelectedYear(value) {
        this._selectedYear = null;
        if (value instanceof DateRange) {
            const displayValue = value.start || value.end;
            if (displayValue) {
                this._selectedYear = this._dateAdapter.getYear(displayValue);
            }
        }
        else if (value) {
            this._selectedYear = this._dateAdapter.getYear(value);
        }
    }
}
MatMultiYearView.ɵfac = function MatMultiYearView_Factory(t) { return new (t || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8)); };
MatMultiYearView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatMultiYearView, selectors: [["mat-multi-year-view"]], viewQuery: function MatMultiYearView_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", activeDateChange: "activeDateChange" }, exportAs: ["matMultiYearView"], decls: 5, vars: 7, consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]], template: function MatMultiYearView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) { return ctx._yearSelected($event); })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
    } }, directives: [MatCalendarBody], encapsulation: 2, changeDetection: 0 });
MatMultiYearView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
MatMultiYearView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatCalendarBody,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMultiYearView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-multi-year-view',
                template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead aria-hidden=\"true\" class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [startValue]=\"_selectedYear!\"\n         [endValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                exportAs: 'matMultiYearView',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatCalendarBody]
        }] }); })();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
    const year1 = dateAdapter.getYear(date1);
    const year2 = dateAdapter.getYear(date2);
    const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
    return Math.floor((year1 - startingYear) / yearsPerPage) ===
        Math.floor((year2 - startingYear) / yearsPerPage);
}
/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
    const activeYear = dateAdapter.getYear(activeDate);
    return euclideanModulo((activeYear - getStartingYear(dateAdapter, minDate, maxDate)), yearsPerPage);
}
/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */
function getStartingYear(dateAdapter, minDate, maxDate) {
    let startingYear = 0;
    if (maxDate) {
        const maxYear = dateAdapter.getYear(maxDate);
        startingYear = maxYear - yearsPerPage + 1;
    }
    else if (minDate) {
        startingYear = dateAdapter.getYear(minDate);
    }
    return startingYear;
}
/** Gets remainder that is non-negative, even if first number is negative */
function euclideanModulo(a, b) {
    return (a % b + b) % b;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
class MatYearView {
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** Emits when a new month is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits the selected month. This doesn't imply a change on the selected date */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        this._activeDate = this._dateAdapter.today();
    }
    /** The date to display in this year view (everything other than the year is ignored). */
    get activeDate() { return this._activeDate; }
    set activeDate(value) {
        let oldActiveDate = this._activeDate;
        const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
            this._init();
        }
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setSelectedMonth(value);
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null))
            .subscribe(() => this._init());
    }
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new month is selected. */
    _monthSelected(event) {
        const month = event.value;
        const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
        this.monthSelected.emit(normalizedDate);
        const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
        this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /** Handles keydown events on the calendar body when calendar is in year view. */
    _handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        const oldActiveDate = this._activeDate;
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
                this._monthSelected({ value: this._dateAdapter.getMonth(this._activeDate), event });
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Initializes this year view. */
    _init() {
        this._setSelectedMonth(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
        this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
        let monthNames = this._dateAdapter.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(row => row.map(month => this._createCellForMonth(month, monthNames[month])));
        this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
    }
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    _getMonthInCurrentYear(date) {
        return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ?
            this._dateAdapter.getMonth(date) : null;
    }
    /** Creates an MatCalendarCell for the given month. */
    _createCellForMonth(month, monthName) {
        const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
        const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
        const cellClasses = this.dateClass ? this.dateClass(date, 'year') : undefined;
        return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
    }
    /** Whether the given month is enabled. */
    _shouldEnableMonth(month) {
        const activeYear = this._dateAdapter.getYear(this.activeDate);
        if (month === undefined || month === null ||
            this._isYearAndMonthAfterMaxDate(activeYear, month) ||
            this._isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
        }
        if (!this.dateFilter) {
            return true;
        }
        const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
        // If any date in the month is enabled count the month as enabled.
        for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     */
    _isYearAndMonthAfterMaxDate(year, month) {
        if (this.maxDate) {
            const maxYear = this._dateAdapter.getYear(this.maxDate);
            const maxMonth = this._dateAdapter.getMonth(this.maxDate);
            return year > maxYear || (year === maxYear && month > maxMonth);
        }
        return false;
    }
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     */
    _isYearAndMonthBeforeMinDate(year, month) {
        if (this.minDate) {
            const minYear = this._dateAdapter.getYear(this.minDate);
            const minMonth = this._dateAdapter.getMonth(this.minDate);
            return year < minYear || (year === minYear && month < minMonth);
        }
        return false;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-selected month based on a model value. */
    _setSelectedMonth(value) {
        if (value instanceof DateRange) {
            this._selectedMonth = this._getMonthInCurrentYear(value.start) ||
                this._getMonthInCurrentYear(value.end);
        }
        else {
            this._selectedMonth = this._getMonthInCurrentYear(value);
        }
    }
}
MatYearView.ɵfac = function MatYearView_Factory(t) { return new (t || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8)); };
MatYearView.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatYearView, selectors: [["mat-year-view"]], viewQuery: function MatYearView_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", monthSelected: "monthSelected", activeDateChange: "activeDateChange" }, exportAs: ["matYearView"], decls: 5, vars: 9, consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]], template: function MatYearView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) { return ctx._monthSelected($event); })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
    } }, directives: [MatCalendarBody], encapsulation: 2, changeDetection: 0 });
MatYearView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
MatYearView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatCalendarBody,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatYearView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-year-view',
                template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead aria-hidden=\"true\" class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [startValue]=\"_selectedMonth!\"\n         [endValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                exportAs: 'matYearView',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatCalendarBody]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter used to generate unique IDs. */
let uniqueId = 0;
/** Default header for MatCalendar */
class MatCalendarHeader {
    constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
        this._intl = _intl;
        this.calendar = calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._buttonDescriptionId = `mat-calendar-button-${uniqueId++}`;
        this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
    }
    /** The label for the current calendar view. */
    get periodButtonText() {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter
                .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYearName(this.calendar.activeDate);
        }
        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view, and the last year is
        // just yearsPerPage - 1 away.
        const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
        const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
        const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
        const minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
        const maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
        return this._intl.formatYearRange(minYearName, maxYearName);
    }
    get periodButtonLabel() {
        return this.calendar.currentView == 'month' ?
            this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
    }
    /** The label for the previous button. */
    get prevButtonLabel() {
        return {
            'month': this._intl.prevMonthLabel,
            'year': this._intl.prevYearLabel,
            'multi-year': this._intl.prevMultiYearLabel
        }[this.calendar.currentView];
    }
    /** The label for the next button. */
    get nextButtonLabel() {
        return {
            'month': this._intl.nextMonthLabel,
            'year': this._intl.nextYearLabel,
            'multi-year': this._intl.nextMultiYearLabel
        }[this.calendar.currentView];
    }
    /** Handles user clicks on the period label. */
    currentPeriodClicked() {
        this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
    }
    /** Handles user clicks on the previous button. */
    previousClicked() {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
    }
    /** Handles user clicks on the next button. */
    nextClicked() {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
    }
    /** Whether the previous period button is enabled. */
    previousEnabled() {
        if (!this.calendar.minDate) {
            return true;
        }
        return !this.calendar.minDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
    }
    /** Whether the next period button is enabled. */
    nextEnabled() {
        return !this.calendar.maxDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
    }
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    _isSameView(date1, date2) {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
        }
        // Otherwise we are in 'multi-year' view.
        return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
    }
}
MatCalendarHeader.ɵfac = function MatCalendarHeader_Factory(t) { return new (t || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MatCalendarHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCalendarHeader, selectors: [["mat-calendar-header"]], exportAs: ["matCalendarHeader"], ngContentSelectors: _c1, decls: 11, vars: 10, consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mat-calendar-period-button", 3, "click"], ["viewBox", "0 0 10 5", "focusable", "false", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"]], template: function MatCalendarHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_2_listener() { return ctx.currentPeriodClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polygon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_9_listener() { return ctx.previousClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_10_listener() { return ctx.nextClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._buttonDescriptionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx._buttonDescriptionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.periodButtonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView !== "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.CdkAriaLive], encapsulation: 2, changeDetection: 0 });
MatCalendarHeader.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: MatCalendar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar),] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendarHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-calendar-header',
                template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            [attr.aria-describedby]=\"_buttonDescriptionId\"\n            cdkAriaLive=\"polite\">\n      <span [attr.id]=\"_buttonDescriptionId\">{{periodButtonText}}</span>\n      <svg class=\"mat-calendar-arrow\" [class.mat-calendar-invert]=\"calendar.currentView !== 'month'\"\n           viewBox=\"0 0 10 5\" focusable=\"false\">\n           <polygon points=\"0,0 5,5 10,0\"/>\n      </svg>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n",
                exportAs: 'matCalendarHeader',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MatDatepickerIntl }, { type: MatCalendar, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar)]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, null); })();
/** A calendar that is used as part of the datepicker. */
class MatCalendar {
    constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this._moveFocusOnNextTick = false;
        /** Whether the calendar should be started in month or year view. */
        this.startView = 'month';
        /** Emits when the currently selected date changes. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits when the current view changes.
         */
        this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
        /** Emits when any date is selected. */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        this._intlChanges = _intl.changes.subscribe(() => {
            _changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
    }
    /** A date representing the period (month or year) to start the calendar in. */
    get startAt() { return this._startAt; }
    set startAt(value) {
        this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    get activeDate() { return this._clampedActiveDate; }
    set activeDate(value) {
        this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
        this.stateChanges.next();
        this._changeDetectorRef.markForCheck();
    }
    /** Whether the calendar is in month view. */
    get currentView() { return this._currentView; }
    set currentView(value) {
        const viewChangedResult = this._currentView !== value ? value : null;
        this._currentView = value;
        this._moveFocusOnNextTick = true;
        this._changeDetectorRef.markForCheck();
        if (viewChangedResult) {
            this.viewChanged.emit(viewChangedResult);
        }
    }
    ngAfterContentInit() {
        this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.ComponentPortal(this.headerComponent || MatCalendarHeader);
        this.activeDate = this.startAt || this._dateAdapter.today();
        // Assign to the private property since we don't want to move focus on init.
        this._currentView = this.startView;
    }
    ngAfterViewChecked() {
        if (this._moveFocusOnNextTick) {
            this._moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    }
    ngOnDestroy() {
        this._intlChanges.unsubscribe();
        this.stateChanges.complete();
    }
    ngOnChanges(changes) {
        const change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];
        if (change && !change.firstChange) {
            const view = this._getCurrentViewComponent();
            if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                this._changeDetectorRef.detectChanges();
                view._init();
            }
        }
        this.stateChanges.next();
    }
    /** Focuses the active date. */
    focusActiveCell() {
        this._getCurrentViewComponent()._focusActiveCell(false);
    }
    /** Updates today's date after an update of the active date */
    updateTodaysDate() {
        this._getCurrentViewComponent()._init();
    }
    /** Handles date selection in the month view. */
    _dateSelected(event) {
        const date = event.value;
        if (this.selected instanceof DateRange ||
            (date && !this._dateAdapter.sameDate(date, this.selected))) {
            this.selectedChange.emit(date);
        }
        this._userSelection.emit(event);
    }
    /** Handles year selection in the multiyear view. */
    _yearSelectedInMultiYearView(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /** Handles month selection in the year view. */
    _monthSelectedInYearView(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /** Handles year/month selection in the multi-year/year views. */
    _goToDateInView(date, view) {
        this.activeDate = date;
        this.currentView = view;
    }
    /** Returns the component instance that corresponds to the current calendar view. */
    _getCurrentViewComponent() {
        // The return type is explicitly written as a union to ensure that the Closure compiler does
        // not optimize calls to _init(). Without the explict return type, TypeScript narrows it to
        // only the first component type. See https://github.com/angular/components/issues/22996.
        return this.monthView || this.yearView || this.multiYearView;
    }
}
MatCalendar.ɵfac = function MatCalendar_Factory(t) { return new (t || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MatCalendar.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatCalendar, selectors: [["mat-calendar"]], viewQuery: function MatCalendar_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMonthView, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatYearView, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMultiYearView, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
    } }, hostAttrs: [1, "mat-calendar"], inputs: { startView: "startView", startAt: "startAt", selected: "selected", minDate: "minDate", maxDate: "maxDate", headerComponent: "headerComponent", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", monthSelected: "monthSelected", viewChanged: "viewChanged", _userSelection: "_userSelection" }, exportAs: ["matCalendar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 5, consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange"]], template: function MatCalendar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCalendar_mat_month_view_2_Template, 1, 8, "mat-month-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatCalendar_mat_year_view_3_Template, 1, 6, "mat-year-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatCalendar_mat_multi_year_view_4_Template, 1, 6, "mat-multi-year-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.currentView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multi-year");
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.CdkPortalOutlet, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.CdkMonitorFocus, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, MatMonthView, MatYearView, MatMultiYearView], styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}.mat-calendar-abbr{text-decoration:none}\n"], encapsulation: 2, changeDetection: 0 });
MatCalendar.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
MatCalendar.propDecorators = {
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    viewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    monthView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatMonthView,] }],
    yearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatYearView,] }],
    multiYearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatMultiYearView,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-calendar',
                template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      [comparisonStart]=\"comparisonStart\"\n      [comparisonEnd]=\"comparisonEnd\"\n      (_userSelection)=\"_dateSelected($event)\">\n  </mat-month-view>\n\n  <mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </mat-year-view>\n\n  <mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </mat-multi-year-view>\n</div>\n",
                host: {
                    'class': 'mat-calendar'
                },
                exportAs: 'matCalendar',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
                styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}.mat-calendar-abbr{text-decoration:none}\n"]
            }]
    }], function () { return [{ type: MatDatepickerIntl }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], viewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], monthView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatMonthView]
        }], yearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatYearView]
        }], multiYearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatMultiYearView]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material datepicker.
 * @docs-private
 */
const matDatepickerAnimations = {
    /** Transforms the height of the datepicker's calendar. */
    transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('transformPanel', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => enter-dropdown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 0, transform: 'scale(1, 0.8)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 1, transform: 'scale(1, 1)' })
        ]))),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => enter-dialog', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 0, transform: 'scale(0.7)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ transform: 'none', opacity: 1 })
        ]))),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 0 })))
    ]),
    /** Fades in the content of the calendar. */
    fadeInCalendar: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('fadeInCalendar', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 0 })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ opacity: 1 })),
        // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate a unique ID for each datepicker instance. */
let datepickerUid = 0;
/** Injection token that determines the scroll handling while the calendar is open. */
const MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-datepicker-scroll-strategy');
/** @docs-private */
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_DATEPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay],
    useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY,
};
// Boilerplate for applying mixins to MatDatepickerContent.
/** @docs-private */
const _MatDatepickerContentBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.mixinColor)(class {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
});
/**
 * Component used as the content for the datepicker overlay. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the overlay that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
class MatDatepickerContent extends _MatDatepickerContentBase {
    constructor(elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, intl) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._globalModel = _globalModel;
        this._dateAdapter = _dateAdapter;
        this._rangeSelectionStrategy = _rangeSelectionStrategy;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        /** Emits when an animation has finished. */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /** Portal with projected action buttons. */
        this._actionsPortal = null;
        this._closeButtonText = intl.closeCalendarLabel;
    }
    ngOnInit() {
        // If we have actions, clone the model so that we have the ability to cancel the selection,
        // otherwise update the global model directly. Note that we want to assign this as soon as
        // possible, but `_actionsPortal` isn't available in the constructor so we do it in `ngOnInit`.
        this._model = this._actionsPortal ? this._globalModel.clone() : this._globalModel;
        this._animationState = this.datepicker.touchUi ? 'enter-dialog' : 'enter-dropdown';
    }
    ngAfterViewInit() {
        this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
            this._changeDetectorRef.markForCheck();
        }));
        this._calendar.focusActiveCell();
    }
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        this._animationDone.complete();
    }
    _handleUserSelection(event) {
        const selection = this._model.selection;
        const value = event.value;
        const isRange = selection instanceof DateRange;
        // If we're selecting a range and we have a selection strategy, always pass the value through
        // there. Otherwise don't assign null values to the model, unless we're selecting a range.
        // A null value when picking a range means that the user cancelled the selection (e.g. by
        // pressing escape), whereas when selecting a single value it means that the value didn't
        // change. This isn't very intuitive, but it's here for backwards-compatibility.
        if (isRange && this._rangeSelectionStrategy) {
            const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
            this._model.updateSelection(newSelection, this);
        }
        else if (value && (isRange ||
            !this._dateAdapter.sameDate(value, selection))) {
            this._model.add(value);
        }
        // Delegate closing the overlay to the actions.
        if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
            this.datepicker.close();
        }
    }
    _startExitAnimation() {
        this._animationState = 'void';
        this._changeDetectorRef.markForCheck();
    }
    _getSelected() {
        return this._model.selection;
    }
    /** Applies the current pending selection to the global model. */
    _applyPendingSelection() {
        if (this._model !== this._globalModel) {
            this._globalModel.updateSelection(this._model.selection, this);
        }
    }
}
MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) { return new (t || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl)); };
MatDatepickerContent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDatepickerContent, selectors: [["mat-datepicker-content"]], viewQuery: function MatDatepickerContent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendar, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
    } }, hostAttrs: [1, "mat-datepicker-content"], hostVars: 3, hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler() { return ctx._animationDone.next(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["matDatepickerContent"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 20, consts: [["cdkTrapFocus", "", 1, "mat-datepicker-content-container"], [3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "yearSelected", "monthSelected", "viewChanged", "_userSelection"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "color", "focus", "blur", "click"]], template: function MatDatepickerContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) { return ctx.datepicker._selectYear($event); })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) { return ctx.datepicker._selectMonth($event); })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) { return ctx.datepicker._viewChanged($event); })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) { return ctx._handleUserSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatDatepickerContent_Template_button_focus_3_listener() { return ctx._closeButtonFocused = true; })("blur", function MatDatepickerContent_Template_button_blur_3_listener() { return ctx._closeButtonFocused = false; })("click", function MatDatepickerContent_Template_button_click_3_listener() { return ctx.datepicker.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._actionsPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-visually-hidden", !ctx._closeButtonFocused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color || "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._closeButtonText);
    } }, directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.CdkTrapFocus, MatCalendar, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.CdkPortalOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n"], encapsulation: 2, data: { animation: [
            matDatepickerAnimations.transformPanel,
            matDatepickerAnimations.fadeInCalendar,
        ] }, changeDetection: 0 });
MatDatepickerContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: MatDateSelectionModel },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_RANGE_SELECTION_STRATEGY,] }] },
    { type: MatDatepickerIntl }
];
MatDatepickerContent.propDecorators = {
    _calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [MatCalendar,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-datepicker-content',
                template: "<div\n  cdkTrapFocus\n  class=\"mat-datepicker-content-container\"\n  [class.mat-datepicker-content-container-with-actions]=\"_actionsPortal\">\n  <mat-calendar\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._getMinDate()\"\n    [maxDate]=\"datepicker._getMaxDate()\"\n    [dateFilter]=\"datepicker._getDateFilter()\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"_getSelected()\"\n    [dateClass]=\"datepicker.dateClass\"\n    [comparisonStart]=\"comparisonStart\"\n    [comparisonEnd]=\"comparisonEnd\"\n    [@fadeInCalendar]=\"'enter'\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (viewChanged)=\"datepicker._viewChanged($event)\"\n    (_userSelection)=\"_handleUserSelection($event)\"></mat-calendar>\n\n  <ng-template [cdkPortalOutlet]=\"_actionsPortal\"></ng-template>\n\n  <!-- Invisible close button for screen reader users. -->\n  <button\n    type=\"button\"\n    mat-raised-button\n    [color]=\"color || 'primary'\"\n    class=\"mat-datepicker-close-button\"\n    [class.cdk-visually-hidden]=\"!_closeButtonFocused\"\n    (focus)=\"_closeButtonFocused = true\"\n    (blur)=\"_closeButtonFocused = false\"\n    (click)=\"datepicker.close()\">{{ _closeButtonText }}</button>\n</div>\n",
                host: {
                    'class': 'mat-datepicker-content',
                    '[@transformPanel]': '_animationState',
                    '(@transformPanel.done)': '_animationDone.next()',
                    '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
                },
                animations: [
                    matDatepickerAnimations.transformPanel,
                    matDatepickerAnimations.fadeInCalendar,
                ],
                exportAs: 'matDatepickerContent',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                inputs: ['color'],
                styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: MatDateSelectionModel }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }] }, { type: MatDatepickerIntl }]; }, { _calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [MatCalendar]
        }] }); })();
/** Base class for a datepicker. */
class MatDatepickerBase {
    constructor(
    /**
     * @deprecated `_dialog` parameter is no longer being used and it will be removed.
     * @breaking-change 13.0.0
     */
    _dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, 
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 13.0.0
     */
    _document, _model) {
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._model = _model;
        this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** The view that the calendar should start in. */
        this.startView = 'month';
        this._touchUi = false;
        /** Preferred position of the datepicker in the X axis. */
        this.xPosition = 'start';
        /** Preferred position of the datepicker in the Y axis. */
        this.yPosition = 'below';
        this._restoreFocus = true;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Emits when the current view changes.
         */
        this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
        /** Emits when the datepicker has been opened. */
        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when the datepicker has been closed. */
        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._opened = false;
        /** The id for the datepicker calendar. */
        this.id = `mat-datepicker-${datepickerUid++}`;
        /** The element that was focused before the datepicker was opened. */
        this._focusedElementBeforeOpen = null;
        /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
        this._backdropHarnessClass = `${this.id}-backdrop`;
        /** Emits when the datepicker's state changes. */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._scrollStrategy = scrollStrategy;
    }
    /** The date to open the calendar to initially. */
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
    }
    set startAt(value) {
        this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** Color palette to use on the datepicker's calendar. */
    get color() {
        return this._color ||
            (this.datepickerInput ? this.datepickerInput.getThemePalette() : undefined);
    }
    set color(value) {
        this._color = value;
    }
    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a dropdown and elements have more padding to allow for bigger touch targets.
     */
    get touchUi() { return this._touchUi; }
    set touchUi(value) {
        this._touchUi = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    /** Whether the datepicker pop-up should be disabled. */
    get disabled() {
        return this._disabled === undefined && this.datepickerInput ?
            this.datepickerInput.disabled : !!this._disabled;
    }
    set disabled(value) {
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this.stateChanges.next(undefined);
        }
    }
    /**
     * Whether to restore focus to the previously-focused element when the calendar is closed.
     * Note that automatic focus restoration is an accessibility feature and it is recommended that
     * you provide your own equivalent, if you decide to turn it off.
     */
    get restoreFocus() { return this._restoreFocus; }
    set restoreFocus(value) {
        this._restoreFocus = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    /**
     * Classes to be passed to the date picker panel.
     * Supports string and string array values, similar to `ngClass`.
     */
    get panelClass() { return this._panelClass; }
    set panelClass(value) {
        this._panelClass = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceStringArray)(value);
    }
    /** Whether the calendar is open. */
    get opened() { return this._opened; }
    set opened(value) {
        (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value) ? this.open() : this.close();
    }
    /** The minimum selectable date. */
    _getMinDate() {
        return this.datepickerInput && this.datepickerInput.min;
    }
    /** The maximum selectable date. */
    _getMaxDate() {
        return this.datepickerInput && this.datepickerInput.max;
    }
    _getDateFilter() {
        return this.datepickerInput && this.datepickerInput.dateFilter;
    }
    ngOnChanges(changes) {
        const positionChange = changes['xPosition'] || changes['yPosition'];
        if (positionChange && !positionChange.firstChange && this._overlayRef) {
            const positionStrategy = this._overlayRef.getConfig().positionStrategy;
            if (positionStrategy instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.FlexibleConnectedPositionStrategy) {
                this._setConnectedPositions(positionStrategy);
                if (this.opened) {
                    this._overlayRef.updatePosition();
                }
            }
        }
        this.stateChanges.next(undefined);
    }
    ngOnDestroy() {
        this._destroyOverlay();
        this.close();
        this._inputStateChanges.unsubscribe();
        this.stateChanges.complete();
    }
    /** Selects the given date */
    select(date) {
        this._model.add(date);
    }
    /** Emits the selected year in multiyear view */
    _selectYear(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /** Emits selected month in year view */
    _selectMonth(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /** Emits changed view */
    _viewChanged(view) {
        this.viewChanged.emit(view);
    }
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     * @returns Selection model that the input should hook itself up to.
     */
    registerInput(input) {
        if (this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('A MatDatepicker can only be associated with a single input.');
        }
        this._inputStateChanges.unsubscribe();
        this.datepickerInput = input;
        this._inputStateChanges =
            input.stateChanges.subscribe(() => this.stateChanges.next(undefined));
        return this._model;
    }
    /**
     * Registers a portal containing action buttons with the datepicker.
     * @param portal Portal to be registered.
     */
    registerActions(portal) {
        if (this._actionsPortal && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('A MatDatepicker can only be associated with a single actions row.');
        }
        this._actionsPortal = portal;
    }
    /**
     * Removes a portal containing action buttons from the datepicker.
     * @param portal Portal to be removed.
     */
    removeActions(portal) {
        if (portal === this._actionsPortal) {
            this._actionsPortal = null;
        }
    }
    /** Open the calendar. */
    open() {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Attempted to open an MatDatepicker with no associated input.');
        }
        this._focusedElementBeforeOpen = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__._getFocusedElementPierceShadowDom)();
        this._openOverlay();
        this._opened = true;
        this.openedStream.emit();
    }
    /** Close the calendar. */
    close() {
        if (!this._opened) {
            return;
        }
        if (this._componentRef) {
            const instance = this._componentRef.instance;
            instance._startExitAnimation();
            instance._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => this._destroyOverlay());
        }
        const completeClose = () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this._opened) {
                this._opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
            }
        };
        if (this._restoreFocus && this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    }
    /** Applies the current pending selection on the overlay to the model. */
    _applyPendingSelection() {
        var _a, _b;
        (_b = (_a = this._componentRef) === null || _a === void 0 ? void 0 : _a.instance) === null || _b === void 0 ? void 0 : _b._applyPendingSelection();
    }
    /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
    _forwardContentValues(instance) {
        instance.datepicker = this;
        instance.color = this.color;
        instance._actionsPortal = this._actionsPortal;
    }
    /** Opens the overlay with the calendar. */
    _openOverlay() {
        this._destroyOverlay();
        const isDialog = this.touchUi;
        const labelId = this.datepickerInput.getOverlayLabelId();
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.ComponentPortal(MatDatepickerContent, this._viewContainerRef);
        const overlayRef = this._overlayRef = this._overlay.create(new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayConfig({
            positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
            hasBackdrop: true,
            backdropClass: [
                isDialog ? 'cdk-overlay-dark-backdrop' : 'mat-overlay-transparent-backdrop',
                this._backdropHarnessClass
            ],
            direction: this._dir,
            scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
            panelClass: `mat-datepicker-${isDialog ? 'dialog' : 'popup'}`,
        }));
        const overlayElement = overlayRef.overlayElement;
        overlayElement.setAttribute('role', 'dialog');
        if (labelId) {
            overlayElement.setAttribute('aria-labelledby', labelId);
        }
        if (isDialog) {
            overlayElement.setAttribute('aria-modal', 'true');
        }
        this._getCloseStream(overlayRef).subscribe(event => {
            if (event) {
                event.preventDefault();
            }
            this.close();
        });
        this._componentRef = overlayRef.attach(portal);
        this._forwardContentValues(this._componentRef.instance);
        // Update the position once the calendar has rendered. Only relevant in dropdown mode.
        if (!isDialog) {
            this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => overlayRef.updatePosition());
        }
    }
    /** Destroys the current overlay. */
    _destroyOverlay() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = this._componentRef = null;
        }
    }
    /** Gets a position strategy that will open the calendar as a dropdown. */
    _getDialogStrategy() {
        return this._overlay.position().global().centerHorizontally().centerVertically();
    }
    /** Gets a position strategy that will open the calendar as a dropdown. */
    _getDropdownStrategy() {
        const strategy = this._overlay.position()
            .flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mat-datepicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition();
        return this._setConnectedPositions(strategy);
    }
    /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
    _setConnectedPositions(strategy) {
        const primaryX = this.xPosition === 'end' ? 'end' : 'start';
        const secondaryX = primaryX === 'start' ? 'end' : 'start';
        const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
        const secondaryY = primaryY === 'top' ? 'bottom' : 'top';
        return strategy.withPositions([
            {
                originX: primaryX,
                originY: secondaryY,
                overlayX: primaryX,
                overlayY: primaryY
            },
            {
                originX: primaryX,
                originY: primaryY,
                overlayX: primaryX,
                overlayY: secondaryY
            },
            {
                originX: secondaryX,
                originY: secondaryY,
                overlayX: secondaryX,
                overlayY: primaryY
            },
            {
                originX: secondaryX,
                originY: primaryY,
                overlayX: secondaryX,
                overlayY: secondaryY
            }
        ]);
    }
    /** Gets an observable that will emit when the overlay is supposed to be closed. */
    _getCloseStream(overlayRef) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(event => {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) || (this.datepickerInput &&
                (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW);
        })));
    }
}
MatDatepickerBase.ɵfac = function MatDatepickerBase_Factory(t) { return new (t || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel)); };
MatDatepickerBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerBase, inputs: { startView: "startView", xPosition: "xPosition", yPosition: "yPosition", startAt: "startAt", color: "color", touchUi: "touchUi", disabled: "disabled", restoreFocus: "restoreFocus", panelClass: "panelClass", opened: "opened", calendarHeaderComponent: "calendarHeaderComponent", dateClass: "dateClass" }, outputs: { yearSelected: "yearSelected", monthSelected: "monthSelected", viewChanged: "viewChanged", openedStream: "opened", closedStream: "closed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
MatDatepickerBase.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,] }] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] },
    { type: MatDateSelectionModel }
];
MatDatepickerBase.propDecorators = {
    calendarHeaderComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    touchUi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    xPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    yPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    restoreFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    viewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['opened',] }],
    closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['closed',] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef]
            }] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATEPICKER_SCROLL_STRATEGY]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }, { type: MatDateSelectionModel }]; }, { startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], viewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['opened']
        }], closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['closed']
        }], startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], touchUi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], restoreFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], calendarHeaderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
class MatDatepicker extends MatDatepickerBase {
}
MatDatepicker.ɵfac = /*@__PURE__*/ function () { let ɵMatDatepicker_BaseFactory; return function MatDatepicker_Factory(t) { return (ɵMatDatepicker_BaseFactory || (ɵMatDatepicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDatepicker)))(t || MatDatepicker); }; }();
MatDatepicker.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDatepicker, selectors: [["mat-datepicker"]], exportAs: ["matDatepicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER,
            { provide: MatDatepickerBase, useExisting: MatDatepicker },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function MatDatepicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-datepicker',
                template: '',
                exportAs: 'matDatepicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [
                    MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER,
                    { provide: MatDatepickerBase, useExisting: MatDatepicker },
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */
class MatDatepickerInputEvent {
    constructor(
    /** Reference to the datepicker input component that emitted the event. */
    target, 
    /** Reference to the native input element associated with the datepicker input. */
    targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
/** Base class for datepicker inputs. */
class MatDatepickerInputBase {
    constructor(_elementRef, _dateAdapter, _dateFormats) {
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        /** Emits when a `change` event is fired on this `<input>`. */
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when an `input` event is fired on this `<input>`. */
        this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Emits when the internal state has changed */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this._onTouched = () => { };
        this._validatorOnChange = () => { };
        this._cvaOnChange = () => { };
        this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** The form control validator for whether the input parses. */
        this._parseValidator = () => {
            return this._lastValueValid ?
                null : { 'matDatepickerParse': { 'text': this._elementRef.nativeElement.value } };
        };
        /** The form control validator for the date filter. */
        this._filterValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            return !controlValue || this._matchesFilter(controlValue) ?
                null : { 'matDatepickerFilter': true };
        };
        /** The form control validator for the min date. */
        this._minValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const min = this._getMinDate();
            return (!min || !controlValue ||
                this._dateAdapter.compareDate(min, controlValue) <= 0) ?
                null : { 'matDatepickerMin': { 'min': min, 'actual': controlValue } };
        };
        /** The form control validator for the max date. */
        this._maxValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const max = this._getMaxDate();
            return (!max || !controlValue ||
                this._dateAdapter.compareDate(max, controlValue) >= 0) ?
                null : { 'matDatepickerMax': { 'max': max, 'actual': controlValue } };
        };
        /** Whether the last value set on the input was valid. */
        this._lastValueValid = false;
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
            this._assignValueProgrammatically(this.value);
        });
    }
    /** The value of the input. */
    get value() {
        return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
    }
    set value(value) {
        this._assignValueProgrammatically(value);
    }
    /** Whether the datepicker-input is disabled. */
    get disabled() { return !!this._disabled || this._parentDisabled(); }
    set disabled(value) {
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
        const element = this._elementRef.nativeElement;
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this.stateChanges.next(undefined);
        }
        // We need to null check the `blur` method, because it's undefined during SSR.
        // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
        // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
        // element has been inserted.
        if (newValue && this._isInitialized && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
        }
    }
    /** Gets the base validator functions. */
    _getValidators() {
        return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
    }
    /** Registers a date selection model with the input. */
    _registerModel(model) {
        this._model = model;
        this._valueChangesSubscription.unsubscribe();
        if (this._pendingValue) {
            this._assignValue(this._pendingValue);
        }
        this._valueChangesSubscription = this._model.selectionChanged.subscribe(event => {
            if (this._shouldHandleChangeEvent(event)) {
                const value = this._getValueFromModel(event.selection);
                this._lastValueValid = this._isValidValue(value);
                this._cvaOnChange(value);
                this._onTouched();
                this._formatValue(value);
                this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
                this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
            }
        });
    }
    ngAfterViewInit() {
        this._isInitialized = true;
    }
    ngOnChanges(changes) {
        if (dateInputsHaveChanged(changes, this._dateAdapter)) {
            this.stateChanges.next(undefined);
        }
    }
    ngOnDestroy() {
        this._valueChangesSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this.stateChanges.complete();
    }
    /** @docs-private */
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    /** @docs-private */
    validate(c) {
        return this._validator ? this._validator(c) : null;
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this._assignValueProgrammatically(value);
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _onKeydown(event) {
        const isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW;
        if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._openPopup();
            event.preventDefault();
        }
    }
    _onInput(value) {
        const lastValueWasValid = this._lastValueValid;
        let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
        this._lastValueValid = this._isValidValue(date);
        date = this._dateAdapter.getValidDateOrNull(date);
        if (!this._dateAdapter.sameDate(date, this.value)) {
            this._assignValue(date);
            this._cvaOnChange(date);
            this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
        else {
            // Call the CVA change handler for invalid values
            // since this is what marks the control as dirty.
            if (value && !this.value) {
                this._cvaOnChange(date);
            }
            if (lastValueWasValid !== this._lastValueValid) {
                this._validatorOnChange();
            }
        }
    }
    _onChange() {
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
    /** Handles blur events on the input. */
    _onBlur() {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    }
    /** Formats a value and sets it on the input element. */
    _formatValue(value) {
        this._elementRef.nativeElement.value =
            value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
    }
    /** Assigns a value to the model. */
    _assignValue(value) {
        // We may get some incoming values before the model was
        // assigned. Save the value so that we can assign it later.
        if (this._model) {
            this._assignValueToModel(value);
            this._pendingValue = null;
        }
        else {
            this._pendingValue = value;
        }
    }
    /** Whether a value is considered valid. */
    _isValidValue(value) {
        return !value || this._dateAdapter.isValid(value);
    }
    /**
     * Checks whether a parent control is disabled. This is in place so that it can be overridden
     * by inputs extending this one which can be placed inside of a group that can be disabled.
     */
    _parentDisabled() {
        return false;
    }
    /** Programmatically assigns a value to the input. */
    _assignValueProgrammatically(value) {
        value = this._dateAdapter.deserialize(value);
        this._lastValueValid = this._isValidValue(value);
        value = this._dateAdapter.getValidDateOrNull(value);
        this._assignValue(value);
        this._formatValue(value);
    }
    /** Gets whether a value matches the current date filter. */
    _matchesFilter(value) {
        const filter = this._getDateFilter();
        return !filter || filter(value);
    }
}
MatDatepickerInputBase.ɵfac = function MatDatepickerInputBase_Factory(t) { return new (t || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8)); };
MatDatepickerInputBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerInputBase, inputs: { value: "value", disabled: "disabled" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
MatDatepickerInputBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] }
];
MatDatepickerInputBase.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    dateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerInputBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }]; }, { dateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], dateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * Checks whether the `SimpleChanges` object from an `ngOnChanges`
 * callback has any changes, accounting for date objects.
 */
function dateInputsHaveChanged(changes, adapter) {
    const keys = Object.keys(changes);
    for (let key of keys) {
        const { previousValue, currentValue } = changes[key];
        if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
            if (!adapter.sameDate(previousValue, currentValue)) {
                return true;
            }
        }
        else {
            return true;
        }
    }
    return false;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
const MAT_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
    multi: true
};
/** @docs-private */
const MAT_DATEPICKER_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
    multi: true
};
/** Directive used to connect an input to a MatDatepicker. */
class MatDatepickerInput extends MatDatepickerInputBase {
    constructor(elementRef, dateAdapter, dateFormats, _formField) {
        super(elementRef, dateAdapter, dateFormats);
        this._formField = _formField;
        this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose(super._getValidators());
    }
    /** The datepicker that this input is associated with. */
    set matDatepicker(datepicker) {
        if (datepicker) {
            this._datepicker = datepicker;
            this._closedSubscription = datepicker.closedStream.subscribe(() => this._onTouched());
            this._registerModel(datepicker.registerInput(this));
        }
    }
    /** The minimum valid date. */
    get min() { return this._min; }
    set min(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._min)) {
            this._min = validValue;
            this._validatorOnChange();
        }
    }
    /** The maximum valid date. */
    get max() { return this._max; }
    set max(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._max)) {
            this._max = validValue;
            this._validatorOnChange();
        }
    }
    /** Function that can be used to filter out dates within the datepicker. */
    get dateFilter() { return this._dateFilter; }
    set dateFilter(value) {
        const wasMatchingValue = this._matchesFilter(this.value);
        this._dateFilter = value;
        if (this._matchesFilter(this.value) !== wasMatchingValue) {
            this._validatorOnChange();
        }
    }
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Gets the ID of an element that should be used a description for the calendar overlay. */
    getOverlayLabelId() {
        if (this._formField) {
            return this._formField.getLabelId();
        }
        return this._elementRef.nativeElement.getAttribute('aria-labelledby');
    }
    /** Returns the palette used by the input's form field, if any. */
    getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    /** Gets the value at which the calendar should start. */
    getStartValue() {
        return this.value;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._closedSubscription.unsubscribe();
    }
    /** Opens the associated datepicker. */
    _openPopup() {
        if (this._datepicker) {
            this._datepicker.open();
        }
    }
    _getValueFromModel(modelValue) {
        return modelValue;
    }
    _assignValueToModel(value) {
        if (this._model) {
            this._model.updateSelection(value, this);
        }
    }
    /** Gets the input's minimum date. */
    _getMinDate() {
        return this._min;
    }
    /** Gets the input's maximum date. */
    _getMaxDate() {
        return this._max;
    }
    /** Gets the input's date filtering function. */
    _getDateFilter() {
        return this._dateFilter;
    }
    _shouldHandleChangeEvent(event) {
        return event.source !== this;
    }
}
MatDatepickerInput.ɵfac = function MatDatepickerInput_Factory(t) { return new (t || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8)); };
MatDatepickerInput.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerInput, selectors: [["input", "matDatepicker", ""]], hostAttrs: [1, "mat-datepicker-input"], hostVars: 6, hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MatDatepickerInput_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MatDatepickerInput_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
    } }, inputs: { matDatepicker: "matDatepicker", min: "min", max: "max", dateFilter: ["matDatepickerFilter", "dateFilter"] }, exportAs: ["matDatepickerInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            MAT_DATEPICKER_VALUE_ACCESSOR,
            MAT_DATEPICKER_VALIDATORS,
            { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR, useExisting: MatDatepickerInput },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatDatepickerInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD,] }] }
];
MatDatepickerInput.propDecorators = {
    matDatepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matDatepickerFilter',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'input[matDatepicker]',
                providers: [
                    MAT_DATEPICKER_VALUE_ACCESSOR,
                    MAT_DATEPICKER_VALIDATORS,
                    { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR, useExisting: MatDatepickerInput },
                ],
                host: {
                    'class': 'mat-datepicker-input',
                    '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
                    '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
                    '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
                    // Used by the test harness to tie this input to its calendar. We can't depend on
                    // `aria-owns` for this, because it's only defined while the calendar is open.
                    '[attr.data-mat-calendar]': '_datepicker ? _datepicker.id : null',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(blur)': '_onBlur()',
                    '(keydown)': '_onKeydown($event)'
                },
                exportAs: 'matDatepickerInput'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD]
            }] }]; }, { matDatepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matDatepickerFilter']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Can be used to override the icon of a `matDatepickerToggle`. */
class MatDatepickerToggleIcon {
}
MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) { return new (t || MatDatepickerToggleIcon)(); };
MatDatepickerToggleIcon.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerToggleIcon, selectors: [["", "matDatepickerToggleIcon", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerToggleIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matDatepickerToggleIcon]'
            }]
    }], null, null); })();
class MatDatepickerToggle {
    constructor(_intl, _changeDetectorRef, defaultTabIndex) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
    }
    /** Whether the toggle button is disabled. */
    get disabled() {
        if (this._disabled === undefined && this.datepicker) {
            return this.datepicker.disabled;
        }
        return !!this._disabled;
    }
    set disabled(value) {
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    ngOnChanges(changes) {
        if (changes['datepicker']) {
            this._watchStateChanges();
        }
    }
    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }
    ngAfterContentInit() {
        this._watchStateChanges();
    }
    _open(event) {
        if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
        }
    }
    _watchStateChanges() {
        const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
        const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ?
            this.datepicker.datepickerInput.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
        const datepickerToggled = this.datepicker ?
            (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.datepicker.openedStream, this.datepicker.closedStream) :
            (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
        this._stateChanges.unsubscribe();
        this._stateChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) { return new (t || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex')); };
MatDatepickerToggle.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDatepickerToggle, selectors: [["mat-datepicker-toggle"]], contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
    } }, viewQuery: function MatDatepickerToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "mat-datepicker-toggle"], hostVars: 8, hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerToggle_click_HostBindingHandler($event) { return ctx._open($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
    } }, inputs: { tabIndex: "tabIndex", disabled: "disabled", datepicker: ["for", "datepicker"], ariaLabel: ["aria-label", "ariaLabel"], disableRipple: "disableRipple" }, exportAs: ["matDatepickerToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]], template: function MatDatepickerToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._customIcon);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}\n"], encapsulation: 2, changeDetection: 0 });
MatDatepickerToggle.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['tabindex',] }] }
];
MatDatepickerToggle.propDecorators = {
    datepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['for',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _customIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatDatepickerToggleIcon,] }],
    _button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['button',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-datepicker-toggle',
                template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"ariaLabel || _intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
                host: {
                    'class': 'mat-datepicker-toggle',
                    '[attr.tabindex]': 'null',
                    '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
                    '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
                    '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
                    // Used by the test harness to tie this toggle to its datepicker.
                    '[attr.data-mat-calendar]': 'datepicker ? datepicker.id : null',
                    // Bind the `click` on the host, rather than the inner `button`, so that we can call
                    // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
                    // it so that the input doesn't get focused automatically by the form field (See #21836).
                    '(click)': '_open($event)'
                },
                exportAs: 'matDatepickerToggle',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}\n"]
            }]
    }], function () { return [{ type: MatDatepickerIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }]; }, { tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['for']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatDatepickerToggleIcon]
        }], _button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['button']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide the date range input wrapper component
 * to the parts without circular dependencies.
 */
const MAT_DATE_RANGE_INPUT_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_INPUT_PARENT');
/**
 * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
 */
class MatDateRangeInputPartBase extends MatDatepickerInputBase {
    constructor(_rangeInput, elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
        super(elementRef, dateAdapter, dateFormats);
        this._rangeInput = _rangeInput;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._injector = _injector;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
    }
    ngOnInit() {
        // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
        // injecting its `NgControl` so that the error state is handled correctly. This introduces a
        // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
        // itself. Usually we can work around it for the CVA, but there's no API to do it for the
        // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
        // everything has been resolved.
        // tslint:disable-next-line:no-bitwise
        const ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControl, null, _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectFlags.Self | _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectFlags.Optional);
        if (ngControl) {
            this.ngControl = ngControl;
        }
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
    }
    /** Gets whether the input is empty. */
    isEmpty() {
        return this._elementRef.nativeElement.value.length === 0;
    }
    /** Gets the placeholder of the input. */
    _getPlaceholder() {
        return this._elementRef.nativeElement.placeholder;
    }
    /** Focuses the input. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    /** Handles `input` events on the input element. */
    _onInput(value) {
        super._onInput(value);
        this._rangeInput._handleChildValueChange();
    }
    /** Opens the datepicker associated with the input. */
    _openPopup() {
        this._rangeInput._openDatepicker();
    }
    /** Gets the minimum date from the range input. */
    _getMinDate() {
        return this._rangeInput.min;
    }
    /** Gets the maximum date from the range input. */
    _getMaxDate() {
        return this._rangeInput.max;
    }
    /** Gets the date filter function from the range input. */
    _getDateFilter() {
        return this._rangeInput.dateFilter;
    }
    _parentDisabled() {
        return this._rangeInput._groupDisabled;
    }
    _shouldHandleChangeEvent({ source }) {
        return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
    }
    _assignValueProgrammatically(value) {
        super._assignValueProgrammatically(value);
        const opposite = (this === this._rangeInput._startInput ? this._rangeInput._endInput :
            this._rangeInput._startInput);
        opposite === null || opposite === void 0 ? void 0 : opposite._validatorOnChange();
    }
}
MatDateRangeInputPartBase.ɵfac = function MatDateRangeInputPartBase_Factory(t) { return new (t || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8)); };
MatDateRangeInputPartBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDateRangeInputPartBase, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatDateRangeInputPartBase.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_RANGE_INPUT_PARENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangeInputPartBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_RANGE_INPUT_PARENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }]; }, null); })();
const _MatDateRangeInputBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.mixinErrorState)(MatDateRangeInputPartBase);
/** Input for entering the start date in a `mat-date-range-input`. */
class MatStartDate extends _MatDateRangeInputBase {
    constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
        // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
        // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
        // constructor once ViewEngine is removed.
        super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
        /** Validator that checks that the start date isn't after the end date. */
        this._startValidator = (control) => {
            const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const end = this._model ? this._model.selection.end : null;
            return (!start || !end ||
                this._dateAdapter.compareDate(start, end) <= 0) ?
                null : { 'matStartDateInvalid': { 'end': end, 'actual': start } };
        };
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._startValidator]);
    }
    ngOnInit() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngOnInit();
    }
    ngDoCheck() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngDoCheck();
    }
    _getValueFromModel(modelValue) {
        return modelValue.start;
    }
    _shouldHandleChangeEvent(change) {
        var _a;
        if (!super._shouldHandleChangeEvent(change)) {
            return false;
        }
        else {
            return !((_a = change.oldValue) === null || _a === void 0 ? void 0 : _a.start) ? !!change.selection.start :
                !change.selection.start ||
                    !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
        }
    }
    _assignValueToModel(value) {
        if (this._model) {
            const range = new DateRange(value, this._model.selection.end);
            this._model.updateSelection(range, this);
        }
    }
    _formatValue(value) {
        super._formatValue(value);
        // Any time the input value is reformatted we need to tell the parent.
        this._rangeInput._handleChildValueChange();
    }
    /** Gets the value that should be used when mirroring the input's size. */
    getMirrorValue() {
        const element = this._elementRef.nativeElement;
        const value = element.value;
        return value.length > 0 ? value : element.placeholder;
    }
}
MatStartDate.ɵfac = function MatStartDate_Factory(t) { return new (t || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8)); };
MatStartDate.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStartDate, selectors: [["input", "matStartDate", ""]], hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"], hostVars: 6, hostBindings: function MatStartDate_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MatStartDate_change_HostBindingHandler() { return ctx._onChange(); })("keydown", function MatStartDate_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("blur", function MatStartDate_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx._rangeInput.id)("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    } }, inputs: { errorStateMatcher: "errorStateMatcher" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR, useExisting: MatStartDate, multi: true },
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS, useExisting: MatStartDate, multi: true }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatStartDate.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_RANGE_INPUT_PARENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStartDate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'input[matStartDate]',
                host: {
                    'class': 'mat-start-date mat-date-range-input-inner',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(keydown)': '_onKeydown($event)',
                    '[attr.id]': '_rangeInput.id',
                    '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
                    '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
                    '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
                    '(blur)': '_onBlur()',
                    'type': 'text'
                },
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR, useExisting: MatStartDate, multi: true },
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS, useExisting: MatStartDate, multi: true }
                ],
                // These need to be specified explicitly, because some tooling doesn't
                // seem to pick them up from the base class. See #20932.
                outputs: ['dateChange', 'dateInput'],
                inputs: ['errorStateMatcher']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_RANGE_INPUT_PARENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }]; }, null); })();
/** Input for entering the end date in a `mat-date-range-input`. */
class MatEndDate extends _MatDateRangeInputBase {
    constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
        // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
        // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
        // constructor once ViewEngine is removed.
        super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
        /** Validator that checks that the end date isn't before the start date. */
        this._endValidator = (control) => {
            const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const start = this._model ? this._model.selection.start : null;
            return (!end || !start ||
                this._dateAdapter.compareDate(end, start) >= 0) ?
                null : { 'matEndDateInvalid': { 'start': start, 'actual': end } };
        };
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._endValidator]);
    }
    ngOnInit() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngOnInit();
    }
    ngDoCheck() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngDoCheck();
    }
    _getValueFromModel(modelValue) {
        return modelValue.end;
    }
    _shouldHandleChangeEvent(change) {
        var _a;
        if (!super._shouldHandleChangeEvent(change)) {
            return false;
        }
        else {
            return !((_a = change.oldValue) === null || _a === void 0 ? void 0 : _a.end) ? !!change.selection.end :
                !change.selection.end ||
                    !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
        }
    }
    _assignValueToModel(value) {
        if (this._model) {
            const range = new DateRange(this._model.selection.start, value);
            this._model.updateSelection(range, this);
        }
    }
    _onKeydown(event) {
        // If the user is pressing backspace on an empty end input, move focus back to the start.
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.BACKSPACE && !this._elementRef.nativeElement.value) {
            this._rangeInput._startInput.focus();
        }
        super._onKeydown(event);
    }
}
MatEndDate.ɵfac = function MatEndDate_Factory(t) { return new (t || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8)); };
MatEndDate.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatEndDate, selectors: [["input", "matEndDate", ""]], hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"], hostVars: 5, hostBindings: function MatEndDate_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MatEndDate_change_HostBindingHandler() { return ctx._onChange(); })("keydown", function MatEndDate_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("blur", function MatEndDate_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    } }, inputs: { errorStateMatcher: "errorStateMatcher" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR, useExisting: MatEndDate, multi: true },
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS, useExisting: MatEndDate, multi: true }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatEndDate.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_DATE_RANGE_INPUT_PARENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatEndDate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'input[matEndDate]',
                host: {
                    'class': 'mat-end-date mat-date-range-input-inner',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(keydown)': '_onKeydown($event)',
                    '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
                    '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
                    '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
                    '(blur)': '_onBlur()',
                    'type': 'text'
                },
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR, useExisting: MatEndDate, multi: true },
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS, useExisting: MatEndDate, multi: true }
                ],
                // These need to be specified explicitly, because some tooling doesn't
                // seem to pick them up from the base class. See #20932.
                outputs: ['dateChange', 'dateInput'],
                inputs: ['errorStateMatcher']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_DATE_RANGE_INPUT_PARENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextUniqueId = 0;
class MatDateRangeInput {
    constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._formField = _formField;
        this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
        /** Unique ID for the input. */
        this.id = `mat-date-range-input-${nextUniqueId++}`;
        /** Whether the control is focused. */
        this.focused = false;
        /** Name of the form control. */
        this.controlType = 'mat-date-range-input';
        this._groupDisabled = false;
        /** Value for the `aria-describedby` attribute of the inputs. */
        this._ariaDescribedBy = null;
        /** Separator text to be shown between the inputs. */
        this.separator = '–';
        /** Start of the comparison range that should be shown in the calendar. */
        this.comparisonStart = null;
        /** End of the comparison range that should be shown in the calendar. */
        this.comparisonEnd = null;
        /** Emits when the input's state has changed. */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        if (!_dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
        }
        // The datepicker module can be used both with MDC and non-MDC form fields. We have
        // to conditionally add the MDC input class so that the range picker looks correctly.
        if (_formField === null || _formField === void 0 ? void 0 : _formField._elementRef.nativeElement.classList.contains('mat-mdc-form-field')) {
            const classList = _elementRef.nativeElement.classList;
            classList.add('mat-mdc-input-element');
            classList.add('mat-mdc-form-field-control');
        }
        // TODO(crisbeto): remove `as any` after #18206 lands.
        this.ngControl = control;
    }
    /** Current value of the range input. */
    get value() {
        return this._model ? this._model.selection : null;
    }
    /** Whether the control's label should float. */
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * Set the placeholder attribute on `matStartDate` and `matEndDate`.
     * @docs-private
     */
    get placeholder() {
        var _a, _b;
        const start = ((_a = this._startInput) === null || _a === void 0 ? void 0 : _a._getPlaceholder()) || '';
        const end = ((_b = this._endInput) === null || _b === void 0 ? void 0 : _b._getPlaceholder()) || '';
        return (start || end) ? `${start} ${this.separator} ${end}` : '';
    }
    /** The range picker that this input is associated with. */
    get rangePicker() { return this._rangePicker; }
    set rangePicker(rangePicker) {
        if (rangePicker) {
            this._model = rangePicker.registerInput(this);
            this._rangePicker = rangePicker;
            this._closedSubscription.unsubscribe();
            this._closedSubscription = rangePicker.closedStream.subscribe(() => {
                var _a, _b;
                (_a = this._startInput) === null || _a === void 0 ? void 0 : _a._onTouched();
                (_b = this._endInput) === null || _b === void 0 ? void 0 : _b._onTouched();
            });
            this._registerModel(this._model);
        }
    }
    /** Whether the input is required. */
    get required() { return !!this._required; }
    set required(value) {
        this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    /** Function that can be used to filter out dates within the date range picker. */
    get dateFilter() { return this._dateFilter; }
    set dateFilter(value) {
        const start = this._startInput;
        const end = this._endInput;
        const wasMatchingStart = start && start._matchesFilter(start.value);
        const wasMatchingEnd = end && end._matchesFilter(start.value);
        this._dateFilter = value;
        if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
            start._validatorOnChange();
        }
        if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
            end._validatorOnChange();
        }
    }
    /** The minimum valid date. */
    get min() { return this._min; }
    set min(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._min)) {
            this._min = validValue;
            this._revalidate();
        }
    }
    /** The maximum valid date. */
    get max() { return this._max; }
    set max(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._max)) {
            this._max = validValue;
            this._revalidate();
        }
    }
    /** Whether the input is disabled. */
    get disabled() {
        return (this._startInput && this._endInput) ?
            (this._startInput.disabled && this._endInput.disabled) :
            this._groupDisabled;
    }
    set disabled(value) {
        const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
        if (newValue !== this._groupDisabled) {
            this._groupDisabled = newValue;
            this.stateChanges.next(undefined);
        }
    }
    /** Whether the input is in an error state. */
    get errorState() {
        if (this._startInput && this._endInput) {
            return this._startInput.errorState || this._endInput.errorState;
        }
        return false;
    }
    /** Whether the datepicker input is empty. */
    get empty() {
        const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
        const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
        return startEmpty && endEmpty;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */
    setDescribedByIds(ids) {
        this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */
    onContainerClick() {
        if (!this.focused && !this.disabled) {
            if (!this._model || !this._model.selection.start) {
                this._startInput.focus();
            }
            else {
                this._endInput.focus();
            }
        }
    }
    ngAfterContentInit() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._startInput) {
                throw Error('mat-date-range-input must contain a matStartDate input');
            }
            if (!this._endInput) {
                throw Error('mat-date-range-input must contain a matEndDate input');
            }
        }
        if (this._model) {
            this._registerModel(this._model);
        }
        // We don't need to unsubscribe from this, because we
        // know that the input streams will be completed on destroy.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
            this.stateChanges.next(undefined);
        });
    }
    ngOnChanges(changes) {
        if (dateInputsHaveChanged(changes, this._dateAdapter)) {
            this.stateChanges.next(undefined);
        }
    }
    ngOnDestroy() {
        this._closedSubscription.unsubscribe();
        this.stateChanges.complete();
    }
    /** Gets the date at which the calendar should start. */
    getStartValue() {
        return this.value ? this.value.start : null;
    }
    /** Gets the input's theme palette. */
    getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    /** Gets the element to which the calendar overlay should be attached. */
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Gets the ID of an element that should be used a description for the calendar overlay. */
    getOverlayLabelId() {
        return this._formField ? this._formField.getLabelId() : null;
    }
    /** Gets the value that is used to mirror the state input. */
    _getInputMirrorValue() {
        return this._startInput ? this._startInput.getMirrorValue() : '';
    }
    /** Whether the input placeholders should be hidden. */
    _shouldHidePlaceholders() {
        return this._startInput ? !this._startInput.isEmpty() : false;
    }
    /** Handles the value in one of the child inputs changing. */
    _handleChildValueChange() {
        this.stateChanges.next(undefined);
        this._changeDetectorRef.markForCheck();
    }
    /** Opens the date range picker associated with the input. */
    _openDatepicker() {
        if (this._rangePicker) {
            this._rangePicker.open();
        }
    }
    /** Whether the separate text should be hidden. */
    _shouldHideSeparator() {
        return (!this._formField || (this._formField.getLabelId() &&
            !this._formField._shouldLabelFloat())) && this.empty;
    }
    /** Gets the value for the `aria-labelledby` attribute of the inputs. */
    _getAriaLabelledby() {
        const formField = this._formField;
        return formField && formField._hasFloatingLabel() ? formField._labelId : null;
    }
    /** Updates the focused state of the range input. */
    _updateFocus(origin) {
        this.focused = origin !== null;
        this.stateChanges.next();
    }
    /** Re-runs the validators on the start/end inputs. */
    _revalidate() {
        if (this._startInput) {
            this._startInput._validatorOnChange();
        }
        if (this._endInput) {
            this._endInput._validatorOnChange();
        }
    }
    /** Registers the current date selection model with the start/end inputs. */
    _registerModel(model) {
        if (this._startInput) {
            this._startInput._registerModel(model);
        }
        if (this._endInput) {
            this._endInput._registerModel(model);
        }
    }
}
MatDateRangeInput.ɵfac = function MatDateRangeInput_Factory(t) { return new (t || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8)); };
MatDateRangeInput.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDateRangeInput, selectors: [["mat-date-range-input"]], contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStartDate, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatEndDate, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
    } }, hostAttrs: ["role", "group", 1, "mat-date-range-input"], hostVars: 8, hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", null)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
    } }, inputs: { separator: "separator", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd", rangePicker: "rangePicker", required: "required", dateFilter: "dateFilter", min: "min", max: "max", disabled: "disabled" }, exportAs: ["matDateRangeInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldControl, useExisting: MatDateRangeInput },
            { provide: MAT_DATE_RANGE_INPUT_PARENT, useExisting: MatDateRangeInput },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c6, decls: 9, vars: 4, consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-start-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-end-wrapper"]], template: function MatDateRangeInput_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) { return ctx._updateFocus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._getInputMirrorValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.separator);
    } }, directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.CdkMonitorFocus], styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"], encapsulation: 2, changeDetection: 0 });
MatDateRangeInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD,] }] }
];
MatDateRangeInput.propDecorators = {
    rangePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    separator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _startInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatStartDate,] }],
    _endInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatEndDate,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangeInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-date-range-input',
                template: "<div\n  class=\"mat-date-range-input-container\"\n  cdkMonitorSubtreeFocus\n  (cdkFocusChange)=\"_updateFocus($event)\">\n  <div class=\"mat-date-range-input-start-wrapper\">\n    <ng-content select=\"input[matStartDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue()}}</span>\n  </div>\n\n  <span\n    class=\"mat-date-range-input-separator\"\n    [class.mat-date-range-input-separator-hidden]=\"_shouldHideSeparator()\">{{separator}}</span>\n\n  <div class=\"mat-date-range-input-end-wrapper\">\n    <ng-content select=\"input[matEndDate]\"></ng-content>\n  </div>\n</div>\n\n",
                exportAs: 'matDateRangeInput',
                host: {
                    'class': 'mat-date-range-input',
                    '[class.mat-date-range-input-hide-placeholders]': '_shouldHidePlaceholders()',
                    '[class.mat-date-range-input-required]': 'required',
                    '[attr.id]': 'null',
                    'role': 'group',
                    '[attr.aria-labelledby]': '_getAriaLabelledby()',
                    '[attr.aria-describedby]': '_ariaDescribedBy',
                    // Used by the test harness to tie this input to its calendar. We can't depend on
                    // `aria-owns` for this, because it's only defined while the calendar is open.
                    '[attr.data-mat-calendar]': 'rangePicker ? rangePicker.id : null'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldControl, useExisting: MatDateRangeInput },
                    { provide: MAT_DATE_RANGE_INPUT_PARENT, useExisting: MatDateRangeInput },
                ],
                styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD]
            }] }]; }, { separator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rangePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _startInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatStartDate]
        }], _endInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatEndDate]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
// directive if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the date range picker popup/dialog. */
class MatDateRangePicker extends MatDatepickerBase {
    _forwardContentValues(instance) {
        super._forwardContentValues(instance);
        const input = this.datepickerInput;
        if (input) {
            instance.comparisonStart = input.comparisonStart;
            instance.comparisonEnd = input.comparisonEnd;
        }
    }
}
MatDateRangePicker.ɵfac = /*@__PURE__*/ function () { let ɵMatDateRangePicker_BaseFactory; return function MatDateRangePicker_Factory(t) { return (ɵMatDateRangePicker_BaseFactory || (ɵMatDateRangePicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDateRangePicker)))(t || MatDateRangePicker); }; }();
MatDateRangePicker.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDateRangePicker, selectors: [["mat-date-range-picker"]], exportAs: ["matDateRangePicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER,
            MAT_CALENDAR_RANGE_STRATEGY_PROVIDER,
            { provide: MatDatepickerBase, useExisting: MatDateRangePicker },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function MatDateRangePicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangePicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-date-range-picker',
                template: '',
                exportAs: 'matDateRangePicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                providers: [
                    MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER,
                    MAT_CALENDAR_RANGE_STRATEGY_PROVIDER,
                    { provide: MatDatepickerBase, useExisting: MatDateRangePicker },
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that will close the datepicker and assign the current selection to the data model. */
class MatDatepickerApply {
    constructor(_datepicker) {
        this._datepicker = _datepicker;
    }
    _applySelection() {
        this._datepicker._applyPendingSelection();
        this._datepicker.close();
    }
}
MatDatepickerApply.ɵfac = function MatDatepickerApply_Factory(t) { return new (t || MatDatepickerApply)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase)); };
MatDatepickerApply.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerApply, selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]], hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerApply_click_HostBindingHandler() { return ctx._applySelection(); });
    } } });
MatDatepickerApply.ctorParameters = () => [
    { type: MatDatepickerBase }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerApply, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matDatepickerApply], [matDateRangePickerApply]',
                host: { '(click)': '_applySelection()' }
            }]
    }], function () { return [{ type: MatDatepickerBase }]; }, null); })();
/** Button that will close the datepicker and discard the current selection. */
class MatDatepickerCancel {
    constructor(_datepicker) {
        this._datepicker = _datepicker;
    }
}
MatDatepickerCancel.ɵfac = function MatDatepickerCancel_Factory(t) { return new (t || MatDatepickerCancel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase)); };
MatDatepickerCancel.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatDatepickerCancel, selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]], hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerCancel_click_HostBindingHandler() { return ctx._datepicker.close(); });
    } } });
MatDatepickerCancel.ctorParameters = () => [
    { type: MatDatepickerBase }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerCancel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matDatepickerCancel], [matDateRangePickerCancel]',
                host: { '(click)': '_datepicker.close()' }
            }]
    }], function () { return [{ type: MatDatepickerBase }]; }, null); })();
/**
 * Container that can be used to project a row of action buttons
 * to the bottom of a datepicker or date range picker.
 */
class MatDatepickerActions {
    constructor(_datepicker, _viewContainerRef) {
        this._datepicker = _datepicker;
        this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.TemplatePortal(this._template, this._viewContainerRef);
        this._datepicker.registerActions(this._portal);
    }
    ngOnDestroy() {
        var _a;
        this._datepicker.removeActions(this._portal);
        // Needs to be null checked since we initialize it in `ngAfterViewInit`.
        if (this._portal && this._portal.isAttached) {
            (_a = this._portal) === null || _a === void 0 ? void 0 : _a.detach();
        }
    }
}
MatDatepickerActions.ɵfac = function MatDatepickerActions_Factory(t) { return new (t || MatDatepickerActions)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
MatDatepickerActions.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatDatepickerActions, selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]], viewQuery: function MatDatepickerActions_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._template = _t.first);
    } }, ngContentSelectors: _c1, decls: 1, vars: 0, consts: [[1, "mat-datepicker-actions"]], template: function MatDatepickerActions_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
    } }, styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, changeDetection: 0 });
MatDatepickerActions.ctorParameters = () => [
    { type: MatDatepickerBase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }
];
MatDatepickerActions.propDecorators = {
    _template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-datepicker-actions, mat-date-range-picker-actions',
                template: `
    <ng-template>
      <div class="mat-datepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: MatDatepickerBase }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }]; }, { _template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatDatepickerModule {
}
MatDatepickerModule.ɵfac = function MatDatepickerModule_Factory(t) { return new (t || MatDatepickerModule)(); };
MatDatepickerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatDatepickerModule });
MatDatepickerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        MatDatepickerIntl,
        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule,
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.A11yModule,
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule,
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule,
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.A11yModule,
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule,
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule,
                    MatCalendar,
                    MatCalendarBody,
                    MatDatepicker,
                    MatDatepickerContent,
                    MatDatepickerInput,
                    MatDatepickerToggle,
                    MatDatepickerToggleIcon,
                    MatMonthView,
                    MatYearView,
                    MatMultiYearView,
                    MatCalendarHeader,
                    MatDateRangeInput,
                    MatStartDate,
                    MatEndDate,
                    MatDateRangePicker,
                    MatDatepickerActions,
                    MatDatepickerCancel,
                    MatDatepickerApply
                ],
                declarations: [
                    MatCalendar,
                    MatCalendarBody,
                    MatDatepicker,
                    MatDatepickerContent,
                    MatDatepickerInput,
                    MatDatepickerToggle,
                    MatDatepickerToggleIcon,
                    MatMonthView,
                    MatYearView,
                    MatMultiYearView,
                    MatCalendarHeader,
                    MatDateRangeInput,
                    MatStartDate,
                    MatEndDate,
                    MatDateRangePicker,
                    MatDatepickerActions,
                    MatDatepickerCancel,
                    MatDatepickerApply
                ],
                providers: [
                    MatDatepickerIntl,
                    MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
                ],
                entryComponents: [
                    MatDatepickerContent,
                    MatCalendarHeader,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatDatepickerModule, { declarations: function () { return [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.A11yModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ 2613:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_RADIO_DEFAULT_OPTIONS": () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS),
/* harmony export */   "MAT_RADIO_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_RADIO_GROUP": () => (/* binding */ MAT_RADIO_GROUP),
/* harmony export */   "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR": () => (/* binding */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "MatRadioButton": () => (/* binding */ MatRadioButton),
/* harmony export */   "MatRadioChange": () => (/* binding */ MatRadioChange),
/* harmony export */   "MatRadioGroup": () => (/* binding */ MatRadioGroup),
/* harmony export */   "MatRadioModule": () => (/* binding */ MatRadioModule),
/* harmony export */   "_MatRadioButtonBase": () => (/* binding */ _MatRadioButtonBase),
/* harmony export */   "_MatRadioGroupBase": () => (/* binding */ _MatRadioGroupBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 7860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





const _c0 = ["input"];
const _c1 = function (a0) { return { enterDuration: a0 }; };
const _c2 = ["*"];
const MAT_RADIO_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-radio-default-options', {
    providedIn: 'root',
    factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
    return {
        color: 'accent'
    };
}
// Increasing integer for generating unique ids for radio components.
let nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioGroup),
    multi: true
};
/** Change event object emitted by MatRadio and MatRadioGroup. */
class MatRadioChange {
    constructor(
    /** The MatRadioButton that emits the change event. */
    source, 
    /** The value of the MatRadioButton. */
    value) {
        this.source = source;
        this.value = value;
    }
}
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_RADIO_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatRadioGroup');
/**
 * Base class with all of the `MatRadioGroup` functionality.
 * @docs-private
 */
class _MatRadioGroupBase {
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        /** Selected value for the radio group. */
        this._value = null;
        /** The HTML name attribute applied to radio buttons in this group. */
        this._name = `mat-radio-group-${nextUniqueId++}`;
        /** The currently selected radio button. Should match value. */
        this._selected = null;
        /** Whether the `value` has been set to its initial value. */
        this._isInitialized = false;
        /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
        this._labelPosition = 'after';
        /** Whether the radio group is disabled. */
        this._disabled = false;
        /** Whether the radio group is required. */
        this._required = false;
        /** The method to be called in order to update ngModel */
        this._controlValueAccessorChangeFn = () => { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * @docs-private
         */
        this.onTouched = () => { };
        /**
         * Event emitted when the group value changes.
         * Change events are only emitted when the value changes due to user interaction with
         * a radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        this._updateRadioButtonNames();
    }
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    get labelPosition() {
        return this._labelPosition;
    }
    set labelPosition(v) {
        this._labelPosition = v === 'before' ? 'before' : 'after';
        this._markRadiosForCheck();
    }
    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value. If there is not such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */
    get value() { return this._value; }
    set value(newValue) {
        if (this._value !== newValue) {
            // Set this before proceeding to ensure no circular loop occurs with selection.
            this._value = newValue;
            this._updateSelectedRadioFromValue();
            this._checkSelectedRadioButton();
        }
    }
    _checkSelectedRadioButton() {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    }
    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     */
    get selected() { return this._selected; }
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this._checkSelectedRadioButton();
    }
    /** Whether the radio group is disabled */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
        this._markRadiosForCheck();
    }
    /** Whether the radio group is required */
    get required() { return this._required; }
    set required(value) {
        this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
        this._markRadiosForCheck();
    }
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit() {
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the MatRadioGroup.
        this._isInitialized = true;
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    _updateRadioButtonNames() {
        if (this._radios) {
            this._radios.forEach(radio => {
                radio.name = this.name;
                radio._markForCheck();
            });
        }
    }
    /** Updates the `selected` radio button from the internal _value state. */
    _updateSelectedRadioFromValue() {
        // If the value already matches the selected radio, do nothing.
        const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(radio => {
                radio.checked = this.value === radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            });
        }
    }
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent() {
        if (this._isInitialized) {
            this.change.emit(new MatRadioChange(this._selected, this._value));
        }
    }
    _markRadiosForCheck() {
        if (this._radios) {
            this._radios.forEach(radio => radio._markForCheck());
        }
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
        this.value = value;
        this._changeDetector.markForCheck();
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetector.markForCheck();
    }
}
_MatRadioGroupBase.ɵfac = function _MatRadioGroupBase_Factory(t) { return new (t || _MatRadioGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
_MatRadioGroupBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatRadioGroupBase, inputs: { name: "name", labelPosition: "labelPosition", value: "value", selected: "selected", disabled: "disabled", required: "required", color: "color" }, outputs: { change: "change" } });
_MatRadioGroupBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
_MatRadioGroupBase.propDecorators = {
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioGroupBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
class MatRadioGroup extends _MatRadioGroupBase {
}
MatRadioGroup.ɵfac = /*@__PURE__*/ function () { let ɵMatRadioGroup_BaseFactory; return function MatRadioGroup_Factory(t) { return (ɵMatRadioGroup_BaseFactory || (ɵMatRadioGroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRadioGroup)))(t || MatRadioGroup); }; }();
MatRadioGroup.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRadioGroup, selectors: [["mat-radio-group"]], contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatRadioButton, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._radios = _t);
    } }, hostAttrs: ["role", "radiogroup", 1, "mat-radio-group"], exportAs: ["matRadioGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
            { provide: MAT_RADIO_GROUP, useExisting: MatRadioGroup },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatRadioGroup.propDecorators = {
    _radios: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioButton), { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'mat-radio-group',
                exportAs: 'matRadioGroup',
                providers: [
                    MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
                    { provide: MAT_RADIO_GROUP, useExisting: MatRadioGroup },
                ],
                host: {
                    'role': 'radiogroup',
                    'class': 'mat-radio-group'
                }
            }]
    }], null, { _radios: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioButton), { descendants: true }]
        }] }); })();
// Boilerplate for applying mixins to MatRadioButton.
/** @docs-private */
class MatRadioButtonBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatRadioButtonMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)(MatRadioButtonBase));
/**
 * Base class with all of the `MatRadioButton` functionality.
 * @docs-private
 */
class _MatRadioButtonBase extends _MatRadioButtonMixinBase {
    constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex) {
        super(elementRef);
        this._changeDetector = _changeDetector;
        this._focusMonitor = _focusMonitor;
        this._radioDispatcher = _radioDispatcher;
        this._providerOverride = _providerOverride;
        this._uniqueId = `mat-radio-${++nextUniqueId}`;
        /** The unique ID for the radio button. */
        this.id = this._uniqueId;
        /**
         * Event emitted when the checked state of this radio button changes.
         * Change events are only emitted when the value changes due to user interaction with
         * the radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Whether this radio is checked. */
        this._checked = false;
        /** Value assigned to this radio. */
        this._value = null;
        /** Unregister function for _radioDispatcher */
        this._removeUniqueSelectionListener = () => { };
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        this.radioGroup = radioGroup;
        this._noopAnimations = animationMode === 'NoopAnimations';
        if (tabIndex) {
            this.tabIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(tabIndex, 0);
        }
        this._removeUniqueSelectionListener =
            _radioDispatcher.listen((id, name) => {
                if (id !== this.id && name === this.name) {
                    this.checked = false;
                }
            });
    }
    /** Whether this radio button is checked. */
    get checked() { return this._checked; }
    set checked(value) {
        const newCheckedState = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
        if (this._checked !== newCheckedState) {
            this._checked = newCheckedState;
            if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.selected = this;
            }
            else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                // When unchecking the selected radio button, update the selected radio
                // property on the group.
                this.radioGroup.selected = null;
            }
            if (newCheckedState) {
                // Notify all radio buttons with the same name to un-check.
                this._radioDispatcher.notify(this.id, this.name);
            }
            this._changeDetector.markForCheck();
        }
    }
    /** The value of this radio button. */
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            if (this.radioGroup !== null) {
                if (!this.checked) {
                    // Update checked when the value changed to match the radio group's value
                    this.checked = this.radioGroup.value === value;
                }
                if (this.checked) {
                    this.radioGroup.selected = this;
                }
            }
        }
    }
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */
    get labelPosition() {
        return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
    }
    set labelPosition(value) {
        this._labelPosition = value;
    }
    /** Whether the radio button is disabled. */
    get disabled() {
        return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
    }
    set disabled(value) {
        this._setDisabled((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value));
    }
    /** Whether the radio button is required. */
    get required() {
        return this._required || (this.radioGroup && this.radioGroup.required);
    }
    set required(value) {
        this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    }
    /** Theme color of the radio button. */
    get color() {
        // As per Material design specifications the selection control radio should use the accent color
        // palette by default. https://material.io/guidelines/components/selection-controls.html
        return this._color ||
            (this.radioGroup && this.radioGroup.color) ||
            this._providerOverride && this._providerOverride.color || 'accent';
    }
    set color(newValue) { this._color = newValue; }
    /** ID of the native input element inside `<mat-radio-button>` */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    /** Focuses the radio button. */
    focus(options, origin) {
        if (origin) {
            this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        else {
            this._inputElement.nativeElement.focus(options);
        }
    }
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    _markForCheck() {
        // When group value changes, the button will not be notified. Use `markForCheck` to explicit
        // update radio button's status
        this._changeDetector.markForCheck();
    }
    ngOnInit() {
        if (this.radioGroup) {
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            if (this.checked) {
                this.radioGroup.selected = this;
            }
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
    }
    ngAfterViewInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe(focusOrigin => {
            if (!focusOrigin && this.radioGroup) {
                this.radioGroup._touch();
            }
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._removeUniqueSelectionListener();
    }
    /** Dispatch change event with current value. */
    _emitChangeEvent() {
        this.change.emit(new MatRadioChange(this, this._value));
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `radio-button` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /** Triggered when the radio button receives an interaction from the user. */
    _onInputInteraction(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        if (!this.checked && !this.disabled) {
            const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
            this.checked = true;
            this._emitChangeEvent();
            if (this.radioGroup) {
                this.radioGroup._controlValueAccessorChangeFn(this.value);
                if (groupValueChanged) {
                    this.radioGroup._emitChangeEvent();
                }
            }
        }
    }
    /** Sets the disabled state and marks for check if a change occurred. */
    _setDisabled(value) {
        if (this._disabled !== value) {
            this._disabled = value;
            this._changeDetector.markForCheck();
        }
    }
}
_MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) { return new (t || _MatRadioButtonBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatRadioGroupBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](String), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](String)); };
_MatRadioButtonBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatRadioButtonBase, viewQuery: function _MatRadioButtonBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    } }, inputs: { id: "id", checked: "checked", value: "value", labelPosition: "labelPosition", disabled: "disabled", required: "required", color: "color", name: "name", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"] }, outputs: { change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatRadioButtonBase.ctorParameters = () => [
    { type: _MatRadioGroupBase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher },
    { type: String },
    { type: undefined },
    { type: String }
];
_MatRadioButtonBase.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-describedby',] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['input',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioButtonBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _MatRadioGroupBase }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher }, { type: String }, { type: undefined }, { type: String }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-describedby']
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['input']
        }] }); })();
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */
class MatRadioButton extends _MatRadioButtonBase {
    constructor(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex) {
        super(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex);
    }
}
MatRadioButton.ɵfac = function MatRadioButton_Factory(t) { return new (t || MatRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex')); };
MatRadioButton.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatRadioButton, selectors: [["mat-radio-button"]], hostAttrs: [1, "mat-radio-button"], hostVars: 17, hostBindings: function MatRadioButton_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() { return ctx._inputElement.nativeElement.focus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("id", ctx.id)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-checked", ctx.checked)("mat-radio-disabled", ctx.disabled)("_mat-animation-noopable", ctx._noopAnimations)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    } }, inputs: { disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matRadioButton"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 13, vars: 20, consts: [[1, "mat-radio-label"], ["label", ""], [1, "mat-radio-container"], [1, "mat-radio-outer-circle"], [1, "mat-radio-inner-circle"], ["type", "radio", 1, "mat-radio-input", "cdk-visually-hidden", 3, "id", "checked", "disabled", "tabIndex", "required", "change", "click"], ["input", ""], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-radio-label-content"], [2, "display", "none"]], template: function MatRadioButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_5_listener($event) { return ctx._onInputInteraction($event); })("click", function MatRadioButton_Template_input_click_5_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex)("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx._noopAnimations ? 0 : 150));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-label-before", ctx.labelPosition == "before");
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple], styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"], encapsulation: 2, changeDetection: 0 });
MatRadioButton.ctorParameters = () => [
    { type: MatRadioGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_RADIO_GROUP,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_RADIO_DEFAULT_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['tabindex',] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-radio-button',
                template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <span class=\"mat-radio-container\">\n    <span class=\"mat-radio-outer-circle\"></span>\n    <span class=\"mat-radio-inner-circle\"></span>\n    <input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [tabIndex]=\"tabIndex\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputInteraction($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <span mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: _noopAnimations ? 0 : 150}\">\n\n      <span class=\"mat-ripple-element mat-radio-persistent-ripple\"></span>\n    </span>\n  </span>\n\n  <!-- The label content for radio control. -->\n  <span class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                inputs: ['disableRipple', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                exportAs: 'matRadioButton',
                host: {
                    'class': 'mat-radio-button',
                    '[class.mat-radio-checked]': 'checked',
                    '[class.mat-radio-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_noopAnimations',
                    '[class.mat-primary]': 'color === "primary"',
                    '[class.mat-accent]': 'color === "accent"',
                    '[class.mat-warn]': 'color === "warn"',
                    // Needs to be removed since it causes some a11y issues (see #21266).
                    '[attr.tabindex]': 'null',
                    '[attr.id]': 'id',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[attr.aria-describedby]': 'null',
                    // Note: under normal conditions focus shouldn't land on this element, however it may be
                    // programmatically set, for example inside of a focus trap, in this case we want to forward
                    // the focus to the native element.
                    '(focus)': '_inputElement.nativeElement.focus()'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"]
            }]
    }], function () { return [{ type: MatRadioGroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_RADIO_GROUP]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_RADIO_DEFAULT_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['tabindex']
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatRadioModule {
}
MatRadioModule.ɵfac = function MatRadioModule_Factory(t) { return new (t || MatRadioModule)(); };
MatRadioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatRadioModule });
MatRadioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
                exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
                declarations: [MatRadioGroup, MatRadioButton]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRadioModule, { declarations: function () { return [MatRadioGroup, MatRadioButton]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]; }, exports: function () { return [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=radio.js.map

/***/ }),

/***/ 4553:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_STEPPER_INTL_PROVIDER": () => (/* binding */ MAT_STEPPER_INTL_PROVIDER),
/* harmony export */   "MAT_STEPPER_INTL_PROVIDER_FACTORY": () => (/* binding */ MAT_STEPPER_INTL_PROVIDER_FACTORY),
/* harmony export */   "MatHorizontalStepper": () => (/* binding */ MatHorizontalStepper),
/* harmony export */   "MatStep": () => (/* binding */ MatStep),
/* harmony export */   "MatStepContent": () => (/* binding */ MatStepContent),
/* harmony export */   "MatStepHeader": () => (/* binding */ MatStepHeader),
/* harmony export */   "MatStepLabel": () => (/* binding */ MatStepLabel),
/* harmony export */   "MatStepper": () => (/* binding */ MatStepper),
/* harmony export */   "MatStepperIcon": () => (/* binding */ MatStepperIcon),
/* harmony export */   "MatStepperIntl": () => (/* binding */ MatStepperIntl),
/* harmony export */   "MatStepperModule": () => (/* binding */ MatStepperModule),
/* harmony export */   "MatStepperNext": () => (/* binding */ MatStepperNext),
/* harmony export */   "MatStepperPrevious": () => (/* binding */ MatStepperPrevious),
/* harmony export */   "MatVerticalStepper": () => (/* binding */ MatVerticalStepper),
/* harmony export */   "matStepperAnimations": () => (/* binding */ matStepperAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ 1394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ 946);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7519);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7238);














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








function MatStepHeader_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
} }
function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
} }
function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
} }
function MatStepHeader_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "number");
} }
function MatStepHeader_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
} }
function MatStepHeader_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.label);
} }
function MatStepHeader_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4._intl.optionalLabel);
} }
function MatStepHeader_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
} }
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) { }
function MatStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx_r0._portal);
} }
const _c0 = ["*"];
function MatStepper_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
const _c1 = function (a0, a1) { return { step: a0, i: a1 }; };
function MatStepper_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepper_ng_container_1_ng_container_2_div_2_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const isLast_r8 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, step_r6, i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r8);
} }
function MatStepper_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@horizontalStepTransition.done", function MatStepper_ng_container_1_div_4_Template_div_animation_horizontalStepTransition_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12._animationDone.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@horizontalStepTransition", ctx_r5._getAnimationDirection(i_r11))("id", ctx_r5._getStepContentId(i_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r5._getStepLabelId(i_r11))("aria-expanded", ctx_r5.selectedIndex === i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r10.content);
} }
function MatStepper_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepper_ng_container_1_ng_container_2_Template, 3, 6, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatStepper_ng_container_1_div_4_Template, 2, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.steps);
} }
function MatStepper_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@verticalStepTransition.done", function MatStepper_ng_container_2_div_1_Template_div_animation_verticalStepTransition_done_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18._animationDone.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const isLast_r17 = ctx.last;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, step_r15, i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-stepper-vertical-line", !isLast_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@verticalStepTransition", ctx_r14._getAnimationDirection(i_r16))("id", ctx_r14._getStepContentId(i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r14._getStepLabelId(i_r16))("aria-expanded", ctx_r14.selectedIndex === i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r15.content);
} }
function MatStepper_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepper_ng_container_2_div_1_Template, 6, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.steps);
} }
function MatStepper_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const step_r20 = restoredCtx.step; return step_r20.select(); })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24._onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r20 = ctx.step;
    const i_r21 = ctx.i;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-horizontal-stepper-header", ctx_r3.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r3.orientation === "vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r3._getFocusIndex() === i_r21 ? 0 : -1)("id", ctx_r3._getStepLabelId(i_r21))("index", i_r21)("state", ctx_r3._getIndicatorType(i_r21, step_r20.state))("label", step_r20.stepLabel || step_r20.label)("selected", ctx_r3.selectedIndex === i_r21)("active", ctx_r3._stepIsNavigable(i_r21, step_r20))("optional", step_r20.optional)("errorMessage", step_r20.errorMessage)("iconOverrides", ctx_r3._iconOverrides)("disableRipple", ctx_r3.disableRipple)("color", step_r20.color || ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-posinset", i_r21 + 1)("aria-setsize", ctx_r3.steps.length)("aria-controls", ctx_r3._getStepContentId(i_r21))("aria-selected", ctx_r3.selectedIndex == i_r21)("aria-label", step_r20.ariaLabel || null)("aria-labelledby", !step_r20.ariaLabel && step_r20.ariaLabelledby ? step_r20.ariaLabelledby : null)("aria-disabled", ctx_r3._stepIsNavigable(i_r21, step_r20) ? null : true);
} }
class MatStepLabel extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepLabel {
}
MatStepLabel.ɵfac = /*@__PURE__*/ function () { let ɵMatStepLabel_BaseFactory; return function MatStepLabel_Factory(t) { return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepLabel)))(t || MatStepLabel); }; }();
MatStepLabel.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStepLabel, selectors: [["", "matStepLabel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matStepLabel]'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Stepper data that is required for internationalization. */
class MatStepperIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Label that is rendered below optional steps. */
        this.optionalLabel = 'Optional';
    }
}
MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) { return new (t || MatStepperIntl)(); };
MatStepperIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
/** @docs-private */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatStepperIntl();
}
/** @docs-private */
const MAT_STEPPER_INTL_PROVIDER = {
    provide: MatStepperIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatStepperIntl]],
    useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatStepHeader.
/** @docs-private */
const _MatStepHeaderBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinColor)(class MatStepHeaderBase extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepHeader {
    constructor(elementRef) {
        super(elementRef);
    }
}, 'primary');
class MatStepHeader extends _MatStepHeaderBase {
    constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        super(_elementRef);
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        this._intlSubscription = _intl.changes.subscribe(() => changeDetectorRef.markForCheck());
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
    }
    ngOnDestroy() {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Focuses the step header. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._elementRef, origin, options);
        }
        else {
            this._elementRef.nativeElement.focus(options);
        }
    }
    /** Returns string label of given step if it is a text label. */
    _stringLabel() {
        return this.label instanceof MatStepLabel ? null : this.label;
    }
    /** Returns MatStepLabel if the label of given step is a template label. */
    _templateLabel() {
        return this.label instanceof MatStepLabel ? this.label : null;
    }
    /** Returns the host HTML element. */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /** Template context variables that are exposed to the `matStepperIcon` instances. */
    _getIconContext() {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    }
    _getDefaultTextForState(state) {
        if (state == 'number') {
            return `${this.index + 1}`;
        }
        if (state == 'edit') {
            return 'create';
        }
        if (state == 'error') {
            return 'warning';
        }
        return state;
    }
}
MatStepHeader.ɵfac = function MatStepHeader_Factory(t) { return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MatStepHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatStepHeader, selectors: [["mat-step-header"]], hostAttrs: ["role", "tab", 1, "mat-step-header"], inputs: { color: "color", state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 19, consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "mat-step-text-label"], [3, "ngTemplateOutlet"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]], template: function MatStepHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatStepHeader_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatStepHeader_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MatStepHeader_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MatStepHeader_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._templateLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._stringLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optional && ctx.state != "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state == "error");
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
MatStepHeader.ctorParameters = () => [
    { type: MatStepperIntl },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
MatStepHeader.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    iconOverrides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-step-header',
                template: "<div class=\"mat-step-header-ripple mat-focus-indicator\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_templateLabel()\">\n    <ng-container [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container>\n  </div>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
                inputs: ['color'],
                host: {
                    'class': 'mat-step-header',
                    'role': 'tab'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: MatStepperIntl }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], iconOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material steppers.
 * @docs-private
 */
const matStepperAnimations = {
    /** Animation that transitions the step along the X axis in a horizontal stepper. */
    horizontalStepTransition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('horizontalStepTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('previous', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'none', visibility: 'inherit' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('next', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /** Animation that transitions the step along the Y axis in a vertical stepper. */
    verticalStepTransition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('verticalStepTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('previous', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ height: '0px', visibility: 'hidden' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('next', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ height: '0px', visibility: 'hidden' })),
        // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ height: '*', visibility: 'inherit' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* <=> current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Template to be used to override the icons inside the step header.
 */
class MatStepperIcon {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) { return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
MatStepperIcon.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStepperIcon, selectors: [["ng-template", "matStepperIcon", ""]], inputs: { name: ["matStepperIcon", "name"] } });
MatStepperIcon.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
MatStepperIcon.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matStepperIcon',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ng-template[matStepperIcon]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matStepperIcon']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Content for a `mat-step` that will be rendered lazily.
 */
class MatStepContent {
    constructor(_template) {
        this._template = _template;
    }
}
MatStepContent.ɵfac = function MatStepContent_Factory(t) { return new (t || MatStepContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
MatStepContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStepContent, selectors: [["ng-template", "matStepContent", ""]] });
MatStepContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ng-template[matStepContent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatStep extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep {
    constructor(stepper, _errorStateMatcher, _viewContainerRef, stepperOptions) {
        super(stepper, stepperOptions);
        this._errorStateMatcher = _errorStateMatcher;
        this._viewContainerRef = _viewContainerRef;
        this._isSelected = rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription.EMPTY;
    }
    ngAfterContentInit() {
        this._isSelected = this._stepper.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => {
            return this._stepper.selectionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event.selectedStep === this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this._stepper.selected === this));
        })).subscribe(isSelected => {
            if (isSelected && this._lazyContent && !this._portal) {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.TemplatePortal(this._lazyContent._template, this._viewContainerRef);
            }
        });
    }
    ngOnDestroy() {
        this._isSelected.unsubscribe();
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    isErrorState(control, form) {
        const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        const customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    }
}
MatStep.ɵfac = function MatStep_Factory(t) { return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS, 8)); };
MatStep.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatStep, selectors: [["mat-step"]], contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepLabel, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepContent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
    } }, inputs: { color: "color" }, exportAs: ["matStep"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, useExisting: MatStep },
            { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep, useExisting: MatStep },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[3, "cdkPortalOutlet"]], template: function MatStep_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.CdkPortalOutlet], encapsulation: 2, changeDetection: 0 });
MatStep.ctorParameters = () => [
    { type: MatStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper),] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS,] }] }
];
MatStep.propDecorators = {
    stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatStepLabel,] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatStepContent, { static: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-step',
                template: "<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n</ng-template>\n",
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, useExisting: MatStep },
                    { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep, useExisting: MatStep },
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                exportAs: 'matStep',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MatStepper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper)]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS]
            }] }]; }, { stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatStepLabel]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatStepContent, { static: false }]
        }] }); })();
/**
 * Proxies the public APIs from `MatStepper` to the deprecated `MatHorizontalStepper` and
 * `MatVerticalStepper`.
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 * @docs-private
 */
class _MatProxyStepperBase extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper {
}
_MatProxyStepperBase.ɵfac = /*@__PURE__*/ function () { let ɵ_MatProxyStepperBase_BaseFactory; return function _MatProxyStepperBase_Factory(t) { return (ɵ_MatProxyStepperBase_BaseFactory || (ɵ_MatProxyStepperBase_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatProxyStepperBase)))(t || _MatProxyStepperBase); }; }();
_MatProxyStepperBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatProxyStepperBase, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatProxyStepperBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], null, null); })();
/**
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 */
class MatHorizontalStepper extends _MatProxyStepperBase {
}
MatHorizontalStepper.ɵfac = /*@__PURE__*/ function () { let ɵMatHorizontalStepper_BaseFactory; return function MatHorizontalStepper_Factory(t) { return (ɵMatHorizontalStepper_BaseFactory || (ɵMatHorizontalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHorizontalStepper)))(t || MatHorizontalStepper); }; }();
MatHorizontalStepper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHorizontalStepper, selectors: [["mat-horizontal-stepper"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHorizontalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: 'mat-horizontal-stepper' }]
    }], null, null); })();
/**
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 */
class MatVerticalStepper extends _MatProxyStepperBase {
}
MatVerticalStepper.ɵfac = /*@__PURE__*/ function () { let ɵMatVerticalStepper_BaseFactory; return function MatVerticalStepper_Factory(t) { return (ɵMatVerticalStepper_BaseFactory || (ɵMatVerticalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatVerticalStepper)))(t || MatVerticalStepper); }; }();
MatVerticalStepper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatVerticalStepper, selectors: [["mat-vertical-stepper"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatVerticalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: 'mat-vertical-stepper' }]
    }], null, null); })();
class MatStepper extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper {
    constructor(dir, changeDetectorRef, elementRef, _document) {
        super(dir, changeDetectorRef, elementRef, _document);
        /** Steps that belong to the current stepper, excluding ones from nested steppers. */
        this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
        /** Event emitted when the current step is done transitioning in. */
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Whether the label should display in bottom or end position.
         * Only applies in the `horizontal` orientation.
         */
        this.labelPosition = 'end';
        /** Consumer-specified template-refs to be used to override the header icons. */
        this._iconOverrides = {};
        /** Stream of animation `done` events when the body expands/collapses. */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
        this.orientation = nodeName === 'mat-vertical-stepper' ? 'vertical' : 'horizontal';
    }
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this._icons.forEach(({ name, templateRef }) => this._iconOverrides[name] = templateRef);
        // Mark the component for change detection whenever the content children query changes
        this.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
            this._stateChanged();
        });
        this._animationDone.pipe(
        // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
        // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)((x, y) => x.fromState === y.fromState && x.toState === y.toState), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(event => {
            if (event.toState === 'current') {
                this.animationDone.emit();
            }
        });
    }
    _stepIsNavigable(index, step) {
        return step.completed || this.selectedIndex === index || !this.linear;
    }
}
MatStepper.ɵfac = function MatStepper_Factory(t) { return new (t || MatStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT)); };
MatStepper.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatStepper, selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]], contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._icons = _t);
    } }, viewQuery: function MatStepper_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatStepHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
    } }, hostAttrs: ["role", "tablist"], hostVars: 9, hostBindings: function MatStepper_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom");
    } }, inputs: { selectedIndex: "selectedIndex", labelPosition: "labelPosition", disableRipple: "disableRipple", color: "color" }, outputs: { animationDone: "animationDone" }, exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper, useExisting: MatStepper },
            { provide: MatHorizontalStepper, useExisting: MatStepper },
            { provide: MatVerticalStepper, useExisting: MatStepper },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["stepTemplate", ""], [1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], ["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color", "click", "keydown"]], template: function MatStepper_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepper_ng_container_1_Template, 5, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepper_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatStepper_ng_template_3_Template, 1, 23, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "vertical");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, MatStepHeader], styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"], encapsulation: 2, data: { animation: [
            matStepperAnimations.horizontalStepTransition,
            matStepperAnimations.verticalStepTransition,
        ] }, changeDetection: 0 });
MatStepper.ctorParameters = () => [
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT,] }] }
];
MatStepper.propDecorators = {
    _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren, args: [MatStepHeader,] }],
    _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatStep, { descendants: true },] }],
    _icons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatStepperIcon, { descendants: true },] }],
    animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]',
                exportAs: 'matStepper, matVerticalStepper, matHorizontalStepper',
                template: "<ng-container [ngSwitch]=\"orientation\">\n  <!-- Horizontal stepper -->\n  <ng-container *ngSwitchCase=\"'horizontal'\">\n    <div class=\"mat-horizontal-stepper-header-container\">\n      <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n        <ng-container\n          [ngTemplateOutlet]=\"stepTemplate\"\n          [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n        <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n      </ng-container>\n    </div>\n\n    <div class=\"mat-horizontal-content-container\">\n      <div *ngFor=\"let step of steps; let i = index\"\n           class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n           [@horizontalStepTransition]=\"_getAnimationDirection(i)\"\n           (@horizontalStepTransition.done)=\"_animationDone.next($event)\"\n           [id]=\"_getStepContentId(i)\"\n           [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n           [attr.aria-expanded]=\"selectedIndex === i\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </ng-container>\n\n  <!-- Vertical stepper -->\n  <ng-container *ngSwitchCase=\"'vertical'\">\n    <div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n      <ng-container\n        [ngTemplateOutlet]=\"stepTemplate\"\n        [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n      <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n        <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n             [@verticalStepTransition]=\"_getAnimationDirection(i)\"\n             (@verticalStepTransition.done)=\"_animationDone.next($event)\"\n             [id]=\"_getStepContentId(i)\"\n             [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n             [attr.aria-expanded]=\"selectedIndex === i\">\n          <div class=\"mat-vertical-content\">\n            <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n</ng-container>\n\n<!-- Common step templating -->\n<ng-template let-step=\"step\" let-i=\"i\" #stepTemplate>\n  <mat-step-header\n    [class.mat-horizontal-stepper-header]=\"orientation === 'horizontal'\"\n    [class.mat-vertical-stepper-header]=\"orientation === 'vertical'\"\n    (click)=\"step.select()\"\n    (keydown)=\"_onKeydown($event)\"\n    [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n    [id]=\"_getStepLabelId(i)\"\n    [attr.aria-posinset]=\"i + 1\"\n    [attr.aria-setsize]=\"steps.length\"\n    [attr.aria-controls]=\"_getStepContentId(i)\"\n    [attr.aria-selected]=\"selectedIndex == i\"\n    [attr.aria-label]=\"step.ariaLabel || null\"\n    [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n    [attr.aria-disabled]=\"_stepIsNavigable(i, step) ? null : true\"\n    [index]=\"i\"\n    [state]=\"_getIndicatorType(i, step.state)\"\n    [label]=\"step.stepLabel || step.label\"\n    [selected]=\"selectedIndex === i\"\n    [active]=\"_stepIsNavigable(i, step)\"\n    [optional]=\"step.optional\"\n    [errorMessage]=\"step.errorMessage\"\n    [iconOverrides]=\"_iconOverrides\"\n    [disableRipple]=\"disableRipple\"\n    [color]=\"step.color || color\"></mat-step-header>\n</ng-template>\n",
                inputs: ['selectedIndex'],
                host: {
                    '[class.mat-stepper-horizontal]': 'orientation === "horizontal"',
                    '[class.mat-stepper-vertical]': 'orientation === "vertical"',
                    '[class.mat-stepper-label-position-end]': 'orientation === "horizontal" && labelPosition == "end"',
                    '[class.mat-stepper-label-position-bottom]': 'orientation === "horizontal" && labelPosition == "bottom"',
                    '[attr.aria-orientation]': 'orientation',
                    'role': 'tablist'
                },
                animations: [
                    matStepperAnimations.horizontalStepTransition,
                    matStepperAnimations.verticalStepTransition,
                ],
                providers: [
                    { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper, useExisting: MatStepper },
                    { provide: MatHorizontalStepper, useExisting: MatStepper },
                    { provide: MatVerticalStepper, useExisting: MatStepper },
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
            }]
    }], function () { return [{ type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
            }] }]; }, { animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
            args: [MatStepHeader]
        }], _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatStep, { descendants: true }]
        }], _icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatStepperIcon, { descendants: true }]
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that moves to the next step in a stepper workflow. */
class MatStepperNext extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperNext {
}
MatStepperNext.ɵfac = /*@__PURE__*/ function () { let ɵMatStepperNext_BaseFactory; return function MatStepperNext_Factory(t) { return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepperNext)))(t || MatStepperNext); }; }();
MatStepperNext.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStepperNext, selectors: [["button", "matStepperNext", ""]], hostAttrs: [1, "mat-stepper-next"], hostVars: 1, hostBindings: function MatStepperNext_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'button[matStepperNext]',
                host: {
                    'class': 'mat-stepper-next',
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();
/** Button that moves to the previous step in a stepper workflow. */
class MatStepperPrevious extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperPrevious {
}
MatStepperPrevious.ɵfac = /*@__PURE__*/ function () { let ɵMatStepperPrevious_BaseFactory; return function MatStepperPrevious_Factory(t) { return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepperPrevious)))(t || MatStepperPrevious); }; }();
MatStepperPrevious.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStepperPrevious, selectors: [["button", "matStepperPrevious", ""]], hostAttrs: [1, "mat-stepper-previous"], hostVars: 1, hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'button[matStepperPrevious]',
                host: {
                    'class': 'mat-stepper-previous',
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatStepperModule {
}
MatStepperModule.ɵfac = function MatStepperModule_Factory(t) { return new (t || MatStepperModule)(); };
MatStepperModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatStepperModule });
MatStepperModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher], imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule,
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule,
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule,
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule,
                ],
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                    MatStepContent,
                ],
                declarations: [
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                    MatStepContent,
                ],
                providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatStepperModule, { declarations: function () { return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=stepper.js.map

/***/ }),

/***/ 3854:
/*!********************************************************************!*\
  !*** ./src/app/user-controls/lemon-rater/lemon-rater.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LemonRaterComponent": () => (/* binding */ LemonRaterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_lemon_rater_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lemon-rater.component.html */ 6679);
/* harmony import */ var _lemon_rater_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lemon-rater.component.css */ 9031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
var LemonRaterComponent_1;





let LemonRaterComponent = LemonRaterComponent_1 = class LemonRaterComponent {
    constructor() {
        this.disabled = false;
        this.ratings = Object.freeze([
            {
                value: 1,
                text: 'no zest',
            },
            {
                value: 2,
                text: 'neither a lemon or a lime ',
            },
            {
                value: 3,
                text: 'a true lemon',
            },
        ]);
        this.onChanged = () => { };
        this.onTouched = () => { };
    }
    get value() {
        return this.internalValue;
    }
    ngAfterViewInit() {
        this.setSelectedText(this.internalValue);
    }
    writeValue(obj) {
        this.internalValue = obj;
    }
    registerOnChange(fn) {
        this.onChanged = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    setRating(lemon) {
        if (!this.disabled) {
            this.internalValue = lemon.value;
            this.setDisplayText();
            this.onChanged(lemon.value);
            this.onTouched();
        }
    }
    setDisplayText() {
        this.setSelectedText(this.internalValue);
    }
    setSelectedText(value) {
        this.displayTextRef.nativeElement.textContent = this.getSelectedText(value);
    }
    getSelectedText(value) {
        var _a;
        let text = '';
        if (value) {
            text = ((_a = this.ratings.find((i) => i.value === value)) === null || _a === void 0 ? void 0 : _a.text) || '';
        }
        return text;
    }
};
LemonRaterComponent.propDecorators = {
    displayTextRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['displayText', { static: false },] }]
};
LemonRaterComponent = LemonRaterComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-lemon-rater',
        template: _raw_loader_lemon_rater_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => LemonRaterComponent_1),
                multi: true,
            },
        ],
        styles: [_lemon_rater_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LemonRaterComponent);



/***/ }),

/***/ 4508:
/*!*****************************************************************!*\
  !*** ./src/app/user-controls/lemon-rater/lemon-rater.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LemonRaterModule": () => (/* binding */ LemonRaterModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _lemon_rater_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lemon-rater.component */ 3854);




let LemonRaterModule = class LemonRaterModule {
};
LemonRaterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        declarations: [_lemon_rater_component__WEBPACK_IMPORTED_MODULE_0__.LemonRaterComponent],
        exports: [_lemon_rater_component__WEBPACK_IMPORTED_MODULE_0__.LemonRaterComponent],
    })
], LemonRaterModule);



/***/ }),

/***/ 108:
/*!*************************************************!*\
  !*** ./src/app/user/logout/logout.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/auth.service */ 384);




let LogoutComponent = class LogoutComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.logout(true);
        this.router.navigate(['/']);
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
LogoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-logout',
        template: ` <p>Logging out...</p> `,
    })
], LogoutComponent);



/***/ }),

/***/ 799:
/*!**************************************!*\
  !*** ./src/app/user/profile/data.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USStateFilter": () => (/* binding */ USStateFilter)
/* harmony export */ });
function USStateFilter(value) {
    return USStates.filter((state) => {
        return ((state.code.length === 2 && state.code.toLowerCase() === value.toLowerCase()) ||
            state.name.toLowerCase().indexOf(value.toLowerCase()) === 0);
    });
}
const USStates = [
    { code: 'AK', name: 'Alaska' },
    { code: 'AL', name: 'Alabama' },
    { code: 'AR', name: 'Arkansas' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'CA', name: 'California' },
    { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' },
    { code: 'DC', name: 'District of Columbia' },
    { code: 'DE', name: 'Delaware' },
    { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' },
    { code: 'GU', name: 'Guam' },
    { code: 'HI', name: 'Hawaii' },
    { code: 'IA', name: 'Iowa' },
    { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' },
    { code: 'IN', name: 'Indiana' },
    { code: 'KS', name: 'Kansas' },
    { code: 'KY', name: 'Kentucky' },
    { code: 'LA', name: 'Louisiana' },
    { code: 'MA', name: 'Massachusetts' },
    { code: 'MD', name: 'Maryland' },
    { code: 'ME', name: 'Maine' },
    { code: 'MI', name: 'Michigan' },
    { code: 'MN', name: 'Minnesota' },
    { code: 'MO', name: 'Missouri' },
    { code: 'MS', name: 'Mississippi' },
    { code: 'MT', name: 'Montana' },
    { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' },
    { code: 'NE', name: 'Nebraska' },
    { code: 'NH', name: 'New Hampshire' },
    { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' },
    { code: 'NV', name: 'Nevada' },
    { code: 'NY', name: 'New York' },
    { code: 'OH', name: 'Ohio' },
    { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' },
    { code: 'PA', name: 'Pennsylvania' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' },
    { code: 'SD', name: 'South Dakota' },
    { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' },
    { code: 'UT', name: 'Utah' },
    { code: 'VA', name: 'Virginia' },
    { code: 'VI', name: 'Virgin Islands' },
    { code: 'VT', name: 'Vermont' },
    { code: 'WA', name: 'Washington' },
    { code: 'WI', name: 'Wisconsin' },
    { code: 'WV', name: 'West Virginia' },
    { code: 'WY', name: 'Wyoming' },
];


/***/ }),

/***/ 9080:
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./profile.component.html */ 1255);
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ 744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! subsink */ 18);
/* harmony import */ var ts_enum_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-enum-util */ 7003);
/* harmony import */ var _auth_auth_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.enum */ 2115);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ 384);
/* harmony import */ var _common_base_form_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/base-form.class */ 9442);
/* harmony import */ var _common_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ui.service */ 6775);
/* harmony import */ var _common_validations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/validations */ 4223);
/* harmony import */ var _user_controls_field_error_field_error_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../user-controls/field-error/field-error.directive */ 3771);
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user/user */ 2665);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user/user.service */ 7354);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data */ 799);




















let ProfileComponent = class ProfileComponent extends _common_base_form_class__WEBPACK_IMPORTED_MODULE_7__.BaseFormDirective {
  constructor(formBuilder, userService, authService, uiService, route) {
    super();
    this.formBuilder = formBuilder;
    this.userService = userService;
    this.authService = authService;
    this.uiService = uiService;
    this.route = route;
    this.ErrorSets = _user_controls_field_error_field_error_directive__WEBPACK_IMPORTED_MODULE_10__.ErrorSets;
    this.Role = _auth_auth_enum__WEBPACK_IMPORTED_MODULE_5__.Role;
    this.PhoneTypes = (0,ts_enum_util__WEBPACK_IMPORTED_MODULE_4__.$enum)(_user_user__WEBPACK_IMPORTED_MODULE_11__.PhoneType).getKeys();
    this.now = new Date();
    this.minDate = new Date(this.now.getFullYear() - 100, this.now.getMonth(), this.now.getDate());
    this.userError = '';
    this.nameInitialData$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject({
      first: '',
      middle: '',
      last: ''
    });
    this.subs = new subsink__WEBPACK_IMPORTED_MODULE_3__.SubSink();
  }

  get currentUserRole() {
    return this.authService.authStatus$.value.userRole;
  }

  get phonesArray() {
    return this.formGroup.get('phones');
  }

  get dateOfBirth() {
    var _a;

    return ((_a = this.formGroup.get('dateOfBirth')) === null || _a === void 0 ? void 0 : _a.value) || this.now;
  }

  get age() {
    return this.now.getFullYear() - this.dateOfBirth.getFullYear();
  }

  ngOnInit() {
    this.formGroup = this.buildForm();

    if (this.route.snapshot.data.user) {
      this.patchUser(this.route.snapshot.data.user);
    } else {
      this.subs.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([this.loadFromCache(), this.authService.currentUser$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(([cachedUser, me]) => cachedUser != null || me != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(([cachedUser, me]) => this.patchUser(cachedUser || me))).subscribe();
    }
  }

  patchUser(user) {
    if (user) {
      this.currentUserId = user._id;
      this.patchUpdatedData(user);
      this.nameInitialData$.next(user.name);
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this.deregisterAllForms();
  }

  buildForm(initialData) {
    var _a, _b, _c, _d, _e, _f;

    const user = initialData;
    this.currentUserId = (user === null || user === void 0 ? void 0 : user._id) || '';
    const form = this.formBuilder.group({
      email: [{
        value: (user === null || user === void 0 ? void 0 : user.email) || '',
        disabled: this.currentUserRole !== _auth_auth_enum__WEBPACK_IMPORTED_MODULE_5__.Role.Manager
      }, _common_validations__WEBPACK_IMPORTED_MODULE_9__.EmailValidation],
      name: null,
      role: [{
        value: (user === null || user === void 0 ? void 0 : user.role) || '',
        disabled: this.currentUserRole !== _auth_auth_enum__WEBPACK_IMPORTED_MODULE_5__.Role.Manager
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
      level: [(user === null || user === void 0 ? void 0 : user.level) || 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
      // use the code below to test disabled condition of <app-lemon-rater>
      // level: [{ value: 2, disabled: true }, [Validators.required]],
      dateOfBirth: [(user === null || user === void 0 ? void 0 : user.dateOfBirth) || '', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
      address: this.formBuilder.group({
        line1: [((_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.line1) || '', _common_validations__WEBPACK_IMPORTED_MODULE_9__.RequiredTextValidation],
        line2: [((_b = user === null || user === void 0 ? void 0 : user.address) === null || _b === void 0 ? void 0 : _b.line2) || '', _common_validations__WEBPACK_IMPORTED_MODULE_9__.OptionalTextValidation],
        city: [((_c = user === null || user === void 0 ? void 0 : user.address) === null || _c === void 0 ? void 0 : _c.city) || '', _common_validations__WEBPACK_IMPORTED_MODULE_9__.RequiredTextValidation],
        state: [((_d = user === null || user === void 0 ? void 0 : user.address) === null || _d === void 0 ? void 0 : _d.state) || '', _common_validations__WEBPACK_IMPORTED_MODULE_9__.RequiredTextValidation],
        zip: [((_e = user === null || user === void 0 ? void 0 : user.address) === null || _e === void 0 ? void 0 : _e.zip) || '', _common_validations__WEBPACK_IMPORTED_MODULE_9__.USAZipCodeValidation]
      }),
      phones: this.formBuilder.array(this.buildPhoneArray((user === null || user === void 0 ? void 0 : user.phones) || []))
    });
    this.states$ = (_f = form.get('address.state')) === null || _f === void 0 ? void 0 : _f.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(value => (0,_data__WEBPACK_IMPORTED_MODULE_13__.USStateFilter)(value)));
    return form;
  }

  addPhone() {
    this.phonesArray.push(this.buildPhoneFormControl(this.phonesArray.value.length + 1));
  }

  buildPhoneArray(phones) {
    const groups = [];

    if ((phones === null || phones === void 0 ? void 0 : phones.length) === 0) {
      groups.push(this.buildPhoneFormControl(1));
    } else {
      phones.forEach(p => {
        groups.push(this.buildPhoneFormControl(p.id, p.type, p.digits));
      });
    }

    return groups;
  }

  buildPhoneFormControl(id, type, phoneNumber) {
    return this.formBuilder.group({
      id: [id],
      type: [type || '', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
      digits: [phoneNumber || '', _common_validations__WEBPACK_IMPORTED_MODULE_9__.USAPhoneNumberValidation]
    });
  }

  save(form) {
    var _this = this;

    return (0,C_Users_odniyonkuru_Downloads_lemon_mart_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.subs.add(_this.userService.updateUser(_this.currentUserId, form.value).subscribe(res => {
        _this.patchUser(res);

        _this.uiService.showToast('Updated user');
      }, err => _this.userError = err));
    })();
  }

  convertTypeToPhoneType(type) {
    return _user_user__WEBPACK_IMPORTED_MODULE_11__.PhoneType[(0,ts_enum_util__WEBPACK_IMPORTED_MODULE_4__.$enum)(_user_user__WEBPACK_IMPORTED_MODULE_11__.PhoneType).asKeyOrThrow(type)];
  }

  simulateLazyLoadedInitData() {
    // for demo purposes only
    this.nameInitialData$.next({
      first: 'Peter',
      middle: 'A',
      last: 'Long'
    });
  }

  loadFromCache() {
    let user = null;

    try {
      const draftUser = localStorage.getItem('draft-user');

      if (draftUser != null) {
        user = _user_user__WEBPACK_IMPORTED_MODULE_11__.User.Build(JSON.parse(draftUser));
      }

      if (user) {
        this.uiService.showToast('Loaded data from cache');
      }
    } catch (err) {
      localStorage.removeItem('draft-user');
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(user);
  }

  clearCache() {
    localStorage.removeItem('draft-user');
  }

};

ProfileComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder
}, {
  type: _user_user_service__WEBPACK_IMPORTED_MODULE_12__.UserService
}, {
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService
}, {
  type: _common_ui_service__WEBPACK_IMPORTED_MODULE_8__.UiService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute
}];

ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({
  selector: 'app-profile',
  template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__.default]
})], ProfileComponent);


/***/ }),

/***/ 9213:
/*!**********************************************!*\
  !*** ./src/app/user/user-material.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMaterialModule": () => (/* binding */ UserMaterialModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/radio */ 2613);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/stepper */ 4553);









const modules = [
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_0__.MatStepperModule,
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__.MatRadioModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDatepickerModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelectModule,
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDividerModule,
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatLineModule,
];
let UserMaterialModule = class UserMaterialModule {
};
UserMaterialModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        exports: modules,
    })
], UserMaterialModule);



/***/ }),

/***/ 454:
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth-guard.service */ 1110);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout/logout.component */ 108);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 9080);
/* harmony import */ var _user_user_resolve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.resolve */ 9536);







const routes = [
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    {
        path: 'profile/:userId',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent,
        resolve: {
            user: _user_user_resolve__WEBPACK_IMPORTED_MODULE_3__.UserResolve,
        },
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_1__.LogoutComponent },
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], UserRoutingModule);



/***/ }),

/***/ 8524:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-mask */ 9129);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-material.module */ 4519);
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth-guard.service */ 1110);
/* harmony import */ var _shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-components.module */ 173);
/* harmony import */ var _user_controls_field_error_field_error_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-controls/field-error/field-error.module */ 4124);
/* harmony import */ var _user_controls_lemon_rater_lemon_rater_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-controls/lemon-rater/lemon-rater.module */ 4508);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ 108);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ 9080);
/* harmony import */ var _user_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-material.module */ 9213);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-routing.module */ 454);
/* harmony import */ var _user_user_entity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.entity.service */ 4321);
/* harmony import */ var _user_user_resolve__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.resolve */ 9536);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.service */ 7354);


















let UserModule = class UserModule {
};
UserModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_8__.UserRoutingModule,
            _app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule,
            _user_material_module__WEBPACK_IMPORTED_MODULE_7__.UserMaterialModule,
            _user_controls_field_error_field_error_module__WEBPACK_IMPORTED_MODULE_3__.FieldErrorModule,
            _shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule,
            _user_controls_lemon_rater_lemon_rater_module__WEBPACK_IMPORTED_MODULE_4__.LemonRaterModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_17__.NgxMaskModule.forChild(),
        ],
        declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__.LogoutComponent],
        providers: [_user_user_service__WEBPACK_IMPORTED_MODULE_11__.UserService, _user_user_entity_service__WEBPACK_IMPORTED_MODULE_9__.UserEntityService, _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _user_user_resolve__WEBPACK_IMPORTED_MODULE_10__.UserResolve],
    })
], UserModule);



/***/ }),

/***/ 9031:
/*!*********************************************************************!*\
  !*** ./src/app/user-controls/lemon-rater/lemon-rater.component.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".lemons {\n  cursor: pointer;\n}\n\n.lemons:hover .lemon #fill-area {\n  fill: #ffe200 !important;\n}\n\n.lemons.disabled:hover {\n  cursor: not-allowed;\n}\n\n.lemons.disabled:hover .lemon #fill-area {\n  fill: #d8d8d8 !important;\n}\n\n.lemons .lemon {\n  float: left;\n  margin: 0px 5px;\n}\n\n.lemons .lemon #fill-area {\n  fill: #d8d8d8;\n}\n\n.lemons .lemon:hover ~ .lemon #fill-area {\n  fill: #d8d8d8 !important;\n}\n\n.lemons .lemon.selected #fill-area {\n  fill: #ffe200 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlbW9uLXJhdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoibGVtb24tcmF0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZW1vbnMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sZW1vbnM6aG92ZXIgLmxlbW9uICNmaWxsLWFyZWEge1xuICBmaWxsOiAjZmZlMjAwICFpbXBvcnRhbnQ7XG59XG5cbi5sZW1vbnMuZGlzYWJsZWQ6aG92ZXIge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ubGVtb25zLmRpc2FibGVkOmhvdmVyIC5sZW1vbiAjZmlsbC1hcmVhIHtcbiAgZmlsbDogI2Q4ZDhkOCAhaW1wb3J0YW50O1xufVxuXG4ubGVtb25zIC5sZW1vbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDBweCA1cHg7XG59XG5cbi5sZW1vbnMgLmxlbW9uICNmaWxsLWFyZWEge1xuICBmaWxsOiAjZDhkOGQ4O1xufVxuXG4ubGVtb25zIC5sZW1vbjpob3ZlciB+IC5sZW1vbiAjZmlsbC1hcmVhIHtcbiAgZmlsbDogI2Q4ZDhkOCAhaW1wb3J0YW50O1xufVxuXG4ubGVtb25zIC5sZW1vbi5zZWxlY3RlZCAjZmlsbC1hcmVhIHtcbiAgZmlsbDogI2ZmZTIwMCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ 744:
/*!****************************************************!*\
  !*** ./src/app/user/profile/profile.component.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".error {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuIl19 */");

/***/ }),

/***/ 6679:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-controls/lemon-rater/lemon-rater.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<i #displayText></i>\n<div class=\"lemons\" [ngClass]=\"{'disabled': disabled}\">\n  <ng-container *ngFor=\"let lemon of ratings\">\n    <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 513 513\" [attr.title]=\"lemon.text\"\n      class=\"lemon rating\" [ngClass]=\"{'selected': lemon.value <= value}\"\n      (mouseover)=\"displayText.textContent = !disabled ? lemon.text : ''\"\n      (mouseout)=\"setDisplayText()\" (click)=\"setRating(lemon)\">\n      <path\n        d=\"M427.497,392.197 C425.79,394.16 423.998,396.122 422.206,398.085 C418.622,402.01 414.867,406.02 410.942,409.945 C407.017,413.87 403.006,417.626 399.081,421.21 C397.118,423.002 395.156,424.794 393.193,426.501 C259.988,541.36 134.036,451.674 99.049,486.576 C82.54,505.068 54.625,507.848 34.793,492.976 C33.722,491.331 32.753,489.621 31.892,487.856 C25.492,474.8 21.652,453.637 43.839,431.364 C80.362,394.928 -7.276,270.938 132.33,131.333 C271.936,-8.272 395.925,79.364 432.362,42.842 C443.177,30.243 459.725,24.113 476.138,26.629 C482.491,27.84 488.549,30.275 493.973,33.798 C508.845,53.63 506.064,81.544 487.573,98.053 C452.67,133.039 542.355,258.991 427.497,392.197 Z\"\n        id=\"Path\" fill=\"#FFA800\"></path>\n      <path\n        d=\"M464.019,84.034 C427.582,120.557 515.219,244.461 375.528,384.066 C235.923,523.757 112.019,436.119 75.496,472.557 C64.738,485.137 48.263,491.295 31.891,488.856 C29.952,488.513 28.041,488.028 26.174,487.405 C25.662,486.979 25.406,486.722 25.406,486.722 C25.406,486.722 -11.885,449.43 24.553,413.078 C60.478,377.067 -35.607,244.63 95.38,107.074 C96.404,106.049 97.428,105.026 98.452,103.916 C99.391,102.979 100.329,102.039 101.268,101.186 C102.889,99.564 104.511,98.029 106.047,96.579 C108.436,94.36 110.826,92.227 113.13,90.094 C142.217,63.381 176.957,43.575 214.762,32.152 C217.237,31.383 219.711,30.787 222.187,30.189 C312.725,8.685 387.392,50.157 413.077,24.557 C425.616,10.032 445.86,4.827 463.85,11.501 C464.921,12.326 465.947,13.209 466.922,14.146 C470.649,18.156 473.755,22.701 476.138,27.629 C482.366,40.77 486.206,61.847 464.019,84.034 Z\"\n        id=\"Path\" fill=\"#FFFFFF\"></path>\n      <path\n        d=\"M388.329,396.866 C248.716,536.479 126.866,450.956 90.395,487.426 C53.996,523.825 21.149,490.979 21.149,490.979 C21.149,490.979 -11.698,458.132 24.702,421.733 C61.172,385.263 -24.351,263.412 115.262,123.8 C254.875,-15.812 376.725,69.71 413.195,33.24 C449.594,-3.159 482.441,29.687 482.441,29.687 C482.441,29.687 515.288,62.534 478.888,98.933 C442.418,135.403 527.942,257.253 388.329,396.866 Z\"\n        id=\"fill-area\" fill=\"#FFFFFF\"></path>\n      <g id=\"Group\" fill=\"#000000\">\n        <path\n          d=\"M64.179,512.124 C47.333,511.562 31.326,504.639 19.379,492.749 C4.404,477.774 -15.046,440.582 18.521,407.016 C27.863,397.674 24.821,375.224 20.963,346.799 C13.18,289.466 1.422,202.824 77.655,113.974 C79.641,111.661 82.71,110.583 85.706,111.146 C88.702,111.709 91.171,113.828 92.181,116.704 C93.191,119.58 92.591,122.777 90.605,125.091 C19.362,208.124 30.062,286.949 37.87,344.508 C42.362,377.608 45.912,403.758 30.587,419.083 C1.279,448.391 28.287,477.483 31.47,480.7 C34.637,483.842 63.728,510.858 93.045,481.542 C108.37,466.217 134.512,469.767 167.62,474.259 C230.028,482.726 315.52,494.326 404.92,404.926 C494.328,315.526 482.72,230.043 474.253,167.626 C469.761,134.526 466.211,108.376 481.536,93.051 C510.844,63.743 483.836,34.651 480.653,31.434 C477.486,28.292 448.386,1.284 419.078,30.592 C403.761,45.909 377.595,42.367 344.503,37.875 C292.161,30.767 220.512,21.05 144.611,75.275 C140.777,78.013 135.449,77.125 132.711,73.291 C129.973,69.457 130.861,64.129 134.695,61.391 C216.078,3.233 294.745,13.908 346.795,20.966 C375.228,24.808 397.67,27.858 407.012,18.524 C440.579,-15.059 477.762,4.399 492.745,19.382 C507.72,34.357 527.17,71.549 493.603,105.115 C484.261,114.457 487.303,136.907 491.161,165.332 C499.611,227.566 512.369,321.607 416.986,416.99 C321.611,512.365 227.561,499.623 165.328,491.165 C136.911,487.315 114.453,484.265 105.111,493.607 C94.583,505.13 79.785,511.824 64.179,512.124 Z\"\n          id=\"Path\"></path>\n        <path\n          d=\"M109.287,100.757 C108.172,100.743 107.071,100.511 106.045,100.074 C105.01,99.642 104.058,99.036 103.228,98.282 C101.622,96.677 100.73,94.493 100.753,92.223 C100.767,91.65 100.823,91.079 100.92,90.515 C101.016,89.981 101.191,89.465 101.437,88.982 C101.62,88.438 101.878,87.921 102.204,87.449 C102.518,87 102.86,86.571 103.229,86.166 C106.65,83.008 111.924,83.008 115.346,86.166 C115.687,86.591 116.029,87.016 116.371,87.449 C116.697,87.922 116.955,88.438 117.138,88.982 C117.384,89.465 117.558,89.982 117.655,90.515 C117.752,91.08 117.807,91.651 117.822,92.223 C117.845,94.493 116.953,96.677 115.347,98.282 C114.518,99.036 113.565,99.642 112.53,100.074 C111.504,100.512 110.402,100.744 109.287,100.757 Z\"\n          id=\"Path\"></path>\n        <path\n          d=\"M293.237,66.916 C293.087,66.916 292.937,66.916 292.787,66.907 C288.729,66.69 284.623,66.571 280.47,66.549 C276.312,66.549 272.17,66.599 267.953,66.807 C264.896,66.978 261.981,65.499 260.314,62.93 C258.647,60.361 258.485,57.096 259.887,54.375 C261.29,51.653 264.043,49.891 267.102,49.758 C271.635,49.541 276.102,49.491 280.569,49.483 C284.986,49.508 289.344,49.641 293.669,49.858 C298.287,50.099 301.874,53.975 301.756,58.598 C301.64,63.221 297.862,66.91 293.237,66.916 L293.237,66.916 Z\"\n          id=\"Path\"></path>\n        <path\n          d=\"M80.695,193.099011 C79.302,193.101 77.931,192.758 76.703,192.099 C74.703,191.04 73.206,189.229 72.543,187.066 C71.88,184.902 72.106,182.564 73.17,180.566 C75.887,175.449 78.853,170.358 81.995,165.433 C85.245,160.325 88.803,155.191 92.553,150.191 C96.353,145.116 100.536,139.949 104.986,134.841 C109.478,129.683 114.336,124.491 119.411,119.416 C124.486,114.341 129.678,109.483 134.836,104.991 C139.944,100.541 145.111,96.358 150.194,92.549 C155.186,88.807 160.319,85.249 165.444,81.991 C170.352,78.858 175.444,75.891 180.561,73.174 C185.519,70.541 190.561,68.124 195.544,65.982 C200.477,63.849 205.452,61.932 210.344,60.274 C215.127,58.649 220.044,57.191 224.936,55.949 C227.889,55.196 231.02,56.075 233.149,58.256 C235.278,60.437 236.082,63.588 235.257,66.523 C234.433,69.457 232.105,71.729 229.152,72.482 C224.685,73.624 220.202,74.949 215.835,76.44 C211.368,77.948 206.81,79.707 202.293,81.648 C197.726,83.623 193.101,85.84 188.551,88.248 C183.843,90.748 179.151,93.49 174.609,96.381 C169.842,99.414 165.084,102.714 160.434,106.206 C155.676,109.764 150.834,113.681 146.051,117.856 C141.176,122.098 136.276,126.681 131.476,131.481 C126.676,136.281 122.093,141.181 117.851,146.056 C113.676,150.839 109.759,155.681 106.209,160.431 C102.709,165.089 99.409,169.848 96.384,174.598 C93.484,179.156 90.742,183.848 88.234,188.565 C86.759,191.359 83.856,193.104 80.695,193.099011 Z\"\n          id=\"Path\"></path>\n        <path\n          d=\"M213.395,452.591 C212.28,452.577 211.179,452.345 210.153,451.908 C209.12,451.473 208.168,450.867 207.336,450.116 C204.892,447.671 204.182,443.985 205.544,440.808 C205.938,439.754 206.548,438.794 207.336,437.991 C210.761,434.841 216.028,434.841 219.453,437.991 C220.241,438.794 220.851,439.754 221.245,440.808 C222.156,442.876 222.156,445.232 221.245,447.3 C220.811,448.334 220.205,449.286 219.453,450.117 C217.847,451.718 215.665,452.61 213.395,452.591 L213.395,452.591 Z\"\n          id=\"Path\"></path>\n        <path\n          d=\"M249.829,440.466097 C248.688,440.455 247.559,440.226 246.504,439.791 C245.463,439.376 244.529,438.732 243.771,437.908 C242.182,436.326 241.291,434.175 241.296,431.933 C241.281,430.796 241.485,429.668 241.896,428.608 C242.341,427.586 242.977,426.658 243.771,425.875 C244.553,425.079 245.481,424.443 246.504,424 C248.61,423.15 250.964,423.15 253.071,424 C254.095,424.443 255.023,425.079 255.804,425.875 C256.624,426.636 257.265,427.569 257.679,428.608 C258.121,429.661 258.353,430.791 258.362,431.933 C258.356,434.19 257.433,436.347 255.804,437.908 C254.252,439.551 252.089,440.477 249.829,440.466097 Z\"\n          id=\"Path\"></path>\n        <path\n          d=\"M219.454,422.208 C217.184,422.23 215.001,421.338 213.396,419.733 C211.791,418.128 210.899,415.945 210.921,413.675 C210.935,410.837 212.36,408.193 214.721,406.618 C217.082,405.044 220.071,404.747 222.696,405.825 C223.76,406.238 224.721,406.878 225.513,407.7 C226.283,408.485 226.892,409.414 227.305,410.433 C227.742,411.459 227.975,412.56 227.988,413.675 C228.003,414.812 227.799,415.94 227.388,417 C226.477,419.084 224.796,420.735 222.696,421.608 C221.667,422.022 220.564,422.226 219.454,422.208 L219.454,422.208 Z\"\n          id=\"Path\"></path>\n        <path\n          d=\"M183.012,440.407 C181.897,440.397 180.795,440.165 179.77,439.724 C178.749,439.281 177.823,438.644 177.045,437.849 C175.411,436.256 174.486,434.072 174.478,431.79 C174.5,430.676 174.732,429.576 175.161,428.548 C175.575,427.507 176.219,426.573 177.044,425.815 C179.052,423.805 181.937,422.941 184.719,423.515 C185.24,423.617 185.753,423.759 186.252,423.94 C186.852,424.198 187.277,424.457 187.794,424.707 C188.239,425.052 188.665,425.422 189.069,425.815 C189.865,426.598 190.505,427.526 190.952,428.548 C191.36,429.579 191.561,430.681 191.544,431.79 C191.57,432.929 191.369,434.062 190.952,435.123 C190.504,436.143 189.865,437.068 189.069,437.848 C188.29,438.643 187.365,439.28 186.344,439.723 C185.289,440.166 184.157,440.399 183.012,440.407 Z\"\n          id=\"Path\"></path>\n        <path\n          d=\"M243.77,397.974 C242.627,397.969 241.497,397.737 240.445,397.291 C239.405,396.879 238.471,396.238 237.712,395.416 C236.112,393.842 235.219,391.686 235.237,389.441 C235.222,388.304 235.426,387.176 235.837,386.116 C236.909,383.466 239.246,381.536 242.051,380.985 C244.856,380.434 247.75,381.336 249.745,383.383 C251.38,384.958 252.303,387.13 252.303,389.4 C252.303,391.67 251.379,393.842 249.745,395.417 C248.986,396.239 248.052,396.88 247.012,397.292 C245.987,397.728 244.885,397.96 243.77,397.974 L243.77,397.974 Z\"\n          id=\"Path\"></path>\n        <path\n          d=\"M274.062,416.149 C271.819,416.173 269.663,415.279 268.095,413.674 C266.26,411.881 265.336,409.352 265.584,406.798 C265.832,404.244 267.224,401.94 269.37,400.533 C269.804,400.194 270.295,399.934 270.82,399.766 C271.329,399.506 271.879,399.334 272.445,399.258 C273.538,399 274.677,399 275.77,399.258 C276.334,399.347 276.881,399.518 277.395,399.766 C277.911,399.954 278.399,400.212 278.845,400.533 L280.12,401.558 C280.905,402.382 281.542,403.335 282.003,404.375 C283.087,407.015 282.78,410.022 281.184,412.389 C279.589,414.755 276.916,416.166 274.062,416.149 L274.062,416.149 Z\"\n          id=\"Path\"></path>\n      </g>\n    </svg>\n  </ng-container>\n</div>\n");

/***/ }),

/***/ 1255:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-toolbar color=\"accent\">\n  <h5>User Profile</h5>\n</mat-toolbar>\n\n<div *ngIf=\"formGroup\">\n  <mat-horizontal-stepper #stepper=\"matHorizontalStepper\">\n    <mat-step [stepControl]=\"formGroup\">\n      <form [formGroup]=\"formGroup\">\n        <ng-template matStepLabel>Account Information</ng-template>\n        <div class=\"stepContent\">\n          <app-name-input [initialData]=\"nameInitialData$ | async\"\n            (formReady)=\"registerForm('name', $event)\">\n          </app-name-input>\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px\">\n            <mat-form-field appearance=\"outline\" fxFlex=\"50%\">\n              <mat-label>Date of Birth</mat-label>\n              <input matInput aria-label=\"Date of Birth\" formControlName=\"dateOfBirth\"\n                [min]=\"minDate\" [max]=\"now\" [matDatepicker]=\"dateOfBirthPicker\" #dob />\n              <mat-hint *ngIf=\"formGroup.get('dateOfBirth')?.value\">\n                {{ age }} year(s) old\n              </mat-hint>\n              <mat-datepicker-toggle matSuffix [for]=\"dateOfBirthPicker\">\n              </mat-datepicker-toggle>\n              <mat-datepicker #dateOfBirthPicker></mat-datepicker>\n              <mat-error [input]=\"dob\" [group]=\"formGroup\"\n                [appFieldError]=\"{error: 'invalid', message: 'Date must be within the last 100 years'}\">\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" fxFlex=\"50%\">\n              <mat-label>E-mail</mat-label>\n              <input matInput aria-label=\"E-mail\" formControlName=\"email\" #email />\n              <mat-hint>Only your manager can update your e-mail.</mat-hint>\n              <mat-error [input]=\"email\" [group]=\"formGroup\" appFieldError=\"invalid\">\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"margin-top\"\n            fxLayoutGap=\"10px\">\n            <mat-label class=\"mat-body-1\">Role</mat-label>\n            <mat-radio-group formControlName=\"role\">\n              <mat-radio-button style=\"margin-right: 10px;\" [value]=\"Role.None\">\n                <span class=\"mat-body-1\">None</span>\n              </mat-radio-button>\n              <mat-radio-button style=\"margin-right: 10px;\" [value]=\"Role.Cashier\">\n                <span class=\"mat-body-1\">Cashier</span>\n              </mat-radio-button>\n              <mat-radio-button style=\"margin-right: 10px;\" [value]=\"Role.Clerk\">\n                <span class=\"mat-body-1\">Clerk</span>\n              </mat-radio-button>\n              <mat-radio-button style=\"margin-right: 10px;\" [value]=\"Role.Manager\">\n                <span class=\"mat-body-1\">Manager</span>\n              </mat-radio-button>\n            </mat-radio-group>\n            <mat-error\n              *ngIf=\"formGroup.get('role')?.hasError('required') && formGroup.get('role')?.touched\">\n              <span class=\"mat-caption\">Role is required</span>\n            </mat-error>\n          </div>\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"margin-top\"\n            fxLayoutGap=\"10px\">\n            <mat-label class=\"mat-body-1\">Select the Limoncu level:\n              <app-lemon-rater formControlName=\"level\">\n              </app-lemon-rater>\n            </mat-label>\n          </div>\n        </div>\n        <div fxLayout=\"row\" class=\"margin-top\">\n          <div class=\"flex-spacer\"></div>\n          <div *ngIf=\"userError\" class=\"mat-caption error\">{{ userError }}</div>\n          <button mat-button (click)=\"simulateLazyLoadedInitData()\">Demo Lazy Load\n            Name</button>\n          <button mat-raised-button matStepperNext color=\"accent\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"formGroup\">\n      <form [formGroup]=\"formGroup\">\n        <ng-template matStepLabel>Contact Information</ng-template>\n        <div class=\"stepContent\">\n          <div formGroupName=\"address\">\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px\">\n              <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Address Line 1</mat-label>\n                <input matInput aria-label=\"Address Line 1\" formControlName=\"line1\"\n                  #line1 />\n                <mat-error [input]=\"line1\" [group]=\"formGroup.get('address')\"\n                  [appFieldError]=\"ErrorSets.RequiredText\">\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px\">\n              <mat-form-field appearance=\"outline\" fxFlex>\n                <mat-label>Line 2</mat-label>\n                <input matInput aria-label=\"Address Line 2\" formControlName=\"line2\"\n                  #line2 />\n                <mat-hint>Optional</mat-hint>\n                <mat-error [input]=\"line2\" [group]=\"formGroup.get('address')\"\n                  [appFieldError]=\"ErrorSets.OptionalText\">\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px\">\n              <mat-form-field appearance=\"outline\" fxFlex=\"40%\">\n                <mat-label>City</mat-label>\n                <input matInput aria-label=\"City\" formControlName=\"city\" #city />\n                <mat-error [input]=\"city\" [group]=\"formGroup.get('address')\"\n                  [appFieldError]=\"ErrorSets.RequiredText\">\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" fxFlex=\"30%\">\n                <mat-label>State</mat-label>\n                <input type=\"text\" aria-label=\"State\" matInput formControlName=\"state\"\n                  [matAutocomplete]=\"stateAuto\" #state />\n                <mat-autocomplete #stateAuto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let state of (states$ | async)\"\n                    [value]=\"state.name\">\n                    {{ state.name }}\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error [input]=\"state\" [group]=\"formGroup.get('address')\"\n                  appFieldError=\"required\">\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" fxFlex=\"30%\">\n                <mat-label>Zip Code</mat-label>\n                <input matInput aria-label=\"Zip Code\" formControlName=\"zip\" #zip />\n                <mat-error [input]=\"zip\" [group]=\"formGroup.get('address')\"\n                  appFieldError=\"invalid\">\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n            <mat-list formArrayName=\"phones\">\n              <h2 mat-subheader>Phone Number(s)\n                <button mat-button (click)=\"addPhone()\">\n                  <mat-icon>add</mat-icon>\n                  Add Phone\n                </button>\n              </h2>\n              <mat-list-item style=\"margin-top: 36px;\"\n                *ngFor=\"let position of phonesArray.controls; let i = index\"\n                [formGroupName]=\"i\">\n                <mat-form-field appearance=\"outline\" fxFlex=\"100px\">\n                  <mat-label>Type</mat-label>\n                  <mat-select formControlName=\"type\">\n                    <mat-option *ngFor=\"let type of PhoneTypes\"\n                      [value]=\"convertTypeToPhoneType(type)\">\n                      {{ type }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\" fxFlex fxFlexOffset=\"10px\">\n                  <mat-label>Number</mat-label>\n                  <input matInput type=\"text\" formControlName=\"digits\"\n                    aria-label=\"Phone number\" mask=\"(000) 000-0000\" prefix=\"+1\"\n                    [showMaskTyped]=\"true\" />\n                  <mat-error\n                    *ngIf=\"phonesArray.controls[i].invalid && phonesArray.controls[i].touched\">\n                    A valid phone number is required\n                  </mat-error>\n                </mat-form-field>\n                <button fxFlex=\"33px\" mat-icon-button (click)=\"phonesArray.removeAt(i)\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </mat-list-item>\n            </mat-list>\n          </div>\n        </div>\n        <div fxLayout=\"row\" class=\"margin-top\">\n          <button mat-button matStepperPrevious>Back</button>\n          <div class=\"flex-spacer\"></div>\n          <div *ngIf=\"userError\" class=\"mat-caption error\">{{ userError }}</div>\n          <button mat-raised-button matStepperNext color=\"accent\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"formGroup\">\n      <form [formGroup]=\"formGroup\" (ngSubmit)=\"save(formGroup)\">\n        <ng-template matStepLabel>Review</ng-template>\n        <div class=\"stepContent\">\n          Review and update your user profile.\n          <app-view-user [user]=\"formGroup.getRawValue()\"></app-view-user>\n        </div>\n        <div fxLayout=\"row\" class=\"margin-top\">\n          <button mat-button matStepperPrevious>Back</button>\n          <div class=\"flex-spacer\"></div>\n          <div *ngIf=\"userError\" class=\"mat-caption error\">{{ userError }}</div>\n          <button mat-button color=\"warn\"\n            (click)=\"stepper.reset(); clearCache()\">Reset</button>\n          <button mat-raised-button matStepperNext color=\"primary\" type=\"submit\"\n            [disabled]=\"formGroup.invalid\">\n            Update\n          </button>\n        </div>\n      </form>\n    </mat-step>\n  </mat-horizontal-stepper>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_user_user_module_ts.js.map
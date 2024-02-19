import { IonPage, IonToolbar, IonContent, IonGrid, IonCol, IonInput, IonIcon, IonButton, IonButtons } from '@ionic/vue';
import { search, filterOutline } from 'ionicons/icons';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './FoodList.vue';

function __VLS_template () {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'star-rating'?: boolean; } &
{ 'star-rating'?: boolean; } &
{ 'star-rating'?: boolean; } &
{ 'filled'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'IonPage', typeof __VLS_localComponents, "IonPage", "ionPage", "ion-page"> &
__VLS_WithComponent<'IonContent', typeof __VLS_localComponents, "IonContent", "ionContent", "ion-content"> &
__VLS_WithComponent<'IonGrid', typeof __VLS_localComponents, "IonGrid", "ionGrid", "ion-grid"> &
__VLS_WithComponent<'IonCol', typeof __VLS_localComponents, "IonCol", "ionCol", "ion-col"> &
__VLS_WithComponent<'IonInput', typeof __VLS_localComponents, "IonInput", "ionInput", "ion-input"> &
__VLS_WithComponent<'IonIcon', typeof __VLS_localComponents, "IonIcon", "ionIcon", "ion-icon"> &
__VLS_WithComponent<'IonToolbar', typeof __VLS_localComponents, "IonToolbar", "ionToolbar", "ion-toolbar"> &
__VLS_WithComponent<'IonButtons', typeof __VLS_localComponents, "IonButtons", "ionButtons", "ion-buttons"> &
__VLS_WithComponent<'IonButton', typeof __VLS_localComponents, "IonButton", "ionButton", "ion-button">;
__VLS_components.IonPage; __VLS_components.IonPage; __VLS_components.ionPage; __VLS_components.ionPage; __VLS_components["ion-page"]; __VLS_components["ion-page"];
// @ts-ignore
[IonPage, IonPage,];
__VLS_components.IonContent; __VLS_components.IonContent; __VLS_components.ionContent; __VLS_components.ionContent; __VLS_components["ion-content"]; __VLS_components["ion-content"];
// @ts-ignore
[IonContent, IonContent,];
__VLS_components.IonGrid; __VLS_components.IonGrid; __VLS_components.ionGrid; __VLS_components.ionGrid; __VLS_components["ion-grid"]; __VLS_components["ion-grid"];
// @ts-ignore
[IonGrid, IonGrid,];
__VLS_components.IonCol; __VLS_components.IonCol; __VLS_components.IonCol; __VLS_components.IonCol; __VLS_components.IonCol; __VLS_components.IonCol; __VLS_components.ionCol; __VLS_components.ionCol; __VLS_components.ionCol; __VLS_components.ionCol; __VLS_components.ionCol; __VLS_components.ionCol; __VLS_components["ion-col"]; __VLS_components["ion-col"]; __VLS_components["ion-col"]; __VLS_components["ion-col"]; __VLS_components["ion-col"]; __VLS_components["ion-col"];
// @ts-ignore
[IonCol, IonCol, IonCol, IonCol, IonCol, IonCol,];
__VLS_components.IonInput; __VLS_components.IonInput; __VLS_components.ionInput; __VLS_components.ionInput; __VLS_components["ion-input"]; __VLS_components["ion-input"];
// @ts-ignore
[IonInput, IonInput,];
__VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.ionIcon; __VLS_components.ionIcon; __VLS_components.ionIcon; __VLS_components.ionIcon; __VLS_components["ion-icon"]; __VLS_components["ion-icon"]; __VLS_components["ion-icon"]; __VLS_components["ion-icon"];
// @ts-ignore
[IonIcon, IonIcon, IonIcon, IonIcon,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.IonToolbar; __VLS_components.IonToolbar; __VLS_components.ionToolbar; __VLS_components.ionToolbar; __VLS_components["ion-toolbar"]; __VLS_components["ion-toolbar"];
// @ts-ignore
[IonToolbar, IonToolbar,];
__VLS_components.IonButtons; __VLS_components.IonButtons; __VLS_components.ionButtons; __VLS_components.ionButtons; __VLS_components["ion-buttons"]; __VLS_components["ion-buttons"];
// @ts-ignore
[IonButtons, IonButtons,];
__VLS_components.IonButton; __VLS_components.IonButton; __VLS_components.ionButton; __VLS_components.ionButton; __VLS_components["ion-button"]; __VLS_components["ion-button"];
// @ts-ignore
[IonButton, IonButton,];
__VLS_intrinsicElements.img;
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
{
const __VLS_0 = ({} as 'IonPage' extends keyof typeof __VLS_ctx ? { 'IonPage': typeof __VLS_ctx.IonPage; } : 'ionPage' extends keyof typeof __VLS_ctx ? { 'IonPage': typeof __VLS_ctx.ionPage; } : 'ion-page' extends keyof typeof __VLS_ctx ? { 'IonPage': (typeof __VLS_ctx)["ion-page"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonPage;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { IonPage: typeof __VLS_0; }).IonPage;
({} as { IonPage: typeof __VLS_0; }).IonPage;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'IonContent' extends keyof typeof __VLS_ctx ? { 'IonContent': typeof __VLS_ctx.IonContent; } : 'ionContent' extends keyof typeof __VLS_ctx ? { 'IonContent': typeof __VLS_ctx.ionContent; } : 'ion-content' extends keyof typeof __VLS_ctx ? { 'IonContent': (typeof __VLS_ctx)["ion-content"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonContent;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, fullscreen: ((true)), class: ("ion-padding"), }));
({} as { IonContent: typeof __VLS_5; }).IonContent;
({} as { IonContent: typeof __VLS_5; }).IonContent;
const __VLS_7 = __VLS_6({ ...{}, fullscreen: ((true)), class: ("ion-padding"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, fullscreen: ((true)), class: ("ion-padding"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'IonGrid' extends keyof typeof __VLS_ctx ? { 'IonGrid': typeof __VLS_ctx.IonGrid; } : 'ionGrid' extends keyof typeof __VLS_ctx ? { 'IonGrid': typeof __VLS_ctx.ionGrid; } : 'ion-grid' extends keyof typeof __VLS_ctx ? { 'IonGrid': (typeof __VLS_ctx)["ion-grid"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonGrid;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: ("tw-overflow-hidden"), }));
({} as { IonGrid: typeof __VLS_10; }).IonGrid;
({} as { IonGrid: typeof __VLS_10; }).IonGrid;
const __VLS_12 = __VLS_11({ ...{}, class: ("tw-overflow-hidden"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("tw-overflow-hidden"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'IonCol' extends keyof typeof __VLS_ctx ? { 'IonCol': typeof __VLS_ctx.IonCol; } : 'ionCol' extends keyof typeof __VLS_ctx ? { 'IonCol': typeof __VLS_ctx.ionCol; } : 'ion-col' extends keyof typeof __VLS_ctx ? { 'IonCol': (typeof __VLS_ctx)["ion-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonCol;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
({} as { IonCol: typeof __VLS_15; }).IonCol;
({} as { IonCol: typeof __VLS_15; }).IonCol;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = ({} as 'IonInput' extends keyof typeof __VLS_ctx ? { 'IonInput': typeof __VLS_ctx.IonInput; } : 'ionInput' extends keyof typeof __VLS_ctx ? { 'IonInput': typeof __VLS_ctx.ionInput; } : 'ion-input' extends keyof typeof __VLS_ctx ? { 'IonInput': (typeof __VLS_ctx)["ion-input"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonInput;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, class: ("tw-border tw-border-gray-300 tw-rounded-[16px] tw-h-16 placeholder-px-5 "), placeholder: ("try our new Steak Fries Veggies"), }));
({} as { IonInput: typeof __VLS_20; }).IonInput;
({} as { IonInput: typeof __VLS_20; }).IonInput;
const __VLS_22 = __VLS_21({ ...{}, class: ("tw-border tw-border-gray-300 tw-rounded-[16px] tw-h-16 placeholder-px-5 "), placeholder: ("try our new Steak Fries Veggies"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("tw-border tw-border-gray-300 tw-rounded-[16px] tw-h-16 placeholder-px-5 "), placeholder: ("try our new Steak Fries Veggies"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = ({} as 'IonIcon' extends keyof typeof __VLS_ctx ? { 'IonIcon': typeof __VLS_ctx.IonIcon; } : 'ionIcon' extends keyof typeof __VLS_ctx ? { 'IonIcon': typeof __VLS_ctx.ionIcon; } : 'ion-icon' extends keyof typeof __VLS_ctx ? { 'IonIcon': (typeof __VLS_ctx)["ion-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonIcon;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, "aria-hidden": ("true"), icon: ((__VLS_ctx.search)), slot: ("start"), class: ("tw-size-6 tw-pl-5 tw-text-[#D71921]"), }));
({} as { IonIcon: typeof __VLS_25; }).IonIcon;
({} as { IonIcon: typeof __VLS_25; }).IonIcon;
const __VLS_27 = __VLS_26({ ...{}, "aria-hidden": ("true"), icon: ((__VLS_ctx.search)), slot: ("start"), class: ("tw-size-6 tw-pl-5 tw-text-[#D71921]"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, "aria-hidden": ("true"), icon: ((__VLS_ctx.search)), slot: ("start"), class: ("tw-size-6 tw-pl-5 tw-text-[#D71921]"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
{
const __VLS_30 = ({} as 'IonIcon' extends keyof typeof __VLS_ctx ? { 'IonIcon': typeof __VLS_ctx.IonIcon; } : 'ionIcon' extends keyof typeof __VLS_ctx ? { 'IonIcon': typeof __VLS_ctx.ionIcon; } : 'ion-icon' extends keyof typeof __VLS_ctx ? { 'IonIcon': (typeof __VLS_ctx)["ion-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonIcon;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, "aria-hidden": ("true"), icon: ((__VLS_ctx.filterOutline)), slot: ("end"), class: ("tw-size-6 tw-pr-5 tw-text-[#D71921]"), }));
({} as { IonIcon: typeof __VLS_30; }).IonIcon;
({} as { IonIcon: typeof __VLS_30; }).IonIcon;
const __VLS_32 = __VLS_31({ ...{}, "aria-hidden": ("true"), icon: ((__VLS_ctx.filterOutline)), slot: ("end"), class: ("tw-size-6 tw-pr-5 tw-text-[#D71921]"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, "aria-hidden": ("true"), icon: ((__VLS_ctx.filterOutline)), slot: ("end"), class: ("tw-size-6 tw-pr-5 tw-text-[#D71921]"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
}
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
{
const __VLS_35 = ({} as 'IonCol' extends keyof typeof __VLS_ctx ? { 'IonCol': typeof __VLS_ctx.IonCol; } : 'ionCol' extends keyof typeof __VLS_ctx ? { 'IonCol': typeof __VLS_ctx.ionCol; } : 'ion-col' extends keyof typeof __VLS_ctx ? { 'IonCol': (typeof __VLS_ctx)["ion-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonCol;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, }));
({} as { IonCol: typeof __VLS_35; }).IonCol;
({} as { IonCol: typeof __VLS_35; }).IonCol;
const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
const __VLS_40 = __VLS_intrinsicElements["div"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, class: ("tw-flex tw-flex-nowrap tw-overflow-x-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("tw-flex tw-flex-nowrap tw-overflow-x-auto"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
{
const __VLS_45 = __VLS_intrinsicElements["div"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{}, class: ("tw-flex tw-flex-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, class: ("tw-flex tw-flex-nowrap"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
for (const [category, index] of __VLS_getVForSourceType((__VLS_ctx.filter_category)!)) {
{
const __VLS_50 = __VLS_intrinsicElements["div"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
const __VLS_52 = __VLS_51({ ...{}, key: ((index)), class: ("tw-flex-none tw-mr-1 tw-h-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, key: ((index)), class: ("tw-flex-none tw-mr-1 tw-h-auto"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
{
const __VLS_55 = ({} as 'IonToolbar' extends keyof typeof __VLS_ctx ? { 'IonToolbar': typeof __VLS_ctx.IonToolbar; } : 'ionToolbar' extends keyof typeof __VLS_ctx ? { 'IonToolbar': typeof __VLS_ctx.ionToolbar; } : 'ion-toolbar' extends keyof typeof __VLS_ctx ? { 'IonToolbar': (typeof __VLS_ctx)["ion-toolbar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonToolbar;
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, }));
({} as { IonToolbar: typeof __VLS_55; }).IonToolbar;
({} as { IonToolbar: typeof __VLS_55; }).IonToolbar;
const __VLS_57 = __VLS_56({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
{
const __VLS_60 = ({} as 'IonButtons' extends keyof typeof __VLS_ctx ? { 'IonButtons': typeof __VLS_ctx.IonButtons; } : 'ionButtons' extends keyof typeof __VLS_ctx ? { 'IonButtons': typeof __VLS_ctx.ionButtons; } : 'ion-buttons' extends keyof typeof __VLS_ctx ? { 'IonButtons': (typeof __VLS_ctx)["ion-buttons"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonButtons;
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, slot: ("start"), }));
({} as { IonButtons: typeof __VLS_60; }).IonButtons;
({} as { IonButtons: typeof __VLS_60; }).IonButtons;
const __VLS_62 = __VLS_61({ ...{}, slot: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, slot: ("start"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
{
const __VLS_65 = ({} as 'IonButton' extends keyof typeof __VLS_ctx ? { 'IonButton': typeof __VLS_ctx.IonButton; } : 'ionButton' extends keyof typeof __VLS_ctx ? { 'IonButton': typeof __VLS_ctx.ionButton; } : 'ion-button' extends keyof typeof __VLS_ctx ? { 'IonButton': (typeof __VLS_ctx)["ion-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonButton;
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, class: ((category.name != 'All' ? 'tw-bg-[#DEE2E6] tw-rounded-[16px] tw-w-[auto] tw-h-[43px] tw-text-[#6C757D] tw-font-bold' : 'tw-bg-[#D71921] tw-rounded-[16px] tw-w-[auto] tw-h-[43px] tw-text-[#FFFFFF] tw-font-bold')), }));
({} as { IonButton: typeof __VLS_65; }).IonButton;
({} as { IonButton: typeof __VLS_65; }).IonButton;
const __VLS_67 = __VLS_66({ ...{}, class: ((category.name != 'All' ? 'tw-bg-[#DEE2E6] tw-rounded-[16px] tw-w-[auto] tw-h-[43px] tw-text-[#6C757D] tw-font-bold' : 'tw-bg-[#D71921] tw-rounded-[16px] tw-w-[auto] tw-h-[43px] tw-text-[#FFFFFF] tw-font-bold')), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, class: ((category.name != 'All' ? 'tw-bg-[#DEE2E6] tw-rounded-[16px] tw-w-[auto] tw-h-[43px] tw-text-[#6C757D] tw-font-bold' : 'tw-bg-[#D71921] tw-rounded-[16px] tw-w-[auto] tw-h-[43px] tw-text-[#FFFFFF] tw-font-bold')), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
__VLS_styleScopedClasses = (category.name != 'All' ? 'tw-bg-[#DEE2E6] tw-rounded-[16px] tw-w-[auto] tw-h-[43px] tw-text-[#6C757D] tw-font-bold' : 'tw-bg-[#D71921] tw-rounded-[16px] tw-w-[auto] tw-h-[43px] tw-text-[#FFFFFF] tw-font-bold');
(category.name);
(__VLS_68.slots!).default;
}
(__VLS_63.slots!).default;
}
(__VLS_58.slots!).default;
}
(__VLS_53.slots!).default;
}
// @ts-ignore
[search, search, search, filterOutline, filterOutline, filterOutline, filter_category,];
}
(__VLS_48.slots!).default;
}
(__VLS_43.slots!).default;
}
(__VLS_38.slots!).default;
}
{
const __VLS_70 = ({} as 'IonCol' extends keyof typeof __VLS_ctx ? { 'IonCol': typeof __VLS_ctx.IonCol; } : 'ionCol' extends keyof typeof __VLS_ctx ? { 'IonCol': typeof __VLS_ctx.ionCol; } : 'ion-col' extends keyof typeof __VLS_ctx ? { 'IonCol': (typeof __VLS_ctx)["ion-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonCol;
const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, }));
({} as { IonCol: typeof __VLS_70; }).IonCol;
({} as { IonCol: typeof __VLS_70; }).IonCol;
const __VLS_72 = __VLS_71({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
{
const __VLS_75 = __VLS_intrinsicElements["div"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
const __VLS_77 = __VLS_76({ ...{}, class: ("tw-grid tw-grid-cols-2 tw-gap-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, class: ("tw-grid tw-grid-cols-2 tw-gap-4"), });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
for (const [food, index] of __VLS_getVForSourceType((__VLS_ctx.store.foodList)!)) {
{
const __VLS_80 = __VLS_intrinsicElements["div"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
const __VLS_82 = __VLS_81({ ...{ onClick: {} as any, }, class: ("tw-relative tw-w-[auto] tw-h-[273px] tw-p-5 tw-rounded-lg tw-bg-[#E9ECEF]"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("tw-relative tw-w-[auto] tw-h-[273px] tw-p-5 tw-rounded-lg tw-bg-[#E9ECEF]"), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
let __VLS_85 = { 'click': __VLS_pickEvent(__VLS_84['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_82>).onClick) };
__VLS_85 = {
click: $event => {
__VLS_ctx.router.push({ name: 'FoodPreview', params: { id: food.id } });
// @ts-ignore
[store, router,];
}
};
{
const __VLS_86 = __VLS_intrinsicElements["div"];
const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
const __VLS_88 = __VLS_87({ ...{}, class: ("tw-pb-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{}, class: ("tw-pb-10"), });
const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
let __VLS_90!: __VLS_NormalizeEmits<typeof __VLS_89.emit>;
{
const __VLS_91 = __VLS_intrinsicElements["img"];
const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
const __VLS_93 = __VLS_92({ ...{}, src: ((food.url)), class: ("tw-mx-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_93> & Record<string, unknown>) => void)({ ...{}, src: ((food.url)), class: ("tw-mx-auto"), });
const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93)!;
let __VLS_95!: __VLS_NormalizeEmits<typeof __VLS_94.emit>;
}
(__VLS_89.slots!).default;
}
{
const __VLS_96 = __VLS_intrinsicElements["div"];
const __VLS_97 = __VLS_elementAsFunctionalComponent(__VLS_96);
const __VLS_98 = __VLS_97({ ...{}, class: ("tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-38 tw-p-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_96, typeof __VLS_98> & Record<string, unknown>) => void)({ ...{}, class: ("tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-38 tw-p-3"), });
const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98)!;
let __VLS_100!: __VLS_NormalizeEmits<typeof __VLS_99.emit>;
{
const __VLS_101 = __VLS_intrinsicElements["div"];
const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
const __VLS_103 = __VLS_102({ ...{}, class: ("tw-font-bold tw-text-base tw-font-nunito"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_101, typeof __VLS_103> & Record<string, unknown>) => void)({ ...{}, class: ("tw-font-bold tw-text-base tw-font-nunito"), });
const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103)!;
let __VLS_105!: __VLS_NormalizeEmits<typeof __VLS_104.emit>;
(food.name);
(__VLS_104.slots!).default;
}
{
const __VLS_106 = __VLS_intrinsicElements["div"];
const __VLS_107 = __VLS_elementAsFunctionalComponent(__VLS_106);
const __VLS_108 = __VLS_107({ ...{}, class: ("tw-text-sm tw-font-normal tw-font-nunito"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_106, typeof __VLS_108> & Record<string, unknown>) => void)({ ...{}, class: ("tw-text-sm tw-font-normal tw-font-nunito"), });
const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108)!;
let __VLS_110!: __VLS_NormalizeEmits<typeof __VLS_109.emit>;
(food.category);
(__VLS_109.slots!).default;
}
{
const __VLS_111 = __VLS_intrinsicElements["div"];
const __VLS_112 = __VLS_elementAsFunctionalComponent(__VLS_111);
const __VLS_113 = __VLS_112({ ...{}, class: ("tw-flex tw-justify-between tw-pt-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_111, typeof __VLS_113> & Record<string, unknown>) => void)({ ...{}, class: ("tw-flex tw-justify-between tw-pt-5"), });
const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113)!;
let __VLS_115!: __VLS_NormalizeEmits<typeof __VLS_114.emit>;
{
const __VLS_116 = __VLS_intrinsicElements["h3"];
const __VLS_117 = __VLS_elementAsFunctionalComponent(__VLS_116);
const __VLS_118 = __VLS_117({ ...{}, class: ("tw-text-base tw-font-bold tw-text-[#D71921] tw-flex-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_116, typeof __VLS_118> & Record<string, unknown>) => void)({ ...{}, class: ("tw-text-base tw-font-bold tw-text-[#D71921] tw-flex-1"), });
const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118)!;
let __VLS_120!: __VLS_NormalizeEmits<typeof __VLS_119.emit>;
(food.price);
(__VLS_119.slots!).default;
}
{
const __VLS_121 = __VLS_intrinsicElements["div"];
const __VLS_122 = __VLS_elementAsFunctionalComponent(__VLS_121);
const __VLS_123 = __VLS_122({ ...{}, class: ("tw-justify-end "), }, ...__VLS_functionalComponentArgsRest(__VLS_122));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_121, typeof __VLS_123> & Record<string, unknown>) => void)({ ...{}, class: ("tw-justify-end "), });
const __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123)!;
let __VLS_125!: __VLS_NormalizeEmits<typeof __VLS_124.emit>;
{
const __VLS_126 = __VLS_intrinsicElements["div"];
const __VLS_127 = __VLS_elementAsFunctionalComponent(__VLS_126);
const __VLS_128 = __VLS_127({ ...{}, class: ("star-rating"), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_126, typeof __VLS_128> & Record<string, unknown>) => void)({ ...{}, class: ("star-rating"), });
const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128)!;
let __VLS_130!: __VLS_NormalizeEmits<typeof __VLS_129.emit>;
for (const [star] of __VLS_getVForSourceType((5)!)) {
{
const __VLS_131 = __VLS_intrinsicElements["span"];
const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
const __VLS_133 = __VLS_132({ ...{}, key: ((star)), class: (({ 'filled': star <= __VLS_ctx.rating })), }, ...__VLS_functionalComponentArgsRest(__VLS_132));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_131, typeof __VLS_133> & Record<string, unknown>) => void)({ ...{}, key: ((star)), class: (({ 'filled': star <= __VLS_ctx.rating })), });
const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133)!;
let __VLS_135!: __VLS_NormalizeEmits<typeof __VLS_134.emit>;
__VLS_styleScopedClasses = ({ 'filled': star <= rating });
(__VLS_134.slots!).default;
}
// @ts-ignore
[rating, rating,];
}
(__VLS_129.slots!).default;
}
(__VLS_124.slots!).default;
}
(__VLS_114.slots!).default;
}
(__VLS_99.slots!).default;
}
(__VLS_83.slots!).default;
}
}
(__VLS_78.slots!).default;
}
(__VLS_73.slots!).default;
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["ion-padding"];
__VLS_styleScopedClasses["tw-overflow-hidden"];
__VLS_styleScopedClasses["tw-border"];
__VLS_styleScopedClasses["tw-border-gray-300"];
__VLS_styleScopedClasses["tw-rounded-[16px]"];
__VLS_styleScopedClasses["tw-h-16"];
__VLS_styleScopedClasses["placeholder-px-5"];
__VLS_styleScopedClasses["tw-size-6"];
__VLS_styleScopedClasses["tw-pl-5"];
__VLS_styleScopedClasses["tw-text-[#D71921]"];
__VLS_styleScopedClasses["tw-size-6"];
__VLS_styleScopedClasses["tw-pr-5"];
__VLS_styleScopedClasses["tw-text-[#D71921]"];
__VLS_styleScopedClasses["tw-flex"];
__VLS_styleScopedClasses["tw-flex-nowrap"];
__VLS_styleScopedClasses["tw-overflow-x-auto"];
__VLS_styleScopedClasses["tw-flex"];
__VLS_styleScopedClasses["tw-flex-nowrap"];
__VLS_styleScopedClasses["tw-flex-none"];
__VLS_styleScopedClasses["tw-mr-1"];
__VLS_styleScopedClasses["tw-h-auto"];
__VLS_styleScopedClasses["tw-grid"];
__VLS_styleScopedClasses["tw-grid-cols-2"];
__VLS_styleScopedClasses["tw-gap-4"];
__VLS_styleScopedClasses["tw-relative"];
__VLS_styleScopedClasses["tw-w-[auto]"];
__VLS_styleScopedClasses["tw-h-[273px]"];
__VLS_styleScopedClasses["tw-p-5"];
__VLS_styleScopedClasses["tw-rounded-lg"];
__VLS_styleScopedClasses["tw-bg-[#E9ECEF]"];
__VLS_styleScopedClasses["tw-pb-10"];
__VLS_styleScopedClasses["tw-mx-auto"];
__VLS_styleScopedClasses["tw-absolute"];
__VLS_styleScopedClasses["tw-inset-x-0"];
__VLS_styleScopedClasses["tw-bottom-0"];
__VLS_styleScopedClasses["tw-h-38"];
__VLS_styleScopedClasses["tw-p-3"];
__VLS_styleScopedClasses["tw-font-bold"];
__VLS_styleScopedClasses["tw-text-base"];
__VLS_styleScopedClasses["tw-font-nunito"];
__VLS_styleScopedClasses["tw-text-sm"];
__VLS_styleScopedClasses["tw-font-normal"];
__VLS_styleScopedClasses["tw-font-nunito"];
__VLS_styleScopedClasses["tw-flex"];
__VLS_styleScopedClasses["tw-justify-between"];
__VLS_styleScopedClasses["tw-pt-5"];
__VLS_styleScopedClasses["tw-text-base"];
__VLS_styleScopedClasses["tw-font-bold"];
__VLS_styleScopedClasses["tw-text-[#D71921]"];
__VLS_styleScopedClasses["tw-flex-1"];
__VLS_styleScopedClasses["tw-justify-end"];
__VLS_styleScopedClasses["star-rating"];
}
var __VLS_slots!: {};
return __VLS_slots;
}

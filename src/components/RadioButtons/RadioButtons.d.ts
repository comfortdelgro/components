export namespace RADIO_BUTTON_TYPES {
    const PRIMARY: string;
}
export class RadioGroup {
    render(): JSX.Element;
}
export namespace RadioGroup {
    namespace propTypes {
        const name: any;
        const children: any;
        const Component: any;
    }
    namespace defaultProps {
        const name_1: string;
        export { name_1 as name };
        export const selectedValue: string;
        const Component_1: string;
        export { Component_1 as Component };
    }
}
export class Radio {
    render(): JSX.Element;
}
export namespace Radio {
    export namespace propTypes_1 {
        const type: any;
        const onChange: any;
        const value: any;
        const labelText: any;
        const size: any;
        const disabled: any;
    }
    export { propTypes_1 as propTypes };
    export namespace defaultProps_1 {
        import type_1 = RADIO_BUTTON_TYPES.PRIMARY;
        export { type_1 as type };
        export function onChange_1(): void;
        export { onChange_1 as onChange };
        const value_1: string;
        export { value_1 as value };
        const labelText_1: string;
        export { labelText_1 as labelText };
        const size_1: string;
        export { size_1 as size };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
    }
    export { defaultProps_1 as defaultProps };
}
//# sourceMappingURL=RadioButtons.d.ts.map
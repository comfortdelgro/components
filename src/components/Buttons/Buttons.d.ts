import * as React from "react";
import { StyledComponent } from "styled-components";

export namespace BUTTON_KINDS {
    const primary: string;
    const secondary: string;
    const negative: string;
    const tertiary: string;
}
export namespace BUTTON_SIZES {
    const large: string;
    const sm: string;
    const xm: string;
}
export namespace BUTTON_ICON_POSITIONS {
    const right: string;
    const left: string;
}
export namespace BUTTON_MODIFIERS {
    export function large_1({ iconPosition, theme }: {
        iconPosition: any;
        theme: any;
    }): any;
    export { large_1 as large };
    export function sm_1({ iconPosition, theme }: {
        iconPosition: any;
        theme: any;
    }): any;
    export { sm_1 as sm };
    export function xm_1({ theme }: {
        theme: any;
    }): any;
    export { xm_1 as xm };
    export function primary_1({ theme }: {
        theme: any;
    }): {
        color: any;
        backgroundColor: any;
        "&:active": {
            backgroundColor: any;
        };
        "&:hover": {
            backgroundColor: any;
        };
    };
    export { primary_1 as primary };
    export function secondary_1({ theme }: {
        theme: any;
    }): {
        color: any;
        backgroundColor: any;
        border: string;
        "&:active": {
            color: any;
            borderColor: any;
            backgroundColor: any;
        };
        "&:hover": {
            color: any;
            borderColor: any;
            backgroundColor: any;
        };
    };
    export { secondary_1 as secondary };
    export function negative_1({ theme }: {
        theme: any;
    }): {
        color: any;
        backgroundColor: any;
        border: string;
        "&:active": {
            backgroundColor: any;
        };
        "&:hover": {
            backgroundColor: any;
        };
    };
    export { negative_1 as negative };
    export function tertiary_1({ theme }: {
        theme: any;
    }): {
        color: any;
        backgroundColor: any;
        border: string;
        "&:active": {
            backgroundColor: any;
        };
        "&:hover": {
            backgroundColor: any;
        };
    };
    export { tertiary_1 as tertiary };
}
export const Button: StyledComponent<"button", any, {}, never>;
//# sourceMappingURL=Buttons.d.ts.map
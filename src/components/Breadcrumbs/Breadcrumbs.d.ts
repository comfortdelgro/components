export function Breadcrumbs({ overrides, children, ...restProps }: {
    [x: string]: any;
    overrides: any;
    children: any;
}): JSX.Element;
export namespace Breadcrumbs {
    namespace propTypes {
        const overrides: any;
        const children: any;
    }
    namespace defaultProps {
        export namespace overrides_1 {
            const Root: {};
            const Separator: {};
            const List: {};
            const ListItem: {};
            const Icon: {};
        }
        export { overrides_1 as overrides };
    }
}
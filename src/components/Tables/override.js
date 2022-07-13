import { resolveComponent, resolveProps, resolveStyle } from "../override";
import { borderRadius, border, padding } from "../../utils/helpers/style";

const override = ({
  Root,
  Table,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableHeadCellSortable,
  TableBody,
  TableBodyRow,
  TableBodyCell,
  TableLoadingMessage,
  TableEmptyMessage,
  SortAscIcon,
  SortDescIcon,
  SortNoneIcon,
}) => {

  return {
    Root: {
      style: (props) => ({
        ...border("1px solid #E0E7ED"),
        ...borderRadius("16px"),
        ...resolveStyle(Root, props)
      }),
      props: resolveProps({}, Root),
      ...resolveComponent(Root),
    },
    Table: {
      style: (props) => ({
        ...resolveStyle(Table, props)
      }),
      props: resolveProps({}, Table),
      ...resolveComponent(Table),
    },
    TableHead: {
      style: (props) => resolveStyle(TableHead, props),
      props: resolveProps({}, TableHead),
      ...resolveComponent(TableHead),
    },
    TableHeadRow: {
      style: (props) => resolveStyle(TableHeadRow, props),
      props: resolveProps({}, TableHeadRow),
      ...resolveComponent(TableHeadRow),
    },
    TableHeadCell: {
      style: (props) => ({
        ...props.$theme.typography.tableHeadeCell,
        ...resolveStyle(TableHeadCell, props)
      }),
      props: resolveProps({}, TableHeadCell),
      ...resolveComponent(TableHeadCell),
    },
    TableHeadCellSortable: {
      style: (props) => resolveStyle(TableHeadCellSortable, props),
      props: resolveProps({}, TableHeadCellSortable),
      ...resolveComponent(TableHeadCellSortable),
    },
    TableBody: {
      style: (props) => resolveStyle(TableBody, props),
      props: resolveProps({}, TableBody),
      ...resolveComponent(TableBody),
    },
    TableBodyRow: {
      style: (props) => resolveStyle(TableBodyRow, props),
      props: resolveProps({}, TableBodyRow),
      ...resolveComponent(TableBodyRow),
    },
    TableBodyCell: {
      style: (props) => ({
        color: props.$theme.colors.tableBodyCellText,
        ...resolveStyle(TableBodyCell, props)
      }),
      props: resolveProps({}, TableBodyCell),
      ...resolveComponent(TableBodyCell),
    },
    TableLoadingMessage: {
      style: (props) => resolveStyle(TableLoadingMessage, props),
      props: resolveProps({}, TableLoadingMessage),
      ...resolveComponent(TableLoadingMessage),
    },
    TableEmptyMessage: {
      style: (props) => resolveStyle(TableEmptyMessage, props),
      props: resolveProps({}, TableEmptyMessage),
      ...resolveComponent(TableEmptyMessage),
    },
    SortAscIcon: {
      style: (props) => resolveStyle(SortAscIcon, props),
      props: resolveProps({}, SortAscIcon),
      ...resolveComponent(SortAscIcon),
    },
    SortDescIcon: {
      style: (props) => resolveStyle(SortDescIcon, props),
      props: resolveProps({}, SortDescIcon),
      ...resolveComponent(SortDescIcon),
    },
    SortNoneIcon: {
      style: (props) => resolveStyle(SortNoneIcon, props),
      props: resolveProps({}, SortNoneIcon),
      ...resolveComponent(SortNoneIcon),
    },
  }
};

export default override;

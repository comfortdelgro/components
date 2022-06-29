import * as React from "react";
import PropTypes from "prop-types";
import { Table as BuiTable, DIVIDER } from "baseui/table-semantic";
import override from "./override";

export const Table = ({ overrides, ...restProps }) => {
  const localOverrides = override(overrides);

  return (
    <BuiTable
      overrides={localOverrides}
      divider={DIVIDER.horizontal}
      {...restProps}
    />
  );
};

Table.propTypes = {
  overrides: PropTypes.shape({
    Root: PropTypes.object,
    Table: PropTypes.object,
    TableHead: PropTypes.object,
    TableHeadRow: PropTypes.object,
    TableHeadCell: PropTypes.object,
    TableHeadCellSortable: PropTypes.object,
    TableBody: PropTypes.object,
    TableBodyRow: PropTypes.object,
    TableBodyCell: PropTypes.object,
    TableLoadingMessage: PropTypes.object,
    TableEmptyMessage: PropTypes.object,
    SortAscIcon: PropTypes.object,
    SortDescIcon: PropTypes.object,
    SortNoneIcon: PropTypes.object,
  }),
};

Table.defaultProps = {
  overrides: {
    Root: {},
    Table: {},
    TableHead: {},
    TableHeadRow: {},
    TableHeadCell: {},
    TableHeadCellSortable: {},
    TableBody: {},
    TableBodyRow: {},
    TableBodyCell: {},
    TableLoadingMessage: {},
    TableEmptyMessage: {},
    SortAscIcon: {},
    SortDescIcon: {},
    SortNoneIcon: {},
  }
};
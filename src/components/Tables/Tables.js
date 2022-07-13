import * as React from "react";
import PropTypes from "prop-types";
import {
  Table as BuiTable,
  DIVIDER,
  TableBuilder as BuiTableBuilder,
  TableBuilderColumn as BuiTableBuilderColumn,
} from "baseui/table-semantic";
import override from "./override";

export const Table = ({ overrides, ...restProps }) => {
  const _overrides = override(overrides);

  return (
    <BuiTable
      overrides={_overrides}
      divider={DIVIDER.horizontal}
      {...restProps}
    />
  );
};

export const TableBuilder = ({ overrides, ...restProps }) => {
  const _overrides = override(overrides);

  return (
    <BuiTableBuilder
      overrides={_overrides}
      divider={DIVIDER.horizontal}
      {...restProps}
    />
  );
};

export const TableBuilderColumn = (props) => {
  return (
    <BuiTableBuilderColumn {...props}/>
  );
};

const overridePropT = PropTypes.shape({
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
});

Table.propTypes = {
  overrides: overridePropT,
};

TableBuilder.propTypes = {
  overrides: overridePropT,
};

const defaultOverridesProp = {
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
};

Table.defaultProps = {
  overrides: defaultOverridesProp,
};

TableBuilder.defaultProps = {
  overrides: defaultOverridesProp,
};
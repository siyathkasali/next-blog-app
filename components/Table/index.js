import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

import styles from './Table.module.scss';

const Table = ({ tableHeader, tableData, renderTableColumn, lsLoading }) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            {
              tableHeader.map((header, index) => <th key={index} className={styles.th}>{header}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            tableData.map(column => renderTableColumn(column))
          }
        </tbody>
      </table>
      {
        lsLoading ? <Loader /> : null
      }
    </>
  )
}

Table.propTypes = {
  tableHeader: PropTypes.array,
  tableData: PropTypes.array,
  renderTableColumn: PropTypes.func,
  lsLoading: PropTypes.bool,
};

export default Table;

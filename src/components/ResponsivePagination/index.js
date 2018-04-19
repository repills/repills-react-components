import React from 'react';
import {
  number,
  func,
  object
} from 'prop-types';
import Pagination from '../Pagination';
import { SM } from '../../config/breakpoints';
import QueryHandler from '../QueryHandler';

class ResponsivePagination extends React.Component {

  static propTypes = {
    breakpointsStatus: object,
    buildPagePath: func,
    currentPage: number.isRequired,
    handleNavigateToPage: func.isRequired,
    itemsPerPage: number.isRequired,
    itemsTotalCount: number.isRequired
  };

  static defaultProps = {
    breakpointsStatus: {}
  };

  getRangePageDisplayed = () => {
    let temp = 5;
    if (this.props.breakpointsStatus[SM]) {
      temp = 13;
    }
    return temp;
  };

  render() {
    const {
      itemsTotalCount,
      currentPage,
      handleNavigateToPage,
      itemsPerPage,
      buildPagePath,
      ...others
    } = this.props;

    return (
      <Pagination
        buildPagePath={buildPagePath}
        currentPage={currentPage}
        handleNavigateToPage={handleNavigateToPage}
        itemsPerPage={itemsPerPage}
        itemsTotalCount={itemsTotalCount}
        rangePageDisplayed={this.getRangePageDisplayed()}
        {...others}
      />
    );
  }
}

export default QueryHandler(ResponsivePagination);

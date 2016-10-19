import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'
// import FontAwesome from 'react-fontawesome';


export default class YearButton extends Component {
  render() {
    let {year, currentYear, onYearBtnClick, fetching} = this.props;
    return (
      <button
        className={classNames('btn', {
          'active': year == currentYear,
          'disabled': fetching
        })}
        onClick={onYearBtnClick}
      >
        {year}
        {/*<FontAwesome name="rocket"/>*/}
      </button>
    )
  }
}

YearButton.propTypes = {
  year: PropTypes.number.isRequired,
  currentYear: PropTypes.number,
  fetching: PropTypes.bool.isRequired,
  onYearBtnClick: PropTypes.func.isRequired
};
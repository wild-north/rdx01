import React, { PropTypes, Component } from 'react'
import Button from '../components/YearButton';

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.innerText);
  }

  render() {
    const { year, photos, fetching } = this.props;
    console.log('%cfetching = ' + fetching, 'background-color: red; color: white; font-size: 18px; line-height: 18px;');


    return <div className='ib page'>
      <p>
        <Button year={2016} currentYear={year} onYearBtnClick={::this.onYearBtnClick} fetching={fetching}/>
        <Button year={2015} currentYear={year} onYearBtnClick={::this.onYearBtnClick} fetching={fetching}/>
        <Button year={2014} currentYear={year} onYearBtnClick={::this.onYearBtnClick} fetching={fetching}/>
      </p>
      <h3>{year} год</h3>
      {
        fetching ?
          <p>Загрузка</p>
          :
          <p>У тебя {photos.length ? photos.length : 'нет'} фото.</p>
      }
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired
};
// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Style from './Search.module.css'
import ShowPreview from '../ShowPreview';
import {getSeriesRequest} from '../../actions/actions';


class Search extends Component {

  componentDidMount() {
    const { getSeriesRequest } = this.props;
    getSeriesRequest();
  }

  render() {
    const {serials} = this.props;
    console.log(this.props);
    //const serials = [{name: "Название 1"},{name: "Название 2"},{name: "Название 1"}];
    return (
      <React.Fragment>
        <div className={Style.previewList}>
          <input type="text" className={Style.input} placeholder="Название сериала"/>
          <div className={Style.buttonWrapper}>
            <button className={Style.button}>
              Найти
            </button>
          </div>
        </div>
        <div className={`t-search-result ${Style.searchPanel}`}>
          {serials && serials.map(item => <ShowPreview {...item}/>)}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = { getSeriesRequest };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
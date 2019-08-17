// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Style from './Search.module.css'
import ShowPreview from '../ShowPreview';
import {searchRequest} from '../../actions/actions';


class Search extends Component {

  state={
    searchLabel: ''
  };

  sendRequest = ()=>{
    const { searchRequest } = this.props;
    const {searchLabel} = this.state;
    searchRequest(searchLabel);
  };
  render() {
    const {search: {result, isFetching, isError}} = this.props;
    const {searchLabel} = this.state;
    if (isFetching) return <p>Данные загружаются</p>;
    if (isError) return <p>Ошибка при загрузке данных</p>;

    return (
      <React.Fragment>
        <div className={Style.previewList}>
          <input
            type="text" className={Style.input}
            placeholder="Название сериала"
            value={searchLabel}
            onChange={(e)=>{
              this.setState({
                searchLabel: e.target.value
              });
            }}
          />
          <div className={Style.buttonWrapper}>
            <button className={Style.button} onClick={this.sendRequest}>
              Найти
            </button>
          </div>
        </div>
        <div className={`t-search-result ${Style.searchPanel}`}>
          {result && result.map(item => <ShowPreview {...item}  key={item.id}/>)}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = { searchRequest };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
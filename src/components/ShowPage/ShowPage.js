// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
import React, { Component } from 'react';
import {connect} from "react-redux";
import Style from './ShowPage.module.css'
import {entitiesRequest} from "../../actions/actions";

class ShowPage extends Component{

  componentDidMount() {
    const {entitiesRequest, match: {params:{id}}} = this.props;
    entitiesRequest(id);
  }

  render() {

    const {shows: {entities: {name, summary, _embedded, image }, isFetching}} = this.props;
    if (isFetching) return <p>Данные загружаются</p>;
    console.log(_embedded);
    return(
      <>
        <p>{name && name}</p>
        { image && image.medium && <img src={image.medium } alt="image"/> }
        <div>{summary && summary}</div>
        <div className={Style.cast}>
          {_embedded && _embedded.cast && _embedded.cast.map(item=>{
            const {person} = item;
            return (
              <div className="t-persone" key={person.id}>
                <p>{person.name && person.name}</p>
                {person.image && person.image.medium && <img src={person.image.medium} alt={item.person.name} />}
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = { entitiesRequest };


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowPage);

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
    //const {shows: {entities: {name, summary, _embedded, image: {medium} }, isFetching}} = this.props;
    const {shows} = this.props;
    const {entities, isFetching} = shows;
    const {name, summary, _embedded, image } = entities;
    console.log(image);
    const {medium} = image;
    if (isFetching) return <p>Данные загружаются</p>;
    return(
      <>
        <p>{name}</p>
        <img src="" alt=""/>
        <div>2</div>
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

// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React, {Component} from 'react';
import Style from './ShowPreview.module.css';
import {Link} from 'react-router-dom';

const ShowPreview = (props) => {
  const {name, id, image, summary} = props;
  return(
    <div className={`t-preview ${Style.container}`}>
      <Link to={`shows/${id}`}>{name}</Link>
      {image && <img src={image} alt=""/>}
      <p >{summary}</p>
    </div>
  )
};
export default ShowPreview;

/*
export default class ShowPreview extends Component {
  render() {
    const {name, id, image, summary} = this.props;


    return (
      <div className={`t-preview ${Style.container}`}>
        <Link to={`shows/${id}`}>{name}</Link>
        {image && <img src={image} alt=""/>}
        <p>{summary}</p>
      </div>
    )
  }
}*/

// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React, { Component } from 'react';
import Style from './ShowPreview.module.css';

export default class ShowPreview extends Component{
  render() {
    const {name} = this.props;
    return(
      <div className={`t-preview ${Style.container}`}>
        {name}
      </div>
    )
  }
}
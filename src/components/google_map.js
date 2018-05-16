import React, { Component } from 'react';

class GoogleMap extends Component {
  //componentDidMount()is one of lifecycle method that get clled automatically after this component has been rendered to screen
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render(){
    //this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
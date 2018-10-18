//index.html file has googlemap js script hooked up

import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {   //embed new map into ref='map' html node below
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;

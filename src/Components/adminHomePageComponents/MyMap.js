import React from 'react'
import L from 'leaflet'
import { BASE_URL } from '../../Pages/Main'

let map;

const setupMap = () => {
  map = L.map('mapid').setView([-34.6037561,-58.3816139], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}
const addMarkers = (consorceLocations) => {
  if (consorceLocations && consorceLocations.length > 0)
    consorceLocations.forEach( location => {
      L.marker([location.latitude,location.longitude])
        .addTo(map)
        .bindPopup(location.consorce.name)
        .openPopup();
    })
}
const removeTags = () => {
  const elem = document.querySelector("#mapid > div.leaflet-control-container > div.leaflet-bottom.leaflet-right")
  if(elem)
    elem.parentElement.removeChild(elem)
}
const fetchLocations = () => {
  return fetch(BASE_URL + '/admins/' + window.sessionStorage.id + '/locations')
    .then(res => res.json())
    .then(data => addMarkers(data) )
}


export const MyMap = () => {

  React.useEffect(() => {
    fetchLocations()
    setupMap()
    removeTags()

  },[])

  return <div id='mapid' style={{padding: '1rem'}}/>
}
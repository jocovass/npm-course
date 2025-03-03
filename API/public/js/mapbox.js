/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoiam9jb3Zhc3MiLCJhIjoiY2s5YmQ4dDJoMDJ0YjNtcGc0dGc2OWVudSJ9.8T1YfJPG3HxkZxObWgHX2g';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jocovass/ck9bddrwn0zv21imyajwxqw8h',
    scrollZoom: false,
    //   center: [],
    //   zoom: 4,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    //Add a marker
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add poup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.desciption}</p>`)
      .addTo(map);

    //Extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};

'use strict';

import SeriesInfoView from 'series-info-view';
export default function (app) {
  fetch('http://gateway.marvel.com:80/v1/public/series/9856/characters?apikey=d1ba911629fc9d80d3ddb9ff8f8418d3')
    .then((res) => res.json())
    .then((result) => {
      const view = new SeriesInfoView(app, result);
      view.render();
    });
}

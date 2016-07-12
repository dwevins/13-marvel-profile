'use strict';

import SeriesInfoView from 'series-info-view';
export default function (app) {
  const leftPane = app.querySelector('.left-pane__content');
  const characters = app.querySelector('characters');
  const comics = app.querySelector('comics');
  fetch('http://gateway.marvel.com:80/v1/public/series/9856?apikey=d1ba911629fc9d80d3ddb9ff8f8418d3')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      const view = new SeriesInfoView(leftPane, result);
      view.render();
    });
}

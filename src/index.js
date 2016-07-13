'use strict';

import SeriesInfoView from 'series-info-view';
import CharacterInfoView from 'character-info-view';
import ComicListView from 'comic-list-view';
export default function (app) {
  const leftPane = app.querySelector('.left-pane__content');
  const characters = app.querySelector('.characters');
  const comics = app.querySelector('.comics');
  fetch('http://gateway.marvel.com:80/v1/public/series/9856?apikey=d1ba911629fc9d80d3ddb9ff8f8418d3')
    .then((res) => res.json())
    .then((result) => {
      const view = new SeriesInfoView(leftPane, result);
      view.render();
    });

  fetch('http://gateway.marvel.com:80/v1/public/series/9856/characters?apikey=d1ba911629fc9d80d3ddb9ff8f8418d3')
    .then((res) => res.json())
    .then((result) => {
      const view = new CharacterInfoView(characters, result);
      view.render();
    });

  fetch('http://gateway.marvel.com:80/v1/public/series/9856/comics?apikey=d1ba911629fc9d80d3ddb9ff8f8418d3')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      const view = new ComicListView(comics, result);
      view.render();
    });
}

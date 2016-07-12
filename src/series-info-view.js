'use strict';

export default class SeriesInfoView {
  constructor(parent, object) {
    console.log(object);
    const image = object.data.results[0].thumbnail.path;
    const ext = object.data.results.thumbnail.extension;
    const title = object.data.results.title;
    const startDate = object.data.results.startYear;
    const endDate = object.data.results.endYear;
    const creatorList = object.data.results.creators;
    const copyright = object.attributionHTML;

    this.elements = {
      showcase: parent.querySelector('.showcase'),
      title: parent.querySelector('.info__title'),
      dates: parent.querySelector('.info__dates'),
      creators: parent.querySelector('.creators__list'),
    };
  }

  render() {
    this.populateShowcase();
    this.populateCreatorsList();
  }

  populateShowcase() {
    const img = document.createElement('img');
    img.className = 'showcase__img';
    img.setAttribute('src', `${this.image}+${this.ext}`);
    this.elements.showcase.appendChild(img);
  }

  populateCreatorsList() {
    this.creatorList.forEach((creator) => {
      const item = document.createElement('li');
      item.className = 'creators__list--item';
      item.innerText = creator.name;
      this.elements.creators.appendChild(item);
    });
  }


}

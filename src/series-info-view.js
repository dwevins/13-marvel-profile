'use strict';

export default class SeriesInfoView {
  constructor(parent, object) {
    this.image = object.data.results[0].thumbnail.path;
    this.ext = object.data.results[0].thumbnail.extension;
    this.title = object.data.results[0].title;
    this.startDate = object.data.results[0].startYear;
    this.endDate = object.data.results[0].endYear;
    this.creatorList = object.data.results[0].creators.items;
    this.copyright = object.attributionHTML;

    this.elements = {
      showcase: parent.querySelector('.showcase'),
      title: parent.querySelector('.info__title'),
      dates: parent.querySelector('.info__dates'),
      creators: parent.querySelector('.creators__list'),
    };
  }

  render() {
    this.populateShowcase();
    this.populateTitle();
    this.populateDates();
    this.populateCreatorsList();
  }

  populateShowcase() {
    this.elements.showcase.innerHTML = '';
    const img = document.createElement('img');
    img.className = 'showcase__img';
    img.setAttribute('src', `${this.image}.${this.ext}`);
    this.elements.showcase.appendChild(img);
  }

  populateTitle() {
    this.elements.title.innerText = this.title;
  }

  populateDates() {
    this.elements.dates.innerText = `${this.startDate} - ${this.endDate}`;
  }

  populateCreatorsList() {
    this.elements.creators.innerHTML = '';
    this.creatorList.forEach((creator) => {
      const item = document.createElement('li');
      item.className = 'creators__list--item';
      item.innerText = creator.name;
      this.elements.creators.appendChild(item);
    });
  }

}

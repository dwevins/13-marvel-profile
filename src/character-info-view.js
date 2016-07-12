'use strict';

export default class CharacterInfoView {
  constructor(parent, object) {
    this.characterArray = object.data.results;

    this.elements = {
      characterList: parent.querySelector('.character__list'),
    };
  }

  render() {
    this.characterArray.forEach((character) => {
      const li = document.createElement('li');
      this.populateListItem(li, character);
      this.populateList(li);
    });
  }

  populateListItem(element, character) {
    const imgBox = document.createElement('div');
    const nameBox = document.createElement('div');
    imgBox.className = 'characters__image';
    nameBox.className = 'characters__name';
    this.populateImg(imgBox, character);
    this.populateName(nameBox, character);
  }

  populateImg(element, character) {
    const img = document.createElement('img');
    const imgPath = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    img.className = 'rounded characters__image--img';
    img.setAttribute('src', imgPath);
    element.appendChild(img);
  }

  populateName(element, character) {

  }

  populateList(element) {

  }
}

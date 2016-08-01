'use strict';

export default class CharacterInfoView {
  constructor(parent, object) {
    this.characterArray = object.data.results;

    this.elements = {
      characterList: parent.querySelector('.characters__list'),
    };
  }

  render() {
    this.elements.characterList.innerHTML = '';
    this.characterArray.forEach((character) => {
      const li = document.createElement('li');
      li.className = 'characters__list--item';
      this.populateListItem(li, character);
      this.populateList(li);
    });
  }

  populateListItem(element, character) {
    const imgBox = document.createElement('div');
    const nameBox = document.createElement('div');
    imgBox.className = 'characters__image image-frame';
    nameBox.className = 'characters__name';
    this.populateImg(imgBox, character);
    this.populateName(nameBox, character);
    element.appendChild(imgBox);
    element.appendChild(nameBox);
  }

  populateImg(element, character) {
    const img = document.createElement('img');
    const imgPath = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    img.className = 'rounded characters__image--img image-frame__img';
    img.setAttribute('src', imgPath);
    element.appendChild(img);
  }

  populateName(element, character) {
    const name = document.createElement('p');
    name.className = 'characters__name--text';
    name.innerText = `${character.name}`;
    element.appendChild(name);
  }

  populateList(element) {
    this.elements.characterList.appendChild(element);
  }
}

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

  }

  populateImg(element, character) {

  }

  populateName(element, character) {

  }

  populateList(element) {

  }
}

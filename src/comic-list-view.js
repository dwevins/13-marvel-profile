'use strict';

export default class ComicView {
  constructor(parent, object) {
    this.comicArray = object.data.results.split(0, 3);

    this.elements = {
      comicList: parent.querySelector('.comics__list'),
    };
  }

  render() {
    this.elements.comicList.innerHTML = '';
    this.comicArray.forEach((comic) => {
      const li = document.createElement('li');
      li.className = 'comics__list--item';
      this.populateListItem(li, comic);
      this.populateList(li);
    });
  }

  populateListItem(parent, comic) {
    const imgBox = parent.document.createElement('div');
    const issueBox = parent.document.createElement('div')

  }

}

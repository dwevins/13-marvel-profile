'use strict';

export default class ComicListView {
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

  populateListItem(element, comic) {
    const imgBox = document.createElement('div');
    const issueBox = document.createElement('div');
    const buttonBox = document.createElement('div');
    imgBox.className = 'comics__img';
    issueBox.className = 'comics__issue';
    buttonBox.className = 'comics__button';
    this.populateImg(element, comic);
    this.populateIssue(element, comic);
    this.populateButton(element, comic);
    element.appendChild(imgBox);
    element.appendChild(issueBox);
    element.appendChild(buttonBox);
  }

  populateImg(element, comic) {
    const img = document.createElement('img');
    const imgpath = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    img.className = 'rounded comics__image--img';
    img.setAttribute('src', imgpath);
    element.appendChild(img);
  }
}

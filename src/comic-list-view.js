'use strict';

export default class ComicListView {
  constructor(parent, object) {
    this.comicArray = object.data.results;

    this.elements = {
      comicList: parent.querySelector('.comics__list'),
      infoPane: parent.querySelector('.info-pane'),
      closeBtnDiv: parent.querySelector('info-pane__box--btn'),
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
    imgBox.className = 'rounded comics__image image-frame';
    issueBox.className = 'comics__issue';
    buttonBox.className = 'comics__button';
    this.populateOverlay(element, comic);
    this.populateImg(imgBox, comic);
    this.populateIssue(issueBox, comic);
    this.populateButton(element, buttonBox);
    element.appendChild(imgBox);
    element.appendChild(issueBox);
    element.appendChild(buttonBox);
  }

  populateImg(element, comic) {
    const img = document.createElement('img');
    const imgpath = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    img.className = 'comics__image--img image-frame__img';
    img.setAttribute('src', imgpath);
    element.appendChild(img);
  }

  populateIssue(element, comic) {
    const issue = document.createElement('p');
    issue.className = 'comics__issue--text';
    issue.innerText = comic.title;
    element.appendChild(issue);
  }

  populateButton(parent, element) {
    const btn = document.createElement('button');
    btn.className = 'rounded-btn comics__button--btn';
    btn.innerText = 'Read More';
    btn.addEventListener('click', () => {
      parent.querySelector('.info-pane').classList.add('info-pane--active');
    });
    element.appendChild(btn);
  }

  populateList(element) {
    this.elements.comicList.appendChild(element);
  }

  populateOverlay(parent, comic) {
    const overlay = document.createElement('div');
    overlay.classList = 'info-pane';
    overlay.innerHTML = `
      <div class='info-pane__box'>
        <span class='fa fa-times info-pane__box--btn'.</span>
        <p class='info-pane__box--text'></p>
      </div>
    `;
    overlay.querySelector('.info-pane__box--text').innerText = comic.description;
    overlay.querySelector('.info-pane__box--btn').addEventListener('click', () => {
      overlay.classList.remove('info-pane--active');
    });
    parent.appendChild(overlay);
  }
}

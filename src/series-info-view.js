'use strict';

export default class SeriesInfoView {
  constructor(parent, object) {
    this.elements = {
      image: object.data.results.thumbnail.path,
      title: object.data.results.title,
      startDate: object.data.results.startYear,
      endDate: object.data.results.endYear,
      creatorList: object.data.results.creators,
      copyright: object.attributionHTML,
    };
  }

  render() {

  }
}

'use strict';

export default class SeriesInfoView {
  constructor(parent, object) {
    const elements = {
      image: object.data.results.thumbnail.path,
      title: object.data.results.name,
      startDate: '',
      endDate: '',
      creatorList: '',
    };
  }

  render() {

  }
}

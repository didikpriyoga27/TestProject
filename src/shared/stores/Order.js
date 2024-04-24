import {observable} from 'mobx';

class Store {
  @observable selectedSaveOrder = null;
  @observable selectedSaveSplitBillOrder = null;
  @observable countSaveOrder = 0;

  constructor() {
    this.selectedSaveOrder = null;
    this.selectedSaveSplitBillOrder = null;
    this.countSaveOrder = 0;
  }
}

export default new Store();

import {observable, action} from 'mobx';
import {persist} from 'mobx-persist';
import models from '../models';
import Helpers from '../utilities/Helpers';
import ImgToBase64 from 'react-native-image-base64';

class Store {
  @persist('object', models.Main) @observable current = new models.Main();
  @persist @observable urlApi = '';
  @persist @observable authBasic = '';
  @persist @observable urlPartnerBackOffice = '';
  @persist @observable admobUnitId = '';
  @persist @observable oneSignalAppId = '';
  @persist @observable oneSignalPushToken = '';
  @persist @observable oneSignalUserId = '';
  @persist @observable accessToken = '';
  @persist @observable isLogin = false;
  @persist @observable isPrinterEnabled = false;
  @persist @observable isPrintReceiptForMerchant = false;
  @persist @observable typePrinter = 'bluetooth';
  @persist @observable loginAs = 'cashier';
  @persist @observable cashierId = '';
  @persist @observable maxSmallTextPrint = 42;
  @persist @observable maxHighTextPrint = 32;
  @persist @observable maxNormalTextPrint = 32;
  @persist @observable maxWideTextPrint = 30;
  @persist @observable maxSmallTextPrintBluetooth = 42;
  @persist @observable maxHighTextPrintBluetooth = 32;
  @persist @observable maxNormalTextPrintBluetooth = 32;
  @persist @observable maxWideTextPrintBluetooth = 30;
  @persist @observable maxSmallTextPrintUsbOtg = 32;
  @persist @observable maxHighTextPrintUsbOtg = 32;
  @persist @observable maxNormalTextPrintUsbOtg = 32;
  @persist @observable maxWideTextPrintUsbOtg = 16;

  @observable isGranted = false;
  @observable isLoading = false;
  @observable loadingText = null;
  @observable isShowMessage = false;
  @observable message = '';
  @observable isReload = false;
  @observable isReloadTransaction = false;
  @observable tabs = [];
  @observable tabsName = [];
  @observable products = [];
  @observable product = {};
  @observable currentChangeQtyProductItemId = null;
  @observable currentChangeVariantProductItemId = null;
  @observable widthScreen = Helpers.getWidthScreen();
  @observable widthScreen_40 = 0.4 * Helpers.getWidthScreen();
  @observable widthScreen_60 = 0.6 * Helpers.getWidthScreen();
  @observable heightScreen = Helpers.getHeightScreen();
  @observable isLandscape = Helpers.isLandscape();
  @observable tabletView = true;
  @observable isChangeCurrentStore = false;

  @observable totalQtyOrder = 0;
  @observable keyword = '';
  @observable keywordCategory = 'Semua Produk';
  @observable enableCategoryMenu = false;
  @observable isRefreshProduct = false;
  @observable partnerLoyalty = null;
  @observable orderRefId = null;
  @observable imageHeaderBase64 = '';

  @persist @observable productTypeList = 'list';
  @persist @observable showQRStore = true;

  @persist('object') @observable partner = null;
  @persist('object') @observable cashier = null;
  @persist('object') @observable store = null;
  @persist('object') @observable user = null;
  @persist('object') @observable token = null;
  @persist('object') @observable info = null;
  @persist('object') @observable setting = null;
  @persist('list') @observable saveOrders = [];

  constructor() {
    this.isLogin = false;
    this.isGranted = false;
    this.isLoading = false;
    this.isShowMessage = false;
    this.message = '';
    this.isReload = false;
    this.tabs = [];
    this.products = [];
    this.product = {};
    this.currentChangeQtyProductItemId = null;
    this.currentChangeVariantProductItemId = null;
    this.totalQtyOrder = 0;
    this.keyword = '';
    this.keywordCategory = 'Semua Produk';
    this.enableCategoryMenu = false;
    this.isRefreshProduct = false;
    this.partnerLoyalty = null;
    this.orderRefId = null;
    this.imageHeaderBase64 = '';
    this.tabletView = true;
    this.isChangeCurrentStore = false;
  }

  @action addSaveOrder(data) {
    this.saveOrders.push(data);
  }

  @action updateSaveOrder(data, index) {
    this.saveOrders[index] = data;
  }

  @action deleteSaveOrder(index) {
    this.saveOrders.splice(index, 1);
  }

  @action setAccessToken(data) {
    this.accessToken = data.token.accessToken;
    this.user = data.user;
    this.token = data.token;
  }

  @action removeAccessToken() {
    this.isGranted = false;
    this.isLoading = false;
    this.isShowMessage = false;
    this.message = '';
    this.isReload = false;
    this.tabs = [];
    this.products = [];
    this.product = {};
    this.currentChangeQtyProductItemId = null;
    this.currentChangeVariantProductItemId = null;
    this.totalQtyOrder = 0;
    this.keyword = '';
    this.keywordCategory = 'Semua Produk';
    this.enableCategoryMenu = false;
    this.isRefreshProduct = false;
    this.orderRefId = null;
    this.imageHeaderBase64 = '';
    this.tabletView = true;
    this.isChangeCurrentStore = false;
  }

  @action setInfo(data) {
    this.info = data;
    this.partner = data.partner;
    this.store = data.store;
    this.cashier = data.cashier;
    this.cashierId = data.cashierId;
    this.setting = data.setting;

    if (data.store.imageHeaderPrinter) {
      ImgToBase64.getBase64String(data.store.imageHeaderPrinter)
        .then(base64String => {
          this.imageHeaderBase64 = base64String;
        })
        .catch(err => console.log(err));
    } else if (data.partner.imageHeaderPrinter) {
      ImgToBase64.getBase64String(data.partner.imageHeaderPrinter)
        .then(base64String => {
          this.imageHeaderBase64 = base64String;
        })
        .catch(err => console.log(err));
    } else {
      this.imageHeaderBase64 = '';
    }
  }

  @action setLogin(value) {
    this.isLogin = value;
  }

  @action setUser(value) {
    this.user = value;
  }

  @action setGranted(value) {
    this.isGranted = value;
  }
}

export default new Store();

import { observable } from 'mobx';
import { persist } from 'mobx-persist';

class Main {
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
  @persist @observable cashierId = null;
  @persist @observable isPrintReceiptForMerchant = false;
  @persist @observable typePrinter = 'bluetooth';
  @persist @observable loginAs = 'cashier';
  @persist @observable maxSmallTextPrint = 42;
  @persist @observable maxNormalTextPrint = 32;
  @persist @observable maxHighTextPrint = 32;
  @persist @observable maxWideTextPrint = 30;
  @persist @observable maxSmallTextPrintBluetooth = 42;
  @persist @observable maxHighTextPrintBluetooth = 32;
  @persist @observable maxNormalTextPrintBluetooth = 32;
  @persist @observable maxWideTextPrintBluetooth = 30;
  @persist @observable maxSmallTextPrintUsbOtg = 32;
  @persist @observable maxHighTextPrintUsbOtg = 32;
  @persist @observable maxNormalTextPrintUsbOtg = 32;
  @persist @observable maxWideTextPrintUsbOtg = 16;
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
  
}

export default Main;
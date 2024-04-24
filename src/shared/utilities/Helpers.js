import {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import ExtraDimensions from 'react-native-extra-dimensions-android';

class Helpers extends Component {
  static getWidthScreen() {
    let result = 0;

    if (Platform.OS === 'android') {
      if (this.isLandscape()) {
        if (
          ExtraDimensions.getRealWindowHeight() >
          ExtraDimensions.getRealWindowWidth()
        ) {
          result = ExtraDimensions.getRealWindowHeight();
        } else {
          result = ExtraDimensions.getRealWindowWidth();
        }
      } else {
        if (
          ExtraDimensions.getRealWindowHeight() >
          ExtraDimensions.getRealWindowWidth()
        ) {
          result = ExtraDimensions.getRealWindowWidth();
        } else {
          result = ExtraDimensions.getRealWindowHeight();
        }
      }
    } else if (Platform.OS === 'ios') {
      result = Dimensions.get('window').width;
    } else {
      result = Dimensions.get('window').width;
    }
    return result;
  }

  static getHeightScreen() {
    let result = 0;

    if (Platform.OS === 'android') {
      if (this.isLandscape()) {
        if (
          ExtraDimensions.getRealWindowHeight() >
          ExtraDimensions.getRealWindowWidth()
        ) {
          result = ExtraDimensions.getRealWindowWidth();
        } else {
          result = ExtraDimensions.getRealWindowHeight();
        }
      } else {
        if (
          ExtraDimensions.getRealWindowHeight() >
          ExtraDimensions.getRealWindowWidth()
        ) {
          result = ExtraDimensions.getRealWindowHeight();
        } else {
          result = ExtraDimensions.getRealWindowWidth();
        }
      }
    } else if (Platform.OS === 'ios') {
      result = Dimensions.get('window').height;
    } else {
      result = Dimensions.get('window').height;
    }
    return result;
  }

  static isTablet() {
    return DeviceInfo.isTablet();
  }

  static isLandscape() {
    return DeviceInfo.isLandscape();
  }
}

export default Helpers;

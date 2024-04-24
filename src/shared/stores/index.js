import {create} from 'mobx-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Main from './Main';
import Order from './Order';

const hydrateMain = create({storage: AsyncStorage});

const stores = {
  Main,
  Order,
};

hydrateMain('Main', stores.Main);

export default {
  ...stores,
};

import {categoriesSchema} from '../schemas/CategorySchema';
import {productsSchema} from '../schemas/ProductSchema';
import {variantsSchema} from '../schemas/VariantSchema';
import {currentOrdersSchema} from '../schemas/CurrentOrderSchema';
import {currentSplitBillsSchema} from '../schemas/CurrentSplitBillSchema';
import {saveOrdersSchema} from '../schemas/SaveOrderSchema';
import {partnerProductsSchema} from '../schemas/PartnerProductSchema';
import {partnerStoresSchema} from '../schemas/PartnerStoreSchema';
import {orderTransactionSchema} from '../schemas/OrderTransactionSchema';
import {onlineHistorySchema} from '../schemas/OnlineHistorySchema';
import {courierJobSchema} from '../schemas/CourierJobSchema';
import {courierSchema} from '../schemas/CourierSchema';
import {masterTransactionSchema} from '../schemas/MasterTransactionSchema';
import {accountInfoSchema} from '../schemas/AccountInfoSchema';

const Realm = require('realm');

const databaseOptions = {
  path: 'cazh.realm',
  schema: [
    categoriesSchema,
    productsSchema,
    variantsSchema,
    currentOrdersSchema,
    currentSplitBillsSchema,
    saveOrdersSchema,
    partnerProductsSchema,
    partnerStoresSchema,
    orderTransactionSchema,
    onlineHistorySchema,
    courierJobSchema,
    courierSchema,
    masterTransactionSchema,
    accountInfoSchema,
  ],
  schemaVersion: 41,
};

const realm = new Realm(databaseOptions);

module.exports = realm;

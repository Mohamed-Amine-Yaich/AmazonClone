// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, CartPoduct, OrderProduct, Order } = initSchema(schema);

export {
  Product,
  CartPoduct,
  OrderProduct,
  Order
};
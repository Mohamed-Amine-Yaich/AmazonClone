// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, CartPoduct } = initSchema(schema);

export {
  Product,
  CartPoduct
};
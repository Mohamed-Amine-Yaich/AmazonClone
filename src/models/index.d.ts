import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartPoductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image: string;
  readonly images: string[];
  readonly options?: (string | null)[] | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly ratings?: number | null;
  readonly avgRating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class CartPoduct {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly ProductID: string;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CartPoduct, CartPoductMetaData>);
  static copyOf(source: CartPoduct, mutator: (draft: MutableModel<CartPoduct, CartPoductMetaData>) => MutableModel<CartPoduct, CartPoductMetaData> | void): CartPoduct;
}
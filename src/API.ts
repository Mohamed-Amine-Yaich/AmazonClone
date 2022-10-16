/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  image: string,
  images: Array< string >,
  options?: Array< string | null > | null,
  price: number,
  oldPrice?: number | null,
  ratings?: number | null,
  avgRating?: number | null,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  options?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  ratings?: ModelIntInput | null,
  avgRating?: ModelFloatInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  title: string,
  description?: string | null,
  image: string,
  images: Array< string >,
  options?: Array< string | null > | null,
  price: number,
  oldPrice?: number | null,
  ratings?: number | null,
  avgRating?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  images?: Array< string > | null,
  options?: Array< string | null > | null,
  price?: number | null,
  oldPrice?: number | null,
  ratings?: number | null,
  avgRating?: number | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateCartPoductInput = {
  id?: string | null,
  userSub: string,
  quantity: number,
  option?: string | null,
  ProductID: string,
};

export type ModelCartPoductConditionInput = {
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  ProductID?: ModelIDInput | null,
  and?: Array< ModelCartPoductConditionInput | null > | null,
  or?: Array< ModelCartPoductConditionInput | null > | null,
  not?: ModelCartPoductConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CartPoduct = {
  __typename: "CartPoduct",
  id: string,
  userSub: string,
  quantity: number,
  option?: string | null,
  ProductID: string,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCartPoductInput = {
  id: string,
  userSub?: string | null,
  quantity?: number | null,
  option?: string | null,
  ProductID?: string | null,
};

export type DeleteCartPoductInput = {
  id: string,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  options?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  ratings?: ModelIntInput | null,
  avgRating?: ModelFloatInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelCartPoductFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  ProductID?: ModelIDInput | null,
  and?: Array< ModelCartPoductFilterInput | null > | null,
  or?: Array< ModelCartPoductFilterInput | null > | null,
  not?: ModelCartPoductFilterInput | null,
};

export type ModelCartPoductConnection = {
  __typename: "ModelCartPoductConnection",
  items:  Array<CartPoduct | null >,
  nextToken?: string | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    ratings?: number | null,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    ratings?: number | null,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    ratings?: number | null,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCartPoductMutationVariables = {
  input: CreateCartPoductInput,
  condition?: ModelCartPoductConditionInput | null,
};

export type CreateCartPoductMutation = {
  createCartPoduct?:  {
    __typename: "CartPoduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      ratings?: number | null,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCartPoductMutationVariables = {
  input: UpdateCartPoductInput,
  condition?: ModelCartPoductConditionInput | null,
};

export type UpdateCartPoductMutation = {
  updateCartPoduct?:  {
    __typename: "CartPoduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      ratings?: number | null,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCartPoductMutationVariables = {
  input: DeleteCartPoductInput,
  condition?: ModelCartPoductConditionInput | null,
};

export type DeleteCartPoductMutation = {
  deleteCartPoduct?:  {
    __typename: "CartPoduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      ratings?: number | null,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    ratings?: number | null,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      ratings?: number | null,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartPoductQueryVariables = {
  id: string,
};

export type GetCartPoductQuery = {
  getCartPoduct?:  {
    __typename: "CartPoduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      ratings?: number | null,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCartPoductsQueryVariables = {
  filter?: ModelCartPoductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartPoductsQuery = {
  listCartPoducts?:  {
    __typename: "ModelCartPoductConnection",
    items:  Array< {
      __typename: "CartPoduct",
      id: string,
      userSub: string,
      quantity: number,
      option?: string | null,
      ProductID: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string | null > | null,
        price: number,
        oldPrice?: number | null,
        ratings?: number | null,
        avgRating?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    ratings?: number | null,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    ratings?: number | null,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string | null > | null,
    price: number,
    oldPrice?: number | null,
    ratings?: number | null,
    avgRating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCartPoductSubscription = {
  onCreateCartPoduct?:  {
    __typename: "CartPoduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      ratings?: number | null,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCartPoductSubscription = {
  onUpdateCartPoduct?:  {
    __typename: "CartPoduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      ratings?: number | null,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCartPoductSubscription = {
  onDeleteCartPoduct?:  {
    __typename: "CartPoduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    ProductID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string | null > | null,
      price: number,
      oldPrice?: number | null,
      ratings?: number | null,
      avgRating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

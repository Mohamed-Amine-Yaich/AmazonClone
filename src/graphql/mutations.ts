/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      price
      oldPrice
      ratings
      avgRating
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      price
      oldPrice
      ratings
      avgRating
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      price
      oldPrice
      ratings
      avgRating
      createdAt
      updatedAt
    }
  }
`;
export const createCartPoduct = /* GraphQL */ `
  mutation CreateCartPoduct(
    $input: CreateCartPoductInput!
    $condition: ModelCartPoductConditionInput
  ) {
    createCartPoduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      ProductID
      product {
        id
        title
        description
        image
        images
        options
        price
        oldPrice
        ratings
        avgRating
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCartPoduct = /* GraphQL */ `
  mutation UpdateCartPoduct(
    $input: UpdateCartPoductInput!
    $condition: ModelCartPoductConditionInput
  ) {
    updateCartPoduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      ProductID
      product {
        id
        title
        description
        image
        images
        options
        price
        oldPrice
        ratings
        avgRating
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCartPoduct = /* GraphQL */ `
  mutation DeleteCartPoduct(
    $input: DeleteCartPoductInput!
    $condition: ModelCartPoductConditionInput
  ) {
    deleteCartPoduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      ProductID
      product {
        id
        title
        description
        image
        images
        options
        price
        oldPrice
        ratings
        avgRating
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

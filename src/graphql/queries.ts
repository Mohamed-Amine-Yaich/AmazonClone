/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCartPoduct = /* GraphQL */ `
  query GetCartPoduct($id: ID!) {
    getCartPoduct(id: $id) {
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
export const listCartPoducts = /* GraphQL */ `
  query ListCartPoducts(
    $filter: ModelCartPoductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartPoducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;

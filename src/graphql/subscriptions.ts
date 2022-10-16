/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateCartPoduct = /* GraphQL */ `
  subscription OnCreateCartPoduct {
    onCreateCartPoduct {
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
export const onUpdateCartPoduct = /* GraphQL */ `
  subscription OnUpdateCartPoduct {
    onUpdateCartPoduct {
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
export const onDeleteCartPoduct = /* GraphQL */ `
  subscription OnDeleteCartPoduct {
    onDeleteCartPoduct {
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

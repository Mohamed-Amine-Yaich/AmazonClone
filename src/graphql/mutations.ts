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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
      option
      quantity
      id
      PoductID
      poduct {
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OrderID
      order {
        id
        userSub
        country
        fullName
        phoneNumber
        adress
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
      option
      quantity
      id
      PoductID
      poduct {
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OrderID
      order {
        id
        userSub
        country
        fullName
        phoneNumber
        adress
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
      option
      quantity
      id
      PoductID
      poduct {
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OrderID
      order {
        id
        userSub
        country
        fullName
        phoneNumber
        adress
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userSub
      country
      fullName
      phoneNumber
      adress
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userSub
      country
      fullName
      phoneNumber
      adress
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userSub
      country
      fullName
      phoneNumber
      adress
      city
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

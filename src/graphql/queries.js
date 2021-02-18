/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const collections = /* GraphQL */ `
  query Collections {
    collections {
      id
      title
      routename
      linkUrl
      imageUrl
      items {
        id
        name
        imageUrl
        price
        collection {
          id
          title
          routename
          linkUrl
          imageUrl
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      title
      routename
      linkUrl
      imageUrl
      items {
        id
        name
        imageUrl
        price
        collection {
          id
          title
          routename
          linkUrl
          imageUrl
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        routename
        linkUrl
        imageUrl
        items {
          id
          name
          imageUrl
          price
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
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      imageUrl
      price
      collection {
        id
        title
        routename
        linkUrl
        imageUrl
        items {
          id
          name
          imageUrl
          price
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUrl
        price
        collection {
          id
          title
          routename
          linkUrl
          imageUrl
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

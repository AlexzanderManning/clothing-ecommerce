/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection {
    onCreateCollection {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection {
    onUpdateCollection {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection {
    onDeleteCollection {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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

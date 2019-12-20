const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://res.cloudinary.com/haven/image/upload/w_2048/v1574870596/HAVEN-FW19-PrimaLoft-Product-Focus-Web-1_rh82zc.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://www.freshnessmag.com/.image/t_share/MTU4ODY1NjIyNDMwNjU1Nzcw/the-north-face-mastermind-world-collection-00.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://res.cloudinary.com/haven/image/upload/v1575390798/HAVEN-New-Balance-FW19-Editorial-3_zuok2c.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://res.cloudinary.com/haven/image/upload/v1576595770/HAVEN-Highlights-FW19-Stone-Island-Shadow-Projects-Web-1_tsfte3.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ],
};

const directoryReducer = (state = INITIAL_STATE, action ) => {
  switch(action.type){
    default: 
    return state;
  }
};

export default directoryReducer;
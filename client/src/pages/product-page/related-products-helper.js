export  const collectionChooser = (collections) => {
  const chosenItems = { 
    
  };

  for (let i = 0; i < 3; i++){
    let collectionSelection = Math.floor(Math.random() * Math.floor(5));
    let itemSelection = Math.floor(Math.random() * Math.floor(5));
    let selection = collections[collectionSelection].items[itemSelection];
    let key = 'item' + i;
    chosenItems[key] = selection;
  }
  return chosenItems;
}
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([232, 554, 124, 754])
  }, 2500)
});

const getRecipe = recipeID => {
  return new Promise((resolve, reject) => {
    setTimeout(ID => {
      const recipe = {
        title: 'Spagetti',
        author: 'John'
      }
      resolve(`${ID}: ${recipe.title}`);
    }, 1500, recipeID)
  })
}

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout((pub) => {
      const recipe2 = {
        title: 'Pizza',
        author: 'Luca'
      }
      resolve(`${pub}: ${recipe2.title}`)
    }, 2000, publisher);
  })
}

getIDs.then((IDs) => {
    console.log(IDs)
    return getRecipe(IDs[2]);
  })
  .then(recipe => {
    console.log(recipe);
    return getRelated('Jack')
  }).then(recipe2 => {
    console.log(recipe2)
  })
  .catch(error => {
    console.log(error)
  })
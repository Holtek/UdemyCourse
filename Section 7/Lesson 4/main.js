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

async function getRecepiesAW() {
  const IDs = await getIDs;
  console.log(IDs)
  const recipe = await getRecipe(IDs[2])
  console.log(recipe);


  return recipe;
}
getRecepiesAW().then(result => {
  console.log(result);
});
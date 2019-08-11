function getRecipe() {
  setTimeout(() => {
    const recipeID = [545, 32, 232, 656, 632, ];
    console.log(recipeID)
    setTimeout((id) => {
      const recipe = {
        title: 'Fresh tomato pasta',
        publisher: 'Jonh Doe'
      }
      console.log(`${id}: ${recipe.title}`);
      setTimeout((publisher) => {
        const recipe = {
          title: 'Italian Pizza',
          publisher: 'John Doe'
        }
        console.log(recipe)
      }, 1500, recipe.publisher);
    }, 1500, recipeID[2])
  }, 1500)
}

getRecipe();
class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imgUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactosFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imgUrl = imgUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactosFree = isLactosFree;
  }
}

export default Meal;

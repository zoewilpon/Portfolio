exports.extractIngredients = (drink) => {
    const ingredients = [];
    const measures = [];

    for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];

    if (ingredient) {
        ingredients.push(ingredient);
        measures.push(measure);
    }}  
    return { ingredients, measures };
};

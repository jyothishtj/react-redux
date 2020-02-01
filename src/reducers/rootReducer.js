const initState = {
    recipes: [
        { id: '1', title: 'Chicken Madras',ingradients:'1 onion, peeled and quartered,2 garlic cloves,thumb-sized chunk of ginger,½ red chilli',description:'Cook our healthy chicken Madras curry and ditch the takeaway menu. This simple family dinner is full of fragrant spices and tender pieces of chicken', body: 'Blitz 1 quartered onion, 2 garlic cloves, a thumbsized chunk of ginger and ½ red chilli together in a food processor until it becomes a coarse paste.Heat 1 tbsp vegetable oil in a large saucepan and add the paste, fry for 5 mins, until softened. If it starts to stick to the pan at all, add a splash of water,Tip in ½ tsp turmeric, 1 tsp ground cumin, 1 tsp ground coriander and 1-2 tsp hot chilli powder and stir well, cook for a couple of mins to toast them a bit, then add 4 chicken breasts, cut into chunks. Stir and make sure everything is covered in the spice mix.' },
        { id: '2', title: 'Peanut butter chicken',ingradients:'2 tbsp vegetable oil,8 skinless boneless chicken thighs-cut into chunks,1 garlic clove-crushed,2 red chillies-finely sliced', description:'The whole family will love this new, budget chicken dish. Any leftovers freeze well and make a handy lunch', body: 'Heat 1 tbsp of the oil in a deep frying pan over a medium heat. Brown the chicken in batches, setting aside once golden. Fry the garlic, chilli and ginger in the other 1 tbsp oil for 1 min. Add the garam masala and fry for 1 min more.Stir in the peanut butter, coconut milk and tomatoes, and bring to a simmer. Return the chicken to the pan and add the chopped coriander. Cook for 30 mins until the sauce thickens and the chicken is cooked through.' }
        //{ id: '3', title: 'Quattro Formaggio', body: 'Bring a large pot of lightly salted water to a boil. Add the butter to a large skillet over medium heat and add the mushrooms and garlic. Cook until browned, about 5 minutes, then add the wine and cook until evaporated.' }
    ]
}



const rootReducer = (state = initState, action) => {
    
    console.log(action.type);
    if (action.type === 'DELETE_RECIPE') {
        // newposts is an array which has filtered out the posts which are not the post to be deleted
        let newRecipes = state.recipes.filter(recipe => {
            return recipe.id !== action.id
        });
        return {
            ...state,
            posts: newRecipes
        }
    }
    return state;
}

export default rootReducer

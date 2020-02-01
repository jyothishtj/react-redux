import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render(){
    const { recipes } = this.props
    const recipeList = recipes.length ? (
      recipes.map(recipe => {
        return (
          <div className="post card" key={recipe.id}>
                        <div className="card.body">
              <Link to={'/' + recipe.id}>
                <span className="card.title .primary">{recipe.title}</span>
              </Link>
              <p>{recipe.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Recipeies Available to Show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Recipe List</h4>
                    {recipeList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Home)
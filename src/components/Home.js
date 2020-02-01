import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pasta from '../spaghetti.png'
import { connect } from 'react-redux'

class Home extends Component {
  render(){
    const { recipes } = this.props
    const recipeList = recipes.length ? (
      recipes.map(recipe => {
        return (
          <div className="post card" key={recipe.id}>
            <img src={Pasta} alt="A Pasta Plate" />
            <div className="card-content">
              <Link to={'/' + recipe.id}>
                <span className="card-title red-text">{recipe.title}</span>
              </Link>
              <p>{recipe.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No recipes available</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Available Recipes</h4>
          <h6>When it comes to comfort food, you can never go wrong with a heaping plate of Pasta</h6>
          {recipeList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)
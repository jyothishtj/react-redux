import React, {Component} from 'react';
import { connect } from 'react-redux'
class Recipe extends Component {
       handleClick = () => {
        this.props.deleteRecipe(this.props.recipe.id);
        this.props.history.push('/');
    }
    render () {
              const recipe = this.props.recipe ? (
            <div className="post center title">
                <h4 className="center">{this.props.recipe.title}</h4>
                <p>{this.props.recipe.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Recipe
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading Recipe</div>
        )
        return (
            <div className="container center">
                {recipe}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.recipe_id;
    return {
        recipe: state.recipes.find(recipe => recipe.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteRecipe: (id) => { dispatch({type: 'DELETE_RECIPE', id: id})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Recipe);
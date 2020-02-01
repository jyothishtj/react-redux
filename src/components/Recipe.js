import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
class Recipe extends Component {
//     state = {
//     recipe: null
//     }
//     componentDidMount(){
//         let id = this.props.match.params.recipe_id;
//         const response= axios.get('https://jsonplaceholder.typicode.com/posts/',{
// params :{r:id,app_id:'7df78636',app_key:'d5733beeda08b0fee26b51c380d15733'}} )
//           .then(res => {
//             this.setState({
//               recipe: res.data
//             });
           
//           });
//       }
    handleClick = () => {
        this.props.deleteRecipe(this.props.recipe.id);
        this.props.history.push('/');
    }
    render () {
        console.log(this.props);
        const recipe = this.props.recipe ? (
            <div className="post center title">
                <h4 className="center">{this.props.recipe.title}</h4>
                <p>{this.props.recipe.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete recipe
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading recipe</div>
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
// to change state from component  
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_RECIPE', id: id})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Recipe);
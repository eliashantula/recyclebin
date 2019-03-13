import React, { Component } from "react";
import { Button } from "reactstrap";
import RecipeInfoPopUp from "./recipeinfosidebar";
let RecipeSnapshot = ({ recipe, details, fullRecipe }) => {
	return (
		<div className="individualRecipe">
			<img
				src={recipe.image}
				alt="fooditem"
				style={{ width: "100%", height: "auto", borderRadius: "10px" }}
			/>
			<h5 className="recipeTitle">{recipe.title}</h5>
			<RecipeInfoPopUp
				id={recipe.id}
				onSubmit={details}
				title={recipe.title}
				fullRecipe={fullRecipe}
			/>
		</div>
	);
};

export default class RecipePreview extends Component {
	render() {
		const { recipes, getFullRecipesInfo, fullRecipe } = this.props;

		return (
			<div className="recipePreview">
				{recipes.map((recipe, i) => {
					return (
						<RecipeSnapshot
							recipe={recipe}
							key={i}
							details={getFullRecipesInfo}
							fullRecipe={fullRecipe}
						/>
					);
				})}
			</div>
		);
	}
}

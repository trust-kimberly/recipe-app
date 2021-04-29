import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, cuisineType, image, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h3 className={style.type}>{cuisineType}</h3>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} />
            <a href={url} target="blank"><h3>See Full Recipe</h3></a>
        </div>
    );
}

export default Recipe;
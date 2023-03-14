import React from "react";
import style from '../recipe.module.css'


export default function Recipe({ title, calories, image, ingredients }) {
    return (
        <div className={style.recipe}>
            <h1 className={style.h1}>{title}</h1>
            <ol className={style.liItems}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.p}>{Math.round(calories)}</p>
            <img className={style.image} src={image} alt="recipe" />

        </div>
    )
}
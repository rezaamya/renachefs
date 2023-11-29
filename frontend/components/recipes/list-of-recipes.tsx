import Link from 'next/link';
import * as classes from './list-of-recipes.module.css';

export default function ListOfRecipes() {
  return (
    <>
      <div>
        <div className={classes.row}>
          <div className={classes.imageContainer}>
            <img alt="recipe" src="/images/recipe.jpg" />
          </div>
          <div className={classes.dataContainer}>
            <div>Title</div>
            <Link href="recipes/test">Read More</Link>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.imageContainer}>
            <img alt="recipe" src="/images/recipe.jpg" />
          </div>
          <div className={classes.dataContainer}>
            <div>Title</div>
            <Link href="recipes/test">Read More</Link>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.imageContainer}>
            <img alt="recipe" src="/images/recipe.jpg" />
          </div>
          <div className={classes.dataContainer}>
            <div>Title</div>
            <Link href="recipes/test">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
}

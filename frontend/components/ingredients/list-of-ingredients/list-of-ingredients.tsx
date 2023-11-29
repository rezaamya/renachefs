import Link from 'next/link';
import * as classes from './list-of-ingredients.module.css';

export default function ListOfIngredients() {
  return (
    <>
      <div>
        <div className={classes.row}>
          <div className={classes.imageContainer}>
            <img alt="egg" src="/images/egg.jpg" />
          </div>
          <div className={classes.dataContainer}>
            <div>Title</div>
            <Link href={''} className={`${classes.edit} ${classes.button}`}>
              Edit
            </Link>
            <button
              type={'button'}
              className={`${classes.delete} ${classes.button}`}
            >
              Delete
            </button>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.imageContainer}>
            <img alt="egg" src="/images/egg.jpg" />
          </div>
          <div className={classes.dataContainer}>
            <div>Title</div>
            <Link href={''} className={`${classes.edit} ${classes.button}`}>
              Edit
            </Link>
            <button
              type={'button'}
              className={`${classes.delete} ${classes.button}`}
            >
              Delete
            </button>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.imageContainer}>
            <img alt="egg" src="/images/egg.jpg" />
          </div>
          <div className={classes.dataContainer}>
            <div>Title</div>
            <Link href={''} className={`${classes.edit} ${classes.button}`}>
              Edit
            </Link>
            <button
              type={'button'}
              className={`${classes.delete} ${classes.button}`}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

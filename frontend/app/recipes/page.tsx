import CheckboxInput from '@/components/forms/checkbox';
import ListOfRecipes from '@/components/recipes/list-of-recipes';

export default function Recipes() {
  return (
    <>
      <div>
        <form className="mb-3">
          <div>Select your Ingredients!</div>
          <CheckboxInput />
          <CheckboxInput />
          <CheckboxInput />
          <button>Search</button>
        </form>
      </div>
      <ListOfRecipes />
    </>
  );
}

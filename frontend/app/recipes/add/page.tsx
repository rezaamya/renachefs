import CheckboxInput from '@/components/forms/checkbox';

export default function AddRecipe() {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Title:</label>
          <input type="text" name="title" id="name" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" rows="10" />
        </div>
        <div>
          <div>Select related ingredients:</div>
          <CheckboxInput />
          <CheckboxInput />
          <CheckboxInput />
        </div>
        <button>Save</button>
      </form>
    </>
  );
}

export default function AddIngredient() {
  return (
    <>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="url">Image (URL):</label>
          <input type="text" id="url" name="url" />
        </div>
      </form>
    </>
  );
}

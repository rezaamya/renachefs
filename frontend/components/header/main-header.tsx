import Link from 'next/link';

export default function MainHeader() {
  return (
    <>
      <header>
        <div className="flex flex-row bg-indigo-500 text-center pt-8 pb-8">
          <div className="basis-full text-white text-4xl">ReNa Chefs</div>
        </div>
        <nav className="flex pt-2 pb-2 w-screen">
          <ul className="flex-1 flex justify-center mr-auto">
            <li className="mx-2">
              <Link href={'/recipes'}>Recipes</Link>
            </li>
            <li className="mx-2">
              <Link href={'/recipes/add'}>Add recipe</Link>
            </li>
            <li className="mx-2">
              <Link href={'/ingredients'}>Ingredients</Link>
            </li>
            <li className="mx-2">
              <Link href={'/ingredients/add'}>Add ingredient</Link>
            </li>
            <li className="mx-2">
              <Link href={'/login'}>Login</Link>
            </li>
            <li className="mx-2">Logout</li>
          </ul>
        </nav>
      </header>
      <hr className="pb-3" />
    </>
  );
}

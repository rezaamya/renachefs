import Link from "next/link";

export default function MainHeader() {
    return (
        <>
            <header>
                <div>ReNa Chefs</div>
                <hr></hr>
                <nav>
                    <ul>
                        <li>
                            <Link href={'/recipes'}>Recipes</Link>
                        </li>
                        <li>
                            <Link href={'/recipes/add'}>Add recipe</Link>
                        </li>
                        <li>
                            <Link href={'/ingredients'}>Ingredients</Link>
                        </li>
                        <li>
                            <Link href={'/ingredients/add'}>Add ingredient</Link>
                        </li>
                        <li>
                            <Link href={'/login'}>Login</Link>
                        </li>
                        <li>
                            Logout
                        </li>
                    </ul>
                </nav>
            </header>
            <hr></hr>
        </>
    )
}
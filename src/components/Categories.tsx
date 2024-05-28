import Link from "next/link";
import React from "react";

export default function Categories() {
    const categories = ["Frontend", "Backend", "DevOps", "FullStack", "Design"];

    return (
        <section className="categories">
             <div className="category-container">
            {categories.map((category) => (
                <div key={category} className="category-card">
                   <Link href={`/categories/${category.toLowerCase()}`}>
                        <h3>{category}</h3>
                    </Link>
                </div>
            ))}
        </div>
        </section>
    );
}




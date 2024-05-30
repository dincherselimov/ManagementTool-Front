import Link from 'next/link';

export default function Categories() {


  const categories = ['Frontend', 'Backend', 'DevOps&Deployment', 'FullStack', 'Databases', 'Miscellaneous'] as const;
  const categoryPaths: { [key in typeof categories[number]]: string } = {
    'Frontend': 'frontend',
    'Backend': 'backend',
    'DevOps&Deployment': 'devops',
    'FullStack': 'fullstack',
    'Miscellaneous': 'miscellaneous',
    'Databases': 'databases',
  };

  return (
    <section className="categories">
      <div className="category-container">
        {categories.map((category) => (
          <div key={category} className="category-card">
            <Link href={`/categories/${categoryPaths[category]}/${category.toLowerCase()}`}>
              <h3>{category}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

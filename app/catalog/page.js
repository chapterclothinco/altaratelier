import CatalogGrid from '@/components/CatalogGrid';

export const metadata = {
  title: 'Catalog',
  description:
    'Browse our full collection of custom bridal apparel — silk robes, bridesmaid sets, custom jackets, and more. Every piece designed from scratch.',
};

export default function CatalogPage() {
  return (
    <section className="catalog-page">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Full Collection</span>
          <h2>
            Everything We <em>Create</em>
          </h2>
          <p className="section-subtitle">
            Every piece is designed from scratch and crafted in premium
            materials. Browse our full range — if you can dream it, we can make
            it.
          </p>
        </div>
        <CatalogGrid />
      </div>
    </section>
  );
}

'use client';

import { useState, useMemo } from 'react';
import catalogData from '@/data/catalog.json';
import { getGarmentSVG } from '@/components/GarmentSVG';

function formatMethod(method) {
  const labels = {
    'cut-and-sew': 'Cut & Sew',
    'screen-print': 'Screen Print',
    'embroidered': 'Embroidered',
  };
  return labels[method] || method;
}

export default function CatalogGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [methodFilter, setMethodFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let result = catalogData;

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (methodFilter !== 'all') {
      result = result.filter((p) => p.productionMethod === methodFilter);
    }

    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
      result = result.filter((p) => p.priceMin >= min && p.priceMin < max);
    }

    if (searchQuery) {
      const term = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    return result;
  }, [activeCategory, methodFilter, priceFilter, searchQuery]);

  const clearFilters = () => {
    setActiveCategory('all');
    setMethodFilter('all');
    setPriceFilter('all');
    setSearchQuery('');
  };

  const categories = [
    {
      value: 'all',
      label: 'All',
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="5" height="5" rx="1" />
          <rect x="9" y="2" width="5" height="5" rx="1" />
          <rect x="2" y="9" width="5" height="5" rx="1" />
          <rect x="9" y="9" width="5" height="5" rx="1" />
        </svg>
      ),
    },
    {
      value: 'getting-ready',
      label: 'Getting Ready',
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 3L2 5L3 8L5 7V14H7.5L8 10L8.5 14H11V7L13 8L14 5L11 3" />
          <path d="M5 3C5 3 6.5 5 8 5C9.5 5 11 3 11 3" />
        </svg>
      ),
    },
    {
      value: 'celebration',
      label: 'Celebration',
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4L2 6L3.5 8L4 7.5V14H12V7.5L12.5 8L14 6L12 4" />
          <path d="M4 4C4 4 6 6 8 6C10 6 12 4 12 4" />
        </svg>
      ),
    },
    {
      value: 'keepsakes',
      label: 'Keepsakes',
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 3L5.5 5.5C4.1 6.9 4.1 9.1 5.5 10.5L8 13L10.5 10.5C11.9 9.1 11.9 6.9 10.5 5.5L8 3Z" />
        </svg>
      ),
    },
    {
      value: 'accessories',
      label: 'Accessories',
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="6" width="10" height="8" rx="1" />
          <path d="M6 6V4.5C6 4.5 6 2.5 8 2.5C10 2.5 10 4.5 10 4.5V6" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="catalog-toolbar">
        <div className="catalog-category-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`cat-filter-btn${activeCategory === cat.value ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
        <div className="catalog-toolbar-right">
          <select
            className="catalog-select"
            value={methodFilter}
            onChange={(e) => setMethodFilter(e.target.value)}
          >
            <option value="all">All Methods</option>
            <option value="cut-and-sew">Cut &amp; Sew</option>
            <option value="screen-print">Screen Print</option>
            <option value="embroidered">Embroidered</option>
          </select>
          <select
            className="catalog-select"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="0-60">Under $60</option>
            <option value="60-100">$60&ndash;$100</option>
            <option value="100-9999">$100+</option>
          </select>
          <input
            type="text"
            className="catalog-search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      <div className="catalog-product-grid">
        {filtered.length === 0 ? (
          <div className="catalog-no-results">
            <h3>No products found</h3>
            <p>Try adjusting your filters or search term.</p>
          </div>
        ) : (
          filtered.map((product) => (
            <div key={product.id} className="catalog-product-card">
              <div className="catalog-card-illustration">
                {getGarmentSVG(product.garmentType)}
                {product.badge && (
                  <span className={`catalog-card-badge ${product.badge.toLowerCase()}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="catalog-card-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="catalog-card-meta">
                  <span className="catalog-card-price">
                    ${product.priceMin}&ndash;${product.priceMax}
                  </span>
                  <span className="catalog-card-method">
                    {formatMethod(product.productionMethod)}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="catalog-results">
        <span className="catalog-result-count">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="catalog-cta">
        <h3>Don&rsquo;t see what you&rsquo;re imagining?</h3>
        <p>
          Every wedding is unique. Share your vision with our design team and
          we&rsquo;ll create custom pieces tailored to your celebration.
        </p>
        <a href="/#contact" className="btn btn-primary btn-large">
          Begin Your Design
        </a>
      </div>
    </>
  );
}

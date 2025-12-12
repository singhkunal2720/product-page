'use client'

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, Check, ChevronLeft } from 'lucide-react';
import ProductCards from '@/components/ProductCards';
import FilterDrawer from '@/Components/FilterDrawer';

const sortOptions = [
    { label: 'Recommended', value: 'recommended' },
    { label: 'Newest First', value: 'newest' },
    { label: 'Popular', value: 'popular' },
    { label: 'Price: High to Low', value: 'price-high' },
    { label: 'Price: Low to High', value: 'price-low' },
];

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selected, setSelected] = useState(sortOptions[0]);
    const [isMobile, setIsMobile] = useState(false);

    const [filters, setFilters] = useState({
        customizable: false,
        ideal: [],
        occasion: [],
        work: [],
        fabric: [],
        segment: [],
        suitable: [],
    });

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                const enriched = data.map((product, index) => ({
                    ...product,
                    isNew: index === 0,
                    inStock: index !== 1,
                    ideal: ['Men', 'Women'][index % 2],
                    occasion: ['Casual', 'Party'][index % 2],
                    work: ['Formal', 'Ethnic'][index % 2],
                    fabric: ['Cotton', 'Silk'][index % 2],
                    segment: ['Premium', 'Budget'][index % 2],
                    suitable: ['Summer', 'Winter'][index % 2],
                    customizable: index % 2 === 0,
                }));
                setProducts(enriched);
            });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filteredProducts = products.filter(product => {
        if (filters.customizable && !product.customizable) return false;

        const matches = (key) => {
            if (filters[key].length === 0) return true;
            return filters[key].includes(product[key]);
        };

        return (
            matches('ideal') &&
            matches('occasion') &&
            matches('work') &&
            matches('fabric') &&
            matches('segment') &&
            matches('suitable')
        );
    });

    return (
        <main className="products-page-container">
            <div className="products-page-header">
                <h1 className="products-heading">Discover Our Products</h1>
                <p className="products-description">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            </div>

            <div className="product-filter">
                {isMobile ? (
                    <div className="product-filter-mobile">
                        <button className="show-filter-button" onClick={() => setDrawerOpen(!drawerOpen)}>
                            Filter
                        </button>

                        <div className="vertical-divider"> </div>

                        <div className="custom-dropdown">
                            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                                {selected.label}
                                <ChevronDown size={16} />
                            </button>

                            {isOpen && (
                                <ul className="dropdown-menu">
                                    {sortOptions.map((option) => (
                                        <li
                                            key={option.value}
                                            onClick={() => handleSelect(option)}
                                            className={`dropdown-item ${selected.value === option.value ? 'active' : ''}`}
                                        >
                                            {selected.value === option.value && <Check size={20} className="tick-icon" />}
                                            <span>{option.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="product-filter-left">
                            <p className="product-count">{filteredProducts.length} items</p>
                            <button className="show-filter-button" onClick={() => setDrawerOpen(!drawerOpen)}>
                                {drawerOpen ? (
                                    <>
                                        <ChevronLeft size={16} /> Hide Filters
                                    </>
                                ) : (
                                    <>
                                        <ChevronRight size={16} /> Show Filters
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="product-filter-right">
                            <div className="custom-dropdown">
                                <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                                    {selected.label}
                                    <ChevronDown size={16} />
                                </button>

                                {isOpen && (
                                    <ul className="dropdown-menu">
                                        {sortOptions.map((option) => (
                                            <li
                                                key={option.value}
                                                onClick={() => handleSelect(option)}
                                                className={`dropdown-item ${selected.value === option.value ? 'active' : ''}`}
                                            >
                                                {selected.value === option.value && <Check size={20} className="tick-icon" />}
                                                <span>{option.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

            <section className="products-section">
                {drawerOpen && <FilterDrawer filters={filters} setFilters={setFilters} onClose={() => setDrawerOpen(false)} />}
                <div className="products-grid">
                    {filteredProducts.length === 0 ? (
                        <div className="no-results-found">
                            <p>No results found. Try adjusting your filters.</p>
                        </div>
                    ) : (
                        [...filteredProducts]
                            .sort((a, b) => {
                                switch (selected.value) {
                                    case 'price-low':
                                        return a.price - b.price;
                                    case 'price-high':
                                        return b.price - a.price;
                                    case 'newest':
                                        return b.id - a.id; 
                                    case 'popular':
                                        return a.rating?.rate && b.rating?.rate ? b.rating.rate - a.rating.rate : 0;
                                    case 'recommended':
                                    default:
                                        return 0;
                                }
                            })
                            .map(product => (
                                <ProductCards key={product.id} product={product} />
                            ))
                    )}
                </div>

            </section>
        </main >
    );
};

export default ProductsPage;

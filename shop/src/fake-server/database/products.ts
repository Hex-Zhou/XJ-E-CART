import { AttributeDef, ProductDef } from '../interfaces/product-def';
import {
    Product,
    ProductAttribute,
    ProductAttributeValue,
} from '../../app/shared/interfaces/product';
import { brands } from './brands';
import { Category } from '../../app/shared/interfaces/category';
import { shopCategoriesList } from './categories';
import { Observable, of, throwError, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

let lastProductId = 0;

export const attributesDef: AttributeDef[] = [
    {
        name: 'Color',
        slug: 'color',
        values: [
            { name: 'White', slug: 'white' },
            { name: 'Silver', slug: 'silver' },
            { name: 'Light Gray', slug: 'light-gray' },
            { name: 'Gray', slug: 'gray' },
            { name: 'Dark Gray', slug: 'dark-gray' },
            { name: 'Coal', slug: 'coal' },
            { name: 'Black', slug: 'black' },
            { name: 'Red', slug: 'red' },
            { name: 'Orange', slug: 'orange' },
            { name: 'Yellow', slug: 'yellow' },
            { name: 'Pear Green', slug: 'pear-green' },
            { name: 'Green', slug: 'green' },
            { name: 'Emerald', slug: 'emerald' },
            { name: 'Shamrock', slug: 'shamrock' },
            { name: 'Shakespeare', slug: 'shakespeare' },
            { name: 'Blue', slug: 'blue' },
            { name: 'Dark Blue', slug: 'dark-blue' },
            { name: 'Violet', slug: 'violet' },
            { name: 'Purple', slug: 'purple' },
            { name: 'Cerise', slug: 'cerise' },
        ],
    },
    {
        name: 'Speed',
        slug: 'speed',
        values: [{ name: '750 RPM', slug: '750-rpm' }],
    },
    {
        name: 'Power Source',
        slug: 'power-source',
        values: [{ name: 'Cordless-Electric', slug: 'cordless-electric' }],
    },
    {
        name: 'Battery Cell Type',
        slug: 'battery-cell-type',
        values: [{ name: 'Lithium', slug: 'lithium' }],
    },
    {
        name: 'Voltage',
        slug: 'voltage',
        values: [{ name: '20 Volts', slug: '20-volts' }],
    },
    {
        name: 'Battery Capacity',
        slug: 'battery-capacity',
        values: [{ name: '2 Ah', slug: '2-Ah' }],
    },
];

const productsDef: ProductDef[] = [
    {
        slug: 'electric-planer-brandix-kl370090g-300-watts',
        name: '產品01',
        price: 749,
        images: [
            'assets/images/products/product-1.jpg',
            'assets/images/products/product-1-1.jpg',
        ],
        badges: 'new',
        rating: 4,
        reviews: 12,
        availability: 'in-stock',
        brand: 'brandix',
        categories: ['screwdrivers'],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'undefined-tool-iradix-dps3000sy-2700-watts',
        name: '產品02',
        price: 1019,
        images: [
            'assets/images/products/product-2.jpg',
            'assets/images/products/product-2-1.jpg',
        ],
        badges: 'hot',
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'zosch',
        categories: [],
        attributes: [
            { slug: 'color', values: ['silver', 'cerise'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'drill-screwdriver-brandix-alx7054-200-watts',
        name: '產品03',
        price: 850,
        images: [
            'assets/images/products/product-3.jpg',
            'assets/images/products/product-3-1.jpg',
        ],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'drill-series-3-brandix-ksr4590pqs-1500-watts',
        name: '產品04',
        price: 949,
        compareAtPrice: 1189,
        images: [
            'assets/images/products/product-4.jpg',
            'assets/images/products/product-4-1.jpg',
        ],
        badges: 'sale',
        rating: 3,
        reviews: 15,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'white' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-router-power-tool-2017erxpk',
        name: '產品05',
        price: 1700,
        images: [
            'assets/images/products/product-5.jpg',
            'assets/images/products/product-5-1.jpg',
        ],
        rating: 4,
        reviews: 2,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'dark-blue' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-drilling-machine-dm2019kw4-4kw',
        name: '產品06',
        price: 3199,
        images: [
            'assets/images/products/product-6.jpg',
            'assets/images/products/product-6-1.jpg',
        ],
        rating: 3,
        reviews: 21,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'orange' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-pliers',
        name: '產品07',
        price: 24,
        images: [
            'assets/images/products/product-7.jpg',
            'assets/images/products/product-7-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'wevalt',
        categories: [],
        attributes: [
            { slug: 'color', values: 'red' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-hose-40cm',
        name: '產品08',
        price: 15,
        images: [
            'assets/images/products/product-8.jpg',
            'assets/images/products/product-8-1.jpg',
        ],
        rating: 2,
        reviews: 5,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: ['pear-green', 'blue'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'spanner-wrench',
        name: '產品09',
        price: 19,
        images: [
            'assets/images/products/product-9.jpg',
            'assets/images/products/product-9-1.jpg',
        ],
        rating: 4,
        reviews: 34,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'green' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-tap',
        name: '產品10',
        price: 15,
        images: [
            'assets/images/products/product-10.jpg',
            'assets/images/products/product-10-1.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'gray' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'hand-tool-kit',
        name: '產品11',
        price: 149,
        images: [
            'assets/images/products/product-11.jpg',
            'assets/images/products/product-11-1.jpg',
        ],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'black' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'ash-s-chainsaw-3.5kw',
        name: '產品12',

        price: 666.99,
        images: [
            'assets/images/products/product-12.jpg',
            'assets/images/products/product-12-1.jpg',
        ],
        rating: 5,
        reviews: 17,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'violet' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-angle-grinder-kzx3890pqw',
        name: '產品13',

        price: 649,
        images: [
            'assets/images/products/product-13.jpg',
            'assets/images/products/product-13-1.jpg',
        ],
        rating: 2,
        reviews: 8,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'purple' },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-air-compressor-deltakx500',
        name: '產品14',

        price: 1800,
        images: [
            'assets/images/products/product-14.jpg',
            'assets/images/products/product-14-1.jpg',
        ],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['light-gray', 'emerald'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-electric-jigsaw-jig7000bq',
        name: '產品15',

        price: 290,
        images: [
            'assets/images/products/product-15.jpg',
            'assets/images/products/product-15-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['coal', 'shamrock'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'brandix-screwdriver-screw1500acc',
        name: '產品16',

        price: 1499,
        images: [
            'assets/images/products/product-16.jpg',
            'assets/images/products/product-16-1.jpg',
            'assets/images/products/product-16-2.jpg',
            'assets/images/products/product-16-3.jpg',
            'assets/images/products/product-16-4.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'metaggo',
        categories: [],
        attributes: [
            { slug: 'color', values: ['dark-gray', 'shakespeare'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            {
                slug: 'power-source',
                values: 'cordless-electric',
                featured: true,
            },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
];

export const products: Product[] = productsDef.map((productDef) => {
    let badges: string[] = [];

    if (productDef.badges) {
        badges =
            typeof productDef.badges === 'string'
                ? [productDef.badges]
                : productDef.badges;
    }

    const categories: Category[] = shopCategoriesList
        .filter((x) => productDef.categories.includes(x.slug))
        .map((x) => ({
            ...x,
            parents: null,
            children: null,
        }));

    const attributes: ProductAttribute[] = (productDef.attributes || [])
        .map((productAttributeDef) => {
            const attributeDef = attributesDef.find(
                (x) => x.slug === productAttributeDef.slug
            );

            if (!attributeDef) {
                return null;
            }

            let valuesDef: string[] = [];

            if (typeof productAttributeDef.values === 'string') {
                valuesDef = [productAttributeDef.values];
            } else if (productAttributeDef.values) {
                valuesDef = productAttributeDef.values;
            }

            const values: ProductAttributeValue[] = valuesDef
                .map((valueSlug) => {
                    const valueDef = attributeDef.values.find(
                        (x) => x.slug === valueSlug
                    );

                    if (!valueDef) {
                        return null;
                    }

                    return {
                        ...valueDef,
                        customFields: {},
                    };
                })
                .filter((x) => x !== null) as ProductAttributeValue[];

            if (!values.length) {
                return null;
            }

            return {
                name: attributeDef.name,
                slug: attributeDef.slug,
                featured: !!productAttributeDef.featured,
                values,
                customFields: {},
            };
        })
        .filter((x) => x !== null) as ProductAttribute[];

    return {
        id: ++lastProductId,
        name: productDef.name,
        sku: '83690/32',
        slug: productDef.slug,
        price: productDef.price,
        compareAtPrice: productDef.compareAtPrice || null,
        images: productDef.images.slice(),
        badges: badges.slice(),
        rating: productDef.rating,
        reviews: productDef.reviews,
        availability: productDef.availability,
        brand: brands.find((x) => x.slug === productDef.brand) || null,
        categories,
        attributes,
        customFields: {},
    };
});

export function getBestsellers(
    limit: number | null = null
): Observable<Product[]> {
    const start = 0;
    const end = limit ? start + limit : undefined;

    return of(products.slice(start, end));
}

export function getTopRated(
    limit: number | null = null
): Observable<Product[]> {
    const start = 3;
    const end = limit ? start + limit : undefined;

    return of(products.slice(start, end));
}

export function getSpecialOffers(
    limit: number | null = null
): Observable<Product[]> {
    const start = 6;
    const end = limit ? start + limit : undefined;

    return of(products.slice(start, end));
}

export function getFeatured(
    categorySlug: string | null = null,
    limit: number | null = null
): Observable<Product[]> {
    let fakeProducts = products.slice();

    if (categorySlug === 'power-tools') {
        fakeProducts = fakeProducts.reverse();
    } else if (categorySlug === 'hand-tools') {
        fakeProducts = [...fakeProducts.slice(8), ...fakeProducts.slice(0, 8)];
    } else if (categorySlug === 'plumbing') {
        fakeProducts = [
            ...fakeProducts.slice(8),
            ...fakeProducts.slice(0, 8),
        ].reverse();
    }

    return timer(1000).pipe(
        map(() => fakeProducts.slice(0, limit || undefined))
    );
}

export function getLatestProducts(
    categorySlug: string | null = null,
    limit: number | null = null
): Observable<Product[]> {
    return getFeatured(categorySlug, limit);
}

// noinspection JSUnusedLocalSymbols
export function getRelatedProducts(
    product: Partial<Product>
): Observable<Product[]> {
    return of(products.slice(0, 7));
}

export function getSuggestions(
    query: string,
    limit: number,
    categorySlug: string | null = null
): Observable<Product[]> {
    return of(
        products
            .filter((x) => x.name.toLowerCase().includes(query.toLowerCase()))
            .slice(0, limit)
    );
}

export function getProduct(productSlug: string): Observable<Product> {
    const product = products.find((x) => x.slug === productSlug);

    if (!product) {
        return throwError(
            new HttpErrorResponse({ status: 404, statusText: 'Page Not Found' })
        );
    }

    return of(JSON.parse(JSON.stringify(product)));
}

import Link from "next/link"

const products = [
    {
      id: 1,
      name: 'Крем до бритья PRORASO Pre-Shave Cream Refreshing Eucalyptus 100 мл',
      href: '#',
      price: '250',
      imageSrc: 'https://zarva.com.ua/image/cachewebp/catalog/Proraso/jpg/shave/krem-do-britjya-proraso-pre-shave-cream-refreshing-eucalyptus-100-ml-zarva-1-600x600.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Крем до бритья для жесткой щетины PRORASO Nourish 100 мл',
      href: '#',
      price: '285',
      imageSrc: 'https://zarva.com.ua/image/cachewebp/catalog/Proraso/jpg/shave/krem-do-britya-dlya-jestkoi-schetini-proraso-nourish-new-zarva-1-600x600.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 3,
      name: 'Крем до бритья PRORASO Pre-Shave Cream Refreshing Eucalyptus 100 мл',
      href: '#',
      price: '285',
      imageSrc: 'https://zarva.com.ua/image/cachewebp/catalog/Proraso/jpg/shave/krem-do-holinnya-chutlyvoyi-shkiry-proraso-white-line-anti-irritation-100-ml-zarva-1-600x600.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 4,
      name: 'Масло до бритья AMERICAN CREW Ultra Gliding Shave Oil 50 мл',
      href: '#',
      price: '770',
      imageSrc: 'https://zarva.com.ua/image/cachewebp/catalog/american_crew/beard-shave/maslo-do-britya-american-crew-ultra-gliding-shave-oil-50-ml-zarva-600x600.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 5,
      name: 'Масло до бритья AMERICAN CREW Ultra Gliding Shave Oil 50 мл',
      href: '#',
      price: '770',
      imageSrc: 'https://zarva.com.ua/image/cachewebp/catalog/BBR/jpg/shave/maslo-do-britya-the-bluebeards-revenge-pre-shave-oil-100-ml-zarva-1-600x600.webp',
      imageAlt: 'Масло до бритья THE BLUEBEARDS REVENGE Pre-Shave Oil 100 мл.',
    },
    // More products...
  ]
  
  export default function ProductsList() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price} грн.</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
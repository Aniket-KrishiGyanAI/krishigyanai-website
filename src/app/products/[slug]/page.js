import { products } from "@/data/products";
import Image from "next/image";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

async function ProductDetails({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto py-28 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Product not found!
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl lg:w-3/4 w-full mx-auto my-20">
      <div className="px-4 lg:px-10 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-lightText text-lg mt-4">
              {product.short_description}
            </p>

            <div className="mt-6 space-y-3">
              {product.features.slice(0, 3).map((ft, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-green-50 border border-green-200 p-3 rounded-xl"
                >
                  <span className="text-primary text-lg">✔</span>
                  <p className="text-lightText">{ft}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">Product Overview</h2>
          <p className="text-lightText leading-relaxed">{product.description}</p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {product.features.map((ft, idx) => (
              <div
                key={idx}
                className="p-5 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
              >
                <p className="text-lightText">{ft}</p>
              </div>
            ))}
          </div>
        </div>

        {product.benefits && (
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6">Benefits</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lightText">
              {product.benefits.map((b, i) => (
                <li key={i} className="p-4 bg-gray-50 border rounded-xl">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.ideal_for && (
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6">Ideal For</h2>
            <div className="flex flex-wrap gap-3">
              {product.ideal_for.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-green-100 text-primary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;

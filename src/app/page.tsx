import { desc } from "drizzle-orm";
import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import PatnerBrands from "@/components/common/partner-brands";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/banner-01-desktop.jpg"
            />
            <Image
              width={300}
              height={200}
              src="/banner-01.png"
              alt="Descrição da imagem"
              className="h-auto w-full"
            />
          </picture>
        </div>

        <PatnerBrands />

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/banner-02-desktop.png"
            />
            <img
              src="/banner-02.png"
              alt="Descrição da imagem"
              className="h-auto w-full"
            />
          </picture>
        </div>

        <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        <Footer />
      </div>
    </>
  );
};

export default Home;

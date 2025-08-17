import Image from "next/image";
import Link from "next/link";

import { productVariantTable } from "@/db/schema";

interface VariantSelectorProps {
  selectedVariantSlug: string;
  variants: (typeof productVariantTable.$inferSelect)[];
}

const VariantSelector = ({
  selectedVariantSlug,
  variants,
}: VariantSelectorProps) => {
  return (
    <div className="flex items-center gap-4">
      {variants.map((variant) => (
        <Link
          href={`/product-variant/${variant.slug}`}
          key={variant.id}
          className={
            selectedVariantSlug === variant.slug
              ? "border-primary rounded-xl border-2"
              : ""
          }
        >
          <Image
            width={0}
            height={0}
            src={variant.imageUrl}
            alt={variant.name}
            sizes="100vw"
            className="h-[68px] w-[68px] rounded-xl object-fill lg:h-[200px] lg:w-[200px]"
          />
        </Link>
      ))}
    </div>
  );
};

export default VariantSelector;

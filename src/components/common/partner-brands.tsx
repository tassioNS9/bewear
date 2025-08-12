import Image from "next/image";

import { partnerBrands } from "@/db/brands";

import { Card } from "../ui/card";

const PatnerBrands = () => {
  return (
    <div className="space-y-5">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 lg:justify-center [&::-webkit-scrollbar]:hidden">
        {partnerBrands.map((product) => (
          <div
            key={product.brand}
            className="flex flex-col items-center justify-center gap-2"
          >
            <Card className="flex max-h-2 min-h-[100px] min-w-[130px] items-center justify-center px-4">
              <Image
                src={product.url}
                alt={product.brand}
                width={35}
                height={35}
                style={{width:"auto", height:"auto"}}
                className="rounded-3xl"
              />
            </Card>
            <p className="truncate text-sm font-medium">{product.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatnerBrands;

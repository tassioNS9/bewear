import { useQuery } from "@tanstack/react-query";

import { getCart } from "@/actions/get-cart";

export const getUseCartQueryKey = () => ["cart"] as const;

export const useCart = (params?: {
  // com Essa exportação, podemos usar o hook useCart em outros componentes
  // e passar initialData para otimizar a renderização inicial
  // Isso é útil quando já temos os dados do carrinho disponíveis, como na página de identificação
  initialData?: Awaited<ReturnType<typeof getCart>>;
}) => {
  return useQuery({
    queryKey: getUseCartQueryKey(),
    queryFn: () => getCart(),
    initialData: params?.initialData,
  });
};

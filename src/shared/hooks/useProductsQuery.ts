import { useState, useEffect } from 'react';
import { ProductData } from '../types/types';

function useProductsQuery(
  fetchFunction: (parameter: string) => Promise<Response>,
  parameter: string,
) {
  const [goods, setGoods] = useState<ProductData[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetchFunction(parameter);
      const data = await response.json();
      let goodsArr: ProductData[] = [];
      if (data.length > 1) {
        goodsArr = Object.values(data);
      } else {
        goodsArr.push(data);
      }
      setGoods(goodsArr);
    };
    dataFetch();
  }, [parameter]);

  return goods;
}

export default useProductsQuery;

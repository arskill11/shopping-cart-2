import { useState, useEffect } from 'react';
import { ProductData } from '../types/types';

function useProductsQuery(link: string) {
  const [goods, setGoods] = useState<ProductData[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(link)).json();
      let goodsArr: ProductData[] = [];
      if (data.length > 1) {
        goodsArr = Object.values(data);
      } else {
        goodsArr.push(data);
      }
      setGoods(goodsArr);
    };
    dataFetch();
  }, [link]);

  return goods;
}

export default useProductsQuery;

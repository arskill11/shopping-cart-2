import { useState, useEffect } from 'react';
import { PropsAPI } from './types';

function useAPIProducts(link: string) {
  const [goods, setGoods] = useState<PropsAPI[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(link)).json();
      let goodsArr: PropsAPI[] = [];
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

export default useAPIProducts;

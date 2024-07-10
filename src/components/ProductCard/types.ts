import React, { ReactNode } from 'react';

export interface Props {
  image: string;
  title: string;
  price: number;
  id: number;
  category: string;
  render?: () => ReactNode;
}

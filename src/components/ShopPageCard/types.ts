export interface Props {
  image: string;
  title: string;
  price: number;
  id: number;
  category: string;
  render?: () => React.ReactNode;
}

export type PricingCard = {
  title: string;
  subtitle: string;
  price: number;
  monthly: boolean;
  hourly?: boolean;
  starting: boolean;
  features: string[];
};

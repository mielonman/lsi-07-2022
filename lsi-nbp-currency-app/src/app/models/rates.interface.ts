export interface RatesResponse {
  table: 'A';
  no: string;
  effectiveDate: string;
  rates: Rates[];
}

export interface Rates {
  currency: string;
  code: string;
  mid: number;
}

export interface SuppliedResponse {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: SuppliedResponseData[];
}

export interface SuppliedResponseData {
  actual_value: number;
  forecasted_value: number;
  name: string;
  q1_variance: number;
  q2_variance: number;
  q3_variance: number;
  q4_variance: number;
}

// Type for Latest Transaction
export interface LatestTransactionResponse {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: LatestTransactionData[];
}

export interface LatestTransactionData {
  created_at: Date;
  charged_by: LatestTransactionChargedBy;
  charge: LatestTransactionCharge;
}

export interface LatestTransactionCharge {
  amount: number;
  currency: LatestTransactionCurrency;
  type: string;
}

export interface LatestTransactionCurrency {
  code: string;
  sign: string;
}

export interface LatestTransactionChargedBy {
  company: string;
  logo: string;
}

// Type for Transaction cards
export interface TransactionCardsResponse {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: TransactionCardsDatum[];
}

export interface TransactionCardsDatum {
  name: string;
  current: number;
  last_month: number;
}

import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import {
  LatestTransactionResponse,
  SalaryChartResponse,
  SuppliedResponse,
  TransactionCardsResponse,
} from "../types";

export const builder = createBuilder({
  supplies: {
    forecast: () => API.get<SuppliedResponse>(`/supplies/forecast`),
  },

  transactions: {
    latest: () => API.get<LatestTransactionResponse>(`/transactions/latest`),
    overview: () => API.get<TransactionCardsResponse>(`/transactions/overview`),
    pay_logs: () => API.get<SalaryChartResponse>(`/transactions/payout-logs`),
  },
});

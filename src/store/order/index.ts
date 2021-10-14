import { AppState } from "..";

export interface OrderState {
  orderNumber: string;
  productName: string;
  orderAmount: number;
  tax: number;
  currency: string;
}

export default {
  namespaced: true,
  state: {
    orderNumber: "FP1763415-9",
    productName: "500 G-Coins golden Package",
    orderAmount: 45,
    tax: 0,
    currency: "EUR",
  },
  actions: {},
  mutations: {},
  getters: {
    orderNumber({ orderNumber }: OrderState) {
      return orderNumber;
    },
    productName({ productName }: OrderState) {
      return productName;
    },
    orderAmount({ orderAmount }: OrderState) {
      return orderAmount;
    },
    tax({ tax }: OrderState) {
      return tax;
    },
    currency({ currency }: OrderState) {
      return currency;
    },
    taxAmount({ orderAmount, tax }: OrderState) {
      return orderAmount * tax;
    },
    totalOrderAmount(_, { taxAmount, orderAmount }) {
      return taxAmount + orderAmount;
    },
  },
};

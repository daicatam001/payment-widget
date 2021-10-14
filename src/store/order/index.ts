
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
    topUpFees: 3,
    currency: "EUR",
    finalOrderAmount: 0
  },
  actions: {
  },
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
   
    totalOrderAmount(_, { taxAmount, orderAmount}) {
      return taxAmount + orderAmount;
    },
    totalTopUpAmount(state,getters,rootState,rootGetters){
      return getters.orderAmount + getters.extraAmount - getters.topUpFees + rootGetters.balance
    },
    topUpFees({ topUpFees }) {
      return topUpFees
    },
    extraAmount(state, { orderAmount }, rootState, rootGetters) {
      const topUpAmount = rootGetters['payment/topUpAmount']
      if (topUpAmount && topUpAmount - orderAmount > 0) {
        return topUpAmount - orderAmount
      }
      return 0
    }
  },
};

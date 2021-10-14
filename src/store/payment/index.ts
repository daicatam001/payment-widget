import { PAYMENT_TYPE } from "@/constants";
import { ActionContext } from "vuex";
import { AppState } from "..";

export interface PaymentState {
  paymentType: PAYMENT_TYPE;
}

export default {
  namespaced: true,
  state: {
    paymentType: PAYMENT_TYPE.DIRECT,
    paymentBy: 1,
  },
  actions: {
    togglePaymentType({
      commit,
      getters,
    }: ActionContext<PaymentState, AppState>) {
      const paymentType = getters.paymentType;
      commit(
        "setPaymentType",
        paymentType === PAYMENT_TYPE.DIRECT
          ? PAYMENT_TYPE.TOP_UP
          : PAYMENT_TYPE.DIRECT
      );
    },
  },
  mutations: {},
  getters: {
    paymentType({ paymentType }: PaymentState) {
      return paymentType;
    },
  },
};

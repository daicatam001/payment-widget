import { PAYMENT_BY, PAYMENT_TYPE } from "@/constants";
import { ActionContext } from "vuex";
import { AppState } from "..";

export interface PaymentState {
  paymentType: PAYMENT_TYPE;
  paymentBy: PAYMENT_BY | null;
  topUpAmount: number | null;
}

export default {
  namespaced: true,
  state: {
    paymentType: PAYMENT_TYPE.DIRECT,
    paymentBy: null,
    topUpAmount: 50,
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
      commit("setPaymentBy", null);
    },
    setPaymentBy(
      { commit }: ActionContext<PaymentState, AppState>,
      payload: PAYMENT_BY
    ) {
      commit("setPaymentBy", payload);
    },
    setTopUpAmount(
      { commit }: ActionContext<PaymentState, AppState>,
      payload: number
    ) {
      commit("setTopUpAmount", payload);
    },
  },
  mutations: {
    setPaymentType(state: PaymentState, payload: PAYMENT_TYPE) {
      state.paymentType = payload;
    },
    setPaymentBy(state: PaymentState, payload: PAYMENT_BY | null) {
      state.paymentBy = payload;
    },
    setTopUpAmount(state: PaymentState, payload: number) {
      state.topUpAmount = payload;
    },
  },
  getters: {
    paymentType({ paymentType }: PaymentState) {
      return paymentType;
    },
    paymentBy({ paymentBy }: PaymentState) {
      return paymentBy;
    },
    topUpAmount({ topUpAmount }: PaymentState) {
      return topUpAmount;
    },
  },
};

import { STEP } from "@/constants";
import { createLogger, createStore } from "vuex";
import order from "./order";
import payment from "./payment";

export interface AppState {
  step: STEP;
  balance: number;
}

export default createStore({
  modules: {
    order,
    payment,
  },
  state: {
    step: STEP.ACCOUNT,
    balance: 0,
  },
  actions: {
    setStep({ commit }, payload: STEP): void {
      commit("setStep", payload);
    },
    payDirectly({ commit, dispatch }): void {
      dispatch("payment/setPaymentBy", null);
      commit("setStep", STEP.SUCCESS);
    },
  },
  mutations: {
    setStep(state: AppState, payload: STEP): void {
      state.step = payload;
    },
  },
  getters: {
    step({ step }: AppState): STEP {
      return step;
    },
    balance({ balance }: AppState): number {
      return balance;
    },
  },
  plugins: [createLogger()],
});

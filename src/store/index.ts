import { STEP } from "@/constants";
import { createStore } from "vuex";
import order from "./order";
import payment from "./payment";

export interface AppState {
  step: STEP;
}

export default createStore({
  modules: {
    order,
    payment,
  },
  state: {
    step: STEP.ACCOUNT,
  },
  actions: {
    setStep({ commit }, payload: STEP): void {
      commit("setStep", payload);
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
  },
});

import { create } from "zustand";

interface CounterActions {
  increase: () => void;
  decrease: () => void;
}

interface CounterState {
  count: number;
  actions: CounterActions;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  actions: {
    increase: () => set((state: CounterState) => ({ count: state.count + 1 })),
    decrease: () => set((state: CounterState) => ({ count: state.count - 1 })),
  },
}));

export const useCounter = () =>
  useCounterStore((state: CounterState) => state.count);

export const useCounterActions = () =>
  useCounterStore((state: CounterState) => state.actions);

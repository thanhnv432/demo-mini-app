import { create } from "zustand";
import { immer } from 'zustand/middleware/immer';

interface CounterActions {
  increase: () => void;
  decrease: () => void;
}

interface CounterState {
  count: number;
}

export const useCounterStore = create(immer<CounterState & CounterActions>((set, _get) => ({
  count: 0,
  increase: () => set((state: CounterState) => ({ count: state.count + 1 })),
  decrease: () => set((state: CounterState) => ({ count: state.count - 1 })),
})));

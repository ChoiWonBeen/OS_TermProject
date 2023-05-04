import { Scheduler } from "models";
import { create } from "zustand";

interface SchedulerStore {
  scheduler: Scheduler;
  changeAlgorithm: (type: Scheduler["algorithm"]) => void;
}

export const useSchedulerStore = create<SchedulerStore>((set) => ({
  scheduler: {
    algorithm: "FCFS",
  },
  changeAlgorithm: (type: Scheduler["algorithm"]) => {
    set((state) => ({
      scheduler: {
        ...state.scheduler,
        algorithm: type,
      },
    }));
  },
}));

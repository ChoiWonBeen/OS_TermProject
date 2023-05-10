import { ScheduleResult, Scheduler } from "models";
import { create } from "zustand";
import { useProcessStore, useProcessorStore } from "./setting";
import ALGORITHM_FUNCTION from "algorithm";
import { useCatVideoStore } from "./catVideo";

interface SchedulerStore {
  scheduler: Scheduler;
  schedulerResult: ScheduleResult | null;
  timeQuantum: number;
  memoryNiceValue: number;
  studyNiceValue: number;
  changeAlgorithm: (type: Scheduler["algorithm"]) => void;
  changeTimeQuantum: (time: number) => void;
  start: () => void;
  finish: () => void;
  changeMemoryNiceValue: (value: number) => void;
  changeStudyNiceValue: (value: number) => void;
}

export const useSchedulerStore = create<SchedulerStore>((set, get) => ({
  scheduler: {
    algorithm: "FCFS",
    status: "idle",
  },
  schedulerResult: null,
  timeQuantum: 1,
  memoryNiceValue: 0,
  studyNiceValue: 0,
  changeAlgorithm: (type: Scheduler["algorithm"]) => {
    set((state) => ({
      scheduler: {
        ...state.scheduler,
        algorithm: type,
      },
    }));
  },
  changeTimeQuantum: (time: number) => {
    set(() => ({
      timeQuantum: time,
    }));
  },
  start: () => {
    const setVideo = useCatVideoStore.getState().setVideo;

    setVideo(2);
    set((state) => ({
      scheduler: {
        ...state.scheduler,
        status: "running",
      },
    }));

    const algorithm = get().scheduler.algorithm;
    const processes = useProcessStore.getState().processes;
    const processors = useProcessorStore.getState().processors;

    const result = ALGORITHM_FUNCTION[algorithm](
      processors,
      processes,
      get().timeQuantum,
      get().studyNiceValue,
      get().memoryNiceValue
    );
    console.log(result);
    set(() => ({
      schedulerResult: result,
    }));

    setTimeout(() => {
      setVideo(4);
    }, 1000);

    setTimeout(() => {
      setVideo(6);
    }, result.totalTime * 1000);
  },

  finish: () => {
    const setVideo = useCatVideoStore.getState().setVideo;
    set((state) => ({
      scheduler: {
        ...state.scheduler,
        status: "finished",
      },
      schedulerResult: null,
    }));

    setVideo(0);
  },

  changeMemoryNiceValue: (value: number) => {
    set(() => ({
      memoryNiceValue: value,
    }));
  },

  changeStudyNiceValue: (value: number) => {
    set(() => ({
      studyNiceValue: value,
    }));
  },
}));

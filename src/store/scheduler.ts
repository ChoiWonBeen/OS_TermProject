import { ScheduleResult, Scheduler } from "models";
import { create } from "zustand";
import { useProcessStore, useProcessorStore } from "./setting";
import ALGORITHM_FUNCTION from "algorithm";
import { useCatVideoStore } from "./catVideo";

interface SchedulerStore {
  scheduler: Scheduler;
  schedulerResult: ScheduleResult | null;
  timeQuantum: number;
  varienceMemory: number;
  changeAlgorithm: (type: Scheduler["algorithm"]) => void;
  changeTimeQuantum: (time: number) => void;
  start: () => void;
  finish: () => void;
}

export const useSchedulerStore = create<SchedulerStore>((set, get) => ({
  scheduler: {
    algorithm: "FCFS",
    status: "idle",
  },
  schedulerResult: null,
  timeQuantum: 1,
  varienceMemory: 0,
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

    const result = ALGORITHM_FUNCTION[algorithm](processors, processes, get().timeQuantum);
    console.log(result);
    const averageNTT =
      result.processResultList.reduce((acc, cur) => acc + cur.normalizedTurnaroundTime, 0) /
      result.processResultList.length;
    // memory의 분산을 구한다
    const averageMemory =
      result.processResultList.reduce((acc, cur) => acc + cur.memory!, 0) / result.processResultList.length;
    // 분산
    const varianceMemory =
      result.processResultList.reduce((acc, cur) => acc + Math.pow(cur.memory! - averageMemory, 2), 0) /
      result.processResultList.length;
    console.log(averageNTT, varianceMemory);

    set(() => ({
      varienceMemory: varianceMemory,
    }));

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
}));

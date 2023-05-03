import { create } from "zustand";
import { Core, Process, Processor } from "../models";
import { MAIN_COLOR_TABLE, SUB_COLOR_TABLE } from "static/color";

interface CoreStore {
  PCore: Core;
  ECore: Core;
}

interface ProcessorStore {
  processors: Processor[];
  lastId: number;
  addProcessor: (processor: Processor) => void;
  removeProcessor: (index: number) => void;
  changeProcessorCore: (index: number, core: Core) => void;
}

interface ProcessStore {
  processes: Process[];
  lastId: number;
  addProcess: (process: Process) => void;
  removeProcess: (index: number) => void;
  changeProcess: (index: number, process: Process) => void;
}

export const useCoreStore = create<CoreStore>(() => ({
  PCore: {
    name: "P",
    timeEfficiency: 2,
    powerEfficiency: 3,
    startingPower: 0.5,
  },
  ECore: {
    name: "E",
    timeEfficiency: 1,
    powerEfficiency: 1,
    startingPower: 0.1,
  },
}));

export const useProcessorStore = create<ProcessorStore>((set) => ({
  lastId: 1,
  processors: [
    {
      id: 1,
      name: "C1",
      core: useCoreStore.getState().ECore,
      lastOffTime: 0,
      currentProcess: null,
      mainColor: MAIN_COLOR_TABLE[0],
      subColor: SUB_COLOR_TABLE[0],
    },
  ],
  addProcessor: (processor: Processor) => {
    set((state) => ({
      processors: [...state.processors, processor],
      lastId: state.lastId + 1,
    }));
  },
  removeProcessor: (index: number) => {
    set((state) => ({
      processors: state.processors.filter((_, i) => i !== index),
    }));
  },
  changeProcessorCore: (index: number, core: Core) => {
    set((state) => {
      const newProcessors = [...state.processors];
      newProcessors[index].core = core;
      return {
        processors: newProcessors,
      };
    });
  },
}));

export const useProcessStore = create<ProcessStore>((set) => ({
  lastId: 1,
  processes: [
    {
      id: 1,
      arrivalTime: 0,
      workAmount: 0,
      leftWork: 0,
      name: "P1",
      mainColor: MAIN_COLOR_TABLE[0],
      subColor: SUB_COLOR_TABLE[0],
    },
  ],
  addProcess: (process: Process) => {
    set((state) => ({
      processes: [...state.processes, process],
      lastId: state.lastId + 1,
    }));
  },
  removeProcess: (index: number) => {
    set((state) => ({
      processes: state.processes.filter((_, i) => i !== index),
    }));
  },
  changeProcess: (index: number, process: Process) => {
    set((state) => {
      const newProcesses = [...state.processes];
      newProcesses[index] = process;
      return {
        processes: newProcesses,
      };
    });
  },
}));

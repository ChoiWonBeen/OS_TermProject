export interface Process {
  id: number;
  arrivalTime: number;
  burstTime: number;
  leftWork: number;
  name: string;
  mainColor: string;
  subColor: string;
  level: number;
}

export interface Core {
  name: string;
  timeEfficiency: number;
  powerEfficiency: number;
  startingPower: number;
}

export interface Processor {
  id: number;
  name: string;
  core: Core;
  currentProcess: Process | null;
  lastOffTime: number;
  mainColor: string;
  subColor: string;
}

export interface ProcessResult {
  processId: number;
  arrivalTime: number;
  burstTime: number;
  waitingTime: number;
  turnaroundTime: number;
  normalizedTurnaroundTime: number;
  processorAllocation: Array<number | null>;
  memory?: number;
}

export interface ProcessorResult {
  processorId: number;
  totalPower: number;
  processAllocation: Array<number | null>;
}

export interface Scheduler {
  algorithm: "FCFS" | "RR" | "SPN" | "SRTN" | "HRRN" | "OSim";
  status: "idle" | "running" | "finished";
}

export interface ScheduleResult {
  processResultList: ProcessResult[];
  processorResultList: ProcessorResult[];
  totalTime: number;
}

export type Scheduling = (
  processorList: Processor[],
  processList: Process[],
  timeQuantum?: number,
  studyNiceValue?: number,
  memoryNiceValue?: number
) => ScheduleResult;

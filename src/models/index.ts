export interface Process {
  id: number;
  arrivalTime: number;
  workAmount: number;
  leftWork: number;
  name: string;
  mainColor: string;
  subColor: string;
  worker?: ProcessWorker;
}

export interface ProcessWorker {
  id: number;
  name: string;
  workTimes: number[];
  isWaiting: boolean;
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
  id: number;
  process: Process;
  arrivalTime: number;
  burstTime: number;
  waitingTime: number;
  turnaroundTime: number;
  normalizedTurnaroundTime: number;
}

export interface Scheduler {
  algorithm: "FCFS" | "RR" | "SPN" | "SRTN" | "HRRN" | "OSim";
}

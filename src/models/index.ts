export interface Process {
  id: number;
  arrivalTime: number;
  workAmount: number;
  leftWork: number;
  name: string;
  mainColor: string;
  subColor: string;
}

// 큐 관련 프로세스 예시
export interface QueueProcess extends Process {
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
  arrivalTime: number;
  burstTime: number;
  waitingTime: number;
  turnaroundTime: number;
  normalizedTurnaroundTime: number;
}

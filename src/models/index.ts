export interface Process {
  id: number; // 프로세스 ID
  arrivalTime: number; // 도착 시간
  burstTime: number; // 실행 시간
  leftWork: number; // 남은 작업량
  name: string; // 프로세스 이름
  mainColor: string; // 주요 색상
  subColor: string; // 보조 색상
  level: number; // 우선순위 레벨 (OSim에서 사용)
}

export interface Core {
  name: string; // 코어 이름 (P 또는 E)
  timeEfficiency: number; // 1초당 작업량
  powerEfficiency: number; // 1초당 전력 소모량
  startingPower: number; // 시동 전력
}

export interface Processor {
  id: number; // 프로세서 ID
  name: string; // 프로세서 이름
  core: Core; // 코어 정보
  currentProcess: Process | null; // 현재 실행 중인 프로세스
  lastOffTime: number; // 마지막으로 시동이 꺼진 시간
  mainColor: string; // 주요 색상
  subColor: string; // 보조 색상
}

export interface ProcessResult {
  processId: number; // 프로세스 ID
  arrivalTime: number; // 도착 시간
  burstTime: number; // 실행 시간
  waitingTime: number; // 대기 시간
  turnaroundTime: number; // 반환 시간
  normalizedTurnaroundTime: number; // 정규화된 반환 시간
  processorAllocation: Array<number | null>; // 시간당 프로세서 할당 정보
  memory?: number; // 메모리 할당 정보
}

export interface ProcessorResult {
  processorId: number; // 프로세서 ID
  totalPower: number; // 총 전력 소모량
  processAllocation: Array<number | null>; // 시간당 프로세스 할당 정보
}

export interface Scheduler {
  algorithm: "FCFS" | "RR" | "SPN" | "SRTN" | "HRRN" | "OSim" | "VSRR"; // 스케줄링 알고리즘
  status: "idle" | "running" | "finished"; // 스케줄러 상태
}

export interface ScheduleResult {
  processResultList: ProcessResult[]; // 프로세스 결과 리스트
  processorResultList: ProcessorResult[]; // 프로세서 결과 리스트
  totalTime: number; // 총 실행 시간
}

export type Scheduling = (
  processorList: Processor[], // 프로세서 리스트
  processList: Process[], // 프로세스 리스트
  timeQuantum?: number, // 시간 양자
  studyNiceValue?: number, // Study Nice 값
  memoryNiceValue?: number // Memory Nice 값
) => ScheduleResult;

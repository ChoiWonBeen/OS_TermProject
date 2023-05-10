import { FCFS } from "./FCFS";
import { Scheduling } from "models";
import { RR } from "./RR";
import { SPN } from "./SPN";
import { SRTN } from "./SRTN";
import { HRRN } from "./HRRN";
import { OSim } from "./OSim";

interface AlgorithmFunction {
  [key: string]: Scheduling;
}

const ALGORITHM_FUNCTION: AlgorithmFunction = {
  FCFS: FCFS,
  RR: RR,
  SPN: SPN,
  SRTN: SRTN,
  HRRN: HRRN,
  OSim: OSim,
} as const;

export default ALGORITHM_FUNCTION;

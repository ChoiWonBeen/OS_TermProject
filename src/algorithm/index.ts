import { FCFS } from "./FCFS";
import { Scheduling } from "models";
import { RR } from "./RR";

interface AlgorithmFunction {
  [key: string]: Scheduling;
}

const ALGORITHM_FUNCTION: AlgorithmFunction = {
  FCFS: FCFS,
  RR: RR,
} as const;

export default ALGORITHM_FUNCTION;

import { useEffect, useRef } from "react";
import * as S from "../index.style";
import { useCatVideoStore } from "store/catVideo";
import { useSchedulerStore } from "store/scheduler";

function Start() {
  const ref = useRef<HTMLVideoElement>(null);
  const { setVideoRef } = useCatVideoStore();
  const { scheduler, start, timeQuantum, changeTimeQuantum, finish } = useSchedulerStore();

  useEffect(() => {
    setVideoRef(ref);
  }, [setVideoRef]);

  return (
    <S.StartContainer>
      <S.VideoContainer>
        <S.CatVideo autoPlay muted ref={ref} preload="auto" />
      </S.VideoContainer>
      <S.ButtonContainer>
        <S.TimeQuantumContainer>
          <S.TimeQuantumName>
            Time
            <br />
            Quantum
          </S.TimeQuantumName>
          <S.TimeQuantumInput
            type="number"
            min="1"
            disabled={scheduler.algorithm !== "RR" && scheduler.algorithm !== "OSim"}
            value={timeQuantum}
            onChange={(e) => changeTimeQuantum(Number(e.target.value))}
          />
        </S.TimeQuantumContainer>

        {scheduler.status === "running" ? <S.Replay onClick={finish} /> : <S.Play onClick={start} />}
      </S.ButtonContainer>
    </S.StartContainer>
  );
}

export default Start;

import { useEffect, useRef } from "react";
import * as S from "../index.style";
import { useCatVideoStore } from "store/catVideo";

function Start() {
  const ref = useRef<HTMLVideoElement>(null);
  const { setVideoRef } = useCatVideoStore();

  useEffect(() => {
    setVideoRef(ref);
  }, [setVideoRef]);

  return (
    <S.StartContainer>
      <S.VideoContainer>
        <S.CatVideo autoPlay muted ref={ref} preload="auto" />
      </S.VideoContainer>
    </S.StartContainer>
  );
}

export default Start;

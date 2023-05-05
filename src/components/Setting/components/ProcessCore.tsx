import * as S from "../index.style";
import { useProcessStore, useProcessorStore } from "store/setting";
import { ReactComponent as CoreSVG } from "assets/svg/core.svg";
import { ReactComponent as ProcessSVG } from "assets/svg/process.svg";
import AddCore from "./AddCore";
import AddProcess from "./AddProcess";
import { useState } from "react";
import Overview from "./Overview";
import Start from "./Start";
import logo from "assets/image/logo.png";
import koreateh from "assets/image/koreatech.png";

function ProcessCore() {
  const [nav, setNav] = useState<"core" | "process">("core");
  const processors = useProcessorStore((state) => state.processors);
  const processes = useProcessStore((state) => state.processes);

  return (
    <S.CoreContainer>
      <S.NavContainer>
        <S.NavItemContainer>
          <S.Nav onClick={() => setNav("core")} selected={nav === "core"}>
            <CoreSVG />
            Core
          </S.Nav>
          {nav === "core" && (
            <S.NavChildrenContainer>
              {processors.map((processor) => (
                <S.NavChildren color={processor.mainColor} key={processor.id}>
                  {processor.name}
                </S.NavChildren>
              ))}
            </S.NavChildrenContainer>
          )}
        </S.NavItemContainer>
        <S.NavItemContainer>
          <S.Nav onClick={() => setNav("process")} selected={nav === "process"}>
            <ProcessSVG />
            Process
          </S.Nav>
          {nav === "process" && (
            <S.NavChildrenContainer>
              {processes.map((process) => (
                <S.NavChildren color={process.mainColor} key={process.id}>
                  {process.name}
                </S.NavChildren>
              ))}
            </S.NavChildrenContainer>
          )}
        </S.NavItemContainer>
      </S.NavContainer>
      {nav === "core" && <AddCore />}
      {nav === "process" && <AddProcess />}

      <Overview />

      <Start />

      <S.LogoContainer>
        <S.Koreatech src={koreateh} />
        <S.Logo src={logo} />
      </S.LogoContainer>
    </S.CoreContainer>
  );
}

export default ProcessCore;

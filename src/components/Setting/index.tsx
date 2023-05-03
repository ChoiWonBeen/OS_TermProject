import * as S from "./index.style";
import { ReactComponent as CoreSVG } from "assets/svg/core.svg";
import { ReactComponent as ProcessSVG } from "assets/svg/process.svg";
import { useState } from "react";
import AddCore from "./components/AddCore";
import AddProcess from "./components/AddProcess";
import { useProcessStore, useProcessorStore } from "store/setting";

function Setting() {
  const [nav, setNav] = useState<"core" | "process">("core");
  const processors = useProcessorStore((state) => state.processors);
  const processes = useProcessStore((state) => state.processes);
  return (
    <S.Container>
      <S.Heading>Process & Core</S.Heading>
      <S.Scheduler>
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
                    <S.NavChildren
                      color={processor.mainColor}
                      key={processor.id}
                    >
                      {processor.name}
                    </S.NavChildren>
                  ))}
                </S.NavChildrenContainer>
              )}
            </S.NavItemContainer>
            <S.NavItemContainer>
              <S.Nav
                onClick={() => setNav("process")}
                selected={nav === "process"}
              >
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
        </S.CoreContainer>
      </S.Scheduler>
    </S.Container>
  );
}

export default Setting;

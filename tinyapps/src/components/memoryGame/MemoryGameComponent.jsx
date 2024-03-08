import * as S from "./assets/styles/globalStyle"
import Card from "./components/Card"
import useCards from "./hooks/useCards"
import "animate.css"
import { StyleSheetManager } from "styled-components"
import isPropValid from "@emotion/is-prop-valid"
import { GlobalStyle } from "./assets/styles/globalStyle"


const MemoryGameComponent = () => {
  const { cards, handleClick } = useCards()

  return (
    <div>
        <StyleSheetManager shouldForwardProp={isPropValid}>
        <GlobalStyle />
      {/* <S.Logo /> */}
      <S.CardContainer>
      {cards.map((c, i) => (
          <Card key={i} select={() => handleClick(i)} symbol={c.symbol} status={c.status} />
        ))}
      </S.CardContainer>
      <S.RestartButton onClick={() => location.reload()}>RESTART ✓</S.RestartButton>
      </StyleSheetManager>
    </div>
  );
};

export default MemoryGameComponent;

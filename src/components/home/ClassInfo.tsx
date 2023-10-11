import { FC } from 'react'
import * as Styled from '../GlobalStyled'

export const ClassInfo:FC = () => {
  return (
    <Styled.FlexBox $gap={10} $ai='start'>
    <div style={{ width: "100%" }}>
      <Styled.H1 children="[개념] 개념 중1(하)" />
      <Styled.H3 $fontS={1} $marginT={10} $fColor='#8e8e8e' children="1학년 2반" />
      <Styled.FlexBox $gap={15} $jc='start' style={{ marginTop: "30px" }}>
        <Styled.H3 $fontS={1} children="사용 커리큘럼" />
        <Styled.BoxDiv $bColor="#59B3EE" $fColor="white" $width={40} $height={16} $borderR={5} $fontS={0.75} children="개념" />
        <Styled.H3 $fontS={1} $types="bottomLine" children="개념 중1(하)" />

      </Styled.FlexBox>
    </div>
    <Styled.GridTable>
      <div>생성일</div>
      <div>2023.08.22 화</div>
      <div>수업 정보</div>
      <div>12차시 • 12강 • 치료 3회</div>
      <div>수업 일정</div>
      <div>-</div>
      <div>출제 방식</div>
      <div>-</div>
      <div>선생님</div>
      <Styled.FlexBox $gap={5} $jc='start'>
        <p style={{ color: "black" }}>이지혜 선생님</p>
        <Styled.PlusP children="+" />
      </Styled.FlexBox>
    </Styled.GridTable>
  </Styled.FlexBox>
  )
}

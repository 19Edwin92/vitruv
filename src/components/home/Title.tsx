import { FC } from 'react'
import dayjs from 'dayjs'
import * as Styled from '../GlobalStyled'

export const Title:FC = () => {
  return (
    <Styled.FlexBox>
          <Styled.H2 children="수업 상세" />
          <Styled.FlexBox $jc='end' $gap={10}>
            <Styled.BoxDiv $width={100} $height={35} $color="#CCCCCC" $fontS={0.9} children="수업 공지" />
            <div>
              <Styled.FlexBox $jc='end' $gap={5}>
                <Styled.H3 $fColor='#8e8e8e' children="Today" />
                <div>{dayjs().format("YYYY.MM.DD")}</div>
              </Styled.FlexBox>
              <Styled.FlexBox $jc='end' $gap={5}>
                <Styled.H3 $fColor='#8e8e8e' children="새로운 질문" />
                <Styled.CircleBox $bColor="#3D69E5" $width={25} $color="#3D69E5" children="0" />
              </Styled.FlexBox>
            </div>
          </Styled.FlexBox>
        </Styled.FlexBox>
  )
}

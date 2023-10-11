import { FC } from 'react'
import * as Styled from '../GlobalStyled'

export const PagiNation:FC = () => {
  return (
    <Styled.FlexBox $gap={5} style={{marginTop:"20px"}}>
          <Styled.MdOutlineKeyboardDoubleArrowLeft color='#8e8e8e'/>
          <Styled.MdOutlineKeyboardArrowLeft color='#8e8e8e'/>
            <Styled.BoxDiv $width={20} $height={20} $fontS={0.75} $bColor="#3D69E5" $color="#3D69E5" $fColor="#fff" $borderR={3} children="1"/>
            <Styled.BoxDiv $width={20} $height={20} $fontS={0.75} $color="white" $borderR={3} children="2"/>
            <Styled.BoxDiv $width={20} $height={20} $fontS={0.75} $color="white" $borderR={3} children="3"/>
          <Styled.MdOutlineKeyboardArrowRight/>
          <Styled.MdOutlineKeyboardDoubleArrowRight/>
        </Styled.FlexBox>
  )
}

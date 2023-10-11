import * as CSS from "styled-components";
import * as Types from "../types";
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineFileSearch } from 'react-icons/ai'
import {MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'

export const GlobalStyled = CSS.createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

  html, body, div, span,
  h1, h2, h3, h4, h5, h6,
  p, a, img, ol, ul, li, fieldset,
  form, label, legend, article,figure,
  input,textarea,
  figcaption, footer, header,nav, section {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    font-size: 16px;
    word-break: break-word;
    line-height: 1.25;
    font-family: 'Pretendard-Regular';
    
}

body {
    width: 100%;
    height: 100%;
    position:relative;
  }
`

/* About css styled ---------------------------------------------- */
const Flex = CSS.css<Partial<Types.Styled>>`
  display: flex;
  flex-direction: ${({ $fd }) => ($fd ? $fd : "row")};
  justify-content: ${({ $jc }) => ($jc ? $jc : "center")};
  align-items: ${({ $ai }) => ($ai ? $ai : "center")};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : "none")};
`;

/* About styled ---------------------------------------------- */
const FlexBox = CSS.styled.div<Partial<Types.Styled>>`
  ${Flex}
  width: 100%;
`;

const Layout = CSS.styled.div<Partial<Types.Styled>>`
  padding: 15px; 
`

const H1 = CSS.styled.h1`
  width: 100%;
  font-family: Pretendard;
  font-size: 2rem;
`

const H2 = CSS.styled.h2`
  width: 100%;
  font-family: Pretendard;
  font-size: 1rem;
  color: #9D9E9C;
`

const H3 = CSS.styled.h3<Partial<Types.Styled>>`
  font-family: Pretendard;
  margin-top:  ${({ $marginT }) => `${$marginT}px`};
  font-size: ${({ $fontS }) => `${$fontS ? $fontS : 0.5}rem`};
  color: ${({ $fColor }) => $fColor ? $fColor : "black"};
  
  ${({ $types }) => $types === "bottomLine"
    && CSS.css`
      border-bottom: 1px solid black
    `
  }
  span {
    color:#FE486C;
    font-size: ${({ $fontS }) => `${$fontS ? $fontS : 0.5}rem`};
  }
`

const BoxDiv = CSS.styled.div<Partial<Types.Styled>>`
  ${Flex}
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  background-color : ${({ $bColor }) => $bColor ? $bColor : "white"};
  border : 1px solid ${({ $color }) => $color};
  color: ${({ $fColor }) => $fColor ? $fColor : "black"};
  border-radius: ${({ $borderR }) => $borderR ? `${$borderR}px` : "10px"};
  font-size: ${({ $fontS }) => `${$fontS ? $fontS : 1}rem`};
`

const CircleBox = CSS.styled(BoxDiv) <Partial<Types.Styled>>`
  border-radius: 50px;
  font-size: 0.8rem;
  color:white;
`

const GridTable = CSS.styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 100px 1fr;
  row-gap: 10px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #8e8e8e;
  color: #8e8e8e;
`

const ClassGridTable = CSS.styled(GridTable)`
  width: 95%;
  padding: 10px;
  backgroundColor:"yellow"
`

const PlusP = CSS.styled.p<Partial<Types.Styled>>`
  ${Flex}
  width: 16px;
  height: 16px;
  font-size: 0.75rem;
  border-radius: 5px;
  background-color: #3D69E5;
  color: white;
`

const NavClass = CSS.styled.div<Partial<Types.Styled>>`
  ${Flex}
  height: 50px;
  padding: 0 10px;
  cursor: pointer;

  ${({ $state }) => $state
    ? CSS.css`
      color: #3D69E5;
      border-bottom: 2px solid #3D69E5
    `
    : CSS.css`
      color: #8e8e8e;
    `
  }
`

const CurriculumSetion = CSS.styled.section<Partial<Types.Styled>>`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: ${({ $gtc }) => $gtc}; //100px 1fr 40px
  justify-content: center;
  align-items: center;
  border : 1px solid #8e8e8e;
  border-radius:10px;
  pardding:10px;
  height: 50px;
`

const CurriculumInfo = CSS.styled(FlexBox)<Partial<Types.Styled>>`
  background-color:#EEF2FD;
  border-radius:4px;
  padding: 5px;
  justify-content: space-between;
`

const ClassCurriculumSetion = CSS.styled(FlexBox)`
  border : 1px solid #8e8e8e;
  border-radius:10px;
  pardding:10px;
`

const ClassCurriculumArticle = CSS.styled.article<Partial<Types.Styled>>`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: ${({ $gtc }) => $gtc};
  justify-content: center;
  align-items: center;
  height: 50px;
`

const Modal = CSS.styled(BoxDiv)<Partial<Types.Styled>>`
  position: absolute;
  cursor:pointer;
  right:15px;
  top:80%;
  font-size:0.75rem;
  color:#8e8e8e;
  background-color:#fff;
  border-radius:5px;
  z-index: 1;
  box-shadow: #8e8e8e 0px 3px 5px; 
`

export { 
  Flex, FlexBox, Layout, 
  H1, H2, H3, 
  BoxDiv, CircleBox, GridTable, ClassGridTable,
  PlusP, NavClass, CurriculumSetion, CurriculumInfo,
  ClassCurriculumSetion, ClassCurriculumArticle,
  Modal,

  // 아이콘
  BsThreeDotsVertical,
  AiOutlineFileSearch,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
}
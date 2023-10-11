import { FC, useState } from 'react'
import * as Styled from '../GlobalStyled'
import { MockClassType, treatListType } from '../../types'

export const ClassChapter: FC<{ data: MockClassType }> = ({ data: { itemNo, curriculumItemList } }) => {
  const [openModal, setModal] = useState<boolean>(false)
  const ontoggleModal = () => {
    setModal(pre => !pre)
  }

  return (
    <Styled.ClassCurriculumSetion $fd='column' $gap={10} >
      <Styled.ClassCurriculumArticle $gtc="1fr 40px">
        <Styled.FlexBox $jc='start' style={{ paddingLeft: "15px" }} children={`${itemNo > 9 ? itemNo : "0" + itemNo}차시`} />
        <Styled.FlexBox onClick={ontoggleModal} style={{ cursor: "pointer" }} children={<Styled.BsThreeDotsVertical />} />
        {openModal && <Styled.Modal
          onClick={ontoggleModal}
          $width={60}
          $height={20}
          $color="#fff"
          children="출제 취소" />}
      </Styled.ClassCurriculumArticle>

      <div style={{ width: "90%" }} >
        {curriculumItemList.map(({ itemNo, mainType, curriculumItemName, unreleasedDeptCount, totalDeptCount, treatList }) => (
          <div key={itemNo}>
            <Styled.CurriculumInfo $gap={10} style={{ width: "100%" }}>
              <Styled.FlexBox $gap={10} $jc='start'>
                <Styled.BoxDiv $bColor="#59B3EE" $fColor="white" $width={40} $height={20} $borderR={5} $fontS={0.75} children={mainType} />
                <Styled.H3 $fontS={0.75} $fColor="#3b3131" children={`${itemNo > 9 ? itemNo : "0" + itemNo}강 ${curriculumItemName}`} />
                <Styled.BoxDiv $bColor="#3D69E5" $fColor="white" $width={40} $height={16} $borderR={5} $gap={2} children={
                  <>
                    <Styled.BoxDiv $width={10} $height={10} $bColor="#fff" $color="#fff" $borderR={3} children={<Styled.AiOutlineFileSearch />} />
                    <Styled.H3 $fColor="#fff" children="PDF" />
                  </>
                } />
              </Styled.FlexBox>
              <Styled.FlexBox $jc='end' $gap={10} style={{ width: "300px" }}>
                <Styled.H3 $fColor="#555555" >제출 {unreleasedDeptCount}/{totalDeptCount}명</Styled.H3>
                <Styled.BoxDiv $bColor="#fff" $fColor="#518DF3" $color="#518DF3" $width={60} $height={20} $borderR={5} $fontS={0.75} children="출제하기" />
              </Styled.FlexBox>
            </Styled.CurriculumInfo>
            <Styled.FlexBox $fd='column' $gap={10} $ai='end' style={{ margin: "10px 0" }}>
              {treatList.map(({ treatNo, curriculumItemName }: treatListType) => (
                <Styled.ClassGridTable key={treatNo}>
                  <Styled.H3 $fontS={0.75} $fColor="#8e8e8e">치료 {treatNo}차</Styled.H3>
                  <Styled.H3 $fontS={0.75} $fColor="#8e8e8e">{curriculumItemName}</Styled.H3>
                </Styled.ClassGridTable>
              ))
              }
            </Styled.FlexBox>
          </div>
        ))}
      </div>
    </Styled.ClassCurriculumSetion>
  )
}

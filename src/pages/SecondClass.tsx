import { FC } from 'react'
import * as Styled from '../components'
import { useGetClassDataQuery } from '../mock/api'
import { MockClassType } from '../types'

export const SecondClass:FC = () => {
  const { data, isLoading, isError } = useGetClassDataQuery({})
  return (
    <Styled.FlexBox $fd='column' $ai='start' $gap={20}>
    <Styled.H2 children="차시 별 정보" />
    <Styled.FlexBox $fd='column' $ai='start' $gap={10}>
      {isLoading
        ? <div>로딩중 ...</div>
        : isError ? <div>통신에러..</div>
          : !!data.length && data.map((list: MockClassType) => (
            <Styled.ClassChapter key={list.itemNo} data={list}/>))
      }
    </Styled.FlexBox>
  </Styled.FlexBox>
  )
}

export default SecondClass
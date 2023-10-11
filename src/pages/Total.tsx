import { FC } from 'react'
import * as Styled from '../components'
import { useGetTotalDataQuery } from '../mock/api'
import { MockDataType } from '../types'

export const Total: FC = () => {
  const { data, isLoading, isError } = useGetTotalDataQuery({})

  return (
    <Styled.FlexBox $fd='column' $ai='start' $gap={20}>
      <Styled.H2 children="차시 별 정보" />
      <Styled.FlexBox $fd='column' $ai='start' $gap={10}>
        {isLoading
          ? <div>로딩중 ...</div>
          : isError ? <div>통신에러..</div>
            : !!data.length && data.map((list: MockDataType) => (
              <Styled.ChapterList key={list.curriculumItemId} data={list} />))
        }
        <Styled.PagiNation />
      </Styled.FlexBox>
    </Styled.FlexBox>
  )
}

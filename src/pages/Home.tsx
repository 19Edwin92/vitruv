import { FC } from 'react'
import * as Styled from '../components'
import { Outlet } from 'react-router-dom'

export const Home: FC = () => {
  return (
    <Styled.Layout>
      <Styled.FlexBox $fd='column' $jc='space-between' $gap={30}>
        <Styled.Title/> {/* 제목행 */}
        <Styled.ClassInfo/> {/* 과정 및 정보 */}
        <Styled.ClassNav/> {/* 네비게이션 */}
        <Outlet />
      </Styled.FlexBox>
    </Styled.Layout>
  )
}

export default Home



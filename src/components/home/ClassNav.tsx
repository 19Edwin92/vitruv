import { FC } from 'react'
import * as Styled from '../GlobalStyled'
import { useRouter } from '../../hooks'

export const ClassNav:FC = () => {
  const { pathname, onNavigate} = useRouter()
  const navList = [
    {path:"/", title:"전체"},
    {path:"/class2", title:"1학년 2반"}
  ]
  return (
    <Styled.FlexBox $gap={10} $jc='start' style={{borderBottom:"1px solid #EEEEEE"}}>
      {navList.map(({path, title}) => (
        <Styled.NavClass 
          key={path} 
          onClick={onNavigate(path)} 
          $state={pathname===path} 
          children={title} />
      ))}

  </Styled.FlexBox>
  )
}

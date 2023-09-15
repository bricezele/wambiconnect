/**
 * @Project wambi-connect
 * @File Icon.tsx
 * @Path core/application/components/common
 * @Author BRICE ZELE
 * @Date 15/09/2023
 */
import styled from 'styled-components'

interface IIconProps {
    size?: number
}

const Icon = styled.img<IIconProps>`
  width: ${({size}) => `${size}rem` || '1.8rem'};
  height: ${({size}) => `${size}rem` || '1.8rem'};
  vertical-align: sub;
`
export default Icon

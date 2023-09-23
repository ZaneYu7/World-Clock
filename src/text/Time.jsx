import React from 'react'

import styled from 'styled-components'

const TimeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  color: ${({ light, theme }) => light ? theme.color.light : theme.color.dark};
`

export default function Time(props) {

  const { light, children} = props
  return (
    <TimeStyle>{children}</TimeStyle>
  )
}

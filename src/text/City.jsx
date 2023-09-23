import React from 'react'

import styled from 'styled-components'

const CityStyle = styled.div`
  margin-bottom: ${props => props.marginBottom};
  color: ${({ light, theme }) => light? theme.color.light : theme.color.dark};
`

CityStyle.defaultProps = {
  marginBottom: "20px",
  color: "black"
}

export default function City(props) {
  const { light, children } = props
  return (
    <CityStyle light={light}>{children}</CityStyle>
  )
}

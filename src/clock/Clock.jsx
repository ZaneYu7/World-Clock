import React from 'react'
import ClockBackground from './ClockBackground'
import City from '../text/City'
import Time from '../text/Time'
import ClockPointer from '../pointer/ClockPointer'

export default function Clock(props) {
  const { city, timezone } = props

  const [ light, setLight ] = React.useState(false)

  return (
    <div>
      <ClockBackground size={'400px'}>
        <City light={light}>{city}</City>
        <ClockPointer light={light}></ClockPointer>
        <Time light={light}>{timezone}</Time>
      </ClockBackground>
    </div>
  )
}

import React from 'react'

import ClockPointerStyle from './ClockPointerStyle'
import ClockCenter from './ClockCenter'
import HourPointer from './HourPointer'
import MinutePointer from './MinutePointer'
import SecondPointer from './SecondPointer'

export default function ClockPointer(props) {
  return (
    <ClockPointerStyle light={props.light}>
      <HourPointer rotate={props.hourDeg} light={props.light}/>
      <MinutePointer rotate={props.minuteDeg} light={props.light}/>
      <SecondPointer rotate={props.secondDeg} light={props.light}/>
      <ClockCenter/>
    </ClockPointerStyle>
  )
}

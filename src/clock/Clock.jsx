import React, { useState, useEffect } from 'react'
import ClockBackground from './ClockBackground'
import City from '../text/City'
import Time from '../text/Time'
import ClockPointer from '../pointer/ClockPointer'

export default function Clock(props) {
  const { city, timezone } = props

  const [hourDeg, setHourDeg] = useState()
  const [minuteDeg, setMinuteDeg] = useState()
  const [secondDeg, setSecondDeg] = useState()

  const [year, setYear] = useState()
  const [month, setMonth] = useState()
  const [newDay, setDay] = useState()

  const [hour, setHour] = useState()
  const [minute, setMinute] = useState()
  const [second, setSecond] = useState()

  const [ light, setLight ] = useState(true)

  const unitDeg = 360 / 60 // 6 degree
  const bigUnitDeg = 360 / 12 // 30 degree
  
  const setTime = () => {
    let currentTime = new Date(); // get current time
    let day = new Date(currentTime.getTime() + timezone * 60 * 60 * 1000) // get time of timezone
    
    let pureHourDeg = day.getUTCHours() * bigUnitDeg;
    let pureMinuteDeg = day.getUTCMinutes() * unitDeg;
    let pureSecondDeg = day.getUTCSeconds() * unitDeg;

    setHourDeg(pureHourDeg + pureMinuteDeg / 12)
    setMinuteDeg(pureMinuteDeg + pureSecondDeg / 60)
    setSecondDeg(pureSecondDeg)

    setYear(day.getUTCFullYear())
    setMonth(day.getUTCMonth() + 1)
    setDay(day.getUTCDate())
    setHour(day.getUTCHours())
    setMinute(day.getUTCMinutes())
    setSecond(day.getUTCSeconds())
  }

  useEffect(() => {
    if (+hour >= 18 || +hour < 7) {
      setLight(false)
    } else {
      setLight(true)
    }
  }, [hour])

  useEffect(() => {
    setTime()
    const interval = setInterval(() => {
      setTime()
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <ClockBackground size={'400px'}>
        <City light={light}>{city}</City>
        <ClockPointer 
          light={light}
          hourDeg={hourDeg}
          minuteDeg={minuteDeg}
          secondDeg={secondDeg} />
        <Time light={light}>{year}-{month}-{newDay} {hour}:{minute}:{second}</Time>
      </ClockBackground>
    </div>
  )
}

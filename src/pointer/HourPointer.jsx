import styled from "styled-components";
import BasicPointer from "./BasicPointer";

const HourPointerStyle = styled(BasicPointer).attrs((props) => (
  {
    rotate: props.rotate,
    size: 100,
    width: 7,
    pointer_light: "#848484",
    pointer_dark: "#ff6767",
    tail: 0
  }
))``;

const HourPointer = (props) => {
  return (
    <HourPointerStyle {...props} />
  )
}

export default HourPointer
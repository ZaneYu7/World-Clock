import styled from "styled-components";
import BasicPointer from "./BasicPointer";

const MinutePointerStyle = styled(BasicPointer).attrs((props) => (
  {
    rotate: props.rotate,
    size: 120,
    width: 4,
    pointer_light: "#848484",
    pointer_dark: "#fff",
    tail: 0
  }
))``;

const MinutePointer = (props) => {
  return (
    <MinutePointerStyle {...props} />
  )
}

export default MinutePointer
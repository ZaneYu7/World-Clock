import styled from "styled-components";
import BasicPointer from "./BasicPointer";

const SecondPointerStyle = styled(BasicPointer).attrs((props) => (
  {
    rotate: props.rotate,
    size: 150,
    width: 2,
    pointer_light: "#ff6767",
    pointer_dark: "#69c0ff",
    tail: 20
  }
))``;

const SecondPointer = (props) => {
  return (
    <SecondPointerStyle {...props} />
  )
}

export default SecondPointer
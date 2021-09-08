import styled from "styled-components";

type FloorImageSrc = {
  $image: string
}

const WrapperCanvas = styled.div<FloorImageSrc>`
  position: relative;
  width: 1024px;
  height: 640px;
  background-image: url("${({$image})=> $image}");
  background-position: center;
  background-repeat: no-repeat;
`;

export default WrapperCanvas;

import styled from "styled-components";

const WrapperCanvas = styled.div<{$image: string}>`
  position: relative;
  width: 1024px;
  height: 640px;
  background-image: url("${({$image})=> $image}");
  background-position: center;
  background-repeat: no-repeat;
`;

export default WrapperCanvas;

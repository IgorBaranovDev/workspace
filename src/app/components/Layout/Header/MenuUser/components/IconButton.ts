import styled from "styled-components";
import { IconButton as MaterialButton } from "@material-ui/core";

const IconButton = styled(MaterialButton)`
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 0;
  }
`;

export default IconButton;

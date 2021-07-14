import styled from "styled-components";

// material-ui
import { Link } from "@material-ui/core";

const Text = styled(Link)`
  padding: 10px;
  font-size: 16px;
  line-height: 16px;
  color: #222222;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.04);
    text-decoration: none;
  }
`;

export default Text;

import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  padding: 4px;
  margin: 10px;
  align-items: center;
  border-bottom: 2px solid rgb(41 156 255 / 50%);
  &:hover {    
    border-color: #600cfb;
  }
  &:hover svg{
    fill: #600cfb;
  }
`;

export default ListItem;

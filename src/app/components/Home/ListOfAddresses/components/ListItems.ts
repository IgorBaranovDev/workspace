import styled from "styled-components";

const ListItems = styled.li`
  display: flex;
  padding: 4px;
  margin: 10px;
  align-items: center;
  border-bottom: 2px solid rgb(41 156 255 / 50%);

  &:hover {    
    border-color: rgb(41 156 255);
  }
`;

export default ListItems;

import styled from "styled-components";

const HeaderOffice = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export default HeaderOffice;

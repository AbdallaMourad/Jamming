import styled from 'styled-components';

export const StyledSearchResults = styled.div`
  width: 50%;
  height: 950px;
  overflow-y: scroll;
  padding: .88rem;
  background-color: rgba(1, 12, 63, 0.7);
  box-shadow: 0 4px 2px 2px #000000;

  @media (max-width: 1020px) {
    width: 90%;
    margin-bottom: 2rem;
  }
`
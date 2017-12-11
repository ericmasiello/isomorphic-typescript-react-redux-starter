import styled from 'styled-components';

export const HeaderList = styled.ul`
  margin: 0;
`;

HeaderList.displayName = 'HeaderList';

export const HeaderListItem = styled.li`
  transition: background-color .3s;
  float: left;
  padding: 0;

  a {
    transition: background-color .3s;
    font-size: 1rem;
    color: #fff;
    display: block;
    padding: 0 15px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0,0,0,0.1);
    }
  }
`;

HeaderListItem.displayName = 'HeaderListItem';

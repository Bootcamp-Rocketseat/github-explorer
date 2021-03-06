import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #A8A8B3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        line-height: 42px;
        color: #3D3D4D;
      }

      p {
        margin-top: 4px;
        font-size: 20px;
        line-height: 23px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        line-height: 42px;
        color: #3D3D4D;
      }

      span {
        display: block;
        margin-top: 4px;
        font-size: 20px;
        line-height: 23px;
        color: #6C6C80;
      }
    }
  }
`;

export const RepositoryIssues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
          font-size: 18px;
          color: #A8A8B3;
          margin-top: 4px;
        }
    }

    svg {
       margin-left: auto;
       color: #CBCBD6;
    }
  }
`;

import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 433px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    background: #FFFFFF;
    color: #3A3A3A;
    border: 2px solid #FFFFFF;
    border-right: 0;

    ${ (props) => props.hasError && css`border-color: #c53030`};

    &::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0px 5px 5px 0px;
    border: 0;

    color: #FFFFFF;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')}
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
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

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`

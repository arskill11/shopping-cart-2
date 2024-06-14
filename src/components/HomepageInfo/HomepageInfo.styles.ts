import styled from 'styled-components';
import sectionOneBackgr from '../../assets/section1backgr.jpg';

export const StyledInfo = styled.div`
  min-height: 90vh;
  background-image: url(${sectionOneBackgr});
  background-size: cover;

  .shopInfo {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: rgb(234, 234, 246);
    width: 35%;
    padding-top: 380px;
    padding-left: 250px;

    @media (max-width: 1200px) {
      width: 60%;
      padding-left: 50px;
      padding-top: 40%;
    }
    @media (max-width: 600px) {
      padding-top: 60%;
    }
  }
  h1 {
    font-size: 70px;
    font-weight: bold;
  }
  p {
    font-size: 30px;
    font-style: italic;
  }
  a {
    background: lightgray;
    border-radius: 15px;
    border: none;
    color: black;
    font-size: 2rem;
    text-decoration: none;
    padding: 18px;
    width: 16rem;
    font-weight: bold;
    text-align: center;
  }
`;

import styled from 'styled-components';
import sectionOneBackgr from '../assets/section1backgr.jpg';

const StyledInfo = styled.div`
  height: 100vh;
  background-image: url(${sectionOneBackgr});
  background-size: cover;

  .blur-background {
    background-color: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    height: inherit;
  }
  .shopInfo {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: rgb(234, 234, 246);
    width: 25%;
    position: absolute;
    top: 45%;
    left: 15%;
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

const Info = () => {
  return (
    <StyledInfo>
      <div className="blur-background">
        <div className="shopInfo">
          <h1>FakeShop</h1>
          <p>This is a fake shop to sell some goods not sindg</p>
        </div>
      </div>
    </StyledInfo>
  );
};

export default Info;

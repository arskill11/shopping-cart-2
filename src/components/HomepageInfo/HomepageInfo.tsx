import { StyledInfo } from './HomepageInfo.styles';

export const HomepageInfo = () => {
  return (
    <StyledInfo>
      <div className="shopInfo">
        <h1>FakeShop</h1>
        <p>
          <strong>
            This is a fake shop which imitates selling goods. The API used:
            fakestoreapi
          </strong>
        </p>
      </div>
    </StyledInfo>
  );
};

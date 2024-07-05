import { StyledInfo } from './HomepageInfo.styles';

export const HomepageInfo = () => {
  //-----------GET TOKENS---------
  // const tokens = fetch('https://api.escuelajs.co/api/v1/auth/login', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: 'john@mail.com',
  //     password: 'changeme',
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // });
  // tokens.then((response) => response.json()).then((json) => console.log(json));

  // -----------CREATE A USER---------
  // const userInfo = fetch('https://api.escuelajs.co/api/v1/users/', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     name: 'Nicolas',
  //     email: 'nico@gmail.com',
  //     password: '1234',
  //     avatar: 'https://picsum.photos/800',
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // });
  // userInfo
  //   .then((response) => response.json())
  //   .then((json) => console.log(json.email));

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

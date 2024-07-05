import { getUserWithSession, updateUser } from '../../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { logOut } from '../../store/auth/auth.slice';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  LoadingPage,
  LogOutButton,
  ProfileInfo,
  ProfilePicture,
} from './Profile.styles';
import { EditMode, User } from './types';
import { CartData } from '../../shared/types/types';
import { clearCart } from '../../store/cartProducts/cartProducts.slice';

const initialEditMode = {
  name: false,
  email: false,
  password: false,
  avatar: false,
};

export const Profile = () => {
  const access_token: string = useSelector(
    (state: RootState) => state.auth.access_token,
  );
  const cartProducts: CartData[] = useSelector(
    (state: RootState) => state.cartProducts,
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>();
  const [editMode, setEditMode] = useState<EditMode>(initialEditMode);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const newUser = await getUserWithSession(access_token);
      setUser(newUser);
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  function handleLogOut() {
    dispatch(logOut());
    dispatch(clearCart());
    navigate('/');
  }

  async function handleChange(property: string) {
    const newUser = await updateUser({
      id: user!.id,
      property: property,
      value: inputValue,
    });
    console.log(newUser);
    setUser(newUser);
    setEditMode({ ...editMode, [property]: false });
    setInputValue('');
  }

  function handleModeChange(property: string) {
    const newMode = { ...editMode };
    for (const key in editMode) {
      newMode[key as keyof EditMode] = false;
    }
    newMode[property as keyof EditMode] = true;
    console.log(newMode);
    setEditMode(newMode);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  if (isLoading) {
    return (
      <LoadingPage>
        <h2>Loading content...</h2>
      </LoadingPage>
    );
  }

  return (
    <Container>
      <ProfilePicture>
        <img src={user?.avatar} alt="Profile Picture" />
        {!editMode.avatar ? (
          <Button
            onClick={() => {
              setInputValue(user!.avatar);
              handleModeChange('avatar');
            }}
          >
            Change Avatar
          </Button>
        ) : (
          <>
            <div className="avatarEdit">
              <label htmlFor="avatar">New Avatar URL</label>
              <input
                type="text"
                onChange={handleInput}
                defaultValue={user?.avatar}
              />
            </div>
            <Button onClick={() => handleChange('avatar')}>Submit</Button>
          </>
        )}
      </ProfilePicture>
      <ProfileInfo>
        <div>
          <label htmlFor="name">Name:</label>
          {!editMode.name ? (
            <div className="info">
              <p>{user?.name}</p>
              <Button
                onClick={() => {
                  setInputValue(user!.name);
                  handleModeChange('name');
                }}
              >
                Change Name
              </Button>
            </div>
          ) : (
            <div className="edit">
              <input defaultValue={user?.name} onChange={handleInput} />
              <Button onClick={() => handleChange('name')}>Submit</Button>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          {!editMode.email ? (
            <div className="info">
              <p>{user?.email}</p>
              <Button
                onClick={() => {
                  setInputValue(user!.email);
                  handleModeChange('email');
                }}
              >
                Change Email
              </Button>
            </div>
          ) : (
            <div className="edit">
              <input defaultValue={user?.email} onChange={handleInput} />
              <Button onClick={() => handleChange('email')}>Submit</Button>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          {!editMode.password ? (
            <div className="info">
              <p>{user?.password}</p>
              <Button
                onClick={() => {
                  setInputValue(user!.password);
                  handleModeChange('password');
                }}
              >
                Change Password
              </Button>
            </div>
          ) : (
            <div className="edit">
              <input defaultValue={user?.password} onChange={handleInput} />
              <Button onClick={() => handleChange('password')}>Submit</Button>
            </div>
          )}
        </div>
        <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
      </ProfileInfo>
    </Container>
  );
};

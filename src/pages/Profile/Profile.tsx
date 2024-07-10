import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { logOut } from '../../store/auth/auth.slice';
import { useNavigate } from 'react-router-dom';
import {
  ButtonContainer,
  Container,
  GreenButton,
  LoadingPage,
  RedButton,
  ProfileInfo,
  ProfilePicture,
  ValidationMessage,
} from './Profile.styles';
import { ProfileFormFields, User } from './types';
import { clearCart } from '../../store/cartProducts/cartProducts.slice';
import {
  useGetUserWithSessionQuery,
  useUpdateUserMutation,
} from '../../store/api/api.slice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validateEmail } from '../../shared/helpers/formValidators';
import { removeAccessTokenFromLocalStorage } from '../../shared/helpers/utility';

const initialUser: User = {
  id: 0,
  email: '',
  password: '',
  name: '',
  avatar: '',
  role: '',
};

export const Profile = () => {
  const access_token: string = useSelector(
    (state: RootState) => state.auth.access_token,
  );

  const { data: currentUser = initialUser, isLoading } =
    useGetUserWithSessionQuery(access_token);
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormFields>();

  const [user, setUser] = useState<User>(initialUser);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setUser(currentUser);
  }, [isLoading]);

  function handleLogOut() {
    dispatch(logOut());
    dispatch(clearCart());
    navigate('/');
    removeAccessTokenFromLocalStorage();
  }

  const onSubmit: SubmitHandler<ProfileFormFields> = async (data) => {
    await updateUser({
      id: user!.id,
      properties: {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: data.avatar,
      },
    })
      .unwrap()
      .then((newUser: User) => {
        setUser(newUser);
        setIsEditable(false);
      });
  };

  if (isLoading) {
    return (
      <LoadingPage>
        <h2>Loading content...</h2>
      </LoadingPage>
    );
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <ProfilePicture>
        <img src={user?.avatar} alt="Profile Picture" />
      </ProfilePicture>
      <ProfileInfo>
        <div>
          <label htmlFor="name">Name:</label>
          <div className="info">
            {!isEditable ? (
              <p>{user?.name}</p>
            ) : (
              <>
                {' '}
                <input
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  })}
                  defaultValue={user?.name}
                  minLength={2}
                />
                {errors.name && (
                  <ValidationMessage>{errors.name.message}</ValidationMessage>
                )}
              </>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <div className="info">
            {!isEditable ? (
              <p>{user?.email}</p>
            ) : (
              <>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    validate: (value) => validateEmail(value),
                  })}
                  defaultValue={user?.email}
                />
                {errors.email && (
                  <ValidationMessage>{errors.email.message}</ValidationMessage>
                )}
              </>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <div className="info">
            {!isEditable ? (
              <p>{user?.password}</p>
            ) : (
              <>
                <input
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 4,
                      message: 'Password must be at least 4 characters',
                    },
                  })}
                  defaultValue={user?.password}
                  minLength={5}
                />
                {errors.password && (
                  <ValidationMessage>
                    {errors.password.message}
                  </ValidationMessage>
                )}
              </>
            )}
          </div>
        </div>
        {isEditable && (
          <div>
            <label htmlFor="avatar">New Avatar URL</label>
            <div className="info">
              <input
                {...register('avatar', {
                  required: 'Avatar URL is required',
                })}
                type="text"
                defaultValue={user?.avatar}
              />
            </div>
          </div>
        )}

        <ButtonContainer>
          {isEditable ? (
            <>
              <GreenButton key="1" type="submit">
                Submit
              </GreenButton>
              <RedButton key="2" onClick={() => setIsEditable(false)}>
                Cancel
              </RedButton>
            </>
          ) : (
            <>
              <GreenButton key="3" onClick={() => setIsEditable(true)}>
                Edit
              </GreenButton>
              <RedButton key="4" onClick={handleLogOut}>
                Log Out
              </RedButton>
            </>
          )}
        </ButtonContainer>
      </ProfileInfo>
    </Container>
  );
};

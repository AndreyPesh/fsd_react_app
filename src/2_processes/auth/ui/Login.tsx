import { Formik, FormikProps } from 'formik';
import { useAppSelector } from '1_app/store/hooks';
import { ErrorResponse } from '7_shared/api/types/types';
import { useLoginUserMutation } from '7_shared/api/authApi';
import LoadButton from '7_shared/buttons/LoadButton';
import { LoginFormValues } from '7_shared/api/types/interfaces';
import useToastyForAuth from '7_shared/toasty/hooks/useToastyForAuth';
import { NAME_STORAGE_LOGIN_FORM_DATA } from '../utils/storage/constants';
import PersistLoginForm from '../utils/persist/PersistLoginForm';
import { AuthMessage } from '../utils/enums';
import { validateLoginForm } from '../utils/validateForm';

const Login = (): JSX.Element => {
  const currentFormData = useAppSelector((state) => state.loginFormData);

  const [loginUser, { isLoading, isSuccess, error, isError }] = useLoginUserMutation();

  const messageError = error != null ? (error as ErrorResponse).data.message : AuthMessage.wrong;

  const isErrorRequest = useToastyForAuth({
    isSuccess,
    isError,
    messageSuccess: AuthMessage.userLogin,
    messageError,
  });

  return (
    <Formik
      initialValues={currentFormData}
      validate={validateLoginForm}
      onSubmit={async (values) => {
        await loginUser(values);
      }}
    >
      {(props: FormikProps<LoginFormValues>) => (
        <form className="auth__login-form" onSubmit={props.handleSubmit}>
          <div className="auth__field-form auth__field-form_login">
            <label htmlFor="login-email">E-mail:</label>
            <input
              type="text"
              id="login-email"
              className="auth__input"
              name="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
            />
            {props.touched.email !== undefined && props.errors.email !== undefined ? (
              <p className="auth__error">{props.errors.email}</p>
            ) : null}
          </div>
          <div className="auth__field-form auth__field-form_password">
            <label htmlFor="login-password">Password:</label>
            <input
              type="password"
              id="login-password"
              className="auth__input"
              name="password"
              autoComplete="13245"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
            />
            {props.touched.password !== undefined && props.errors.password !== undefined ? (
              <p className="auth__error">{props.errors.password}</p>
            ) : null}
          </div>

          {isErrorRequest && (
            <p className="auth__error auth__error_response">
              {error != null ? messageError : null}
            </p>
          )}

          <LoadButton type="submit" listClass="button auth-button" isLoad={isLoading}>
            Login
          </LoadButton>
          <PersistLoginForm name={NAME_STORAGE_LOGIN_FORM_DATA} />
        </form>
      )}
    </Formik>
  );
};

export default Login;

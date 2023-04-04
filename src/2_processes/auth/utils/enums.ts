export const enum AuthMessage {
  userLogin = 'Login user successful',
  userRegistered = 'User registered successful',
  wrong = 'Something went wrong',
  userUpdated = 'User data updated',
}

export const enum ErrorMessageForm {
  required = '* Required field',
  invalidEmail = '* Invalid email address',
  leastSevenCharacters = '* Must be at least 7 characters',
  leastThreeCharacters = '* Must be at least 3 characters',
  passwordNotMatch = '* Passwords do not match',
}

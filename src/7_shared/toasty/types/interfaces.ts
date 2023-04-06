export interface UseToastyProps {
  isSuccess?: boolean;
  isError: boolean;
  messageSuccess?: string;
  messageError?: string;
}

export interface ToastyForAuthProps {
  isSuccess: boolean;
  isError: boolean;
  messageSuccess: string;
  messageError: string;
  redirectToMain?: boolean;
}

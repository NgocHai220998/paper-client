import { isLogined } from "../../utils/helpers";

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    if (!isLogined()) {
      return (
        <div></div>
      );
    }

    return (
      <>
        <Component {...props} />
      </>
    );
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;

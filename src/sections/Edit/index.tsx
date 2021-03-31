import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authSelector } from "../../app/auth/authSlice";
import setAuthToken from "../../app/helpers/auth";
import { GridPageLayout, LoadingScreen } from "../../components";
import { PageWrapper } from "../../components/PageWrapper";

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export const Edit: React.FC<Props> = ({ children }) => {
  const { currentUser, isAuth, isLoading } = useSelector(authSelector);
  const history = useHistory();
  const loadingElement = (
    <LoadingScreen loadingText="Loading user..." inPageLoader />
  );

  if (!isLoading && !isAuth) {
    setAuthToken();
    history.push("/login");
  }

  const footerContent = "Yuvvi";
  return (
    <PageWrapper>
      {currentUser ? (
        <GridPageLayout
          user={currentUser}
          sectionName="Dashboard"
          footerContent={footerContent}
        >
          {children}
        </GridPageLayout>
      ) : (
        loadingElement
      )}
    </PageWrapper>
  );
};

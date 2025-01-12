import { PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { authSelector } from "../../app/auth/authSlice";
import { LoadingScreen } from "../../components";
import { DefaultTemplate } from "../../resumeTemplates";
import setAuthToken from "../../app/helpers/auth";

import {
  Education,
  Profile,
  Skillset,
  WorkingExperience,
} from "../../types/entities.types";

interface Props {
  education: Education[];
  skillset: Skillset[];
  workingExperiences: WorkingExperience[];
  profileInfos: Profile;
}

export const ResumePreviewContainer = (props: Props) => {
  const { currentUser, isAuth, isLoading } = useSelector(authSelector);
  const history = useHistory();
  const loadingElement = (
    <LoadingScreen loadingText="Loading user..." inPageLoader />
  );

  const Wrapper = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
  `;

  const DocumentWrapper = styled.div`
    flex: 1;
    padding: 1em;
    display: flex;
    z-index: 500;
    align-items: center;
    justify-content: center;
  `;

  if (!isLoading && !isAuth) {
    setAuthToken();
    history.push("/login");
  }

  return (
    <Wrapper>
      <DocumentWrapper>
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <DefaultTemplate
            educations={props.education}
            skillset={props.skillset}
            workingExperiences={props.workingExperiences}
            profileInfos={props.profileInfos}
          />
        </PDFViewer>
      </DocumentWrapper>
    </Wrapper>
  );
};

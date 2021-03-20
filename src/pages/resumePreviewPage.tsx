import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import axios from "axios";
import React from "react";
import styled from "styled-components/macro";
import { apiAddress } from "../api";
import { DefaultTemplate } from "../resumeTemplates";
import { EducationOutput } from "../types/api.types";
import { tempToken } from "../temp";
import { Education } from "../types/entities.types";
export const ResumePreviewPage = () => {
  const [education, setEducation] = React.useState<Education[]>([]);

  React.useEffect(() => {
    fetchUserProfile(tempToken);
  }, []);

  const fetchUserProfile = async (token: string) => {
    const result = await axios.get<EducationOutput>(apiAddress.GET_EDUCATION, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result.data.educations) {
      setEducation(result.data.educations);
    }
  };

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

  const downloadLinkElement = () => (
    <div>
      <PDFDownloadLink
        document={<DefaultTemplate educations={education} />}
        fileName="somename.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );

  return (
    <Wrapper>
      {downloadLinkElement()}
      <DocumentWrapper>
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <DefaultTemplate educations={education} />
        </PDFViewer>
      </DocumentWrapper>
    </Wrapper>
  );
};

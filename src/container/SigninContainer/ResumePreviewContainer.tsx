import { PDFViewer } from "@react-pdf/renderer";
import styled from "styled-components";
import { DefaultTemplate } from "../../resumeTemplates";
import { Education, Skillset } from "../../types/entities.types";

interface Props {
  education: Education[];
  skillset: Skillset[];
}

export const ResumePreviewContainer = (props: Props) => {
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

  return (
    <Wrapper>
      <DocumentWrapper>
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <DefaultTemplate
            educations={props.education}
            skillset={props.skillset}
          />
        </PDFViewer>
      </DocumentWrapper>
    </Wrapper>
  );
};

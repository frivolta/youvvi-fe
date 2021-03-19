import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import styled from "styled-components/macro";
import { DefaultTemplate } from "./resumeTemplates";

function App() {
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
      <PDFDownloadLink document={<DefaultTemplate />} fileName="somename.pdf">
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
          <DefaultTemplate />
        </PDFViewer>
      </DocumentWrapper>
    </Wrapper>
  );
}

export default App;

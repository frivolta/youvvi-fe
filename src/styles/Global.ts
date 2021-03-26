import { primaryFont } from "./typography";
import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${normalize()}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap');
html {
  box-sizing: border-box;
  font-size: 16px;
  min-height:100%;
    height: 100vh;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: ${primaryFont};
  line-height: 22px;
  min-height:100%;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  width: 90%;
  margin: 0 auto;
}
#root{
  min-height:100%;
    height: 100vh;
}
`;
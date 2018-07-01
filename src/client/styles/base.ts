
/* tslint:disable max-line-length */
export default `
  @font-face {
    font-family: 'Roboto';
    src: local(Roboto Thin), url('../fonts/roboto/Roboto-Thin.woff2') format('woff2'), url('../fonts/roboto/Roboto-Thin.woff') format('woff');
    font-weight: 100;
  }

  @font-face {
    font-family: 'Roboto';
    src: local(Roboto Light), url('../fonts/roboto/Roboto-Light.woff2') format('woff2'), url('../fonts/roboto/Roboto-Light.woff') format('woff');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Roboto';
    src: local(Roboto Regular), url('../fonts/roboto/Roboto-Regular.woff2') format('woff2'), url('../fonts/roboto/Roboto-Regular.woff') format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Roboto';
    src: local(Roboto Medium), url('../fonts/roboto/Roboto-Medium.woff2') format('woff2'), url('../fonts/roboto/Roboto-Medium.woff') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Roboto';
    src: local(Roboto Bold), url('../fonts/roboto/Roboto-Bold.woff2') format('woff2'), url('../fonts/roboto/Roboto-Bold.woff') format('woff');
    font-weight: 700;
  }

  html {
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
    color: rgba(0,0,0,0.87);

    @media only screen and (min-width: 0) {
      font-size: 14px;
    }

    @media only screen and (min-width: 992px) {
      font-size: 14.5px;
    }

    @media only screen and (min-width: 1200px) {
      font-size: 15px;
    }
  }

  body {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    line-height: 1.1;
  }

  h3 {
    font-size: 2.92rem;
    line-height: 110%;
    margin: 1.46rem 0 1.168rem 0;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: #039be5;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  ul:not(.browser-default) {
    padding-left: 0;
    list-style-type: none;

    > li {
      list-style-type: none;
    }
  }
`;
/* tslint:enable max-line-length */

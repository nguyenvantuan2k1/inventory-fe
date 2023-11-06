import "./style.css";
export interface IError500Props {}

export function Error500(props: IError500Props) {
  return (
    <div className="flex content-center items-center justify-center h-screen text-center">
      <div id="global-loader">
        <div className="whirly-loader"> </div>
      </div>

      <div className="main-wrapper">
        <div className="error-box">
          <h1 className="text-orange-500 font-bold text-8xl">500</h1>
          <h3 className="h2 mb-3">
            <i className="fas fa-exclamation-circle"></i> Oops! Something went
            wrong
          </h3>
          <p className="h4 font-weight-normal text-orange-500">
            The page you requested was not found.
          </p>
          <a href="index.html" className="btn btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

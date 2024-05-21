import Loader from "react-loaders";
import ResourceCards from "../../../Cards/Resource-cards";
import "./index.scss";

const Resources = () => {
  return (
    <>
      <div className="resources-page">
        <h1>Resources</h1>
        <ResourceCards/>
      </div>
      <Loader type="ball-spin-fade-loader" color="black" />
    </>
    
  );
};

export default Resources;

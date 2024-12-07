import "./DownloadApp.css";
import goggle from "../../assets/play_store.png";
import app from "../../assets/app_store.png";

function DownloadApp() {
  return (
    <div className="DownloadApp" id="DownloadApp">
      <div className="download_icon">
        <div className="download">
          <h1>For Better Experience Download Tomato App </h1>
        </div>
        <div className="downloadApp">
          <img className="downloadImg" src={goggle} alt="" />{" "}
          <img className="downloadImg" src={app} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;

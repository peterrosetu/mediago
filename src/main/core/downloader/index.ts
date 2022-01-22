import MediagoDownloader from "main/core/downloader/mediago-downloader";
import NM3u8dlCliDownloader from "main/core/downloader/n-m3u8dl-cli-downloader";
import Downloader from "main/core/downloader/downloader";

const createDownloader = (type: string): Downloader => {
  if (type === "mediago") {
    return new MediagoDownloader();
  }
  if (type === "N_m3u8DL-CLI") {
    return new NM3u8dlCliDownloader();
  }
  throw new Error("暂不支持该下载方式");
};

export { createDownloader };

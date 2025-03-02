import { UserControls } from "../UIElements";
import Navigation from "./Navigation";

function DesktopHeader() {
  return (
    <div
      className="hidden lg:block fixed top-0 bg-mainBlack text-mainWhite
     text-sm[16px] w-[100%] pt-[39px] pb-[8px]  mg:py-[11px] lg:pt-[46px] lg:pb-[16px]"
    >
      <div className="text-[16px] font-semibold	 w-[100%] absolute top-0 h-[30px] hidden lg:flex items-center justify-center bg-captionBlue text-captionalWhite">
        <a href="tel:+48000000000">+48 000 000 000</a>
      </div>
      <div className="container">
        <div className="flex">
          <Navigation />
          <UserControls />
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;

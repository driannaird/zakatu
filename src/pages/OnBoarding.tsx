import "./OnBoarding.css";
import zakatuLogo from '../assets/Logo.png';
import blink from '../assets/Blink.png';
import hero from '../assets/Hero.png';
import arrowLeft from '../assets/arrow-narrow-left.png';
import arrowRight from '../assets/arrow-narrow-right.png';
import chevron from '../assets/Chevron.png';
import backgroundCircle from "../assets/BackgroundCircle.png";

export default function OnBoarding() {
  return (
    <view className="background-on-boarding">
        <image src={backgroundCircle} className="background-circle" />

        <view className="header-on-boarding">
            <image src={zakatuLogo} className="zakatu-logo" />

            <image src={blink} className="blink" />

            <text className="title">Giving with Heart Growing in Faith</text>
        </view>

        <view className="hero">
            <image src={hero} className="image-hero" />

            <view className="slider">
                <view className="slider-bullet"></view>
                <view className="slider-bullet"></view>
                <view className="slider-active"></view>
            </view>
        </view>

        <view className="footer">
            <text className="text-footer">Give sincerely and see your faith grow. 
            Through compassion, discover inner peace.</text>

            <view className="start-container">
                <view className="arrow-left">
                    <image src={arrowLeft} className="arrow-left-icon" />
                </view>

                <view className="start-slider">
                    <view className="arrow-right">
                        <image src={arrowRight} className="arrow-right-icon" />
                    </view>
                    <text className="start-text">Start Now</text>
                    <image src={chevron} className="chevron" />
                </view>
            </view>
        </view>
    </view>
  )
}

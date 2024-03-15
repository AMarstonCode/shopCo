import "./styles.css"
import SubscribeButton from "./SubscribeButton";
import EmailInput from "./EmailInput";

const SubscribeSection = () => {
    return (
        <div className="subscribe-container">

            <h2 className="subscribe-banner">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="subscribe-inputs">
        <EmailInput/>
        <SubscribeButton/>
        </div>
        </div>
    );
};

export default SubscribeSection;
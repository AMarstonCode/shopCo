import "./styles.css"
import SubscribeButton from "../SWilliams/SubscribeButton"
import EmailInput from "../THalsell/EmailInput"


const SubscribeSection = () => {
    return (
        <div className="subscribe-container">
            <h2 className="subscribe-section">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
            <div className="subscribe-inputs">
            <EmailInput />
            <div className="s-btn"><SubscribeButton /></div>
            </div>
            

        </div>
        
        
    );
};

export default SubscribeSection;
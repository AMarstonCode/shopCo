import "./styles.css";
import ApplePay from "./applepayIcon.svg";
import GooglePay from "./googlepayIcon.svg";
import MasterCard from "./mastercardIcon.svg";
import Paypal from "./paypalIcon.svg";
import Visa from "./visaIcon.svg";

const CopyrightSection = () => {
  return (
    <div className="copyright-container">
      <p className="all-rights-reserved">Shop.CO © 2000-2023, All Rights Reserved.</p>
      <div className="payment-methods">
        <img src={Visa} />
        <img src={MasterCard} />
        <img src={Paypal} />
        <img src={ApplePay} />
        <img src={GooglePay} />
      </div>
    </div>
  );
};

export default CopyrightSection;

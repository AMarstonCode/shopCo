
import './styles.css'; // Import your CSS file if needed

const EmailInput = () => {
  return (
    <div>
      <input
        className="email-input"
        type="email"
        placeholder="Enter your email address"
        style={{ color: 'grey' }}
      />
    </div>
  );
};

export default EmailInput;

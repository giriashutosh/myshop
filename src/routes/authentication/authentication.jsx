
import SignUpForm from "../../components/sign-up-form/signUp";
import SignInForm from "../../components/sign-in-form/signIn";
import './authentication.styles.scss'
const Authentication = () => {


  return (
    <div className="authentication-container">
      
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;

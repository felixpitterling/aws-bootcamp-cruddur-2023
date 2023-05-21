import './SigninPage.css';
import React from "react";
import {ReactComponent as Logo} from '../components/svg/logo.svg';
import { Link } from "react-router-dom";
import FormErrors from 'components/FormErrors';

import { Auth } from 'aws-amplify';

// [TODO] Authenication
// import Cookies from 'js-cookie'
// import { Auth } from 'aws-amplify';
// import QRCode from 'qrcode.react';

//MFA VERSION
// export default function SigninPage() {

//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [mfa, setMfa] = React.useState('');
//   const [errors, setErrors] = React.useState('');
//   const [code, setCode] = React.useState('');
//   const [mfaactive, setMfaactive] = React.useState(false);
//   const [gotuser, setGotuser] = React.useState();


//   const onsubmitcode = async (event) => {
//     setErrors('')
//     event.preventDefault();

//     var dummyuser = gotuser;

//     if(mfaactive == false) {
//     Auth.verifyTotpToken(dummyuser, mfa)
//       .then(() => {
//         // don't forget to set TOTP as the preferred MFA method
//         Auth.setPreferredMFA(gotuser, 'TOTP');
//         // gotuser.attributes.setMfaactive("true");
//         console.log("hey")
//       })
//       .catch((e) => {
//         setErrors(e.message)
//       });
//     }

//     try {
//       await  Auth.confirmSignIn(gotuser, mfa, 'SOFTWARE_TOKEN_MFA') ;
//       localStorage.setItem("access_token", gotuser.signInUserSession.accessToken.jwtToken)
//       window.location.href = "/"
//     } catch (error) {
//       setErrors(error.message)
//     }

//   }

//   const onsubmit = async (event) => {
//     setErrors('')
//     event.preventDefault();

//     Auth.signIn(email, password)
//       .then(user => {
//         setGotuser(user);
        
//         try{
//         if(user.attributes["custom:mfa_active"]) {
//           setMfaactive(false);
//         } }
//         catch {
//           setMfaactive(true); 
//         }
   
        

//         Auth.setupTOTP(user).then((code) => {
//           console.log(code)
//           const str = "otpauth://totp/AWSCognito?secret=" + code;
//           setCode(str);
//           console.log(str);
//         });

//       })
//       .catch(error => {
//         if (error.code == 'UserNotConfirmedException') {
//           window.location.href = "/confirm"
//         }
//         setErrors(error.message)
//         console.log(error.message)
//       });

//     return false
//   }

//   const email_onchange = (event) => {
//     setEmail(event.target.value);
//   }
//   const password_onchange = (event) => {
//     setPassword(event.target.value);
//   }
//   const mfa_onchange = (event) => {
//     setMfa(event.target.value);
//   }

//   let el_errors;
//   if (errors) {
//     el_errors = <div className='errors'>{errors}</div>;
//   }

//   return (
//     <article className="signin-article">
//       <div className='signin-info'>
//         <Logo className='logo' />
//       </div>

//       {gotuser && mfaactive == false ? (
//         <QRCode value={code} />
//       ) : (
//         <></>
//       )}

//       <div className='signin-wrapper'>

//         {!gotuser ? (
//           <form
//             className='signin_form'
//             onSubmit={onsubmit}
//           >
//             <h2>Sign into your Cruddur account</h2>
//             <div className='fields'>
//               <div className='field text_field username'>
//                 <label>Email</label>
//                 <input
//                   type="text"
//                   value={email}
//                   onChange={email_onchange}
//                 />
//               </div>
//               <div className='field text_field password'>
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={password_onchange}
//                 />
//               </div>
//             </div>
//             {el_errors}
//             <div className='submit'>
//               <Link to="/forgot" className="forgot-link">Forgot Password?</Link>
//               <button type='submit'>Sign In</button>
//             </div>

//           </form>
//         ) : (
//           <form
//             className='signin_form'
//             onSubmit={onsubmitcode}
//           >
//             <h2>Sign into your Cruddur account</h2>
//             <div className='fields'>

//               <div className='field text_field username'>
//                 <label>MFA Code</label>
//                 <input
//                   type="mfa"
//                   value={mfa}
//                   onChange={mfa_onchange}
//                 />
//               </div>
//             </div>
//             {el_errors}
//             <div className='submit'>
//               <Link to="/forgot" className="forgot-link">Forgot Password?</Link>
//               <button type='submit'>Sign In</button>
//             </div>

//           </form>
//         )}


//         <div className="dont-have-an-account">
//           <span>
//             Don't have an account?
//           </span>
//           <Link to="/signup">Sign up!</Link>
//         </div>
//       </div>

//     </article>
//   );
// }

//NON-MFA VERSION


export default function SigninPage() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState('');

  const onsubmit = async (event) => {
    event.preventDefault();
    setErrors('')
    Auth.signIn(email, password)
    .then(user => {
      console.log('user',user)
      localStorage.setItem("access_token", user.signInUserSession.accessToken.jwtToken)
      window.location.href = "/"
    })
    .catch(error => { 
      if (error.code === 'UserNotConfirmedException') {
        window.location.href = "/confirm"
      }
      setErrors(error.message)
    });
    return false
  }

  const email_onchange = (event) => {
    setEmail(event.target.value);
  }
  const password_onchange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <article className="signin-article">
      <div className='signin-info'>
        <Logo className='logo' />
      </div>
      <div className='signin-wrapper'>
        <form 
          className='signin_form'
          onSubmit={onsubmit}
        >
          <h2>Sign into your Cruddur account</h2>
          <div className='fields'>
            <div className='field text_field username'>
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={email_onchange} 
              />
            </div>
            <div className='field text_field password'>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={password_onchange} 
              />
            </div>
          </div>
          <FormErrors errors={errors} />
          <div className='submit'>
            <Link to="/forgot" className="forgot-link">Forgot Password?</Link>
            <button type='submit'>Sign In</button>
          </div>

        </form>
        <div className="dont-have-an-account">
          <span>
            Don't have an account?
          </span>
          <Link to="/signup">Sign up!</Link>
        </div>
      </div>

    </article>
  );
}
import '../Login/login.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../user/Header/Header';
import { useRef, useEffect, useState } from 'react';
import loginSignupService from '../../service/loginSignupService';
import Swal from 'sweetalert2';

const NAME_REGEX = /[^0-9!@#$%^&*()]{2,22}/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


function Signup() {

  const lastNameRef = useRef();

  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);


  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);


  const [phoneNumber, setPhoneNumber] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);


  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);


  const [cfmPassword, setCfmPassword] = useState('');
  const [validcfmPassword, setValidcfmPassword] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    setValidFirstName(NAME_REGEX.test(firstName))
  },[firstName])

  useEffect(() => {
    setValidLastName(NAME_REGEX.test(lastName))
  },[lastName])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setValidPhoneNumber(phoneNumber.length >= 10)
  }, [phoneNumber])

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password))
    setValidcfmPassword(password === cfmPassword)
  }, [password, cfmPassword])


   const signupHandler = async (e) => {

     e.preventDefault();


    if(password === cfmPassword){
      let newUser = {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'phoneNumber': phoneNumber,
        'pw': password
      }
      
      console.log(newUser)

      loginSignupService.signup(newUser)
      .then((response) => {
          console.log(response)
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: '????ng K?? T??i Kho???n Th??nh C??ng',
            showConfirmButton: false,
            timer: 1000,
          });
          navigate('/login')
      }).then(function(data){
        console.log(data)
      }).catch(function(err){
        console.log('err: ' + err)
      })
    }else{
      console.log('password invalid')
    }

 
   }
  return (
    <>
      <Header />
      <div id='loginWrapper'>
        <div id='loginForm'>
          <div className='loginNav'>
            <Link to='/login'>????ng Nh???p</Link>
            <Link to='/signup'>????ng K??</Link>
          </div>
          <form action='/login' onSubmit={signupHandler}>

            <div className='inputGroup'>  
              <label htmlFor='lastName'>
                H???:
              <h6>
                <span className={validLastName || !lastName ?  'd-none' : 'd-block'}><i className="fa-solid fa-xmark"></i>Kh??ng h???p l???</span>
                <span className={validLastName ? 'd-block' : 'd-none'}><i className="fa-solid fa-check text-success fs-5"></i></span>
              </h6>
              </label>
              <input 
              id='lastName' 
              ref={lastNameRef} 
              type='text'
              onChange={(e) =>setLastName(e.target.value)}
              value={lastName} 
              aria-invalid={validLastName ? "false" : "true"}
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(false)}
              required />
            </div>

            <div className='inputGroup'>
            <label htmlFor='firstName'>
                T??n:
              <h6>
              <span className={validFirstName || !firstName ?  'd-none' : 'd-block'}><i className="fa-solid fa-xmark"></i>Kh??ng h???p l??? (nhi???u h??n 1 k?? t???)</span>
              <span className={validFirstName ? 'd-block' : 'd-none'}><i className="fa-solid fa-check text-success fs-5"></i></span>
              </h6>
            </label>
            <input 
            id='firstName' 
            type='text'
            onChange={(e) => setFirstName(e.target.value)} 
            value={firstName}
            required />
            </div>

            <div className='inputGroup'>
              <label htmlFor='email'>
                  Email:
                <h6>
                <span className={validEmail || !email ?  'd-none' : 'd-block'}><i className="fa-solid fa-xmark"></i>Email Kh??ng h???p l???</span>
                <span className={validEmail ? 'd-block' : 'd-none'}><i className="fa-solid fa-check text-success fs-5"></i></span>
                </h6>
              </label>
              <input 
              id='email' 
              type='email' 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required />
            </div>

            <div className='inputGroup'>
            <label htmlFor='phoneNumber'>
                S??? ??i???n tho???i:
              <h6>
              <span className={validPhoneNumber || !phoneNumber ?  'd-none' : 'd-block'}><i className="fa-solid fa-xmark"></i>Kh??ng h???p l???</span>
              <span className={validPhoneNumber ? 'd-block' : 'd-none'}><i className="fa-solid fa-check text-success fs-5"></i></span>
              </h6>
            </label>
              <input 
              id='phoneNumber' 
              type='tel' 
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              required />
            </div>

            <div className='inputGroup'>
            <label htmlFor='password'>
                M???t Kh???u:
              <h6>
              <span className={validPassword || !password ?  'd-none' : 'd-block'}><i className="fa-solid fa-xmark"></i> ??t nh???t 8 k?? t??? (bao g???m ch??? & s???)</span>
              <span className={validPassword ? 'd-block' : 'd-none'}><i className="fa-solid fa-check text-success fs-5"></i></span>
              </h6>
            </label>
              <input 
              id='password' 
              type='password' 
              onChange={(e) =>  setPassword(e.target.value)}
              value={password}
              required />
            </div>


            <div className='inputGroup'>
            <label htmlFor='passwordConfirm'>
                Nh???p l???i m???t kh???u:
              <h6>
              <span className={validcfmPassword || !cfmPassword ?  'd-none' : 'd-block'}><i className="fa-solid fa-xmark"></i> Kh??ng ????ng</span>
              <span className={validcfmPassword && cfmPassword ? 'd-block' : 'd-none'}><i className="fa-solid fa-check text-success fs-5"></i></span>
              </h6>
            </label>
              <input 
              id='passwordConfirm' 
              type='password' 
              onChange={(e) =>  setCfmPassword(e.target.value)}
              value={cfmPassword}
              required />
            </div>            

            <button className='signinBtn'>
              ????ng K??
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

import './login.css';
import { Link, } from 'react-router-dom';
import Header from '../user/Header/Header';
import { useRef, useState, useEffect } from 'react';
import loginSignupService from '../../service/loginSignupService';
import Swal from 'sweetalert2';

function Login() {

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMess, setErrMess] = useState('');

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  const forgetPass = async (e) => {
    const { value: email } = await 
    Swal.fire({
      title: 'Lấy Lại Mật Khẩu',
      input: 'email',
      inputLabel: 'Nhập địa chỉ email để lấy lại mật khẩu',
      inputPlaceholder: 'email@gmail.com',
    });
  
    if (email) {
      Swal.fire(`Mã xác nhận đã gửi đến địa chỉ email: ${email}`);
    }
  }
  


  const loginHandler = async (e) => {
    e.preventDefault();

    let user = new URLSearchParams({
      "email": email,
      "password": password,
    });

    loginSignupService.login(user)
      .then((response) => {
        if(response.status === 200){  
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Đăng Nhập Thành Công!',
            showConfirmButton: false,
            timer: 1000,
          });

          setTimeout(()=>{
            setLoginSuccess(true);
          }, 1000)

        }else{
          setErrMess(`*Sai email hoặc mật khẩu`)
          console.log(`Login faile`)
        }
        console.log(response);
        console.log(response.body);
      })
      .catch(function (err) {
        console.error('err: ' + err);
      });
    
  };

  return (
    <>
      <Header />
      {
        loginSuccess ? 
        (
          <div className="container">
            <h3 className='mt-4'>Thông tin tài khoản</h3>
            <div className="row">
                <div className="col">
                    <p>Thông tin cá nhân</p>
                    <div className="row">
                        <div className="col col-2">
                            <div className="avt">
                                <img src={require('../../assets/img/people/adminAvatar.jpg')} className=''></img>
                            </div>
                        </div>
                        <div className="col col-2">
                            <p>Họ và tên</p>
                            <p className="mt-4">Nickname</p>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control mb-3" value="Hoàng Hữu Nghĩa" readOnly/>
                            <input type="text" className="form-control" placeholder="Thêm Nickname" readOnly/>
                        </div>
                        <div className="row">
                          <button className="btn btn-outline-primary w-25 ms-auto">Cập nhật</button>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className='row align-items-baseline'>
                              <div className="col col-3">
                                  <p className='fw-bold'>Ngày sinh </p>
                              </div>
                              <div className="col col-9">
                                  <select name="" id="" className=" w-25 border border-dark me-3 btn">
                                      <option value="">1</option>
                                      <option value="">2</option>
                                      <option value="">3</option>
                                      <option value="">4</option>
                                      <option value="">5</option>
                                  </select>
                                  <select name="" id="" className=" w-25 border border-dark me-3 btn">
                                      <option value="">1</option>
                                      <option value="">2</option>
                                      <option value="">3</option>
                                      <option value="">4</option>
                                      <option value="">5</option>
                                  </select>
                                  <select name="" id="" className=" w-25 border border-dark me-3 btn">
                                      <option value="">2001</option>
                                      <option value="">2002</option>
                                      <option value="">2003</option>
                                      <option value="">2004</option>
                                      <option value="">2005</option>
                                  </select>
                                
                              </div>
                        </div>
                        <div className='row align-items-baseline'>
                              <div className="col col-3">
                                      <p className="pt-3 fw-bold">Giới tính </p>
                              </div>
                              <div className="col col-9">
                                  <div className="form-check ps-0">
                                          <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" readOnly/>
                                          <label 
                                              htmlFor="flexRadioDefault1"
                                              className=" me-3 px-2 py-4">Nam
                                          </label>
                                          <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" readOnly/>
                                          <label htmlFor="flexRadioDefault2"
                                              className=" me-3 px-2 py-4">Nữ
                                          </label>
                                          <input type="radio" name="flexRadioDefault" id="flexRadioDefault3" readOnly/>
                                          <label htmlFor="flexRadioDefault3"
                                              className=" me-3 px-2 py-4">Khác
                                          </label>
                                      </div>
                              </div>
                        </div>
                        <div className='row align-items-baseline'>
                              <div className="col col-3">
                                  <p className="pt-3 fw-bold">Quốc tịch </p>
                              </div>
                              <div className="col col-9">
                                  <div>
                                          <select name="" id="" className=" form-control">
                                              <option value="">Việt Nam</option>
                                              <option value="">Thái Lan</option>
                                              <option value="">Singapore</option>
                                          </select>
                                  </div>
                              </div>
                        </div>
                    </div>
                </div>
                  {/*  */}
                  <div className="col ">
                      <h5>Số điện thoại và Email</h5>
                      <div className="row mt-3">
                          <div className="col">
                              <div className="row ">
                                  <div className="col d-flex">
                                      <i className="fas fa-phone fs-5 mt-3" style={{color: 'var(--icon-collor--)'}}></i>
                                    <div className='ms-4'>
                                      <span className='fw-bold'>Số điện thoại</span>
                                      <p>070 7642 817</p>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col col-3">
                              <button className="btn btn-outline-primary ">Cập nhật</button>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col">
                                <div className="row ">
                                    <div className="col d-flex">
                                        <i className="fa-solid fa-envelope fs-5 mt-3" style={{color: 'var(--icon-collor--)'}}></i>
                                          <div className='ms-4'>
                                            <span className='fw-bold'>Địa chỉ email</span>
                                            <p>nghiahh@gmail.com</p>
                                          </div>
                                    </div>
                              </div>
                          </div>
                          <div className="col col-3">
                              <button className="btn btn-outline-primary">Cập nhật</button>
                          </div>
                      </div>
                      <h5>Bảo mật</h5>
                      <div className="row my-2">
                          <div className="col">
                              <div className="row">
                                  <div className="col d-flex">
                                      <i className="fas fa-lock fs-5" style={{color: 'var(--icon-collor--)'}}></i>
                                      <div className='ms-4'>
                                        <span className='fw-bold'>Mật Khẩu</span>
                                        <p>*************</p>
                                      </div>
                                  </div>
                            
                              </div>
                          </div>
                          <div className="col col-3">
                              <button className="btn btn-outline-primary">Cập nhật</button>
                          </div>
                      </div>
                      <h5>Liên kết mạng xã hội </h5>
                      <div className="row my-2">
                          <div className="col">
                              <div className="row d-flex align-items-baseline">
                                  <div className="col col-1">
                                      <i className="fab fa-facebook fs-3"  style={{color: 'var(--icon-collor--)'}}></i>
                                  </div>
                                  <div className="col">
                                      <p>Facebook</p>
                                  </div>
                                  <div className="col col-3">
                                      <button className="btn btn-outline-primary">Cập nhật</button>
                                </div>
                              </div>
                          </div>
                      </div>
                      <div className="row my-2">
                          <div className="col">
                              <div className="row d-flex align-items-baseline">
                                  <div className="col col-1">
                                      <i className="fab fa-google fs-3"  style={{color: 'var(--icon-collor--)'}}></i>
                                  </div>
                                  <div className="col">
                                      <p>Google</p>
                                  </div>
                                  <div className="col col-3">
                                      <button className="btn btn-outline-primary">Cập nhật</button>
                                </div>
                              </div>
                          </div>
                      </div>

                  </div>
            </div>
          </div>
        ) 
        : (
          <div id='loginWrapper'>
            <div id='loginForm'>
              <div className='loginNav'>
                <Link to='/login'>Đăng Nhập</Link>
                <Link to='/signup'>Đăng Ký</Link>
              </div>
              <span className='d-block mt-3 text-danger fw-bold'>{errMess}</span>
              <form
                onSubmit={loginHandler}
                readOnly
              >
                <div className='inputGroup'>
                <input 
                id='email' 
                placeholder='Nhập email' 
                ref={emailRef}
                type='email' 
                onChange={(e) => {
                  setEmail(e.target.value)
                  }} 
                value={email}
                  required 
                  />
                </div>
                
                <div className='inputGroup'>
                <input
                  id='password'
                  placeholder='Mật Khẩu'
                  type='password'
                  onChange={(e) => {
                    setPassword(e.target.value)
                    }} 
                  required
                />
                </div>
                <button className='loginBtn'>
                  Đăng Nhập
                </button>
              </form>
              <div className='loginFooter'>
                <button className='forgetPass' onClick={forgetPass}>
                  Quên Mật Khẩu?
                </button>
              </div>
            </div>
          </div>

        )}
    </>
  );
}

export default Login;

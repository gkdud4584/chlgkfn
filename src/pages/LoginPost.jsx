import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import './Register.css'
import sha256 from "crypto-js/sha256";

async function hashString(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

// 유효성 검사 
const USER_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function LoginPost () {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // const { userList } = useUserState();
    // const dispatch = useUserDispatch()

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(USER_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
    }, [password])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(email);
        const v2 = PWD_REGEX.test(password);
        const v = password + email;

        hashString(v).then(h => {
          console.log(h);
          console.log(sha256(v).toString());
        });
        const user = sha256(v).toString();


        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }

        //console.log(userInfo);
        // post 보내기 
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users',
                JSON.stringify({ user }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            if ( localStorage.getItem('email') === email && localStorage.getItem('password')===password) { 
              // <section>
              //     <h1>로그인 성공! </h1>
              //     <p>
              //         <a href="/"><button>Login</button></a>
              //     </p>
              // </section>
              document.location.href='/'
              alert('정답')
             } else {
            alert('실패')
             }
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            if (!localStorage.getItem('email')
            || !localStorage.getItem('password')) {
              alert('등록되지 않았습니다');
              setSuccess(false);

              return; 
            }
            else {
              setSuccess(true);
            }
            // dispatch({
            //   type: "LOGIN",
            //   email: user,
            // });

            //clear state and controlled inputs
            //need value attrib on inputs for this
            setEmail('');
            setPassword('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <div>
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            올바른 이메일 주소를 입력해주세요.<br />
                        </p>


                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8글자 이상 24글자 이하로 입력해주세요.<br />
                          
                        </p>

                        <button disabled={!validEmail || !validPwd ? true : false}>Login</button>
                    </form>
                    <p>

                        Already registered?
                        <span className="line">
                            {/*put router link here*/}
                            <a className="line-a" href="/register">Sign In</a>
                        </span>
                    </p>
                </section>
            
        </div>
    )
}



export default LoginPost;
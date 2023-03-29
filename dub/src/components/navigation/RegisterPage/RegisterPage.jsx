import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../../api/axios';
import { Link } from "react-router-dom";

// 3 글자부터 가능 
const USER_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
//const USER_REGEX = /[^?a-zA-Z0-9/]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; 
//const PWD_REGEX = /^[a-z0-9_]{4,20}$/;
//const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const STUNUM_REGEX = /[0-9]/g;
const ROLE_REGEX = /[a-zA-Z0-9]/;

const REGISTER_URL = '/app/member/sign-up'

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

const [username, setUser] = useState('');
const [validName, setValidName] = useState(false);
const [userFocus, setUserFocus] = useState(false);

const [pwd, setPwd] = useState('');
const [validPwd, setValidPwd] = useState(false);
const [pwdFocus, setPwdFocus] = useState(false);

/*
const [matchPwd, setMatchPwd] = useState('');
const [validMatch, setValidMatch] = useState(false);
const [matchFocus, setMatchFocus] = useState(false);*/


const [email, setEmail] = useState('');
const [validEmail, setValidEmail] = useState(false);
const [EmailFocus, setEmailFocus] = useState(false);


const [stunum, setStunum] = useState('');
const [validStunum, setValidStunum] = useState(false);
const [StunumFocus, setStunumFocus] = useState(false);

const [role, setRole] = useState('');
const [validRole, setValidRole] = useState(false);
const [RoleFocus, setRoleFocus] = useState(false);


const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);

useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    setValidName(USER_REGEX.test(username));
}, [username])

useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
}, [email])

useEffect(() => {
    setValidStunum(STUNUM_REGEX.test(stunum));
}, [stunum])

useEffect(() => {
    setValidRole(ROLE_REGEX.test(role));
}, [role])

useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
}, [pwd])

/*
useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
}, [pwd, matchPwd])*/

useEffect(() => {
    setErrMsg('');
}, [username, pwd, email, stunum, role])

const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = STUNUM_REGEX.test(stunum);
    const v5 = ROLE_REGEX.test(role);

    if (!v1 || !v2 || !v3 || !v4 || !v5 ) {
        setErrMsg("Invalid Entry");
        return;
    }
    try {
        const response = await axios.post(REGISTER_URL,
            JSON.stringify({ username, pwd, email, stunum, role }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        // TODO: remove console.logs before deployment
        console.log(JSON.stringify(response?.data));
        //console.log(JSON.stringify(response))
        setSuccess(true);
        //clear state and controlled inputs
        setUser('');
        setPwd('');
        //setMatchPwd('');
        setEmail('');
        setStunum('');
        setRole('');

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
    <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="/home">Sign In</a>
                </p>
            </section>
        ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        Username:
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !username ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={username}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    
                    <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br />
                        3 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>

                    <label htmlFor="password">
                        Password:
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>


                    <label htmlFor="email">
                        Email:
                        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                    <p id="confirmnote" className={ EmailFocus && !validEmail ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        input the email
                    </p>  

                    <label htmlFor="stunum">
                        stunum:
                        <FontAwesomeIcon icon={faCheck} className={validStunum ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validStunum || !stunum ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="stunum"
                        id="stunum"
                        onChange={(e) => setStunum(e.target.value)}
                        value={stunum}
                        required
                        aria-invalid={validStunum ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setStunumFocus(true)}
                        onBlur={() => setStunumFocus(false)}
                    />
                    <p id="confirmnote" className={ StunumFocus && !validStunum ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        input the stunum
                    </p>   

                    <label htmlFor="role">
                        role:
                        <FontAwesomeIcon icon={faCheck} className={validRole ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validRole || !role ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="role"
                        id="role"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                        required
                        aria-invalid={validRole ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setRoleFocus(true)}
                        onBlur={() => setRoleFocus(false)}
                    />
                    <p id="confirmnote" className={ RoleFocus && !validRole ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        “USER” or “ADMIN” or “CLUB” 
                    </p>   

                                         
                        <button disabled={!validName || !validPwd || !validEmail || !validStunum || !validRole ? true : false}>Sign Up</button>
                </form>
                <p>
                    Already registered?<br />
                    <span className="line">
                        <Link to="/">Sign In</Link>
                    </span>
                </p>
            </section>
        )}
    </>
)
}

export default Register;
import React, { useState } from "react";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";

const Login = (props) => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const writeAccount = (e) => {
    setAccount(e.target.value);
  };

  const writePassword = (e) => {
    setPassword(e.target.value);
  };

  const data = {
    account: account,
    password: password,
  };

  const showPasswordInput = () => {
    setShowPassword(!showPassword);
  };

  const sendForm = () => {
    if (!account || !password) {
      setValidate("Bạn cần điền đầy đủ tài khoản và mật khẩu");
    } else {
      setValidate(null);
      props.homePage("home");
    }
  };
  return (
    <div className="flex flex-col justify-center bg-slate-300 items-center	font-sans rounded-xl border-slate-300 border-2 p-8	mt-[12em]">
      <span className="text-2xl font-bold">ĐĂNG NHẬP</span>
      <div className="my-2.5 w-full	">
        <span>Tài khoản:</span>
        <input
          type="text"
          className="border-solid rounded "
          value={account}
          onChange={writeAccount}
        />
      </div>
      {showPassword ? (
        <div className="flex my-2.5 w-full	">
          <span>Mật khẩu:</span>
          <input
            type="password"
            className="border-solid rounded "
            value={password}
            onChange={writePassword}
          />
          <LiaEyeSlashSolid onClick={showPasswordInput} />
        </div>
      ) : (
        <div className="flex my-2.5 w-full	">
          <span>Mật khẩu:</span>
          <input
            type="text"
            className="border-solid rounded "
            value={password}
            onChange={writePassword}
          />
          <LiaEyeSolid onClick={showPasswordInput} />
        </div>
      )}

      <span className="text-red-500">{validate}</span>
      <button
        className="rounded border-neutral-400 bg-stone-400 p-1.5"
        onClick={sendForm}
      >
        Đăng nhập
      </button>
    </div>
  );
};

export default Login;

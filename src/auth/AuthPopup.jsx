import React, { useState } from "react";
import ForgetPassword from "./ForgetPassword";
import VerifyCode from "./VerifyCode";
import Newpassword from "./Newpassword";

const AuthPopup = ({ onClose }) => {
  const [step, setStep] = useState("forgot"); // forgot → verify → new

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {step === "forgot" && <ForgetPassword goNext={() => setStep("verify")} />}
        {step === "verify" && <VerifyCode goNext={() => setStep("new")} />}
        {step === "new" && <Newpassword onClose={onClose} />}
      </div>
    </div>
  );
};

export default AuthPopup;
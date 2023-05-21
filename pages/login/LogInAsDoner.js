import { Fragment, useState } from 'react'
import { LoginDonor } from '../../component/Login/LoginDonor'
export default function LogInAsDoner() {
  
  const handleLogin= async (DonorLog)=> {
        console.log(DonorLog);

    try {
        const response = await fetch("https://e03c-83-244-2-162.ngrok-free.app/donor/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(DonorLog),
        });
        if (response.status === 200) {
          // إعادة تهيئة حالة الرسالة بعد التخزين
          alert("تم الدخول بنجاح")
        }
        else {
          alert("فشل الدخول الرجاء التحقق من البيانات ")
        }
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error);
    }
};
    return (
      <Fragment>
        <LoginDonor onAddDonorLog={handleLogin}/>
      </Fragment>
    )
};

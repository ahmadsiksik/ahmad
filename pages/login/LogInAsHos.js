import { Fragment, useState } from 'react'
import { LoginHos } from '../../component/Login/LoginHos'
import { useRouter } from 'next/router';

export default function LogInAsHos() {
  const history = useRouter();

  const handleLogin= async (DonorLog)=> {
        console.log(DonorLog);

    try {
        const response = await fetch("https://3f0f-83-244-77-29.ngrok-free.app/hospital/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(DonorLog),
        });
        if (response.status === 200) {
          // إعادة تهيئة حالة الرسالة بعد التخزين
          history.replace('/HomeHos');
          alert("تم الدخول بنجاح")
        }
        else {
          alert(" فشل الدخول الرجاء التاكد من البيانات")
        }
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error);
    }
};
    return (
      <Fragment>
        <LoginHos onAddDonorLog={handleLogin}/>
      </Fragment>
    )
};

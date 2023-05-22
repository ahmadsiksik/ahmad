import { Fragment, useState } from 'react'
import { LoginDonor } from '../../component/Login/LoginDonor'
import { useRouter } from 'next/router';
export default function LogInAsDoner() {
  const [Temp,SetTemp] = useState('');
  const history = useRouter();
  var response;

  const handleLogin= async (DonorLog)=> {
        console.log(DonorLog);

    try {
            response = await fetch("https://3f0f-83-244-77-29.ngrok-free.app/donor/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(DonorLog),
        });
        SetTemp(response.status);
        if (response.status === 200) {
          // إعادة تهيئة حالة الرسالة بعد التخزين
          history.replace('/');
          alert("تم الدخول بنجاح")
        }
        else {
          alert("فشل الدخول الرجاء التحقق من البيانات ")
        }
        data = await response.json();

    } catch (error) {
        console.error(error);
    }

};
    return (
      <Fragment>
        <LoginDonor onAddDonorLog={handleLogin} Res={Temp} />
      </Fragment>
    )
};

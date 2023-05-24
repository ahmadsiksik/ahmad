import { Fragment } from 'react'
import { RegesterHos } from '../../component/Regester/RegesterHos'
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function RegesterAsHos() {
  const history = useRouter();

  async function handleSignup(Donor) {
    console.log(Donor);
   
    try {
        const response = await fetch("https://f81b-83-244-2-162.ngrok-free.app/hospital/signup/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Donor),
        });
     
        if (response.status === 200) {
          // إعادة تهيئة حالة الرسالة بعد التخزين
          history.replace('/login/LogInAsHos');
          alert("تم انشاء حساب بنجاح")
        }
        else {
          alert("تم فشل التسجيل الرجاء ادخال اسم جديد")
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
       console.error(error);
    }
};
    return (
      <Fragment>
        <RegesterHos onAdd={handleSignup}/>
      </Fragment>
    )
};
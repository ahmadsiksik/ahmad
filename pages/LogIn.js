import { Fragment, useState } from 'react'
import { Login } from '../component/Login/Login'
export default function LogIn() {
  const [error, setError] = useState(null);


  async function handleLogin(DonorLog) {
        console.log(DonorLog);

    try {
        const response = await fetch("https://573a-176-67-58-22.ngrok-free.app/donor/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(DonorLog),
        });
        if (!response.ok) {
          throw new Error('حدث خظأ الرجاء ادخل البيانات مره اخره!');
        }
        const data = await response.json();
        console.log(data);

    } catch (error) {
      setError(error.message);
        console.error(error);
    }
};
    return (
      <Fragment>
        <Login onAddDonorLog={handleLogin}/>
      </Fragment>
    )
};

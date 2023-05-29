import { Fragment, useEffect,useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import classes from './Header.module.css'
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const[LoginDonor,setLoginDonor]=useState(false);
    const[LoginHos,setLoginHos]=useState(false);

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        if(isAuth==="Donor"){
            setLoginDonor(true)
          }
          if(isAuth==="Hos"){
            setLoginHos(true)
          }
      }, []);

      
    return (
        <Fragment>
            <div>
            <div  className={classes.bg_image} data-aos={"fade-left"} >

            <h1 className={classes.header} ><b>".تبرعك بالدم يمكن أن يكون شريان الحياة لشخص محتاج. كن بطلاً وامنح الحياة"</b></h1>

            </div>
    
            {!LoginDonor &&!LoginHos &&

            <h2>مرحبا بكم في موقع التبرع بالدم الالكتروني</h2>
} 
            {!LoginDonor && !LoginHos&&

            <div className={classes.flexContainer}>

                <div data-aos={"fade-right"} className={classes.card}>
               <div className={classes.container}>
                        <h4><b> انشاء حساب </b></h4>
                        <p className={classes.p}>  <Link href='/Regester/RegesterAsDoner'>اذا كنت لا تملك حساب اضغط هنا لانشاء حساب جديد</Link></p>
                        </div>
                </div>
    
                <div data-aos={"fade-left"} className={classes.card}>
                    <div className={classes.container}>
                        <h4><b>تسجيل دخول</b></h4>
                        <p className={classes.p}><Link href='/login/LogInAsDoner'>اذا كنت تملك حساب اضغط هنا لتسجيل الدخول</Link></p>
                    </div>
                </div>
                </div>
}
{ LoginDonor &&LoginHos &&
<div className={classes.donation_terms}>
  <h2>شروط التبرع</h2>
  <p className={classes.center}>الرجاء قراة البنود والشروط التي تتطلب التبرع </p>
  <ul className={classes.right}>
    <li>الشرط الاول : ان يكون المتبرع بحالة صحيه جيدة وان لا يعاني من اي امراض مزمنه</li>
    <li>الشرط الثاني : ان يكون عمر المتبرع من 18-65 سنة</li>
    <li>الشرط الثالث : ان ا يقل وزن المتبرع عن 50 كجم</li>
    <li>الشرط الرابع : ان يتراوح ضغط الدم من 50/100 الى 90/180</li>
    <li>الشرط الخامس : ان لا تزيد درجة حرارة عن 37.5 م</li>
  </ul>
</div>
}

            </div>
        </Fragment>
    )
}
export default Header;







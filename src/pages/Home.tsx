import $ from "jquery";
import '@fortawesome/fontawesome-free/css/all.min.css';
import useRunOnce from "../hook/useRunOnce";
import persen from '../image/testImage.png';
import icon from '../image/icon.jpg';
import me from '../image/me.jpg';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
    const {state : stateLocation} = useLocation();
    const handelLocation =() =>
        {
            switch(stateLocation)
            {
                case "home":
                    $(document).scrollTop(0);
                    break;
                    case "about":
                        $(document).scrollTop($("#about").offset()?.top!);
                    break;
                    case "samples":
                        $(document).scrollTop($("#samples").offset()?.top!);
                    break;
                    case "social":
                        $(document).scrollTop($("#social").offset()?.top!);
                    break;
            }
        }
                    useEffect(() =>
                    {
                        handelLocation()
                    },[stateLocation])
                        useRunOnce({
                            fn: () => {
                                $(document).ready(()=>
                {
                    let cmpAnimate = 0;
                    $(".header-svg").animate({right : 50}, 1000)
                    $(".header-img").animate({bottom : 0} , 1000);
                    $(".custom-shape-divider-top-1713630662 svg").animate({height : "8vh"} , 1000);
                    $(window).on("scroll" ,() => {
                        const windowTop : any = $(window).scrollTop()
                        switch(true)
                        {
                            case windowTop >= 500 :
                                if(cmpAnimate === 0){
                                    $(".about-img").animate({opacity : 1} , 1000);
                                    $(".about-text").animate({ borderbottomrightradius : 50 , borderTopLeftRadius : 50});
                                        cmpAnimate = 1;
                                }
                                break;
                            }
                    })
                })
                }
    });
    return (
    <div className=" main-home ">
        {/* header */}
        <div className="bg-purper main-header row d-flex align-items-center" >
            <div className="col-lg-7 col-sm-12 header-images align-self-end">
                <img src={persen} className="header-img"/>
                <svg id="el9nQBWTVuK1" className="header-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="100" ry="100" transform="translate(100 100)" fill="rgba(88,105,178,0.4)" stroke-width="0"/></svg>
            </div>
            <div className="col-lg-5 col-sm-12 text-lg-end text-center row" style={{marginRight : "20px!important"}}>
                <h1>سلام! من <strong className="xl-size">حامد رجبی فرجاد</strong> هستم </h1>
                <h3 className="mt-3 col-lg-9 col-11 mx-auto mx-lg-0" style={{fontSize : "1.5em"}}>سلام! من حامد رجبی فرجاد هستم. خوش آمدید به رزومه‌ی من. اینجا مکانی است که تجربیات و دانش‌هایم در زمینه‌های مختلف برنامه‌نویسی و توسعه وب را با شما به اشتراک می‌گذارم. امیدوارم که این اطلاعات برای شما مفید باشد.در صورت داشتن هر گونه سوال یا پیشنهاد، با من تماس بگیرید.</h3>
            </div>
        </div>
        {/* separator header */}
        <div className="position-relative">
            <div className="custom-shape-divider-top-1713630662 mb-5">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
        {/* about me */}
        <div id="about" className="row about">
            <div className=" col-lg-5 col-12  position-relative row d-flex justify-content-center" >
                    <img src={me} className="about-img position-absolute col-lg-4 col-12"/>
                    </div>
                <div className="  col-lg-7 col-12 position-relative  ">
                <div className="about-text d-flex justify-content-center row align-items-center ">                
                    <div className="col-lg-4 col-12 about-text-block"></div>
                    <div className="col-lg-8 col-11 text-center">
                        <h1 className="display-3 my-4 fw-bold">درباره من</h1>
                        <span className="fs-2">
                            برنامه‌نویس وب با بیش از 3 سال تجربه در توسعه و طراحی وب‌سایت‌های پویا و جذاب هستم. تسلط دارم بر زبان‌های HTML، CSS، JavaScript، PHP و TypeScript. همچنین، با فریمورک‌ها و کتابخانه‌های معتبر مانند Bootstrap، jQuery و React آشنایی دارم. استفاده از hook‌هایی نظیر Redux Toolkit، React Query، Axios، React Router Dom و useReducer را به خوبی می‌دانم. همچنین، با کار با Custom Hooks و هوک‌های ری‌اکت و ساخت کامپوننت‌ها آشنایی دارم و توانایی کار با وردپرس و افزونه‌های آن مانند Elementor و WooCommerce را دارم. توانایی ارتقاء و بهینه‌سازی وب‌سایت‌ها و نرم‌افزارها برای بهبود تجربه کاربری را دارم. همچنین، توانایی حل مسائل پیچیده و ارائه راه‌حل‌های نوآورانه به مشکلات فنی را دارم. همچنین با زبان‌های دیگری مانند C#، Dart، Flutter، Blazor و MySQL (CRUD) نیز آشنایی دارم.
                        </span>
                    </div>
                </div>
            
            </div>
        
        </div>
        {/* Work samples */}
        <div id="samples" className="position-relative border-purper-samples row d-flex justify-content-center overflow-hidden ">
            <div className="row d-flex justify-content-center samples-item col-lg-9 col-11">
                    <div className="col-xl-4 col-lg-9 col-sm-12 samples-item-text d-flex justify-content-center p-3">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="display-5 text-center "> <img className="rounded rounded-circle" src="data:image/png;base64,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" /> نمونه کار های من  </h3>
                            <p>خوش آمدید به بخش نمونه کارهای من! در اینجا، همه‌ی پروژه‌ها با استفاده از تمام دانش و تجربه‌ای که در اختیار دارم، با دقت و اهتمام بالا ایجاد شده‌اند. هر پروژه، با تمرکز بر یک زمینه خاص، به صورت کامل پیاده‌سازی شده و به نتیجه‌ای عالی و کاربردی دست یافته است.<br />
                                در توسعه این پروژه‌ها، از تکنولوژی‌های مدرن و پیشرفته‌ای استفاده شده است. از جمله این تکنولوژی‌ها می‌توان به React، Redux Toolkit، React Query، jQuery، TypeScript، JavaScript، Reducer، Axios، و React Router Dom اشاره کرد. با استفاده از این ابزارها و فریم‌ورک‌ها، توانسته‌ام تا به سرعت و با کیفیت بالا، پروژه‌هایی متناسب با نیازهای مخاطبانم را ارائه دهم.<br />
                                همچنین، تلاش شده است که هر پروژه با استفاده از رویکردهای به روز و بهینه‌سازی‌های لازم، تجربه‌ی کاربری بی‌نظیری را ارائه دهد و نیازهای مخاطبان را به بهترین شکل ممکن برآورده کند.<br />
                                امیدوارم که در مشاهده‌ی نمونه کارهایم، لذت ببرید و از کیفیت و توانایی‌های فنی آنها مطمئن شوید. برای کسب اطلاعات بیشتر یا ارتباط با من، می‌توانید با من <a className="text-primary" style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">تماس</a> بگیرید.<br />
                                با احترام، حامد رجبی فرجاد
                            </p>                    
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-3 col-sm-12 d-none d-lg-block samples-item-img"></div>
            </div>
            <div className="row d-flex flex-row-reverse justify-content-center samples-item col-lg-9 col-11">
                    <div className="col-xl-4 col-lg-9 col-sm-12 samples-item-text d-flex justify-content-center p-3 ">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="display-5 text-center "> <img className="rounded rounded-circle"src="data:image/png;base64,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" /> فروشگاه</h3>
                            <p >
                                این پروژه، به طور کامل بر اساس یک API ساخته شده است که با استفاده از Axios، اطلاعات محصولات را دریافت می‌کند. یکی از ویژگی‌های اصلی این پروژه، عدم نیاز به دیتابیس محلی است، که باعث سرعت بالا و سادگی در استفاده می‌شود.<br />
                                برای مدیریت وضعیت برنامه و مدل‌سازی داده‌ها، از Redux Toolkit استفاده شده است. این ابزار به من امکان می‌دهد  تغییرات در وضعیت داده‌ها به صورت فوری در تمامی بخش‌های برنامه اعمال می‌شود و تجربه کاربری بهبود می‌یابد.<br />
                                همچنین، با استفاده از React Router Dom، به صورت دینامیک کاربران را به صفحه‌ی محصولات هدایت می‌کنیم. این به کاربران امکان می‌دهد به راحتی بین محصولات جستجو کنند و به آسانی به اطلاعات مورد نیاز دسترسی پیدا کنند.<br />
                            </p>                    
                            <div className="my-4 row">
                                <span className="w-auto m-2">با استفاده از:</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">React</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">TS</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">Redux Toolkid</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">Axios</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">React Router Dom</span>
                            </div>
                            <Link to="/stor">
                            <button className="btn btn-success btn-lg p-2">بازدید از صفحه</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-3 col-sm-12 samples-item-img "><div className="bg-img bg-scroll  url-stor"></div></div>
            </div>
            <div className="row justify-content-center samples-item col-lg-9 col-11 ">
                    <div className="col-xl-4 col-lg-9 col-sm-12 samples-item-text d-flex justify-content-center p-3">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="display-5 text-center "> <img className="rounded rounded-circle" src="data:image/png;base64,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" /> پروژه Api</h3>
                            <p>
                                در این پروژه، از یک Custom Hook بسیار قدرتمند استفاده شده است که با استفاده از React Query و Axios طراحی شده است. این Custom Hook به من امکان می‌دهد که به راحتی و با کارآیی بالا، با API ها ارتباط برقرار کنم و داده‌های مورد نیاز را دریافت کنم.<br />
                                یکی از ویژگی‌های برجسته این Custom Hook، دوراگونالیتی آن است. این به این معناست که با انعطاف پذیری بالا، می‌توانید آدرس URL مورد نظر خود را به آن ارسال کنید و داده‌های متفاوتی را دریافت کنید. همچنین، این Custom Hook قابلیت برگرداندن مقادیر مختلفی مانند داده، خطا، و وضعیت درخواست را فراهم می‌کند.<br />
                                استفاده از React Query به من امکان می‌دهد تا به صورت همزمان و بهینه از داده‌ها استفاده کنم و تجربه کاربری را بهبود بخشم. با این رویکرد مدرن، داده‌ها به صورت خودکار به روز رسانی می‌شوند و اطلاعات در زمان واقعی به کاربران ارائه می‌شود.<br />
                            </p>                    
                            <div className="my-4 row">
                                <span className="w-auto m-2">با استفاده از:</span> 
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">Custom Hook</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">TS</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">React</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">Axios</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">React Query</span>
                            </div>
                            <Link to="/api">
                            <button className="btn btn-success btn-lg p-2">بازدید از صفحه</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-3 col-sm-12 samples-item-img "><div className="bg-img url-rest-api"></div></div>
            </div>
            <div className="row d-flex flex-row-reverse justify-content-center samples-item col-lg-9 col-11">
                    <div className="col-xl-4 col-lg-9 col-sm-12 samples-item-text d-flex justify-content-center p-3">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="display-5 text-center "> <img className="rounded rounded-circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFcElEQVR4nO2c+U9bRxDH8186TdNWqhr1+KFRqqZRfuiRSlWr9FBVVT2k9JgAaskB6dochthxwA7mdCBAMMHhsAMYYjDgcOOp5tUg37UJfrPPnpHmFyRW3u9nd3Z3dvadUmBDcZs2Gpzi/gHiNgGiNB4IMkOAH4IAAX7hBQjwiy1AgF9gAQL8ogoQ4BdSgAC/eAIE+AUTIMAvkgABfmEEiAZiKA1cUifAD0GAAL/wAgT4xRYgwC+wAAF+UQUI8AspQIBfPAEC/IIJEOAXSYAAvzA1C6Sl/jUc6v4RJwKN2H/vW7RfP8MuSs0Caf/7LVxbmcV0W14YxZaG19mFqUkg0cgQ5rOxgTp2YaoaiKPuVbz3z4fY9tebR38LeH/CQhaNDBWdVfcdl01zj/0Stja8UT1ABrt+wN2dRErqJM4EO9HVdD7tb7kWCXXntNNx8x1cDA9iMplEs+1gfxdD463oqD9rbSBdjsuYTO7ndHB/f6eoAD7nlYx2aGYl1heR2xbDA6jgtHWBhMYcZXc6HOrKaWdypBl1Mf/dr6wLZCbYUVZntzZXM9aZQ1+LTaMuNj3htC6QPvfVsjrb67qat53E+gLqYvlmsGWAkM9NeV66owuzfaiLVXpLXnEg9uuvYOSp91ihSqXc2/Ypy+4q23a2141tt6WBlAKlUKhSaT7iv5Z3x2YmDBoYVXNSJygUll5mkXQ3X8DJkSYD7rOZHlOcfjOFqUrPDNOBpB8U52d7MRoJ4EPfLxXf1yuLOXu2V9wmQJTGA0FmCPBDECDAL7y2QGjnRCmWpfkRnBq1Y8fNd9lFqVkgHnURd7c3MrbBm4llI9XOLUzNAaG7hfXVcN5D2NSonV2YqgZCt24PH/yK/rtfHhUxFEupRyOBghDpVD/aBzg+2GCKP+r9PXVCP10dQEJjLcZN4aHFn4ew3/Nd0TTIdJ7TO4my9SKGXLay/AQ7b71nbSB97q/L7vjBwR6671zIaMfVfB73djeR29bj4Ypf42p1QUVG9VnZ7cw+caMuFvD9bF0gU2P2sjobjz1FR11uodxG/BnqYjQ4LAuEymhKTZlTqPKoi3nb2YhHUBezNBDyR71/ZCzqhexxnlClUj476UJdjOrJLA2EnLapxaBQqCpW0+tqel+PRX01bBT9WR7If1D+zAulWKhSWdvezcRz5LKVpaD1t73ZPuL/zagCPLRk8iB1SVXa/zvqzxp1UQTXrIMh/WZv68fVczDMdjpj0JUorRmlzAxVY86e7RW3CRCl8UCQGQL8EAQI8AuvLZA+9zdGMTW9F4lFJ9DX/hm7KDULhLLBtPXNfjvisV9iF6bmgDgbzxnlmRz5IqWxm1BsfQaHe64ZIgeHbx8VMczP+Mu+MXTf+cC4aYxM+0wtJR0faKiOUlJKpceijzPEprXi/9LyE4EbOW3RiZmz2JqKMcxY3yoKhGbGsUr+G89ltONrv6LFcwSCYunnCMe56Ru4/31OOwtz8mDnRIAEh2+VBWN+xp+3HXnSdkIzhBbwYu/Rs0OVMytUHXpcHn2eXNh64Pwc9/e2jxWqVMrpkY4uRrVlll1DSoVSKFSpjA8H8L/EXZjrr56DYSEoO1trBUOVSvOOG28bgnDstih7QB9BsPynNbLd2/YJvthYOuro9uYqdhu3caW30W72x2fUR6Z+Lsr01AmNMgLT0/mFKSNOWczZs73iNgGiNB4IMkOAH4IAAX7hBQjwiy1AgF9gAQL8ogoQ4BdSgAC/eAIE+AUTIMAvkgABfmEEiAZiKA1cUifAD0GAAL/wAgT4xRYgwC+wAAF+UQUI8AspQIBfPAEC/IIJEOAXSYAAvzACRAMxlAYuqRPghyBAgF/4QkD+BaXvW7bbFw1fAAAAAElFTkSuQmCC" /> To-Do list</h3>
                            <p>
                                این پروژه به شما این امکان را می‌دهد که به سادگی و به صورت کارآمد، لیست کارهای روزانه‌تان را مدیریت کنید. با استفاده از چیزهای ساده مانند useState و jQuery، این پروژه نشان می‌دهد که حتی با ابزارهای پایه و ابتدایی، می‌توانید برنامه‌های کاربردی واقعی و مفیدی ایجاد کنید.<br />
                                از این TodoList می‌توانید به راحتی کارهای روزمره‌تان را به صورت لیستی اضافه کرده و آنها را مدیریت کنید. امکاناتی مانند اضافه کردن، حذف کردن و ادامه دادن به کارها به شما ارائه شده است تا به بهترین شکل ممکن بتوانید تمرکز و موفقیت خود را افزایش دهید.<br /> 
                                استفاده از jQuery در این پروژه، به شما امکان می‌دهد تا به سادگی و به شیوه‌ای کارآمد، با عناصر صفحه تعامل کنید و تجربه کاربری را بهبود بخشید. این پروژه نشان می‌دهد که با ترکیب استفاده از تکنولوژی‌های پایه، می‌توانید برنامه‌های کاربردی و جذابی را ایجاد کنید.<br />
                            </p> 
                            <div className="my-4 row">
                                <span className="w-auto m-2">با استفاده از:</span> 
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">React</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">JS</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">Use State</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">jQuery</span>
                            </div>
                            <Link to="/todolist">
                            <button className="btn btn-success btn-lg p-2">بازدید از صفحه</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-3 col-sm-12 samples-item-img "><div className="bg-img url-todolist"></div></div>
            </div>
            <div className="row justify-content-center samples-item col-lg-9 col-11">
                    <div className="col-xl-4 col-lg-9 col-sm-12 samples-item-text d-flex justify-content-center p-3">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="display-5 text-center "> <img  className="rounded rounded-circle"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHEUlEQVR4nO2diVMURxSH+S83MdGyNImNikA8iDGY4FVqjJqUiUc0B6ZiEmLFahZRuUQEYQXlisqlXIKgsiyHLKD7Ur82pIbZWTbAzr45+lW9qq3d2Zl+75s+pvv1mwwhA6Q14BgfZHAXQGtAAxEOvhF0DZH8EDQQye94DUTyO1sDkfwO1kAkv1M1EMnvSA1E8jtPA5H8DtNAJL+TNBDJ7xgNZJlOyC5ZR3k3BOVXZNOh6t1K8Rnf4Tdux3p26iRTvkP7qnbQb20/UF1/FXW9fEiR6DglExyDY/GfS60X1DlwLm57XAkkK/g+nQkdo6and2hqdoJSJThX49M6dW5cg9tOxwPZf3Mn1fZV0qu5abJbcA1cC9fktttxQI7XFlD7yH2KUSypI2OxGL2YHqUHo60UGrxNNb3lVNZdrBSf7w7W0sPRVnUMjk16PopR28g9+qq2gN0P7ED2VmQrZyRrZu4N1dPvbT/Sweo82rqMpgbH4j/4772hhqTNX+uzJjUw8B2QrJK1VNr5F82/mbN0THR+hhoGbtGp+sO0JbgmZdfFuU41HFbnxjWsBGVC2bj6mLQD+aIylwYivZbOmIhGKNhRRNtLN9pejpyr6+mP9p8oPPPSsixDEwMs/UtagVxsPkOzr6OWHWxR+8/Lao5SpagJf7YXWg4koq+jVNh8xntAMP5Hp2vVoeI5Ydf1j9IOQpgUZajrv2k5sLjRXZy2ZxjbgWwuXqOGl2aZnJ2gbxuOsIMQJv36zgGKRMNx5UW/k8r+jAUIDGh7Fj+K6njerqY4uJ0vEijK1vni77hyY6TmWiCo4riruO40sUrdGnyPGgZr4sr/WXmWO4FY9Rn4zg3zScJwUxntGJ8JqyG764BgNGUFg9vBYoV6OnRMDcftrh22ACmo2h43tMUUR2axe2qGYNSUAkF1Hoz0xXXgbugzhBeBYMrBKJOzEUePpoSXgeRXbFs0N4UHrO9CR9kNFH4FYp61xRM4t3HCr0CwnmEUzAvtvP4hu3HCr0CwuGQUTBRyGyb8CgRT1MYJOQQXOHW9WvgBiHni8MrDS+xGCb8CQU0wriNgFe7j0g3sRgm/Ajl79/ii2nFnoJrdILGE4gEVAXVYLfQkEMRNGQVr4NwGiQSKZeHHY13/9nNh2lO+1VtAMDdljOLAZ6dOkWwv3Uh9448X3TxYtvUUEIyujNI0VO8aGLFYjI7U7PEWEMTaGgWxT9zGCJPmlm6g3nD3YhgUo19bzrOXLeVAMDViFASkcRsjXA5jVUAQWW5sAjhCeITHYKwKiHFLAOJouQ0RHoCxYiDYEGMUBD5zGyI8AGPFQLDoZBREZ3AbkusBGCsGsrciZ5Hht3rLWI3Iubo+bmgLwYLZ8+mRlCn6zQM38xKGDWE7BJawVzPiXBGQQ9WfLDK8rCfICiTYUUTpEkCxKgNigI01c6URKhqIF4DoJitg2WSh6UaThYfmtDZZulMPOHvYiz19dhVQ+GykpR8MpUenTpy0jp7r4pqiJxelR4AgXYVR9PR7gBeI2xeojt7O9xYQbGbRS7gB5wCBIpGLu4IcOv8Lcvi0bIv3gCCrjnn/ILdBIsmOYMzDeTYMSAfKBZwFBKpDSQPODrZGvhK7d6oKD2uGHZt1nBqEJvwCBMm/jDIz/8oR+UuEn7e0IfmXUZDIhds44fdNn3N60yc5Boj1tugJvS1aMgLBc4k5cQCy6mB5k7spEC7RDDsSW6JTNwoyherUGgEeIOYIDC8knznXeIKKHxXR7huZ7qshC4q0eG5Pz7S5+F0V/LYgo1PDttd0WxOY1bs4gVlWyVpqHg7Fld/ujKm2p/gzP59AHqkUf5vYnS4SKKbmF6bq0/1slZYkmLctk2BGHLl+cjr0JU3NTVrAqFK2uB5IsjSxaKN3XPuAHcSu65vUtm4rQeywJxMpFyZIpIw7EkETWxj6Fuz8Qm4W81Adgu8uNH3j31TjkWhY3Y2Iq0pXqvGxBKnG+8efqGcq3yTjv9Z1hebfzFs649XclGrKkPYplcNMDGNP1u1f8h0lmI+72nmZbc8k8+sqcuJSO5llfGZMDZ8vNp+lzytzlwUIx6JG/tJyTu3ySvaqpLevq9jG5g92IAt6om4fPRhtof8j2BWFNxc0D999+zKXniCVdFxWd3V5T4n6rmW4kYYnBxO+DsMs7SPN+oUuVmAOVuep2pDo3R6pFHTYGFUl2qLm6xpi1m0l6+h840m6PxxK6fuocC6c8/vGk45d93ckEGHqiJFSCUNTJGR+Eu6i6bmppM7HMTgW/8F/EY+Fc3Hb43ogYolhK/bxIerlaE2+UnzGd04OhPMsEOFR1UAkPwQNRPI7XgOR/M7WQCS/gzUQye9UDUTyO1IDkfzO00Akv8M0EMnvJA1E8jtGA3GAM4QDVE+dSH4IRiD/AC0fKGFcG5gYAAAAAElFTkSuQmCC" /> فرم ورود</h3>
                            <p>
                                در این وب‌سایت، از Redux Toolkit برای مدیریت وضعیت استفاده شده است، که امکان مدیریت و نگهداری اطلاعات کاربران را بهبود می‌بخشد.<br />
                                یکی از ویژگی‌های بارز این وب‌سایت، استفاده از یک Custom Hook پیشرفته است که متن و رنگ را به عنوان آرگومان دریافت می‌کند و یک Alert زیبا را به نمایش می‌گذارد. این Alert دارای یک تایمر است که به صورت خودکار بسته می‌شود و تجربه کاربری را بهبود می‌بخشد.<br />
                                با استفاده از JQuery، ظاهرسازی رابط کاربری انجام شده است. این امکان به کاربر می‌دهد تا به راحتی و با استفاده از افکت‌ها و تزئینات متنوع، با صفحه ورود به سایت ارتباط برقرار کند و تجربه‌ی کاربری بهتری را تجربه کند.<br />
                            </p>                    
                            <div className="my-4 row">
                                <span className="w-auto m-2">با استفاده از:</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">React</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">TS</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">Redux Toolkid</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">jQuery</span>
                            </div>
                            <Link to="/login">
                                <button className="btn btn-success btn-lg p-2">بازدید از صفحه</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-3 col-sm-12 samples-item-img"><div className="bg-img  url-login"></div></div>
            </div>
            <div className="row d-flex flex-row-reverse justify-content-center samples-item col-lg-9 col-11">
                    <div className="col-xl-4 col-lg-9 col-sm-12 samples-item-text d-flex justify-content-center p-3 ">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="display-5 text-center "> <img className="rounded rounded-circle" src="data:image/png;base64,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" /> وردپرس  </h3>
                            <p >
                                این پروژه، به طور کامل بر اساس وردپرس زده شده است و یک سایت زیبا برای علاقه‌مندان به یوگا را ارائه می‌دهد. در این پروژه از افزونه‌های معتبری مانند Elementor، WooCommerce، Yoast SEO و دیگر افزونه‌های مرتبط استفاده شده است.<br />
                                با استفاده از Elementor، طراحی و رابط کاربری سایت به سطح بالاتری ارتقا یافته است، این امکان را فراهم می‌کند تا محتوا و ظاهر سایت به سادگی و با انعطاف تغییر کند. همچنین، از WooCommerce برای ایجاد فروشگاه آنلاین یوگا و فروش محصولات استفاده شده است، که به شما این امکان را می‌دهد تا به راحتی محصولات مورد نظر خود را پیدا کرده و خرید کنید.<br />
                                با استفاده از Yoast SEO، بهینه‌سازی سایت برای موتورهای جستجویی مانند گوگل به بهترین شکل انجام شده است و به شما کمک می‌کند تا در رتبه‌بندی بهتری در نتایج جستجو حضور پیدا کنید. این ترکیب از افزونه‌ها و ابزارهای متنوع به شما تجربه‌ای منحصر به فرد از سایت وبلاگی/فروشگاهی یوگا را ارائه می‌دهد<br />
                            </p>                    
                            <div className="my-4 row">
                                <span className="w-auto m-2">با استفاده از:</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">Wordpress</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">Elementor</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">Yoast SEO</span>
                                <span className="bg-purper-lite w-auto m-1 p-1 fw-bold rounded rounded-3">WooCommerce</span>
                            </div>
                            <a href="https://arameshebadan.ir/">
                                <button className="btn btn-success btn-lg p-2">بازدید از صفحه</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-3 col-sm-12 samples-item-img "><div className="bg-img bg-scroll  url-stor-wordpress"></div></div>
            </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="position-absolute top-0 z-n1 d-none d-lg-block" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="3100" height="3000" preserveAspectRatio="none" viewBox="0 0 3100 3000">
    <g mask="url(&quot;#SvgjsMask1364&quot;)" fill="none">
        <path d="M849.247201443588 253.5033954682329L1254.6219061662883 117.3954643588527 1361.627999878292 534.92848535170583z" fill="rgba(122, 146, 254, 0.5254901960784314)" className="triangle-float3"></path>
        <path d="M2311.321,533.957C2405.955,539.119,2490.958,474.167,2533.952,389.705C2573.409,312.19,2551.455,222.964,2507.97,147.634C2464.479,72.294,2398.287,6.164,2311.321,4.041C2221.219,1.841,2138.049,57.213,2097.307,137.608C2059.867,211.489,2087.77,294.636,2127.123,367.516C2169.264,445.559,2222.759,529.127,2311.321,533.957" fill="rgba(122, 146, 254, 0.5254901960784314)" className="triangle-float1"></path>
        <path d="M2318.954609414785 1155.6998158413926L1837.8430604411801 761.5765320377144 1143.719776637502 1042.6880810113194 1624.8313256111069 1466.8113648149974z" fill="rgba(122, 146, 254, 0.5254901960784314)" className="triangle-float1  "></path>
        <path d="M657.7514873145402 1615.547210958398L753.7253698159668 1986.9910360023525 997.9041661311853 1662.3082997282354z" fill="rgba(122, 146, 254, 0.5254901960784314)" className="triangle-float3"></path>
        <path d="M2511.2555734575794 1298.6893566545973L3058.9571976061206 1347.55563313981 2858.40580025967 1101.5700586743924z" fill="rgba(122, 146, 254, 0.5254901960784314)" className="triangle-float2"></path>
        <path d="M2617.0434991466063 1866.8243184405756L2225.505121838326 1446.9508138413373 1805.6316172390875 1838.489191149618 2197.1699945473683 2258.362695748856z" fill="rgba(122, 146, 254, 0.5254901960784314)" className="triangle-float3"></path>
        <path d="M1349.498,2627.374C1441.077,2626.949,1528.039,2584.975,1575.69,2506.769C1625.342,2425.279,1629.285,2324.7,1585.614,2239.855C1537.799,2146.96,1453.975,2066.885,1349.498,2067.32C1245.578,2067.753,1164.75,2149.63,1116.765,2241.809C1072.704,2326.451,1070.325,2427.193,1119.637,2508.887C1167.381,2587.984,1257.109,2627.803,1349.498,2627.374" fill="rgba(122, 146, 254, 0.5254901960784314)" className="triangle-float1"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1364">
            <rect width="3080" height="3018" fill="#ffffff"></rect>
        </mask>
    </defs>
</svg>
        </div>
        <div className="position-relative " style={{marginTop : "20vh"}}>
            <div className="custom-shape-divider-bottom-1714635571">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
        {/* footer */}
        <div id="social" className="overflow-hidden position-relative d-flex flex-column  justify-content-between align-items-center pt-5"  style={{ marginTop: '-251px' , top:'250px'}}>
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-100 position-absolute top-0 z-n1" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="2550" height="1440" preserveAspectRatio="none" viewBox="0 0 2550 1440">
                <g mask="url(&quot;#SvgjsMask1035&quot;)" fill="none">
                    <rect width="2550" height="1440" x="0" y="0" fill="rgba(14, 42, 71, 1)"></rect>
                    <path d="M1276.29 1628.85C1626.35 1446.75 1652.56 305 2108.86 287.93 2565.15 270.86 2687.9 849.39 2941.42 878.33" stroke="rgba(88, 105, 178, 1)" stroke-width="2"></path>
                    <path d="M188.04 1440.7C441.57 1401.53 569.19 797.79 983.93 792.98 1398.67 788.17 1381.87 972.98 1779.81 972.98 2177.76 972.98 2371.71 794.1 2575.7 792.98" stroke="rgba(88, 105, 178, 1)" stroke-width="2"></path>
                    <path d="M1110.4 1475.78C1401.58 1275.69 1236.07 228.62 1750.6 215.89 2265.13 203.16 2685.8 724.58 3031 734.29" stroke="rgba(88, 105, 178, 1)" stroke-width="2"></path>
                    <path d="M216.52 1541C543.28 1376.19 530.23 352.44 1000.42 304.7 1470.62 256.96 1392.37 484.7 1784.33 484.7 2176.28 484.7 2367.16 305.85 2568.23 304.7" stroke="rgba(88, 105, 178, 1)" stroke-width="2"></path>
                    <path d="M1070.33 1693.01C1343.45 1633.36 1366.46 991.55 1875.18 916.72 2383.9 841.89 2443.49 432.95 2680.03 412.72" stroke="rgba(88, 105, 178, 1)" stroke-width="2"></path>
                </g>
                <defs>
                    <mask id="SvgjsMask1035">
                        <rect width="2550" height="1440" fill="#ffffff"></rect>
                    </mask>
                </defs>
            </svg>
            <div className="d-flex justify-content-center align-items-center flex-column mb-5">
                <img src={icon} className="rounded rounded-circle" style={{maxWidth : "40vw" , maxHeight : "20vh"}} />
                <h1 className="text-center text-light display-4 my-5"><strong>Hamed</strong></h1>
            </div>
            <div className="social-bar ">
            <ul>
                <li>
                    <a className="telegram" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa-brands fa-telegram" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a className="instagram" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa-brands fa-instagram" />
                    </a>
                </li>
                <li>
                    <a className="github" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a className="stack-overflow" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa-brands fa-stack-overflow" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a className="linkedin" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                    </a>
                </li>
                </ul>
            </div>
            <div dir="rtl" className="mt-5">
                <button type="button" className="btn btn-outline-light rounded rounded-pill btn-lg " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    تماس با من 
                </button>
                {/* modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h5 className="modal-title" id="staticBackdropLabel">ارتباط با من</h5>
                    </div>
                    <div className="modal-body d-flex justify-content-center flex-column align-items-center">
                        <img src={me} className="rounded rounded-circle" style={{width : "40%"}} />
                        <h3>تماس با من</h3>
                        <span>
                        شماره تماس :  &nbsp;
                        <a href="tel:+989012226411">989012226411+ </a> 
                        </span>
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">بستن</button>
                                <button type="button" className="btn btn-success" onClick={() => window.open('tel:+989012226411')}>تماس</button>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <div className="text-center text-light mt-5 mb-3">
                © تمامی حقوق این وبسایت متعلق به حامد رجبی فرجاد میباشد .
            </div>
        </div>
    </div>
    
);
};

import $ from "jquery";
import '@fortawesome/fontawesome-free/css/all.min.css';
import useRunOnce from "../hook/useRunOnce";
import me2 from '../image/me2.png';
import api from '../image/icons/api.png';
import home from '../image/icons/home.png';
import login from '../image/icons/login.png';
import todolist from '../image/icons/todolis.png';
import web from '../image/icons/web.png';
import worpress from '../image/icons/wordpress.png';
import icon from '../image/icon.jpg';
import me from '../image/me.JPG';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { transform } from "typescript";

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
                    $(".header-svg").addClass("animat-svg")
                    $(".header-img").addClass("animat-img");
                    $(".custom-shape-divider-top-1713630662 svg").animate({height : "8vh"} , 1000);
                    $(window).on("scroll" ,() => {
                        const windowTop : any = $(window).scrollTop()
                        switch(true)
                        {
                            case windowTop >= 500 :
                                if(cmpAnimate === 0){
                                    $(".about-img").animate({opacity : 1} , 1000);
                                    $(".about-box").animate({ borderbottomrightradius : 50 , borderTopLeftRadius : 50});
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
        <div className="bg-purper main-header row d-flex justify-content-between" >
            <div className="col-lg-5 col-sm-12 header-images d-flex align-items-start position-relative">
                <img src={me2} className="header-img"/>
                <svg id="el9nQBWTVuK1" className="header-svg z-n1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="100" ry="100" transform="translate(100 100)" fill="rgba(88,105,178,0.4)" stroke-width="0"/></svg>
            </div>
            <div className="col-lg-5 col-12 flex-column d-flex justify-content-center align-items-center align-items-md-start" >
                <h1 className="font-title mx-auto px-2 mx-lg-0">سلام! من <strong>حامد رجبی فرجاد</strong> هستم </h1>
                <h3 className=" font-des mt-4 col-md-10 col-11 "> خوش آمدید به رزومه‌ی من. اینجا مکانی است که تجربیات و دانش‌هایم را در زمینه‌های مختلف برنامه‌نویسی و توسعه وب  با شما به اشتراک می‌گذارم. امیدوارم که این اطلاعات برای شما مفید باشد.در صورت داشتن هر گونه سوال یا پیشنهاد، با من تماس بگیرید.</h3>
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
        <div id="about" className="row about d-flex justify-content-center">
            <div className="about-box d-flex justify-content-between flex-column flex-lg-row  col-xl-10  col-lg-11 align-items-center  position-relative"> 
                <img src={me} className="about-img"/>              
                <div className="text-center about-text">
                            <h1 className="display-3  my-4 fw-bold">درباره من</h1>
                            <div className="font-des px-2">
                                برنامه‌نویس وب با بیش از 3 سال تجربه در توسعه و طراحی وب‌سایت‌های پویا و جذاب هستم. تسلط دارم بر زبان‌های HTML، CSS، JavaScript، PHP و TypeScript. همچنین، با فریمورک‌ها و کتابخانه‌های معتبر مانند Bootstrap، jQuery و React آشنایی دارم. استفاده از hook‌هایی نظیر Redux Toolkit، React Query، Axios، React Router Dom و useReducer را به خوبی می‌دانم. همچنین، با کار با Custom Hooks و هوک‌های ری‌اکت و ساخت کامپوننت‌ها آشنایی دارم و توانایی کار با وردپرس و افزونه‌های آن مانند Elementor و WooCommerce را دارم. توانایی ارتقاء و بهینه‌سازی وب‌سایت‌ها و نرم‌افزارها برای بهبود تجربه کاربری را دارم. همچنین، توانایی حل مسائل پیچیده و ارائه راه‌حل‌های نوآورانه به مشکلات فنی را دارم. همچنین با زبان‌های دیگری مانند C#، Dart، Flutter، Blazor و MySQL (CRUD) نیز آشنایی دارم.
                            </div>
                </div>
            </div>
        
        </div>
        {/* Work samples */}
        <div id="samples" className="position-relative border-purper-samples row d-flex justify-content-center overflow-hidden ">
            <div className="row d-flex justify-content-center samples-item col-11">
                    <div className="col-xl-4 col-lg-5 col-sm-12 samples-item-text d-flex justify-content-center p-3">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="text-center font-title"> <img className="rounded rounded-circle" src={web} /> نمونه کار های من  </h3>
                            <p className="font-samples-des">خوش آمدید به بخش نمونه کارهای من! در اینجا، همه‌ی پروژه‌ها با استفاده از تمام دانش و تجربه‌ای که در اختیار دارم، با دقت و اهتمام بالا ایجاد شده‌اند. هر پروژه، با تمرکز بر یک زمینه خاص، به صورت کامل پیاده‌سازی شده و به نتیجه‌ای عالی و کاربردی دست یافته است.<br />
                                در توسعه این پروژه‌ها، از تکنولوژی‌های مدرن و پیشرفته‌ای استفاده شده است. از جمله این تکنولوژی‌ها می‌توان به React، Redux Toolkit، React Query، jQuery، TypeScript، JavaScript، Reducer، Axios، و React Router Dom اشاره کرد. با استفاده از این ابزارها و فریم‌ورک‌ها، توانسته‌ام تا به سرعت و با کیفیت بالا، پروژه‌هایی متناسب با نیازهای مخاطبانم را ارائه دهم.<br />
                                همچنین، تلاش شده است که هر پروژه با استفاده از رویکردهای به روز و بهینه‌سازی‌های لازم، تجربه‌ی کاربری بی‌نظیری را ارائه دهد و نیازهای مخاطبان را به بهترین شکل ممکن برآورده کند.<br />
                                امیدوارم که در مشاهده‌ی نمونه کارهایم، لذت ببرید و از کیفیت و توانایی‌های فنی آنها مطمئن شوید. برای کسب اطلاعات بیشتر یا ارتباط با من، می‌توانید با من <a className="text-primary" style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">تماس</a> بگیرید.<br />
                                با احترام، حامد رجبی فرجاد
                            </p>                    
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-sm-12 d-none d-lg-block samples-item-img"></div>
            </div>
            <div className="row d-flex flex-row-reverse justify-content-center samples-item col-11">
                    <div className="col-xl-4 col-lg-5 col-sm-12 samples-item-text d-flex justify-content-center p-3 ">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="text-center font-title"> <img className="rounded rounded-circle"src={home} /> فروشگاه</h3>
                            <p className="font-samples-des">
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
                    <div className="col-xl-8 col-lg-7 col-sm-12 samples-item-img "><div className="bg-img bg-scroll  url-stor"></div></div>
            </div>
            <div className="row justify-content-center samples-item col-11">
                    <div className="col-xl-4 col-lg-5 col-sm-12 samples-item-text d-flex justify-content-center p-3">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="text-center font-title"> <img className="rounded rounded-circle" src={api} /> پروژه Api</h3>
                            <p className="font-samples-des">
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
                    <div className="col-xl-8 col-lg-7 col-sm-12 samples-item-img "><div className="bg-img url-rest-api"></div></div>
            </div>
            <div className="row d-flex flex-row-reverse justify-content-center samples-item col-11">
                    <div className="col-xl-4 col-lg-5 col-sm-12 samples-item-text d-flex justify-content-center p-3">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="text-center font-title"> <img className="rounded rounded-circle" src={todolist} /> To-Do list</h3>
                            <p className="font-samples-des">
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
                    <div className="col-xl-8 col-lg-7 col-sm-12 samples-item-img "><div className="bg-img url-todolist"></div></div>
            </div>
            <div className="row justify-content-center samples-item col-11">
                    <div className="col-xl-4 col-lg-5 col-sm-12 samples-item-text d-flex justify-content-center p-3">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="text-center font-title"> <img  className="rounded rounded-circle"src={login}/> فرم ورود</h3>
                            <p className="font-samples-des">
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
                    <div className="col-xl-8 col-lg-7 col-sm-12 samples-item-img"><div className="bg-img  url-login"></div></div>
            </div>
            <div className="row d-flex flex-row-reverse justify-content-center samples-item col-11">
                    <div className="col-xl-4 col-lg-5 col-sm-12 samples-item-text d-flex justify-content-center p-3 ">
                        <div className="bg-purper-lite h-100 w-100 rounded rounded-5 d-flex justify-content-around flex-column align-items-center p-3">
                            <h3 className="text-center font-title"> <img className="rounded rounded-circle" src={worpress} /> وردپرس  </h3>
                            <p  className="font-samples-des">
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
                    <div className="col-xl-8 col-lg-7 col-sm-12 samples-item-img "><div className="bg-img bg-scroll  url-stor-wordpress"></div></div>
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
        <div className="position-relative " style={{marginTop : "20vh" , marginBottom : "-1px"}}>
            <div className="custom-shape-divider-bottom-1714635571">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
        {/* footer */}
        <div id="social" className="overflow-hidden position-relative d-flex flex-column  justify-content-between align-items-center pt-5"  >
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-100 position-absolute top-0 z-n1" style={{marginBottom  : "-1px"}} version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="2550" height="1440" preserveAspectRatio="none" viewBox="0 0 2550 1440">
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
                    <a className="telegram" href="https://t.me/hamed_rf276">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa-brands fa-telegram" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a className="instagram" href="https://www.instagram.com/hamed.__rf?igsh=bnpxdmFyZWVlem1m">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa-brands fa-instagram" />
                    </a>
                </li>
                <li>
                    <a className="github" href="https://github.com/hamedrf">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a className="stack-overflow" href="https://stackoverflow.com/users/24951777/hamedrf">
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

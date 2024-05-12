import { useState } from "react"
import { login, logout } from "../hook/users"
import { useDispatch ,useSelector } from "react-redux"
import { colors, Alert } from "../compnent/Alert";

export const Login = () =>
{
    const dispatch = useDispatch();
    const username: string = useSelector((state : any) => state.user.username)
    const [name , setName] = useState("")
    const [handelAlert , setHandelAlert] = useState(0);
    return(
        <div className="fix-background position-relative d-flex justify-content-center align-items-center ">
            <div className="position-absolute top-0 z-n1">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="2560" height="1450" preserveAspectRatio="none" viewBox="0 0 2560 1450">
                    <g mask="url(&quot;#SvgjsMask1532&quot;)" fill="none">
                        <rect width="2560" height="1450" x="0" y="0" fill="rgba(88, 105, 178, 1)"></rect>
                        <path d="M0,1208.537C222.235,1190.126,428.624,1064.76,577.697,898.915C709.624,752.145,712.106,540.337,770.166,351.723C819.809,190.454,888.077,40.1,893.972,-128.534C900.833,-324.81,896.967,-524.657,806.9,-699.183C702.541,-901.402,564.107,-1113.992,348.243,-1186.007C131.064,-1258.461,-105.854,-1166.178,-315.218,-1073.535C-506.066,-989.085,-670.304,-855.208,-788.317,-683.081C-898.163,-522.867,-916.862,-327.664,-956.922,-137.585C-999.948,66.57,-1087.117,269.991,-1031.563,471.099C-972.09,686.393,-824.374,870.123,-642.672,1000.017C-455.668,1133.701,-229.089,1227.516,0,1208.537" fill="#435292"></path>
                        <path d="M2560 2554.058C2786.927 2555.077 3045.273 2612.3230000000003 3221.616 2469.4939999999997 3397.316 2327.186 3361.85 2054.008 3439.541 1841.673 3509.643 1650.077 3653.328 1486.427 3655.9480000000003 1282.426 3658.786 1061.4270000000001 3617.745 813.942 3454.6549999999997 664.777 3293.618 517.489 3045.233 551.074 2828.488 525.615 2647.303 504.33299999999997 2470.139 487.64099999999996 2292.284 528.244 2105.357 570.918 1925.65 639.202 1780.778 764.8 1620.883 903.423 1484.571 1073.286 1428.3 1277.286 1367.892 1496.283 1371.106 1733.496 1455.381 1944.462 1541.827 2160.86 1698.1689999999999 2350.9809999999998 1902.19 2463.572 2099.98 2572.725 2334.092 2553.044 2560 2554.058" fill="#7c8ac3"></path>
                    </g>
                    <defs>
                        <mask id="SvgjsMask1532">
                            <rect width="2560" height="1450" fill="#ffffff"></rect>
                        </mask>
                    </defs>
                </svg>
            </div>
            <div className="bg-light rounded rounded-5   col-md-7 col-sm-11 col-xl-4 d-flex border-purper justify-content-evenly align-items-center">
                <div className="d-flex flex-column justify-content-around  h-75 w-75" >
                    <div className="form-group mb-3" style={{marginTop : "-40px"}}>
                    <h3 className="display-4">فرم ورود {username}</h3>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="exampleInputEmail1" className="h3">نام کاربری</label>
                        <input type="text" className="form-control p-3" onChange={e => setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="نام کاربری را وارد کنید ..." />
                    </div>
                    <div className="form-group" style={{marginTop : '-30px' , marginBottom : '30px'}}>
                        <label htmlFor="exampleInputPassword1" className="h3">رمز عبور</label>
                        <input type="password" className="form-control p-3" id="exampleInputPassword1" placeholder="رمز عبور خود وارد کنید ..."/>
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary mx-3 btn-lg" onClick={() => {dispatch(login(name)); setHandelAlert(1) }}>وارد شدن</button>
                        <button type="submit" className="btn btn-danger mx-3 btn-lg" onClick={() => {setHandelAlert(2) ;dispatch(logout());}}>خارج شدن</button>
                    </div>
                </div>
                {handelAlert === 1 && <Alert  text={`${username} عزیز ورود شما با موفقیت انجام شد :)`} color={colors.success} /> }
                {handelAlert === 2 && <Alert  text= ' کاربر عزیز شما از حساب کاربری خود خارج شدید :/' color={colors.danger} /> }
            </div>
        </div>
    )
}
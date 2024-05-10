import { useApi } from "../hook/UseApi"

export const RestApi = () =>
{
    const {data , isLoading , refetch} = useApi('https://dog.ceo/api/breeds/image/random')
    return(
    <div className=" fix-background position-relative d-flex flex-column justify-content-center align-items-center " > 

<svg xmlns="http://www.w3.org/2000/svg" className="position-absolute top-0 z-n1" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  width="3000" height="1550" preserveAspectRatio="none" viewBox="0 0 3000 1550">
    <g mask="url(&quot;#SvgjsMask1081&quot;)" fill="none">
        <rect width="3000" height="1550" x="0" y="0" fill="rgba(67, 82, 146, 1)"></rect>
        <path d="M 0,91 C 200,152.6 600,381.4 1000,399 C 1400,416.6 1600,138 2000,179 C 2400,220 2800,519 3000,604L3000 1330L0 1330z" fill="rgba(88, 105, 178, 1)"></path>
        <path d="M 0,1159 C 200,1079 600,734 1000,759 C 1400,784 1600,1302.4 2000,1284 C 2400,1265.6 2800,790.4 3000,667L3000 1330L0 1330z" fill="rgba(124, 138, 195, 1)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1081">
            <rect width="3000" height="1550" fill="#ffffff"></rect>
        </mask>
    </defs>
</svg>

            {isLoading? (<p> loading... </p>) : (<img src={data.message} className="rounded rounded-5 col-xl-4 col-md-7 col-sm-11 col-12" style={{border : "8px solid #fff"}}/>)} 
            <button className="btn btn-light my-5" onClick={() => refetch()}> عوض کردن عکس <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVR4nO2WvUoDQRSFPwloYaOdxjyAP5jCaO0G/CsMWETIG6itjZV1FPEdRFHjO4idCr6E2ilowCQiaGRl5CwMYZPsLBpS5MBlh90598zcnbn3Qg9djAQwCmSAOSCld/+GZeAYKAN+g70C58BiXOeTwKN2EyANXIWINbMb+XGCJ3JZ4mvAu+W0ApSADSAHrGp8BrxZ8wynEEfYl8i3xp/AATDUgjsMFIG6OOa5HkfYl5mdLDkuviLuBzARVzgIuwuywJf413GF44rvW/xsu8npFqe1rPsbFeaf18QtRSHkgb0Q2wUGccOphJ/oMLasiKU6KTwG3AO3QH+riQPAHfAAJDu3Pn7DEYTGhKmjeJbwiSPPHLxtYCfE8lEcXEi41iZFNiLZpHIFNt3OQdaabHKvCzItxL125D6lOV9pb/6PxL0o5HEl+KBIRCIJK1aRcBZGJc0ucUWlwWYw3w6t4lBvWICHAwpWvg12b1qcTTUBOV07cyCr1ryqvtlh93DEhPXPo9glMGXxM2qnnNuhAAtqcV5CxMy7I8eGwRkJ5eBZYAYY0U3ooTvxA8SHt5gipIO/AAAAAElFTkSuQmCC" /></button>
        </div>
    )
}
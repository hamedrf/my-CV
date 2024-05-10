import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Product, make } from "../hook/shop";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert, colors } from "../compnent/Alert";

export const Stor = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    const getApi = async () => {
        for (let index = 0; index < 9; index++) {
        try {
            const response = await fetch(
            `https://fakestoreapi.com/products/${index}`
            );
            if (!response.ok) throw new Error("faild connect");
            const data = await response.json();
            dispatch(make({ object: data, index: index }));
        } catch (error) {
            console.log("error", error);
        }
        }
    };
    getApi();
}, []);
    const product = useSelector((state: any) => state.shop.Products);
    console.log(product);
    return (
    <div style={{marginTop : '-95px'}} className="position-relative">
        <div className="bg-purper d-flex align-items-center justify-content-center xl-size w-100 main-shop">
        صفحه ی محصولات
        </div>
        <div className="row d-flex justify-content-center " style={{paddingTop : "5vh"}}>
        {product.map((Element: Product, index: number) => {
            return (
            <div key={index} className="col-lg-3 col-md-5 col-10 mx-3 rounded rounded-5 d-flex justify-content-center flex-column align-items-center" style={{height : '50vh' , margin : "20px 30px 0px 30px" , background : "rgba(124, 138, 195, 0.3)"}}>
                <img src={Element.image} className="rounded rounded-5" style={{maxHeight : "60%" , maxWidth : "90%" }}/>
                <h1 className="display-6 text-start">{Element.title}</h1>
                <div className="w-100 d-flex justify-content-between align-items-center mt-4">
                    <Link to={"/ProductInfo"} state={Element}>
                    <button className="btn-lg btn btn-success h1">صفحه محصول</button>
                    </Link>
                    <h5 className="text-success display-6"> ${Element.price}</h5>
                </div>
            </div>
            );
        })}
        </div>
    </div>
    );
};

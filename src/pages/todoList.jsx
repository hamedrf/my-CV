import $ from 'jquery'
import { useState } from 'react';
import { Item } from "../compnent/ItemTDL";

export const TodoList = () => {
  const [text ,setText] = useState("")
  const [list ,setList] = useState([])
  

  const addItem = ()=>
  {
    if(text !== "")
    {

      const id  = list.length === 0 ? 1 : list[list.length - 1].id +1;
      const newList = 
      {
        id : id ,
        text : text,
        isCmp : false
      }
      setList([...list , newList]);
      $("#inp").val("");
      setText("");
      $("#inp").focus();
    }
    else
    alert("write some thing");
  }


  const del = id  =>
    setList(list.filter(item =>item.id !== id && item));

  const cmp = id =>
  {
    const newList = list.map(Element  => Element.id === id ? {...Element , isCmp : !Element.isCmp} :Element)

    setList(newList);
    console.log(list)
  }


  return (
    <div className='position-relative fix-background d-flex justify-content-center align-items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" className='position-absolute top-0 z-n1' version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  width="3000" height="1460" preserveAspectRatio="none" viewBox="0 0 3000 1460">
          <g mask="url(&quot;#SvgjsMask3026&quot;)" fill="none">
              <rect width="3000" height="1460" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient3027&quot;)"></rect>
              <path d="M3000 0L2166.5299999999997 0L3000 256.2z" fill="rgba(255, 255, 255, .1)"></path>
              <path d="M2166.5299999999997 0L3000 256.2L3000 444.85L1563.1 0z" fill="rgba(255, 255, 255, .075)"></path>
              <path d="M1563.1 0L3000 444.85L3000 479.59000000000003L1555.6299999999999 0z" fill="rgba(255, 255, 255, .05)"></path>
              <path d="M1555.6299999999999 0L3000 479.59000000000003L3000 914.26L895.3499999999999 0z" fill="rgba(255, 255, 255, .025)"></path>
              <path d="M0 1460L182.1 1460L0 1223.09z" fill="rgba(0, 0, 0, .1)"></path>
              <path d="M0 1223.09L182.1 1460L1303.9599999999998 1460L0 843.4899999999999z" fill="rgba(0, 0, 0, .075)"></path>
              <path d="M0 843.49L1303.9599999999998 1460L1807.1799999999998 1460L0 498.92z" fill="rgba(0, 0, 0, .05)"></path>
              <path d="M0 498.9200000000001L1807.1799999999998 1460L1861.33 1460L0 435.6400000000001z" fill="rgba(0, 0, 0, .025)"></path>
          </g>
          <defs>
              <mask id="SvgjsMask3026">
                  <rect width="3000" height="1460" fill="#ffffff"></rect>
              </mask>
              <linearGradient x1="87.17%" y1="126.37%" x2="12.83%" y2="-26.37%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient3027">
                  <stop stop-color="rgba(124, 138, 195, 1)" offset="0"></stop>
                  <stop stop-color="rgba(88, 105, 178, 1)" offset="0.59"></stop>
              </linearGradient>
          </defs>
      </svg>
      <div className="border-purper rounded rounded-5 bg-light text-center p-4 p-sm-5 col-xl-6 col-md-10 col-12">
        <h1 className="h2">لیست کار های خودت رو بنویس</h1>
        <div className=" d-flex justify-content-center my-lg-5  my-md-4 my-0">
          <button className="btn btn-dark " onClick={addItem} >اضافه کردن </button>
          <input type="text" id="inp" className="rounded rounded-3 mx-3 p-2" onChange={item => setText(item.target.value)} placeholder="اینحا بنویس ..."/>
        </div>
        <div  className='overflow-auto' style={{height : "45vh"}}>
        {list.map((Elemnt , index) =>{
            return(
              <Item key={index}object={Elemnt} methodDel={del} methodCmp={cmp} />
            )
          })}
          </div>
      </div>
    </div>
  );
}

import React from 'react';
import "./Cards.css"

const Cards = ({value}) => {
    let text="";
    let text_button="";
    let alerts="";
    if(value==='success'){
        text="We are delighted to inform you that we recieved your payment";
        text_button="Print Reciept";
        alerts="Payment Successfull"
    }else if(value==='error'){
        text="Unfortunately We have an issue in your payment try again later";
        text_button="Try once again"
        alerts="OOPS! Payment Failed"
    }else if(value==='warn'){
        text="Sorry you are trying to accessing an wrong information";
        text_button="Warning"
        alerts="Warning"
    }else if(value==='info'){
        text="This is your Personal information which you are trying to access";
        text_button="Info";
        alerts="Your Information is displaying"
    }
  return (
    <div className={'Wrapper'+value}>
        <div className={'topWidth'+value}></div>
        <div className={'value'+value}><center><h1>{value}!</h1></center><br/><hr /></div>
        <div className={'text'+value}>
        <center>{text}</center>
        </div>
        <div className={'buttons'+value}>
           <div className={'button1'+value}><button className={"btn1"+value} >Continue Shopping</button></div> 
           <div className={'button2'+value}><button className={"btn2"+value} onClick={()=>alert(alerts)}>{text_button}</button></div>
        </div>
        <div className={'bottom'+value}></div>
    </div>
      )
}

export default Cards
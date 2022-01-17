import {useState} from 'react';
import Used from './used';
import {Route} from 'react-router-dom';
import Won from './won' 

function App() {
  const [number,setNumber] = useState([])
  return (
    <div style={{height:"720px",maxWidth:"400px",margin:"auto",backgroundColor:"white"}}>
      <div style={{height:"300px",maxWidth:"400px",margin:"auto",backgroundColor:"black",color:"white",marginTop:"10px",position:"relative"}}>
        <div style={{textAlign:"center",fontSize:"30px",paddingTop:"20px"}}>man</div>
        <div style={{textAlign:"center",fontSize:"30px",paddingLeft:"70px",marginTop:"-15px"}}>matters</div>
        <div style={{color:"pink",textAlign:"center",fontSize:"28px",marginTop:"30px"}}>Congratulations <img src="https://cdn-icons.flaticon.com/png/128/2274/premium/2274543.png?token=exp=1641393289~hmac=42a46c313a58dff58cae3bd1410d6425" alt="img" height="25px"/></div>
      </div>
      <div style={{height:"200px",width:"340px",textAlign:"center",position:"absolute",top:"160px",left:"600px",backgroundColor:"white",marginTop:"20px",borderRadius:"25px",boxShadow:" 2px 5px #888888"}}>
        <div style={{marginTop:"30px",color:"blue",marginBottom:"30px",fontSize:"25px"}}>pay<span style={{color:"orange"}}>tm</span></div>
        <div style={{fontSize:"25px",color:"pink"}}>Gift Card</div>
        <div style={{fontSize:"25px",color:"pink"}}>Of</div>
        <div style={{fontSize:"35px",color:"blue"}} >Rs 200</div>
      </div>
      <div style={{textAlign:"center",fontSize:"20px",marginTop:"85px"}}>You have WON Paytm Gift<br/>Card of Rs 200 for <span style={{fontWeight:"bold"}}>placing the order<br/>on Man Matters</span></div>
      <div style={{textAlign:'center',marginTop:"20px"}}><input type="tel" onChange={(e)=>{setNumber(e.target.value)}} placeholder="Enter Mobile Number" value={number} style={{height:"50px",width:"300px",borderRadius:"25px",fontSize:"20px",textAlign:"center",backgroundColor:"lightgrey",border:"none"}}/></div>
      <div style={{textAlign:"center",fontSize:"10px",marginTop:"5px"}}>Enter the same number used on Man Matters</div>
      <button style={{marginLeft:"30px",marginTop:"30px",height:"50px",width:"350px",borderRadius:"25px",fontSize:"20px",textAlign:"center",backgroundColor:"lightblue",border:"none"}} 
      onClick={(e)=>{
        e.preventDefault();
        setNumber("")
        var nos = []
        let getnumber = JSON.parse(localStorage.getItem("number"))
        if (getnumber.length){
          nos = getnumber
        }
        nos.push(number)
        //localStorage.setItem("number",JSON.stringify(nos))
        if(number.length!==10){
          alert("enter valid number");
          return false;
        }
        else{
          let dup = nos.map((item)=>{
            return item;
          });
          let isduplicate = dup.some((item,index) =>{
            return dup.indexOf(item)!==index
          });
          if(isduplicate ===false){
            localStorage.setItem("number",JSON.stringify(nos))
            return(
              <Route path='/' element={<Won/>}/>
            )
          }
          else{
            return (
              <Route path='/used' element={<Used/>}/>
            )
          }
        }
        }}>Wow! Get my Paytm Gift Card  </button>
      <div style={{textAlign:"center",fontSize:"10px",marginTop:"30px"}}>Powered by <img src="https://th.bing.com/th/id/OIP.46DYDN6HAnhvb3OPC1yewwHaCQ?pid=ImgDet&rs=1" alt="img" height="20px"/></div>
    </div>
  );
}

export default App;



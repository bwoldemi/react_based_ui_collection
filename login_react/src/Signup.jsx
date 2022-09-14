
import {useState, useEffect} from "react"
import { Form, Button} from "react-bootstrap";
export default function Signup(){
    let [count, setCount] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
   // let [email, setEmail] = useState("");
    useEffect(()=>{
        document.title = "bereket page";
    })
    const handleUsername = (e)=>{
      //  console.log(e.target.value)
        setUsername(e.target.value);
    }
    
    const handlePassword = (e)=>{
    //    console.log(e.target.value);
        setPassword(e.target.value);
    }
    const validatePassword = (e)=>{
        console.log(e.target.value);
    }
    const handleSubmit = (e)=>{
        //console.log(e.tareget.value)
        e.preventDefault();
        
        console.log({username:username, password:password});
       //    e.preventDefault();
    }

    return (
        /*<div>
            <p> The sign up page {count} </p> 
            <button onClick={()=>setCount(count++)} >  Click me</button>
            
           
        </div>*/
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="email" value={username} onChange={handleUsername}/>
                
                <Form.Text className="text-muted"> email will never used by third party</Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Control name="password" placeholder="passowrd" value={password} onChange={handlePassword} onBlur={validatePassword}/> 
            </Form.Group>
           
            <Button variant="primary" type="sbmit"> Sbmit</Button>
        </form>
    )
    
}
let counter = 0;
function onclikHandler(){
    }
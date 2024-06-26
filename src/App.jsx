import { useEffect } from "react";
 
import { useState } from "react";
 
 
 

function App() {
  const [user, setUser] = useState([]);
  const fetchdata = async () => {
    try {
      const Response = await fetch("https://fakestoreapiserver.reactbd.com/smart");
      const data = await Response.json();
      console.log(data);

      const user = data;
      setUser(user);
      console.log(user);
      console.log(user[0])
      
    } catch (error) {
      console.log('Error occor :', error);
      
    }
  }
  useEffect(() => {
    fetchdata()
  },[]);

   
  return (
    <>
    
{/* <h1 className="bg-white">Mukesh Kushwaha</h1> */}
{/* kariappavbk123@gmail.com */}

{/* https://fakestoreapiserver.reactbd.com/smart */}

    
     {/* <Chai user={user}/> */}
  
<div className="flex flex-wrap">
  {
    user.map((user, index) => {
      return (
        <div key={index} className="border p-4 m-2 shadow-lg rounded-lg w-60">
          <div className="mb-2">
            <h1 className="text-lg font-semibold">{user.title}</h1>
            <h2 className="text-sm text-gray-600">{user.category}</h2>
          </div>
          <div className="text-sm mb-2">
            <p>Old Price: <span className="line-through text-red-500">{user.oldPrice}</span></p>
            <p>Price: <span className="text-green-500">{user.price}</span></p>
            <p>Quantity: {user.quantity}</p>
          </div>
        </div>
      );
    })
  }
</div>

     
     </>
  )
}

export default App

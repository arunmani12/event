import React from "react";
import { url } from "../global";

export default function Home(props) {
  const [Filter, setFilter] = React.useState(false);

  const [data,setData] = React.useState([])

  React.useEffect(() => {
    if(props.status !== "not allowed"){
      setData(props.register.user)
    }
  }, [])
  


  if (props.status === "not allowed") {
    return <h1>NOT ALLOWED</h1>;
  }

  const changeFilter = (eventname) =>{

    const newData = [...props.register.user]
    
    let EventData = []

    if(eventname === "all user"){
       setData([...props.register.user])
    }

    else if(eventname === "other clg"){
      newData.forEach(element => {
        let clgName = element.collegeName.toLowerCase().trim();

        let firstHalf = 'anjal'

        if(firstHalf !== clgName.slice(0,5)){

          if(clgName !== 'aamec' && clgName!=='anjalai ammal mahalingam engineering college'){
          
            EventData.push(element)
  
          }
        }
      });


      setData(EventData)

      return
    }else{

    newData.forEach(element => {
      
      if(element.events.length){

        element.events.forEach(event => {
          
          if(event === eventname){
            EventData.push(element)
          }

        });

      }
    });

    setData(EventData)
  }
    
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        flexShrink: 0,
        overflow: "scroll",
        flexDirection: "column",
        background:'#353c46'
      }}
    >
      <div onClick={()=>setFilter(e=>!e)} className='button-2'>Filter</div>
      {Filter && <div className="order">
      {[
        "Night Owl Quiz",
        "CryptoMot",
        "De Paper Fest",
        "Web Roar",
        "Phantasm Quiz",
        `Hopper's Mystification`,
        "Juncture",
        "Mono Effet",
        "other clg",
        "all user"
      ].map((d,i)=><p onClick={()=>changeFilter(d)} key={i}>{d}</p>)}
      </div>}

      <table className="table">
        <tbody>
          {data.map((d, i) => (
            <tr className="firstRow" key={i}>
              <td>{i+1}</td>
              <td>{d.planId}</td>
              <td>{d.Name}</td>
              <td>{d.email}</td>
              <td>{d.DOB}</td>
               <td>{d.collegeName}</td>
               {d.number?d.number : 'no number'}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const jwt = ctx.req.cookies.OursiteJWT;

  if (jwt) {
    const data = await fetch(`${url}/api/alluser`, {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    });

    const register = await data.json();

    if (register.message) {
      return {
        props: {
          status: "not allowed",
        },
      };
    }

    return {
      props: {
        status: "okie",
        register,
      },
    };
  }
}

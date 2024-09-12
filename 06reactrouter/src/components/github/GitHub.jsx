// import { useEffect } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";


function GitHub() {
    const data = useLoaderData();

    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/divyashantkumar')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data);
    //     });
    // }, []);

  return (
    <div  className="bg-gray-600 text-white text-3xl text-center p-4" style={{textTransform: "capitalize",}}>
        GitHub : {data?.name}
        <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default GitHub;

//  Creating this function to implement preloading of the data.
// import It where routes are being defined and use leader property in the route for this component
// Now use useLoaderData hook provided by react-router-dom and get the data returned from the hook.
export const gitInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/divyashantkumar');
    return response.json();
}
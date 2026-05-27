// import { useState } from "react";
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { login } from "../store/authSlice";

// function Login(){
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const backendURL = import.meta.env.VITE_BACKEND_URL;
//         try{
//             const response = await fetch(`${backendURL}/auth/login`, 
//                 {
//                     method : 'POST', 
//                     headers : {
//                         'Content-Type' : 'application/json'
//                     },
//                     credentials : "include",
//                     body : JSON.stringify(
//                         {
//                             username,
//                             password
//                         }
//                     )
//                 }
//             )
//             const data = await response.json();
//             // console.log(response);
//             if(response.ok){
//                 dispatch(login(data.user));
//                 navigate(data.redirect);
//             }
//             // console.log(data);
//         }
//         catch(err){
//             console.log("Login Error : ", err);
//         }

//     }

//     return (
//         <>
//             <div className="flex justify-center items-center">
//                 <div className="w-[40vw] h- border-2 border-green-700 flex flex-col justify-center items-center">
//                     <div>Login</div>
//                     <div>
//                         <form action="" className="flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>
//                             <input type="text" placeholder="Username" className="border-2 border-black bg-white rounded-2xl p-1" onChange={(e) => {setUsername(e.target.value)}}/>
//                             <input type="password" placeholder="Password" className="border-2 border-black bg-white rounded-2xl p-1" onChange={(e) => {setPassword(e.target.value)}}/>
//                             <button type="submit" className="border-2 border-black bg-blue-700 rounded-2xl p-1 ">Log In</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Login;





import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from "../store/authSlice";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const backendURL = import.meta.env.VITE_BACKEND_URL;
        try{
            const response = await fetch(`${backendURL}/auth/login`, 
                {
                    method : 'POST', 
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    credentials : "include",
                    body : JSON.stringify(
                        {
                            username,
                            password
                        }
                    )
                }
            )
            const data = await response.json();
            // console.log(response);
            if(response.ok){
                dispatch(login(data.user));
                navigate(data.redirect);
            }
            // console.log(data);
        }
        catch(err){
            console.log("Login Error : ", err);
        }

    }

    return (
        <>
            <div className="min-h-screen bg-[#0d1117] flex justify-center items-center px-4">
                
                <div
                    className="
                        w-full
                        max-w-md
                        bg-[#161b22]
                        border
                        border-[#30363d]
                        rounded-3xl
                        shadow-2xl
                        p-8
                        sm:p-10
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-8
                    "
                >

                    {/* Heading */}
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white">
                            Welcome Back
                        </h1>

                        <p className="text-[#8b949e] text-sm sm:text-base">
                            Login to continue
                        </p>
                    </div>

                    {/* Form */}
                    <div className="w-full">
                        <form
                            action=""
                            className="flex flex-col justify-center items-center gap-5"
                            onSubmit={handleSubmit}
                        >

                            <input
                                type="text"
                                placeholder="Username"
                                className="
                                    w-full
                                    bg-[#0d1117]
                                    border
                                    border-[#30363d]
                                    text-white
                                    rounded-2xl
                                    px-5
                                    py-4
                                    text-base
                                    outline-none
                                    focus:border-[#58a6ff]
                                    focus:ring-2
                                    focus:ring-[#58a6ff]/30
                                    transition-all
                                    duration-200
                                    placeholder:text-gray-500
                                "
                                onChange={(e) => {setUsername(e.target.value)}}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="
                                    w-full
                                    bg-[#0d1117]
                                    border
                                    border-[#30363d]
                                    text-white
                                    rounded-2xl
                                    px-5
                                    py-4
                                    text-base
                                    outline-none
                                    focus:border-[#58a6ff]
                                    focus:ring-2
                                    focus:ring-[#58a6ff]/30
                                    transition-all
                                    duration-200
                                    placeholder:text-gray-500
                                "
                                onChange={(e) => {setPassword(e.target.value)}}
                            />

                            <button
                                type="submit"
                                className="
                                    w-full
                                    bg-linear-to-r
                                    from-blue-600
                                    to-blue-500
                                    hover:scale-[1.02]
                                    active:scale-[0.98]
                                    transition-all
                                    duration-200
                                    text-white
                                    font-semibold
                                    py-4
                                    rounded-2xl
                                    shadow-lg
                                    text-base
                                    sm:text-lg
                                "
                            >
                                Log In
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login;
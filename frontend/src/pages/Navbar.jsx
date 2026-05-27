// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../store/authSlice";

// function Navbar() {
//     const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const backendURL = import.meta.env.VITE_BACKEND_URL;
//     const handleClick = async () => {
//         try{
//             const response = await fetch(`${backendURL}/auth/logout`, {
//                 method : 'POST', 
//                 headers : {
//                     'Content-Type' : 'application/json'
//                 },
//                 credentials : 'include'
//             });

//             // console.log(response);

//             if(response.status == 200){
//                 dispatch(logout());
//                 navigate('/');
//             }
//         }
//         catch(err){
//             console.log("Logout Error : ", err);
//         }
//     }

//     return (
//         <>
//             <div className="flex justify-between items-center bg-black text-white p-[2vw] text-[20px]">
//                 <div>Inventory</div>
//                 {isLoggedIn && <button className="border 2px solid white rounded-[20px] bg-blue-400 p-[1vw]" onClick={() => {handleClick()}}>LogOut</button>}
//             </div>
//         </>
//     )
// }

// export default Navbar








import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

function Navbar() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const handleClick = async () => {
        try{
            const response = await fetch(`${backendURL}/auth/logout`, {
                method : 'POST', 
                headers : {
                    'Content-Type' : 'application/json'
                },
                credentials : 'include'
            });

            // console.log(response);

            if(response.status == 200){
                dispatch(logout());
                navigate('/');
            }
        }
        catch(err){
            console.log("Logout Error : ", err);
        }
    }

    return (
        <>
            <div
                className="
                    sticky
                    top-0
                    z-50
                    w-full
                    bg-[#161b22]/95
                    backdrop-blur-md
                    border-b
                    border-[#30363d]
                    px-4
                    sm:px-8
                    py-4
                    flex
                    justify-between
                    items-center
                    shadow-lg
                "
            >

                {/* Logo / Title */}
                <div
                    className="
                        text-white
                        text-2xl
                        sm:text-3xl
                        font-bold
                        tracking-wide
                        cursor-pointer
                        select-none
                    "
                >
                    <span className="text-[#58a6ff]">Inventory</span>
                </div>

                {/* Logout Button */}
                {isLoggedIn && 
                    <button
                        className="
                            bg-linear-to-r
                            from-blue-600
                            to-blue-500
                            hover:scale-[1.03]
                            active:scale-[0.97]
                            transition-all
                            duration-200
                            text-white
                            font-semibold
                            px-5
                            sm:px-6
                            py-2.5
                            rounded-2xl
                            shadow-lg
                            text-sm
                            sm:text-base
                        "
                        onClick={() => {handleClick()}}
                    >
                        Log Out
                    </button>
                }

            </div>
        </>
    )
}

export default Navbar
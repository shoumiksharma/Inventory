// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Transactions from "./Transactions";

// function Dashboard(){
//     const name = useSelector((state) => state.auth.name);
//     const [query, setQuery] = useState("");
//     const [productId, setProductId] = useState("");
//     const [qty, setQty] = useState(0);
//     const [productList, setProductList] = useState([]);
//     const [filteredList,setFilteredList] = useState([]);
//     const [show, setShow] = useState(false);
//     const backendURL = import.meta.env.VITE_BACKEND_URL;
//     const navigate = useNavigate();
//     const [showTxn, setShowTxn] = useState(false);

//     const getProducts = async () => {
//         try{
//             const response = await fetch(`${backendURL}/product/get`, {
//                 method : 'GET',
//                 credentials : 'include'
//             })

//             const data = await response.json();
//             setProductList(data.productList);
//             setFilteredList(data.productList);
//             console.log(data);
//         }
//         catch(err){
//             console.log("Get Products Error :", err);
//         }}

//     useEffect(() => {
//             getProducts();
//         }, [])


//     const filterProducts = (e) => {
//         setShow(true);
//         setQuery(e.target.value);
//         setFilteredList(productList.filter((item) => {
//             return item.name.toLowerCase().startsWith(e.target.value.toLowerCase());
//         }))
//     }

//     const handleClick = (e, item) => {
//         setShow(false);
//         setQuery(e.target.innerText);
//         setProductId(item._id);
//         setQty(Number(item.qty));
//     }

//     const addProduct = async () => {
//         try{
//             const response = await fetch(`${backendURL}/product/add`, 
//                 {
//                     method : 'POST',
//                     headers : {
//                         'Content-Type' : 'application/json'
//                     },
//                     credentials : 'include',
//                     body : JSON.stringify({name : query})
//                 }
//             )

//             const data = await response.json();
//             if(response.status == 201){
//                 getProducts();
//                 setQuery("");
//             }
//             console.log(data);
//         }
//         catch(err){
//             console.log("Add Product Error : ", err);
//         }
//     }

//     const deleteProduct = async () => {
//         try{
//             const response = await fetch(`${backendURL}/product/delete/${query}`,
//                 {
//                     method : 'DELETE',
//                     credentials : 'include'
//                 }
//             )

//             const data = await response.json();
//             if(response.status == 200){
//                 getProducts();
//                 setQuery("");
//             }
//             console.log(data);
//         }
//         catch(err){
//             console.log("Delete Product Error : ", err);
//         }
//     }

        
//     return(
//         <>  
//             {showTxn && <Transactions close={() => {setShowTxn(false)}} qty={qty} setQty={setQty} productId={productId}/>}
//             <div className="border-2 border-[#388950] flex flex-col justify-center items-center gap-[2vh]">
//                 <div className="flex justify-start items-center w-[80vw] text-[40px]">
//                     <div>
//                         Hello, {name}
//                     </div>
//                 </div>
//                 <div>
//                     <input type="text" placeholder="Search Item" className="border-2 border-black bg-[#444040] rounded-2xl p-[4vh] w-[80vw] text-[40px]" onChange={(e) => {filterProducts(e)}} value={query} onFocus={(e) => filterProducts(e)} onBlur={() => setShow(false)} />

//                         {show && filteredList.length != 0 && 
//                             <div className="flex flex-col z-70 absolute gap-0.5 overflow-y-auto border-2 border-green-800 max-h-[40vh] ">

//                                {filteredList.map((item) => {
//                                 return (
//                                     <div key={item._id} className="w-[80vw] border-2 border-black bg-[#ab9c9c] rounded-[7px] p-1" onMouseDown={(e) => handleClick(e,item)} >
//                                         {item.name}
//                                     </div>
//                                 )
//                                })}

//                             </div>
//                         }

//                         {
//                             show && filteredList.length == 0 && <div className="flex flex-col justify-center items-center z-10 absolute gap-0.5">
//                                     <option className="w-[80vw] border-2 border-black bg-[#ab9c9c] rounded-[7px] p-1" >
//                                         No Product found
//                                     </option>

//                             </div>
//                         }

//                 </div>

//                 <div className="flex justify-end items-center text-[40px] gap-[7vw] w-[80vw] border-2">
//                     <button onClick={() => addProduct()} className="bg-[#284ed7] rounded-2xl p-[0.1vw] w-[15vw]">Add +</button>
//                     <button onClick={() => deleteProduct()} className="bg-[#f72b2b] rounded-2xl p-[0.1vw] w-[15vw]">Delete -</button>
//                     <button onClick={() => {setShowTxn(true)}} className="bg-[#08b113] rounded-2xl p-[0.1vw] w-[15vw]">Details</button>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Dashboard;


import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Transactions from "./Transactions";

function Dashboard(){
    const name = useSelector((state) => state.auth.name);
    const [query, setQuery] = useState("");
    const [productId, setProductId] = useState("");
    const [qty, setQty] = useState(0);
    const [productList, setProductList] = useState([]);
    const [filteredList,setFilteredList] = useState([]);
    const [show, setShow] = useState(false);
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [showTxn, setShowTxn] = useState(false);

    const getProducts = async () => {
        try{
            const response = await fetch(`${backendURL}/product/get`, {
                method : 'GET',
                credentials : 'include'
            })

            const data = await response.json();
            setProductList(data.productList);
            setFilteredList(data.productList);
            console.log(data);
        }
        catch(err){
            console.log("Get Products Error :", err);
        }}

    useEffect(() => {
            getProducts();
        }, [])


    const filterProducts = (e) => {
        setShow(true);
        setQuery(e.target.value);
        setFilteredList(productList.filter((item) => {
            return item.name.toLowerCase().startsWith(e.target.value.toLowerCase());
        }))
    }

    const handleClick = (e, item) => {
        setShow(false);
        setQuery(e.target.innerText);
        setProductId(item._id);
        setQty(Number(item.qty));
    }

    const addProduct = async () => {
        try{
            const response = await fetch(`${backendURL}/product/add`, 
                {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    credentials : 'include',
                    body : JSON.stringify({name : query})
                }
            )

            const data = await response.json();
            if(response.status == 201){
                getProducts();
                setQuery("");
            }
            console.log(data);
        }
        catch(err){
            console.log("Add Product Error : ", err);
        }
    }

    const deleteProduct = async () => {
        try{
            const response = await fetch(`${backendURL}/product/delete/${query}`,
                {
                    method : 'DELETE',
                    credentials : 'include'
                }
            )

            const data = await response.json();
            if(response.status == 200){
                getProducts();
                setQuery("");
            }
            console.log(data);
        }
        catch(err){
            console.log("Delete Product Error : ", err);
        }
    }

        
    return(
        <>  
            {showTxn && <Transactions close={() => {setShowTxn(false)}} qty={qty} setQty={setQty} productId={productId}/>}

            <div className="min-h-screen bg-[#0d1117] flex justify-center items-start px-4 py-8">
                
                <div className="w-full max-w-5xl bg-[#161b22] border border-[#30363d] rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col gap-8">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center flex-wrap gap-3">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white">
                            Hello, <span className="text-[#58a6ff]">{name}</span>
                        </h1>

                        <div className="text-sm sm:text-base text-[#8b949e]">
                            Inventory Dashboard
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative w-full">
                        
                        <input
                            type="text"
                            placeholder="Search Item..."
                            className="
                                w-full
                                bg-[#0d1117]
                                border border-[#30363d]
                                text-white
                                rounded-2xl
                                px-5
                                py-4
                                text-base
                                sm:text-lg
                                outline-none
                                focus:border-[#58a6ff]
                                focus:ring-2
                                focus:ring-[#58a6ff]/30
                                transition-all
                                duration-200
                                placeholder:text-gray-500
                            "
                            onChange={(e) => {filterProducts(e)}}
                            value={query}
                            onFocus={(e) => filterProducts(e)}
                            onBlur={() => setShow(false)}
                        />

                        {/* Dropdown */}
                        {show && filteredList.length != 0 && 
                            <div
                                className="
                                    absolute
                                    top-full
                                    mt-2
                                    w-full
                                    bg-[#161b22]
                                    border
                                    border-[#30363d]
                                    rounded-2xl
                                    overflow-hidden
                                    shadow-2xl
                                    z-50
                                    max-h-75
                                    overflow-y-auto
                                "
                            >

                               {filteredList.map((item) => {
                                return (
                                    <div
                                        key={item._id}
                                        className="
                                            px-5
                                            py-3
                                            text-white
                                            cursor-pointer
                                            hover:bg-[#21262d]
                                            transition-all
                                            duration-150
                                            border-b
                                            border-[#30363d]
                                            last:border-none
                                        "
                                        onMouseDown={(e) => handleClick(e,item)}
                                    >
                                        {item.name}
                                    </div>
                                )
                               })}

                            </div>
                        }

                        {
                            show && filteredList.length == 0 &&
                            <div
                                className="
                                    absolute
                                    top-full
                                    mt-2
                                    w-full
                                    bg-[#161b22]
                                    border
                                    border-[#30363d]
                                    rounded-2xl
                                    shadow-xl
                                    z-50
                                "
                            >
                                <div className="px-5 py-4 text-gray-400 text-center">
                                    No Product Found
                                </div>
                            </div>
                        }

                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                        
                        <button
                            onClick={() => addProduct()}
                            className="
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
                            "
                        >
                            Add +
                        </button>

                        <button
                            onClick={() => deleteProduct()}
                            className="
                                bg-linear-to-r
                                from-red-600
                                to-red-500
                                hover:scale-[1.02]
                                active:scale-[0.98]
                                transition-all
                                duration-200
                                text-white
                                font-semibold
                                py-4
                                rounded-2xl
                                shadow-lg
                            "
                        >
                            Delete -
                        </button>

                        <button
                            onClick={() => {setShowTxn(true)}}
                            className="
                                bg-linear-to-r
                                from-green-600
                                to-green-500
                                hover:scale-[1.02]
                                active:scale-[0.98]
                                transition-all
                                duration-200
                                text-white
                                font-semibold
                                py-4
                                rounded-2xl
                                shadow-lg
                            "
                        >
                            Details
                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Dashboard;
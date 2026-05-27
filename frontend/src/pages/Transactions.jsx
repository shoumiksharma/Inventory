// import { useEffect } from "react";
// import { useState } from "react"


// function Issue({ item }) {
//     const dateObj = new Date(item.createdAt);
//     const date = dateObj.toLocaleDateString();
//     const time = dateObj.toLocaleTimeString();
//     return (
//         <>
//             <div className="flex justify-around items-center w-[80vw] border-2 border-white">
//                 <div>{date} {time}</div>
//                 <div className="text-[#14cf1e]">+{item.amt}</div>
//                 <div>{item.qty}</div>
//             </div>
//         </>
//     )
// }

// function Dispatch({ item }) {
//     const dateObj = new Date(item.createdAt);
//     const date = dateObj.toLocaleDateString();
//     const time = dateObj.toLocaleTimeString();
//     return (
//         <>
//             <div className="flex justify-around items-center w-[80vw] border-2 border-white">
//                 <div>{date} {time}</div>
//                 <div className="text-[#db1919]">-{item.amt}</div>
//                 <div>{item.qty}</div>
//             </div>
//         </>
//     )
// }

// function Transactions({ close, qty, setQty, productId }) {

//     const backendURL = import.meta.env.VITE_BACKEND_URL;
//     const [txns, setTxns] = useState([]);
//     const [amt, setAmt] = useState(0);
//     const getTransactions = async () => {
//         try {
//             const response = await fetch(`${backendURL}/product/transactions/${productId}`,
//                 {
//                     method: 'GET',
//                     credentials: 'include'
//                 }
//             )

//             const data = await response.json();
//             if (response.status == 200) {
//                 setTxns(data.txns);
//             }
//             console.log(data);
//         }
//         catch (err) {
//             console.log("Get Transaction Error : ", err);
//         }
//     }

//     useEffect(() => {
//         getTransactions();
//     }, [])









//     const update = async (category) => {
//         try{

//             if(category === "Dispatch" && amt > qty){
//                 return;
//             }

//             const response = await fetch(`${backendURL}/product/update`,{
//                 method : "POST",
//                 headers : {
//                     'Content-Type' : 'application/json'
//                 },
//                 credentials : 'include',
//                 body : JSON.stringify(
//                     {
//                         productId,
//                         amt,
//                         category
//                     }
//                 )
//             })

//             const data = await response.json();
//             if(response.status == 200){
//                 if(category === "Issue"){
//                     setQty(qty+amt);
//                 }
//                 else{
//                     setQty(qty-amt);
//                 }
//                 getTransactions();
//             } 
//         }
//         catch(err){
//             console.log("Update Transaction Error : ", err)
//         }
//     }

//     return (
//         <>
//             <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">

//                 <div className="bg-[#3c3737] w-[90vw] h-[70vh] rounded-2xl p-5 flex flex-col items-center">

//                     <div className="flex justify-end w-[80vw]">

//                         <button onClick={close} className="text-2xl">X</button>

//                     </div>

//                     <div className="flex flex-col justify-center items-center border-2 border-blue-700">
//                         <div className="border-2 w-[80vw] p-2 text-[40px]">
//                             Available : {qty}
//                         </div>
//                         <div className="flex justify-between items-center w-[80vw] border-2 gap-5 text-[40px]">
//                             <input type="text" placeholder="Enter Quantity" onChange={(e) => { setAmt(Number(e.target.value)) }} className="w-[40%] border-2 rounded-2xl bg-white p-[2vh] " />
//                             <button className="w-[20%] bg-[#333333] rounded-2xl p-[0.1vw]" onClick={() => update("Issue")}>Issue</button>
//                             <button className="w-[20%] bg-[#333333] rounded-2xl p-[0.1vw]" onClick={() => update("Dispatch")} >Dispatch</button>
//                         </div>
//                     </div>

//                     <div>
//                         {
//                             txns.map((item) => {

//                                 if (item.category === "Issue") {
//                                     return <Issue key={item._id} item={item} />
//                                 }
//                                 else {
//                                     return <Dispatch key={item._id} item={item} />
//                                 }
//                             })
//                         }
//                     </div>

//                 </div>


//             </div>
//         </>
//     )
// }


// export default Transactions











































import { useEffect } from "react";
import { useState } from "react"


function Issue({ item }) {
    const dateObj = new Date(item.createdAt);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString();

    return (
        <>
            <div
                className="
                    grid
                    grid-cols-3
                    items-center
                    w-full
                    bg-[#0d1117]
                    border
                    border-[#30363d]
                    rounded-2xl
                    px-4
                    py-4
                    text-white
                    shadow-md
                    text-sm
                    sm:text-base
                    gap-3
                "
            >
                <div className="wrap-break-word text-[#c9d1d9]">
                    {date} {time}
                </div>

                <div className="text-[#2ecc71] font-bold text-center">
                    +{item.amt}
                </div>

                <div className="text-center font-medium">
                    {item.qty}
                </div>
            </div>
        </>
    )
}

function Dispatch({ item }) {
    const dateObj = new Date(item.createdAt);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString();

    return (
        <>
            <div
                className="
                    grid
                    grid-cols-3
                    items-center
                    w-full
                    bg-[#0d1117]
                    border
                    border-[#30363d]
                    rounded-2xl
                    px-4
                    py-4
                    text-white
                    shadow-md
                    text-sm
                    sm:text-base
                    gap-3
                "
            >
                <div className="wrap-break-word text-[#c9d1d9]">
                    {date} {time}
                </div>

                <div className="text-[#ff4d4f] font-bold text-center">
                    -{item.amt}
                </div>

                <div className="text-center font-medium">
                    {item.qty}
                </div>
            </div>
        </>
    )
}

function Transactions({ close, qty, setQty, productId }) {

    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const [txns, setTxns] = useState([]);
    const [amt, setAmt] = useState(0);

    const getTransactions = async () => {
        try {
            const response = await fetch(`${backendURL}/product/transactions/${productId}`,
                {
                    method: 'GET',
                    credentials: 'include'
                }
            )

            const data = await response.json();

            if (response.status == 200) {
                setTxns(data.txns);
            }

            console.log(data);
        }
        catch (err) {
            console.log("Get Transaction Error : ", err);
        }
    }

    useEffect(() => {
        getTransactions();
    }, [])

    const update = async (category) => {
        try {

            if (category === "Dispatch" && amt > qty) {
                return;
            }

            const response = await fetch(`${backendURL}/product/update`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(
                    {
                        productId,
                        amt,
                        category
                    }
                )
            })

            const data = await response.json();

            if (response.status == 200) {
                if (category === "Issue") {
                    setQty(qty + amt);
                }
                else {
                    setQty(qty - amt);
                }

                getTransactions();
            }
        }
        catch (err) {
            console.log("Update Transaction Error : ", err)
        }
    }

    return (
        <>
            <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 px-4">

                <div
                    className="
                        bg-[#161b22]
                        border
                        border-[#30363d]
                        w-full
                        max-w-5xl
                        h-[90vh]
                        rounded-3xl
                        shadow-2xl
                        p-5
                        sm:p-8
                        flex
                        flex-col
                        gap-6
                    "
                >

                    {/* Header */}
                    <div className="flex justify-between items-center">

                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                Transactions
                            </h1>

                            <p className="text-[#8b949e] text-sm sm:text-base mt-1">
                                Manage product inventory
                            </p>
                        </div>

                        <button
                            onClick={close}
                            className="
                                w-10
                                h-10
                                rounded-full
                                bg-[#21262d]
                                hover:bg-[#30363d]
                                text-white
                                text-xl
                                transition-all
                                duration-200
                                flex
                                justify-center
                                items-center
                            "
                        >
                            ✕
                        </button>

                    </div>

                    {/* Quantity Card */}
                    <div
                        className="
                            bg-[#0d1117]
                            border
                            border-[#30363d]
                            rounded-3xl
                            p-5
                            flex
                            flex-col
                            gap-5
                            shadow-lg
                        "
                    >

                        <div className="text-2xl sm:text-4xl font-bold text-white">
                            Available :
                            <span className="text-[#58a6ff] ml-3">
                                {qty}
                            </span>
                        </div>

                        <div
                            className="
                                flex
                                flex-col
                                lg:flex-row
                                gap-4
                                items-stretch
                            "
                        >

                            <input
                                type="text"
                                placeholder="Enter Quantity"
                                onChange={(e) => { setAmt(Number(e.target.value)) }}
                                className="
                                    flex-1
                                    bg-[#161b22]
                                    border
                                    border-[#30363d]
                                    rounded-2xl
                                    px-5
                                    py-4
                                    text-white
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
                            />

                            <button
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
                                    px-6
                                    py-4
                                    rounded-2xl
                                    shadow-lg
                                    min-w-35
                                "
                                onClick={() => update("Issue")}
                            >
                                Receive
                            </button>

                            <button
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
                                    px-6
                                    py-4
                                    rounded-2xl
                                    shadow-lg
                                    min-w-35
                                "
                                onClick={() => update("Dispatch")}
                            >
                                Issue
                            </button>

                        </div>

                    </div>

                    {/* Transactions List */}
                    <div
                        className="
                            flex
                            flex-col-reverse
                            gap-4
                            overflow-y-auto
                            pr-1
                        "
                    >

                        {
                            txns.map((item) => {

                                if (item.category === "Issue") {
                                    return <Issue key={item._id} item={item} />
                                }
                                else {
                                    return <Dispatch key={item._id} item={item} />
                                }
                            })
                        }

                    </div>

                </div>

            </div>
        </>
    )
}


export default Transactions
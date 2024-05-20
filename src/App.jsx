/** @format */

// /** @format */

// import { signInWithPopup, signOut } from "firebase/auth";
// import "./App.css";
// import { auth, db, provider } from "./firebase";
// import Login from "./Login";
// import { useEffect, useState } from "react";
// // import { addDoc, collection, getDocs } from "firebase/firestore";
// import { MdDelete } from "react-icons/md";
// import { nanoid } from "nanoid";

// function App() {
//   const [expenseList, setExpenseList] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   // Add New expense
//   const [expenseName, setExpenseName] = useState("");
//   const [exAmount, setExAmount] = useState(0);
//   const [expenseDate, setExpenseDate] = useState("06-12-2012");

//   const [user, setUser] = useState(null);
//   // console.log(auth?.currentUser?.displayName || "U");

//   // const expenseCollection = collection(db, "expense");

//   // Sign auth using google
//   const signWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       setUser(result.user);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const getExpenseData = () => {
//     const data = localStorage.getItem("expenses");

//     if (data) {
//       const parseData = JSON.parse(data);
//       const total = parseData.reduce((acc, expe) => acc + expe.amount, 0);
//       setTotalAmount(total);
//       setExpenseList(parseData);
//     }
//   };

//   useEffect(function () {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     getExpenseData();
//     return () => unsubscribe();
//   }, []);

//   // using Firebase **/

//   //   const data = await getDocs(expenseCollection);
//   //   const filterdData = data.docs.map((doc) => ({
//   //     ...doc.data(),
//   //     id: doc.id,
//   //   }));
//   //   const total = filterdData.reduce((acc, expe) => acc + expe.amount, 0);
//   //   setTotalAmount(total);
//   //   setExpenseList(filterdData);
//   // } catch (err) {
//   //   console.error(err);
//   // }
//   // };

//   const addExpenseData = () => {
//     if (!expenseName || !exAmount || !expenseDate) {
//       alert("Please fill in all fields.");
//       return;
//     }
//     const newExpense = {
//       id: nanoid(),
//       title: expenseName,
//       amount: exAmount,
//       date: expenseDate,
//     };
//     console.log(nanoid);

//     const updateExpenses = [...expenseList, newExpense];
//     localStorage.setItem("expenses", JSON.stringify(updateExpenses));
//     setExpenseName("");
//     setExAmount(0);
//     setExpenseDate("06-12-2012");
//     getExpenseData(); // Update expense list
//     // try {
//     //   await addDoc(expenseCollection, {
//     //     title: expenseName,
//     //     amount: exAmount,
//     //     date: expenseDate,
//     //   });
//     //   console.log(addExpenseData);
//     //   getExpenseData();
//     // } catch (err) {
//     //   console.error(err);
//     // }
//   };

//   const deleteExpense = (idToDelete) => {
//     const removeExpense = expenseList.filter(
//       (expense) => expense.id !== idToDelete
//     );
//     setExpenseList(removeExpense);
//     localStorage.setItem("expenses", JSON.stringify(removeExpense));
//   };

//   const logOut = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const resetField = () => {
//     setExAmount("");
//     setExpenseDate("");
//     setExpenseName("");
//   };

//   return (
//     <>
//       <div>
//         <Login signWithGoogle={signWithGoogle} auth={auth} logOut={logOut} />
//       </div>
//       <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full w-full rounded-md">
//         <form className="w-full max-w-xl mx-auto pt-6">
//           <div className="flex flex-wrap -mx-4 mb-4">
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="title" className="block font-bold mb-2">
//                 Title
//               </label>
//               <input
//                 placeholder="Expense name"
//                 required
//                 id="title"
//                 type="text"
//                 onChange={(e) => setExpenseName(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="amount" className="block font-bold mb-2">
//                 Amount
//               </label>
//               <input
//                 placeholder="Amount"
//                 required
//                 id="amount"
//                 type="number"
//                 min="0.01"
//                 step="0.01"
//                 // value={exAmount}
//                 onChange={(e) => setExAmount(Number(e.target.value))}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-4 mb-4">
//               <label htmlFor="date" className="block font-bold mb-2">
//                 Date
//               </label>
//               <input
//                 required
//                 id="date"
//                 type="date"
//                 min="2019-01-01"
//                 max="2024-12-31"
//                 // value={expenseDate}
//                 onChange={(e) => setExpenseDate(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               />
//             </div>
//           </div>
//           <button
//             onClick={resetField}
//             type="submit"
//             className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600 mr-3"
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600"
//             onClick={addExpenseData}
//           >
//             Add Expense
//           </button>
//         </form>

//         <div className="mt-16 text-white text-2xl m-6 rounded-md   ">
//           {expenseList.map((expe) => (
//             <div
//               key={expe.id}
//               className=" items-center justify-between flex  p[20px] h-[90px]  px-4 m-2 pt-2  bg-indigo-800 rounded-md"
//             >
//               <h2 className="border-white border-2 rounded-md p-[8px] px-4 bg-indigo-900 text-center">
//                 {expe.title}
//               </h2>
//               <p className="border-white border p-1 rounded-sm">{expe.date}</p>
//               <div className="flex items-center gap-4 px-8">
//                 <h4 className="font-semibold ">${expe.amount}</h4>
//                 <button
//                   onClick={() => deleteExpense(expe.id)}
//                   className=" text-white rounded-md border-white border p-1 bg-transparent hover:text-red-600 hover:border-red-600"
//                 >
//                   <MdDelete />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <h3 className="text-[24px] font-semibold text-right text-white ml-auto mr-[28px]">
//           Total: 💵${totalAmount}
//         </h3>
//       </div>
//     </>
//   );
// }

// export default App;

/** @format */

import { signInWithPopup, signOut } from "firebase/auth";
import "./App.css";
import { auth, provider } from "./firebase";
import Login from "./Login";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { nanoid } from "nanoid";

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [expenseName, setExpenseName] = useState("");
  const [exAmount, setExAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState("06-12-2012");
  const [user, setUser] = useState(null);

  // Sign in with Google
  const signWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  // Get expense data from local storage
  const getExpenseData = () => {
    const data = localStorage.getItem("expenses");
    if (data) {
      const parseData = JSON.parse(data);
      const total = parseData.reduce((acc, expe) => acc + expe.amount, 0);
      setTotalAmount(total);
      setExpenseList(parseData);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((users) => {
      setUser(users);
    });
    getExpenseData();
    return () => unsubscribe();
  }, []);

  const addExpenseData = (e) => {
    e.preventDefault();
    if (!expenseName || !exAmount || !expenseDate) {
      alert("Please fill in all fields.");
      return;
    }
    const newExpense = {
      id: nanoid(),
      title: expenseName,
      amount: exAmount,
      date: expenseDate,
    };

    const updateExpenses = [...expenseList, newExpense];
    localStorage.setItem("expenses", JSON.stringify(updateExpenses));
    setExpenseName("");
    setExAmount(0);
    setExpenseDate("06-12-2012");
    getExpenseData(); // Update expense list
  };

  const deleteExpense = (idToDelete) => {
    const removeExpense = expenseList.filter(
      (expense) => expense.id !== idToDelete
    );
    setExpenseList(removeExpense);
    localStorage.setItem("expenses", JSON.stringify(removeExpense));
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  const resetField = (e) => {
    e.preventDefault();
    setExAmount("");
    setExpenseDate("");
    setExpenseName("");
  };

  return (
    <>
      <div>
        <Login
          signWithGoogle={signWithGoogle}
          auth={auth}
          logOut={logOut}
          user={user}
        />
      </div>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full w-full rounded-md">
        <form
          className="w-full max-w-xl mx-auto pt-6"
          onSubmit={addExpenseData}
        >
          <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="title" className="block font-bold mb-2">
                Title
              </label>
              <input
                placeholder="Expense name"
                required
                id="title"
                type="text"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="amount" className="block font-bold mb-2">
                Amount
              </label>
              <input
                placeholder="Amount"
                required
                id="amount"
                type="number"
                min="0.01"
                step="0.01"
                value={exAmount}
                onChange={(e) => setExAmount(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="date" className="block font-bold mb-2">
                Date
              </label>
              <input
                required
                id="date"
                type="date"
                min="2019-01-01"
                max="2024-12-31"
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <button
            onClick={resetField}
            className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600 mr-3"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            Add Expense
          </button>
        </form>

        {user && (
          <>
            <div className="mt-16 text-white text-2xl m-6 rounded-md">
              {expenseList.map((expe) => (
                <div
                  key={expe.id}
                  className="items-center justify-between flex p-4 h-[90px] px-4 m-2 bg-indigo-800 rounded-md"
                >
                  <h2 className="border-white border-2 rounded-md p-[8px] px-4 bg-indigo-900 text-center">
                    {expe.title}
                  </h2>
                  <p className="border-white border p-1 rounded-sm">
                    {expe.date}
                  </p>
                  <div className="flex items-center gap-4 px-8">
                    <h4 className="font-semibold ">${expe.amount}</h4>
                    <button
                      onClick={() => deleteExpense(expe.id)}
                      className="text-white rounded-md border-white border p-1 bg-transparent hover:text-red-600 hover:border-red-600"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-[24px] font-semibold text-right text-white ml-auto mr-[28px]">
              Total: 💵${totalAmount}
            </h3>
          </>
        )}
      </div>
    </>
  );
}

export default App;

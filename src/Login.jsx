/** @format */

// /** @format */
// import { useEffect, useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { IoLogOut } from "react-icons/io5";
// import PropTypes from "prop-types";

// function Login({ signWithGoogle, auth, logOut }) {
//   const [userName, setUserName] = useState("U");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     if (auth?.currentUser) {
//       setUserName(auth.currentUser.displayName || "U");
//       setIsAuthenticated(true);
//     } else {
//       setUserName("U");
//       setIsAuthenticated(false);
//     }
//   }, [auth]);
//   const firstLetter = userName.charAt(0).toUpperCase();
//   return (
//     <>
//       <div className="bg-indigo-600 mb-4 py-8 px-4 flex items-center justify-between rounded-md">
//         {!isAuthenticated && (
//           <button
//             className="px-4 py-3 border rounded-[50px] bg-gray-200 text-black hover:bg-gray-300 flex items-center justify-center gap-2"
//             onClick={signWithGoogle}
//           >
//             {<FcGoogle className="font-semibold text-black text-[20px]" />} Sign
//             in with google
//           </button>
//         )}
//         {isAuthenticated && (
//           <>
//             <div className="bg-gray-600 text-white w-36 h-36 rounded-full flex items-center justify-center text-[40px] font-bold">
//               {firstLetter}
//             </div>
//             <div>
//               <button
//                 className="px-4 py-3 border rounded-[50px] bg-gray-200 text-black hover:bg-gray-300 flex items-center justify-center gap-2"
//                 onClick={() => logOut()}
//               >
//                 {<IoLogOut className="font-semibold text-black text-[20px]" />}
//                 LogOut
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// Login.propTypes = {
//   auth: PropTypes.shape({
//     currentUser: PropTypes.shape({
//       displayName: PropTypes.string,
//       photoURL: PropTypes.string,
//     }),
//   }).isRequired,
//   logOut: PropTypes.func.isRequired,
//   signWithGoogle: PropTypes.func.isRequired,
// };

// export default Login;

/** @format */
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogOut } from "react-icons/io5";
import PropTypes from "prop-types";

function Login({ signWithGoogle, auth, logOut, user }) {
  const [userName, setUserName] = useState("U");

  useEffect(() => {
    if (auth?.currentUser) {
      setUserName(auth.currentUser.displayName || user);
    } else {
      setUserName("U");
    }
  }, [auth, user]);

  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <>
      <div className="bg-indigo-600 mb-4 py-8 px-4 flex items-center justify-between rounded-md">
        {!auth.currentUser ? (
          <button
            className="px-4 py-3 border rounded-[50px] bg-gray-200 text-black hover:bg-gray-300 flex items-center justify-center gap-2"
            onClick={signWithGoogle}
          >
            <FcGoogle className="font-semibold text-black text-[20px]" /> Sign
            in with Google
          </button>
        ) : (
          <>
            <div className="bg-gray-600 text-white w-36 h-36 rounded-full flex items-center justify-center text-[40px] font-bold">
              {firstLetter}
            </div>
            <div>
              <button
                className="px-4 py-3 border rounded-[50px] bg-gray-200 text-black hover:bg-gray-300 flex items-center justify-center gap-2"
                onClick={() => {
                  logOut();
                  setUserName("U");
                }}
              >
                <IoLogOut className="font-semibold text-black text-[20px]" />
                LogOut
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

Login.propTypes = {
  auth: PropTypes.shape({
    currentUser: PropTypes.shape({
      displayName: PropTypes.string,
      photoURL: PropTypes.string,
    }),
  }).isRequired,
  logOut: PropTypes.func.isRequired,
  signWithGoogle: PropTypes.func.isRequired,
  user: PropTypes.func.isRequired,
};
export default Login;

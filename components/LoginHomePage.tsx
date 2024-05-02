// import { useContext } from "react";
// import { motion } from "framer-motion";
// import NavBar from "@/components/ui/navbar";
// import LoginContext from "@/utils/contexts/login";

// import { LoginComponent } from "@/components/ui/logincomponent";

// import MarketInfoCard from "@/components/ui/marketcomponents/marketInfoCard";

// interface LoginHomePageProps {
//   name: string;
// }

// export default function LoginHomePage({ name, ...props }: LoginHomePageProps) {
//   const { isLoggedIn, setIsLoggedIn, loginUser } = useContext(LoginContext);

//   const message = "Shop for the latest tech gadgets and more.";

//   return (
//     <motion.main
//       className={`relative w-full h-screen font-audimat`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="flex h-20 shadow-2xl bg-ldgrey ">
//         <NavBar />
//       </div>

//       <header className={`w-full bg-gradient-experimentation-black grid items-center justify-center mb-[4rem]`}>
//         <div>
//           <img src="elipse.png" alt="Market" className="absolute right-0 top-0" />
//           <img src="union.png" className="absolute left-0 bottom-0" />
//         </div>

//         <div
//           className="w-full py-14 sm:py-[8rem] px-12 xl:px-32 2xl:px-[300px] 3xl:px-[400px] flex flex-col sm:flex-row justify-between
//              items-center sm:items-start"
//         >
//           <div
//             className="grid grid-cols-2 sm:flex flex-row sm:flex-col 
//               text-white w-full sm:w-1/2 justify-start mb-4 pr-10 sm:mb-0 gap-y-10"
//           >
//             <p className="text-2xl lg:text-6xl xl:text-[80px] 3xl:text-[112px] font-audimat col-span-2 sm:col-span-0 w-full">
//               Welcome to {name}{" "}
//             </p>
//             <p className="col-span-2 sm:col-span-0 text-xl lg:text-2xl 3xl:text-4xl font-sohnelight w-full">
//               {message}
//             </p>
//           </div>

//           <div className="w-full sm:w-auto z-10">
//             <LoginComponent
//               isLoggedIn={isLoggedIn}
//               setIsLoggedIn={setIsLoggedIn}
//               loginUser={loginUser}
//               name={name}
//             />
//           </div>
//         </div>
//       </header>

//       <section
//         className="relative flex flex-col sm:flex-row justify-center 
//         gap-x-0 gap-y-6 sm:gap-x-6 lg:gap-x-24 py-14 z-0 bg-white !font-sohne px-6"
//       >
//         <MarketInfoCard
//           headerTitleText="Shop Latest Gadgets"
//           subtitleText="Shop the latest gadgets and accessories."
//           imgSrc="marketinfo1.png"
//         />
//         <MarketInfoCard
//           headerTitleText="Exclusive Offers"
//           subtitleText="Get exclusive offers and deals on the latest gadgets."
//           imgSrc="marketinfo2.png"
//         />
//         <MarketInfoCard
//           headerTitleText="Shop Popular Brands"
//           subtitleText="Shop popular brands like Apple, Samsung, and more."
//           imgSrc="marketinfo3.png"
//         />
//       </section>
//     </motion.main>
//   );
// }

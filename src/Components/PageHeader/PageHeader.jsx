import { Link } from "react-router-dom";

const PageHeader = ({ title }) => {
   return (
      <div
         className="px-2 sm:px-6 lg:px-8 pt-32 pb-20 text-center md:text-left lg:pb-28"
         style={{
            background: `linear-gradient(rgba(45,55,60,0.9) 100%,rgba(45,55,60,0.9) 100%), url(https://i.ibb.co/VW8WXdK/banner-1.png)`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
         }}>
         <h2 className="text-2xl md:text-5xl text-white font-barlow font-bold">
            {title}
         </h2>
         <nav className="flex justify-center md:justify-start pr-1 md:pr-5 py-3 mt-2 text-white bg-transparent">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
               <li className="inline-flex items-center">
                  <Link
                     to="/"
                     className="inline-flex items-center text-lg text-white">
                     <svg
                        className="w-3 h-3 mr-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                     </svg>
                     Home
                  </Link>
               </li>
               <li aria-current="page">
                  <div className="flex items-center">
                     <svg
                        className="w-3 h-3 mx-1 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10">
                        <path
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="m1 9 4-4-4-4"
                        />
                     </svg>
                     <span className="ml-1 text-lg text-gray-300 md:ml-2">
                        {title}
                     </span>
                  </div>
               </li>
            </ol>
         </nav>
      </div>
   );
};

export default PageHeader;

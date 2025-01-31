// import styled from "styled-components";
import logoimg from "../assets/Logo/ibj_logo.png";
import styled from "styled-components";

// const Container = styled.div`
//   background-color: #fff2da;
//   padding: 5rem;
//   margin-top: 5rem;
// `;

const Logo = styled.div`
  width: 15rem;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1080px) {
    width: 10rem;
  }
  @media (max-width: 768px) {
    width: 6rem;
  }
`;

export default function Footer() {
  return (
    <>
      <footer className="text-black bg-[#fff2da] body-font mt-9 footer">
        <div className="container px-5 py-[10rem] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Logo>
        <img src={logoimg} alt="" />
      </Logo>
            <p className="mt-2 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div className=" flex justify-center w-[100%] md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className=" md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-[1.2rem] mb-3">
                Contact
              </h2>
              <nav className="list-none  mb-10">
                <li className="py-[.7rem] w-[13rem]">
                  <a href="http://localhost:5173/" className="text-black hover:text-black">
IBJA House, 2nd Agiary Lane,
Zaveri Bazar, Mumbai - 400003.</a>
                </li>
                <li  className="py-[.7rem]">
                  <a className="text-black hover:text-black">
                  +91-22 49098950 / 49098960</a>
                </li>
                <li  className="py-[.7rem]">
                  <a className="text-black hover:text-black">
                  +91-22 23426971</a>
                </li>
                <li  className="py-[.7rem]">
                  <a href="info@ibja.in" className="text-black hover:text-black">info@ibja.in</a>
                </li>
              </nav>
            </div>
            <div className=" md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-[1.2rem] mb-3">
                Information 
              </h2>
              <nav className="list-none  mb-10">
                <li className="py-[.7rem]">
                  <a className="text-black hover:text-black">Terms & Conditions</a>
                </li>
                <li className="py-[.7rem]">
                  <a className="text-black hover:text-black">About Us</a>
                </li>
                <li className="py-[.7rem]">
                  <a className="text-black hover:text-black">Privacy Policy</a>
                </li>
                <li className="py-[.7rem]">
                  <a className="text-black hover:text-black">Contact Us</a>
                </li>
              </nav>
            </div>
             
               <div className=" md:w-1/2 w-full px-4">
            
              <nav className="list-none mt-[-1rem]">
                <li className="py-[.7rem]">
                  <a className="text-black text-[1.8rem] hover:text-black">Subscribe to IBJA Gold Rates,</a>
                </li>
                <li className="py-[.7rem]">
                  <a className="text-black hover:text-black">Email:nagaraj.iyer@ibja.in
</a>
                </li>
                 <li className="py-[.7rem]">
                  <a className="text-black hover:text-black">Mobile: +91 9821161214

</a>
                </li>
              
              </nav>
            </div>
           
          </div>
        </div>
        <div className="bg-[#fbdea9] bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-black text-sm text-center sm:text-left">
              © 2024 IBJA Rates. All Rights Reserved
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-black">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-black">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-black">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-black">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

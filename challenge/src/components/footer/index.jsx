import { useLocation } from "react-router-dom";
import "./footer.css";
import { useEffect, useState } from "react";
const Footer = () => {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setCurrentTab(0);
        break;
      case "/another-route":
        setCurrentTab(1);
        break;
      case "/checkout":
        setCurrentTab(2);
        break;
      case "/another-route2":
        setCurrentTab(3);
        break;
      default:
        setCurrentTab(0);
        break;
    }
  }, [location.pathname]);



  return (
    <footer className="footer">
      <ul className="footer-list">
        <li tabIndex="0" className={currentTab === 0 ? "active" : ""}>
          <a href="/">
            <svg
              width="27px"
              height="27px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Navigation / House_01">
                  {" "}
                  <path
                    id="Vector"
                    d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z"
                    stroke="#8F8F8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </li>
        <li tabIndex="1" className={currentTab === 1 ? "active" : ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 8H14"
              stroke="#8F8F8F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 16H14"
              stroke="#8F8F8F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12H16"
              stroke="#8F8F8F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="3.75"
              y="2.75"
              width="16.5"
              height="18.5"
              rx="3.25"
              stroke="#8F8F8F"
              strokeWidth="1.5"
            />
          </svg>
        </li>
        <li tabIndex="2" className={currentTab === 2 ? "active" : ""}>
          <a href="/checkout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <circle cx="10" cy="5" r="4.25" stroke="#8F8F8F" strokeWidth="1.5" />
              <path
                d="M2.30623 8.59689C2.50953 6.97049 3.89208 5.75 5.53113 5.75H14.4689C16.1079 5.75 17.4905 6.97049 17.6938 8.59689L18.6938 16.5969C18.9362 18.5367 17.4237 20.25 15.4689 20.25H4.53113C2.57626 20.25 1.06375 18.5367 1.30623 16.5969L2.30623 8.59689Z"
                fill=""
                stroke="#8F8F8F"
                strokeWidth="1.5"
              />
              <circle cx="7.75" cy="9.75" r="0.75" fill="#8F8F8F" />
              <circle cx="11.75" cy="9.75" r="0.75" fill="#8F8F8F" />
              <circle cx="17.5" cy="5.5" r="2.75" fill="#FF9F24" stroke="white" strokeWidth="1.5" />
            </svg>
          </a>
        </li>
        <li tabIndex="3" className={currentTab === 3 ? "active" : ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.3845 5.48878C19.1245 5.17878 18.6945 5.08878 18.3145 5.20878C17.5045 5.47878 16.5845 5.40878 15.7845 4.95878C14.9845 4.49878 14.4645 3.73878 14.2845 2.90878C14.1945 2.50878 13.8945 2.17878 13.4945 2.11878C12.4945 1.95878 11.4545 1.95878 10.4345 2.12878C10.0345 2.19878 9.74454 2.51878 9.65454 2.91878C9.47454 3.75878 8.96454 4.51878 8.16454 4.98878C7.36454 5.45878 6.44454 5.51878 5.63454 5.25878C5.25454 5.13878 4.82454 5.22878 4.56454 5.53878C3.91454 6.34878 3.40454 7.24878 3.05454 8.19878C2.91454 8.57878 3.05454 8.99878 3.35454 9.25878C3.98454 9.83878 4.38454 10.6688 4.39454 11.5888C4.39454 12.5188 3.99454 13.3388 3.36454 13.9188C3.06454 14.1888 2.93454 14.6088 3.07454 14.9788C3.25454 15.4488 3.47454 15.9188 3.73454 16.3688C3.99454 16.8188 4.29454 17.2388 4.61454 17.6288C4.87454 17.9388 5.30454 18.0288 5.68454 17.9088C6.49454 17.6388 7.41454 17.7088 8.21454 18.1588C9.01454 18.6188 9.53454 19.3788 9.71454 20.2088C9.80454 20.5988 10.0945 20.9288 10.4945 20.9888C11.5045 21.1488 12.5345 21.1488 13.5545 20.9788C13.9545 20.9088 14.2445 20.5888 14.3345 20.1888C14.5145 19.3488 15.0245 18.5888 15.8245 18.1188C16.6245 17.6488 17.5445 17.5888 18.3545 17.8488C18.7445 17.9688 19.1745 17.8788 19.4245 17.5588C20.0745 16.7488 20.5845 15.8488 20.9445 14.8988C21.0845 14.5188 20.9445 14.0988 20.6445 13.8388C20.0045 13.2688 19.6045 12.4388 19.5945 11.5188C19.5945 10.5888 19.9945 9.76878 20.6245 9.18878C20.9245 8.91878 21.0545 8.49878 20.9145 8.12878C20.7345 7.65878 20.5145 7.18878 20.2545 6.73878C20.0045 6.28878 19.7045 5.87878 19.3845 5.48878Z"
              stroke="#8F8F8F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0046 14.5188C13.6393 14.5188 14.9646 13.1935 14.9646 11.5588C14.9646 9.92399 13.6393 8.59875 12.0046 8.59875C10.3698 8.59875 9.04456 9.92399 9.04456 11.5588C9.04456 13.1935 10.3698 14.5188 12.0046 14.5188Z"
              stroke="#8F8F8F"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

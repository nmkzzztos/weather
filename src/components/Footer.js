import React from "react";

import gitHub from "../images/footer/GitHub.svg";
import linkedIn from "../images/footer/LinkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/anton-guliaev-3071a3215/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="LinkedIn logo" />
          </a>
        </li>
        <li>
          <a href="https://www.nmkzzztos.de" target="_blank" rel="noreferrer">
            <svg display="none">
              <symbol id="logo" viewBox="0 0 916.57 672.67">
                <g>
                  <path
                    class="cls-1"
                    fill="#3da9ff"
                    d="M711.46,162.36c-23.47-25.78-52.66-34.71-85.82-30a7.57,7.57,0,0,1-8.27-5.37C602.57,74.79,572.48,55.73,519,64.3a7.71,7.71,0,0,1-8.42-4.71C494.94,22.37,467.66-.4,425,0c-47.9.5-75.68,27.13-88.62,70.21a7.73,7.73,0,0,1-7.53,5.57c-41.27-.05-68.71,18.86-85.86,58.58-.85,2-4,4-6.27,4.37-61.34,8.87-102.77,69.41-88.48,129.7,10.89,46,48.66,78.84,96.1,82.8a100.37,100.37,0,0,0,51.86-9.12,7.69,7.69,0,0,0,4.17-8c-4.07-33.9,9.07-57.93,39.42-72.67a8.07,8.07,0,0,0,4.46-6.42c1.36-14.05,6.57-26.34,16.5-36.82,11.09-11.84,25.23-17,40.78-19,.25-1.45.4-2.35.55-3.31,4.82-25.53,19-43.78,43.59-52.21,24.32-8.33,46.74-3.31,65.7,14.14,4.41,4.07,18.16,7.18,24.08,5.67,38.11-9.58,67.25,17.76,69.31,57,.25,4.81,1.71,6.92,6.42,8.63,28.19,10.08,43.94,37.56,38.47,67.15a73.11,73.11,0,0,1-3.16,11.09,7.67,7.67,0,0,0,8,10.28c40-4.31,77.59-42.18,80.45-83.86C736.74,206.7,729.77,182.52,711.46,162.36Zm-418.7,42.93-1.5-1.8-5.47,4.81c.75.85,1.51,1.76,2.26,2.61l-4.87-.3c.86-.75,1.76-1.56,2.61-2.31-1.85-2.11-3.66-4.21-5.47-6.32-.8.75-1.65,1.51-2.5,2.26.3-1.41.55-2.81.8-4.21.55.65,1.1,1.3,1.7,1.95,1.86-1.6,3.72-3.26,5.52-4.91-.8-1-1.6-2-2.41-2.91l4.82.75c-.8.7-1.61,1.45-2.41,2.16,1.81,2.15,3.61,4.26,5.42,6.42,1.05-.91,2.15-1.86,3.21-2.81C293.92,202.23,293.36,203.79,292.76,205.29Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M522.27,316.35,566,320.13c-.2,2.5-.41,5-.61,7.5H494.52L537,273.81l-33.25-5.9c.48-2.25,1-4.5,1.45-6.75h65.07Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M377.88,299,416,254.26l-28.2-3.45.2-5h53.26l-38.47,45.06,35.53,2.33-.21,5.83Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M492.92,184.05,477,179.14l.43-3.31h34.61l-23.31,30,20.37,4.51c-.07,1.12-.15,2.23-.23,3.34H470.23Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M245.7,202.23c22.19-.27,37.67-14,38.82-36.83,2.21,23.26,15,35.33,38.33,36.83-23.06,1.87-36.45,13.51-38.2,37.44C282.89,215.35,269,203.88,245.7,202.23Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M404.09,119.85c13.56-.17,23-8.56,23.73-22.52,1.35,14.22,9.18,21.6,23.44,22.52-14.1,1.14-22.29,8.26-23.36,22.89C426.83,127.87,418.34,120.86,404.09,119.85Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M318.76,97.18c10.61-.12,18-6.61,18.57-17.4,1.05,11,7.17,16.7,18.33,17.4-11,.89-17.44,6.39-18.27,17.7C336.55,103.39,329.91,98,318.76,97.18Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M570.29,138.25c7-.13,11.89-6.62,12.25-17.41.7,11,4.74,16.7,12.11,17.41-7.29.88-11.52,6.38-12.07,17.69C582,144.45,577.64,139,570.29,138.25Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M264.64,496.64v90.67c-55.39-6.3-60-11.76-60.91-77-.66-46.42-.13-92.87-.13-138.68,39.11-13.66,66.22-5.43,88.17,38.49C317.44,461.51,349.21,508,384.54,567V368.89h58.68V667.52c-29.65,8.22-55.81,10.88-77.39-25.7-30.08-51-63-99.33-94.68-148.81Z"
                  />
                  <path
                    class="cls-1"
                    fill="#3da9ff"
                    d="M279.35,670H204.7c1.14-21.44,2.21-41.69,3.28-61.83C267.45,608,282.06,620.84,279.35,670Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M620.73,443.94V590.79c-62.1-7.61-67.5-10.44-63.17-74.33,2.76-40.72-18.87-79.31-2-121,8.11-20,15.53-29.76,34.77-27.88,18.14,1.77,36.51.39,54.78.36,58.09-.12,58.09-.13,70.6,76Z"
                  />
                  <path
                    class="cls-1"
                    fill="#3da9ff"
                    d="M462.07,442.7c13.87-80.14,16.22-82.19,78.56-70.77C531.51,447.51,529.21,449.66,462.07,442.7Z"
                  />
                  <path
                    class="cls-2"
                    fill="#3da9ff"
                    d="M618.07,671.39H559.32V606.52C616.76,613.71,623.1,620.24,618.07,671.39Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M829.37,540.37c-15.9,25.65-57.8,19.37-58,63.08l103.91-60c-35.33-20.44-66.39-40-98.94-56.61-18.34-9.35-26.44-20.67-23.61-41.18,1.63-11.85.29-24.11.29-40.41,37.68,21.61,72.12,41.34,106.54,61.1,14,8,28.68,15.17,41.69,24.59,6.64,4.81,10.28,13.76,15.28,20.83l-5.52,5.69-136-78c-8.3,17.83.24,24.84,12.13,31.56C827.9,494,868.29,517.67,912.79,543.4L757.56,633.06l-7.33-1.87c3.52-22.59-.28-51.78,12.54-66C776.43,550.11,799.28,527.94,829.37,540.37Z"
                  />
                  <path
                    class="cls-2"
                    fill="#fff"
                    d="M6.31,522.87l135.41,77.62c8-17.61-.08-24.77-12.13-31.57-40.79-23-81.18-46.72-125.65-72.43l160.77-92.92c-6.76,27.87,12.88,56.12-11.84,73.09C135.11,488.84,116.7,513.17,86.82,499c16.07-24.4,58.27-19.66,58.62-62.64l-104,60.11c34.53,20,64.82,39.36,96.79,55.4,19.94,10,29.08,22.23,25.64,44.59-1.7,11-.29,22.58-.29,38.24C129.1,614.93,98,597.09,66.92,579.21c-17.33-10-35.21-19.17-51.67-30.43C8.56,544.2,5,535.05,0,528Z"
                  />
                </g>
              </symbol>
            </svg>

            <svg className="icon">
              <use xlinkHref="#logo"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nmkzzztos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHub} alt="GitHub logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

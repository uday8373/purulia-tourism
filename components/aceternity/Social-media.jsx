import React from "react";
import {Dock, DockIcon} from "./dock";

const Icons = {
  gitHub: (props) => (
    <svg
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        className="fill-primary"
        d="M16.5732 1.54632C15.9517 1.82122 15.2957 1.99303 14.6051 2.09612C15.2957 1.68377 15.8481 1.03088 16.0898 0.240539C15.4338 0.618527 14.7087 0.893428 13.9146 1.06524C13.2931 0.412352 12.3954 0 11.4286 0C9.56413 0 8.04491 1.51196 8.04491 3.36754C8.04491 3.64244 8.07944 3.88298 8.1485 4.12352C5.35177 3.98606 2.83126 2.64592 1.13941 0.584165C0.863188 1.0996 0.690551 1.64941 0.690551 2.26793C0.690551 3.43626 1.27752 4.46714 2.20976 5.08567C1.65732 5.05131 1.13941 4.91386 0.656023 4.67332V4.70768C0.656023 6.35709 1.82996 7.73159 3.3837 8.04086C3.10748 8.10958 2.79673 8.14394 2.48598 8.14394C2.27882 8.14394 2.03712 8.10958 1.82996 8.07522C2.27882 9.41536 3.52181 10.4119 5.00649 10.4119C3.83256 11.3053 2.3824 11.8551 0.794133 11.8551C0.517913 11.8551 0.241693 11.8551 0 11.8207C1.51921 12.7829 3.28012 13.3327 5.21366 13.3327C11.4631 13.3327 14.8814 8.17831 14.8814 3.71116C14.8814 3.57371 14.8814 3.4019 14.8814 3.26445C15.5374 2.81774 16.1244 2.23357 16.5732 1.54632Z"
      />
    </svg>
  ),
  googleDrive: (props) => (
    <svg
      width="10"
      height="19"
      viewBox="0 0 10 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M2.91512 18.3041V10.1064H0.143188V6.91163H2.91512V4.55556C2.91512 1.82135 4.5931 0.33252 7.04391 0.33252C8.21787 0.33252 9.22683 0.419506 9.52087 0.458386V3.3158L7.8211 3.31656C6.48821 3.31656 6.23013 3.9469 6.23013 4.87189V6.91163H9.40894L8.99505 10.1064H6.23013V18.3041H2.91512Z"
        className="fill-primary"
      />
    </svg>
  ),
  notion: (props) => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M10.1393 1.80182C12.822 1.80182 13.1397 1.81182 14.1995 1.85991C14.8366 1.86767 15.4678 1.98412 16.0654 2.20418C16.4988 2.37053 16.8924 2.62535 17.2209 2.95224C17.5494 3.27913 17.8054 3.67085 17.9725 4.10219C18.1937 4.69697 18.3107 5.32509 18.3185 5.95924C18.3663 7.01395 18.3768 7.33013 18.3768 10C18.3768 12.6699 18.3668 12.986 18.3185 14.0408C18.3107 14.6749 18.1937 15.303 17.9725 15.8978C17.8054 16.3291 17.5494 16.7209 17.2209 17.0478C16.8924 17.3747 16.4988 17.6295 16.0654 17.7958C15.4678 18.0159 14.8366 18.1323 14.1995 18.1401C13.1402 18.1877 12.8225 18.1982 10.1393 18.1982C7.45614 18.1982 7.13845 18.1882 6.07916 18.1401C5.44197 18.1323 4.81083 18.0159 4.21319 17.7958C3.77979 17.6295 3.38619 17.3747 3.05773 17.0478C2.72927 16.7209 2.47322 16.3291 2.30608 15.8978C2.08496 15.303 1.96795 14.6749 1.96016 14.0408C1.91231 12.986 1.90178 12.6699 1.90178 10C1.90178 7.33013 1.91183 7.01395 1.96016 5.95924C1.96795 5.32509 2.08496 4.69697 2.30608 4.10219C2.47322 3.67085 2.72927 3.27913 3.05773 2.95224C3.38619 2.62535 3.77979 2.37053 4.21319 2.20418C4.81083 1.98412 5.44197 1.86767 6.07916 1.85991C7.13893 1.81229 7.45662 1.80182 10.1393 1.80182ZM10.1393 0C7.41213 0 7.0686 0.011428 5.99686 0.0599971C5.16294 0.0765049 4.33787 0.233646 3.55675 0.524737C2.88668 0.775994 2.27976 1.16974 1.77834 1.67849C1.26669 2.17769 0.870715 2.78206 0.618095 3.44936C0.325607 4.22675 0.167712 5.04788 0.151125 5.87782C0.10328 6.94348 0.0917969 7.28537 0.0917969 9.99952C0.0917969 12.7137 0.10328 13.0556 0.152082 14.1222C0.168669 14.9521 0.326564 15.7733 0.619052 16.5506C0.871392 17.2179 1.26703 17.8222 1.77834 18.3215C2.28004 18.8304 2.88729 19.2241 3.55771 19.4753C4.33883 19.7664 5.1639 19.9235 5.99782 19.94C7.06955 19.9876 7.41165 20 10.1403 20C12.8689 20 13.211 19.9886 14.2827 19.94C15.1166 19.9235 15.9417 19.7664 16.7228 19.4753C17.3901 19.2179 17.996 18.8247 18.5018 18.3209C19.0077 17.8172 19.4023 17.2139 19.6605 16.5497C19.953 15.7723 20.1109 14.9512 20.1275 14.1212C20.1753 13.0556 20.1868 12.7137 20.1868 9.99952C20.1868 7.28537 20.1753 6.94348 20.1265 5.87686C20.1099 5.04693 19.9521 4.2258 19.6596 3.44841C19.4072 2.78119 19.0116 2.17684 18.5003 1.67754C17.9986 1.16867 17.3913 0.774919 16.7209 0.523785C15.9398 0.232694 15.1147 0.0755526 14.2808 0.0590448C13.21 0.0114281 12.8665 0 10.1393 0Z"
        className="fill-primary"
      />
      <path
        d="M10.1375 4.86475C9.11706 4.86475 8.1195 5.16591 7.271 5.73015C6.42251 6.29439 5.76118 7.09637 5.37066 8.03466C4.98014 8.97296 4.87796 10.0054 5.07705 11.0015C5.27613 11.9976 5.76754 12.9126 6.48913 13.6307C7.21072 14.3489 8.13008 14.8379 9.13095 15.0361C10.1318 15.2342 11.1693 15.1325 12.1121 14.7439C13.0549 14.3552 13.8607 13.697 14.4276 12.8526C14.9946 12.0081 15.2972 11.0153 15.2972 9.99974C15.2972 8.63786 14.7536 7.33175 13.786 6.36875C12.8183 5.40575 11.506 4.86475 10.1375 4.86475ZM10.1375 13.3329C9.47514 13.3329 8.82761 13.1374 8.27684 12.7712C7.72608 12.4049 7.2968 11.8843 7.04331 11.2753C6.78982 10.6662 6.7235 9.99604 6.85273 9.34947C6.98196 8.7029 7.30093 8.10898 7.76932 7.64283C8.23771 7.17668 8.83448 6.85922 9.48415 6.73061C10.1338 6.602 10.8072 6.66801 11.4192 6.92029C12.0312 7.17257 12.5543 7.59979 12.9223 8.14793C13.2903 8.69606 13.4867 9.3405 13.4867 9.99974C13.4867 10.8838 13.1339 11.7316 12.5058 12.3567C11.8777 12.9817 11.0258 13.3329 10.1375 13.3329Z"
        className="fill-primary"
      />
      <path
        d="M15.5025 5.8618C16.1683 5.8618 16.7082 5.32457 16.7082 4.66186C16.7082 3.99915 16.1683 3.46191 15.5025 3.46191C14.8366 3.46191 14.2968 3.99915 14.2968 4.66186C14.2968 5.32457 14.8366 5.8618 15.5025 5.8618Z"
        className="fill-primary"
      />
    </svg>
  ),
  linkedIn: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 100 100"
      {...props}>
      <g>
        <path
          className="fill-business"
          d="M90 90V60.7c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3H38.3V90h16.6V63.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26H90zM11.3 36.6h16.6V90H11.3zM19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z"></path>
      </g>
    </svg>
  ),
};

export default function SocialMediaDemo() {
  return (
    <>
      <Dock>
        <DockIcon link={"https://x.com/erexstudio"}>
          <Icons.gitHub className="w-6 h-6" />
        </DockIcon>
        <DockIcon link={"https://www.facebook.com/erexstudio/"}>
          <Icons.googleDrive className="w-6 h-6" />
        </DockIcon>
        <DockIcon link={"https://www.instagram.com/erexstudio/"}>
          <Icons.notion className="w-6 h-6" />
        </DockIcon>
        <DockIcon link={"https://www.linkedin.com/company/erexstudio/"}>
          <Icons.linkedIn className="w-6 h-6" />
        </DockIcon>
      </Dock>
    </>
  );
}
import LocalFont from "next/font/local";
const poppinsFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  style: "normal",
  display: "block",
});

export default poppinsFont;

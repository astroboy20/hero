import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import { ChakraProvider } from "@chakra-ui/react";
export default function App({ Component, pageProps }) {
  useEffect(()=>{
AOS.init({
  duration:8000,
  once:false
})
  },[])
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

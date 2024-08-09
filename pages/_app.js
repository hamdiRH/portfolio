import Aos from "@/components/Aos";
import { SessionProvider } from "next-auth/react";
import "@/styles/backOffice.scss";
import "@/styles/frontOffice.scss";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Aos>
        <Component {...pageProps} />
      </Aos>
    </SessionProvider>
  );
}

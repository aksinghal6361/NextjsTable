import "../node_modules/bootstrap/dist/css/bootstrap.css"; // Add this line

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

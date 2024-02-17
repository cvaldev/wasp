import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import "@/styles/globals.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

export default function App({ Component, pageProps }) {
    return (
        <AppCacheProvider {...pageProps}>
            <ResponsiveAppBar />
            <Component {...pageProps} />
        </AppCacheProvider>
    );
}

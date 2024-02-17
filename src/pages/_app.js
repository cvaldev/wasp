import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

export default function App({ Component, pageProps }) {
    return (
        <AppCacheProvider {...pageProps}>
            <Component {...pageProps} />
        </AppCacheProvider>
    );
}

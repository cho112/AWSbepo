import DefaultLayout from "../component/DefaultLayout"


const App = ({ Component, pageProps }) => {
    return (
        <>
            <DefaultLayout>
                App먼저야
                <br/>
                <Component {...pageProps}/>
            </DefaultLayout>    
        </>
    )
}
export default App
import Layout from '../components/layout';
import { ProductContextProvider } from '../context/AppContext';
import '../styles/globals.css';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ProductContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ProductContextProvider>
		</>
	);
}

export default MyApp;

import store from "@/redux/store";
import { Provider } from "react-redux";
import ReactModal from "react-modal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import '../styles/index.scss';
import { GoogleOAuthProvider } from "@react-oauth/google";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

if (typeof window !== "undefined") {
  ReactModal.setAppElement("body");
}

// stripe
const NEXT_PUBLIC_STRIPE_KEY = 'pk_test_51NYXCFGndYsQkAEFifIbJH64sZFMDpF7DcLYvUUN2az3VdK1M7qVPo7Z2j9rhunf3Pd0C3aFLENIxFriJWwx1P6a00lQFqaoc6';
const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_KEY);
const NEXT_PUBLIC_GOOGLE_CLIENT_ID = '263249757667-ipffv97o0f6o85isq24rafulo5vs9uta.apps.googleusercontent.com'
export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId={NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <div id="root">
            <Component {...pageProps} />
          </div>
        </Elements>
      </Provider>
    </GoogleOAuthProvider>
  )
}

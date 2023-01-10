import { loadStripe } from '@stripe/stripe-js'

//console.log(process.env)
export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)//("pk_test_51MObdvSAX6Eapoxx9gBCFQSLX8IHZztQtJcRmdgIoxMfQKJmtHuwLbgGSZqUJLeyQBx2FBChNTMvheEd3fx8yP67001CxtM4Yz")
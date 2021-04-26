import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51IjOZtG0Y8lsvdqXxHE5eLxIT4xs5SaqzinQLt1vIGHXlxOot9Ywo01IGRYiFlzdgz0OfXFzvbKp6rMJsr87BbmG00DsnV772c";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Succesful");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clouthing Ltd"
			billingAddress
			shippingAddress
			image={`${process.env.PUBLIC_URL}/images/stripe_icon.svg`}
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;

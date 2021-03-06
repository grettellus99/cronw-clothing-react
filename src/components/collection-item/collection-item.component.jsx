import React from "react";

import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})` }}
			/>
			<div className="collection-footer">
				<span>{name}</span>
				<span>{price}$</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to Cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

import React from "react";
import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { Card } from "./Card";


export const App = () => {
	return (
		<AppContainer>
			<Column text="To Do">
				<Card text="Generate app scaffold"/>
			</Column>

			<Column text="In Progress">
				<Card text="Learn typescript"/>
			</Column>

			<Column text="Done">
				<Card text="Begin to use static typing"/>
			</Column>
			<AddNewItem toggleButtonText="+ Add Another list" onAdd={console.log} />
		</AppContainer>
	);
};

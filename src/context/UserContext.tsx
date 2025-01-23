import {
	JSXElement,
	Component,
	createContext,
	createMemo,
	ChildrenReturn,
} from "solid-js";

import { createStore } from "solid-js/store";

export const UserContext = createContext();

interface UserContextProps {
	children: JSXElement;
}

export const UserContextProvider: Component<UserContextProps> = (
	props
): JSXElement => {
	const [user, setUser] = createStore();

	const userInfo = createMemo(() => user);
	return (
		<UserContext.Provider value={userInfo}>
			{props.children}
		</UserContext.Provider>
	);
};

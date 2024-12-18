"use client";

import { useAppSelector, useAppDispatch } from "../libs/store/hooks";
import { increment, decrement, incrementByAmount } from "../libs/store/slices/counterSlice";

export default function Counter() {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div style={{ textAlign: "center", marginTop: "2rem" }}>
			<h1>Redux Toolkit Counter</h1>
			<h2>Count: {count}</h2>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
		</div>
	);
}

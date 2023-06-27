import { useDispatch } from "react-redux";
import { useAppSelector } from "./store/root";
import React, { useRef, useState } from "react";
import { down, up } from "./store/slice/count";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
	const [toDo, setTodo] = useState<string[]>([]);
	const textRef = useRef<HTMLInputElement>(null);
	const count = useAppSelector((state) => state.count);
	const dispatch = useDispatch();

	const handleIncrease = () => {
		dispatch(up());
	};

	const handleDecrease = () => {
		dispatch(down());
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (textRef.current) {
			setTodo([...toDo, textRef.current.value]);
			textRef.current.value = "";
		}
	};

	return (
		<>
			<div>
				<Link to='/count'>go count</Link>
			</div>
			<div>
				{count.value}
				<button onClick={handleIncrease}>add</button>
				<button onClick={handleDecrease}>minus</button>
			</div>
			<form onSubmit={handleSubmit}>
				<input type='text' ref={textRef} />
				<button>submit</button>
			</form>
			<div>
				<ul>
					{toDo.map((text, idx) => {
						return (
							<li key={idx}>
								{text}
								<button>DEL</button>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default App;

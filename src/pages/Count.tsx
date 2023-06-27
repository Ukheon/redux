import { useAppSelector } from "../store/root";
import { Link } from "react-router-dom";

export const Count = () => {
	const count = useAppSelector((state) => state.count);
	return (
		<div>
			<Link to='/'>goHome</Link>
			{count.value};
		</div>
	);
};

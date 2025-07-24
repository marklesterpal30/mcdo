import { useRef } from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useUserQueryStore from "../store";

const SearchInput = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const setUserId = useUserQueryStore((s) => s.setUserId);

	const handleSearch = (event: React.FormEvent) => {
		event.preventDefault();
		if (inputRef.current) {
			const value = inputRef.current.value.trim();
			if (value === "") {
				setUserId(undefined); // Reset to show all users
			} else {
				const parsedId = parseInt(value);
				if (!isNaN(parsedId)) {
					setUserId(parsedId);
				}
			}
		}
	};

	return (
		<form onSubmit={handleSearch}>
			<InputGroup mb={4}>
				<InputLeftElement pointerEvents="none" children={<BsSearch />} />
				<Input
					ref={inputRef}
					borderRadius={20}
					placeholder="Search user by ID..."
					variant="filled"
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;

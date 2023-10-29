import {
	useHMSActions,
} from "@100mslive/react-sdk";

function Header() {
	const hmsActions = useHMSActions();

	return (
		<header>

            <button
                id="leave-btn"
                className="btn-danger"
                onClick={() => hmsActions.leave()}
            >
                Leave Room
            </button>

		</header>
	);
}

export default Header;
  
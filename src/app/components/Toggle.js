"use client";

const Toggle = ({ setToggleHandler }) => {
	return (
		<>
			<div className="container vh-3">
				<div className="dropdown m-3">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						id="dropdownMenuButton1"
						aria-expanded="false"
					>
						Category
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<a
								className="dropdown-item"
								onClick={(e) => {
									setToggleHandler(e.target.innerHTML);
								}}
							>
								gender
							</a>
						</li>
						<li>
							<a
								className="dropdown-item"
								onClick={(e) => {
									setToggleHandler(e.target.innerHTML);
								}}
							>
								religion
							</a>
						</li>
						<li>
							<a
								className="dropdown-item"
								onClick={(e) => {
									setToggleHandler(e.target.innerHTML);
								}}
							>
								sexuality
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Toggle;

/** @format */

"use client";
const Toggle = ({ toggleTrait, setToggleTrait }) => {
	return (
		<>
			<div className={"container vh-3"}>
				<div className="dropdown m-3 float-end">
					<button
						className={"btn bg-white border btn-white dropdown-toggle"}
						type="button"
						data-bs-toggle="dropdown"
						id="dropdownMenuButton1"
						aria-expanded="false"
					>
						{toggleTrait}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<a
								onClick={(event) => setToggleTrait(event.target.innerHTML.toLowerCase())}
								className="dropdown-item"
							>
								gender
							</a>
						</li>
						<li>
							<a
								onClick={(event) => setToggleTrait(event.target.innerHTML.toLowerCase())}
								className="dropdown-item"
							>
								religion
							</a>
						</li>
						<li>
							<a
								onClick={(event) => setToggleTrait(event.target.innerHTML.toLowerCase())}
								className="dropdown-item"
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

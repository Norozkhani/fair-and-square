"use client";
const Toggle = ({ setToggleHandler }) => {
  let [toggle, setToggle] = useState(false);
  const onClickHandler = (e) => {
    setToggle(() => {
      setToggleHandler(e.target.innerHTML);
    });
  };
  return (
    <>
      <div className="container vh-3 ">
        <div className="dropdown m-3">
          <button
            className="btn bg-white border btn-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            id="dropdownMenuButton1"
            aria-expanded="false"
          >
            Traits
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" onClick={onClickHandler}>
                gender
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={onClickHandler}>
                religion
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={onClickHandler}>
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

import Social from "./social";

const Header = () => {
  return (
    <header>
      <div className="grid grid-rows-3 gap-2">
        <div className="grid grid-cols-2">
          <h1>
            <span>
              <a className="font-bold" href="/">
                fespinosa.<span className="text-blue-1000">dev</span>
              </a>
            </span>
          </h1>
          <p className="text-gray-600">
            writing by{" "}
            <a className="text-blue-1000 font-sans" href="#">
              Fernando Espinosa
            </a>
          </p>
        </div>
        <div className="text-gray-700">
          <p>“Simplicity is the soul of efficiency.” – Austin Freeman</p>
        </div>
        <div>
          <Social website={"#"} github={"#"} twitter={"#"} linkedin={"#"} />
        </div>
      </div>
    </header>
  );
};

export default Header;

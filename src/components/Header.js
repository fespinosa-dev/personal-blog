import Social from "./social";

const Header = () => {
  return (
    <header>
      <div className="grid grid-rows-3">
        <div className="grid grid-cols-2">
          <h1>
            <span>
              <a href="/">
                fespinosa.<span>dev</span>
              </a>
            </span>
          </h1>
          <p>
            writing by <a href="#">Fernando Espinosa</a>
          </p>
        </div>
        <div>
          <p>Welcom to my blog!</p>
        </div>
        <div>
          <Social website={"#"} github={"#"} twitter={"#"} linkedin={"#"} />
        </div>
      </div>
    </header>
  );
};

export default Header;

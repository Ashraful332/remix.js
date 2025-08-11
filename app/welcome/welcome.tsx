import "./wel.css";

type WelcomeProps = {
  head: string;
  data: string;
};

export function Welcome({ head, data }: WelcomeProps) {
  return (
    <div className="main-home-div">
      <div className="child-home-div">
        <h3>{head}</h3>
        <p>{data}</p>
      </div>
    </div>
  );
}

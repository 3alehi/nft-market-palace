import Link from "next/link";

export default async function NotFound() {
  return (
    <div>
      <center>
        <h1 style={{ color: "white" }}>404 NotFound</h1>
        <Link className="link" href={"/"}>
          {" "}
          <button className="btn_link">Back to Home</button>
        </Link>
      </center>
    </div>
  );
}

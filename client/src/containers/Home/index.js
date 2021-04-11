import Header from "../../components/Header";

export default function Home() {


  return (
    <>
      <Header/>
      <h1>Home</h1>
      <h1>Welcome {localStorage.getItem("role")}!</h1>
    </>
  );
}


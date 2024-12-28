import love from "./assets/love-letter.gif";
const Header = () => {
  return (
    <header className="text-center w-full flex-col h-screen flex justify-center items-center  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-4xl font-bold">Happy Birthday, My Love!</h1>
      <img src={love} width={"200px"} alt="" />
      <div className="font-bold">Aik pyar bhara khat hai apky naam </div>
    </header>
  );
};

export default Header;

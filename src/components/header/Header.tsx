import headerImage from "../../assets/header_image.jpg";

function Header() {
    return (
        <div className="mt-2 flex flex-col justify-center items-center">
            <h1 className="tracking-[0.6rem] text-5xl text-blue-400">Shopping List</h1>
            <div className="mt-6 w-[300px] h-[300px]">
            <img src={headerImage} alt="Shopping image" className="w-full h-full" />
            </div>
        </div>
    )
}

export default Header;
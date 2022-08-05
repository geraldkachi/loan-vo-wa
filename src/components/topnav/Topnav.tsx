import { Link } from "react-router-dom"
import HelloIcon from "../../assets/dashboard/dashHomeIcon"
import NotificationIcon from "../../assets/navbar/NotificationIcon"
const TopNav = () => {
    return (
        <section>
            <div className="flex items-center justify-between p-5">

                <div>
                    <div className="flex items-center gap-5">
                        <span className="text-base">Hello Lord Gerald Kachi </span>
                        <HelloIcon className="inline-block ml-3" />
                    </div>
                    <h1 className="text-3xl font-bold">Welcome Back!</h1>
                </div>

                <div className="flex items-center gap-5">
                    <div className="notification w-12 h-12 cursor-pointer rounded-full border border-[#C0C2C2] flex items-center justify-center">
                        <NotificationIcon />
                    </div>

                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="Avatar" className="rounded-full cursor-pointer w-12 shadow-lg" />
                </div>
            </div>
        </section>

    )
}

export default TopNav

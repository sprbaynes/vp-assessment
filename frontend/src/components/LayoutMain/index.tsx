import { Outlet } from "react-router-dom";

export default function LayoutMain()
{

    return (
        <div className="mx-auto">
            <main>
                <h1>Main Layout</h1>
                {/*TODO: Nav */}
                <Outlet/>
                {/*TODO: Footer */}  
            </main>
        </div>
    )
}
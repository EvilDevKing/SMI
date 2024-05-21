import React, {useState} from "react"
import "./style.scss"

const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState(false)

    return (
        <div className="mnavbar">
            <div className={"toggle-menu" + (isNavOpen ? " expand" : "")}>
                <div className="toggle-icon" onClick={() => setNavOpen(!isNavOpen)}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
            <div className={"navs" + (isNavOpen ? " expand" : "")}>
                <a href="/createnew" className="theme-btn f-bold" onClick={() => setNavOpen(false)}>Create New</a>
                <a href="/search" className="theme-btn f-bold" onClick={() => setNavOpen(false)}>Search</a>
                <a href="/dashboard" className="theme-btn f-bold" onClick={() => setNavOpen(false)}>User Dashboard</a>
                <a href="/createreport" className="theme-btn f-bold" onClick={() => setNavOpen(false)}>Create Report</a>
            </div>
        </div>
    )
}

export default Navbar
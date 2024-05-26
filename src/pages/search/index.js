import React, {useState, useEffect} from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import calendar_range_icon from "resources/calendar-range.svg"
import "react-multi-date-picker/styles/layouts/mobile.css"
import "./style.scss"

const SearchPage = () => {
    const [smi_title, setSmiTitle] = useState('')
    const [owner, setOwner] = useState('')
    const [origin, setOrigin] = useState('')
    const [extra_origins, setExtraOrigins] = useState('')
    const [improve_area, setImproveArea] = useState('')
    const [description, setDescription] = useState('')
    const [division, setDivision] = useState('')
    const [department, setDepartment] = useState('')
    const [stage, setStage] = useState('')
    const [isAreaDropdownOpen, setAreaDropdownOpen] = useState(false)
    const [isDivisionDropdownOpen, setDivisionDropdownOpen] = useState(false)
    const [isDepartDropdownOpen, setDepartDropdownOpen] = useState(false)
    const [isStageDropdownOpen, setStageDropdownOpen] = useState(false)
    const [isCreateDateOpen, setCreateDateOpen] = useState(false)
    const [startCreateDate, setStartCreateDate] = useState('__/ __/ __')
    const [endCreateDate, setEndCreateDate] = useState('__/ __/ __')
    const [isModifyDateOpen, setModifyDateOpen] = useState(false)
    const [startModifyDate, setStartModifyDate] = useState('__/ __/ __')
    const [endModifyDate, setEndModifyDate] = useState('__/ __/ __')

    function isEmpty(obj) {
        for (const prop in obj) {
          if (Object.hasOwn(obj, prop)) {
            return false;
          }
        }
      
        return true;
    }

    const applyDate = (date, format, flag) => {
        let startObject, endObject = {}
        if (date.length == 1) {
            startObject = { date: date[0], format }
            endObject = {}
        } else if (date.length > 1) {
            startObject = { date: date[0], format }
            endObject = { date: date[1], format }
        }
        if (flag == 1) {
            setStartCreateDate(new DateObject(startObject).format())
            if (isEmpty(endObject))
                setEndCreateDate("__/ __/ __")
            else
                setEndCreateDate(new DateObject(endObject).format())

        } else {
            setStartModifyDate(new DateObject(startObject).format())
            if (isEmpty(endObject))
                setEndModifyDate("__/ __/ __")
            else
                setEndModifyDate(new DateObject(endObject).format())
        }
    }

    const getRangeDateObject = (start, end) => {
        let startDate = new Date(start)
        let endDate = new Date(end)
        let startDateObject = new DateObject().setDay(startDate.getDate())
        let endDateObject = new DateObject().setDay(endDate.getDate()).add(endDate.getMonth() - startDate.getMonth(), "month")
        return [startDateObject, endDateObject]
    }

    return (
        <div className="page-search">
            <p className="f-bold fs-20 fc-primary text-center">Search</p>
            <form className="search-form px-10">
                <div className="form-section mt-20">
                    <input type="number" min={1} max={99999} className="input-control bordered w-100" placeholder="Number (5 digits)" />
                </div>
                <div className="form-section mt-10">
                    <label className="fs-14 fc-grey">Create Date Range</label>
                    <div className="d-flex">
                        <div className="d-flex w-50 bordered border-darkgrey">
                            <span className="d-flex justify-content-center align-items-center fs-14 w-75 h-100" >{startCreateDate}</span>
                            <span className="f-regular-italic fc-grey">thru</span>
                            <span className="d-flex justify-content-center align-items-center fs-14 w-75">{endCreateDate}</span>
                        </div>
                        <button type="button" className="icon-btn" onClick={() => setCreateDateOpen(!isCreateDateOpen)}><img src={calendar_range_icon} width={20} alt="" /></button>
                    </div>
                    {
                        isCreateDateOpen ? 
                            <Calendar
                                value={getRangeDateObject(startCreateDate, endCreateDate)}
                                onChange={(date, format) => applyDate(date, "MM/DD/YY", 1)}
                                range
                                numberOfMonths={2}
                                className="mt-10"
                            />
                        : <></>
                    }
                </div>
                <div className="form-section mt-10">
                    <label className="fs-14 fc-grey">Date Modified Range</label>
                    <div className="d-flex">
                        <div className="d-flex w-50 bordered border-darkgrey">
                            <span className="d-flex justify-content-center align-items-center fs-14 w-75 h-100" >{startModifyDate}</span>
                            <span className="f-regular-italic fc-grey">thru</span>
                            <span className="d-flex justify-content-center align-items-center fs-14 w-75">{endModifyDate}</span>
                        </div>
                        <button type="button" className="icon-btn" onClick={() => setModifyDateOpen(!isModifyDateOpen)}><img src={calendar_range_icon} width={20} alt="" /></button>
                    </div>
                    {
                        isModifyDateOpen ? 
                            <Calendar
                                value={getRangeDateObject(startModifyDate, endModifyDate)}
                                onChange={(date, format) => applyDate(date, "MM/DD/YY", 2)}
                                range
                                numberOfMonths={2}
                                className="mt-10"
                            />
                        : <></>
                    }
                </div>
                <div className="form-section mt-10">
                    <label className="fs-14 fc-grey f-regular-italic">Quick Select</label>
                    <div className="button-group">
                        <button type="button" className="bg-grey">Annual Quarter to Date</button>
                        <button type="button" className="bg-grey">Annual Year to Date</button>
                        <button type="button" className="bg-grey">Fiscal Quarter to Date</button>
                        <button type="button" className="bg-grey">Fiscal Year to Date</button>
                    </div>
                </div>
                <div className="form-section mt-20">
                    <p className="w-100 text-center fs-18 fc-darkgrey">Additional Search Criteria</p>
                </div>
                <div className={"form-section mt-10 bordered" + (smi_title==="" ? " border-red" : " border-green")}>
                    <input
                        className="input-control px-10 w-100"
                        type="text"
                        name="smi_title"
                        placeholder="SMI Title"
                        value={smi_title}
                        onChange={(e) => setSmiTitle(e.target.value)} />
                </div>
                <div className={"form-section mt-1 bordered" + (owner==="" ? " border-red" : " border-green")}>
                    <input
                        className="input-control px-10 w-100"
                        type="text"
                        name="owner"
                        placeholder="Owner"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)} />
                </div>
                <div className={"form-section mt-1 bordered" + (origin==="" ? " border-red" : " border-green")}>
                    <input
                        className="input-control px-10 w-100"
                        type="text"
                        name="origin"
                        placeholder="Originator"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)} />
                </div>
                <div className={"form-section mt-1 bordered" + (extra_origins==="" ? " border-red" : " border-green")}>
                    <input
                        className="input-control px-10 w-100"
                        type="text"
                        name="extra_origins"
                        placeholder="Additional Originator(s)"
                        value={extra_origins}
                        onChange={(e) => setExtraOrigins(e.target.value)} />
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center" + (improve_area==="" ? " border-red" : " border-green")}>
                    <input className="input-control px-10" type="text" name="improve_area" placeholder="Improvement Area" value={improve_area} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setAreaDropdownOpen(!isAreaDropdownOpen)}>Select</button>
                    <div className={"dropdown-content" + (isAreaDropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-around py-1">
                            <button type="button" className="f-regular-italic bg-grey">Tab twice to Select</button>
                            <p className="fs-12 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus">
                            {
                                [1,2,3,4,5,6,7,8,9,10,11].map((value, i) => {
                                    return (<li key={i} onClick={(e) => {
                                            setAreaDropdownOpen(false)
                                            setImproveArea("Example"+value)
                                        }}>
                                        Example{value}
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={"form-section mt-1 bordered d-flex align-items-center" + (description==="" ? "" : " border-green")}>
                    <input
                        className="input-control px-10 w-100"
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                    <span className="fs-12 position-absolute r-0 fc-grey f-regular-italic mr-5">Enter any keywords</span>
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center" + (division==="" ? " border-red" : " border-green")}>
                    <input className="input-control px-10" type="text" name="division" placeholder="Division" value={division} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setDivisionDropdownOpen(!isDivisionDropdownOpen)}>Select</button>
                    <div className={"dropdown-content" + (isDivisionDropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-around py-1">
                            <button type="button" className="f-regular-italic bg-grey">Tab twice to Select</button>
                            <p className="fs-12 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus">
                            {
                                [1,2,3,4,5,6,7,8,9,10,11].map((value, i) => {
                                    return (<li key={i} onClick={(e) => {
                                            setDivisionDropdownOpen(false)
                                            setDivision("Example"+value)
                                        }}>
                                        Example{value}
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center" + (department==="" ? " border-red" : " border-green")}>
                    <input className="input-control px-10" type="text" name="department" placeholder="Department" value={department} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setDepartDropdownOpen(!isDepartDropdownOpen)}>Select</button>
                    <div className={"dropdown-content" + (isDepartDropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-around py-1">
                            <button type="button" className="f-regular-italic bg-grey">Tab twice to Select</button>
                            <p className="fs-12 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus">
                            {
                                [1,2,3,4,5,6,7,8,9,10,11].map((value, i) => {
                                    return (<li key={i} onClick={(e) => {
                                            setDepartDropdownOpen(false)
                                            setDepartment("Example"+value)
                                        }}>
                                        Example{value}
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center" + (stage==="" ? " border-red" : " border-green")}>
                    <input className="input-control px-10" type="text" name="stage" placeholder="SMI Stage" value={stage} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setStageDropdownOpen(!isStageDropdownOpen)}>Select</button>
                    <div className={"dropdown-content" + (isStageDropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-around py-1">
                            <button type="button" className="f-regular-italic bg-grey">Tab twice to Select</button>
                            <p className="fs-12 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus">
                            {
                                [1,2,3,4,5,6,7,8,9,10,11].map((value, i) => {
                                    return (<li key={i} onClick={(e) => {
                                            setStageDropdownOpen(false)
                                            setStage("Example"+value)
                                        }}>
                                        Example{value}
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="form-section d-flex justify-content-around mt-20">
                    <button type="button" className="submit-btn bg-prim" onClick={() => window.location.href = "/searchresult"}>SEARCH</button>
                    <button type="button" className="submit-btn bg-grey">Clear Search Fields</button>
                </div>
            </form>
        </div>
    )
}

export default SearchPage
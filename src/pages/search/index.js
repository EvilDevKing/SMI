import React, {useState} from "react";
import { CalendarRange } from "react-bootstrap-icons"
import "./style.scss"

const SearchPage = () => {
    const [v_field1, setVField1] = useState('')
    const [v_field2, setVField2] = useState('')
    const [v_field3, setVField3] = useState('')
    const [v_field4, setVField4] = useState('')
    const [v_field5, setVField5] = useState('')
    const [v_field6, setVField6] = useState('')
    const [v_field7, setVField7] = useState('')
    const [v_field8, setVField8] = useState('')
    const [v_description, setVDescription] = useState('')
    const [isField5DropdownOpen, setField5DropdownOpen] = useState(false)
    const [isField6DropdownOpen, setField6DropdownOpen] = useState(false)
    const [isField7DropdownOpen, setField7DropdownOpen] = useState(false)
    const [isField8DropdownOpen, setField8DropdownOpen] = useState(false)


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
                            <input type="text" placeholder="__/__/__" className="input-control fs-12 border-none w-75" />
                            <span className="f-regular-italic fc-grey">thru</span>
                            <input type="text" placeholder="__/__/__" className="input-control fs-12 border-none ml-10 w-75" />
                        </div>
                        <button type="button" className="icon-btn"><CalendarRange /></button>
                    </div>
                </div>
                <div className="form-section mt-10">
                    <label className="fs-14 fc-grey">Date Modified Range</label>
                    <div className="d-flex">
                        <div className="d-flex w-50 bordered border-darkgrey">
                            <input type="text" placeholder="__/__/__" className="input-control fs-12 border-none w-75" />
                            <span className="f-regular-italic fc-grey">thru</span>
                            <input type="text" placeholder="__/__/__" className="input-control fs-12 border-none ml-10 w-75" />
                        </div>
                        <button type="button" className="icon-btn"><CalendarRange /></button>
                    </div>
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
                <div className={"form-section mt-10 bordered" + (v_field1==="" ? " border-red" : " border-green")}>
                    <input
                        className="input-control px-10 w-100"
                        type="text"
                        name="field1"
                        placeholder="Field1"
                        value={v_field1}
                        onChange={(e) => setVField1(e.target.value)} />
                </div>
                <div className={"form-section mt-1 bordered" + (v_field2==="" ? " border-red" : " border-green")}>
                    <input
                        className="input-control px-10 w-100"
                        type="text"
                        name="field2"
                        placeholder="Field2"
                        value={v_field2}
                        onChange={(e) => setVField2(e.target.value)} />
                </div>
                <div className={"form-section mt-1 bordered" + (v_field3==="" ? " border-red" : " border-green")}>
                    <input
                        className="input-control px-10 w-100"
                        type="text"
                        name="field3"
                        placeholder="Field3"
                        value={v_field3}
                        onChange={(e) => setVField3(e.target.value)} />
                </div>
                <div className={"form-section mt-1 bordered" + (v_field4==="" ? " border-red" : " border-green")}>
                    <input
                        className="input-control px-10 w-100"
                        type="text"
                        name="field4"
                        placeholder="Field4"
                        value={v_field4}
                        onChange={(e) => setVField4(e.target.value)} />
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center" + (v_field5==="" ? " border-red" : " border-green")}>
                    <input className="input-control px-10" type="text" name="field5" placeholder="Field5" value={v_field5} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setField5DropdownOpen(!isField5DropdownOpen)}>Select</button>
                    <div className={"dropdown-content" + (isField5DropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-around py-1">
                            <button type="button" className="f-regular-italic bg-grey">Tab twice to Select</button>
                            <p className="fs-12 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus">
                            {
                                [1,2,3,4,5,6,7,8,9,10,11].map((value, i) => {
                                    return (<li key={i} onClick={(e) => {
                                            setField5DropdownOpen(false)
                                            setVField5("Example"+value)
                                        }}>
                                        Example{value}
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={"form-section mt-1 bordered d-flex align-items-center" + (v_description==="" ? "" : " border-green")}>
                    <input
                        className="input-control px-10 w-100"
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={v_description}
                        onChange={(e) => setVDescription(e.target.value)} />
                    <span className="fs-12 position-absolute r-0 fc-grey f-regular-italic mr-5">Enter any keywords</span>
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center" + (v_field6==="" ? " border-red" : " border-green")}>
                    <input className="input-control px-10" type="text" name="field6" placeholder="Field6" value={v_field6} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setField6DropdownOpen(!isField6DropdownOpen)}>Select</button>
                    <div className={"dropdown-content" + (isField6DropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-around py-1">
                            <button type="button" className="f-regular-italic bg-grey">Tab twice to Select</button>
                            <p className="fs-12 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus">
                            {
                                [1,2,3,4,5,6,7,8,9,10,11].map((value, i) => {
                                    return (<li key={i} onClick={(e) => {
                                            setField6DropdownOpen(false)
                                            setVField6("Example"+value)
                                        }}>
                                        Example{value}
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center" + (v_field7==="" ? " border-red" : " border-green")}>
                    <input className="input-control px-10" type="text" name="field7" placeholder="Field7" value={v_field7} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setField7DropdownOpen(!isField7DropdownOpen)}>Select</button>
                    <div className={"dropdown-content" + (isField7DropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-around py-1">
                            <button type="button" className="f-regular-italic bg-grey">Tab twice to Select</button>
                            <p className="fs-12 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus">
                            {
                                [1,2,3,4,5,6,7,8,9,10,11].map((value, i) => {
                                    return (<li key={i} onClick={(e) => {
                                            setField7DropdownOpen(false)
                                            setVField7("Example"+value)
                                        }}>
                                        Example{value}
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={"form-section bordered mt-1 d-flex align-items-center" + (v_field8==="" ? " border-red" : " border-green")}>
                    <input className="input-control px-10" type="text" name="field8" placeholder="Field8" value={v_field8} disabled />
                    <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setField8DropdownOpen(!isField8DropdownOpen)}>Select</button>
                    <div className={"dropdown-content" + (isField8DropdownOpen ? " expand" : "")}>
                        <div className="d-flex justify-content-around py-1">
                            <button type="button" className="f-regular-italic bg-grey">Tab twice to Select</button>
                            <p className="fs-12 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                        </div>
                        <ul className="dropdown-menus">
                            {
                                [1,2,3,4,5,6,7,8,9,10,11].map((value, i) => {
                                    return (<li key={i} onClick={(e) => {
                                            setField8DropdownOpen(false)
                                            setVField8("Example"+value)
                                        }}>
                                        Example{value}
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="form-section d-flex justify-content-around mt-20">
                    <button type="button" className="submit-btn bg-prim">SEARCH</button>
                    <button type="button" className="submit-btn fs-14 bg-grey">Clear Search Fields</button>
                </div>
            </form>
        </div>
    )
}

export default SearchPage
import React, {useState} from "react"
import { TypeBold, TypeItalic, TypeUnderline, ListOl, ListUl } from "react-bootstrap-icons"
import "./style.scss"

import calc_icon from "resources/calc.png"

const CreateNewPage = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)

    const inputChange = (e) => {
        
    }

    return (
        <div className="page-new">
            <p className="f-bold fs-20 fc-primary text-center">Create New</p>
            <div className="my-2 d-flex justify-content-center">
                <div className="dash-border">
                    <p className="fs-14 fc-grey f-regular-italic">Required fields are outlined in <span className="fc-red">RED</span></p>
                    <p className="fs-14 fc-grey f-regular-italic">Completed fields are outlined in <span className="fc-green">GREEN</span></p>
                    <p className="fs-14 fc-grey f-regular-italic">Suggested fields are outlined in <span className="fc-black">BLACK</span></p>
                </div>
            </div>
            <form className="main-form">
                <div className="mt-20 d-flex px-10">
                    <label className="label">Field1</label>
                    <p className="text-center w-100">pulled from user login</p>
                </div>
                <div className="mt-10 d-flex px-10">
                    <label className="label">Field2</label>
                    <p className="text-center w-100">pulled from user login</p>
                </div>
                <div className="mt-10 d-flex px-10">
                    <label className="label">Field3</label>
                    <p className="text-center w-100">pulled from user login</p>
                </div>
                <div className="mt-2">
                    <div className="form-section border-red">
                        <input className="input-control px-10" type="text" name="field4" placeholder="Field4" />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section d-flex align-items-center">
                        <input className="input-control px-10" type="text" name="field5" placeholder="Field5" />
                        <span className="fs-12 position-absolute r-0 fc-grey f-regular-italic mr-10">(Use comma to seperate names)</span>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section border-red">
                        <input className="input-control px-10" type="text" name="field6" placeholder="Field6" />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section d-flex align-items-center border-red">
                        <input className="input-control px-10" type="text" name="field7" placeholder="Field7" />
                        <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setDropdownOpen(!isDropdownOpen)}>Select</button>
                        <div className={"dropdown-content" + (isDropdownOpen ? " expand" : "")}>
                            <div className="d-flex justify-content-around py-1">
                                <button className="f-regular-italic">Tab twice to Select</button>
                                <p className="fs-12 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                            </div>
                            <ul className="dropdown-menus">
                                <li>Example1</li>
                                <li>Example2</li>
                                <li>Example3</li>
                                <li>Example4</li>
                                <li>Example5</li>
                                <li>Example6</li>
                                <li>Example7</li>
                                <li>Example8</li>
                                <li>Example9</li>
                                <li>Example10</li>
                                <li>Example11</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section border-red p-1">
                        <div className="d-flex">
                            <div className="d-flex flex-column align-items-center w-50">
                                <p className="fs-12">Text Options</p>
                                <div className="">
                                    <button type="button" className="editor-action-btn"><TypeBold size={25} /></button>
                                    <button type="button" className="editor-action-btn"><TypeItalic size={25} /></button>
                                    <button type="button" className="editor-action-btn"><TypeUnderline size={25} /></button>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-center w-50">
                                <p className="fs-12">Paragraph Options</p>
                                <div className="">
                                    <button type="button" className="editor-action-btn"><ListUl size={25} /></button>
                                    <button type="button" className="editor-action-btn"><ListOl size={25} /></button>
                                </div>
                            </div>
                        </div>
                        <textarea className="mt-1" placeholder="Description" rows={6}></textarea>
                        <p className="w-100 d-flex justify-content-end pr-10 fc-grey fs-12">0/300 characters</p>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section d-flex flex-column p-1">
                        <div className="d-flex justify-content-between">
                            <p className="fc-grey">Image Upload</p>
                            <button className="select-file-btn">Select from Device</button>
                        </div>
                        <div className="file-board d-flex align-items-center justify-content-center">
                            <p className="fc-grey">jpg, png, gif</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section d-flex flex-column p-1">
                        <div className="d-flex justify-content-between">
                            <p className="fc-grey">Additional Documents</p>
                            <button className="select-file-btn">Select from Device</button>
                        </div>
                        <div className="file-board d-flex align-items-center justify-content-center">
                            <p className="fc-grey">mp3, mp4, pdf, xlsx, csv, docx</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section d-flex flex-column border-red p-1">
                        <div className="d-flex justify-content-between">
                            <p className="fc-grey">Field8</p>
                            <img className="calc-img" src={calc_icon} alt="" />
                        </div>
                        <div className="px-10">
                            <div className="d-flex">
                                <span className="fs-20 fc-primary">$</span>
                                <input type="number" className="input-control dashed-border" />
                            </div>
                            <textarea className="mt-3" placeholder="Description" rows={6}></textarea>
                            <p className="w-100 d-flex justify-content-end pr-10 fc-grey fs-12">0/300 characters</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section border-none d-flex justify-content-center mt-20">
                        <button type="button" className="submit-btn">SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateNewPage
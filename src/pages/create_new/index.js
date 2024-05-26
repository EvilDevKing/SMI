import React, {useState, useEffect} from "react"
import { TypeBold, TypeItalic, TypeUnderline, ListOl, ListUl } from "react-bootstrap-icons"
import "./style.scss"

import calc_icon from "resources/calc.png"

const CreateNewPage = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [smi_title, setSmiTitle] = useState('')
    const [origins, setOrigins] = useState('')
    const [owner, setOwner] = useState('')
    const [area, setArea] = useState('')
    const [cost_description, setCostDescription] = useState('')
    const [description, setDescription] = useState('')
    const [isSubmitAvailable, setSubmitAvailable] = useState(false)

    useEffect(() => {
        if (smi_title!=="" && origins!=="" && owner!=="" && area!=="" && cost_description!=="" && description!=="") {
            setSubmitAvailable(true)
        } else {
            setSubmitAvailable(false)
        }
    }, [smi_title, origins, owner, area, cost_description, description])

    return (
        <div className="page-new">
            <p className="f-bold fs-20 fc-primary text-center">Create New</p>
            <form className="main-form mt-20">
                <div className="mt-2">
                    <div className={"form-section" + (smi_title==="" ? " border-red" : " border-green")}>
                        <input 
                            className="input-control px-10"
                            type="text"
                            name="smi_title"
                            placeholder="SMI Title"
                            value={smi_title}
                            onChange={(e) => setSmiTitle(e.target.value)} />
                    </div>
                </div>
                <div className="mt-2">
                    <div className={"form-section d-flex align-items-center" + (origins==="" ? "" : " border-green")}>
                        <input
                            className="input-control px-10"
                            type="text"
                            name="origins"
                            placeholder="Additional Originator(s)"
                            value={origins}
                            onChange={(e) => setOrigins(e.target.value)} />
                        <span className="fs-12 position-absolute r-0 fc-grey f-regular-italic mr-5">(Use comma between names)</span>
                    </div>
                </div>
                <div className="mt-2">
                    <div className={"form-section" + (owner==="" ? " border-red" : " border-green")}>
                        <input
                            className="input-control px-10"
                            type="text"
                            name="owner"
                            placeholder="Owner"
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)} />
                    </div>
                </div>
                <div className="mt-2">
                    <div className={"form-section d-flex align-items-center" + (area==="" ? " border-red" : " border-green")}>
                        <input className="input-control px-10" type="text" name="area" placeholder="Improvement Area" value={area} disabled />
                        <button type="button" className="dropdown-menu-btn f-regular-italic mr-10" onClick={() => setDropdownOpen(!isDropdownOpen)}>Select</button>
                        <div className={"dropdown-content" + (isDropdownOpen ? " expand" : "")}>
                            <div className="d-flex justify-content-around py-1">
                                <button type="button" className="f-regular-italic bg-grey">Tab twice to Select</button>
                                <p className="fs-12 fc-grey f-regular-italic">Select one that best suits your SMI</p>
                            </div>
                            <ul className="dropdown-menus">
                                {
                                    [1,2,3,4,5,6,7,8,9,10,11].map((value, i) => {
                                        return (<li key={i} onClick={(e) => {
                                                setDropdownOpen(false)
                                                setArea("Example"+value)
                                            }}>
                                            Example{value}
                                        </li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className={"form-section p-1" + (description==="" ? " border-red" : " border-green")}>
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
                        <textarea
                            className="mt-1"
                            placeholder="Description"
                            rows={6}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}></textarea>
                        <p className="w-100 d-flex justify-content-end pr-10 fc-grey fs-12">
                            {
                                description.length === 0 ? "0" : description.length
                            }
                            /300 characters
                        </p>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section d-flex flex-column p-1">
                        <div className="d-flex justify-content-between">
                            <p className="fc-grey">Image Upload</p>
                            <button type="button" className="select-file-btn">Select from Device</button>
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
                            <button type="button" className="select-file-btn">Select from Device</button>
                        </div>
                        <div className="file-board d-flex align-items-center justify-content-center">
                            <p className="fc-grey">mp3, mp4, pdf, xlsx, csv, docx</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className={"form-section d-flex flex-column p-1" + (cost_description==="" ? " border-red" : " border-green")}>
                        <div className="d-flex justify-content-between">
                            <p className="fc-grey">Detailed Cost Savings Calculation</p>
                            <img className="calc-img" src={calc_icon} alt="" />
                        </div>
                        <div className="px-1">
                            <div className="d-flex">
                                <span className="fs-20 fc-primary">$</span>
                                <input type="number" className="input-control dashed-border" />
                            </div>
                            <textarea
                                className="mt-3"
                                placeholder="Cost Savings Description"
                                rows={6}
                                value={cost_description}
                                onChange={(e) => setCostDescription(e.target.value)}></textarea>
                            <p className="w-100 d-flex justify-content-end pr-10 fc-grey fs-12">
                                {
                                    cost_description.length === 0 ? "0" : cost_description.length
                                }
                                /300 characters
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="form-section border-none d-flex justify-content-center mt-20">
                        <button type="button" className={"submit-btn" + (isSubmitAvailable ? " bg-green" : " bg-grey cursor-not-allowed")} onClick={(e) => isSubmitAvailable ? window.location.href = "/statusreport" : {}}>SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateNewPage
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Textutils = () => {
    const [text, setText] = useState("");
    const [color, setColor] = useState("");

    const uppercase = () => {
        let t = text.toUpperCase();
        setText(t);
    };

    const lowercase = () => {
        let t = text.toLocaleLowerCase();
        setText(t);
    };

    const clear = () => {
        setText("");
    };

    const copy = () => {
        let box = document.getElementById("box");

        if (box.value.length === 0) {
            toast.error('Text box is empty')
        } else {
            navigator.clipboard.writeText(box.value);
            toast.success('Text copied successfully')
        }
    };
    return (
        <div>
            <div
                className="container"
                style={{ marginTop: "100px", border: "1px solid gray" }}
            >
                <div className="row p-4">
                    <form action="">
                        <h3 className="mb-4">TextUtils</h3>
                        <div className="d-flex justify-content-between">
                            <div className="col-2">
                                <select
                                    name=""
                                    id=""
                                    className="form-select mb-2"
                                    onChange={(e) => setColor(e.target.value)}
                                >
                                    <option value="Black" selected>
                                        Select Color
                                    </option>
                                    <option value="black">Black</option>
                                    <option value="green">Green</option>
                                    <option value="red">Red</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="orange">Orange</option>
                                </select>
                            </div>
                            <div className="col-8">
                                <i class="fa-solid fa-copy fs-4 float-end" style={{ cursor: 'pointer' }} onClick={copy} title="Copy text"></i>
                            </div>
                        </div>
                        <textarea
                            name=""
                            className="form-control"
                            id="box"
                            cols="30"
                            rows="10"
                            placeholder="Type...."
                            style={{ resize: "none", color }}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                    </form>
                    <div className='d-flex mt-1'>
                        <span className="mt-1">Length : {text.length}</span>
                        <span className="my-1 mx-3">Space : {text.split(" ").length - 1}</span>
                    </div>
                </div>
                <div className="row mt-3 p-4">
                    <div className="col-3">
                        <div className="d-flex justify-content-between">
                            <div className="btn1">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={uppercase}
                                >
                                    Uppercase
                                </button>
                            </div>
                            <div className="btn2">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={lowercase}
                                >
                                    Lowercase
                                </button>
                            </div>
                            <div className="btn3">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={clear}
                                >
                                    Clear
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Textutils

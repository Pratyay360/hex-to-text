"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Home() {
    const [isClient, setIsClient] = useState(false);
    function clickClear() {
        var hex = document.getElementById("hex") as HTMLTextAreaElement;
        var text = document.getElementById("text") as HTMLTextAreaElement;
        if (!hex.value && !text.value) {
            alert("Nothing to clear");
        } else {
            hex.value = "";
            text.value = "";
        }
    }
    function clickHandler() {
        var hex = document.getElementById("hex") as HTMLTextAreaElement;
        var text = document.getElementById("text") as HTMLTextAreaElement;
        var hexValue = hex.value;
        var textValue = text.value;
        if (hexValue && textValue) {
            alert("Please enter only one value");
            hex.value = "";
            text.value = "";
        } else if (textValue) {
            hex.value = textToHex(textValue);
        } else if (hexValue) {
            text.value = hexToText(hexValue);
        } else {
            alert("Please enter a value");
        }
    }
    var hexToText = function (hex: string) {
        var hex = hex.toString().trim().replace(/\s+/g, '');
        var str = "";
        for (var i = 0; i < hex.length; i += 2) {
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return str;
    }
    var textToHex = function (str: string) {
        var hex = "";
        for (var i = 0; i < str.length; i++) {
            hex += ' ' + str.charCodeAt(i).toString(16);
        }
        return hex;
    }

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            <h1 className="text-center items-center justify-center p-10 mt-5 tracking-[20px] text-gray-500 text-3xl lg:text-4xl font-bold">
                Hex {"<"}--{">"} Text </h1>
            <section className="text-gray-300 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex-wrap -my-10 justify-center whitespace-pre-line">
                        {isClient ?
                            (
                                <div className="flex flex-col space-y-5">
                                    <label className="font-bold text-lg text-white " >Hex :- </label>
                                    <textarea id="hex" cols={40} rows={5} placeholder="Hex Here" className="border rounded-lg py-3 px-3 mt-2  bg-black border-indigo-600 placeholder-white-500 text-white" />
                                    <label className="font-bold text-lg text-white " >Text :- </label>
                                    <textarea id="text" cols={40} rows={5} placeholder="Text Here" className="border rounded-lg py-3 px-3 mt-2 bg-black border-indigo-600 placeholder-white-500 text-white" />
                                    <div className="flex flex-wrap mx-auto justify-center transform transition-all mb-10">
                                        <input type="button" value="Convert" onClick={clickHandler} className="border border-indigo-600 hover:bg-indigo-600 bg-black text-white rounded-lg font-semibold p-8 m-5 text-xl" />
                                        <input type="button" value="Clear All" onClick={clickClear} className="border border-indigo-600 hover:bg-indigo-600 bg-black text-white rounded-lg font-semibold p-8 m-5 text-xl" />
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="text-center justify-center items-center text-3xl" id="error"> Loading... </h1>
                                </div>
                            )}
                    </div>
                </div>
            </section>
        </>
    )
}

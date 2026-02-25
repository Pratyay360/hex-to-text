import { useState } from "react";

export default function Home() {
    const [hex, setHex] = useState("");
    const [text, setText] = useState("");

    const hexToText = (hexInput: string) => {
        const cleanHex = hexInput.toString().trim().replace(/\s+/g, '');
        let str = "";
        for (let i = 0; i < cleanHex.length; i += 2) {
            const hexChar = cleanHex.slice(i, i + 2);
            if (hexChar.length === 2) {
                str += String.fromCharCode(parseInt(hexChar, 16));
            }
        }
        return str;
    };

    const textToHex = (strInput: string) => {
        let hexOutput = "";
        for (let i = 0; i < strInput.length; i++) {
            hexOutput += ' ' + strInput.charCodeAt(i).toString(16);
        }
        return hexOutput;
    };

    const handleConvert = () => {
        if (hex && text) {
            alert("Please enter only one value");
            setHex("");
            setText("");
        } else if (text) {
            setHex(textToHex(text));
        } else if (hex) {
            setText(hexToText(hex));
        } else {
            alert("Please enter a value");
        }
    };

    const handleClear = () => {
        if (!hex && !text) {
            alert("Nothing to clear");
        } else {
            setHex("");
            setText("");
        }
    };

    return (
        <>
            <h1 className="text-center items-center justify-center p-10 mt-5 tracking-[20px] text-gray-500 text-3xl lg:text-4xl font-bold">
                Hex {"<"}--{">"} Text
            </h1>
            <section className="text-gray-300 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex-wrap -my-10 justify-center whitespace-pre-line">
                        <div className="flex flex-col space-y-5">
                            <label className="font-bold text-lg text-white" htmlFor="hex">Hex :- </label>
                            <textarea
                                id="hex"
                                cols={40}
                                rows={5}
                                placeholder="Hex Here"
                                className="border rounded-lg py-3 px-3 mt-2 bg-black border-indigo-600 placeholder-white-500 text-white"
                                value={hex}
                                onChange={(e) => setHex(e.target.value)}
                            />
                            <label className="font-bold text-lg text-white" htmlFor="text">Text :- </label>
                            <textarea
                                id="text"
                                cols={40}
                                rows={5}
                                placeholder="Text Here"
                                className="border rounded-lg py-3 px-3 mt-2 bg-black border-indigo-600 placeholder-white-500 text-white"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <div className="flex flex-wrap mx-auto justify-center transform transition-all mb-10">
                                <button
                                    type="button"
                                    onClick={handleConvert}
                                    className="border border-indigo-600 hover:bg-indigo-600 bg-black text-white rounded-lg font-semibold p-8 m-5 text-xl"
                                >
                                    Convert
                                </button>
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="border border-indigo-600 hover:bg-indigo-600 bg-black text-white rounded-lg font-semibold p-8 m-5 text-xl"
                                >
                                    Clear All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
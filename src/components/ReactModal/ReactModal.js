import React from 'react';

const ReactModal = ({ product }) => {
    const { category, price, description, title, rating, image } = product;
    const [showModal, setShowModal] = React.useState(false);
    console.log(product);
    return (
        <div>
            <button
                className="bg-green-600 p-2 rounded-lg text-white hover:bg-green-700"
                type="button" onClick={() => setShowModal(true)} > Details
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {title.slice(0, 45)}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className='flex justify-center'>
                                        <img className='w-1/5 ' src={image} alt="" />
                                    </div>
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed font-semibold ">Name: {category}
                                    </p>
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed font-semibold">Price: {price}
                                    </p>
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed"><span className="font-semibold">Description: </span>{description}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-red-600 p-2 rounded-lg text-white hover:bg-red-700 mx-5"
                                        type="button" onClick={() => setShowModal(false)} >
                                        Close
                                    </button>
                                    <button
                                        className="bg-green-600 p-2 rounded-lg text-white hover:bg-green-700" type="button"
                                        onClick={() => setShowModal(false)}  >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default ReactModal;

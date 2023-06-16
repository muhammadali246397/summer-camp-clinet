import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Swal from 'sweetalert2';

const ClassTable = ({ classes, index, refetch }) => {


    const { _id, classImg, instructorName, email, price, status, className, available } = classes
    const [disabled, setDisabled] = useState(status === 'approved')

    const [showModal, setShowModal] = useState(false);





    const ClassApprove = (id) => {
        fetch(`https://assignment-twelve-server-muhammadali246397.vercel.app/postclassapprove/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    setDisabled(true)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Approved class',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }

            })
    }

    const ClassDeind = (id) => {
        fetch(`https://assignment-twelve-server-muhammadali246397.vercel.app/postclassdained/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    setDisabled(true)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Approved class',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }

            })
    }

    const sendFeedback = (event) => {
        event.preventDefault()
        const form = event.target;
        const feedback = form.feedback.value
        console.log(feedback)

    }

    return (
        <>
            <tr>
                <th>
                    <label>
                        {index + 1}
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={classImg} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {className}
                </td>
                <td>{instructorName}</td>
                <td>{email}</td>
                <td>{status}</td>
                <td className='text-orange-600'>${price}</td>
                <td>{available}</td>
                <th>
                    <button disabled={disabled} onClick={() => ClassApprove(_id)} className="btn bg-[#B2AB8C] text-white hover:text-orange-600 btn-xs">approve</button>
                    <button disabled={disabled} onClick={() => ClassDeind(_id)} className="btn bg-[#B2AB8C] text-white hover:text-orange-600 btn-xs">deiny</button>
                    <button onClick={() => setShowModal(true)} className="btn bg-[#B2AB8C] text-white hover:text-orange-600 btn-xs">feedback</button>

                </th>

            </tr>
            <div>
                <ReactModal
                    isOpen={showModal}
                    onRequestClose={() => setShowModal(false)}
                >
                    
                        <div style={{backgroundColor:'lavenderblush'}} className=' mx-atuo flex justify-center items-center w-1/3 h-1/2 '>
                            <form onSubmit={sendFeedback}>
                                <input className='px-4 py-3' type="text" name="feedback" placeholder='Feedback ...' id="" />
                                < input type='submit' className="btn border-none rounded-none bg-[#B2AB8C] text-white hover:text-orange-600"></input>
                            </form>
                        </div>
               

                </ReactModal>
            </div>
        </>
    );
};

export default ClassTable;
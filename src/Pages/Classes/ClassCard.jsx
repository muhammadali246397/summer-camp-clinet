import React, { useContext, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider'
import UseAdmin from '../Share/CheckAdmin/UseAdmin';
import UseInstructor from '../Share/CheckInstructor/UseInstructor';
import { useQuery } from '@tanstack/react-query';

const ClassCard = ({ ins }) => {
    const { user } = useContext(AuthContext)
    const { _id, available, classImg, className, email, image, instructorName, price } = ins

    const { isAdmin } = UseAdmin()
    const { isInstructor } = UseInstructor()
    const [disabled, setDisabled] = useState(isAdmin?.admin || isInstructor?.instructor)

    const addClass = (cls) => {
        const classes = { clasid: _id, available, userEmail: user?.email, classImg, className, email, image, instructorName, price }
        console.log(cls)

        if (user) {
            fetch('http://localhost:5000/addcls', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classes)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Added successfully',
                            showConfirmButton: false,
                            timer: 1000
                        })
                        setDisabled(true)
                    }
                })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Please Login',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    return (
        <div>
            <Slide direction='right' key={ins._id}>
                <div className='mb-5 p-2 hover:bg-slate-50'>
                    <figure className='h-60'>
                        <img style={{ height: "300px" }} className='w-full' src={ins.classImg} alt="Shoes" />
                    </figure>
                    <div className="text-center mt-4">
                        <h2 className="font-bold text-xl text-orange-600 mt-20">{ins.className}</h2>
                        <p>Instructor: {ins.instructorName}</p>
                        <p className='mt-2'>Price: <span className='text-orange-600'>${ins.price}</span></p>
                        <p>Available sets: {ins.available}</p>

                        <div>
                            <button
                                disabled={disabled}
                                onClick={() => addClass(ins)}
                                className='btn w-full text-lg hover:text-orange-600 mt-4 bg-[#B2AB8C] text-white border-none rounded-none font-bold'
                            >
                                select
                            </button>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default ClassCard;

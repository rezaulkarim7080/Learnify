import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const Rating = ({ product, rating }) => {
    return (
        <div>
            <div>
                <div className='flex gap-2 text-amber-500 py-1'>
                    {rating >= 1 ? <AiFillStar size={20} /> : rating >= 0.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}
                    {rating >= 2 ? <AiFillStar size={20} /> : rating >= 1.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}
                    <span>{rating >= 3 ? <AiFillStar size={20} /> : rating >= 2.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}</span>
                    <span>{rating >= 4 ? <AiFillStar size={20} /> : rating >= 3.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}</span>
                    <span>{rating >= 5 ? <AiFillStar size={20} /> : rating >= 4.5 ? <BsStarHalf size={20} /> : <AiOutlineStar size={20} />}</span>


                </div>
            </div>
        </div>
    );
};

export default Rating;
"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const Review = () => {
    const [safetyRating, setSafetyRating] = useState(5);
    const [communicationRating, setCommunicationRating] = useState(4);
    const [recommend, setRecommend] = useState(true);
    const [praise, setPraise] = useState(['clean']);
    const [adventure, setAdventure] = useState(false);
    const [clean, setClean] = useState(true);
    const [goodExplorer, setGoodExplorer] = useState(false);

    const addAdventure = () => {
        setAdventure(!adventure);
        if (!adventure) {
            const add = [...praise, 'adventure'];
            setPraise(add);
        } else {
            const add = praise.filter(item => item !== 'adventure');
            setPraise(add);
        }
    }

    const addClean = () => {
        setClean(!clean);
        if (!clean) {
            const add = [...praise, 'clean'];
            setPraise(add);
        } else {
            const add = praise.filter(item => item !== 'clean');
            setPraise(add);
        }
    }

    const addGoodExplorer = () => {
        setGoodExplorer(!goodExplorer);
        if (!goodExplorer) {
            const add = [...praise, 'good explorer'];
            setPraise(add);
        } else {
            const add = praise.filter(item => item !== 'good explorer');
            setPraise(add);
        }
    }

    const handleSafetyClick = (value: number) => {
        setSafetyRating(value);
    };

    const handleCommunicationClick = (value: number) => {
        setCommunicationRating(value);
    };

    return (
        <div className='max-w-[500px] w-full p-4 flex flex-col gap-8 bg-white sm:rounded-2xl sm:h-auto h-[100vh]'>
            <div className='flex flex-col gap-2'>
                <Link href='/' className='flex h-6'>
                    <FontAwesomeIcon icon={faTimes} className='h-6' />
                </Link>
                <h3 className='text-4xl font-medium'>Leave a review</h3>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium'>Safety</h3>
                <p className='text-xs text-slate-600'>Give the review for safety.</p>
                <div className='flex gap-6'>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <span
                            key={value}
                            onClick={() => handleSafetyClick(value)}
                            style={{ cursor: 'pointer', color: value <= safetyRating ? 'gold' : 'gray' }}
                        >
                            <FontAwesomeIcon icon={faStar} className='size-8' />
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium'>Communication</h3>
                <p className='text-xs text-slate-600'>Give the review for communication.</p>
                <div className='flex gap-6'>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <span
                            key={value}
                            onClick={() => handleCommunicationClick(value)}
                            style={{ cursor: 'pointer', color: value <= communicationRating ? 'gold' : 'gray' }}
                        >
                            <FontAwesomeIcon icon={faStar} className='size-8' />
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium'>Would you recommend Trasuti?</h3>
                <p className='text-xs text-slate-600'>Click on one of the buttons given below.</p>
                <div className='flex gap-8 h-8'>
                    <button className={`flex gap-2 items-center ${recommend ? 'text-gray-500' : 'text-red-600'}`} onClick={() => setRecommend(false)}>
                        <FontAwesomeIcon icon={faThumbsDown} className='h-8' />
                        <p>No</p>
                    </button>
                    <button className={`flex gap-2 ${!recommend ? 'text-gray-500' : 'text-green-600'} items-center`} onClick={() => setRecommend(true)}>
                        <FontAwesomeIcon icon={faThumbsUp} className='h-8' />
                        <p>Yes</p>
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium'>Praise</h3>
                <p className='text-xs text-slate-600'>You can click more than one.</p>
                <div className='flex gap-2'>
                    <button className={`p-2 rounded-2xl ${adventure ? 'bg-green-200 text-green-700' : 'bg-gray-200'}`} onClick={addAdventure}>
                        Adventure
                    </button>
                    <button className={`p-2 rounded-2xl ${clean ? 'bg-green-200 text-green-700' : 'bg-gray-200'}`} onClick={addClean}>
                        Clean
                    </button>
                    <button className={`p-2 rounded-2xl ${goodExplorer ? 'bg-green-200 text-green-700' : 'bg-gray-200'}`} onClick={addGoodExplorer}>
                        Good Explorer
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Review
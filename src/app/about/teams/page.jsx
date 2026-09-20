'use client'
import Title from '@/components/Title'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Teams() {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => router.back()} className='btn btn-secondary'>{'<'}--Back</button>
            <Title>My Contact is 0181111111155566</Title>
        </div>
    )
}

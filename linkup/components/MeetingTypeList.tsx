"use client"
import Image from 'next/image'
import React from 'react'
import HomeCard from './HomeCard'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const MeetingTypeList = () => {
    const [meetingState,setMeetingState] = useState<'isScheduling' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
    const router =useRouter();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={()=>{setMeetingState('isJoiningMeeting')}}
        className="bg-orange-1"
        />
         <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={()=>{setMeetingState('isScheduling')}}
        className="bg-blue-1"
        />
         <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={()=>{setMeetingState('isInstantMeeting')}}
        className="bg-purple-1"
        />
         <HomeCard
        img="/icons/add-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handleClick={()=>router.push("/recordings")}
        className="bg-yellow-1"
        />
    </section>
  )
}

export default MeetingTypeList

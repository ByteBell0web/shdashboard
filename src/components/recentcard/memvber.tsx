'use client'

import * as React from "react"
import Image from "next/image"

interface MemberComponentProps {
    name : String,
    email : String,
    currency : String
}

export default function MemberComponent({name, email, currency} : MemberComponentProps) {
  return (
    <div className="flex flex-row mem-container mb-4">
        <div className="flex flex-row gap-3">
            <div>
                <Image src='/img/icons8-user-64.png' alt='' width={35} height={35} />
            </div>
            <div>
                <div className="mem-name">{name}</div>
                <div className="mem-email">{email}</div>
            </div>
        </div>
        <div className="mem-currency">{currency}</div>
    </div>
  )
}

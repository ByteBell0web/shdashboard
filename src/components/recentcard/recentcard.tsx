'use client'

import * as React from "react"
import MemberComponent from "./memvber"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default function RecentCard() {
  return (
    <Card className="w-[42vw] p-5">
      <div className="mb-5">
        <div className="card-title">Recent History</div>
        <div className="card-description">Check your recent history</div>
      </div>
      <div>
        <MemberComponent name="Olivia Martin" email="olivia.martin@email.com" currency="+$1,999.00"/>
        <MemberComponent name="Jackson Lee" email="jackson.lee@email.com" currency="+$39.00"/>
        <MemberComponent name="Isabella Nguyen" email="isabella.nguyen@email.com" currency="+$299.00"/>
        <MemberComponent name="William Kim" email="will@email.com" currency="+$99.00"/>
        <MemberComponent name="Sofia Davis" email="sofia.davis@email.com" currency="+$39.00"/>
      </div>
    </Card>
  )
}

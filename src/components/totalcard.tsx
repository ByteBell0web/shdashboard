'use client'

import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Card,
} from "@/components/ui/card"

interface TotalCardProps {
  title : String,
  amount : String,
  description : String,
}

export default function TotalCard({title, amount, description} : TotalCardProps) {
  return (
    <Card className="p-5">
       <div>
            <div className = "card-title flex flex-row justify-between">
                <div>{title}</div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
            </div>
            <div className="currency-amount">
                {amount}
            </div>
            <div className="card-description">
                {description}
            </div>
       </div>
    </Card>
  )
}

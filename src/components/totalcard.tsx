'use client'

import * as React from "react";
import {useState, useEffect} from 'react';
import {faker} from "@faker-js/faker";
import {
  Card,
} from "@/components/ui/card"

interface TotalCardProps {
  title : String,
}

export default function TotalCard({title} : TotalCardProps) {

  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect( () => {
    if( title == 'Total Currency'){
      setAmount('$'+faker.number.float({min: 500, max: 900, multipleOf: 0.02}));
    }
    else {
      setAmount('$'+faker.number.float({min: 30, max: 220, multipleOf: 0.02}));
    }
    setDescription('+'+faker.number.float({min: 10, max: 25, multipleOf: 0.02})+'% from last month');
  },[])

  return (
    <Card className="p-5">
       <div>
            <div className = "card-title flex flex-row justify-between">
                <div>{title}</div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
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

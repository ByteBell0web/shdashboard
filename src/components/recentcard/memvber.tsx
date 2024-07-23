'use client'

import * as React from "react";
import {useEffect, useState} from "react";
import Image from "next/image";
import {faker} from "@faker-js/faker";

// interface MemberComponentProps {
//     name : String,
//     email : String,
//     currency : String
// }

// export default function MemberComponent({name, email, currency} : MemberComponentProps) {
//   return (
//     <div className="flex flex-row mem-container mb-4">
//         <div className="flex flex-row gap-3">
//             <div>
//                 <Image src='/img/icons8-user-64.png' alt='' width={35} height={35} />
//             </div>
//             <div>
//                 <div className="mem-name">{name}</div>
//                 <div className="mem-email">{email}</div>
//             </div>
//         </div>
//         <div className="mem-currency">{currency}</div>
//     </div>
//   )
// }


export default function MemberComponent() {

    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [currency, setCurrency] = useState('');
    
    useEffect( () => {
        setAvatar(faker.image.avatar());
        setName(faker.person.fullName());
        setEmail(faker.internet.email());
        setCurrency('$'+faker.number.float({min: 50, max: 20000, multipleOf: 0.02}));
    },[])

    return (
      <div className="flex flex-row mem-container mb-4">
          <div className="flex flex-row gap-3">
              <div>
              <Image src={avatar} alt='' width={35} height={35} /> 
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
  
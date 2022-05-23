// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Address from './steps-with-validation/Address'
import SocialLinks from './steps-with-validation/SocialLinks'
import PersonalInfo from './steps-with-validation/PersonalInfo'
import AccountDetails from './steps-with-validation/AccountDetails'

const WizardHorizontal = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)
  const data = []
  let    dat = {}
  
  const getdata = (item) => {
    data.push(item)
      data.forEach(e => {
       dat = {...dat, ...e}  
      })  
      if (stepper._currentIndex === 3) {
        console.log('dat', dat) 
      }  
  }


  const steps = [
    {
      id: 'account-details',
      title: 'Account Details',
      subtitle: 'Enter Your Account Details.',
      content: <AccountDetails getdata={getdata} stepper={stepper} />
    },
    {
      id: 'personal-info',
      title: 'Personal Info',
      subtitle: 'Add Personal Info',
      content: <PersonalInfo stepper={stepper} getdata={getdata}/>
    },
    {
      id: 'step-address',
      title: 'Address',
      subtitle: 'Add Address',
      content: <Address stepper={stepper} getdata={getdata}/>
    },
    {
      id: 'social-links',
      title: 'Social Links',
      subtitle: 'Add Social Links',
      content: <SocialLinks stepper={stepper} getdata={getdata}/>
    }
  ]

  return (
    <div className='horizontal-wizard'>
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default WizardHorizontal

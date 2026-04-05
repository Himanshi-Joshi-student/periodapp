import React from 'react'
import useTheme from '../Context/theme'
import theme from './header/Navbar/image.png'
const themebtn = () => {
    const {themeMode,ligthTheme,DarkTheme}=useTheme()
    const onChangebtn=(e)=>{
        const darkModeStatus=e.curentTarget.checked
        if (darkModeStatus){
            DarkTheme()
        }
        else{
            ligthTheme()
        }
    }
  return (
  <button>
    <img 
    src={theme}
     alt=''
     type="checkbox"
     className='h-auto rounded-2xl w-6 bg-gray-200 p-1'
     onChange={onChangebtn}
     checked={themeMode==="dark"}
     />
  </button>
  )
}

export default themebtn
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Login from './Login/Login';
import Register from './Register/Register';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  width: "100%",
  bgcolor: 'background.paper',
  borderBottom: "10px solid #46a358",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({open, toggle}) {
  const [components, setComponents] = React.useState([
    {id: 1, component: <Login toggle={toggle}/>},
    {id: 2, component: <Register toggle={toggle}/>},
  ])
  const [activeAuth, setActiveAuth] = React.useState(1)
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={toggle}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className='flex justify-center items-center gap-[5px]'>
              <h1 onClick={()=>setActiveAuth(1)} className={`text-[20px] cursor-pointer font-[500] ${activeAuth === 1 ? "text-[#46a358]" : "text-[black]"}`}>Login</h1>
              <div className='h-[14px] w-[1px] bg-gray-500'></div>
              <h1 onClick={()=>setActiveAuth(2)} className={`text-[20px] cursor-pointer font-[500] ${activeAuth === 1 ? "text-[black]" : "text-[#46a358]"}`}>Register</h1>
            </div>
            {
              components?.map((item,index)=> {
                return <div key={index} className={item?.id === activeAuth ? "block" : "hidden"}>{item?.component}</div>
              })
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


import dashboardIcon from '../assets/dashboard.svg'
import coursesIcon from '../assets/book.svg'
import studentsIcon from '../assets/stand-users.svg'
import examsIcon from '../assets/exam.svg'
import resultsIcon from '../assets/result.svg'
import noticeIcon from '../assets/black-board.svg'
import liveClassIcon from '../assets/live-streaming.svg'
import notifIcon from '../assets/notification.svg'
import profileImg from '../assets/profileImg.jpg'

function Sidebar() {
  return (
    <div className="part-1 w-1/5 flex flex-col justify-between shadow-right h-screen">
      <div className="header-navs">
        <div className="sidebarHeader flex justify-around w-full h-14 p-3">
        <img src="/School Space Logo.jpg" alt="img" className='sidebarIcon'/>
        <h1 className="text-3xl font-passionone flex justify-center items-center text-sky-500">School Space</h1>
      </div>
      <div className="sidebarNavs flex-column items-center justify-center mt-8 px-4">
        <div className="flex w-full px-8 py-4 hover:cursor-pointer sidebarNav" >
          <img src={dashboardIcon} width="20px" height="auto" alt="" />
          <h3 className="ps-8  text-neutral-800 text-sm font-normal font-['Montserrat'] leading-[18px]">Dashboard</h3>
        </div>
        <div className="flex w-full px-8 py-4 hover:cursor-pointer sidebarNav" >
          <img src={coursesIcon} width="20px" height="auto" alt="" />
          <h3 className="ps-8  text-neutral-800 text-sm font-normal font-['Montserrat'] leading-[18px]">Courses</h3>
        </div>
        <div className="flex w-full px-8 py-4 hover:cursor-pointer sidebarNav" >
          <img src={studentsIcon} width="20px" height="auto" alt="" />
          <h3 className="ps-8  text-neutral-800 text-sm font-normal font-['Montserrat'] leading-[18px]">Students</h3>
        </div>
        <div className="flex w-full px-8 py-4 hover:cursor-pointer sidebarNav" >
          <img src={examsIcon} width="20px" height="auto" alt="" />
          <h3 className="ps-8  text-neutral-800 text-sm font-normal font-['Montserrat'] leading-[18px]">Exams</h3>
        </div>
        <div className="flex w-full px-8 py-4 hover:cursor-pointer sidebarNav" >
          <img src={resultsIcon} width="20px" height="auto" alt="" />
          <h3 className="ps-8  text-neutral-800 text-sm font-normal font-['Montserrat'] leading-[18px]">Results</h3>
        </div>
        <div className="flex w-full px-8 py-4 hover:cursor-pointer sidebarNav" >
          <img src={noticeIcon} width="20px" height="auto" alt="" />
          <h3 className="ps-8  text-neutral-800 text-sm font-normal font-['Montserrat'] leading-[18px]">Notice Board</h3>
        </div>
        <div className="flex w-full px-8 py-4 hover:cursor-pointer sidebarNav" >
          <img src={liveClassIcon} width="20px" height="auto" alt="" />
          <h3 className="ps-8  text-neutral-800 text-sm font-normal font-['Montserrat'] leading-[18px]">Live Classes</h3>
        </div>
        <div className="flex w-full px-8 py-4 hover:cursor-pointer sidebarNav" >
          <img src={notifIcon} width="20px" height="auto" alt="" />
          <h3 className="ps-8  text-neutral-800 text-sm font-normal font-['Montserrat'] leading-[18px]">Notifications</h3>
        </div>
      </div>
      </div>
      <div className="viewProfile p-5 flex flex-col">
        <img className="w-12 h-12 rounded-full" src={profileImg} />
        <div className="mt-3 text-neutral-800 text-sm font-medium font-['Montserrat'] leading-[18px]">Andy Samberg</div>
        <div className="mt-1 text-gray-500 text-xs font-normal font-['Montserrat'] leading-none">andy.samberg@gmail.com</div>
        <div className="mt-5 w-60 h-[30px] px-2.5 py-1 rounded-[10px] shadow border border-sky-500 justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-sky-500 text-xs font-semibold font-['Montserrat'] uppercase leading-none tracking-wide">view profile</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
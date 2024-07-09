import React from 'react'
import img1 from './img1.png'
import img2 from './img2.jpg'
import img3 from './img3.png'
import '../Project/Projectstyle.css'
export default function Project() {
  return (
    <>
    <div className="heding"><h1>Here Is My Projects</h1></div>
    <div className='card-container'>
      <div className="card" style={{width: '18rem'}}>
  <img className="card-img" src={img1}alt=''/>
  <div className="card-body">
    <h5 className="card-title">Tic Tac Toe</h5>
    <p className="card-text">Tic Tac Toe is a simple game played on a 3x3 grid. Two players take turns marking X and O, aiming to get three of their marks in a row horizontally, vertically, or diagonally, while blocking their opponent's moves..</p>
    <a href="https://github.com/Kritikraj920/Tic-Tac-Toe" className="btn" target='_blank'  rel="noreferrer">Go somewhere</a>
  </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img className="card-img" src={img2}alt=''/>
  <div className="card-body">
    <h5 className="card-title">Portfolio</h5>
    <p className="card-text">A portfolio showcases a person's work, skills, and achievements. It typically includes projects, artwork, writing samples, and qualifications to demonstrate expertise and attract opportunities.</p>
    <a href="https://github.com/Kritikraj920/Portfolio" className="btn" target='_blank'  rel="noreferrer">Go somewhere</a>
  </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img className="card-img" src={img3}alt=''/>
  <div className="card-body">
    <h5 className="card-title">iGraphics</h5>
    <p className="card-text">A printing press is a machine used to mass-produce printed material by transferring inked images onto paper or other substrates and dissemination of information..</p>
    <a href="https://github.com/Kritikraj920/iGraphics" className="btn" target='_blank'  rel="noreferrer">Go somewhere</a>
  </div>
</div>
    </div>
    <hr />
    </>
  )
}

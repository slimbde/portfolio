import "./header.scss"


export const Header: React.FC = () => {

  return <header>
    <span className="avatar"></span>

    <div className="info">
      <span>Grigoriy Dolgiy</span>
      <ul>
        <li>Fullstack web developer</li>
        <li>Frontend React developer</li>
        <li>Backend .net Core developer</li>
        <li>Backend .net Framework developer</li>
        <li>Backend php developer</li>
      </ul>
    </div>
  </header>
}
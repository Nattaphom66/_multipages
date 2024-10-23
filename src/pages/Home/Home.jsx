import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-img">
        <img src="./kamin.png" alt="" />
      </div>
      <div className="home-ifo">
        <h3>นาย ณัฏภูมิ มิตยสิทธิ์</h3>
        <div className="box-10">
          <li>นักศึกษามหาวิทยาลัยศรีปทุม ชั้นปีที่ 2 </li>
          <li>เรียนคณะ เทคโนโลยีสารสนเทศ</li>
          <li>สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์</li>
          <li>หลักสูตรตรีเช้า (Software Full Stack Development)</li>
          <h4>ประวัติส่วนตัว</h4>
          <li>ชื่อเล่น : ขมิ้น</li>
          <li>อายุ : 22 ปี</li>
          <li>วันเกิด : 15/09/2002</li>
          <li>เชื้อชาติ/ศาสนา : ไทย/พุทธ</li>
        </div>
      </div>
    </div>
  );
}

export default Home;

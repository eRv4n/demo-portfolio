// import { Link } from "react-router-dom";
import "../../css/_utility.scss";
import "./NotFound.scss";
import errorImg from "../../assets/error1.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <div className="container">
          <img src={errorImg} alt="img" className="openAnimation" />
          <div className="infoCard">
            <h1>404</h1>
            <h2>
              page <span>not found</span>!!
            </h2>
            <br />
            <p>
              Kemungkinan <span>Penyebab</span>: <br />- <span>URL</span> yang Anda masukkan salah atau telah diubah. <br />- Halaman yang Anda cari
              telah <span>dihapus</span>. <br />
            </p>
            <br />
            <p>
              Saran: <br />- Periksa kembali <span>URL</span> yang Anda masukkan. <br />- Kembali ke <span>halaman sebelumnya</span>. <br />- Kunjungi
              halaman beranda untuk menemukan informasi
            </p>
            <Link to="/" className="btn btn-outline-primary">
              kembali ke beranda
            </Link>
          </div>
          <Link to="/" className="btn btn-outline-primary responsiveBtn">
            Beranda
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;

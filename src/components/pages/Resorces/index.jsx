import { faDownload, faList, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import jamesEnglish from "./James-Allens-Girls-School-11-Plus-English-Sample-Paper.pdf"
import alleyns1 from "./Alleyn-s-School-11-Plus-English-Sample-Examination-Paper-1.pdf"
import "./index.scss";

const Resources = () => {
  return (
    <>
      <div className="resoures-page">
        <h1>Resources</h1>
        <h2>11 plus</h2>
        <table className="11plus-table">
          <tr>
            <th><FontAwesomeIcon icon={faList} /> 11+ English Independent &amp; Grammar Past Exam Papers </th>
            <th>Question Paper</th>
            <th>Answers</th>
          </tr>
          <tr>
            <td>James Allen’s Girls’ School – 11+ English Sample Paper - 2022</td>
            <td>
              <Link
              to={jamesEnglish}
              download="James-Allens-11plus-english-sample"
              target="_blank"
              rel="noreferrer"
            />
              <button><FontAwesomeIcon icon={faDownload} /> Download</button>
            </td>
            <td>
              <Link
                to=""
                download="James-Allens-11plus-english-answers"
                target="_blank"
                rel="noreferrer"
              />
              <button><FontAwesomeIcon icon={faLock} /> Answers</button>
            </td>
          </tr>
          <td>Alleyn’s School – 11+ English Sample Paper - 2022</td>
          <td>
            <Link
              to={alleyns1}
              download="Alleyns-11plus-english-sample"
              target="_blank"
              rel="noreferrer"
            />
            <button><FontAwesomeIcon icon={faDownload} /> Download</button>
          </td>
          <td>
            <Link
              to=""
              download="James-Allens-11+-english-answers"
              target="_blank"
              rel="noreferrer"
            />
            <button><FontAwesomeIcon icon={faLock} /> Answers</button>
          </td>
          <tr>
           
          </tr>
        </table>
        <p>Sevenoaks School</p>
        <p>Dulwich college</p>
        <p>Emanuel School</p>
        <p>Whitgift School</p>
        <p>Eltham College </p>
      </div>
    </>
  );
};

export default Resources;

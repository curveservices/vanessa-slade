import { faDownload, faList, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import "./index.scss"


const ResourceTable = (props) => {
    const [resources, setResources] = useState([]);

    const fetchData = async () => {
        try {
            const examData = [];
            const snapshot = await getDocs(collection(db, props.name));
            snapshot.forEach((element) => {
                const data = element.data();
                examData.push({
                    id: element.id,
                    number: data.number,
                    td: data.td,
                    pdf: data.pdf,
                    download: data.download
                });
            });
            setResources(examData);
        }
        catch (err) {
            alert("Error fetching data", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props.name]);

    return (
        <>
           
            <h2 className="header-title">{props.header}</h2>
            <table>
                <tr>
                    <th><FontAwesomeIcon icon={faList} size="2x" /> </th>
                    <th>{props.title} </th>
                    <th>Question Paper</th>
                    <th>Answers</th>
                </tr>

                {resources.map((item) => {
                    return (
                        <>
                            <Loader type="ball-spin-fade-loader" color="black" />
                            <tr key={item.id}>
                                <td>{item.number}</td>
                                <td>{item.td}</td>
                                <td>
                                    <Link
                                        to={item.pdf}
                                        download={item.download}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faDownload} color="blue" /> Download
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        to=""
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faLock} color="red" /> Answers
                                    </Link>
                                </td>
                            </tr>

                        </>
                         
                    )
                })}
            </table>
            <Loader type="ball-spin-fade-loader" color="black" />
        </>
    );
}

export default ResourceTable;
import Loader from "react-loaders";
import CTA from "../../../CTA";
import ResourceTable from "../../../resourceTable";
import "../index.scss";


const EnglishPapers = () => {
    return (
            <div className="table-page">
                <ResourceTable
                    name="english-11plus"
                    header="11 Plus English "
                    title="11+ English Independent &amp; Grammar School Past Exam Papers" />
                <div className="cta">
                    <CTA />
                </div>
            </div>
    );
}

export default EnglishPapers;
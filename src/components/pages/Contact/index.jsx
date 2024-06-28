import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import "./index.scss";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <section className="text-box">
          <h1>Contact Me</h1>
          <p>
            Ready to start classes? Whether online or one-to-one Im able to
            help
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </section>
        <div className="info-map">
          TELEGRAPH HILL TUTORING
          <br />
          London, SE14
          <br />
          United Kingdom
          <br />
          <span>
            <a href="mailto:hello@immutable-studio.com">
              hello@telegraphhilltutoring.com
            </a>
          </span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[51.47263, -0.04075]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.47263, -0.04075]}>
              <Popup>I&espo;m here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-spin-fade-loader" color="black" />
    </>
  );
};

export default Contact;

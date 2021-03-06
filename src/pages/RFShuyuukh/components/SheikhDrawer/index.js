import { Drawer, Image } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import {
  faChevronLeft,
  faChevronRight,
  faMapMarkerAlt,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import SheikhDrawerMap from "../SheikhDrawerMap";
const SheikhDrawer = ({ visible, onClose, sheikh }) => {
  return (
    <Drawer
      title={sheikh.name}
      visible={visible}
      className="sheikhDrawer"
      headerStyle={{ textAlign: "left" }}
      onClose={onClose}
      width="min(420px,100vw)"
      placement="right"
    >
      <div
        className="sheikhImage"
        style={{ backgroundImage: `url(${sheikh.profile})` }}
      ></div>
      {/* <Avatar
        src={sheikh.profile}
        style={{ border: "1px solid gainsboro" ,backgroundPosition:'top center'}}
        icon={<UserOutlined />}
        size={100}
      /> */}
      <span className="location">
        {sheikh.town}, {sheikh.country}
      </span>
      <SheikhDrawerMap town={sheikh.town} />
      <details className="sheikhImageAccordion">
        <summary>
          <span>Expand Images</span>
        </summary>
        <Image.PreviewGroup>
          <div className="sheikhDrawerGallery">
            {new Array(6).fill(0).map((item, index) => (
              <Image key={index} src="https://via.placeholder.com/800" />
            ))}          
          </div>
        </Image.PreviewGroup>
      </details>
      {/* */}
    </Drawer>
  );
};

export default SheikhDrawer;

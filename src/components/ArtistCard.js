"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ArtistCard;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
require("./../styles/ArtistCard.css");
function ArtistCard(_a) {
    var name = _a.name, desc = _a.desc, instagram = _a.instagram, avatar = _a.avatar;
    return (<div className="artist-card">
      <div className="artist-header">
        <h3>{name}</h3>
        {instagram && (<a href={instagram} target="_blank" rel="noopener noreferrer" className="instagram-icon">
            <fa_1.FaInstagram />
          </a>)}
      </div>
      <p>{desc}</p>
      {avatar && <img src={avatar} alt={"".concat(name, " avatar")} className="artist-avatar"/>}
    </div>);
}

import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./../styles/ArtistCard.css";

export default function ArtistCard({ name, desc, instagram, avatar }) {
  return (
    <div className="artist-card">
      <div className="artist-header">
        <h3>{name}</h3>
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon"
          >
            <FaInstagram />
          </a>
        )}
      </div>
      <p>{desc}</p>
      {avatar && <img src={avatar} alt={`${name} avatar`} className="artist-avatar" />}
    </div>
  );
}

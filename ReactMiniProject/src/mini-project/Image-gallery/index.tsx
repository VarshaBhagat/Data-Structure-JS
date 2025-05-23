import React, { useState } from "react";

const images = [
  "https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc",
  "https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9",
  "https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w",
  "https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc",
];

const ImageGallery = () => {
  const [gallery, setGallery] = useState("");
  return (
    <>
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          // justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <p style={{ textDecoration: "underline" }}>Click on an image!</p>
        <div>
          {images.map((i) => (
            <img
              key={i}
              className="image"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                margin: "10px",
                boxShadow: "0 0 5px #0000004d",
                objectFit: "cover",
              }}
              src={i}
              onClick={() => setGallery(i)}
            />
          ))}
        </div>
      </div>
      {gallery.length > 0 && (
        <div>
          <p style={{ fontWeight: "bold" }}>Selected Image</p>
          <img
            src={gallery}
            alt="selected image"
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "10px",
              margin: "10px",
              boxShadow: "0 0 5px #0000004d",
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;

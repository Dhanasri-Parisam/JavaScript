//1. JSON Response
// Most APIs return JSON.

fetch("https://api.example.com/data")
    .then(Response => {
        if(!Response.ok) throw new Error("Network issue");
        return Response.json(); // parse as JSON
    })

    .then(data => console.log("Json Data:", data))
    .catch(error => console.log("Error:", error));

// 2.Text Response
// For plain text(e.g HTML, plain text files)

fetch("https://example.com/page")
    .then(response => response.text())
    .then(text => console.log("Text response:", text));

// 3.Blob Response
// For images, PDFs, or files

fetch("https://example.com/image.png")
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        document.getElementById("image").src = url;
    });

// 4. ArrayBuffer Response
// Useful for binary data (e.g., audio, video, custom protocols).

fetch("https://example.com/audio")
  .then(response => response.arrayBuffer())
  .then(buffer => {
    console.log("ArrayBuffer length:", buffer.byteLength);
  });


// 5.FormData Response
// Used when server responds with form data.

fetch("https://example.com/form-data")
  .then(response => response.formData())
  .then(formData => {
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  });

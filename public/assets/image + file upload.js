
<div className="mbsc-row">
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <Input label="SMI Title" inputStyle="box" labelStyle="floating" placeholder="SMI Title" />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <Input label="Additional Originator(s)," inputStyle="box" labelStyle="floating" placeholder="Additional Originator(s)," />
    </div>
    <div className="mbsc-col-12 mbsc-col-lg-6">
        <Input label="Owner" inputStyle="box" labelStyle="floating" placeholder="Owner" />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <Input label="Improvement Area" inputStyle="box" labelStyle="floating" placeholder="Improvement Area" />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <Input label="Description" inputStyle="box" labelStyle="floating" placeholder="Description" />
    </div>
</div>
<div className="mbsc-row">
    <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
        <div className="mbsc-button-group-block">
            <Button color="success">Create account</Button>
        </div>
    </div>
</div>


<!-- for app js, image upload-->

import React, { useState } from "react";
 
function App() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
 
    return (
        <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
        </div>
    );
}
 
export default App;


<!-- file upload -->


function App() {

    const [file, setFile] = useState()
  
    function handleChange(event) {
      setFile(event.target.files[0])
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      const url = 'http://localhost:3000/uploadFile';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
      });
  
    }
  
    return (
      <div className="App">
          <form onSubmit={handleSubmit}>
            <h1>SMI File Upload</h1>
            <input type="file" onChange={handleChange}/>
            <button type="submit">Upload</button>
          </form>
      </div>
    );
  }
  
  export default App;




  // upload multiple files


  import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  function handleMultipleChange(event) {
    setFiles([...event.target.files]);
  }

  function handleMultipleSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:3000/uploadFiles';
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios.post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFiles(response.data.files);
      })
      .catch((error) => {
        console.error("Error uploading files: ", error);
      });
  }

  return (
    <div className="App">
      <form onSubmit={handleMultipleSubmit}>
        <h1>React Multiple File Upload</h1>
        <input type="file" multiple onChange={handleMultipleChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadedFiles.map((file, index) => (
        <img key={index} src={file} alt={`Uploaded content ${index}`} />
      ))}
    </div>
  );
}

// file progress using axios, need to finish dummy setup for this

export default App;


import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
      onUploadProgress: function(progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      }
    };

    axios.post(url, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>SMI Form with Progress</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
        <progress value={uploadProgress} max="100"></progress>
      </form>
    </div>
  );
}

export default App;


// screen display of file, mobile should only see images in app, other files are downloaded.


import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [file, setFile] = useState()
  const [uploadedFileURL, setUploadedFileURL] = useState(null)

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      setUploadedFileURL(response.data.fileUrl);
    });
  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>SMI Form</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        {uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content"/>}
    </div>
  );
}

export default App;

// error handling for all uploads, update error message
// catch block to the axios POST request that sets an error state variable in case of an error. Render an error message to the screen if there was an error uploading the file.

import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [file, setFile] = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const [error, setError] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFile(response.data.file);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        setError(error);
      });
  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>SMI Form</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        {uploadedFile && <img src={uploadedFile} alt="Uploaded content"/>}
        {error && <p>Error uploading file: {error.message}</p>}
    </div>
  );
}

export default App;
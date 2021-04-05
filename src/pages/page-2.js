import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {db} from "../db"

import "../styles/add.css"

function SecondPage() {

  const initialValues = {
    Titulo: '',
    Imagen: ''
  }

  const [values, setValues] = useState(initialValues);
  const [links, setlinks] = useState([]);

  const add = async(linkObject)=>{
    await db.collection('prueba').doc().set(linkObject);
  }

  const call = async(e)=>{
    db.collection('prueba').onSnapshot((querySnapshot)=>{
      const docs = []
      querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id:doc.id})
      });
      setlinks(docs)
    })
  }

  useEffect(()=>{
    call();
  }, [])  

  const handleInputChange = (e)=>{
    const { name, value } = e.target;
    setValues({...values, [name]:value})
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    add(values)
  }

  return (
    <Layout>
        <div className="Add">
          <SEO title="Page two" />
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>

          <form >
            <input type="text" onChange={handleInputChange} name="Titulo"/>
            <input type="text" onChange={handleInputChange} name="Imagen"/>
            <button onClick={handleSubmit}>Hello</button>
          </form>

          <div className="test">
            {links.map((link)=>(
              <div key={link.id}>
                <p>{link.Titulo}</p>
              </div>
            ))}
          </div>
        </div>
    </Layout>
  )
}

export default SecondPage

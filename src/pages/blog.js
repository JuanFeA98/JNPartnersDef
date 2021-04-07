import React, { useState, useEffect } from 'react';

import Layout from '../components/layout'

import '../styles/blog.css'

import {db} from "../db"


export default function Blog() {
   
    const initialValues = {
        Titulo: '',
        Imagen: ''
      }
    
      const [values, setValues] = useState(initialValues);
      const [links, setlinks] = useState([]);
    
        
    useEffect(()=>{
        call();
    }, [])  


    const call = async(e)=>{
        db.collection('prueba').onSnapshot((querySnapshot)=>{
          const docs = []
          querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(), id:doc.id})
          });
          setlinks(docs)
        })
      }
   
   
    return (
        <Layout>
            <div className="Blog">
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

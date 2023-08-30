import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../App";
import { storageRef, imageRef } from "../../firebase";
import { auth } from "../../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

export default function Account() {
    const {createUser, setUserUpdate} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    let fileItem = useRef(null)
    let fileName = useRef(null)
    let newImageRef = useRef(null)
    let metadata = useRef(null)
    let url = useRef(null)

    const getFile = e => {
        fileItem.current = e.target.files[0]
        fileName.current = fileItem.current.name
        newImageRef.current = ref(imageRef, `${fileName.current}`)
        metadata.current = {
            contentType: `${fileItem.current.type}`
        }
    }

    const uploadFile = () => {
          uploadBytes(newImageRef.current, fileItem.current, metadata.current)
                .then(snapshot => {
                    setIsLoading(true)
                    return getDownloadURL(snapshot.ref)
                })
                .then(downLoadURL => {
                     updateProfile(auth.currentUser, {
                        photoURL: `${downLoadURL}`,
                        displayName: `${userInfo.username}`
                    })
                    setTimeout(() => {
                        sessionStorage.setItem('firebase:authUser:AIzaSyBPIoj-qEYzyrTSNVbsbv4d6wiEwePw29U:[DEFAULT]', JSON.stringify(auth.currentUser))
                        setUserUpdate(prev => !prev)
                        setIsLoading(false)
                    }, 1000);
                })
                
          uploadBytes()
    }

    useEffect(() => {
        setUserInfo({username: createUser?.displayName, email: createUser?.email})
    }, [createUser])

    const onChange = e => {
       const {value, name} = e.target
       setUserInfo(prev => {
        return {
            ...prev,
            [name] : value
        }})
    }

    console.log(userInfo)

    return (
        <section className="account-info">
            <h2 className="account-greeting">Hello, {createUser?.displayName}</h2>
            <div className="profile-pic-container">
                <img src={createUser?.photoURL} alt="" className="account-picture"/>
                <label htmlFor="file-upload" className="custom-upload"></label>
                <input 
                    id="file-upload" 
                    type="file" 
                    onChange={getFile}
                    accept="image/png, image/jpeg"
                    />
            </div>

            <div className="username-container">
                <label htmlFor="" className="username-label">User name</label>
                <input 
                    type="text" 
                    value={userInfo?.username}
                    name="username"
                    onChange={onChange}
                    /> 
            </div>
            
            <div className="email-container">
                <label htmlFor="" className="email-label">Email</label>
                <input 
                    type="text" 
                    value={userInfo?.email}
                    name="email"
                    onChange={onChange}
                    />  
            </div>
           
            <div className="account-cards-container">
                <label htmlFor="" className="cards-label">Cards</label>
                <select name="" id="">
                    <option value="">**1111 | 08/23</option>
                    <option value="">**1234 | 08/23</option>
                    <option value="">**4545 | 08/23</option>
                </select>  
            </div>
            

            <button onClick={uploadFile}>{isLoading ?
                <div className="loading-svg">
                    <img src="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2FRolling-1s-200px.svg?alt=media&token=fa24a331-dae2-429e-9d8b-f7e585ef3a97" alt="" />
                </div>
                :
                "Save changes"
            }</button>
            
        </section>
      
    )
}
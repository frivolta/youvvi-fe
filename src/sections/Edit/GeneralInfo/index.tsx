import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, profileSelector } from "../../../app/profile/profileSlice";
import { Button, Card, Input, LoadingScreen } from "../../../components";
import { H2 } from "../../../styles";
import { BottomNotesForm, ContactInfoForm, GeneralInfoForm } from "./components";


export const GeneralInfo = ()=>{
    const {isLoading, currentProfile} = useSelector(profileSelector);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchProfile());
      }, [dispatch]);
    
    
const pageContent = <>
<GeneralInfoForm name={currentProfile.profile.name} photoUrl={currentProfile.profile.photoUrl} workTitle={currentProfile.profile.workTitle} biography={currentProfile.profile.biography}/>
<ContactInfoForm website={currentProfile.profile.website} phone={currentProfile.profile.phone} email={currentProfile.profile.email}/>
<BottomNotesForm bottomNotes={currentProfile.profile.bottomNotes}/>
</>
    return !isLoading ? pageContent : <LoadingScreen loadingText="Loading your profile"/>
}
import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, getUserName } from "../firebase";
import ScrollBar from "../components/scrollbar";

const Dashboard: NextPage = () => {
    const router = useRouter();
    var uName:any;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            toast("Welcome, " + user.displayName);
        } else {
            router.push('/login');
        }
    });

    useEffect(() => {
        if(auth.currentUser) {
            uName = auth.currentUser.displayName; 
            console.log(uName);
        } else {
            toast.error("Logged Out");
            router.push('/login');
        }
    });

    return (
        <div>
            <ScrollBar />
            <h1>Dashboard</h1>
            <h1>{getUserName()}</h1>
        </div>
    );
}

export default Dashboard;
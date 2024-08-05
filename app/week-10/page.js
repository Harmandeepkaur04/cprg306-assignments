"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";




export default function SignInPage(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }

    }
    async function handleSignOut(){
        try {
         await firebaseSignOut();   
        } catch (error) {
            console.log(error);
        }

    }
    //console.dir(user); To view user data donot use can compromise data

    return(
        <main>
            <header>
                <h1 className="text-4xl font-bold mb-5"> Shopping List App </h1>
            </header>
            { user ? (
                // User is logged in ? if : else
                <div className="text-lg">
                    <p className="m-2">Signed in as {user.displayName}({user.email})</p>
                    <button onClick={handleSignOut} className="text-lg bg-blue-500 rounded
                     m-2 hover:bg-blue-300 ">
                    Sign Out
                    </button>
                    <p><Link href="/week-10/shopping-list" className="text-lg
                     m-2 hover-underline ">Continue to your Shopping List</Link></p>
                </div>
            ) : (
                // User is not logged in
                <div className="text-xl">
                    <button className=" text-lg bg-blue-500 rounded
                     m-2 hover:bg-blue-300 " onClick={handleSignIn}>
                        Sign In
                    </button>
                </div>
            ) }
        </main>
    );

}
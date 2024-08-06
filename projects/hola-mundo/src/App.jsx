import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const users=[
    {
        userName:'midudev',
        name:'Miguel Angel duran',
        initialIsFollowing:true
    },
    {
        userName:'pheralb',
        name:'Pablo Hernandez',
        initialIsFollowing:false
    },
    {
        userName:'holasoygerman',
        name:'German garmendia',
        initialIsFollowing:true
    }
    
  ]
  return (
    <section className="App">
    {
        users.map(user=>{
            const {userName,name,initialIsFollowing}=user
            return(
                <TwitterFollowCard key={userName} initialIsFollowing={initialIsFollowing} userName={userName} >
                    {name}
                </TwitterFollowCard>

            )

        })
    }
     
    </section>
  );
}

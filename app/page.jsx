"use client";
import { useState, useEffect } from "react";
import gallery from "./components/data.json";
import Masonry from "./components/Masonry";
import Search from "./components/Search";
import SignInPage from "./signin/page";
import "./style.css";

import { auth } from "./config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Header from "./components/Header";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState(gallery);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const filteredImages = gallery.filter((img) => {
      const nameMatch = img.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const descriptionMatch = img.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return nameMatch || descriptionMatch;
    });
    setFilteredImages(filteredImages);
  }, [searchQuery]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <main className=''>
      {user ? (
        <div>
          <Header user={user} logOut={logOut} />
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Masonry
            imageUrls={filteredImages}
            setImageUrls={setFilteredImages}
            columnCount='4'
          />
        </div>
      ) : (
        <div className='mx-8 md:mx-0 flex items-center justify-center h-screen '>
          <SignInPage />
        </div>
      )}
    </main>
  );
}
